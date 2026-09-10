"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function BenefitBusiness() {
    const benefits = [
        {
            title: "Better Customer Relationships",
            description: "Keep customer information organized and accessible so your team can deliver a more consistent experience."
        },
        {
            title: "Improved Collaboration",
            description: "Give your team a shared view of projects, tasks, and customer activity so everyone stays aligned."
        },
        {
            title: "Increased Productivity",
            description: "Bring everyday workflows into one system and reduce the time spent switching between tools."
        },
        {
            title: "Clearer Business Insights",
            description: "Turn your CRM data into useful insights that help your team understand performance and make better decisions."
        },
        {
            title: "Scalable Workflows",
            description: "Build processes that can grow with your team without adding unnecessary complexity."
        }
    ];

    return (
        <section className="bg-white py-16 md:py-24 px-4 sm:px-6 lg:px-8 border-t border-neutral-100">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
                    
                    {/* Left Column - Text Content & Benefits List */}
                    <div className="lg:col-span-7 flex flex-col">
                        {/* Heading */}
                        <div className="mb-2">
                            <h2 className="font-spaceGrotesk text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-900 tracking-tight leading-tight">
                                How does GripCRM benefit <br className="hidden sm:inline" />
                                <span className="relative inline-block">
                                    your business?
                                    <svg 
                                        className="mt-1 text-olive-500 w-28 sm:w-36 h-2.5" 
                                        viewBox="0 0 110 10" 
                                        fill="none" 
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path 
                                            d="M55.4214 3.042C56.6044 2.94 79.4965 0.883309 91.9777 0.247303C97.256 -0.0306999 102.543 -0.0107027 107.775 0.0119642C108.546 0.0399645 109.831 0.643972 109.957 1.17664C110.146 2.00532 109.687 3.22 109.099 3.842C107.496 5.52202 105.364 6.02869 103.164 6.12003C95.0808 6.51403 86.9996 6.96804 78.9141 7.30271C58.3441 8.15405 37.7152 8.88805 17.1435 9.67939C13.1835 9.8434 9.16523 9.89006 5.20303 9.99406C3.22303 10.0761 1.54828 9.30873 0.399327 7.68204C-0.0599231 7.04337 -0.0967732 5.79002 0.155127 5.00201C0.359177 4.45534 1.39208 3.99467 2.05208 3.96734C19.5421 3.244 53.2131 1.89332 54.0695 1.81065C55.3169 1.69065 54.2378 3.14266 55.4208 3.04133L55.4214 3.042Z" 
                                            fill="currentColor"
                                        />
                                    </svg>
                                </span>
                            </h2>
                        </div>

                        {/* Tagline */}
                        <p className="text-xs sm:text-sm font-semibold text-neutral-500 uppercase tracking-wider mt-4 mb-6">
                            Work Smarter, Stay Organized
                        </p>

                        {/* Callout Quote Box */}
                        <div className="border-l-2 border-orange-500 pl-5 py-1 mb-10">
                            <p className="text-neutral-700 text-sm sm:text-base leading-relaxed font-normal">
                                GripCRM brings your customer information, projects, communication, and workflows together in one place—so your team can spend less time managing information and more time getting work done.
                            </p>
                        </div>

                        {/* Benefits List */}
                        <div className="divide-y divide-neutral-200 border-t border-b border-neutral-200">
                            {benefits.map((benefit, index) => (
                                <div key={index} className="py-7 flex flex-col sm:flex-row items-start gap-4 sm:gap-5">
                                    {/* Icon Badge */}
                                    <div className="size-10 rounded-lg bg-neutral-800 text-white flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                                        <svg 
                                            width="20" 
                                            height="20" 
                                            viewBox="0 0 24 24" 
                                            fill="none" 
                                            stroke="currentColor" 
                                            strokeWidth="2" 
                                            strokeLinecap="round" 
                                            strokeLinejoin="round"
                                        >
                                            <circle cx="12" cy="12" r="9" />
                                            <circle cx="12" cy="12" r="3" />
                                        </svg>
                                    </div>

                                    {/* Text Content */}
                                    <div className="flex-1">
                                        <h3 className="text-base sm:text-lg font-bold text-neutral-900">
                                            {benefit.title}
                                        </h3>
                                        <p className="mt-1.5 text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal">
                                            {benefit.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column - Media Preview Card & Demo Button */}
                    <div className="lg:col-span-5 flex flex-col gap-5 lg:sticky lg:top-8">
                        {/* Dark App Preview Mockup Card */}
                        <div className="relative rounded-2xl overflow-hidden bg-neutral-950 border border-neutral-800 shadow-2xl group">
                            {/* Decorative top bar */}
                            <div className="relative aspect-4/3 w-full bg-neutral-900 overflow-hidden flex items-center justify-center">
                                <Image
                                    src="/images/home/screen-cover.png"
                                    alt="GripCRM Workflow Interface"
                                    width={600}
                                    height={450}
                                    className="w-full h-full object-cover opacity-90 transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-linear-to-t from-neutral-950/80 via-transparent to-transparent pointer-events-none" />
                            </div>
                        </div>

                        {/* Request a Demo Button */}
                        <Link 
                            href="/contact"
                            className="w-full bg-neutral-900 hover:bg-neutral-800 text-white font-semibold text-sm py-3.5 px-6 rounded-xl flex items-center justify-center gap-2.5 transition-all duration-200 shadow-md group cursor-pointer"
                        >
                            <span>Request a Demo</span>
                            <span className="size-5 rounded-full bg-white text-neutral-900 flex items-center justify-center text-xs shrink-0 group-hover:scale-110 transition-transform duration-200">
                                <ArrowRight className="size-3.5 stroke-[2.5]" />
                            </span>
                        </Link>
                    </div>

                </div>
            </div>
        </section>
    );
}