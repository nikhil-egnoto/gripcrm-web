"use client";

import { useRef } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Platform() {

    const prevRef = useRef(null);
    const nextRef = useRef(null);

    const PLATFORM_CARDS = [
        {
            id: "leads",
            title: "Leads",
            bgColor: "bg-[#5C45FD]",
            icon: "/images/home/leads.svg",
            description:
                "Ready to take your metal building projects to the next level? Discover how GripCRM can transform your business operations.",
            mockupType: "leads",
            image: "/images/home/platform-1.png"
        },
        {
            id: "quotes",
            title: "Quotes",
            bgColor: "bg-[#16A34A]",
            icon: "/images/home/quotes.svg",
            description:
                "Ready to take your metal building projects to the next level? Discover how GripCRM can transform your business operations.",
            mockupType: "quotes",
            image: "/images/home/platform-2.png"
        },
        {
            id: "customers",
            title: "Customers",
            bgColor: "bg-[#3B2314]",
            icon: "/images/home/customers.svg",
            description:
                "Ready to take your metal building projects to the next level? Discover how GripCRM can transform your business operations.",
            mockupType: "customers",
            image: "/images/home/platform-3.png"
        },
        {
            id: "invoices",
            title: "Invoices",
            bgColor: "bg-[#DC2626]",
            icon: "/images/home/invoices.svg",
            description:
                "Ready to take your metal building projects to the next level? Discover how GripCRM can transform your business operations.",
            mockupType: "invoices",
            image: "/images/home/platform-1.png"
        },
        {
            id: "projects",
            title: "Projects",
            bgColor: "bg-[#0284C7]",
            icon: "/images/home/projects.svg",
            description:
                "Ready to take your metal building projects to the next level? Discover how GripCRM can transform your business operations.",
            mockupType: "projects",
            image: "/images/home/platform-2.png"
        },
    ];


    return (
        <section className="pt-16 md:pt-24 md:pb-0 pb-10">
            {/* Main Title Section */}
            <div className="text-center max-w-4xl mx-auto px-4">
                <h2 className="font-caveat text-4xl sm:text-5xl md:text-6xl font-bold text-black">
                    All your business on
                </h2>
                <div className="mt-1 sm:mt-2 relative">
                    <span className="font-caveat text-4xl sm:text-6xl md:text-7xl font-bold text-black">
                        one platform.
                    </span>
                    <svg className="absolute md:top-0 -top-2 left-[50%] -translate-x-1/2 md:w-auto w-50" width="290" height="70" viewBox="0 0 290 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M261.074 51.0838C266.381 49.8773 268.053 44.3697 266.826 39.7534C269.491 38.1014 270.798 35.1901 270.85 32.2264C274.379 31.728 277.934 31.2558 281.463 30.7314C281.489 30.7314 281.542 30.7314 281.568 30.7314C282.326 30.6266 283.085 30.5216 283.868 30.4168C292.599 29.079 291.502 14.0771 283.765 12.5296C285.802 6.99569 283.32 -0.426686 276.184 0.019177C186.889 5.63182 97.5939 11.2444 8.29936 16.8833C-0.457566 17.434 -2.33965 28.6332 2.91451 33.2491C0.300504 38.6257 4.40448 46.6513 10.7304 46.8611C24.1664 47.3068 37.6024 47.5169 51.0385 47.5692C50.6725 48.0414 50.3326 48.566 50.0451 49.0904C48.0062 49.5888 45.9674 50.0871 43.9022 50.5856C34.0475 52.9722 36.8443 68.0267 46.2027 68.6036C118.349 72.9836 190.391 67.0299 261.1 51.1624L261.074 51.0838Z" fill="#0073E6" fillOpacity="0.1" />
                    </svg>
                </div>

                {/* Subtitle Description */}
                <p className="mt-5 text-black/70 text-sm sm:text-base md:text-lg font-medium leading-relaxed font-sans">
                    Ready to take your metal building projects to the next level? Discover how GripCRM can transform your business operations and drive growth. Contact us today for a personalized demo and see how our platform can meet your specific needs.
                </p>
            </div>

            {/* Cards Carousel Container */}
            <Swiper
                className="platform-swiper md:!py-20 !py-10 xl:!pl-50 lg:!pl-25 md:!pl-4 md:!px-0 !px-4"
                modules={[Navigation, Pagination, Autoplay]}
                slidesPerView={1}
                spaceBetween={20}
                navigation={{
                    prevEl: prevRef.current,
                    nextEl: nextRef.current,
                }}
                onBeforeInit={(swiper) => {
                    swiper.params.navigation.prevEl = prevRef.current;
                    swiper.params.navigation.nextEl = nextRef.current;
                }}
                pagination={false}
                autoplay={false}
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

                {PLATFORM_CARDS.map((card, index) => {
                    return (
                        <SwiperSlide key={card.id}
                            className={`${card.bgColor} rounded-2xl px-6 pb-6 pt-10 flex flex-col justify-between text-white`}>
                            {/* Card Header Row */}
                            <div>
                                <div className="flex items-end justify-between mb-4">
                                    <h3 className="text-3xl sm:text-4xl font-bold font-sans tracking-tight">
                                        {card.title}
                                    </h3>
                                    <div className="size-14 rounded-md bg-white/70 -rotate-5 backdrop-blur-xs flex items-center justify-center text-white shrink-0">
                                        <Image src={card.icon} alt={card.title} width={32} height={32} />
                                    </div>
                                </div>

                                {/* Card Description */}
                                <p className="text-white/85 text-xs sm:text-sm leading-relaxed font-sans mb-2">
                                    {card.description}
                                </p>
                            </div>

                            {/* Card Mockup Graphic */}
                            <div>
                                <Image src={card.image} alt={card.title} className="w-full" width={400} height={287} />
                            </div>
                        </SwiperSlide>
                    );
                })}

                <div className="md:flex items-center justify-center gap-5 mt-10 sm:mt-20 hidden">
                    <button
                        ref={prevRef}
                        aria-label="Previous slide"
                        className="group bg-black/5 px-6 py-3 rounded-4xl cursor-pointer"
                    >
                        <span className="size-8 rounded-full bg-transparent border-2 border-black text-black group-hover:bg-black group-hover:text-white flex items-center justify-center transition-all duration-200 group-active:scale-95 shadow-2xs">
                            <ArrowLeft className="size-5" />
                        </span>
                    </button>
                    <button
                        ref={nextRef}
                        aria-label="Next slide"
                        className="group bg-black/5 px-6 py-3 rounded-4xl cursor-pointer"
                    >
                        <span className="size-8 rounded-full bg-transparent border-2 border-black text-black group-hover:bg-black group-hover:text-white flex items-center justify-center transition-all duration-200 group-active:scale-95 shadow-2xs">
                            <ArrowRight className="size-5" />
                        </span>
                    </button>
                </div>
            </Swiper>
        </section>
    )
}