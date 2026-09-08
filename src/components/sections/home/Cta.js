"use client";

import React from "react";
import { PhoneOutgoing, ChevronRight } from "lucide-react";
import Image from "next/image";
import Button from "@/components/ui/Button";

export default function Cta() {
    return (
        <section className="pb-16 md:pb-24 relative px-4 bg-white">
            <div className="container mx-auto relative">

                {/* Background Decorative Geometric Shapes & Dot Patterns */}
                <Image
                    src="/images/home/cta-bg.png"
                    alt="CTA Background"
                    width={1350}
                    height={406}
                    className="hidden sm:block absolute left-0 bottom-0 w-full lg:h-100"
                />

                <Image
                    src="/images/home/cta-bg-mobile-new.png"
                    alt="CTA Background"
                    width={350}
                    height={414}
                    className="block sm:hidden absolute left-0 bottom-0 w-full"
                />

                {/* Main Content Grid */}
                <div className="max-w-6xl mx-auto md:px-10 grid grid-cols-1 lg:grid-cols-12 items-center gap-8 relative z-10">

                    {/* Left Column: Heading, Subtitle & Action Buttons */}
                    <div className="col-span-12 lg:col-span-7 flex flex-col items-start text-center lg:text-left pt-2 lg:pt-10">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black tracking-tight leading-[1.18] w-full">
                            Can&apos;t find what<br className="hidden sm:inline" /> you&apos;re looking for?
                        </h2>

                        <p className="text-slate-600 text-base font-medium mt-8 w-full">
                            Let us know what you need - we&apos;re happy to help!
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-wrap items-center gap-3 sm:gap-4 mx-auto lg:mx-0 mt-10">
                            {/* Phone Button */}
                            <Button className="bg-white text-black before:bg-black hover:text-white" href="tel:+11550199999">
                                <PhoneOutgoing className="size-4 hover:text-white group-hover:scale-110 transition-transform" />
                                <span className="hidden sm:flex relative z-1">+1 (155) 019-9999</span>
                            </Button>


                            {/* Tour Button */}
                            <Button className="bg-primary border-primary text-white hover:text-primary before:bg-white" type="with-icon">
                                <span className="relative z-1">
                                    Take a Quick Tour
                                </span>
                                <span className="w-5 h-5 rounded-full bg-white group-hover:bg-primary text-black group-hover:text-white flex items-center justify-center text-xs shrink-0 group-hover:translate-x-0.5 transition-transform">
                                    <ChevronRight className="size-4" />
                                </span>
                            </Button>
                        </div>
                    </div>

                    {/* Right Column: Support Representative Image */}
                    <div className="col-span-12 lg:col-span-5 flex justify-center lg:justify-end items-end">
                        <Image
                            src="/images/home/cta-agent.png"
                            alt="Customer Support Representative"
                            width={423}
                            height={500}
                            className="sm:w-auto w-80"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
