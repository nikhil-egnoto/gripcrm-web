"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { CloudUpload, CircleDollarSign, IdCardLanyard, NotebookText } from "lucide-react";

export default function GripCRM() {
    const [activeFeature, setActiveFeature] = useState("price-books");
    const [timerKey, setTimerKey] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const [isScrolledToBottom, setIsScrolledToBottom] = useState(false);

    const containerRef = useRef(null);
    const itemRefs = useRef({});

    const DURATION = 5000; // 5 seconds per feature auto-rotation

    const FEATURES = [
        {
            id: "price-books",
            title: "Price Books",
            icon: CloudUpload,
            img: "",
            description:
                "Design scroll-based and multi-step interactions and easily work with Spline, 3D, Lottie, and dotLottie files all without even thinking about code.",
            image: "/images/home/gripcrm.png",
            badge: "Price Books & Catalog",
        },
        {
            id: "leads",
            title: "Leads",
            icon: "",
            iconimg: "/images/home/leads.svg",
            description:
                "Track, qualify, and convert potential clients seamlessly with automated lead pipelines and intelligent lead scoring.",
            image: "/images/home/gripcrm.png",
            badge: "Lead Management System",
        },
        {
            id: "quotes",
            title: "Quotes",
            icon: CircleDollarSign,
            img: "",
            description:
                "Generate custom metal building estimates and professional multi-item quotes instantly with dynamic pricing models.",
            image: "/images/home/gripcrm.png",
            badge: "Instant Quote Generator",
        },
        {
            id: "customers",
            title: "Customers",
            icon: IdCardLanyard,
            img: "",
            description:
                "Build long-term relationships with a centralized customer portal, order history tracking, and automated communications.",
            image: "/images/home/gripcrm.png",
            badge: "Customer Relations Hub",
        },
        {
            id: "invoices",
            title: "Invoices",
            icon: IdCardLanyard,
            img: "",
            description:
                "Design scroll-based and multi-step interactions and easily work with Spline, 3D, Lottie, and dotLottie files all without even thinking about code.",
            image: "/images/home/gripcrm.png",
            badge: "Invoicing & Billing",
        },
        {
            id: "tasks-activity",
            title: "Tasks & Activity",
            icon: NotebookText,
            img: "",
            description:
                "Design scroll-based and multi-step interactions and easily work with Spline, 3D, Lottie, and dotLottie files all without even thinking about code.",
            image: "/images/home/gripcrm.png",
            badge: "Tasks & Activity",
        },
    ];

    // Check if container scroll is at or near bottom
    const checkScrollPosition = () => {
        const container = containerRef.current;
        if (container) {
            const isAtBottom = container.scrollTop + container.clientHeight >= container.scrollHeight - 25;
            setIsScrolledToBottom(isAtBottom);
        }
    };

    // Auto-advance active feature using timer
    useEffect(() => {
        if (isPaused) return;

        const timer = setTimeout(() => {
            setActiveFeature((prev) => {
                const currentIndex = FEATURES.findIndex((f) => f.id === prev);
                const nextIndex = (currentIndex + 1) % FEATURES.length;
                return FEATURES[nextIndex].id;
            });
            setTimerKey((prev) => prev + 1);
        }, DURATION);

        return () => clearTimeout(timer);
    }, [activeFeature, isPaused, timerKey]);

    // Auto scroll feature list container to keep active item in view
    useEffect(() => {
        const container = containerRef.current;
        const activeEl = itemRefs.current[activeFeature];

        if (container && activeEl) {
            const containerTop = container.scrollTop;
            const containerBottom = containerTop + container.clientHeight;
            const elTop = activeEl.offsetTop;
            const elBottom = elTop + activeEl.offsetHeight;

            if (elTop < containerTop) {
                container.scrollTo({
                    top: Math.max(0, elTop - 10),
                    behavior: "smooth",
                });
            } else if (elBottom > containerBottom) {
                container.scrollTo({
                    top: elBottom - container.clientHeight + 10,
                    behavior: "smooth",
                });
            }

            const checkTimer = setTimeout(checkScrollPosition, 350);
            return () => clearTimeout(checkTimer);
        }
    }, [activeFeature]);

    const handleSelectFeature = (id) => {
        setActiveFeature(id);
        setTimerKey((prev) => prev + 1);
    };

    const currentFeature = FEATURES.find((f) => f.id === activeFeature) || FEATURES[0];

    return (
        <section className="bg-black text-white py-16 md:py-24 relative overflow-hidden">
            {/* Background Glow Overlays */}
            <Image
                src={"/images/home/section.png"}
                alt={"grip crm bg"}
                className="absolute top-0 left-0 w-full h-full opacity-50"
                width={1000}
                height={1000}
            />

            <div className="mx-auto relative z-10">
                {/* Top Section Header */}
                <div className="container mx-auto mb-15 lg:mb-20 px-4">
                    <div className="max-w-4xl">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
                            Grow better with{" "}
                            <span className="block relative font-caveat italic text-4xl sm:text-5xl md:text-6xl font-bold ml-1 text-white">
                                Grip CRM
                                <svg className="absolute -bottom-4 left-0 w-[160px]" viewBox="0 0 160 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M80.6129 4.56295C82.3337 4.40995 115.631 1.32495 133.786 0.370951C141.463 -0.0460494 149.154 -0.0160539 156.763 0.0179461C157.886 0.0599461 159.754 0.965948 159.937 1.76495C160.213 3.00795 159.544 4.82995 158.69 5.76295C156.359 8.28295 153.257 9.04295 150.057 9.17995C138.299 9.77095 126.545 10.452 114.784 10.954C84.8641 12.231 54.8585 13.3319 24.9361 14.5189C19.1761 14.7649 13.3312 14.8349 7.56804 14.9909C4.68804 15.1139 2.25204 13.963 0.580839 11.523C-0.0871609 10.565 -0.140761 8.68495 0.225639 7.50295C0.522439 6.68295 2.02484 5.99194 2.98484 5.95094C28.4249 4.86594 77.4009 2.83995 78.6465 2.71595C80.4609 2.53595 78.8913 4.71394 80.6121 4.56194L80.6129 4.56295Z" fill="#FFD00F" />
                                </svg>
                            </span>
                        </h2>
                        <p className="mt-10 text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed font-normal">
                            Ready to take your metal building projects to the next level? Discover how GripCRM can transform your business operations and drive growth. Contact us today for a personalized demo and see how our platform can meet your specific needs.
                        </p>
                    </div>
                </div>

                {/* Main Content 2-Column Layout */}
                <div className="lg:px-0 px-4 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                    {/* Left Column: UI Mockup Preview with Animated Image Change */}
                    <div className="lg:col-span-7 relative group lg:block hidden">
                        <div className="absolute -inset-1 opacity-40 group-hover:opacity-70 transition duration-500" />

                        <div className="relative overflow-hidden">
                            {/* Animated Images Container */}
                            <div className="relative w-full aspect-[16/11] xl:-left-25 lg:-left-15 rounded-xl overflow-hidden bg-[#121721]">
                                {FEATURES.map((feature, index) => {
                                    const isActive = activeFeature === feature.id;

                                    return (
                                        <div
                                            key={feature.id}
                                            className={`absolute inset-0 transition-all duration-700 ease-in-out ${isActive
                                                ? "opacity-100 scale-100 rotate-0 z-10"
                                                : "opacity-0 scale-95 -rotate-1 z-0 pointer-events-none"
                                                }`}
                                        >
                                            <Image
                                                src={feature.image}
                                                alt={feature.title}
                                                fill
                                                sizes="(max-width: 1024px) 100vw, 55vw"
                                                className="w-full h-full object-cover object-top rounded-xl"
                                                priority={index === 0}
                                            />
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Feature Selection Cards */}
                    <div
                        className={`gripcrm-content lg:col-span-5 2xl:me-75 xl:me-40 lg:me-20 lg:me-4 me-0 h-full relative after:content-[''] after:absolute after:h-50 after:bottom-0 after:top-auto after:inset-0 after:z-[1] after:pointer-events-none after:transition-opacity after:duration-300 ${isScrolledToBottom
                            ? "after:opacity-0"
                            : "after:opacity-100 after:bg-[linear-gradient(rgb(0_0_0_/_25%)_50%,_rgb(16_9_14)_100%)]"
                            }`}
                        onMouseEnter={() => setIsPaused(true)}
                        onMouseLeave={() => setIsPaused(false)}
                    >
                        <div
                            ref={containerRef}
                            onScroll={checkScrollPosition}
                            className="w-full block lg:max-h-[750px] overflow-y-scroll scrollbar-none"
                        >
                            {FEATURES.map((feature) => {
                                const Icon = feature.icon;
                                const isActive = activeFeature === feature.id;

                                return (
                                    <div
                                        key={feature.id}
                                        ref={(el) => (itemRefs.current[feature.id] = el)}
                                        onClick={() => handleSelectFeature(feature.id)}
                                        className={`relative py-5 sm:py-6 cursor-pointer transition-all duration-300 overflow-hidden border-t border-b border-white/5`}
                                    >

                                        <div className="flex items-start gap-4">
                                            <div
                                                className={`size-11 sm:size-12 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${isActive
                                                    ? "bg-[#FACC15] text-black shadow-lg shadow-amber-500/20"
                                                    : "bg-[#121721] text-gray-300 border border-white/10"
                                                    }`}
                                            >
                                                {feature.icon ? (
                                                    <Icon className="size-5 sm:size-6" />
                                                ) : feature.iconimg ? (
                                                    <Image
                                                        src={feature.iconimg}
                                                        alt={feature.title}
                                                        width={24}
                                                        height={24}
                                                        className={`size-5 sm:size-6 object-contain ${isActive ? "" : "invert"}`}
                                                    />
                                                ) : null}
                                            </div>
                                            <div className="flex-1">
                                                <div className="flex items-center justify-between">
                                                    <h3
                                                        className={`text-lg sm:text-xl font-bold font-sans transition-colors duration-200 ${isActive ? "text-white" : "text-gray-200"}`}>
                                                        {feature.title}
                                                    </h3>
                                                </div>
                                                <p className="mt-2 text-xs sm:text-sm text-gray-400 leading-relaxed font-sans">
                                                    {feature.description}
                                                </p>
                                            </div>
                                        </div>

                                        {/* Highlighted Progress Border */}
                                        {isActive && (
                                            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-white/10 overflow-hidden">
                                                <div
                                                    key={`${feature.id}-${timerKey}`}
                                                    className="h-full bg-yellow-400 animate-fill-progress"
                                                    style={{
                                                        animationDuration: `${DURATION}ms`,
                                                        animationPlayState: isPaused ? "paused" : "running",
                                                    }}
                                                />
                                            </div>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}