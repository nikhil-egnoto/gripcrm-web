"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronDown, ChevronUp, MessagesSquare } from "lucide-react";

const faqData = [
    {
        question: "Can I get a demo of Grip CRM?",
        answer: "Yes, you can request a live personalized demo with our CRM specialists to explore all features tailored to your workflow."
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
        <section className="bg-black py-16 md:py-24 overflow-hidden relative select-none px-4">
            {/* Background Texture Overlay */}
            <Image
                src="/images/home/faq-bg.png"
                alt="FAQ Background"
                fill
                className="object-cover pointer-events-none"
                priority
            />

            <div className="container mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">

                    {/* Left Column: Heading, Subtitle & Support Link */}
                    <div className="lg:col-span-5 flex flex-col justify-between items-start">
                        <div>
                            {/* Faq's Script Badge */}

                            <div className="relative sm:mb-2 mb-3">
                                <span className="relative z-10 inline-block font-spaceGrotesk font-bold text-5xl md:text-6xl text-green">
                                    Faq&apos;s
                                </span>
                                <svg className="absolute top-0 lg:top-2 left-0" width="151" height="58" viewBox="0 0 151 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M145.657 22.0648C146.201 23.5057 146.51 24.3863 146.852 25.2277C148.192 28.5049 149.51 31.8748 149.039 36.3996C148.545 41.1624 146.748 41.6283 144.95 41.9126C141.193 42.4956 137.398 42.7549 133.672 43.6073C121.954 46.2662 110.331 49.9333 98.5329 51.7461C83.7341 54.021 68.8167 55.1083 53.9027 56.2316C43.4776 57.0166 32.9756 57.0097 22.5048 57.2722C19.4867 57.3547 16.4444 57.2397 13.3984 56.9979C11.3063 56.8179 9.57787 54.3915 8.11676 50.072C7.46317 48.1506 6.49454 46.638 5.59342 45.3009C3.20075 41.7709 1.15104 38.0656 1.38308 30.7299C1.44846 28.7456 0.856205 26.3288 0.493382 24.1459C-0.643801 17.2931 0.179895 12.7918 3.02094 12.398C10.6193 11.3157 18.2507 10.6118 25.8647 9.70964C37.5591 8.32349 49.2077 6.3242 60.9651 5.65858C71.9411 5.02503 83.0254 5.70715 94.075 5.9203C109.024 6.2099 123.904 5.72491 138.452 1.5296C139.129 1.3251 139.772 0.815099 140.449 0.610697C141.423 0.307627 142.41 -0.105445 143.415 0.0244577C146.328 0.368634 149.287 6.28145 149.951 12.8489C150.482 18.1392 149.536 20.3095 145.66 22.1009L145.657 22.0648Z" fill="#395394" fillOpacity="0.75" />
                                </svg>
                            </div>

                            {/* Main Heading */}
                            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-[1.18]">
                                Frequently Asked<br className="hidden sm:inline" /> Questions
                            </h2>

                            {/* Subtitle */}
                            <p className="text-white/80 text-base md:text-xl font-normal mt-8 sm:mt-10  leading-relaxed">
                                Find answers to common queries about managing your requirments with GripCRM.
                            </p>
                        </div>

                        {/* Still Need Help Callout */}
                        <div className="mt-8 sm:mt-10 flex items-center gap-2.5 text-white/70">
                            <MessagesSquare className="w-5 h-5 text-slate-300 shrink-0" />
                            <span className="text-sm sm:text-base font-medium text-slate-300">
                                Still need help?{" "}
                                <a
                                    href="#chat"
                                    className="relative inline-block text-white font-bold ml-1 hover:text-yellow-400 transition-colors"
                                >
                                    Chat with us
                                    <svg className="absolute" width="100" height="10" viewBox="0 0 100 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M99.1119 0.512654C100.479 2.3592 100.271 4.01973 98.4884 5.49327C96.7053 6.9673 93.7488 7.91383 89.6187 8.33383C88.7046 8.36484 87.8201 8.37683 86.9656 8.37083C86.0516 8.40183 85.3651 8.51534 84.9065 8.71185C84.42 8.74585 83.152 8.81785 81.1025 8.92785C78.9499 9.01235 76.3918 9.12485 73.4288 9.26585C70.4217 9.34386 67.3036 9.44636 64.0751 9.57286C60.803 9.63636 57.7444 9.70187 54.8993 9.76837C51.9953 9.87237 49.5777 9.94187 47.6467 9.97787C45.7161 10.0139 44.6476 10.0059 44.4416 9.95437C44.3266 9.66636 44.0041 9.50786 43.4736 9.47886C42.8411 9.42436 42.2946 9.49536 41.836 9.69186C41.274 9.86287 40.6175 9.95787 39.8655 9.97737C39.0705 9.93387 38.526 9.82386 38.233 9.64686C37.8494 9.70636 37.4139 9.75336 36.9274 9.78736C36.3969 9.75836 35.9919 9.78687 35.7109 9.87237C35.4299 9.95787 35.1349 9.96187 34.8264 9.88486C34.4584 9.84486 34.1334 9.86737 33.8529 9.95287C32.9703 9.78386 31.6818 9.64336 29.9888 9.53136C28.2357 9.45636 26.2687 9.37935 24.0886 9.30085C21.8646 9.15985 19.6325 9.06835 17.393 9.02735C15.1099 8.92334 12.9814 8.85784 11.0068 8.83084C9.03228 8.80384 7.37423 8.80434 6.0327 8.83234C4.69167 8.85984 3.88065 8.91684 3.60015 9.00184C2.57963 9.36935 1.78761 8.96384 1.22409 7.78531C0.769081 7.61981 0.361573 7.1543 6.89802e-05 6.38928C6.89802e-05 6.38928 0.104561 6.23378 0.314072 5.92277C0.420571 5.58626 0.618081 5.01275 0.90609 4.20273C1.13459 3.42971 1.53709 2.9077 2.11461 2.6372C2.64813 2.30369 3.30714 2.02718 4.09016 1.80817C4.94818 1.45217 5.7832 1.24566 6.59422 1.18916C7.34623 1.16966 8.50926 1.25316 10.0843 1.43967C11.5998 1.66317 13.9844 1.97418 17.237 2.37269C18.033 2.41619 18.8495 2.49069 19.6885 2.5967C20.425 2.6772 21.1311 2.7757 21.8076 2.8932C22.3821 2.98471 22.8821 3.03221 23.3096 3.03521C23.6781 3.07521 23.9211 3.05821 24.0401 2.98421C24.3211 2.8987 24.8291 2.8962 25.5652 2.97671C26.1982 3.03121 26.9722 3.04321 27.8857 3.01221C28.5627 3.12971 29.5343 3.24271 30.8003 3.35221C32.0668 3.46122 33.3843 3.58322 34.7534 3.71822C36.0789 3.79022 37.2724 3.85522 38.3325 3.91273C39.334 4.00773 39.8945 4.01773 40.0125 3.94373C40.234 3.89523 40.507 3.85973 40.8315 3.83723C41.1125 3.75173 41.451 3.81073 41.846 4.01323C41.962 4.30124 42.2405 4.39724 42.6836 4.30024C43.0231 4.17773 43.1936 4.11673 43.1936 4.11673C43.6681 3.82023 45.6881 3.72872 49.2537 3.84223C50.9193 3.79172 53.4178 3.71623 56.7494 3.61572C60.0375 3.45222 63.7011 3.27872 67.7406 3.09571C71.6772 2.88671 75.5628 2.6652 79.3969 2.4307C83.1715 2.23319 86.4376 2.03819 89.1951 1.84618C91.9092 1.59118 93.6363 1.32267 94.3758 1.04067C95.9143 0.439652 96.9563 0.103644 97.5023 0.0326431C98.1079 -0.0753595 98.6439 0.0846442 99.1114 0.512654L99.1119 0.512654Z" fill="#FFD00F" />
                                    </svg>
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
                                    className={`cursor-pointer transition-all duration-300 rounded-md p-5 sm:p-6 ${isOpen
                                        ? "bg-white text-black shadow-2xl scale-[1.01]"
                                        : "bg-[#e6f1fc] hover:bg-white text-black"
                                        }`}
                                >
                                    <div className="flex items-start gap-4">
                                        {/* Left Chevron Icon */}
                                        <button
                                            type="button"
                                            aria-label="Toggle Question"
                                            className="mt-0.5 shrink-0 text-slate-900 focus:outline-none"
                                        >
                                            {isOpen ? (
                                                <ChevronUp className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.5]" />
                                            ) : (
                                                <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.5]" />
                                            )}
                                        </button>

                                        <div className="flex-1">
                                            {/* Question Title */}
                                            <h3 className="font-bold text-base sm:text-lg text-slate-900 leading-snug">
                                                {faq.question}
                                            </h3>

                                            {/* Expandable Answer */}
                                            {isOpen && (
                                                <p className="mt-3 text-black/50 text-sm sm:text-base leading-relaxed font-normal">
                                                    {faq.answer}
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                </div>
            </div>
        </section>
    );
}
