"use client";

import { useState, useEffect, useMemo, useCallback } from "react";
import { Plus, Minus, HelpCircle, RotateCcw } from "lucide-react";
import Cta from "@/components/layout/Cta";
import Grainient from "@/components/ui/Grainient";
import { fetchFaqs } from "@/lib/api";

export default function Faqs() {
    const [pageData, setPageData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [activeNav, setActiveNav] = useState("");
    const [openItemId, setOpenItemId] = useState(null);

    const getFaqs = useCallback(async () => {
        setLoading(true);
        setError(null);
        try {
            const res = await fetchFaqs();
            if (res?.error) {
                setError(res.error);
                setPageData(null);
            } else {
                setPageData(res);
            }
        } catch (err) {
            console.error("Error fetching faqs:", err);
            setError(err?.message || "Failed to load FAQs");
            setPageData(null);
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        getFaqs();
    }, [getFaqs]);

    // Extract raw FAQ list from API response
    const rawFaqData = useMemo(() => {
        return (
            (Array.isArray(pageData?.faqData) && pageData.faqData.length > 0)
                ? pageData.faqData
                : (Array.isArray(pageData?.faqs) && pageData.faqs.length > 0)
                    ? pageData.faqs
                    : (Array.isArray(pageData?.fields?.faqData) && pageData.fields.faqData.length > 0)
                        ? pageData.fields.faqData
                        : (Array.isArray(pageData?.fields?.faqs) && pageData.fields.faqs.length > 0)
                            ? pageData.fields.faqs
                            : []
        );
    }, [pageData]);

    // Normalized FAQ structure (categorized sections with questions)
    const faqData = useMemo(() => {
        if (!rawFaqData || rawFaqData.length === 0) return [];

        // Check if data is already structured as categories with items
        if (rawFaqData.some((sec) => Array.isArray(sec?.items))) {
            return rawFaqData.map((sec, sIdx) => ({
                id: sec.id || `section-${sIdx}`,
                title: sec.title || sec.label || sec.name || `Category ${sIdx + 1}`,
                items: (sec.items || []).map((item, iIdx) => ({
                    id: item.id || `faq-${sIdx}-${iIdx}`,
                    question: item.question || item.title || "",
                    answer: item.answer || item.content || item.description || ""
                }))
            }));
        }

        // Flat array of FAQs normalized into a single category
        return [
            {
                id: "general",
                title: "Frequently Asked Questions",
                items: rawFaqData.map((item, idx) => ({
                    id: item.id || `faq-${idx}`,
                    question: item.question || item.title || "",
                    answer: item.answer || item.content || item.description || ""
                }))
            }
        ];
    }, [rawFaqData]);

    // Navigation items managed from API (or derived from categories)
    const navItems = useMemo(() => {
        const rawNav =
            (Array.isArray(pageData?.navItems) && pageData.navItems.length > 0)
                ? pageData.navItems
                : (Array.isArray(pageData?.fields?.navItems) && pageData.fields.navItems.length > 0)
                    ? pageData.fields.navItems
                    : (Array.isArray(pageData?.fields?.faq_categories) && pageData.fields.faq_categories.length > 0)
                        ? pageData.fields.faq_categories
                        : [];

        if (rawNav.length > 0) {
            return rawNav.map((item, idx) => ({
                id: item.id || `category-${idx}`,
                label: item.label || item.title || item.name || `Category ${idx + 1}`
            }));
        }

        if (faqData.length > 1) {
            return faqData.map((sec) => ({
                id: sec.id,
                label: sec.title
            }));
        }

        return [];
    }, [pageData, faqData]);

    // Synchronize default active nav and initial open FAQ item
    useEffect(() => {
        if (faqData.length > 0) {
            setActiveNav((prev) => {
                const isValid =
                    navItems.some((n) => n.id === prev) ||
                    faqData.some((s) => s.id === prev);
                return isValid ? prev : (navItems[0]?.id || faqData[0]?.id || "");
            });

            setOpenItemId((prev) => {
                if (prev) return prev;
                return faqData[0]?.items?.[0]?.id || null;
            });
        }
    }, [faqData, navItems]);

    const toggleItem = (id) => {
        setOpenItemId((prev) => (prev === id ? null : id));
    };

    const handleNavClick = (id) => {
        setActiveNav(id);
        const element = document.getElementById(id);
        if (element) {
            if (typeof window !== "undefined" && window.lenis) {
                window.lenis.scrollTo(element, { offset: -90, duration: 1.2 });
            } else {
                element.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        }
    };

    // Hero and CTA Content from API
    const heroTitle = pageData?.hero?.title || pageData?.fields?.hero?.title || pageData?.fields?.faq_hero_title || pageData?.fields?.title || "FAQs";
    const heroSubtitle = pageData?.hero?.subtitle || pageData?.fields?.hero?.subtitle || pageData?.fields?.faq_hero_subtitle || pageData?.fields?.subtitle || "";

    const ctaContent = pageData?.ctaContent || pageData?.fields?.ctaContent || {
        title: pageData?.fields?.faq_cta_title || "Not Sure",
        title2: pageData?.fields?.faq_cta_title2 || "Where to Start?",
        description: pageData?.fields?.faq_cta_description || "Let us know what you need - we're happy to help!",
        btnText: pageData?.fields?.faq_cta_btn_text || "Take A Tour",
        btnLink: pageData?.fields?.faq_cta_btn_link || "#"
    };

    return (
        <main className="bg-blue-50 relative min-h-screen">
            <section className="py-16 md:py-24 px-4">
                <div className="container mx-auto space-y-10 md:space-y-15">
                    {/* Header Section */}
                    <div className="text-center">
                        {loading ? (
                            <div className="animate-pulse space-y-4 max-w-2xl mx-auto">
                                <div className="h-10 sm:h-12 bg-neutral-200/80 rounded-xl w-44 sm:w-60 mx-auto"></div>
                                <div className="h-4 bg-neutral-200/70 rounded-md w-full mx-auto"></div>
                                <div className="h-4 bg-neutral-200/70 rounded-md w-4/5 mx-auto"></div>
                            </div>
                        ) : (
                            <>
                                <h1 className="font-spaceGrotesk text-4xl lg:text-5xl leading-[1.2] font-bold text-neutral-900 reveal-on-scroll">
                                    {heroTitle}
                                    <svg
                                        width="110"
                                        height="10"
                                        viewBox="0 0 110 10"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="mx-auto mt-4 text-red-500"
                                    >
                                        <path
                                            d="M55.4214 3.042C56.6044 2.94 79.4965 0.883309 91.9777 0.247303C97.256 -0.0306999 102.543 -0.0107027 107.775 0.0119642C108.546 0.0399645 109.831 0.643972 109.957 1.17664C110.146 2.00532 109.687 3.22 109.099 3.842C107.496 5.52202 105.364 6.02869 103.164 6.12003C95.0808 6.51403 86.9996 6.96804 78.9141 7.30271C58.3441 8.15405 37.7152 8.88805 17.1435 9.67939C13.1835 9.8434 9.16523 9.89006 5.20303 9.99406C3.22303 10.0761 1.54828 9.30873 0.399327 7.68204C-0.0599231 7.04337 -0.0967732 5.79002 0.155127 5.00201C0.359177 4.45534 1.39208 3.99467 2.05208 3.96734C19.5421 3.244 53.2131 1.89332 54.0695 1.81065C55.3169 1.69065 54.2378 3.14266 55.4208 3.04133L55.4214 3.042Z"
                                            fill="currentColor"
                                        ></path>
                                    </svg>
                                </h1>
                                {heroSubtitle && (
                                    <p className="max-w-4xl mx-auto mt-8 sm:mt-10 text-neutral-700 text-base leading-[1.9] font-normal reveal-on-scroll">
                                        {heroSubtitle}
                                    </p>
                                )}
                            </>
                        )}
                    </div>

                    {/* Loading Skeleton */}
                    {loading && (
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start animate-pulse">
                            {/* Quick Nav Sidebar Skeleton */}
                            <div className="hidden lg:block lg:col-span-4 lg:sticky lg:top-8 reveal-on-scroll">
                                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                                    <div className="h-6 bg-neutral-200 rounded w-28 mb-8"></div>
                                    <div className="space-y-6">
                                        {[1, 2, 3, 4, 5].map((i) => (
                                            <div key={i} className="flex items-center gap-3">
                                                <span className="w-4 h-4 rounded-full bg-neutral-200 shrink-0"></span>
                                                <div
                                                    className="h-4 bg-neutral-200 rounded"
                                                    style={{ width: `${55 + (i % 4) * 12}%` }}
                                                ></div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* FAQ Content Main Column Skeleton */}
                            <div className="lg:col-span-8">
                                <div className="reveal-on-scroll bg-transparent sm:bg-white rounded-2xl sm:p-8 md:p-12 space-y-10">
                                    {/* Category 1 */}
                                    <div className="space-y-5">
                                        <div className="h-7 sm:h-8 bg-neutral-200 rounded-lg w-52 mb-6"></div>
                                        {[1, 2, 3].map((i) => (
                                            <div
                                                key={`skel-1-${i}`}
                                                className="border border-neutral-200 rounded-lg p-5 sm:p-6 bg-white flex items-center justify-between gap-4"
                                            >
                                                <div
                                                    className="h-5 bg-neutral-200 rounded"
                                                    style={{ width: `${60 + (i % 3) * 15}%` }}
                                                ></div>
                                                <div className="w-9 h-6 rounded-full bg-neutral-200 shrink-0"></div>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Category 2 */}
                                    <div className="space-y-5 pt-4">
                                        <div className="h-7 sm:h-8 bg-neutral-200 rounded-lg w-60 mb-6"></div>
                                        {[1, 2].map((i) => (
                                            <div
                                                key={`skel-2-${i}`}
                                                className="border border-neutral-200 rounded-lg p-5 sm:p-6 bg-white flex items-center justify-between gap-4"
                                            >
                                                <div
                                                    className="h-5 bg-neutral-200 rounded"
                                                    style={{ width: `${65 - (i % 2) * 15}%` }}
                                                ></div>
                                                <div className="w-9 h-6 rounded-full bg-neutral-200 shrink-0"></div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Not Found / Empty State */}
                    {!loading && (faqData.length === 0 || error) && (
                        <div className="max-w-xl mx-auto bg-white rounded-3xl p-8 sm:p-12 text-center shadow-[0_4px_25px_rgba(0,0,0,0.03)] border border-gray-100 my-8">
                            <div className="w-16 h-16 rounded-full bg-neutral-100 text-neutral-700 flex items-center justify-center mx-auto mb-6">
                                <HelpCircle className="size-8" />
                            </div>
                            <h2 className="font-spaceGrotesk text-2xl sm:text-3xl font-bold text-neutral-900 mb-3">
                                Data Not Found
                            </h2>
                            <p className="text-neutral-600 text-base leading-relaxed mb-8 max-w-md mx-auto">
                                {error || "We couldn't find any frequently asked questions at the moment. Please check back later or try reloading."}
                            </p>
                            <button
                                type="button"
                                onClick={getFaqs}
                                className="group lg:px-5 px-4 rounded-lg border-neutral-900 text-sm font-semibold items-center gap-2.5 transition-all cursor-pointer bg-neutral-900 border-2 text-neutral-100 hover:text-neutral-900 hover:bg-neutral-100 inline-flex py-2.5 shadow-sm"
                            >
                                <RotateCcw className="size-4 group-hover:-rotate-90 transition-transform duration-300" />
                                <span>Reload FAQs</span>
                            </button>
                        </div>
                    )}

                    {/* Loaded FAQ Content Grid */}
                    {!loading && faqData.length > 0 && (
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                            {/* Quick Nav Sidebar (if navigation items available) */}
                            {navItems.length > 0 && (
                                <div className="hidden lg:block lg:col-span-4 lg:sticky lg:top-8 reveal-on-scroll">
                                    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                                        <h2 className="font-spaceGrotesk text-xl font-semibold text-neutral-900 mb-8">
                                            Quick Nav
                                        </h2>
                                        <nav className="space-y-7">
                                            {navItems.map((item) => {
                                                const isActive = activeNav === item.id;
                                                return (
                                                    <button
                                                        key={item.id}
                                                        type="button"
                                                        onClick={() => handleNavClick(item.id)}
                                                        className={`w-full text-left flex items-center gap-3 transition-colors text-sm cursor-pointer select-none group ${isActive
                                                            ? "text-neutral-900 font-semibold"
                                                            : "text-neutral-600 hover:text-neutral-900 font-normal"
                                                            }`}
                                                    >
                                                        {/* Radio button styling */}
                                                        <span className="relative flex items-center justify-center shrink-0 w-4 h-4 rounded-full border border-neutral-800 transition-colors">
                                                            {isActive && (
                                                                <span className="w-2 h-2 rounded-full bg-neutral-900"></span>
                                                            )}
                                                        </span>
                                                        <span>{item.label}</span>
                                                    </button>
                                                );
                                            })}
                                        </nav>
                                    </div>
                                </div>
                            )}

                            {/* FAQ Content Main Column */}
                            <div className={navItems.length > 0 ? "lg:col-span-8" : "lg:col-span-12 max-w-4xl mx-auto w-full"}>
                                <div className="bg-transparent sm:bg-white rounded-2xl sm:p-4 sm:p-8 md:p-12 space-y-5">
                                    {faqData.map((section) => (
                                        <div
                                            key={section.id}
                                            id={section.id}
                                            className="scroll-mt-10 mt-10 sm:mt-20 first:mt-0 space-y-5 sm:space-y-8"
                                        >
                                            <h2 className="font-spaceGrotesk text-xl sm:text-3xl font-semibold text-neutral-900 reveal-on-scroll">
                                                {section.title}
                                            </h2>
                                            <div className="space-y-5">
                                                {section.items.map((item) => {
                                                    const isOpen = openItemId === item.id;
                                                    return (
                                                        <div
                                                            key={item.id}
                                                            className="reveal-on-scroll border border-neutral-300 rounded-lg overflow-hidden transition-all bg-white shadow-xs"
                                                        >
                                                            <button
                                                                type="button"
                                                                onClick={() => toggleItem(item.id)}
                                                                className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer select-none"
                                                                aria-expanded={isOpen}
                                                            >
                                                                <span className="font-semibold text-neutral-900 text-base sm:text-xl leading-snug">
                                                                    {item.question}
                                                                </span>
                                                                <span
                                                                    className={`shrink-0 w-9 h-6 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-900 hover:bg-neutral-200 transition-transform duration-300 ${isOpen ? "rotate-180 bg-neutral-100" : ""
                                                                        }`}
                                                                >
                                                                    {isOpen ? (
                                                                        <Minus className="w-4 h-4 stroke-[2.5]" />
                                                                    ) : (
                                                                        <Plus className="w-4 h-4 stroke-[2.5]" />
                                                                    )}
                                                                </span>
                                                            </button>
                                                            <div
                                                                className={`grid transition-all duration-300 ease-in-out ${isOpen
                                                                    ? "grid-rows-[1fr] opacity-100"
                                                                    : "grid-rows-[0fr] opacity-0"
                                                                    }`}
                                                            >
                                                                <div className="overflow-hidden">
                                                                    <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-0 text-neutral-700 text-sm sm:text-base leading-8">
                                                                        {item.answer}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </section>

            {/* Bottom CTA Section */}
            {ctaContent?.title && (
                <section className="bg-neutral-950 py-16 md:py-24 overflow-hidden relative select-none px-4">
                    <div className="absolute top-0 w-full h-full left-0 opacity-[0.15]">
                        <Grainient
                            color1="#33BDDB"
                            color2="#8A5285"
                            color3="#FF7300 "
                            timeSpeed={1.5}
                            colorBalance={-0.21}
                            warpStrength={1}
                            warpFrequency={5}
                            warpSpeed={2}
                            warpAmplitude={50}
                            blendAngle={0}
                            blendSoftness={0.05}
                            rotationAmount={500}
                            noiseScale={2}
                            grainAmount={0.1}
                            grainScale={2}
                            grainAnimated={false}
                            contrast={1.5}
                            gamma={1}
                            saturation={1}
                            centerX={0}
                            centerY={0}
                            zoom={0.9}
                        />
                    </div>
                    <Cta
                        title={ctaContent.title}
                        title2={ctaContent.title2}
                        description={ctaContent.description}
                        btnText={ctaContent.btnText || "Take A Tour"}
                        btnLink={ctaContent.btnLink || "#"}
                    />
                </section>
            )}
        </main>
    );
}
