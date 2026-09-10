"use client";

import React from "react";
import { Phone, ArrowRight } from "lucide-react";
import Image from "next/image";
import Button from "@/components/ui/Button";

export default function Cta({ className }) {
    return (
        <section className={`relative ${className}`}>

            <div className="container mx-auto relative bg-white rounded-2xl lg:pt-0 pt-10 lg:overflow-visible overflow-hidden">

                {/* Background Decorative Geometric Shapes & Dot Patterns */}
                <Image
                    src="/images/home/cta-bg.svg"
                    alt="CTA Background"
                    width={640}
                    height={630}
                    className="absolute right-0 bottom-0 lg:w-150 w-full"
                />

                {/* Main Content Grid */}
                <div className="max-w-7xl lg:h-115 mx-auto md:px-10 block sm:grid grid-cols-1 lg:grid-cols-12 items-center gap-8 relative z-10">

                    {/* Left Column: Heading, Subtitle & Action Buttons */}
                    <div className="col-span-12 lg:col-span-7 flex flex-col items-start text-center lg:text-left lg:px-0 px-4">
                        <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 font-spaceGrotesk tracking-tight leading-[1.18] w-full">
                            Ready to Simplify Your Workflow?
                        </h2>

                        <p className="max-w-xl text-neutral-700 text-base font-medium mt-4">
                            See how GripCRM can help your team manage more, work smarter, and stay connected.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-wrap items-center gap-3 sm:gap-4 mx-auto lg:mx-0 mt-10">
                            {/* Phone Button */}
                            <Button className="bg-neutral-900 border-2 text-neutral-100 hover:bg-neutral-50 hover:text-neutral-900" href="tel:+11550199999">
                                <Phone className="size-4 group-hover:scale-110 transition-transform" />
                                <span className="hidden sm:flex relative z-1">+1 (155) 019-9999</span>
                            </Button>


                            {/* Tour Button */}
                            <Button className="bg-black/10 border-2 border-transparent text-neutral-900 hover:bg-neutral-50 hover:border-neutral-900" type="with-icon">
                                <span className="relative z-1">
                                    Request a Demo
                                </span>
                                <span className="w-5 h-5 rounded-full bg-neutral-900 text-neutral-100 flex items-center justify-center text-xs shrink-0 group-hover:translate-x-0.5 transition-transform">
                                    <ArrowRight className="size-4" />
                                </span>
                            </Button>
                        </div>
                    </div>

                    {/* Right Column: Support Representative Image */}
                    <div className="col-span-12 lg:col-span-5 flex justify-center lg:justify-end items-end sm:mt-0 mt-4">
                        <Image
                            src="/images/home/cta-agent.png"
                            alt="Customer Support Representative"
                            width={423}
                            height={500}
                            className="lg:absolute bottom-0 sm:w-auto w-80"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
