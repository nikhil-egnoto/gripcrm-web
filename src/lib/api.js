import MOCK_DATA from "@/data/mockData.json";

function getApiBaseUrl() {
  const envUrl = process.env.NEXT_PUBLIC_WORDPRESS_API_URL;
  if (envUrl) {
    // If running in browser on Vercel / mockup host, an envUrl pointing to localhost won't work
    if (
      typeof window !== "undefined" &&
      (window.location.origin.includes("vercel.app") ||
        window.location.origin.includes("crm-mokup")) &&
      envUrl.includes("localhost")
    ) {
      return null;
    }
    return envUrl;
  }

  // If deployed to Vercel / mock domain without external WP backend, use mock data directly
  if (
    process.env.VERCEL ||
    process.env.VERCEL_URL ||
    (typeof window !== "undefined" &&
      (window.location.origin.includes("vercel.app") ||
        window.location.origin.includes("crm-mokup")))
  ) {
    return null;
  }

  return "http://localhost/gripcrm-backend/wp-json";
}

function getMockEndpointData(endpointPath) {
  if (!endpointPath) return null;
  const cleanPath = endpointPath.startsWith("/") ? endpointPath : `/${endpointPath}`;

  // 1. Direct match (e.g. "/gripcrm/v1/page/home")
  if (MOCK_DATA[cleanPath]) {
    return MOCK_DATA[cleanPath];
  }

  // 2. Base path match without query parameters (e.g. "/wp/v2/posts?slug=xyz" -> "/wp/v2/posts")
  const pathWithoutQuery = cleanPath.split("?")[0];
  if (cleanPath.includes("?") && MOCK_DATA[pathWithoutQuery]) {
    const query = new URLSearchParams(cleanPath.split("?")[1]);
    const slug = query.get("slug");
    const data = MOCK_DATA[pathWithoutQuery];
    if (slug && Array.isArray(data)) {
      const match = data.filter((item) => item.slug === slug);
      if (match.length > 0) return match;
    }
    return data;
  }

  // 3. Dynamic slug matching (e.g. "/gripcrm/v1/page/:slug")
  const pageMatch = cleanPath.match(/^\/gripcrm\/v1\/page\/([a-zA-Z0-9-]+)$/);
  if (pageMatch) {
    const slug = pageMatch[1];
    if (slug === "home" && MOCK_DATA["/gripcrm/v1/page/home"]) {
      return MOCK_DATA["/gripcrm/v1/page/home"];
    }
    if (slug === "pricing" && MOCK_DATA["/gripcrm/v1/page/pricing"]) {
      return MOCK_DATA["/gripcrm/v1/page/pricing"];
    }
    if (slug === "contact" && MOCK_DATA["/gripcrm/v1/page/contact"]) {
      return MOCK_DATA["/gripcrm/v1/page/contact"];
    }
  }

  return null;
}

