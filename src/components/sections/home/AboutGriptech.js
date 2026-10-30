'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { MoveRight } from "lucide-react";
import { fadeInUp } from "@/components/providers/motionAnimation";
import ScrollReveal from "@/components/providers/ScrollReveal";

const ABOUT_CARDS = [
    {
        id: "practical-by-design",
        title: "Practical by design",
        description:
            "We build tools your team can use on a busy day, not software that needs a manual.",
        type: "card",
    },
    {
        id: "hands-on-support",
        title: "Hands-on support",
        description:
            "We pair our software with real people, so you get practical help setting things up, not just a login.",
        type: "featured-image",
        image: "/images/front/hands-on-support-building.png",
    },
    {
        id: "partner-for-the-long-run",
        title: "A partner for the long run",
        description:
            "Start with what you need today. We stay alongside you as your business and your needs change.",
        type: "card",
    },
];

const AUDIENCE_AVATARS = [
    { src: "/images/home/avatar-1.jpg", alt: "Dealer representative" },
    { src: "/images/home/avatar-2.jpg", alt: "Manufacturer specialist" },
    { src: "/images/home/avatar-3.jpg", alt: "Contractor partner" },
];

export default function AboutGriptech() {
    return (
        <section className="relative bg-madison-50 py-18 overflow-hidden select-none">
            <div className="relative z-10 lg:container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Top Badge: ABOUT GRIPTECH (aligned top-left matching design) */}
                <div className="flex items-center gap-2 mb-8 lg:mb-0">
                    <span className="size-1.5 rounded-full transition-colors duration-300 bg-madison-700 blink-dot" />
                    <span className="text-xs sm:text-[13px] font-normal tracking-wider text-madison-700 uppercase">
                        ABOUT GRIPTECH
                    </span>
                </div>

                {/* Main Heading: 3-line statement with 2-tone contrast */}
                <div
                    className="max-w-4xl ml-auto text-left"
                >
                    <ScrollReveal
                        splitBy="chars"
                        baseOpacity={0.5}
                        baseRotation={0}
                        enableBlur={false}
                        stagger={0.5}
                        smoothing={0.5}
                        mode="scrub"
                        wordAnimationStart="top 80%"
                        wordAnimationEnd="top 18%"
                        containerClassName="w-full"
                        textClassName="scroll-reveal-text text-start text-4xl lg:text-5xl font-medium tracking-tight leading-[1.14]"
                    >
                        We build software and digital tools that help metal building businesses sell more and run smoother.
                    </ScrollReveal>

                    {/* Action Row: CTA Pill + Arrow Button & Built For Avatars */}
                    <div className="mt-8 sm:mt-10 mb-12 sm:mb-16 flex flex-wrap items-center justify-start gap-6 sm:gap-10">
                        {/* CTA Button Group */}
                        <Link
                            href="/about"
                            className="group inline-flex items-center select-none"
                        >
                            <div className="rounded-full px-7 flex items-center justify-center bg-madison-950 text-neutral-100 border-0 me-1.5 transition-all duration-300 group-hover:bg-madison-700 group-hover:rounded-r-none group-hover:me-0 group-hover:px-7.5 h-11 text-sm font-medium shadow-sm">
                                Know More
                            </div>
                            <div className="size-11 bg-madison-950 text-neutral-100 rounded-full flex items-center justify-center transition-all duration-300 group-hover:rounded-l-none group-hover:bg-madison-700 shadow-sm">
                                <MoveRight className="size-4.5 transition-transform duration-300 group-hover:translate-x-0.5" />
                            </div>
                        </Link>

                        {/* Built For + Avatar Stack */}
                        <div className="flex items-center gap-3">
                            <div className="flex -space-x-2.5 overflow-hidden">
                                {AUDIENCE_AVATARS.map((avatar, idx) => (
                                    <Image
                                        key={idx}
                                        src={avatar.src}
                                        alt={avatar.alt}
                                        width={40}
                                        height={40}
                                        className="inline-block size-9 sm:size-10 rounded-full ring-2 ring-white object-cover"
                                    />
                                ))}
                            </div>
                            <div className="flex flex-col text-left">
                                <span className="text-[11px] sm:text-xs text-madison-950/50 font-normal">
                                    Built for
                                </span>
                                <span className="text-xs sm:text-sm font-medium text-madison-950 tracking-tight">
                                    Dealers, Manufacturers &amp; Contractors
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 3-Column Feature Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
                    {ABOUT_CARDS.map((card, index) => {
                        const isFeatured = card.type === "featured-image";

                        if (isFeatured) {
                            return (
                                <motion.div
                                    key={card.id}
                                    {...fadeInUp}
                                    transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
                                    className="group relative rounded-2xl overflow-hidden p-8 flex flex-col justify-between min-h-96"
                                >
                                    {/* Background Image & Overlays */}
                                    <div className="absolute inset-0 z-0">
                                        <Image
                                            src={card.image}
                                            alt={card.title}
                                            fill
                                            sizes="(max-width: 768px) 100vw, 33vw"
                                            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 select-none pointer-events-none"
                                        />
                                        {/* Subtle top shade for top icon legibility */}
                                        <div className="hidden w-[96%] mx-auto absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-madison-950/25 to-transparent pointer-events-none" />
                                        {/* Rich bottom dark overlay for crisp text contrast */}
                                        <div className="w-[96%] mx-auto absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-black/90 via-black/60 to-transparent pointer-events-none" />
                                    </div>

                                    {/* Top Icon Tile */}
                                    <div className="relative z-10 size-13 rounded-lg bg-white flex items-center justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width={30} height={30} fill="#0e409a" viewBox="0 0 256 256" ><g weight="duotone"><path d="M216,120v96H152V152H104v64H40V120a8,8,0,0,1,2.34-5.66l80-80a8,8,0,0,1,11.32,0l80,80A8,8,0,0,1,216,120Z" opacity="0.2"></path><path d="M219.31,108.68l-80-80a16,16,0,0,0-22.62,0l-80,80A15.87,15.87,0,0,0,32,120v96a8,8,0,0,0,8,8h64a8,8,0,0,0,8-8V160h32v56a8,8,0,0,0,8,8h64a8,8,0,0,0,8-8V120A15.87,15.87,0,0,0,219.31,108.68ZM208,208H160V152a8,8,0,0,0-8-8H104a8,8,0,0,0-8,8v56H48V120l80-80,80,80Z"></path></g></svg>
                                    </div>

                                    {/* Bottom Content */}
                                    <div className="relative z-10 mt-16 sm:mt-24">
                                        <h3 className="text-white font-medium text-2xl tracking-tight mb-3">
                                            {card.title}
                                        </h3>
                                        <p className="text-white/85 text-sm sm:text-base leading-relaxed font-normal">
                                            {card.description}
                                        </p>
                                    </div>
                                </motion.div>
                            );
                        }

                        return (
                            <motion.div
                                key={card.id}
                                {...fadeInUp}
                                transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
                                className="group flex-1 bg-white rounded-2xl p-6 flex flex-col justify-between h-72 md:h-100">
                                {/* Top Icon Tile */}
                                <div className="relative z-10 size-13 rounded-lg bg-madison-50 flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width={30} height={30} fill="#0e409a" viewBox="0 0 256 256" ><g weight="duotone"><path d="M216,120v96H152V152H104v64H40V120a8,8,0,0,1,2.34-5.66l80-80a8,8,0,0,1,11.32,0l80,80A8,8,0,0,1,216,120Z" opacity="0.2"></path><path d="M219.31,108.68l-80-80a16,16,0,0,0-22.62,0l-80,80A15.87,15.87,0,0,0,32,120v96a8,8,0,0,0,8,8h64a8,8,0,0,0,8-8V160h32v56a8,8,0,0,0,8,8h64a8,8,0,0,0,8-8V120A15.87,15.87,0,0,0,219.31,108.68ZM208,208H160V152a8,8,0,0,0-8-8H104a8,8,0,0,0-8,8v56H48V120l80-80,80,80Z"></path></g></svg>
                                </div>

                                {/* Bottom Content */}
                                <div className="mt-16 sm:mt-24">
                                    <h3 className="text-madison-950 font-medium text-2xl tracking-tight mb-3">
                                        {card.title}
                                    </h3>
                                    <p className="text-madison-950/60 text-sm sm:text-base leading-relaxed font-normal">
                                        {card.description}
                                    </p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}