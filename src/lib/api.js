const API_BASE_URL =
  process.env.NEXT_PUBLIC_WORDPRESS_API_URL ||
  "http://localhost/gripcrm-backend/wp-json";

/**
 * Fetch Home Page Content & Fields
 * GET /gripcrm/v1/page/home
 */
export async function fetchHomePageData() {
  try {
    const res = await fetch(`${API_BASE_URL}/gripcrm/v1/page/home`, {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error(`Failed to fetch home page: ${res.status} ${res.statusText}`);
    }
    const data = await res.json();
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
    const optionsRes = await fetch(`${API_BASE_URL}/gripcrm/v1/options`, {
      cache: "no-store",
    });
    if (!optionsRes.ok) {
      throw new Error(`Failed to fetch options: ${optionsRes.status} ${optionsRes.statusText}`);
    }
    const data = await optionsRes.json();
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
    const plansRes = await fetch(`${API_BASE_URL}/gripcrm/v1/plans`, {
      cache: "no-store",
    });
    if (!plansRes.ok) {
      throw new Error(`Failed to fetch plans: ${plansRes.status} ${plansRes.statusText}`);
    }
    const data = await plansRes.json();
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
    const feedbacksRes = await fetch(`${API_BASE_URL}/gripcrm/v1/feedbacks`, {
      cache: "no-store",
    });
    if (!feedbacksRes.ok) {
      throw new Error(`Failed to fetch feedbacks: ${feedbacksRes.status} ${feedbacksRes.statusText}`);
    }
    const data = await feedbacksRes.json();
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
    const faqsRes = await fetch(`${API_BASE_URL}/gripcrm/v1/faqs`, {
      cache: "no-store",
    });
    if (!faqsRes.ok) {
      throw new Error(`Failed to fetch faqs: ${faqsRes.status} ${faqsRes.statusText}`);
    }
    const data = await faqsRes.json();
    return {
      faqs: data?.faqs || data || [],
      error: null,
    };
  } catch (error) {
    console.error("Error in fetchFaqs:", error);
    return { faqs: [], error: error.message };
  }
}

/**
 * Fetch Single Page Data by Slug
 * GET /gripcrm/v1/page/:slug
 */
export async function fetchPageBySlug(slug) {
  try {
    const res = await fetch(`${API_BASE_URL}/gripcrm/v1/page/${slug}`, {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error(`Failed to fetch page '${slug}': ${res.status} ${res.statusText}`);
    }
    const data = await res.json();
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
  const [homeResult, optionsResult, plansResult, feedbacksResult, faqsResult] = await Promise.all([
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
