"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight, ArrowUpRight, ChevronRight } from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Pricing() {
    const [billingCycle, setBillingCycle] = useState("yearly");
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    const plans = [
        {
            name: "Standard",
            badgeBg: "bg-[#f2e5dd]",
            headerBg: "bg-[#fff1e9]",
            borderColor: "border-[#ffb184]",
            monthlyPrice: 99,
            yearlyPrice: 99,
            description: "Best for large businesses with multiple projects and complex workflows.",
            isPopular: false,
            buttonText: "Choose Plan",
            buttonStyle: "border border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white",
            featuresTitle: "Everything in basic plan +",
            features: [
                "All Professional Plan Features",
                "Dedicated Account Manager",
                "Custom Integrations",
                "Advanced Analytics and Reporting",
                "24/7 Phone and Email Support",
                "Onboarding and Training",
            ],
        },
        {
            name: "Professional",
            badgeBg: "bg-[#D8EFE2]",
            headerBg: "bg-[#EAF7F0]",
            borderColor: "border-[#87d1aa]",
            monthlyPrice: 149,
            yearlyPrice: 149,
            description: "Best for large businesses with multiple projects and complex workflows.",
            isPopular: true,
            buttonText: "Choose Plan",
            buttonStyle: "bg-[#20ad64] hover:bg-[#25c572] text-white shadow-sm",
            featuresTitle: "Everything in standard plan +",
            features: [
                "All Professional Plan Features",
                "Dedicated Account Manager",
                "Custom Integrations",
                "Advanced Analytics and Reporting",
                "24/7 Phone and Email Support",
                "Onboarding and Training",
            ],
        },
        {
            name: "Enterprise",
            badgeBg: "bg-[#EFE5DD]",
            headerBg: "bg-[#FFF2EB]",
            borderColor: "border-[#ffb184]",
            monthlyPrice: 299,
            yearlyPrice: 299,
            description: "Best for large businesses with multiple projects and complex workflows.",
            isPopular: false,
            buttonText: "Choose Plan",
            buttonStyle: "border border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white",
            featuresTitle: "Everything in professional plan +",
            features: [
                "All Professional Plan Features",
                "Dedicated Account Manager",
                "Custom Integrations",
                "Advanced Analytics and Reporting",
                "24/7 Phone and Email Support",
                "Onboarding and Training",
            ],
        },
    ];

    return (
        <section className="bg-[#0B132B] text-white py-16 md:py-24 relative overflow-hidden px-4">
            <Image
                src={"/images/home/pricing-bg.png"}
                alt={"pricing bg"}
                className="absolute top-0 left-0 w-full h-full opacity-50 object-cover"
                width={1000}
                height={1000}
            />
            <div className="container mx-auto relative z-10">
                <div className="text-center max-w-4xl mx-auto px-4 mb-15">
                    <h2 className="inline-block text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight relative">
                        Pricing Plans
                        <svg className="absolute -bottom-4 right-0" width="160" height="15" viewBox="0 0 160 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M80.6129 4.56295C82.3337 4.40995 115.631 1.32495 133.786 0.370951C141.463 -0.0460494 149.154 -0.0160539 156.763 0.0179461C157.886 0.0599461 159.754 0.965948 159.937 1.76495C160.213 3.00795 159.544 4.82995 158.69 5.76295C156.359 8.28295 153.257 9.04295 150.057 9.17995C138.299 9.77095 126.545 10.452 114.784 10.954C84.8641 12.231 54.8585 13.3319 24.9361 14.5189C19.1761 14.7649 13.3312 14.8349 7.56804 14.9909C4.68804 15.1139 2.25204 13.963 0.580839 11.523C-0.0871609 10.565 -0.140761 8.68495 0.225639 7.50295C0.522439 6.68295 2.02484 5.99194 2.98484 5.95094C28.4249 4.86594 77.4009 2.83995 78.6465 2.71595C80.4609 2.53595 78.8913 4.71394 80.6121 4.56194L80.6129 4.56295Z" fill="#E40000" />
                        </svg>
                    </h2>
                    <p className="mt-10 text-gray-300 text-base font-medium text-white/70">
                        At GripCRM, we offer flexible pricing plans to meet the diverse needs of metal building companies of all sizes, helping you streamline operations and boost productivity.
                    </p>
                </div>

                {/* Billing Cycle Toggle */}
                <div className="mb-16 flex flex-col items-center justify-center relative">
                    <div className="bg-white p-1.5 rounded-full inline-flex items-center shadow-lg">
                        <button
                            type="button"
                            onClick={() => setBillingCycle("monthly")}
                            className={`px-6 py-2 text-xs sm:text-sm font-medium rounded-full transition-all duration-200 cursor-pointer ${billingCycle === "monthly"
                                ? "bg-primary text-white shadow-sm"
                                : "text-black/70 hover:text-black"
                                }`}
                        >
                            Monthly
                        </button>
                        <button
                            type="button"
                            onClick={() => setBillingCycle("yearly")}
                            className={`px-6 py-2 text-xs sm:text-sm font-medium rounded-full transition-all duration-200 cursor-pointer ${billingCycle === "yearly"
                                ? "bg-primary text-white shadow-sm"
                                : "text-black/70 hover:text-black"
                                }`}
                        >
                            Yearly
                        </button>
                    </div>

                    {/* Arrow & "SAVE UPTO 30%" annotation */}
                    <div className="absolute top-full left-1/2 mt-3 sm:ml-8 translate-x-4 sm:translate-x-8 flex items-center gap-1 text-white">
                        <svg width="40" height="14" viewBox="0 0 40 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M39.244 5.58135L38.812 5.90105C36.544 8.03235 33.9521 9.63083 31.0361 10.6965C28.1201 11.7621 25.0962 12.1884 22.0722 12.0818C19.0483 11.9753 16.0243 11.1227 13.3243 9.84396C13.2163 9.73739 13.1083 9.73739 12.8923 9.63083C12.6763 9.52426 12.4603 9.4177 12.2443 9.31113L11.2724 8.67174C10.7324 8.45861 10.3004 8.03235 9.76038 7.71265L9.32838 7.39296C8.78839 7.07326 8.3564 6.647 7.9244 6.32731L7.6004 6.00761C7.49241 5.90105 7.38441 5.90105 7.38441 5.79448L9.32838 3.87631C9.65238 3.55661 9.76038 3.13035 9.65238 2.81066C9.54438 2.3844 9.22039 2.0647 8.78839 1.95814L1.44448 0.0399619C1.01249 -0.0666032 0.580493 0.0399619 0.364495 0.359657C0.0404995 0.679353 -0.0674992 1.10561 0.0404995 1.42531L1.98448 8.67174C2.09247 9.098 2.41647 9.4177 2.84846 9.52426C3.28046 9.63083 3.71245 9.52426 3.92845 9.20457L5.87243 7.28639C5.98042 7.39296 6.08842 7.49952 6.19642 7.60609L6.62842 8.03235C7.06041 8.45861 7.49241 8.88487 8.0324 9.20457L8.35639 9.4177C8.89639 9.84396 9.43638 10.2702 10.0844 10.5899L11.1644 11.2293C11.3804 11.3359 11.7044 11.4424 11.9204 11.6556C12.0283 11.7621 12.1363 11.7621 12.3523 11.8687C15.3763 13.1475 18.6163 13.8934 21.9642 14H22.3962C25.6362 14 28.7681 13.3606 31.5761 12.1884C34.6001 10.9096 37.408 9.098 39.568 6.75357L40 6.32731L39.244 5.58135Z" fill="white" />
                        </svg>
                        <span className="text-xs font-bold tracking-wider uppercase whitespace-nowrap">
                            SAVE UPTO 30%
                        </span>
                    </div>
                </div>

                {/* Pricing Cards Grid inside pricing-container */}
                <Swiper
                    className="price-swiper lg:mx-20 gap-10 !flex flex-col items-stretch"
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

                    {plans.map((plan, index) => {
                        const price = billingCycle === "yearly" ? plan.yearlyPrice : plan.monthlyPrice;

                        return (
                            <SwiperSlide key={plan.id}>
                                <div
                                    key={index}
                                    className="bg-white flex flex-col rounded-2xl overflow-hidden shadow-2xl transition-transform duration-300 hover:-translate-y-1"
                                >
                                    {/* Top Header Section */}
                                    <div className={`${plan.headerBg} ${plan.borderColor} border-b p-7 sm:p-8 flex flex-col justify-between min-h-[310px]`}>
                                        <div>
                                            {/* Badges */}
                                            <div className="flex items-center gap-2">
                                                <span className={`${plan.badgeBg} text-black font-bold text-sm px-3.5 py-1.5 rounded-full inline-block`}>
                                                    {plan.name}
                                                </span>
                                                {plan.isPopular && (
                                                    <span className="bg-[#FCD84C] text-black font-bold text-sm px-3.5 py-1.5 rounded-full inline-block">
                                                        Most Popular
                                                    </span>
                                                )}
                                            </div>

                                            {/* Price */}
                                            <div className="flex items-center gap-1.5 mt-6">
                                                <span className="text-5xl font-bold text-black tracking-tight">
                                                    ${price}
                                                </span>
                                                <span className="text-xs text-black/70 font-semibold">
                                                    /month per user
                                                </span>
                                            </div>

                                            {/* Description */}
                                            <p className="mt-4 text-xs text-black/70 leading-relaxed font-semibold">
                                                {plan.description}
                                            </p>
                                        </div>

                                        {/* Action Button */}
                                        <div className="mt-8">
                                            {plan.isPopular ? (
                                                <button
                                                    type="button"
                                                    className={`py-4 px-6 rounded-md text-sm font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer ${plan.buttonStyle}`}
                                                >
                                                    <span>{plan.buttonText}</span>
                                                    <span className="bg-white text-[#22C55E] rounded-full p-0.5 size-5 flex items-center justify-center shrink-0">
                                                        <ChevronRight className="size-3.5 stroke-[3]" />
                                                    </span>
                                                </button>
                                            ) : (
                                                <button
                                                    type="button"
                                                    className={`py-4 px-6 rounded-md text-sm font-semibold text-center transition-all cursor-pointer ${plan.buttonStyle}`}
                                                >
                                                    {plan.buttonText}
                                                </button>
                                            )}
                                        </div>
                                    </div>

                                    {/* Bottom Features Section */}
                                    <div className="bg-white px-7 py-8 md:px-8 md:py-10  flex-1 flex flex-col justify-between">
                                        <div>
                                            <p className="text-sm font-medium text-black mb-5">
                                                {plan.featuresTitle}
                                            </p>
                                            <ul className="space-y-5">
                                                {plan.features.map((feature, fIndex) => (
                                                    <li key={fIndex} className="flex items-center gap-3">
                                                        <div className="size-6 rounded-full bg-black flex items-center justify-center shrink-0">
                                                            <ArrowUpRight className="size-4 text-white stroke-[2.5]" />
                                                        </div>
                                                        <span className="text-sm font-medium text-black">
                                                            {feature}
                                                        </span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        );
                    })}

                    <div className="lg:hidden flex items-center justify-center gap-5">
                        <button
                            ref={prevRef}
                            aria-label="Previous slide"
                            className="group bg-black/25 px-6 py-3 rounded-4xl cursor-pointer"
                        >
                            <span className="size-8 rounded-full bg-transparent border-2 border-white text-white group-hover:bg-white group-hover:text-black flex items-center justify-center transition-all duration-200 group-active:scale-95 shadow-2xs">
                                <ArrowLeft className="size-5" />
                            </span>
                        </button>
                        <button
                            ref={nextRef}
                            aria-label="Next slide"
                            className="group bg-black/25 px-6 py-3 rounded-4xl cursor-pointer"
                        >
                            <span className="size-8 rounded-full bg-transparent border-2 border-white text-white group-hover:bg-white group-hover:text-black flex items-center justify-center transition-all duration-200 group-active:scale-95 shadow-2xs">
                                <ArrowRight className="size-5" />
                            </span>
                        </button>
                    </div>
                </Swiper>
            </div>

            <Image
                src={"/images/home/pricing-pattern-1.png"}
                alt={"pricing bg"}
                className="hidden lg:block absolute bottom-0 right-0"
                width={700}
                height={700}
            />
            <Image
                src={"/images/home/pricing-pattern-2.png"}
                alt={"pricing bg"}
                className="hidden lg:block absolute bottom-0 left-0"
                width={640}
                height={400}
            />
        </section>
    );
}
