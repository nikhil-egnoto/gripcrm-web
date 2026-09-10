"use client";

import { useState, Fragment } from "react";
import { Check, Info } from "lucide-react";
import Button from "@/components/ui/Button";

export default function ComparePlans() {
    const [billingCycle, setBillingCycle] = useState("monthly");

    const plans = [
        {
            key: "standard",
            name: "Standard",
            monthlyPrice: "$99/month per user",
            yearlyPrice: "$79/month per user",
            buttonText: "Start with Standard",
            buttonStyle: "bg-white text-neutral-900 border-neutral-900 hover:bg-neutral-900 hover:text-white",
        },
        {
            key: "professional",
            name: "Professional",
            monthlyPrice: "$149/month per user",
            yearlyPrice: "$119/month per user",
            buttonText: "Choose Professional",
            buttonStyle: "bg-neutral-900 text-white border-neutral-900 hover:bg-neutral-800",
        },
        {
            key: "enterprise",
            name: "Enterprise",
            monthlyPrice: "$299/month per user",
            yearlyPrice: "$239/month per user",
            buttonText: "Choose Enterprise",
            buttonStyle: "bg-white text-neutral-900 border-neutral-900 hover:bg-neutral-900 hover:text-white",
        },
        {
            key: "custom",
            name: "Custom",
            monthlyPrice: "Let's Talk",
            yearlyPrice: "Let's Talk",
            buttonText: "Talk to Sales",
            buttonStyle: "bg-white text-neutral-900 border-neutral-900 hover:bg-neutral-900 hover:text-white",
        },
    ];

    const categories = [
        {
            title: "Core CRM",
            features: [
                { name: "Sales Pipeline", description: "Manage and track deals seamlessly across custom stages.", standard: true, professional: true, enterprise: true, custom: true },
                { name: "Activity Logging", description: "Automatically log calls, meetings, emails, and tasks.", standard: true, professional: true, enterprise: true, custom: true },
                { name: "AI-powered Email Generator", description: "Generate personalized outreach emails with AI assistance.", standard: false, professional: true, enterprise: true, custom: true },
                { name: "Custom CRM Automation", description: "Automate repetitive lead assignment and workflow steps.", standard: false, professional: true, enterprise: true, custom: true },
                { name: "Advanced Account and Deal Management", description: "Enterprise account hierarchies and multi-currency deal routing.", standard: false, professional: false, enterprise: true, custom: true },
                { name: "Lead and Deal Tracking", description: "Real-time pipeline visibility and conversion tracking.", standard: true, professional: true, enterprise: true, custom: true },
                { name: "Sales Forecasting", description: "Predict future revenue based on historical conversion data.", standard: false, professional: true, enterprise: true, custom: true },
            ],
        },
        {
            title: "Communication",
            features: [
                { name: "Email Management", description: "Sync 2-way email inbox with contact records and deals.", standard: false, professional: true, enterprise: true, custom: true },
                { name: "Team Collaboration", description: "Shared team inboxes, internal notes, and @mentions.", standard: false, professional: false, enterprise: true, custom: true },
                { name: "Notifications", description: "Instant web and mobile alerts for high-priority deal actions.", standard: true, professional: true, enterprise: true, custom: true },
            ],
        },
        {
            title: "Reporting & Automation",
            features: [
                { name: "Reports & Analytics", description: "Custom dashboards and funnel analytics for deep insights.", standard: true, professional: true, enterprise: true, custom: true },
                { name: "Workflow Automation", description: "Trigger automated actions based on deal status changes.", standard: false, professional: true, enterprise: true, custom: true },
                { name: "Performance Tracking", description: "Track individual sales rep metrics and quota progress.", standard: false, professional: true, enterprise: true, custom: true },
            ],
        },
        {
            title: "Advanced Tools",
            features: [
                { name: "3D Estimator", description: "Interactive 3D proposal generator and instant price calculator.", standard: false, professional: true, enterprise: true, custom: true },
                { name: "Advanced Permissions", description: "Granular role-based access controls and custom data policies.", standard: false, professional: false, enterprise: true, custom: true },
                { name: "Custom Workflows", description: "Tailor complex multi-branch automation triggers for your business.", standard: false, professional: true, enterprise: true, custom: true },
            ],
        },
    ];

    return (
        <section className="bg-blue-50 py-16 md:py-24 relative overflow-hidden px-4 sm:px-6">
            <div className="container mx-auto relative z-10">
                {/* Section Title */}
                <div className="text-center max-w-4xl mx-auto px-4 mb-15">
                    <h2 className="inline-block font-spaceGrotesk text-4xl sm:text-5xl md:text-6xl font-bold text-neutral-900 leading-tight relative">
                        Compare Plans
                        <svg className="mx-auto mt-3 text-red-500" width="110" height="10" viewBox="0 0 110 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M55.4214 3.042C56.6044 2.94 79.4965 0.883309 91.9777 0.247303C97.256 -0.0306999 102.543 -0.0107027 107.775 0.0119642C108.546 0.0399645 109.831 0.643972 109.957 1.17664C110.146 2.00532 109.687 3.22 109.099 3.842C107.496 5.52202 105.364 6.02869 103.164 6.12003C95.0808 6.51403 86.9996 6.96804 78.9141 7.30271C58.3441 8.15405 37.7152 8.88805 17.1435 9.67939C13.1835 9.8434 9.16523 9.89006 5.20303 9.99406C3.22303 10.0761 1.54828 9.30873 0.399327 7.68204C-0.0599231 7.04337 -0.0967732 5.79002 0.155127 5.00201C0.359177 4.45534 1.39208 3.99467 2.05208 3.96734C19.5421 3.244 53.2131 1.89332 54.0695 1.81065C55.3169 1.69065 54.2378 3.14266 55.4208 3.04133L55.4214 3.042Z" fill="currentColor"></path>
                        </svg>
                    </h2>
                    <p className="mt-6 text-neutral-600 text-base font-normal leading-relaxed">
                        Compare features across plans to find the right fit for your team.
                    </p>
                </div>

                {/* Compare Table Wrapper */}
                <div className="bg-white border border-blue-300 overflow-hidden shadow-xs">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse min-w-3xl">
                            <thead>
                                <tr className="divide-x divide-blue-300">
                                    {/* Top-left cell */}
                                    <th className="w-1/3 p-6 align-top bg-white">
                                        <h3 className="text-xl font-semibold text-neutral-900">
                                            Compare plans
                                        </h3>
                                        <div className="mt-4 bg-neutral-50 p-1 rounded-full inline-flex items-center border border-neutral-300">
                                            <button
                                                type="button"
                                                onClick={() => setBillingCycle("monthly")}
                                                className={`px-4 py-1.5 text-xs font-semibold rounded-full transition-all duration-200 cursor-pointer ${billingCycle === "monthly"
                                                    ? "bg-neutral-700 text-neutral-50 shadow-xs"
                                                    : "text-neutral-700 hover:text-neutral-900"
                                                    }`}
                                            >
                                                Month
                                            </button>
                                            <button
                                                type="button"
                                                onClick={() => setBillingCycle("yearly")}
                                                className={`px-4 py-1.5 text-xs font-semibold rounded-full transition-all duration-200 cursor-pointer ${billingCycle === "yearly"
                                                    ? "bg-neutral-700 text-neutral-50 shadow-xs"
                                                    : "text-neutral-700 hover:text-neutral-900"
                                                    }`}
                                            >
                                                Yearly
                                            </button>
                                        </div>
                                    </th>

                                    {/* Plan Columns */}
                                    {plans.map((plan) => (
                                        <th key={plan.key} className="w-1/6 p-6 align-top bg-white">
                                            <h4 className=" text-base font-bold text-neutral-900">
                                                {plan.name}
                                            </h4>
                                            <p className="text-sm text-neutral-700 font-normal mt-1">
                                                {billingCycle === "yearly" ? plan.yearlyPrice : plan.monthlyPrice}
                                            </p>
                                            <Button className="border-2 font-semibold text-center justify-center mt-8 hover:bg-neutral-900 hover:text-neutral-50" href={'/contact'}>
                                                {plan.buttonText}
                                            </Button>
                                        </th>
                                    ))}
                                </tr>
                            </thead>

                            <tbody className="divide-y divide-blue-300">
                                {categories.map((cat, catIdx) => (
                                    <Fragment key={catIdx}>
                                        {/* Category Header Row */}
                                        <tr className="bg-blue-50 border-y border-blue-300">
                                            <td colSpan={5} className="py-7 px-6 font-bold text-neutral-900 text-base sm:text-2xl">
                                                {cat.title}
                                            </td>
                                        </tr>

                                        {/* Category Feature Rows */}
                                        {cat.features.map((feature, featIdx) => (
                                            <tr key={featIdx} className="hover:bg-blue-50 transition-colors divide-x divide-blue-300 border-b last:border-b-0">
                                                <td className="py-5 px-6 text-base font-semibold text-neutral-900">
                                                    <div className="flex items-center gap-1.5">
                                                        <span>{feature.name}</span>
                                                        <div className="relative inline-flex items-center group/tooltip">
                                                            <button
                                                                type="button"
                                                                className="inline-flex items-center justify-center select-none text-neutral-300"
                                                            >
                                                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M10 18.75C7.67936 18.75 5.45376 17.8281 3.81282 16.1872C2.17187 14.5462 1.25 12.3206 1.25 10C1.25 7.67936 2.17187 5.45376 3.81282 3.81282C5.45376 2.17187 7.67936 1.25 10 1.25C12.3206 1.25 14.5462 2.17187 16.1872 3.81282C17.8281 5.45376 18.75 7.67936 18.75 10C18.75 12.3206 17.8281 14.5462 16.1872 16.1872C14.5462 17.8281 12.3206 18.75 10 18.75ZM10 20C12.6522 20 15.1957 18.9464 17.0711 17.0711C18.9464 15.1957 20 12.6522 20 10C20 7.34784 18.9464 4.8043 17.0711 2.92893C15.1957 1.05357 12.6522 0 10 0C7.34784 0 4.8043 1.05357 2.92893 2.92893C1.05357 4.8043 0 7.34784 0 10C0 12.6522 1.05357 15.1957 2.92893 17.0711C4.8043 18.9464 7.34784 20 10 20Z" fill="currentColor" />
                                                                    <path d="M8.75244 13.7499C8.75244 13.5858 8.78477 13.4232 8.84759 13.2715C8.91041 13.1199 9.00248 12.9821 9.11856 12.866C9.23463 12.7499 9.37243 12.6579 9.52409 12.5951C9.67574 12.5322 9.83829 12.4999 10.0024 12.4999C10.1666 12.4999 10.3291 12.5322 10.4808 12.5951C10.6325 12.6579 10.7703 12.7499 10.8863 12.866C11.0024 12.9821 11.0945 13.1199 11.1573 13.2715C11.2201 13.4232 11.2524 13.5858 11.2524 13.7499C11.2524 14.0814 11.1207 14.3994 10.8863 14.6338C10.6519 14.8682 10.334 14.9999 10.0024 14.9999C9.67092 14.9999 9.35298 14.8682 9.11856 14.6338C8.88414 14.3994 8.75244 14.0814 8.75244 13.7499ZM8.87494 6.24365C8.8583 6.08595 8.87499 5.92652 8.92394 5.77569C8.97289 5.62486 9.05301 5.486 9.15909 5.36814C9.26517 5.25027 9.39485 5.15602 9.53971 5.09151C9.68456 5.02699 9.84137 4.99365 9.99994 4.99365C10.1585 4.99365 10.3153 5.02699 10.4602 5.09151C10.605 5.15602 10.7347 5.25027 10.8408 5.36814C10.9469 5.486 11.027 5.62486 11.0759 5.77569C11.1249 5.92652 11.1416 6.08595 11.1249 6.24365L10.6874 10.6274C10.6727 10.7996 10.5939 10.96 10.4666 11.0769C10.3393 11.1939 10.1728 11.2587 9.99994 11.2587C9.8271 11.2587 9.66055 11.1939 9.53325 11.0769C9.40594 10.96 9.32714 10.7996 9.31244 10.6274L8.87494 6.24365Z" fill="currentColor" />
                                                                </svg>
                                                            </button>

                                                            {/* Tooltip Content */}
                                                            <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 opacity-0 group-hover/tooltip:opacity-100 group-focus-within/tooltip:opacity-100 transition-all duration-200 pointer-events-none group-hover/tooltip:pointer-events-auto group-focus-within/tooltip:pointer-events-auto z-50 w-48 sm:w-56 flex flex-col items-center">
                                                                <div className="bg-neutral-900 text-white text-xs font-normal py-1.5 px-3 rounded-lg shadow-xl text-center leading-relaxed">
                                                                    {feature.description || `Information about ${feature.name}`}
                                                                </div>
                                                                <div className="w-2 h-2 bg-neutral-900 rotate-45 -mt-1" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>

                                                {plans.map((plan) => {
                                                    const isIncluded = feature[plan.key];
                                                    return (
                                                        <td key={plan.key} className="py-4 px-6 text-center align-middle">
                                                            {isIncluded ? (
                                                                <div className="size-6 rounded-full bg-green-500 text-white flex items-center justify-center mx-auto shadow-2xs">
                                                                    <Check className="size-3.5 stroke-[3]" />
                                                                </div>
                                                            ) : (
                                                                <span className="text-neutral-400 font-light text-base select-none">
                                                                    —
                                                                </span>
                                                            )}
                                                        </td>
                                                    );
                                                })}
                                            </tr>
                                        ))}
                                    </Fragment>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    );
}
