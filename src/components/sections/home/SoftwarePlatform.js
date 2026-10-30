'use client';

import Link from "next/link";
import { motion } from "framer-motion";
import { MoveRight, CheckCircle2 } from "lucide-react";
import ScrollReveal from "@/components/providers/ScrollReveal";
import ScrollStack, { ScrollStackItem } from "@/components/providers/ScrollStack";
import Image from "next/image";

import { fadeInUp, fadeZoomIn, containerVariants } from "@/components/providers/motionAnimation";

const PLATFORM_HIGHLIGHTS = [
    {
        id: "crm",
        title: "Track every lead",
        subtitle: "GripCRM · Lead & Sales Management",
        href: "/gripcrm",
        icon: (
            <svg
                className="size-7 text-[#1E5BE6]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.9"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
            >
                {/* Separated top-right pie wedge */}
                <path d="M21 12c.552 0 1.005-.449.95-.998a10 10 0 0 0-8.953-8.951c-.55-.055-.998.398-.998.95v8a1 1 0 0 0 1 1z" />
                {/* Remaining pie chart base */}
                <path d="M21.21 15.89A10 10 0 1 1 8 2.83" />
            </svg>
        ),
    },
    {
        id: "estimator",
        title: "Show it in 3D",
        subtitle: "Grip Estimator · 3D Quoting",
        href: "/estimator",
        icon: (
            <svg
                className="size-7 text-[#1E5BE6]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.9"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
            >
                {/* 3D isometric cube outline */}
                <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
                {/* Top face division */}
                <path d="m3.3 7 8.7 5 8.7-5" />
                {/* Center vertical edge */}
                <path d="M12 22V12" />
            </svg>
        ),
    },
    {
        id: "ai",
        title: "Never miss a customer",
        subtitle: "Ninja AI · AI Assistant",
        href: "/ninja-ai",
        icon: (
            <svg
                className="size-7 text-[#1E5BE6]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.9"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
            >
                {/* Outer circle with top-right chat notch */}
                <circle cx="12" cy="12" r="9.5" />
                {/* Clock hands for 24/7 availability */}
                <polyline points="12 7 12 12 9 12" />
                {/* AI assistant badge */}
                <path d="M15 15.6l1.6-4.4 1.6 4.4" />
                <path d="M15.4 14.1h2.4" />
            </svg>
        ),
    },
];

const PLATFORM_ITEMS = [
    {
        id: "gripcrm",
        badge: "GRIPCRM",
        title: "From first call to\nsigned contract.",
        description: "Track every lead from first call to signed contract, with templates and reporting built for how metal building sales actually works.",
        ctaText: "Know More",
        href: "/gripcrm",
        feature: "No more leads lost in spreadsheets.",
        img: "/images/front/platform-1.png",
        bgImage: "/images/front/platform-bg.png"
    },
    {
        id: "estimator",
        badge: "GRIP ESTIMATOR",
        title: "Show it in 3D and\nclose quotes faster.",
        description: "Design, price, and close metal buildings in real-time 3D. Give customers instant estimates and eliminate costly quoting errors.",
        ctaText: "Know More",
        href: "/estimator",
        feature: "Instant 3D rendering with live pricing.",
        img: "/images/front/platform-2.png",
        bgImage: "/images/front/platform-bg.png"
    },
    {
        id: "ninja-ai",
        badge: "NINJA AI",
        title: "Never miss a lead\nwith 24/7 AI follow-ups.",
        description: "Capture, qualify, and follow up with metal building buyers around the clock, even when your sales team is offline.",
        ctaText: "Know More",
        href: "/ninja-ai",
        feature: "24/7 automated lead capture & engagement.",
        img: "/images/front/platform-3.png",
        bgImage: "/images/front/platform-bg-3.png"
    },
];

