"use client";

import { useState, useEffect, useRef } from "react";
import { ChevronRight, Play } from "lucide-react";
import Image from "next/image";
import Button from "../ui/Button";

const BRAND_LOGOS = [
    "logo-1.png",
    "logo-2.png",
    "logo-3.png",
    "logo-4.png",
    "logo-5.png",
];

export default function Banner() {
    const containerRef = useRef(null);
    const trackRef = useRef(null);
    const [isOverflowing, setIsOverflowing] = useState(false);

    useEffect(() => {
        const checkOverflow = () => {
            if (!containerRef.current || !trackRef.current) return;
            const containerWidth = containerRef.current.clientWidth;
            const trackWidth = trackRef.current.scrollWidth;

            // When isOverflowing is true, 2 duplicated sets of cards are rendered, so single set width is trackWidth / 2
            const singleSetWidth = isOverflowing ? trackWidth / 2 : trackWidth;

            setIsOverflowing(singleSetWidth > containerWidth);
        };

        checkOverflow();

        const resizeObserver = new ResizeObserver(checkOverflow);
        if (containerRef.current) {
            resizeObserver.observe(containerRef.current);
        }
        if (trackRef.current) {
            resizeObserver.observe(trackRef.current);
        }

        window.addEventListener("resize", checkOverflow);

        return () => {
            resizeObserver.disconnect();
            window.removeEventListener("resize", checkOverflow);
        };
    }, [isOverflowing]);

    return (
        <section className="md:pt-25 pt-10">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 relative lg:pb-0 md:pb-25 pb-12 px-4">
                    {/* Left Content Column */}
                    <div className="lg:col-span-8 xl:col-span-7 flex flex-col md:text-left text-center">
                        {/* Handwritten Subheading */}
                        <div className="relative inline-block mb-3 sm:mb-4">
                            <span className="font-caveat font-caveat text-[#16a34a] text-3xl sm:text-4xl md:text-5xl font-normal leading-tight block select-none">
                                A Revolutionizing
                            </span>
                            {/* Yellow hand-drawn underline */}
                            <svg className="md:m-0 m-auto" width="200" height="20" viewBox="0 0 200 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.78011 18.9742C-0.953899 15.2812 -0.538897 11.9603 3.02712 9.01325C6.59314 6.06525 12.5062 4.17225 20.7662 3.33225C22.5942 3.27025 24.3632 3.24625 26.0722 3.25825C27.9002 3.19625 29.2732 2.96925 30.1902 2.57625C31.1632 2.50825 33.6993 2.36425 37.7983 2.14425C42.1033 1.97525 47.2193 1.75025 53.1453 1.46825C59.1594 1.31225 65.3954 1.10725 71.8524 0.854246C78.3965 0.727246 84.5135 0.596247 90.2035 0.463248C96.0115 0.255248 100.847 0.116249 104.709 0.0442488C108.57 -0.0277512 110.707 -0.0117465 111.119 0.0912535C111.349 0.667253 111.994 0.98425 113.055 1.04225C114.32 1.15125 115.413 1.00925 116.33 0.616247C117.454 0.274247 118.767 0.0842482 120.271 0.0452482C121.861 0.132248 122.95 0.352251 123.536 0.706251C124.303 0.587251 125.174 0.493253 126.147 0.425253C127.208 0.483253 128.018 0.426247 128.58 0.255247C129.142 0.0842473 129.732 0.0762534 130.349 0.230253C131.085 0.310253 131.735 0.265252 132.296 0.0942518C134.061 0.432252 136.638 0.713247 140.024 0.937247C143.53 1.08725 147.464 1.24125 151.824 1.39825C156.272 1.68025 160.736 1.86325 165.215 1.94525C169.781 2.15325 174.038 2.28425 177.987 2.33825C181.936 2.39225 185.252 2.39125 187.935 2.33525C190.617 2.28025 192.239 2.16625 192.8 1.99625C194.841 1.26125 196.425 2.07225 197.552 4.42925C198.462 4.76025 199.277 5.69125 200 7.22125C200 7.22125 199.791 7.53225 199.372 8.15425C199.159 8.82725 198.764 9.97425 198.188 11.5943C197.731 13.1403 196.926 14.1842 195.771 14.7252C194.704 15.3922 193.386 15.9453 191.82 16.3833C190.104 17.0953 188.434 17.5083 186.812 17.6213C185.308 17.6603 182.982 17.4933 179.832 17.1203C176.801 16.6733 172.032 16.0512 165.527 15.2542C163.935 15.1672 162.302 15.0182 160.624 14.8062C159.151 14.6452 157.739 14.4482 156.386 14.2132C155.237 14.0302 154.237 13.9353 153.382 13.9293C152.645 13.8493 152.159 13.8832 151.921 14.0312C151.359 14.2022 150.343 14.2072 148.871 14.0462C147.605 13.9372 146.057 13.9132 144.23 13.9752C142.876 13.7402 140.933 13.5142 138.401 13.2952C135.868 13.0772 133.233 12.8333 130.495 12.5633C127.844 12.4193 125.457 12.2893 123.337 12.1743C121.334 11.9843 120.213 11.9642 119.977 12.1122C119.534 12.2092 118.988 12.2802 118.339 12.3252C117.777 12.4962 117.1 12.3782 116.31 11.9732C116.078 11.3972 115.521 11.2053 114.635 11.3993C113.956 11.6443 113.615 11.7662 113.615 11.7662C112.666 12.3592 108.626 12.5423 101.495 12.3153C98.1636 12.4163 93.1665 12.5672 86.5035 12.7682C79.9275 13.0952 72.6004 13.4422 64.5214 13.8082C56.6484 14.2262 48.8773 14.6693 41.2093 15.1383C33.6603 15.5333 27.1282 15.9232 21.6132 16.3072C16.1852 16.8172 12.7312 17.3542 11.2522 17.9182C8.17514 19.1202 6.09113 19.7922 4.99913 19.9342C3.78812 20.1502 2.71612 19.8302 1.78111 18.9742H1.78011Z" fill="#FFD00F" />
                            </svg>
                        </div>

                        {/* Main Heading */}
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-black tracking-tight leading-[1.08]">
                            Metal Building <br className="hidden sm:inline" />
                            Management Tool
                        </h1>

                        {/* Description Paragraph */}
                        <p className="mt-6 sm:mt-12 text-black/700 text-sm sm:text-base md:text-xl leading-relaxed">
                            GripCRM offers a powerful CRM platform designed specifically for the metal building industry, providing the tools &amp; insights needed to efficiently oversee every aspect of your projects, from initial design to final construction.
                        </p>

                        {/* CTA Button */}
                        <div className="mt-8 sm:mt-12">
                            <Button className="inline-flex bg-white text-black before:bg-black hover:!text-white md:w-auto w-full justify-center md:!bg-white md:!text-black !bg-black !text-white" type="reverse-icon" href="#login">
                                <span className="relative z-1">
                                    Explore
                                </span>
                                <span className="w-5 h-5 rounded-full md:bg-black bg-white group-hover:bg-white md:text-white text-black group-hover:text-black flex items-center justify-center text-xs shrink-0 group-hover:translate-x-0.5 transition-transform">
                                    <ChevronRight className="size-4" />
                                </span>
                            </Button>
                        </div>
                    </div>

                    {/* Right Column: Hand-drawn Swirl Arrow Graphic */}
                    <div className="lg:col-span-4 xl:col-span-5 flex justify-center lg:justify-start items-end py-0 lg:relative absolute lg:bottom-0 lg:left-0 md:left-60 left-45 md:w-auto w-[30%] lg:rotate-none -rotate-45 -bottom-22 md:flex hidden">
                        <svg width="172" height="300" viewBox="0 0 172 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M141.67 248.961C146.223 246.992 150.765 244.608 155.516 243.225C157.678 242.616 161.729 243.127 162.608 244.61C164.691 247.918 162.194 250.354 158.819 251.305C151.383 253.398 143.911 255.334 136.435 257.319C134.856 257.728 133.156 257.816 131.709 258.445C124.888 261.582 122.212 260.124 122.179 252.684C122.109 243.017 122.039 233.351 122.68 223.756C122.852 221.501 125.556 218.003 127.546 217.582C131.733 216.712 132.791 220.537 132.853 224.056C132.931 228.971 132.806 233.866 132.738 240.264C141.774 228.724 147.785 217.19 152.033 204.807C169.298 154.632 162.324 106.41 139.127 59.9663C132.406 46.5322 121.919 36.4386 106.288 33.7822C102.608 33.1539 98.7704 33.5945 93.8058 33.5085C102.456 46.1034 108.466 58.4329 110.38 72.2617C111.403 79.5443 111.843 87.0266 111.277 94.3044C110.58 102.912 106.781 110.226 97.7922 112.989C88.6409 115.84 80.7309 112.875 74.479 106.1C65.0381 95.8018 61.2214 83.073 61.0886 69.3717C60.8943 52.6682 67.5133 39.1292 81.7377 29.0409C58.4133 6.18955 31.1462 -0.116169 0.30072 5.92483C0.198212 5.39808 0.101547 4.82018 0 4.29344C1.85809 3.65377 3.62929 2.85047 5.56842 2.42558C34.8703 -4.08052 60.9343 2.46579 83.4611 22.4994C86.3352 25.061 88.5641 25.8534 92.5028 24.9064C107.05 21.4104 120.285 25.4789 131.229 35.102C137.739 40.8185 144.036 47.65 147.892 55.3207C172.653 104.608 180.349 155.898 161.462 209.009C156.569 222.721 148.604 235.351 141.762 249.073L141.67 248.961ZM88.1115 36.6549C61.4626 52.1055 68.3765 89.5258 82.5488 101.746C91.9025 109.815 102.363 105.65 103.942 92.792C106.446 72.1245 100.169 53.673 88.1166 36.6038L88.1115 36.6549Z" fill="#FF7316" fillOpacity="0.25" />
                        </svg>
                    </div>
                </div>

                <div className="max-w-[1110px] ml-auto">
                    <div className="relative">
                        <Image
                            src="/images/home/screen.png"
                            alt="Screen"
                            width={1110}
                            height={752}
                            className="w-full h-auto md:block hidden"
                        />
                        <Image
                            src="/images/home/screen-cover.png"
                            alt="Screen"
                            width={888}
                            height={500}
                            className="h-auto md:absolute md:top-[50%] md:left-[50%] md:-translate-x-[50%] md:-translate-y-[50%] md:w-[85%] w-full"
                        />

                        <Play className="absolute w-18 h-18 text-black top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] bg-white rounded-full p-5 md:block hidden" />

                    </div>
                    <div className="flex items-center gap-8 justify-center md:mt-0 mt-5 px-4">
                        <div className="flex items-center gap-2.5">
                            <Image
                                src="/images/icon/google.png"
                                alt="google"
                                width={32}
                                height={32}
                                className="size-8"
                            />
                            <span className="flex flex-col md:flex-row gap-0 md:gap-2 text-black/700"><strong>4.5/ 5</strong> (104 Review)</span>
                        </div>
                        <div className="flex items-center gap-2.5">
                            <Image
                                src="/images/icon/star.svg"
                                alt="google"
                                width={32}
                                height={32}
                                className="size-8"
                            />
                            <span className="flex flex-col md:flex-row gap-0 md:gap-2 text-black/700"><strong>4.5/ 5</strong> (104 Review)</span>
                        </div>
                    </div>
                </div>

                {/* Marquee Section */}
                <div ref={containerRef} className="md:mt-20 mt-10 w-full overflow-hidden">
                    {isOverflowing ? (
                        <div
                            ref={trackRef}
                            className="flex gap-4 w-max animate-marquee"
                        >
                            {BRAND_LOGOS.map((brandLogo, index) => (
                                <span key={`set1-${index}`} className="w-60 border border-black/20 h-25 shrink-0 flex items-center justify-center">
                                    <Image
                                        src={`/images/home/${brandLogo}`}
                                        alt={brandLogo}
                                        width={168}
                                        height={100}
                                        className="mx-auto w-auto h-full object-contain grayscale"
                                    />
                                </span>
                            ))}
                            {BRAND_LOGOS.map((brandLogo, index) => (
                                <span key={`set2-${index}`} className="w-60 border border-black/20 h-25 shrink-0 flex items-center justify-center">
                                    <Image
                                        src={`/images/home/${brandLogo}`}
                                        alt={brandLogo}
                                        width={168}
                                        height={100}
                                        className="mx-auto w-auto h-full object-contain grayscale"
                                    />
                                </span>
                            ))}
                        </div>
                    ) : (
                        <div
                            ref={trackRef}
                            className="flex gap-4 justify-center items-center w-full"
                        >
                            {BRAND_LOGOS.map((brandLogo, index) => (
                                <span key={index} className="w-60 border border-black/20 h-25 shrink-0 flex items-center justify-center">
                                    <Image
                                        src={`/images/home/${brandLogo}`}
                                        alt={brandLogo}
                                        width={168}
                                        height={100}
                                        className="mx-auto w-auto h-full object-contain grayscale"
                                    />
                                </span>
                            ))}
                        </div>
                    )}

                    <div className="mt-5 text-center md:text-lg text-md text-black/70 font-medium">
                        Trusted by 400+ customers, from startups to enterprises
                    </div>
                </div>
            </div>
        </section>
    );
}

