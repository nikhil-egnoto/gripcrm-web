'use client';

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Building2, Layers, Workflow, Bot } from "lucide-react";
import { containerVariants, fadeInUp } from "@/components/providers/motionAnimation";
import SplitText from "@/components/providers/SplitText";

const LEFT_CARDS = [
    {
        id: "built-for-one-industry",
        title: "Built for one industry",
        description:
            "Not generic software stretched to fit metal buildings. Built around it from the start.",
        icon: Building2,
    },
    {
        id: "one-system-not-scattered-tools",
        title: "One system, not scattered tools",
        description:
            "GripCRM, Grip Estimator, and Ninja AI share the same data, automatically.",
        icon: Layers,
    },
];

const RIGHT_CARDS = [
    {
        id: "quote-to-close-all-connected",
        title: "Quote to close, all connected",
        description:
            "A lead enters GripCRM, gets a 3D quote from Grip Estimator, and moves forward without re-entering data.",
        icon: Workflow,
    },
    {
        id: "ai-that-works-after-hours",
        title: "AI that works after hours",
        description:
            "Ninja AI answers customer questions and captures lead details while your team is offline.",
        icon: Bot,
    },
];

export default function WhyGriptech() {
    const sectionRef = useRef(null);
    const gridRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 1024);
        };
        checkMobile();
        window.addEventListener("resize", checkMobile, { passive: true });
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    useEffect(() => {
        const target = gridRef.current || sectionRef.current;
        if (!target) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                        observer.unobserve(target); // Trigger only once
                    }
                });
            },
            {
                threshold: 0,
                rootMargin: "-45% 0px -45% 0px",
            }
        );

        observer.observe(target);

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <section
            ref={sectionRef}
            className="relative bg-madison-950 text-white py-16 sm:py-20 md:py-24 lg:py-28 overflow-hidden select-none"
        >
            <div className="relative z-10 lg:container mx-auto px-4">
                {/* Section Header */}
                <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-12 lg:mb-14">
                    {/* Tag / Category Badge */}
                    <div className="inline-flex items-center gap-2 mb-3">
                        <span className="size-1.5 rounded-full transition-colors duration-300 bg-light blink-dot" />
                        <span className="text-xs sm:text-[13px] font-normal tracking-wider text-light uppercase">
                            WHY GRIPTECH
                        </span>
                    </div>

                    {/* Main Title */}
                    <h2>
                        <SplitText
                            text="Less juggling, more building"
                            className="text-3xl sm:text-4xl md:text-5xl font-medium text-white leading-[1.14] blur-rise"
                            effect="rise"
                            splitType="Chars"
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
                    </h2>

                    {/* Subtitle Paragraph */}
                    <SplitText
                        text="Your CRM, estimating, and AI assistant work from the same data, so your team
                        spends time on customers instead of software."
                        className="text-center! mt-4 sm:mt-5 text-base text-madison-50/60 max-w-2xl mx-auto leading-relaxed font-normal blur-rise"
                        effect="rise"
                        splitType="Chars"
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

                {/* Responsive Dynamic Grid Showcase:
                    - When scrolling: initially shows only 2 equal columns of content cards (0 image card space).
                    - When section is shown in view: center image card smoothly expands & fades in,
                      and left & right content cards smoothly auto-adjust their width and position outward.
                    - No scroll-driven scrub/hijack: smoothly animated upon entry. */}
                <div
                    ref={gridRef}
                    className="grid items-stretch w-full will-change-[grid-template-columns,column-gap]"
                    style={{
                        gridTemplateColumns: isMobile
                            ? "1fr"
                            : isVisible
                                ? "minmax(0, 1.4fr) minmax(0, 1fr) minmax(0, 1.4fr)"
                                : "minmax(0, 1fr) minmax(0, 0fr) minmax(0, 1fr)",
                        columnGap: isMobile ? "1.5rem" : isVisible ? "1.5rem" : "0.75rem",
                        rowGap: "1.5rem",
                        transition:
                            "grid-template-columns 0.9s cubic-bezier(0.16, 1, 0.3, 1), column-gap 0.9s cubic-bezier(0.16, 1, 0.3, 1)",
                    }}
                >
                    {/* Left Column: 2 Content Cards */}
                    <div className="flex flex-col gap-6 justify-between h-full order-1 min-w-0">
                        {LEFT_CARDS.map((card) => {
                            const IconComponent = card.icon;
                            return (
                                <div
                                    key={card.id}
                                    className="group flex-1 bg-white/5 border border-white/5 rounded-2xl p-6 flex flex-col justify-between md:h-68"
                                >
                                    {/* Icon Tile */}
                                    <div className="size-14 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center mb-6 sm:mb-8 transition-transform duration-300">
                                        <IconComponent className="size-8 text-white stroke-[1.75]" />
                                    </div>
                                    <div>
                                        {/* Card Title */}
                                        <h3 className="text-white font-medium text-xl sm:text-2xl tracking-tight mb-3">
                                            {card.title}
                                        </h3>

                                        {/* Card Description */}
                                        <p className="text-light/60 text-base leading-relaxed font-normal">
                                            {card.description}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Center Column: Center Image Card
                        - 0 width/space initially, expands smoothly in center when section shows
                        - Fades and scales in with smooth bloom animation */}
                    <div
                        className="flex flex-col justify-center order-2 lg:order-2 mb-0! min-w-0 overflow-hidden will-change-[opacity,transform] h-100 md:h-140"
                        style={{
                            opacity: isVisible ? 1 : 0,
                            transform: isVisible
                                ? "scale(1) translateY(0)"
                                : "scale(0) translateY(14px)",
                            pointerEvents: isVisible ? "auto" : "none",
                            maxHeight: isMobile ? (isVisible ? "520px" : "0px") : "none",
                            marginBottom: isMobile ? (isVisible ? "1.5rem" : "0px") : "0px",
                            transition: isMobile
                                ? "max-height 0.85s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.75s cubic-bezier(0.16, 1, 0.3, 1), margin-bottom 0.85s cubic-bezier(0.16, 1, 0.3, 1)"
                                : "opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.12s, transform 2s cubic-bezier(0.16, 1, 0.3, 1)",
                        }}
                    >
                        <div className="relative w-full h-full rounded-2xl overflow-hidden bg-madison-950/60">
                            {/* Subtle inner glow placeholder while image fades */}
                            <div className="absolute inset-0 bg-radial-gradient from-blue-600/10 to-transparent pointer-events-none" />

                            {/* The Center 3D Chip Question Mark Image */}
                            <div className="absolute inset-0 w-full h-full">
                                <Image
                                    src="/images/front/why-griptech.png"
                                    alt="Why Griptech 3D Processor and Question Mark"
                                    fill
                                    priority
                                    sizes="(max-width: 1024px) 100vw, 33vw"
                                    className="object-cover select-none pointer-events-none"
                                />
                                {/* Subtle glass reflection overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1E48]/40 via-transparent to-transparent pointer-events-none" />
                            </div>
                        </div>
                    </div>

                    {/* Right Column: 2 Content Cards */}
                    <div className="flex flex-col gap-6 justify-between h-full order-3 lg:order-3 min-w-0">
                        {RIGHT_CARDS.map((card) => {
                            const IconComponent = card.icon;
                            return (
                                <div
                                    key={card.id}
                                    className="group flex-1 bg-white/5 border border-white/5 rounded-2xl p-6 flex flex-col justify-between md:h-68"
                                >
                                    {/* Icon Tile */}
                                    <div className="size-14 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center mb-6 sm:mb-8 transition-transform duration-300">
                                        <IconComponent className="size-8 text-white stroke-[1.75]" />
                                    </div>
                                    <div>
                                        {/* Card Title */}
                                        <h3 className="text-white font-medium text-xl sm:text-2xl tracking-tight mb-3">
                                            {card.title}
                                        </h3>

                                        {/* Card Description */}
                                        <p className="text-light/60 text-base leading-relaxed font-normal">
                                            {card.description}
                                        </p>
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