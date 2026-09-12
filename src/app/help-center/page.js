"use client";

import { useState } from "react";
import { Search, ArrowRight, MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/ui/Button";

export default function HelpCenter() {
    const [searchQuery, setSearchQuery] = useState("");
    const [activeTopic, setActiveTopic] = useState(null);

    const topics = [
        "Billing",
        "Sharing & permissions",
        "Documents",
        "Emails",
        "3D Estimator"
    ];

    const helpCards = [
        {
            id: "get-started",
            title: "Get Started",
            description: "New to GripCRM? Follow our step-by-step setup guide to get up and running fast.",
            icon: "get-started.svg",
            tags: ["Get Started", "Documents", "3D Estimator"]
        },
        {
            id: "help-support",
            title: "Help & Support",
            description: "Browse FAQs and troubleshooting guides for common CRM issues.",
            icon: "help-support.svg",
            tags: ["Sharing & permissions", "Emails", "Documents"]
        },
        {
            id: "account-billing",
            title: "Account & Billing",
            description: "Manage all of your subscriptions with ease.",
            icon: "account-billing.svg",
            tags: ["Billing", "3D Estimator"]
        },
        {
            id: "academy",
            title: "Academy",
            description: "Watch video trainings and get certified in GripCRM.",
            icon: "academy.svg",
            tags: ["Sharing & permissions", "Documents"]
        },
        {
            id: "tools-tips",
            title: "Tools & Tips",
            description: "Practical tips, shortcuts, and best practices to get more out of GripCRM.",
            icon: "tools-tips.svg",
            tags: ["Emails", "3D Estimator"]
        },
        {
            id: "blog",
            title: "Blog",
            description: "Read examples of how real customers use GripCRM for their business.",
            icon: "blog.svg",
            tags: ["Billing", "Documents", "Emails"]
        }
    ];

    const handleTopicClick = (topic) => {
        if (activeTopic === topic) {
            setActiveTopic(null);
        } else {
            setActiveTopic(topic);
        }
    };

    const filteredCards = helpCards.filter((card) => {
        const matchesSearch =
            searchQuery.trim() === "" ||
            card.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            card.description.toLowerCase().includes(searchQuery.toLowerCase());

        const matchesTopic =
            !activeTopic || card.tags.includes(activeTopic);

        return matchesSearch && matchesTopic;
    });

    return (
        <main className="bg-blue-50 py-16 md:py-24 px-4 relative overflow-hidden">
            <div className="container mx-auto space-y-10 md:space-y-15">

                <div className="text-center">
                    <h1 className="font-spaceGrotesk text-4xl lg:text-5xl leading-[1.2] font-bold text-neutral-900">
                        Contact Us
                        <svg width="110" height="10" viewBox="0 0 110 10" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-auto mt-4 text-orange-500"><path d="M55.4214 3.042C56.6044 2.94 79.4965 0.883309 91.9777 0.247303C97.256 -0.0306999 102.543 -0.0107027 107.775 0.0119642C108.546 0.0399645 109.831 0.643972 109.957 1.17664C110.146 2.00532 109.687 3.22 109.099 3.842C107.496 5.52202 105.364 6.02869 103.164 6.12003C95.0808 6.51403 86.9996 6.96804 78.9141 7.30271C58.3441 8.15405 37.7152 8.88805 17.1435 9.67939C13.1835 9.8434 9.16523 9.89006 5.20303 9.99406C3.22303 10.0761 1.54828 9.30873 0.399327 7.68204C-0.0599231 7.04337 -0.0967732 5.79002 0.155127 5.00201C0.359177 4.45534 1.39208 3.99467 2.05208 3.96734C19.5421 3.244 53.2131 1.89332 54.0695 1.81065C55.3169 1.69065 54.2378 3.14266 55.4208 3.04133L55.4214 3.042Z" fill="currentColor"></path></svg>
                    </h1>
                    <p className="mt-10 m-auto text-neutral-700 text-base leading-[1.9] font-normal">
                        Get help with GripCRM, report an issue, request a feature, or reach out to our team.
                    </p>
                </div>


                {/* Search & Header Bar */}
                <div className="max-w-4xl mx-auto space-y-10">
                    <form
                        onSubmit={(e) => e.preventDefault()}
                        className="bg-white rounded-full p-2 pl-6 flex items-center justify-between border border-neutral-300 hover:border-neutral-500 transition-all group"
                    >
                        <div className="flex items-center gap-3 flex-1">
                            <Search className="w-5 h-5 text-neutral-400 shrink-0 group-focus-within:text-neutral-900 transition-colors" />
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                placeholder="Search for articles, guides, or FAQs..."
                                className="w-full bg-transparent pr-4 py-2 text-neutral-700 placeholder-neutral-400 text-sm md:text-base focus:outline-none"
                            />
                        </div>
                        <button
                            type="submit"
                            aria-label="Search"
                            className="w-9 h-9 rounded-full bg-neutral-900 text-white flex items-center justify-center hover:bg-neutral-800 shrink-0 transition-transform active:scale-95 shadow cursor-pointer"
                        >
                            <MoveRight className="w-4 h-4" />
                        </button>
                    </form>

                    {/* Popular Topics Section */}
                    <div className="text-center space-y-5">
                        <h2 className="text-base md:text-xl font-bold text-neutral-900 tracking-tight">
                            Popular topics
                        </h2>
                        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5">
                            {topics.map((topic) => {
                                const isActive = activeTopic === topic;
                                return (
                                    <button
                                        key={topic}
                                        type="button"
                                        onClick={() => handleTopicClick(topic)}
                                        className={`px-4 py-1.5 rounded-full text-xs md:text-sm font-medium transition-all cursor-pointer select-none hover:bg-neutral-900 hover:text-neutral-50 ${isActive
                                            ? "bg-neutral-900 text-neutral-50"
                                            : "bg-neutral-50 text-neutral-700"
                                            }`}
                                    >
                                        {topic}
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* 6 Category Cards Grid */}
                {filteredCards.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {filteredCards.map((card) => (
                            <div
                                key={card.id}
                                className="bg-white rounded-2xl p-8 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-between group cursor-pointer"
                            >
                                <div>
                                    <div className="mb-6 inline-block transform group-hover:scale-105 transition-transform duration-300">
                                        <Image src={`/images/help-center/${card.icon}`} alt={card.title} width={96} height={96} />
                                    </div>
                                    <h3 className="text-xl font-bold text-neutral-900 mb-4 group-hover:text-neutral-700 transition-colors">
                                        {card.title}
                                    </h3>
                                    <p className="text-sm md:text-base text-neutral-700 leading-relaxed font-normal">
                                        {card.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="bg-white rounded-3xl p-12 text-center max-w-md mx-auto border border-slate-100 shadow-sm">
                        <p className="text-slate-600 font-medium">No help topics found matching your query.</p>
                        <button
                            onClick={() => {
                                setSearchQuery("");
                                setActiveTopic(null);
                            }}
                            className="mt-4 text-xs font-semibold text-blue-600 hover:underline cursor-pointer"
                        >
                            Clear filters
                        </button>
                    </div>
                )}

                {/* Bottom Banner Card */}
                <div className="bg-blue-950 rounded-2xl p-4 text-white relative overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    <div className="lg:col-span-6 space-y-10 z-10 lg:ps-18">
                        <h2 className="font-spaceGrotesk text-3xl sm:text-4xl lg:text-5xl font-bold leading-12 text-white">
                            Companies are saving time and money with{" "}
                            <span className="text-orange-500 block mt-1">GripCRM.</span>
                        </h2>
                        <Button href="contact" className="bg-neutral-50 border-2 border-white text-neutral-900 hover:text-neutral-50 hover:bg-transparent inline-flex" type="with-icon">
                            <span className="relative z-1">
                                Get Started
                            </span>
                            <span className="w-5 h-5 rounded-full bg-neutral-900 group-hover:bg-neutral-50 text-neutral-50 group-hover:text-neutral-900 flex items-center justify-center text-xs shrink-0 group-hover:translate-x-0.5 transition-transform">
                                <ArrowRight className="size-4" />
                            </span>
                        </Button>
                    </div>

                    <div className="lg:col-span-6 flex justify-center lg:justify-end z-10">
                        <div className="relative overflow-hidden p-2 rounded-2xl moving-gradient w-full">
                            <div className="relative z-10 w-full rounded-2xl overflow-hidden bg-slate-900">
                                <Image
                                    src="/images/help-center/promo-new.png"
                                    alt="Companies saving time and money with GripCRM"
                                    className="w-full border-4 border-blue-950 object-cover transition-transform duration-500 rounded-2xl"
                                    width={620}
                                    height={382}
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}