"use client";

import { useState } from "react";
import { Check, ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";

export default function Plan() {
    const [billingCycle, setBillingCycle] = useState("monthly");

    const plans = [
        {
            name: "Standard",
            monthlyPrice: 99,
            yearlyPrice: 499,
            description: "Essential CRM tools to manage your customers, projects, and everyday workflows.",
            isPopular: false,
            buttonText: "Start with Standard",
            buttonStyle: "",
            featuresTitle: "What's Included",
            features: [
                "Multiple sales pipelines",
                "Activity logging",
                "AI-powered email generator",
                "Custom CRM automation",
                "Advanced account & deal Management",
                "Lead and deal tracking",
                "Monthly Strategy Reviews"
            ],
        },
        {
            name: "Professional",
            monthlyPrice: 149,
            yearlyPrice: 999,
            description: "Advanced tools for growing teams that need more control, collaboration, and visibility.",
            isPopular: true,
            buttonText: "Choose Professional",
            buttonStyle: "",
            featuresTitle: "What's Included",
            features: [
                "All Standard plan features",
                "Sales forecasting",
                "Sales analytics",
                "HTML editor for mass emails",
                "Inventory management",
                "Email templates",
                "Role-Based Access Controls"
            ],
        },
        {
            name: "Enterprise",
            monthlyPrice: 299,
            yearlyPrice: 1999,
            description: "Powerful CRM capabilities for larger teams with more complex business needs.",
            isPopular: false,
            buttonText: "Choose Enterprise",
            buttonStyle: "",
            featuresTitle: "What's Included",
            features: [
                "All Professional plan features",
                "Account management",
                "Advanced data management",
                "Custom CRM integration",
                "AI-driven insights",
                "Merge duplicate data",
                "On-Premise Deployment Option",
            ],
        },
        {
            name: "Let's Talk",
            description: "Need a solution tailored to your business? Let's build a plan around your team's needs.",
            isPopular: false,
            buttonText: "Talk to Sales",
            buttonStyle: "",
            featuresTitle: "What's Included",
            features: [
                "Unlimited credits",
                "Unlimited edits on pages",
                "Custom integrations",
                "Advanced analytics and reporting",
                "Onboarding and training",
                "Dedicated account manager",
                "Monthly Strategy Reviews",
            ],
        }
    ];

    return (
        <section className="gradient-stage text-white py-16 md:py-24 relative overflow-hidden px-4">
            <div className="blob blob--1"></div>
            <div className="blob blob--2"></div>
            <div className="blob blob--3"></div>
            <div className="blob blob--4"></div>
            <div className="blob blob--5"></div>

            <div className="container mx-auto relative z-10">
                <div className="text-center max-w-4xl mx-auto px-4 mb-10">
                    <h2 className="inline-block font-spaceGrotesk text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight relative">
                        Pricing Plans
                        <svg className="mx-auto mt-3 text-violet-500" width="110" height="10" viewBox="0 0 110 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M55.4214 3.042C56.6044 2.94 79.4965 0.883309 91.9777 0.247303C97.256 -0.0306999 102.543 -0.0107027 107.775 0.0119642C108.546 0.0399645 109.831 0.643972 109.957 1.17664C110.146 2.00532 109.687 3.22 109.099 3.842C107.496 5.52202 105.364 6.02869 103.164 6.12003C95.0808 6.51403 86.9996 6.96804 78.9141 7.30271C58.3441 8.15405 37.7152 8.88805 17.1435 9.67939C13.1835 9.8434 9.16523 9.89006 5.20303 9.99406C3.22303 10.0761 1.54828 9.30873 0.399327 7.68204C-0.0599231 7.04337 -0.0967732 5.79002 0.155127 5.00201C0.359177 4.45534 1.39208 3.99467 2.05208 3.96734C19.5421 3.244 53.2131 1.89332 54.0695 1.81065C55.3169 1.69065 54.2378 3.14266 55.4208 3.04133L55.4214 3.042Z" fill="currentColor"></path></svg>
                    </h2>
                    <p className="mt-10 text-neutral-300 text-base font-normal leading-8">
                        At GripCRM, we offer flexible pricing plans to meet the diverse needs of metal building companies of all sizes, helping you streamline operations and boost productivity.
                    </p>
                </div>

                {/* Billing Cycle Toggle */}
                <div className="mb-20 flex flex-col items-center justify-center relative">
                    <div className="bg-white p-1.5 rounded-full inline-flex items-center shadow-lg">
                        <button
                            type="button"
                            onClick={() => setBillingCycle("monthly")}
                            className={`px-6 py-2 text-xs sm:text-sm font-medium rounded-full transition-all duration-200 cursor-pointer ${billingCycle === "monthly"
                                ? "bg-neutral-700 text-neutral-50 shadow-sm"
                                : "text-neutral-700 hover:text-neutral-900"
                                }`}
                        >
                            Monthly
                        </button>
                        <button
                            type="button"
                            onClick={() => setBillingCycle("yearly")}
                            className={`px-6 py-2 text-xs sm:text-sm font-medium rounded-full transition-all duration-200 cursor-pointer ${billingCycle === "yearly"
                                ? "bg-neutral-700 text-neutral-50 shadow-sm"
                                : "text-neutral-700 hover:text-neutral-900"
                                }`}
                        >
                            Yearly
                        </button>
                    </div>

                    {/* Arrow & "SAVE UPTO 30%" annotation */}
                    <div className="absolute top-full left-1/2 mt-3 sm:ml-8 translate-x-4 sm:translate-x-8 flex items-center gap-1 text-white">
                        <svg width="40" height="14" viewBox="0 0 40 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M39.244 5.58135L38.812 5.90105C36.544 8.03235 33.9521 9.63083 31.0361 10.6965C28.1201 11.7621 25.0962 12.1884 22.0722 12.0818C19.0483 11.9753 16.0243 11.1227 13.3243 9.84396C13.2163 9.73739 13.1083 9.73739 12.8923 9.63083C12.6763 9.52426 12.4603 9.4177 12.2443 9.31113L11.2724 8.67174C10.7324 8.45861 10.3004 8.03235 9.76038 7.71265L9.32838 7.39296C8.78839 7.07326 8.3564 6.647 7.9244 6.32731L7.6004 6.00761C7.49241 5.90105 7.38441 5.90105 7.38441 5.79448L9.32838 3.87631C9.65238 3.55661 9.76038 3.13035 9.65238 2.81066C9.54438 2.3844 9.22039 2.0647 8.78839 1.95814L1.44448 0.0399619C1.01249 -0.0666032 0.580493 0.0399619 0.364495 0.359657C0.0404995 0.679353 -0.0674992 1.10561 0.0404995 1.42531L1.98448 8.67174C2.09247 9.098 2.41647 9.4177 2.84846 9.52426C3.28046 9.63083 3.71245 9.52426 3.92845 9.20457L5.87243 7.28639C5.98042 7.39296 6.08842 7.49952 6.19642 7.60609L6.62842 8.03235C7.06041 8.45861 7.49241 8.88487 8.0324 9.20457L8.35639 9.4177C8.89639 9.84396 9.43638 10.2702 10.0844 10.5899L11.1644 11.2293C11.3804 11.3359 11.7044 11.4424 11.9204 11.6556C12.0283 11.7621 12.1363 11.7621 12.3523 11.8687C15.3763 13.1475 18.6163 13.8934 21.9642 14H22.3962C25.6362 14 28.7681 13.3606 31.5761 12.1884C34.6001 10.9096 37.408 9.098 39.568 6.75357L40 6.32731L39.244 5.58135Z" fill="white" />
                        </svg>
                        <span className="text-xs font-bold tracking-wider uppercase whitespace-nowrap">
                            SAVE UPTO 30%
                        </span>
                    </div>
                </div>

                {/* Pricing Cards Grid inside pricing-container */}
                <div className="price-swiper flex flex-col sm:grid grid-cols-1 lg:grid-cols-12 items-stretch gap-10 max-w-7xl mx-auto">

                    {plans.map((plan, index) => {
                        const price = billingCycle === "yearly" ? plan.yearlyPrice : plan.monthlyPrice;

                        return (
                            <div
                                key={index}
                                className={`col-span-12 lg:col-span-6 flex flex-col rounded-2xl overflow-hidden shadow-2xl transition-transform duration-300 hover:-translate-y-1 ${plan.isPopular ? "bg-blue-300 gradient-card relative p-3" : "bg-white"}`}
                            >
                                {/* Top Header Section */}
                                <div className={`p-8 sm:p-12 ${plan.isPopular ? "bg-linear-to-b from-white to-blue-100" : "bg-white"}  rounded-2xl flex flex-col justify-between min-h-77 relative`}>

                                    {/* Badges */}
                                    <div className="flex items-center gap-2">
                                        <span className={`text-neutral-900 font-semibold text-xl inline-block`}>
                                            {plan.name}
                                        </span>
                                        {plan.isPopular && (
                                            <span className="bg-orange-500 text-orange-50 font-normal text-sm px-3.5 py-1.5 rounded-full inline-block absolute top-3 right-3">
                                                Most Popular
                                            </span>
                                        )}
                                    </div>

                                    {/* Description */}
                                    <p className="mt-2 text-base text-neutral-700 font-normal">
                                        {plan.description}
                                    </p>

                                    {/* Price */}
                                    <div className="flex items-center gap-1.5 mt-5">
                                        <span className="font-spaceGrotesk text-5xl font-semibold text-neutral-900">
                                            {plan.name === "Let's Talk" ? "Custom" : `$${price}`}
                                        </span>
                                        {plan.name !== "Let's Talk" &&
                                            <span className="text-sm text-neutral-700 font-semibold">
                                                /month for up to X users
                                            </span>
                                        }
                                    </div>

                                    {/* Action Button */}
                                    <div className="mt-10">
                                        {plan.name !== "Let's Talk" ? (
                                            <Button className={`bg-neutral-50 border-2 border-neutral-900 text-neutral-900 hover:bg-neutral-900 hover:text-neutral-50 w-full justify-center ${plan.buttonStyle}`} type="with-icon">
                                                <span className="relative z-1">
                                                    {plan.buttonText}
                                                </span>
                                                <span className="w-5 h-5 rounded-full bg-neutral-900 text-neutral-50 flex items-center justify-center text-xs shrink-0 group-hover:bg-neutral-50 group-hover:text-neutral-900 transition-transform">
                                                    <ArrowRight className="size-4" />
                                                </span>
                                            </Button>
                                        ) : (
                                            <Button className={`bg-neutral-50 border-2 border-neutral-900 text-neutral-900 hover:bg-neutral-900 hover:text-neutral-50 w-full justify-center ${plan.buttonStyle}`} type="with-icon">
                                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M10 1.25C8.3424 1.25 6.75269 1.90848 5.58058 3.08058C4.40848 4.25269 3.75 5.8424 3.75 7.5V8.75H5C5.33152 8.75 5.64946 8.8817 5.88388 9.11612C6.1183 9.35054 6.25 9.66848 6.25 10V13.75C6.25 14.0815 6.1183 14.3995 5.88388 14.6339C5.64946 14.8683 5.33152 15 5 15H3.75C3.41848 15 3.10054 14.8683 2.86612 14.6339C2.6317 14.3995 2.5 14.0815 2.5 13.75V7.5C2.5 6.51509 2.69399 5.53982 3.0709 4.62987C3.44781 3.71993 4.00026 2.89314 4.6967 2.1967C5.39314 1.50026 6.21993 0.947814 7.12987 0.570904C8.03982 0.193993 9.01509 0 10 0C10.9849 0 11.9602 0.193993 12.8701 0.570904C13.7801 0.947814 14.6069 1.50026 15.3033 2.1967C15.9997 2.89314 16.5522 3.71993 16.9291 4.62987C17.306 5.53982 17.5 6.51509 17.5 7.5V15C17.5 15.8288 17.1708 16.6237 16.5847 17.2097C15.9987 17.7958 15.2038 18.125 14.375 18.125H11.7075C11.5978 18.315 11.44 18.4728 11.25 18.5825C11.06 18.6922 10.8444 18.75 10.625 18.75H9.375C9.04348 18.75 8.72554 18.6183 8.49112 18.3839C8.2567 18.1495 8.125 17.8315 8.125 17.5C8.125 17.1685 8.2567 16.8505 8.49112 16.6161C8.72554 16.3817 9.04348 16.25 9.375 16.25H10.625C10.8444 16.25 11.06 16.3078 11.25 16.4175C11.44 16.5272 11.5978 16.685 11.7075 16.875H14.375C14.8723 16.875 15.3492 16.6775 15.7008 16.3258C16.0525 15.9742 16.25 15.4973 16.25 15H15C14.6685 15 14.3505 14.8683 14.1161 14.6339C13.8817 14.3995 13.75 14.0815 13.75 13.75V10C13.75 9.66848 13.8817 9.35054 14.1161 9.11612C14.3505 8.8817 14.6685 8.75 15 8.75H16.25V7.5C16.25 6.67924 16.0883 5.86651 15.7742 5.10823C15.4602 4.34994 14.9998 3.66095 14.4194 3.08058C13.8391 2.50022 13.1501 2.03984 12.3918 1.72575C11.6335 1.41166 10.8208 1.25 10 1.25Z" fill="currentColor" />
                                                </svg>
                                                <span className="relative z-1">
                                                    {plan.buttonText}
                                                </span>
                                            </Button>
                                        )}
                                    </div>
                                    {/* Bottom Features Section */}
                                    <div className="pt-8 md:pt-10 flex-1 flex flex-col justify-between">
                                        <p className="text-sm font-semibold text-neutral-700 mb-5">
                                            {plan.featuresTitle}
                                        </p>
                                        <ul className="space-y-5">
                                            {plan.features.map((feature, fIndex) => (
                                                <li key={fIndex} className="flex items-center gap-3 text-base font-medium text-neutral-700">
                                                    <div className="size-5 rounded-full border border-neutral-700 flex items-center justify-center shrink-0">
                                                        <Check className="size-3 stroke-[2.5]" />
                                                    </div>
                                                    <span>
                                                        {feature}
                                                    </span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
