"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";

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
        <section className="bg-white py-16 md:py-24 px-4">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

                    {/* Left Column - Text Content & Benefits List */}
                    <div className="lg:col-span-7 flex flex-col">
                        {/* Heading */}
                        <div className="mb-2">
                            <h2 className="font-spaceGrotesk text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-900 tracking-tight leading-tight">
                                How does GripCRM benefit <br className="hidden sm:inline" />
                                <span className="relative inline-block">
                                    your business?
                                    <svg className="mt-3 text-olive-500" width="110" height="10" viewBox="0 0 110 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M55.4214 3.042C56.6044 2.94 79.4965 0.883309 91.9777 0.247303C97.256 -0.0306999 102.543 -0.0107027 107.775 0.0119642C108.546 0.0399645 109.831 0.643972 109.957 1.17664C110.146 2.00532 109.687 3.22 109.099 3.842C107.496 5.52202 105.364 6.02869 103.164 6.12003C95.0808 6.51403 86.9996 6.96804 78.9141 7.30271C58.3441 8.15405 37.7152 8.88805 17.1435 9.67939C13.1835 9.8434 9.16523 9.89006 5.20303 9.99406C3.22303 10.0761 1.54828 9.30873 0.399327 7.68204C-0.0599231 7.04337 -0.0967732 5.79002 0.155127 5.00201C0.359177 4.45534 1.39208 3.99467 2.05208 3.96734C19.5421 3.244 53.2131 1.89332 54.0695 1.81065C55.3169 1.69065 54.2378 3.14266 55.4208 3.04133L55.4214 3.042Z" fill="currentColor"></path></svg>
                                </span>
                            </h2>
                        </div>

                        {/* Tagline */}
                        <p className="text-sm sm:text-base text-neutral-700 mt-10 mb-15">
                            Work Smarter, Stay Organized
                        </p>

                        {/* Callout Quote Box */}
                        <div className="border-l-2 border-orange-500 pl-7 mb-15 text-neutral-700 text-sm sm:text-base leading-8">
                            GripCRM brings your customer information, projects, communication, and workflows together in one place—so your team can spend less time managing information and more time getting work done.
                        </div>

                        {/* Benefits List */}
                        <div className="">
                            {benefits.map((benefit, index) => (
                                <div key={index} className="border-t border-neutral-300 py-10 px-5 flex flex-col items-start gap-5 sm:gap-8">
                                    {/* Icon Badge */}
                                    <div className="size-10 rounded-md bg-neutral-700 text-white flex items-center justify-center shrink-0 shadow-xs">
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
                                        <h3 className="text-lg sm:text-2xl font-semibold text-neutral-900">
                                            {benefit.title}
                                        </h3>
                                        <p className="mt-5 text-sm sm:text-base text-neutral-900 leading-relaxed font-normal">
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
                        <Button className="bg-neutral-900 border-2 text-neutral-100 hover:text-neutral-900 hover:bg-neutral-100 justify-center" type="with-icon">
                            <span className="relative z-1">
                                Request a Demo
                            </span>
                            <span className="w-5 h-5 rounded-full bg-white group-hover:bg-black text-black group-hover:text-white flex items-center justify-center text-xs shrink-0 group-hover:translate-x-0.5 transition-transform">
                                <ArrowRight className="size-4" />
                            </span>
                        </Button>
                    </div>

                </div>
            </div>
        </section>
    );
}
