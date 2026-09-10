"use client";

import React, { useState } from "react";
import { Minus, Plus, MessageSquareText } from "lucide-react";
import Cta from "./Cta";

const faqData = [
    {
        question: "Do you offer a free trial?",
        answer: "Yes, we offer personalized demos so you can see how GripCRM works and how it can streamline your business processes. You can contact us anytime to schedule a demo tailored to your specific needs."
    },
    {
        question: "What types of payment do you accept?",
        answer: "Design scroll-based and multi-step interactions and easily work with Spline, 3D, Lottie, and dotLottie files all without even thinking about code."
    },
    {
        question: "Is my data safe?",
        answer: "We employ enterprise-grade 256-bit encryption, strict access controls, and regular backup protocols to keep your business data completely secure."
    },
    {
        question: "Can I switch plans?",
        answer: "Absolutely. You can upgrade, downgrade, or modify your subscription plan at any time directly from your billing settings dashboard."
    },
    {
        question: "Do you provide any assistance in getting Grip CRM set up?",
        answer: "Yes! Our dedicated onboarding team offers complimentary step-by-step setup support, data migration assistance, and team training sessions."
    }
];

export default function Faqs() {
    const [openIndex, setOpenIndex] = useState(0);

    const toggleFaq = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="gradient-stage py-16 md:py-24 overflow-hidden relative select-none px-4">
            <div className="blob blob--1"></div>
            <div className="blob blob--2"></div>
            <div className="blob blob--3"></div>
            <div className="blob blob--4"></div>
            <div className="blob blob--5"></div>

            <div className="container mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">

                    {/* Left Column: Heading, Subtitle & Support Link */}
                    <div className="lg:col-span-5 flex flex-col justify-between items-start">
                        <div>
                            {/* Main Heading */}
                            <h2 className="text-4xl md:text-5xl font-bold text-white font-spaceGrotesk tracking-tight leading-[1.18]">
                                Frequently Asked<br className="hidden sm:inline" /> Questions
                                <svg width="110" height="10" viewBox="0 0 110 10" fill="none" xmlns="http://www.w3.org/2000/svg" className="sm:mt-4 text-orange-500"><path d="M55.4214 3.042C56.6044 2.94 79.4965 0.883309 91.9777 0.247303C97.256 -0.0306999 102.543 -0.0107027 107.775 0.0119642C108.546 0.0399645 109.831 0.643972 109.957 1.17664C110.146 2.00532 109.687 3.22 109.099 3.842C107.496 5.52202 105.364 6.02869 103.164 6.12003C95.0808 6.51403 86.9996 6.96804 78.9141 7.30271C58.3441 8.15405 37.7152 8.88805 17.1435 9.67939C13.1835 9.8434 9.16523 9.89006 5.20303 9.99406C3.22303 10.0761 1.54828 9.30873 0.399327 7.68204C-0.0599231 7.04337 -0.0967732 5.79002 0.155127 5.00201C0.359177 4.45534 1.39208 3.99467 2.05208 3.96734C19.5421 3.244 53.2131 1.89332 54.0695 1.81065C55.3169 1.69065 54.2378 3.14266 55.4208 3.04133L55.4214 3.042Z" fill="currentColor"></path></svg>
                            </h2>

                            {/* Subtitle */}
                            <p className="text-neutral-300 text-base font-normal mt-8 sm:mt-10 ">
                                Here are the answers to your common queries about streamlining your projects with GripCRM.
                            </p>
                        </div>

                        {/* Still Need Help Callout */}
                        <div className="mt-8 sm:mt-10 flex items-center gap-2.5 text-neutral-300">
                            <MessageSquareText className="w-5 h-5 text-slate-300 shrink-0" />
                            <span className="text-sm sm:text-base font-medium text-slate-300">
                                Still need help?{" "}
                                <a
                                    href="#chat"
                                    className="relative inline-block text-orange-500 font-semibold ml-1 transition-colors"
                                >
                                    Chat with us
                                </a>
                            </span>
                        </div>
                    </div>

                    {/* Right Column: Accordion Items */}
                    <div className="lg:col-span-7 flex flex-col gap-4 sm:gap-4.5 w-full">
                        {faqData.map((faq, index) => {
                            const isOpen = openIndex === index;
                            return (
                                <div
                                    key={index}
                                    onClick={() => toggleFaq(index)}
                                    className={`bg-white cursor-pointer transition-all duration-300 rounded-md p-5 sm:p-6`}
                                >
                                    <div className="flex items-start gap-4">
                                        {/* Left Chevron Icon */}

                                        <div className="flex-1">
                                            {/* Question Title */}
                                            <h3 className="font-semibold text-base sm:text-lg text-neutral-900 leading-snug">
                                                {faq.question}
                                            </h3>

                                            {/* Expandable Answer */}
                                            <div
                                                className={`grid transition-all duration-300 ease-in-out ${isOpen
                                                    ? "grid-rows-[1fr] opacity-100 mt-3"
                                                    : "grid-rows-[0fr] opacity-0 mt-0"
                                                    }`}
                                            >
                                                <div className="overflow-hidden">
                                                    <p className="text-neutral-700 text-base font-normal leading-7">
                                                        {faq.answer}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <button
                                            type="button"
                                            aria-label="Toggle Question"
                                            className="mt-0.5 shrink-0 text-slate-900 focus:outline-none transition-transform duration-300 ease-in-out"
                                        >
                                            {isOpen ? (
                                                <Minus className="w-5 h-5 sm:w-6 sm:h-6 stroke-[1.5]" />
                                            ) : (
                                                <Plus className="w-5 h-5 sm:w-6 sm:h-6 stroke-[1.5]" />
                                            )}
                                        </button>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                </div>
            </div>

            <Cta className="pt-16 md:pt-24" />
        </section>
    );
}
