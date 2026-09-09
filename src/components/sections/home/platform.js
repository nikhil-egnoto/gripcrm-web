"use client";

import { useRef } from "react";
import Image from "next/image";
import { MoveLeft, MoveRight } from "lucide-react";
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
                "Create and manage estimates and proposals..",
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


    return (
        <section className="pt-16 md:pt-24 md:pb-0 pb-10 border-t border-neutral-300">
            {/* Main Title Section */}
            <div className="text-center max-w-4xl mx-auto px-4">
                <h2 className="font-spaceGrotesk text-4xl sm:text-5xl md:text-6xl font-bold text-black">
                    Everything Your Team Needs,
                    <span className="block text-blue-700">
                        one platform.
                        <svg className="mx-auto mt-4" width="110" height="10" viewBox="0 0 110 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M55.4214 3.042C56.6044 2.94 79.4965 0.883309 91.9777 0.247303C97.256 -0.0306999 102.543 -0.0107027 107.775 0.0119642C108.546 0.0399645 109.831 0.643972 109.957 1.17664C110.146 2.00532 109.687 3.22 109.099 3.842C107.496 5.52202 105.364 6.02869 103.164 6.12003C95.0808 6.51403 86.9996 6.96804 78.9141 7.30271C58.3441 8.15405 37.7152 8.88805 17.1435 9.67939C13.1835 9.8434 9.16523 9.89006 5.20303 9.99406C3.22303 10.0761 1.54828 9.30873 0.399327 7.68204C-0.0599231 7.04337 -0.0967732 5.79002 0.155127 5.00201C0.359177 4.45534 1.39208 3.99467 2.05208 3.96734C19.5421 3.244 53.2131 1.89332 54.0695 1.81065C55.3169 1.69065 54.2378 3.14266 55.4208 3.04133L55.4214 3.042Z" fill="currentColor"></path></svg>
                    </span>

                </h2>

                {/* Subtitle Description */}
                <p className="mt-5 text-neutral-700 text-base font-normal leading-relaxed font-sans">
                    Connect your sales, customer management, projects, and daily workflows in one platform.
                </p>
            </div>

            {/* Cards Carousel Container */}
            <Swiper
                className="platform-swiper md:py-15! py-10! xl:pl-50! lg:pl-25! md:pl-4! md:px-0! px-4!"
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
                            className={`${card.bgColor} rounded-2xl p-7 flex flex-col justify-between text-white`}>
                            {/* Card Header Row */}
                            <div>
                                <div className="flex items-end justify-between mb-5">
                                    <h3 className="text-2xl sm:text-3xl font-semibold font-spaceGrotesk">
                                        {card.title}
                                    </h3>
                                    <div className="size-14 absolute top-4 right-4 rounded-md bg-white flex items-center justify-center text-white shrink-0">
                                        <Image src={card.icon} alt={card.title} width={32} height={32} />
                                    </div>
                                </div>

                                {/* Card Description */}
                                <p className="text-neutral-100 text-base leading-relaxed font-sans mb-8">
                                    {card.description}
                                </p>
                            </div>

                            {/* Card Mockup Graphic */}
                            <div className="bg-white p-3 rounded-xl">
                                <Image src={card.image} alt={card.title} className="aspect-3/2 w-full" width={400} height={287} />
                            </div>
                        </SwiperSlide>
                    );
                })}

                <div className="md:flex items-center justify-center gap-5 mt-10 sm:mt-15 hidden">
                    <button
                        ref={prevRef}
                        aria-label="Previous slide"
                        className="group bg-white border border-neutral-900 text-neutral-900 hover:bg-neutral-900 hover:text-neutral-100 px-6 py-3 rounded-4xl  transition-all duration-200 cursor-pointer"
                    >
                        <MoveLeft className="size-5" />
                    </button>
                    <button
                        ref={nextRef}
                        aria-label="Next slide"
                        className="group bg-white border border-neutral-900 text-neutral-900 hover:bg-neutral-900 hover:text-neutral-100 px-6 py-3 rounded-4xl  transition-all duration-200 cursor-pointer"
                    >
                        <MoveRight className="size-5" />
                    </button>
                </div>
            </Swiper>
        </section>
    )
}