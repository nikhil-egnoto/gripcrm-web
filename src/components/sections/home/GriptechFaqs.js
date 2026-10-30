'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from "framer-motion";
import Link from 'next/link';
import { Plus, Minus } from 'lucide-react';
import Button from '@/components/ui/Button';
import SplitText from '@/components/providers/SplitText';
import { fadeInUp } from '@/components/providers/motionAnimation';

const FAQS = [
    {
        id: 'cost',
        question: 'How much does this cost?',
        answer:
            "Pricing depends on your business size and which products or services you need. Get in touch and we'll put together a plan that fits.",
    },
    {
        id: 'products',
        question: 'Do I have to use all three products?',
        answer:
            'No. Take GripCRM, Grip Estimator, and Ninja AI on their own or together — most customers start with one and add more later.',
    },
    {
        id: 'dealers',
        question: 'Is this only built for dealers?',
        answer:
            'No. grip.tech works for dealers, manufacturers, and contractors, each with tools built around how their side of the business runs.',
    },
    {
        id: 'setup-time',
        question: 'How long does setup take?',
        answer:
            'Most customers are up and running within a couple of weeks. We\'ll walk you through onboarding step by step.',
    },
    {
        id: 'training-support',
        question: 'Do you offer training and support?',
        answer:
            'Yes. We walk you through onboarding, and you can reach a real person on our team whenever you have a question.',
    },
];

