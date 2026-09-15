"use client";

import { useState, useEffect, useRef } from "react";
import { ArrowRight, Play } from "lucide-react";
import Image from "next/image";
import Button from "../ui/Button";
import Grainient from "../ui/Grainient";

const BRAND_LOGOS = [
    "logo-1.svg",
    "logo-2.svg",
    "logo-3.svg",
    "logo-4.svg",
    "logo-5.svg",
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
        <section className="bg-white hero-section md:py-20 py-15 relative">

            <div className="absolute top-0 w-full h-full left-0 opacity-[0.15]">
                <Grainient
                    color1="#F0BF69"
                    color2="#6D86E7"
                    color3="#79DCBA"
                    timeSpeed={1.5}
                    colorBalance={-0.21}
                    warpStrength={1}
                    warpFrequency={5}
                    warpSpeed={2}
                    warpAmplitude={50}
                    blendAngle={0}
                    blendSoftness={0.05}
                    rotationAmount={500}
                    noiseScale={2}
                    grainAmount={0.1}
                    grainScale={2}
                    grainAnimated={false}
                    contrast={1.5}
                    gamma={1}
                    saturation={1}
                    centerX={0}
                    centerY={0}
                    zoom={0.9}
                />
            </div>


            <div className="container mx-auto relative z-10">
                <div className="max-w-4xl mx-auto flex flex-col text-center">
                    {/* Main Heading */}
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-spaceGrotesk font-bold text-neutral-900 tracking-tight leading-[1.08] select-none">
                        Metal Building <br className="hidden sm:inline" />
                        Management,
                        <span className="text-blue-500 block">
                            Simplified
                            <svg className="mx-auto mt-3" width="110" height="10" viewBox="0 0 110 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M55.4214 3.042C56.6044 2.94 79.4965 0.883309 91.9777 0.247303C97.256 -0.0306999 102.543 -0.0107027 107.775 0.0119642C108.546 0.0399645 109.831 0.643972 109.957 1.17664C110.146 2.00532 109.687 3.22 109.099 3.842C107.496 5.52202 105.364 6.02869 103.164 6.12003C95.0808 6.51403 86.9996 6.96804 78.9141 7.30271C58.3441 8.15405 37.7152 8.88805 17.1435 9.67939C13.1835 9.8434 9.16523 9.89006 5.20303 9.99406C3.22303 10.0761 1.54828 9.30873 0.399327 7.68204C-0.0599231 7.04337 -0.0967732 5.79002 0.155127 5.00201C0.359177 4.45534 1.39208 3.99467 2.05208 3.96734C19.5421 3.244 53.2131 1.89332 54.0695 1.81065C55.3169 1.69065 54.2378 3.14266 55.4208 3.04133L55.4214 3.042Z" fill="currentColor" />
                            </svg>
                        </span>

                    </h1>



                    {/* Description Paragraph */}
                    <p className="mt-6 sm:mt-10 text-neutral-700 text-base leading-relaxed">
                        Manage leads, customers, projects, and everyday workflows in one connected platform built for metal building businesses.
                    </p>

                    {/* CTA Button */}
                    <div className="mt-8 sm:mt-10">
                        <Button className="inline-flex border-2 border-neutral-900 bg-neutral-900 hover:bg-transparent hover:text-neutral-900 text-neutral-100 font-semibold text-sm" type="reverse-icon" href="#login">
                            <span>
                                Watch Demo
                            </span>
                            <span className="w-5 h-5 rounded-full bg-neutral-100 text-neutral-900 group-hover:bg-neutral-900 group-hover:text-neutral-100 flex items-center justify-center text-xs shrink-0 group-hover:translate-x-0.5 transition-transform">
                                <ArrowRight className="size-4" />
                            </span>
                        </Button>
                    </div>

                    <div className="relative mt-10 sm:mt-15 sm:rounded-3xl overflow-hidden">
                        <Image
                            src="/images/home/screen-cover.png"
                            alt="Screen"
                            width={888}
                            height={500}
                            className="h-auto w-full"
                        />

                        {/* <Play className="absolute w-18 h-18 text-black top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] bg-white rounded-full p-5 md:block hidden" /> */}

                    </div>
                    <div className="flex items-center gap-8 justify-center mt-5 px-4">
                        <div className="flex items-center gap-1">
                            <svg className="size-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M564 325.8C564 467.3 467.1 568 324 568C186.8 568 76 457.2 76 320C76 182.8 186.8 72 324 72C390.8 72 447 96.5 490.3 136.9L422.8 201.8C334.5 116.6 170.3 180.6 170.3 320C170.3 406.5 239.4 476.6 324 476.6C422.2 476.6 459 406.2 464.8 369.7L324 369.7L324 284.4L560.1 284.4C562.4 297.1 564 309.3 564 325.8z" /></svg>
                            <span className="text-neutral-700 font-semibold"><strong className="text-neutral-900 font-bold">4.5/ 5</strong> (104 Review)</span>
                        </div>
                    </div>
                </div>



                {/* Marquee Section */}
                <div ref={containerRef} className="md:mt-15 mt-10 w-full overflow-hidden">
                    {isOverflowing ? (
                        <div
                            ref={trackRef}
                            className="flex gap-4 w-max animate-marquee"
                        >
                            {BRAND_LOGOS.map((brandLogo, index) => (
                                <span key={`set1-${index}`} className="w-45 bg-neutral-50 border-2 border-neutral-500 rounded-lg p-6 h-20 shrink-0 flex items-center justify-center">
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
                                <span key={`set2-${index}`} className="w-45 bg-neutral-50 border-2 border-neutral-500 rounded-lg p-6 h-20 shrink-0 flex items-center justify-center">
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
                                <span key={index} className="w-45 bg-neutral-50 border-2 border-neutral-500 rounded-lg p-6 h-20 shrink-0 flex items-center justify-center">
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

                    <div className="mt-5 text-center text-sm text-neutral-700 font-medium">
                        Trusted by 400+ customers, from startups to enterprises
                    </div>
                </div>
            </div>
        </section>
    );
}

