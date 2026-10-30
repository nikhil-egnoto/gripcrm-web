'use client';

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { MoveRight } from "lucide-react";
import { motion } from "framer-motion";
import CursorGrid from "@/components/providers/CursorGrid";

import { slideInLeft } from "@/components/providers/motionAnimation";
import SplitText from "@/components/providers/SplitText";

const SERVICES_DATA = [
    {
        id: "website-development",
        badge: "CUSTOM WEBSITES",
        title: "Website\nDevelopment",
        description:
            "A website built to sell buildings, not to fit a template. Designed around your business and connected straight into GripCRM and Grip Estimator, so inquiries flow into your sales process.",
        ctaText: "Know More",
        href: "/website-development",
        image: "/images/front/website-development.png",
    },
    {
        id: "production-workflow",
        badge: "PRODUCTION WORKFLOW",
        title: "Digital\nSolutions for Manufacturers",
        description:
            "Digitize your production side, from order intake to shop-floor tracking. We build tools around how your metal buildings actually get made, so orders move to production without being re-typed.",
        ctaText: "Know More",
        href: "/website-development",
        image: "/images/front/production-workflow.png",
    },
    {
        id: "digital-solutions-for-dealers",
        badge: "DIGITAL SOLUTIONS FOR DEALERS",
        title: "Digital\nSolutions for\nDealers",
        description:
            "Tools for everything beyond the sale, including inventory, service calls, and daily dealership operations. Built around how your dealership runs, so your team spends less time on admin.",
        ctaText: "Know More",
        href: "/website-development",
        image: "/images/front/digital-solutions-for-dealers.png",
    }
];

