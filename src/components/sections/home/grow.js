"use client";

import Button from "@/components/ui/Button";
import Counter from "@/components/ui/Counter";
import { ChevronRight } from "lucide-react";

export default function Grow() {
    return (
        <section className="pb-16 md:pb-24 lg:pt-0 pt-16 lg:border-none border-t border-black/25 bg-white px-4">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">

                    {/* Left Column: Heading, Subtitle, CTA & Decorative Arrow */}
                    <div className="lg:col-span-5 flex flex-col items-start relative z-10">
                        <div className="mb-4 sm:mb-6">
                            <div className="relative">
                                <span className="inline-block font-spaceGrotesk font-bold text-5xl md:text-6xl text-yellow">
                                    Grow
                                </span>
                                <svg className="absolute top-0 lg:top-2 left-0" width="140" height="48" viewBox="0 0 140 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M135.763 17.6441C136.254 18.792 136.531 19.4938 136.841 20.1637C138.052 22.7733 139.242 25.4574 138.751 29.0872C138.235 32.9081 136.554 33.3021 134.875 33.5506C131.364 34.0611 127.824 34.3127 124.34 35.0387C113.384 37.3041 102.506 40.376 91.4849 41.9647C77.6614 43.9582 63.7409 45.0019 49.8233 46.0743C40.0947 46.8238 30.3036 46.9398 20.5383 47.2713C17.7236 47.3724 14.8885 47.3154 12.0515 47.1571C10.1031 47.0371 8.51968 45.1135 7.20746 41.6705C6.62034 40.1389 5.73478 38.9385 4.91013 37.878C2.72026 35.0781 0.852164 32.1338 1.15342 26.2552C1.23735 24.6649 0.713155 22.7358 0.400158 20.9915C-0.580729 15.5155 0.23933 11.9004 2.89266 11.5521C9.98927 10.5972 17.1123 9.94497 24.2215 9.13421C35.1404 7.88851 46.0238 6.1522 56.9932 5.48292C67.2337 4.84838 77.5599 5.26644 87.8592 5.30926C101.793 5.36818 115.671 4.80744 129.284 1.27852C129.918 1.10688 130.522 0.690925 131.156 0.51936C132.067 0.26532 132.992 -0.0769813 133.928 0.0154361C136.64 0.257405 139.33 4.95938 139.874 10.2123C140.307 14.4438 139.4 16.1932 135.766 17.6729L135.763 17.6441Z" fill="#E79325" fillOpacity="0.1" />
                                </svg>
                            </div>

                            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-black mt-2 leading-[1.15]">
                                With Grip CRM
                            </h2>
                        </div>

                        {/* Description Paragraph */}
                        <p className="text-black/70 text-base leading-relaxed max-w-md mb-10">
                            Contact us today for a personalized demo and see how our platform can meet your specific needs.
                        </p>

                        {/* CTA Button */}

                        <Button className="bg-primary border-primary text-white hover:text-primary before:bg-white" type="with-icon">
                            <span className="relative z-1">
                                Request a Demo
                            </span>
                            <span className="w-5 h-5 rounded-full bg-white group-hover:bg-primary text-black group-hover:text-white flex items-center justify-center text-xs shrink-0 group-hover:translate-x-0.5 transition-transform">
                                <ChevronRight className="size-4" />
                            </span>
                        </Button>

                        {/* Loopy Swirl Arrow pointing to cards */}
                        <div className="hidden lg:block absolute -bottom-20 -right-25">
                            <svg width="299" height="125" viewBox="0 0 299 125" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M287.72 21.1118C288.32 26.1518 288.55 31.3918 289.77 36.3018C290.34 38.5318 292.87 41.8618 294.62 41.8918C298.6 42.0618 299.46 38.6118 298.57 35.1318C296.6 27.4718 294.48 19.8618 292.4 12.2218C291.95 10.6118 291.16 9.0618 290.97 7.4618C290.24 -0.1782 287.58 -1.8182 281.02 1.9318C272.48 6.7818 263.95 11.6218 255.84 17.0618C253.94 18.3618 252.25 22.5318 252.9 24.5118C254.28 28.6718 258.18 27.6618 261.31 25.9318C265.67 23.5018 269.91 20.9118 275.5 17.6018C269.98 31.4718 262.91 42.6618 254.2 52.7218C218.92 93.5118 172.94 111.812 120.21 114.812C104.95 115.672 90.71 111.492 80.37 98.9818C77.93 96.0318 76.36 92.4118 73.74 88.0518C89.25 89.3318 103.17 88.4018 116.31 83.0718C123.24 80.2818 130.04 76.8718 136.15 72.6718C143.36 67.6818 147.85 60.6018 145.68 51.2218C143.5 41.6618 136.84 36.1518 127.68 34.0418C113.79 30.9018 100.64 33.9718 88.52 40.8118C73.73 49.1218 65.21 61.8618 63.63 79.6018C31.58 70.5318 12.07 49.5518 1.59 19.1218C1.07 19.3018 0.52 19.5018 0 19.6818C0.39 21.6518 0.59 23.6318 1.21 25.5718C10.49 54.8618 29.6 74.6618 58.75 84.4618C62.47 85.7118 64.31 87.2818 65.5 91.2618C69.87 105.942 80.23 115.612 94.3 120.432C102.66 123.302 111.89 125.422 120.61 124.942C176.63 121.882 225.68 102.662 262.72 58.9418C272.27 47.6418 279.3 34.1618 287.87 21.1218L287.72 21.1018V21.1118ZM73.58 81.4018C73.52 49.9218 109.97 37.0518 127.98 43.4218C139.87 47.6218 141.56 59.0118 131.06 66.9418C114.17 79.6618 94.73 83.4618 73.54 81.4318L73.58 81.4018Z" fill="#395394" fillOpacity="0.5" />
                            </svg>
                        </div>
                    </div>

                    {/* Right Column: 3 Stat Cards Layout */}
                    <div className="lg:col-span-7 flex flex-col gap-10 items-center">
                        {/* Top Row: Green & Orange Cards */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 w-full">

                            {/* Card 1: Green - Increased Productivity */}
                            <div className="bg-green text-white rounded-2xl p-8 sm:p-10 flex flex-col items-center text-center shadow-lg transition-transform hover:-translate-y-1 duration-300">
                                {/* Rocket Icon + 3 Dots */}
                                <div className="flex flex-col items-center gap-1.5 mb-8">
                                    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_10431_224)">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M33.7601 0.592999C32.7199 -0.197666 31.2798 -0.197666 30.2395 0.592999C22.941 6.13993 18.5122 14.649 18.5122 23.8018V45.2236C18.5122 46.8301 19.8146 48.1327 21.4213 48.1327H42.5785C44.1852 48.1327 45.4876 46.83 45.4876 45.2236V23.8018C45.4877 14.649 41.0588 6.13993 33.7601 0.592999ZM26.4457 24.0653C26.4457 20.998 28.9321 18.5115 31.9994 18.5115C35.0667 18.5115 37.5532 20.998 37.5532 24.0653C37.5532 27.1325 35.0667 29.6191 31.9994 29.6191C28.9321 29.6191 26.4457 27.1325 26.4457 24.0653Z" fill="white" />
                                            <path d="M10.843 26.4492C6.32722 26.4492 2.64453 30.1319 2.64453 34.6477V45.226C2.64453 46.8327 3.94692 48.1351 5.5536 48.1351H10.8429C12.4495 48.1351 13.7519 46.8327 13.7519 45.226V29.3584C13.752 27.7516 12.4495 26.4492 10.843 26.4492Z" fill="white" />
                                            <path d="M53.1571 26.4492C51.5504 26.4492 50.248 27.7516 50.248 29.3583V45.226C50.248 46.8327 51.5504 48.1351 53.1571 48.1351H58.4465C60.0532 48.1351 61.3556 46.8327 61.3556 45.226V34.6477C61.3556 30.1319 57.6729 26.4492 53.1571 26.4492Z" fill="white" />
                                            <path d="M31.9999 52.8926C33.6066 52.8926 34.909 54.1953 34.909 55.8016V61.091C34.909 62.6977 33.6066 64.0001 31.9999 64.0001C30.3932 64.0001 29.0908 62.6977 29.0908 61.091V55.8016C29.0908 54.1953 30.3932 52.8926 31.9999 52.8926Z" fill="white" />
                                            <path d="M45.4878 55.8016C45.4878 54.1952 44.1851 52.8926 42.5787 52.8926C40.9721 52.8926 39.6697 54.1953 39.6697 55.8016V61.091C39.6697 62.6977 40.9721 64.0001 42.5787 64.0001C44.1852 64.0001 45.4878 62.6977 45.4878 61.091V55.8016Z" fill="white" />
                                            <path d="M21.4213 52.8926C23.028 52.8926 24.3303 54.1953 24.3303 55.8016V61.091C24.3303 62.6977 23.0278 64.0001 21.4213 64.0001C19.8146 64.0001 18.5122 62.6977 18.5122 61.091V55.8016C18.5121 54.1953 19.8146 52.8926 21.4213 52.8926Z" fill="white" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_10431_224">
                                                <rect width="64" height="64" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>

                                {/* Stat Number */}
                                <div className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-3">
                                    <Counter end={32} />
                                </div>

                                {/* Title */}
                                <h3 className="text-lg sm:text-xl md:text-2xl font-medium mb-8 leading-tight">
                                    Increased Productivity
                                </h3>

                                {/* Description */}
                                <p className="text-white/70 text-sm leading-relaxed font-medium">
                                    Grow your online presence and increase your search rankings. This will help you reach a new market of online buyers.
                                </p>
                            </div>

                            {/* Card 2: Orange - Increase Revenue */}
                            <div className="bg-[#FF6525] text-white rounded-2xl p-8 sm:p-10 flex flex-col items-center text-center shadow-lg transition-transform hover:-translate-y-1 duration-300">
                                <div className="flex flex-col items-center gap-1.5 mb-8">
                                    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_10431_1821)">
                                            <path d="M30.7401 3.01768C31.5369 2.48649 32.4424 2.24414 33.393 2.24414H34.7154C36.0828 2.24414 37.3511 2.70726 38.2812 3.6375C39.2116 4.56787 39.6748 5.83592 39.6748 7.20345V22.0814H55.8753C61.3213 22.0814 64.9793 27.1221 63.768 32.3716C63.7633 32.3915 63.7584 32.411 63.7531 32.4308L58.1325 53.2596L58.1253 53.2861L58.1166 53.3152C56.5998 58.2454 52.3654 61.756 46.9486 61.756H18.1843V26.6505L28.9388 5.1417C29.3672 4.28419 29.9537 3.54191 30.7401 3.01768Z" fill="white" />
                                            <path d="M11.5718 28.6938H3.30616C2.43457 28.6938 1.57977 28.9917 0.938768 29.6325C0.297765 30.2735 0 31.1285 0 32V58.4497C0 59.3212 0.297765 60.1762 0.938768 60.8172C1.57977 61.458 2.43457 61.7559 3.30616 61.7559H11.5718V28.6938Z" fill="white" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_10431_1821">
                                                <rect width="64" height="64" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>

                                {/* Stat Number */}
                                <div className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-3">
                                    <Counter end={59} />
                                </div>

                                {/* Title */}
                                <h3 className="text-lg sm:text-xl md:text-2xl font-medium mb-8 leading-tight">
                                    Increased Revenue
                                </h3>

                                {/* Description */}
                                <p className="text-white/70 text-sm leading-relaxed font-medium">
                                    The unique "step system" forces the user to see all the options. This makes it easy for the customer to "check the box" and increase your sales.
                                </p>
                            </div>

                        </div>

                        {/* Bottom Row: Blue Card Centered Underneath */}
                        <div className="w-full sm:w-[calc(50%-12px)] sm:self-center">
                            {/* Card 3: Blue - Streamline Your Sales Process */}
                            <div className="bg-[#1D70F5] text-white rounded-2xl p-8 sm:p-10 flex flex-col items-center text-center shadow-lg transition-transform hover:-translate-y-1 duration-300">
                                {/* Rocket Icon + 3 Dots */}
                                <div className="flex flex-col items-center gap-1.5 mb-8">
                                    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_10431_224)">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M33.7601 0.592999C32.7199 -0.197666 31.2798 -0.197666 30.2395 0.592999C22.941 6.13993 18.5122 14.649 18.5122 23.8018V45.2236C18.5122 46.8301 19.8146 48.1327 21.4213 48.1327H42.5785C44.1852 48.1327 45.4876 46.83 45.4876 45.2236V23.8018C45.4877 14.649 41.0588 6.13993 33.7601 0.592999ZM26.4457 24.0653C26.4457 20.998 28.9321 18.5115 31.9994 18.5115C35.0667 18.5115 37.5532 20.998 37.5532 24.0653C37.5532 27.1325 35.0667 29.6191 31.9994 29.6191C28.9321 29.6191 26.4457 27.1325 26.4457 24.0653Z" fill="white" />
                                            <path d="M10.843 26.4492C6.32722 26.4492 2.64453 30.1319 2.64453 34.6477V45.226C2.64453 46.8327 3.94692 48.1351 5.5536 48.1351H10.8429C12.4495 48.1351 13.7519 46.8327 13.7519 45.226V29.3584C13.752 27.7516 12.4495 26.4492 10.843 26.4492Z" fill="white" />
                                            <path d="M53.1571 26.4492C51.5504 26.4492 50.248 27.7516 50.248 29.3583V45.226C50.248 46.8327 51.5504 48.1351 53.1571 48.1351H58.4465C60.0532 48.1351 61.3556 46.8327 61.3556 45.226V34.6477C61.3556 30.1319 57.6729 26.4492 53.1571 26.4492Z" fill="white" />
                                            <path d="M31.9999 52.8926C33.6066 52.8926 34.909 54.1953 34.909 55.8016V61.091C34.909 62.6977 33.6066 64.0001 31.9999 64.0001C30.3932 64.0001 29.0908 62.6977 29.0908 61.091V55.8016C29.0908 54.1953 30.3932 52.8926 31.9999 52.8926Z" fill="white" />
                                            <path d="M45.4878 55.8016C45.4878 54.1952 44.1851 52.8926 42.5787 52.8926C40.9721 52.8926 39.6697 54.1953 39.6697 55.8016V61.091C39.6697 62.6977 40.9721 64.0001 42.5787 64.0001C44.1852 64.0001 45.4878 62.6977 45.4878 61.091V55.8016Z" fill="white" />
                                            <path d="M21.4213 52.8926C23.028 52.8926 24.3303 54.1953 24.3303 55.8016V61.091C24.3303 62.6977 23.0278 64.0001 21.4213 64.0001C19.8146 64.0001 18.5122 62.6977 18.5122 61.091V55.8016C18.5121 54.1953 19.8146 52.8926 21.4213 52.8926Z" fill="white" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_10431_224">
                                                <rect width="64" height="64" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>

                                {/* Stat Number */}
                                <div className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-3">
                                    <Counter end={76} />
                                </div>

                                {/* Title */}
                                <h3 className="text-lg sm:text-xl md:text-2xl font-medium mb-8 leading-tight">
                                    Streamline Your Sales Process
                                </h3>

                                {/* Description */}
                                <p className="text-white/70 text-sm leading-relaxed font-medium">
                                    Standardizes your pricing and options for your salespeople. It improves communication with renderings, floor plans, and colors.
                                </p>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
}