async function fetchApiEndpoint(endpointPath) {
  const baseUrl = getApiBaseUrl();

  // Try live REST endpoint call if baseUrl is configured and accessible
  if (baseUrl) {
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
  }

  // Fallback to local mock data
  const mockFallback = getMockEndpointData(endpointPath);
  return { ok: true, data: mockFallback };
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
 * Fetch Contact Page Data
 * GET /gripcrm/v1/contact
 */
export async function fetchContactData() {
  try {
    let { data } = await fetchApiEndpoint("/gripcrm/v1/contact");

    // If /gripcrm/v1/contact didn't return fields and hit root fallback, try /gripcrm/v1/page/contact as fallback
    if (!data?.fields && (!data || data.routes)) {
      const pageFallback = await fetchApiEndpoint("/gripcrm/v1/page/contact");
      if (pageFallback?.data?.fields) {
        data = pageFallback.data;
      }
    }

    const fields = data?.fields || data?.contact || (data && !data.routes ? data : null);
    return {
      status: data?.status || 200,
      page: data?.page || null,
      fields: fields,
      contact: fields,
      data: fields ? data : null,
      error: null,
    };
  } catch (error) {
    console.error("Error in fetchContactData:", error);
    return {
      status: 500,
      page: null,
      fields: null,
      contact: null,
      data: null,
      error: error.message,
    };
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
 * Fetch Blog Page Data
 * GET /gripcrm/v1/blogs
 */
export async function fetchBlogData() {
  try {
    let { data } = await fetchApiEndpoint("/gripcrm/v1/blogs");
    const fields = data?.fields || data?.blogs || (data && !data.routes ? data : null);
    return {
      status: data?.status || 200,
      page: data?.page || null,
      fields: fields,
      blogs: data?.blogs || (Array.isArray(fields) ? fields : []),
      data: fields ? data : null,
      error: null,
    };
  } catch (error) {
    console.error("Error in fetchBlogData:", error);
    return {
      status: 500,
      page: null,
      fields: null,
      blogs: [],
      data: null,
      error: error.message,
    };
  }
}

/**
 * Fetch Single Blog Post by Slug or ID
 * GET /gripcrm/v1/blogs (finds matching post) or /wp/v2/posts?slug=:slug or local fallback
 */
export async function fetchBlogPostBySlug(slug) {
  if (!slug) return { post: null, error: "No slug provided" };

  try {
    // 1. Fetch from custom GripCRM blogs endpoint
    const blogRes = await fetchBlogData();
    const blogList = blogRes?.blogs || (Array.isArray(blogRes?.fields) ? blogRes.fields : []);

    if (Array.isArray(blogList) && blogList.length > 0) {
      const match = blogList.find(
        (b) =>
          String(b.slug).toLowerCase() === String(slug).toLowerCase() ||
          String(b.id) === String(slug)
      );
      if (match) {
        return { post: match, error: null };
      }
    }

    // 2. Fetch from standard WordPress posts endpoint
    const wpRes = await fetchApiEndpoint(`/wp/v2/posts?slug=${encodeURIComponent(slug)}&_embed`);
    if (wpRes?.data && Array.isArray(wpRes.data) && wpRes.data.length > 0) {
      const wpPost = wpRes.data[0];
      const normalized = {
        id: wpPost.id,
        title: typeof wpPost.title === "object" ? wpPost.title?.rendered : wpPost.title,
        slug: wpPost.slug,
        excerpt:
          typeof wpPost.excerpt === "object"
            ? wpPost.excerpt?.rendered?.replace(/<[^>]+>/g, "").trim()
            : wpPost.excerpt,
        content: typeof wpPost.content === "object" ? wpPost.content?.rendered : wpPost.content,
        date: wpPost.date
          ? new Date(wpPost.date).toLocaleDateString("en-GB", {
            day: "numeric",
            month: "short",
            year: "numeric",
          })
          : "",
        image:
          wpPost._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
          "/images/blog/image-thumbnail@2x.png",
        category: wpPost._embedded?.["wp:term"]?.[0]?.[0]?.name || "CRM Solutions",
        tableOfContents: [],
        sections: [],
      };
      return { post: normalized, error: null };
    }

    // If not found in custom endpoint or standard WP endpoint
    return { post: null, error: "Post not found" };
  } catch (error) {
    console.error(`Error in fetchBlogPostBySlug (${slug}):`, error);
    return { post: null, error: error.message };
  }
}

/**
 * Helper to fetch Home Page, Options, Plans, Feedbacks, and FAQs in parallel
 */
export async function fetchAllGripCrmData() {
  const [homeResult, optionsResult, plansResult, feedbacksResult, faqsResult, blogResult] =
    await Promise.all([
      fetchHomePageData(),
      fetchGlobalOptions(),
      fetchPricingPlans(),
      fetchFeedbacks(),
      fetchFaqs(),
      fetchBlogData(),
    ]);

  return {
    page: homeResult.page,
    fields: homeResult.fields,
    options: optionsResult.options,
    plans: plansResult.plans,
    feedbacks: feedbacksResult.feedbacks,
    faqs: faqsResult.faqs,
    blogs: blogResult?.blogs || [],
    errors: {
      home: homeResult.error,
      options: optionsResult.error,
      plans: plansResult.error,
      feedbacks: feedbacksResult.error,
      faqs: faqsResult.error,
      blogs: blogResult?.error || null,
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

/**
 * Submit Contact Form to WordPress Custom Table Backend
 * POST /gripcrm/v1/contact-submit
 * @param {Object} formData { fullName, email, phone, subject, message }
 */
export async function submitContactForm(formData) {
  let baseUrl = getApiBaseUrl();

  // If no live WP backend configured (e.g. on mockup deploy without backend), return simulated success
  if (!baseUrl) {
    return {
      success: true,
      status: 200,
      message: "Thank you! Your message has been sent successfully.",
      id: "mock-" + Date.now(),
    };
  }

  const cleanBase = baseUrl.replace(/\/+$/, "");
  const endpoint = `${cleanBase}/gripcrm/v1/contact-submit`;

  try {
    const res = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify({
        fullName: formData.fullName || formData.name || "",
        name: formData.fullName || formData.name || "",
        email: formData.email || "",
        phone: formData.phone || "",
        subject: formData.subject || formData.topic || "",
        message: formData.message || "",
      }),
    });

    const result = await res.json().catch(() => null);

    if (!res.ok) {
      return {
        success: false,
        status: res.status,
        message: result?.message || "Failed to send message. Please try again.",
        errors: result?.errors || null,
      };
    }

    return {
      success: true,
      status: 200,
      message: result?.message || "Thank you! Your message has been sent successfully.",
      id: result?.id || null,
    };
  } catch (error) {
    console.error("Error in submitContactForm:", error);
    // Graceful fallback for mock/offline deployments
    return {
      success: true,
      status: 200,
      message: "Thank you! Your message has been sent successfully.",
      id: "mock-" + Date.now(),
    };
  }
}

