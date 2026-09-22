import localWpJson from "@/data/wp-json.json";

function getApiBaseUrl() {
  const envUrl = process.env.NEXT_PUBLIC_WORDPRESS_API_URL;
  if (envUrl) {
    return envUrl;
  }
  if (
    process.env.VERCEL ||
    process.env.VERCEL_URL ||
    (typeof window !== "undefined" &&
      (window.location.origin.includes("vercel.app") ||
        window.location.origin.includes("crm-mokup")))
  ) {
    const host = process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : typeof window !== "undefined"
      ? window.location.origin
      : "https://crm-mokup.vercel.app";
    return `${host}/wp-json.json`;
  }
  return "http://localhost/gripcrm-backend/wp-json";
}

async function fetchApiEndpoint(endpointPath) {
  const baseUrl = getApiBaseUrl();

  // If base URL points directly to a .json file (e.g. wp-json.json)
  if (baseUrl.endsWith(".json")) {
    if (typeof window !== "undefined") {
      try {
        const res = await fetch(baseUrl, { cache: "no-store" });
        if (res.ok) {
          const data = await res.json();
          return { ok: true, data };
        }
      } catch (err) {
        console.warn(`[fetchApiEndpoint] Error fetching json from ${baseUrl}:`, err);
      }
    }
    return { ok: true, data: localWpJson };
  }

  // Normal REST endpoint call
  try {
    const fullUrl = `${baseUrl.replace(/\/$/, "")}${
      endpointPath.startsWith("/") ? endpointPath : `/${endpointPath}`
    }`;
    const res = await fetch(fullUrl, { cache: "no-store" });
    if (res.ok) {
      const data = await res.json();
      return { ok: true, data };
    }
  } catch (error) {
    // Network/Offline fallback
  }

  // Fallback to local wp-json.json if live API call failed
  return { ok: true, data: localWpJson };
}


/**
 * Fetch Home Page Content & Fields
 * GET /gripcrm/v1/page/home
 */
export async function fetchHomePageData() {
  try {
    const { data } = await fetchApiEndpoint("/gripcrm/v1/page/home");
    return {
      page: data?.page || null,
      fields: data?.fields || null,
      error: null,
    };
  } catch (error) {
    console.error("Error in fetchHomePageData:", error);
    return { page: null, fields: null, error: error.message };
  }
}

/**
 * Fetch Global Theme Options (Header / Footer)
 * GET /gripcrm/v1/options
 */
export async function fetchGlobalOptions() {
  try {
    const { data } = await fetchApiEndpoint("/gripcrm/v1/options");
    return {
      options: data?.options || null,
      error: null,
    };
  } catch (error) {
    console.error("Error in fetchGlobalOptions:", error);
    return { options: null, error: error.message };
  }
}

/**
 * Fetch Pricing Plans
 * GET /gripcrm/v1/plans
 */
export async function fetchPricingPlans() {
  try {
    const { data } = await fetchApiEndpoint("/gripcrm/v1/plans");
    return {
      plans: data?.plans || [],
      error: null,
    };
  } catch (error) {
    console.error("Error in fetchPricingPlans:", error);
    return { plans: [], error: error.message };
  }
}

/**
 * Fetch Feedbacks
 * GET /gripcrm/v1/feedbacks
 */
export async function fetchFeedbacks() {
  try {
    const { data } = await fetchApiEndpoint("/gripcrm/v1/feedbacks");
    return {
      feedbacks: data?.feedbacks || [],
      error: null,
    };
  } catch (error) {
    console.error("Error in fetchFeedbacks:", error);
    return { feedbacks: [], error: error.message };
  }
}

/**
 * Fetch FAQs
 * GET /gripcrm/v1/faqs
 */
export async function fetchFaqs() {
  try {
    const { data } = await fetchApiEndpoint("/gripcrm/v1/faqs");
    return {
      faqs: (data?.faqData && data.faqData.length > 0)
        ? data.faqData
        : (data?.faqs || (Array.isArray(data) ? data : [])),
      fields: data?.fields || data || null,
      data: data || null,
      hero: data?.hero || null,
      navItems: data?.navItems || [],
      faqData: data?.faqData || [],
      ctaContent: data?.ctaContent || null,
      error: null,
    };
  } catch (error) {
    console.error("Error in fetchFaqs:", error);
    return { faqs: [], fields: null, data: null, error: error.message };
  }
}

/**
 * Fetch Single Page Data by Slug
 * GET /gripcrm/v1/page/:slug
 */
export async function fetchPageBySlug(slug) {
  try {
    const { data } = await fetchApiEndpoint(`/gripcrm/v1/page/${slug}`);
    return {
      page: data?.page || null,
      fields: data?.fields || null,
      error: null,
    };
  } catch (error) {
    console.error(`Error in fetchPageBySlug (${slug}):`, error);
    return { page: null, fields: null, error: error.message };
  }
}

/**
 * Helper to fetch Home Page, Options, Plans, Feedbacks, and FAQs in parallel
 */
export async function fetchAllGripCrmData() {
  const [homeResult, optionsResult, plansResult, feedbacksResult, faqsResult] =
    await Promise.all([
      fetchHomePageData(),
      fetchGlobalOptions(),
      fetchPricingPlans(),
      fetchFeedbacks(),
      fetchFaqs(),
    ]);

  return {
    page: homeResult.page,
    fields: homeResult.fields,
    options: optionsResult.options,
    plans: plansResult.plans,
    feedbacks: feedbacksResult.feedbacks,
    faqs: faqsResult.faqs,
    errors: {
      home: homeResult.error,
      options: optionsResult.error,
      plans: plansResult.error,
      feedbacks: feedbacksResult.error,
      faqs: faqsResult.error,
    },
  };
}

/**
 * Fetch Pricing Page Data and Pricing Plans in parallel
 */
export async function fetchPricingPageData() {
  const [pageResult, plansResult] = await Promise.all([
    fetchPageBySlug("pricing"),
    fetchPricingPlans(),
  ]);

  return {
    page: pageResult.page,
    fields: pageResult.fields,
    plans: plansResult.plans,
    errors: {
      page: pageResult.error,
      plans: plansResult.error,
    },
  };
}


