"use client";

import Button from "@/components/ui/Button";
import { ChevronRight } from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useRef } from "react";

export default function FeedBacks() {
    const prevRef = useRef(null);
    const nextRef = useRef(null);


    const feedbackColumns = [
        // Column 1
        [
            {
                quote: "The experience at GripCRM has been great for our company, moreover it has also helped us to increase the weightage of our sales and advance our business operations and drive growth",
                name: "Josh Ponting",
                role: "CEO, Viking Metal Garage",
                avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=250&q=80"
            },
            {
                quote: "Grip CRM has completely transformed our sales process! We've cut down on manual tasks and can now focus on what matters—growing our business.",
                name: "John D.",
                role: "Metal Building Manufacturer",
                avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=250&q=80"
            },
            {
                quote: "We've improved project timelines and reduced errors since switching to Grip CRM. It's built for the unique demands of our industry- Managing multiple projects used to be chaotic, but with Grip CRM, we have everything under control.",
                name: "Tom Taker",
                role: "CEO, Viking Metal Garage",
                avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=250&q=80"
            }
        ],
        // Column 2
        [
            {
                quote: "We love how easy it is to track leads and customer interactions with Grip CRM. Our sales team is more efficient, and we've seen a significant boost in conversions!",
                name: "Emily R.",
                role: "Sales Director",
                avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=250&q=80"
            },
            {
                quote: "With Grip CRM, managing complex projects is so much easier.",
                name: "Sarah L.",
                role: "Construction Project Manager",
                avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=250&q=80"
            },
            {
                quote: "The industry-specific features are a game changer. Grip CRM understands the needs of metal building companies and makes our operations run smoothly.",
                name: "Mike S",
                role: "Steel Distributor",
                avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=250&q=80"
            }
        ],
        // Column 3
        [
            {
                quote: "Grip CRM's reporting tools have been invaluable. We now have clear insights into our performance, allowing us to make smarter decisions for future growth.",
                name: "Laura P.",
                role: "Operations Manager",
                avatar: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&w=250&q=80"
            },
            {
                quote: "Grip CRM has helped us provide better service to our clients. We can quickly pull up project details and give real-time updates, which has improved customer satisfaction.",
                name: "Dave M.",
                role: "CEO, Contractor",
                avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=250&q=80"
            },
            {
                quote: "I can't imagine going back to our old system. Grip CRM makes managing multiple projects so easy, and the integration with our workflow is seamless.",
                name: "Chris B.",
                role: "Project Coordinator",
                avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=250&q=80"
            }
        ]
    ];

    const columnStyles = [
        "md:mt-0",
        "md:mt-20",
        "md:mt-10"
    ];

    return (
        <section className="py-16 md:py-24 relative overflow-hidden px-4 bg-white">
            <div className="container mx-auto relative z-10">
                <div className="text-center mb-12 sm:mb-16">
                    <p className="inline-block text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-purple leading-tight relative font-caveat mb-3">
                        Trust
                        <svg width="160" height="15" viewBox="0 0 160 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M80.6129 4.56295C82.3337 4.40995 115.631 1.32495 133.786 0.370951C141.463 -0.0460494 149.154 -0.0160539 156.763 0.0179461C157.886 0.0599461 159.754 0.965948 159.937 1.76495C160.213 3.00795 159.544 4.82995 158.69 5.76295C156.359 8.28295 153.257 9.04295 150.057 9.17995C138.299 9.77095 126.545 10.452 114.784 10.954C84.8641 12.231 54.8585 13.3319 24.9361 14.5189C19.1761 14.7649 13.3312 14.8349 7.56804 14.9909C4.68804 15.1139 2.25204 13.963 0.580839 11.523C-0.0871609 10.565 -0.140761 8.68495 0.225639 7.50295C0.522439 6.68295 2.02484 5.99194 2.98484 5.95094C28.4249 4.86594 77.4009 2.83995 78.6465 2.71595C80.4609 2.53595 78.8913 4.71394 80.6121 4.56194L80.6129 4.56295Z" fill="#27AE60" />
                        </svg>
                    </p>
                    <h2 className="max-w-2xl mx-auto text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-black leading-tight">
                        Our services have earned the trust of many
                    </h2>
                </div>

                <div className="feedback-section">
                    <div className="hidden md:grid grid-cols-1 md:grid-cols-3 lg:gap-10 gap-6 items-start">
                        {feedbackColumns.map((column, colIdx) => (
                            <div
                                key={colIdx}
                                className={`flex flex-col gap-10 ${columnStyles[colIdx]}`}
                            >
                                {column.map((item, itemIdx) => (
                                    <div
                                        key={itemIdx}
                                        className="bg-white rounded-2xl p-6 lg:p-12 border border-black/25 flex flex-col justify-between hover:shadow-md transition-shadow duration-300"
                                    >
                                        <p className="text-black text-base/7 md:text-lg/9 leading-relaxed mb-10 font-normal">
                                            "{item.quote}"
                                        </p>
                                        <div className="flex items-center gap-3.5 mt-auto">
                                            <img
                                                src={item.avatar}
                                                alt={item.name}
                                                className="size-16 rounded-xl object-cover flex-shrink-0"
                                            />
                                            <div>
                                                <h4 className="font-bold text-black text-base sm:text-lg leading-tight">
                                                    {item.name}
                                                </h4>
                                                <p className="text-xs sm:text-sm text-black/75 font-medium mt-1">
                                                    {item.role}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>

                    <div className="md:hidden feedback-swiper">

                        <Swiper
                            modules={[Navigation, Pagination, Autoplay]}
                            slidesPerView={1}
                            spaceBetween={30}
                            navigation={{
                                prevEl: prevRef.current,
                                nextEl: nextRef.current,
                            }}
                            onBeforeInit={(swiper) => {
                                swiper.params.navigation.prevEl = prevRef.current;
                                swiper.params.navigation.nextEl = nextRef.current;
                            }}
                            pagination={{
                                dynamicBullets: true,
                                clickable: true,
                            }}
                            autoplay={false}
                        >

                            {feedbackColumns.flat().map((item, index) => (
                                <SwiperSlide key={index} className="rounded-2xl h-auto">
                                    <div className="flex flex-col justify-between h-full">
                                        <p className="text-black/75 text-base/8 mb-10 font-normal min-h-50">
                                            "{item.quote}"
                                        </p>
                                        <div className="flex items-center gap-3.5 mt-auto">
                                            <img
                                                src={item.avatar}
                                                alt={item.name}
                                                className="size-16 rounded-xl object-cover flex-shrink-0"
                                            />
                                            <div>
                                                <h4 className="font-bold text-black text-base leading-tight">
                                                    {item.name}
                                                </h4>
                                                <p className="text-sm text-black/75 font-medium mt-1">
                                                    {item.role}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>

                    <div className="mt-12 sm:mt-16 flex justify-center">
                        <Button className="bg-white text-black font-semibold before:bg-black hover:text-white">
                            <span className="relative z-1">View All Feedbacks</span>
                            <span className="w-5 h-5 rounded-full bg-black group-hover:bg-white text-white group-hover:text-black flex items-center justify-center text-xs shrink-0 group-hover:translate-x-0.5 transition-transform">
                                <ChevronRight className="size-4" />
                            </span>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
