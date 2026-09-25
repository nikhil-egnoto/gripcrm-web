"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { fetchHomePageData, fetchGlobalOptions, fetchPricingPlans, fetchFeedbacks, fetchFaqs, fetchBlogData } from "@/lib/api";

const GripDataContext = createContext({
  page: null,
  fields: null,
  options: null,
  plans: [],
  feedbacks: [],
  faqs: [],
  blogs: [],
  loading: true,
  error: null,
  refetchData: () => { },
});

export function GripDataProvider({ children, initialData = {} }) {
  const [page, setPage] = useState(initialData?.page || null);
  const [fields, setFields] = useState(initialData?.fields || null);
  const [options, setOptions] = useState(initialData?.options || null);
  const [plans, setPlans] = useState(initialData?.plans || []);
  const [feedbacks, setFeedbacks] = useState(initialData?.feedbacks || []);
  const [faqs, setFaqs] = useState(initialData?.faqs || []);
  const [blogs, setBlogs] = useState(initialData?.blogs || []);
  const [loading, setLoading] = useState(
    !initialData?.fields && !initialData?.options
  );
  const [error, setError] = useState(null);

  const loadAllData = async () => {
    try {
      // 1. Fetch Home Page Content & Fields
      const homeRes = await fetchHomePageData();
      if (homeRes?.page) setPage(homeRes.page);
      if (homeRes?.fields) setFields(homeRes.fields);

      // 2. Fetch Global Theme Options (Header / Footer)
      const optionsRes = await fetchGlobalOptions();
      if (optionsRes?.options) setOptions(optionsRes.options);

      // 3. Fetch Pricing Plans
      const plansRes = await fetchPricingPlans();
      if (plansRes?.plans?.length > 0) setPlans(plansRes.plans);

      // 4. Fetch Feedbacks
      const feedbacksRes = await fetchFeedbacks();
      if (feedbacksRes?.feedbacks?.length > 0) setFeedbacks(feedbacksRes.feedbacks);

      // 5. Fetch FAQs
      const faqsRes = await fetchFaqs();
      if (faqsRes?.faqs?.length > 0) setFaqs(faqsRes.faqs);

      // 6. Fetch Blog
      const blogRes = await fetchBlogData();
      if (blogRes?.blogs?.length > 0) setBlogs(blogRes.blogs);
    } catch (err) {
      console.error("GripDataProvider error:", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Only fetch client-side if initialData was not provided via SSR
    if (!initialData?.fields && !initialData?.options) {
      loadAllData();
    }
  }, []);

  return (
    <GripDataContext.Provider
      value={{
        page,
        fields,
        options,
        plans,
        feedbacks,
        faqs,
        blogs,
        loading,
        error,
        refetchData: loadAllData,
      }}
    >
      {children}
    </GripDataContext.Provider>
  );
}

export const useGripData = () => useContext(GripDataContext);