export default function GriptechFaqs({ fields, faqsDescription }) {
    const [openId, setOpenId] = useState('cost');

    const toggleFaq = (index) => {
        setOpenId((prev) => (prev === index ? null : index));
    };

    const faqsData = fields?.faqs;

    return (
        <section className="bg-white py-16 sm:py-20 lg:py-24 select-none">
            <div className="lg:container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
                    {/* Left Column: Heading and "Still have questions?" Card */}
                    <div className="lg:col-span-5 flex flex-col h-full">
                        <div>
                            {/* FAQ Kicker */}
                            <div className="flex items-center gap-2 mb-3">
                                <span className="size-1.5 rounded-full transition-colors duration-300 bg-madison-700 blink-dot" />
                                <span className="text-xs sm:text-[13px] font-normal tracking-wider text-madison-700 uppercase">
                                    FAQ
                                </span>
                            </div>

                            {/* Main Heading */}
                            <SplitText
                                text={fields?.faq_title || "Common questions"}
                                className="text-3xl sm:text-4xl md:text-5xl font-medium text-madison-950 blur-rise"
                                effect="rise"
                                splitType="words"
                                delay={30}
                                duration={0.75}
                                staggerFrom="start"
                                trigger="view"
                                hoverEffect="none"
                                loop={false}
                                loopDelay={0.5}
                                mask={false}
                                threshold={0.1}
                                rootMargin="0"
                                textAlign="start"
                            />
                            {/* Subtitle */}
                            <div>
                                <SplitText
                                    text={fields?.faq_subtitle || faqsDescription}
                                    className="mt-4 sm:mt-5 text-base text-madison-950/60 leading-relaxed font-normal max-w-sm blur-rise"
                                    effect="rise"
                                    splitType="words"
                                    delay={30}
                                    duration={0.75}
                                    staggerFrom="start"
                                    trigger="view"
                                    hoverEffect="none"
                                    loop={false}
                                    loopDelay={0.5}
                                    mask={false}
                                    threshold={0.1}
                                    rootMargin="0"
                                    textAlign="start"
                                />
                            </div>
                        </div>

                        {/* Bottom Support / Still Have Questions Card */}
                        <motion.div {...fadeInUp} className="mt-12 sm:mt-16 lg:mt-24">
                            {/* Avatar Stack + "You" Badge */}
                            <div className="flex items-center">
                                <div className="flex -space-x-1.5 items-center">
                                    <div className="relative w-8 h-8 sm:w-9 sm:h-9 rounded-full ring-2 ring-white overflow-hidden bg-slate-200 shrink-0">
                                        <Image
                                            src="/images/home/avatar-1.jpg"
                                            alt="Team member"
                                            fill
                                            sizes="36px"
                                            className="object-cover"
                                        />
                                    </div>
                                    <div className="relative w-8 h-8 sm:w-9 sm:h-9 rounded-full ring-2 ring-white overflow-hidden bg-slate-200 shrink-0">
                                        <Image
                                            src="/images/home/avatar-2.jpg"
                                            alt="Team member"
                                            fill
                                            sizes="36px"
                                            className="object-cover"
                                        />
                                    </div>
                                    <div className="relative w-8 h-8 sm:w-9 sm:h-9 rounded-full ring-2 ring-white overflow-hidden bg-slate-200 shrink-0">
                                        <Image
                                            src="/images/home/avatar-3.jpg"
                                            alt="Team member"
                                            fill
                                            sizes="36px"
                                            className="object-cover"
                                        />
                                    </div>
                                </div>

                                <span className="mx-2 text-xs sm:text-sm font-bold text-slate-900 select-none">
                                    +
                                </span>

                                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#0E172A] text-white text-[11px] sm:text-xs font-semibold flex items-center justify-center ring-2 ring-white select-none shrink-0">
                                    You
                                </div>
                            </div>

                            {/* Text info */}
                            <h3 className="mt-5 text-base sm:text-lg font-medium text-madison-950">
                                Still have questions?
                            </h3>
                            <p className="mt-1 text-xs sm:text-sm text-madison-950/60 font-normal">
                                Reach out, and our team will guide you.
                            </p>

                            {/* Action Button */}
                            <Button
                                href="/contact"
                                className="inline-flex mt-5 bg-madison-700 text-neutral-100 border-0 split-btn hover:shadow-[0px_0px_0px_2px_#80b9ff,0px_0.48175px_0.86715px_-1.41667px_rgba(0,0,0,0.16),0px_1.83083px_3.29549px_-2.83333px_rgba(0,0,0,0.14),0px_8px_14.4px_-4.25px_rgba(0,0,0,0.03)]"
                            >
                                <span className="wave-text-inner flex">
                                    {"Talk to our team".split("").map((char, index) => (
                                        <span
                                            className="wave-char"
                                            key={index}
                                            style={{ "--i": index }}
                                        >
                                            <span>{char === " " ? "\u00A0" : char}</span>
                                            <span>{char === " " ? "\u00A0" : char}</span>
                                        </span>
                                    ))}
                                </span>
                            </Button>
                        </motion.div>
                    </div>

                    {/* Right Column: FAQ Accordion List */}
                    <div className="lg:col-span-7 flex flex-col">
                        <div className="space-y-3 sm:space-y-3.5">
                            {faqsData.map((faq, index) => {
                                const isOpen = openId === index;

                                return (
                                    <div
                                        key={index}
                                        className={`border rounded-xl sm:rounded-2xl transition-all duration-300 bg-white ${isOpen
                                            ? 'border-madison-950'
                                            : 'border-madison-950/30 hover:border-madison-950'
                                            }`}
                                    >
                                        <button
                                            type="button"
                                            onClick={() => toggleFaq(index)}
                                            className="w-full text-left p-4 sm:p-5 lg:p-6 flex items-center justify-between gap-4 cursor-pointer select-none group"
                                            aria-expanded={isOpen}
                                        >
                                            <span className="font-medium text-sm sm:text-base text-madison-950 leading-snug">
                                                {faq.question}
                                            </span>
                                            <span className="shrink-0 flex items-center justify-center">
                                                {isOpen ? (
                                                    <span className="w-6 h-6 rounded-full bg-[#0E1C38] text-white flex items-center justify-center transition-transform duration-200">
                                                        <Minus className="w-3.5 h-3.5 stroke-[2.5]" />
                                                    </span>
                                                ) : (
                                                    <span className="w-6 h-6 flex items-center justify-center text-[#0E1C38] group-hover:scale-110 transition-transform duration-200">
                                                        <Plus className="w-5 h-5 stroke-[1.75]" />
                                                    </span>
                                                )}
                                            </span>
                                        </button>

                                        {/* Collapsible Answer */}
                                        <div
                                            className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out ${isOpen
                                                ? 'grid-rows-[1fr] opacity-100'
                                                : 'grid-rows-[0fr] opacity-0'
                                                }`}
                                        >
                                            <div className="overflow-hidden">
                                                <div className="px-4 pb-4 sm:px-5 sm:pb-5 lg:px-6 lg:pb-6 pt-0 text-madison-950/60 text-xs sm:text-sm leading-relaxed max-w-xl">
                                                    {faq.answer}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        {/* View All FAQs Button */}
                        <div className="flex justify-end pt-4 sm:pt-5">
                            <Link
                                href="/faqs"
                                className="inline-flex items-center justify-center px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg bg-[#0E172A] hover:bg-[#1E293B] text-white text-xs sm:text-sm font-semibold transition-colors duration-200 shadow-sm"
                            >
                                View all FAQs
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}