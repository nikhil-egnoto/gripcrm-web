"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import Image from "next/image";
import { MoveLeft, MoveRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Platform({ fields }) {
    const sectionRef = useRef(null);
    const swiperRef = useRef(null);
    const triggerRef = useRef(null);
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    const [isBeginning, setIsBeginning] = useState(true);
    const [isEnd, setIsEnd] = useState(false);

    const PLATFORM_CARDS = [
        {
            id: "leads",
            title: "Leads",
            bgColor: "bg-violet-500",
            icon: "/images/home/leads.svg",
            description:
                "Capture and manage incoming opportunities.",
            mockupType: "leads",
            image: "/images/home/platform-placeholder.png"
        },
        {
            id: "quotes",
            title: "Quotes",
            bgColor: "bg-green-500",
            icon: "/images/home/quotes.svg",
            description:
                "Create and manage estimates and proposals.",
            mockupType: "quotes",
            image: "/images/home/platform-placeholder.png"
        },
        {
            id: "customers",
            title: "Customers",
            bgColor: "bg-orange-500",
            icon: "/images/home/customers.svg",
            description:
                "Keep customer information organized and accessible.",
            mockupType: "customers",
            image: "/images/home/platform-placeholder.png"
        },
        {
            id: "invoices",
            title: "Invoices",
            bgColor: "bg-olive-500",
            icon: "/images/home/invoices.svg",
            description:
                "Track work from planning to completion.",
            mockupType: "invoices",
            image: "/images/home/platform-placeholder.png"
        }
    ];

    const cards = fields?.platform_cards || PLATFORM_CARDS;

    // Initialize ScrollTrigger on desktop/tablet to tie page scroll to Swiper translation (no position: fixed)
    useEffect(() => {
        if (typeof window === "undefined") return;

        gsap.registerPlugin(ScrollTrigger);

        const ctx = gsap.context(() => {
            const mm = gsap.matchMedia();

            mm.add("(min-width: 768px)", () => {
                if (!sectionRef.current) return;

                const trigger = ScrollTrigger.create({
                    trigger: sectionRef.current,
                    start: "top 85%",
                    end: "bottom 15%",
                    scrub: 1.2,
                    invalidateOnRefresh: true,
                    onUpdate: (self) => {
                        if (swiperRef.current && !swiperRef.current.destroyed) {
                            swiperRef.current.setProgress(self.progress, 0);
                            setIsBeginning(self.progress <= 0.05);
                            setIsEnd(self.progress >= 0.95);
                        }
                    },
                });

                triggerRef.current = trigger;
            });
        }, sectionRef);

        return () => {
            ctx.revert();
            triggerRef.current = null;
        };
    }, [cards.length]);

    // Refresh ScrollTrigger once Swiper is mounted and initialized
    const handleSwiperInit = (swiper) => {
        swiperRef.current = swiper;
        if (typeof window !== "undefined" && ScrollTrigger) {
            ScrollTrigger.refresh();
        }
    };

    // Next button click
    const handleNext = useCallback(() => {
        if (swiperRef.current) {
            swiperRef.current.slideNext();
        }
    }, []);

    // Prev button click
    const handlePrev = useCallback(() => {
        if (swiperRef.current) {
            swiperRef.current.slidePrev();
        }
    }, []);

    return (
        <section
            ref={sectionRef}
            className="pt-16 md:pt-24 md:pb-9 pb-10 border-t border-neutral-300 relative bg-white overflow-hidden"
        >
            {/* Main Title Section */}
            <div className="text-center max-w-4xl mx-auto px-4">
                <h2 className="font-spaceGrotesk text-4xl sm:text-5xl md:text-6xl font-bold text-black reveal-on-scroll">
                    {fields?.platform_title || "Everything Your Team Needs,"}
                    <span className="block text-blue-700">
                        {fields?.platform_highlight || "one platform."}
                        <svg className="mx-auto mt-4" width="110" height="10" viewBox="0 0 110 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M55.4214 3.042C56.6044 2.94 79.4965 0.883309 91.9777 0.247303C97.256 -0.0306999 102.543 -0.0107027 107.775 0.0119642C108.546 0.0399645 109.831 0.643972 109.957 1.17664C110.146 2.00532 109.687 3.22 109.099 3.842C107.496 5.52202 105.364 6.02869 103.164 6.12003C95.0808 6.51403 86.9996 6.96804 78.9141 7.30271C58.3441 8.15405 37.7152 8.88805 17.1435 9.67939C13.1835 9.8434 9.16523 9.89006 5.20303 9.99406C3.22303 10.0761 1.54828 9.30873 0.399327 7.68204C-0.0599231 7.04337 -0.0967732 5.79002 0.155127 5.00201C0.359177 4.45534 1.39208 3.99467 2.05208 3.96734C19.5421 3.244 53.2131 1.89332 54.0695 1.81065C55.3169 1.69065 54.2378 3.14266 55.4208 3.04133L55.4214 3.042Z" fill="currentColor"></path></svg>
                    </span>
                </h2>

                {/* Subtitle Description */}
                <p className="mt-5 text-neutral-700 text-base font-normal leading-relaxed font-sans reveal-on-scroll">
                    {fields?.platform_desc || "Connect your sales, customer management, projects, and daily workflows in one platform."}
                </p>
            </div>

            {/* Cards Carousel Container */}
            <Swiper
                className="platform-swiper md:py-10! py-8! xl:pl-50! lg:pl-25! md:pl-4! md:px-0! px-4! w-full"
                modules={[Navigation, Pagination]}
                slidesPerView={1}
                spaceBetween={20}
                watchSlidesProgress={true}
                onSwiper={handleSwiperInit}
                onSlideChange={(swiper) => {
                    setIsBeginning(swiper.isBeginning);
                    setIsEnd(swiper.isEnd);
                }}
                pagination={false}
                breakpoints={{
                    767: {
                        slidesPerView: 2,
                    },
                    1024: {
                        slidesPerView: 3,
                    },
                    1280: {
                        slidesPerView: 3.5,
                    },
                }}
            >
                {cards.map((card, index) => {
                    return (
                        <SwiperSlide
                            key={card.id || index}
                            className={`${card.bgColor} rounded-2xl p-7 flex flex-col justify-between text-white select-none`}
                        >
                            {/* Card Header Row */}
                            <div>
                                <div className="flex items-end justify-between mb-5">
                                    <h3 className="text-2xl sm:text-3xl font-semibold font-spaceGrotesk">
                                        {card.title}
                                    </h3>
                                    <div className="size-14 absolute top-4 right-4 rounded-md bg-white flex items-center justify-center text-white shrink-0 shadow-sm">
                                        <Image src={card.icon} alt={card.title} width={32} height={32} />
                                    </div>
                                </div>

                                {/* Card Description */}
                                <p className="text-neutral-100 text-base leading-relaxed font-sans mb-8">
                                    {card.description}
                                </p>
                            </div>

                            {/* Card Mockup Graphic */}
                            <div className="bg-white p-3 rounded-xl shadow-xs">
                                <Image
                                    src={card.image}
                                    alt={card.title}
                                    className="aspect-3/2 w-full object-cover rounded-lg"
                                    width={400}
                                    height={287}
                                />
                            </div>
                        </SwiperSlide>
                    );
                })}

                {/* Navigation Buttons */}
                <div className="md:flex items-center justify-center gap-5 mt-8 sm:mt-10 hidden">
                    <button
                        ref={prevRef}
                        type="button"
                        onClick={handlePrev}
                        disabled={isBeginning}
                        aria-label="Previous slide"
                        className="group bg-white border border-neutral-900 text-neutral-900 hover:bg-neutral-900 hover:text-neutral-100 px-6 py-3 rounded-4xl transition-all duration-200 cursor-pointer disabled:opacity-35 disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:text-neutral-900"
                    >
                        <MoveLeft className="size-5" />
                    </button>
                    <button
                        ref={nextRef}
                        type="button"
                        onClick={handleNext}
                        disabled={isEnd}
                        aria-label="Next slide"
                        className="group bg-white border border-neutral-900 text-neutral-900 hover:bg-neutral-900 hover:text-neutral-100 px-6 py-3 rounded-4xl transition-all duration-200 cursor-pointer disabled:opacity-35 disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:text-neutral-900"
                    >
                        <MoveRight className="size-5" />
                    </button>
                </div>
            </Swiper>
        </section>
    );
}
