"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import Cta from "@/components/layout/Cta";

export default function Faqs() {
    const [activeNav, setActiveNav] = useState("general");
    const [openItemId, setOpenItemId] = useState("what-is-gripcrm");

    const toggleItem = (id) => {
        setOpenItemId((prev) => (prev === id ? null : id));
    };

    const Faqs = {
        title: "Not Sure",
        title2: "Where to Start?",
        description: "Let us know what you need - we're happy to help!"
    }

    const navItems = [
        { id: "general", label: "General Questions" },
        { id: "billing", label: "Account and Billing" },
        { id: "features", label: "Features and Functionality" },
        { id: "security", label: "Security and Data Privacy" },
        { id: "troubleshooting", label: "Troubleshooting and Support" },
        { id: "customization", label: "Customization and Settings" },
    ];

    const faqData = [
        {
            id: "general",
            title: "General Questions",
            items: [
                {
                    id: "what-is-gripcrm",
                    question: "What is GripCRM",
                    answer:
                        "GripCRM is a customer relationship management platform tailored specifically for steel-building businesses. It helps metal dealers streamline sales, manage customer data, track leads, and automate processes. The software improves business efficiency and communication with customers, building installers, steel part manufacturers, and dealers.",
                },
                {
                    id: "who-is-gripcrm-for",
                    question: "Who is GripCRM for?",
                    answer:
                        "GripCRM is designed for metal building manufacturers, steel component suppliers, sales reps, dealers, and contractors looking to manage customer pipelines, quotes, and project workflows in one unified platform.",
                },
                {
                    id: "how-do-i-sign-up",
                    question: "How do I sign up for GripCRM?",
                    answer:
                        "You can sign up directly on our website by clicking the 'Get Started' button. Follow the easy setup wizard to configure your account, import existing leads, and choose your subscription plan.",
                },
                {
                    id: "free-trial",
                    question: "Does GripCRM offer a free trial?",
                    answer:
                        "Yes! We offer a 14-day full-featured free trial with no credit card required so you can experience the full capabilities of GripCRM before subscribing.",
                },
            ],
        },
        {
            id: "billing",
            title: "Accounting and Billing",
            items: [
                {
                    id: "update-billing-info",
                    question: "How can I update my billing information?",
                    answer:
                        "You can update your payment method, billing address, and invoice preferences anytime from your Account Settings under the Billing & Invoicing section.",
                },
                {
                    id: "missed-payment",
                    question: "What happens if I miss a payment?",
                    answer:
                        "If a payment fails, we'll notify you via email and retry processing over a 7-day grace period. Your account data remains fully intact and accessible during this window.",
                },
                {
                    id: "change-subscription",
                    question: "Can I change my subscription plan?",
                    answer:
                        "Yes, you can upgrade or downgrade your plan at any time. Plan adjustments take effect immediately with automatic prorated credit applied to your next billing cycle.",
                },
                {
                    id: "cancel-subscription",
                    question: "How do I cancel my subscription?",
                    answer:
                        "You can cancel your subscription at any time from your account dashboard under Settings > Billing > Cancel Subscription. You will maintain access until the end of your billing cycle.",
                },
            ],
        },
        {
            id: "features",
            title: "Features and Functionality",
            items: [
                {
                    id: "estimator-integration",
                    question: "Does GripCRM integrate with 3D building estimators?",
                    answer:
                        "Yes, GripCRM natively integrates with leading 3D metal building estimation tools, allowing your team to generate accurate quotes and attach detailed specs straight into customer files.",
                },
                {
                    id: "lead-automation",
                    question: "How does automated lead tracking work?",
                    answer:
                        "Leads captured from your website forms, emails, or marketing campaigns are automatically ingested, scored, and routed to the right sales reps with automated follow-up reminders.",
                },
                {
                    id: "export-reports",
                    question: "Can I export customer and sales reports?",
                    answer:
                        "Absolutely. You can generate and export comprehensive sales reports, lead conversion analytics, and pipeline metrics into CSV, Excel, or PDF formats with custom date range filters.",
                },
            ],
        },
        {
            id: "security",
            title: "Security and Data Privacy",
            items: [
                {
                    id: "data-security",
                    question: "Is my company data secure with GripCRM?",
                    answer:
                        "We enforce enterprise-grade security protocols, including 256-bit AES encryption at rest and TLS 1.3 in transit, regular SOC 2 compliance audits, and automated continuous backups.",
                },
                {
                    id: "hosting-infrastructure",
                    question: "Where is GripCRM hosted?",
                    answer:
                        "GripCRM is hosted on secure Amazon Web Services (AWS) data centers with redundant backups, continuous monitoring, and a guaranteed 99.9% uptime SLA.",
                },
            ],
        },
        {
            id: "troubleshooting",
            title: "Troubleshooting and Support",
            items: [
                {
                    id: "contact-support",
                    question: "How do I contact GripCRM support?",
                    answer:
                        "Our dedicated support team is available via live chat in your dashboard, email at support@gripcrm.com, or phone during regular business hours.",
                },
                {
                    id: "technical-issues",
                    question: "What if I experience technical issues?",
                    answer:
                        "You can monitor active system performance at status.gripcrm.com or submit a priority ticket directly through our Help Center for immediate assistance.",
                },
            ],
        },
        {
            id: "customization",
            title: "Customization and Settings",
            items: [
                {
                    id: "pipeline-customization",
                    question: "Can I customize sales pipelines for my workflow?",
                    answer:
                        "Yes! You can create custom deal stages, add custom fields, tag structures, and define automated actions tailored to your specific metal building sales process.",
                },
                {
                    id: "user-permissions",
                    question: "Can I invite team members with custom permissions?",
                    answer:
                        "Yes, multi-user role management lets you define custom permission roles for admins, sales representatives, project managers, and view-only accounts.",
                },
            ],
        },
    ];

    const handleNavClick = (id) => {
        setActiveNav(id);
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    return (
        <main className="bg-blue-50 relative">
            <section className="py-16 md:py-24 px-4">
                <div className="container mx-auto space-y-10 md:space-y-15">
                    {/* Header Section */}
                    <div className="text-center">
                        <h1 className="font-spaceGrotesk text-4xl lg:text-5xl leading-[1.2] font-bold text-neutral-900">
                            FAQs
                            <svg width="110" height="10" viewBox="0 0 110 10" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-auto mt-4 text-red-500"><path d="M55.4214 3.042C56.6044 2.94 79.4965 0.883309 91.9777 0.247303C97.256 -0.0306999 102.543 -0.0107027 107.775 0.0119642C108.546 0.0399645 109.831 0.643972 109.957 1.17664C110.146 2.00532 109.687 3.22 109.099 3.842C107.496 5.52202 105.364 6.02869 103.164 6.12003C95.0808 6.51403 86.9996 6.96804 78.9141 7.30271C58.3441 8.15405 37.7152 8.88805 17.1435 9.67939C13.1835 9.8434 9.16523 9.89006 5.20303 9.99406C3.22303 10.0761 1.54828 9.30873 0.399327 7.68204C-0.0599231 7.04337 -0.0967732 5.79002 0.155127 5.00201C0.359177 4.45534 1.39208 3.99467 2.05208 3.96734C19.5421 3.244 53.2131 1.89332 54.0695 1.81065C55.3169 1.69065 54.2378 3.14266 55.4208 3.04133L55.4214 3.042Z" fill="currentColor"></path></svg>
                        </h1>
                        <p className="max-w-4xl mx-auto mt-10 m-auto text-neutral-700 text-base leading-[1.9] font-normal">
                            Find answers to your most common questions here to help you make informed decisions about managing your sales and customer data and whether to purchase GripCRM software.
                        </p>
                    </div>
                    {/* Content Layout Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                        {/* Quick Nav Sidebar */}
                        <div className="hidden lg:block lg:col-span-4 lg:sticky lg:top-8">
                            <div className="bg-white rounded-2xl p-6">
                                <h2 className="font-spaceGrotesk text-xl font-semibold text-neutral-900 mb-8">
                                    Quick Nav
                                </h2>
                                <nav className="space-y-7">
                                    {navItems.map((item) => {
                                        const isActive = activeNav === item.id;
                                        return (
                                            <button
                                                key={item.id}
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

                        {/* FAQ Content Main Column */}
                        <div className="lg:col-span-8">
                            <div className="bg-transparent sm:bg-white rounded-2xl sm:p-4 sm:p-8 md:p-12 space-y-5">
                                {faqData.map((section) => (
                                    <div key={section.id} id={section.id} className="scroll-mt-10 mt-10 sm:mt-20 first:mt-0 space-y-5 sm:space-y-8">
                                        <h2 className="font-spaceGrotesk text-xl sm:text-3xl font-semibold text-neutral-900">
                                            {section.title}
                                        </h2>
                                        <div className="space-y-5">
                                            {section.items.map((item) => {
                                                const isOpen = openItemId === item.id;
                                                return (
                                                    <div
                                                        key={item.id}
                                                        className="border border-neutral-500 rounded-lg overflow-hidden transition-all bg-white"
                                                    >
                                                        <button
                                                            onClick={() => toggleItem(item.id)}
                                                            className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer select-none"
                                                            aria-expanded={isOpen}
                                                        >
                                                            <span className="font-semibold text-neutral-900 text-base sm:text-xl leading-snug">
                                                                {item.question}
                                                            </span>
                                                            <span className={`shrink-0 w-9 h-6 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-900 hover:bg-neutral-200 transition-transform duration-300 ${isOpen ? "rotate-180 bg-neutral-100" : ""
                                                                }`}>
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
                </div>
            </section>
            <section className={`gradient-stage py-16 md:py-24 overflow-hidden relative select-none px-4`}>
                <div className="blob blob--1"></div>
                <div className="blob blob--2"></div>
                <div className="blob blob--3"></div>
                <div className="blob blob--4"></div>
                <div className="blob blob--5"></div>
                <Cta title={Faqs.title} title2={Faqs.title2} description={Faqs.description} />
            </section>
        </main>
    );
}