export default function BusinessSoluctions() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [visibleItems, setVisibleItems] = useState({ 0: true });
    const contentRefs = useRef([]);

    // Track scroll position to update active service based on which content item is in view
    useEffect(() => {
        let ticking = false;

        const updateActiveService = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    const viewportCenter = window.innerHeight * 0.45;
                    let closestIndex = 0;
                    let minDistance = Infinity;

                    contentRefs.current.forEach((el, index) => {
                        if (!el) return;
                        const rect = el.getBoundingClientRect();
                        const elementCenter = rect.top + rect.height * 0.5;
                        const distance = Math.abs(elementCenter - viewportCenter);

                        if (distance < minDistance) {
                            minDistance = distance;
                            closestIndex = index;
                        }

                        // Reveal item on mobile when scrolled into view
                        if (rect.top < window.innerHeight * 0.9 && rect.bottom > 0) {
                            setVisibleItems((prev) => (prev[index] ? prev : { ...prev, [index]: true }));
                        }
                    });

                    setActiveIndex(closestIndex);
                    ticking = false;
                });
                ticking = true;
            }
        };

        // Run once on mount
        updateActiveService();

        window.addEventListener("scroll", updateActiveService, { passive: true });
        window.addEventListener("resize", updateActiveService, { passive: true });

        // Connect with Lenis if available
        if (typeof window !== "undefined" && window.lenis) {
            window.lenis.on("scroll", updateActiveService);
        }

        return () => {
            window.removeEventListener("scroll", updateActiveService);
            window.removeEventListener("resize", updateActiveService);
            if (typeof window !== "undefined" && window.lenis) {
                window.lenis.off("scroll", updateActiveService);
            }
        };
    }, []);

    // IntersectionObserver to trigger mobile fade-in when scrolling
    useEffect(() => {
        if (typeof window === "undefined") return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const idx = entry.target.getAttribute("data-index");
                        if (idx !== null) {
                            setVisibleItems((prev) => (prev[idx] ? prev : { ...prev, [idx]: true }));
                        }
                    }
                });
            },
            {
                threshold: 0.15,
                rootMargin: "0px 0px -30px 0px",
            }
        );

        contentRefs.current.forEach((el) => {
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    const handleJumpToService = (index) => {
        const target = contentRefs.current[index];
        if (!target) return;
        if (typeof window !== "undefined" && window.lenis) {
            window.lenis.scrollTo(target, {
                offset: -100,
                duration: 1.0,
                easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            });
        } else {
            target.scrollIntoView({ behavior: "smooth", block: "center" });
        }
    };

    return (
        <CursorGrid
            className="w-full relative bg-madison-50"
            cellSize={45}
            color="#0e285d10"
            gridColor="#fff"
            highlight="area"
            gridStyle="dots"
            radius={160}
            holdTime={400}
            fadeDuration={600}
            lineWidth={1}
            fillOpacity={0.03}
            gridOpacity={0.22}
            spotlight={0.5}
            clickPulse={true}
            pulseSpeed={600}
            lightMode={true}
        >
            <div className="relative bg-transparent py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6 lg:px-8 overflow-visible">
                <div className="lg:container mx-auto">
                    <div className="max-w-235 mx-auto">
                        {/* Section Header */}
                        <div className="max-w-3xl mb-12 md:mb-16">
                            {/* Category Tag */}
                            <div className="flex items-center gap-2 mb-3.5">
                                <span className="size-1.5 bg-madison-700 block rounded-full blink-dot" />
                                <span className="text-xs sm:text-[13px] font-normal tracking-wider text-madison-700 uppercase">
                                    SERVICES
                                </span>
                            </div>



                            {/* Main Title */}
                            <SplitText
                                text="Custom solutions built around your business"
                                className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-medium text-madison-950 max-w-2xl blur-rise"
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

                            {/* Subtitle Paragraph */}
                            <SplitText
                                text="We build your website and the digital tools your dealership or
                                manufacturing shop needs, so you can focus on selling and building."
                                className="mt-4 sm:mt-5 text-base text-madison-950/60 max-w-xl leading-relaxed font-normal blur-rise"
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

                        {/* Sticky Scroll Services Showcase */}
                        <div className="relative">
                            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
                                {/* Left Column: Sticky Image Showcase */}
                                <div className="hidden lg:block lg:col-span-6 sticky top-16 sm:top-20 lg:top-20 z-20 py-2 lg:py-0 bg-madison-50/95 lg:bg-transparent backdrop-blur-sm lg:backdrop-blur-none transition-all">
                                    <motion.div {...slideInLeft} className="relative w-full h-[360px] sm:h-[460px] md:h-[520px] lg:h-200 rounded-2xl sm:rounded-3xl overflow-hidden bg-madison-950/5 border border-madison-950/10 shadow-[0_20px_50px_rgba(14,40,93,0.12)]">
                                        {SERVICES_DATA.map((service, index) => {
                                            const isActive = activeIndex === index;
                                            return (
                                                <motion.div
                                                    key={service.id}
                                                    initial={false}
                                                    animate={{
                                                        opacity: isActive ? 1 : 0,
                                                        scale: isActive ? 1 : 1,
                                                    }}
                                                    transition={{
                                                        duration: 1.02,
                                                        ease: [0.16, 1, 0.3, 1],
                                                    }}
                                                    className={`absolute inset-0 w-full h-full ${isActive ? "pointer-events-auto z-10" : "pointer-events-none z-0"
                                                        }`}
                                                >
                                                    <Image
                                                        src={service.image}
                                                        alt={service.title.replace('\n', ' ')}
                                                        fill
                                                        priority={index === 0}
                                                        className="object-cover lg:object-top object-bottom select-none pointer-events-none"
                                                        sizes="(max-width: 1024px) 100vw, 42vw"
                                                    />
                                                </motion.div>
                                            );
                                        })}
                                    </motion.div>
                                </div>

                                {/* Right Column: Scrolling Content */}
                                <div className="lg:col-span-6 flex flex-col lg:gap-0 gap-20">
                                    {SERVICES_DATA.map((service, index) => {
                                        const isActive = activeIndex === index;
                                        const isItemVisible = !!visibleItems[index];
                                        return (
                                            <div
                                                key={service.id}
                                                ref={(el) => (contentRefs.current[index] = el)}
                                                data-index={index}
                                                className={`min-h-auto lg:min-h-screen flex flex-col justify-center py-0 lg:py-24 px-0 lg:px-12 transition-all duration-700 ease-out will-change-transform ${isItemVisible
                                                    ? "opacity-100 translate-y-0"
                                                    : "opacity-0 translate-y-8 lg:opacity-100 lg:translate-y-0"
                                                    }`}
                                            >
                                                <div
                                                    className={`block lg:hidden relative lg:mb-0 mb-8 h-100 lg:h-200 rounded-2xl lg:rounded-3xl overflow-hidden bg-madison-950/5`}
                                                >
                                                    <Image
                                                        src={service.image}
                                                        alt={service.title.replace('\n', ' ')}
                                                        fill
                                                        priority={index === 0}
                                                        className="object-cover lg:object-top object-bottom select-none pointer-events-none"
                                                        sizes="(max-width: 1024px) 100vw, 42vw"
                                                    />
                                                </div>
                                                {/* Item Badge */}
                                                <div className="flex items-center gap-2 mb-3.5">
                                                    <span
                                                        className={`size-1.5 rounded-full transition-colors duration-300 ${isActive ? "bg-madison-700 blink-dot" : "bg-madison-400"
                                                            }`}
                                                    />
                                                    <span className="text-xs sm:text-[13px] font-normal tracking-wider text-madison-700 uppercase">
                                                        {service.badge}
                                                    </span>
                                                </div>

                                                {/* Item Heading */}
                                                <h3 className="text-3xl sm:text-4xl lg:text-[52px] font-medium text-madison-950 tracking-[-0.025em] leading-[1.12] mb-5 lg:mb-6 lg:whitespace-pre-line">
                                                    {service.title}
                                                </h3>

                                                {/* Item Description */}
                                                <p className="text-base text-madison-950/60 leading-relaxed lg:max-w-lg mb-5 lg:mb-10 font-normal">
                                                    {service.description}
                                                </p>

                                                {/* CTA Button */}
                                                <div className="flex items-center">
                                                    <Link
                                                        href={service.href}
                                                        className="group inline-flex items-center select-none"
                                                    >
                                                        <div className="rounded-full px-7 flex items-center justify-center bg-madison-950 text-neutral-100 border-0 me-1.5 transition-all duration-300 group-hover:bg-madison-700 group-hover:rounded-r-none group-hover:me-0 group-hover:px-7.5 h-11 text-sm font-medium shadow-sm">
                                                            {service.ctaText}
                                                        </div>
                                                        <div className="size-11 bg-madison-950 text-neutral-100 rounded-full flex items-center justify-center transition-all duration-300 group-hover:rounded-l-none group-hover:bg-madison-700 shadow-sm">
                                                            <MoveRight className="size-4.5 transition-transform duration-300 group-hover:translate-x-0.5" />
                                                        </div>
                                                    </Link>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </CursorGrid>
    );
}