export default function SoftwarePlatform() {
    const platformBg = "/images/front/platform-bg.png";

    return (
        <section className="relative bg-[#0E285D] pb-28 md:pb-36 px-4 overflow-clip">
            {/* Ambient luminous radial glow matching design depth */}
            <div className="absolute inset-0 overflow-hidden opacity-50 pointer-events-none flex-col flex pt-10 items-center">
                <div className="block w-full h-[700px] pointer-events-none bg-madison-700 will-change-transform mask-[radial-gradient(ellipse_50%_50%_at_50%_50%,_#000_0%,_#0000_100%)]" aria-hidden="true" />
            </div>

            {/* Stacking Product Feature Cards */}
            <div className="container relative z-10 w-full mx-auto">
                <ScrollStack
                    stackPosition="15%"
                    itemDistance={260}
                    itemStackDistance={0}
                    itemScale={0.04}
                    baseScale={0.88}
                    dimAmount={0.2}
                    blurAmount={0}
                    holdDistance={260}
                    useWindowScroll={true}
                >
                    <ScrollStackItem
                        itemDistance="50vh"
                        fadeOnCover={true}
                        itemClassName="overflow-hidden min-h-[calc(100vh-200px)] flex flex-col justify-center py-6"
                    >
                        <div className="relative z-10 max-w-6xl mx-auto flex flex-col items-center">
                            {/* Main Scroll-Reveal Statement */}
                            <div className="w-full max-w-[860px] mx-auto">
                                <ScrollReveal
                                    splitBy="chars"
                                    baseOpacity={0.05}
                                    baseRotation={0}
                                    enableBlur={false}
                                    stagger={0.5}
                                    smoothing={0.5}
                                    mode="scrub"
                                    wordAnimationStart="top 80%"
                                    wordAnimationEnd="top 18%"
                                    containerClassName="w-full"
                                    textClassName="text-xl sm:text-4xl md:text-5xl lg:text-[46px] leading-[1.32] md:leading-[1.34] font-normal text-white tracking-[-0.015em] text-start md:text-center"
                                >
                                    GripTech is a software platform for metal building dealers, manufacturers, and contractors that helps you track leads, quote in 3D, and follow up automatically.
                                </ScrollReveal>
                            </div>

                            {/* Three Feature Highlight Cards */}
                            <motion.div
                                variants={containerVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.1 }}
                                className="mt-6 sm:mt-14 md:mt-18 w-full max-w-4xl grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8 md:gap-8 lg:gap-14 items-start justify-items-start md:justify-items-center"
                            >
                                {PLATFORM_HIGHLIGHTS.map((item) => (
                                    <motion.div
                                        key={item.id}
                                        variants={fadeInUp}
                                        className="group flex flex-row md:flex-col md:gap-0 gap-3 text-start md:items-center md:text-center cursor-pointer select-none"
                                    >
                                        {/* Icon Tile */}
                                        <div className="size-14 md:size-16 rounded-2xl bg-white flex items-center justify-center shadow-[0_10px_25px_-5px_rgba(0,0,0,0.25)] group-hover:shadow-[0_14px_30px_-5px_rgba(30,91,230,0.35)] group-hover:scale-105 transition-all duration-300">
                                            {item.icon}
                                        </div>

                                        <div>
                                            <h3 className="text-white font-medium text-base sm:text-lg tracking-tight md:mt-5 mb-1.5 transition-colors group-hover:text-white">
                                                {item.title}
                                            </h3>

                                            <p className="text-blue-200/60 text-xs sm:text-sm font-normal tracking-normal transition-colors group-hover:text-blue-100/85">
                                                {item.subtitle}
                                            </p>
                                        </div>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </div>
                    </ScrollStackItem>

                    {PLATFORM_ITEMS.map((item) => (
                        <ScrollStackItem
                            key={item.id}
                            itemClassName="overflow-hidden rounded-3xl shadow-[0_25px_60px_-15px_rgba(0,0,0,0.5)] border border-white/15"
                        >
                            <div
                                className="relative w-full rounded-3xl p-2 overflow-hidden"
                            >
                                <div className="absolute inset-0 z-0 w-full h-full">
                                    <Image src={item.bgImage} width={1534} height={1023} alt="platform bg" className="w-full h-full object-cover drop-shadow-lg" />
                                </div>

                                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 items-stretch">
                                    {/* Left Column: Product UI Showcase */}
                                    <motion.div {...fadeZoomIn} className="relative flex items-center justify-center p-3 md:p-4 lg:p-10 lg:min-h-[500px] nth-5:order-2">
                                        <img
                                            src={item.img}
                                            alt={item.title.replace('\n', ' ')}
                                            className="w-auto lg:max-h-127 md:max-h-75 max-h-50 h-auto object-contain select-none pointer-events-none drop-shadow-[0_20px_35px_rgba(0,0,0,0.18)]"
                                        />
                                    </motion.div>

                                    {/* Right Column: White Content Card */}
                                    <motion.div
                                        variants={containerVariants}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true, amount: 0.5 }} className="bg-white rounded-2xl p-4 md:p-8 lg:p-14 flex flex-col justify-between shadow-[0_4px_24px_rgba(0,0,0,0.06)]">
                                        <div>
                                            {/* Tag / Badge */}
                                            <motion.div variants={fadeInUp} className="flex items-center gap-2 mb-3 sm:mb-6 lg:mb-8">
                                                <span className="size-1.5 bg-madison-700 block rounded-full blink-dot" />
                                                <span className="text-xs sm:text-[13px] font-normal tracking-wider text-madison-700 uppercase">
                                                    {item.badge}
                                                </span>
                                            </motion.div>

                                            {/* Title */}
                                            <motion.h3 variants={fadeInUp} className="text-xl sm:text-3xl lg:text-4xl font-medium text-madison-950 tracking-[-0.02em] leading-[1.15] md:whitespace-pre-line mb-5 sm:mb-6">
                                                {item.title}
                                            </motion.h3>

                                            {/* Description */}
                                            <motion.p variants={fadeInUp} className="hidden sm:block text-madison-950/60 text-base font-normal">
                                                {item.description}
                                            </motion.p>
                                        </div>

                                        {/* Bottom Actions & Highlights */}
                                        <div className="sm:mt-6 lg:mt-14 space-y-4 lg:space-y-8">
                                            {/* CTA Button Group */}
                                            <div className="flex items-center gap-2.5">
                                                <Link
                                                    href={item.href}
                                                    className="group flex items-center"
                                                >
                                                    <div className="rounded-full px-6 flex items-center justify-center bg-madison-950 text-neutral-100 border-0 me-1 transition-all duration-500 group-hover:bg-madison-700 group-hover:rounded-r-none group-hover:me-0 group-hover:px-6.5 h-9">
                                                        {item.ctaText}
                                                    </div>
                                                    <div className="size-9 bg-madison-950 text-neutral-100 rounded-full flex items-center justify-center transition-all duration-500 group-hover:rounded-l-none group-hover:bg-madison-700">
                                                        <MoveRight className="size-4.5 transition-transform duration-300" />
                                                    </div>
                                                </Link>
                                            </div>

                                            {/* Checkmark Feature */}
                                            <div className="flex items-center gap-2.5 sm:gap-3 text-slate-500 text-xs sm:text-sm font-normal">
                                                <CheckCircle2 className="size-4.5 sm:size-5 text-slate-400 stroke-[1.75] shrink-0" />
                                                <span>{item.feature}</span>
                                            </div>
                                        </div>
                                    </motion.div>
                                </div>
                            </div>
                        </ScrollStackItem>
                    ))}
                </ScrollStack>
            </div>


        </section>
    );
}