"use client";

import Image from "next/image";
import { Check } from "lucide-react";
import Balatro from "@/components/ui/Balatro";
import Grainient from "@/components/ui/Grainient";

export default function CompetitiveAdvantage() {

    const FEATURES = [
        {
            id: 1,
            title: "Manage Every Lead",
            description: "Keep new opportunities organized and make sure promising leads don't get lost.",
        },
        {
            id: 2,
            title: "Stay on Top of Projects",
            description: "Track project progress, tasks, and important customer information in one place.",
        },
        {
            id: 3,
            title: "Keep Your Team Aligned",
            description: "Give everyone access to the information they need to move work forward.",
        },
        {
            id: 4,
            title: "Work From One Source of Truth",
            description: "Keep customer, project, and business information connected instead of scattered across tools.",
        }
    ];

    return (
        <section className="bg-neutral-950 text-white py-16 md:py-24 px-4 relative overflow-hidden">

            <div className="absolute top-0 w-full h-full left-0 opacity-[0.15]">
                <Grainient
                    color1="#FFE99E"
                    color2="#09090b"
                    color3="#B497CF"
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



            {/* Top Section Header */}
            <div className="container mx-auto relative z-10 ">
                <div className="max-w-4xl">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-spaceGrotesk font-bold tracking-tight text-neutral-50 leading-tight">
                        Turn Your Workflow Into a
                        <span className="block text-orange-500">
                            Competitive Advantage
                            <svg className="mt-4" width="110" height="10" viewBox="0 0 110 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M55.4214 3.042C56.6044 2.94 79.4965 0.883309 91.9777 0.247303C97.256 -0.0306999 102.543 -0.0107027 107.775 0.0119642C108.546 0.0399645 109.831 0.643972 109.957 1.17664C110.146 2.00532 109.687 3.22 109.099 3.842C107.496 5.52202 105.364 6.02869 103.164 6.12003C95.0808 6.51403 86.9996 6.96804 78.9141 7.30271C58.3441 8.15405 37.7152 8.88805 17.1435 9.67939C13.1835 9.8434 9.16523 9.89006 5.20303 9.99406C3.22303 10.0761 1.54828 9.30873 0.399327 7.68204C-0.0599231 7.04337 -0.0967732 5.79002 0.155127 5.00201C0.359177 4.45534 1.39208 3.99467 2.05208 3.96734C19.5421 3.244 53.2131 1.89332 54.0695 1.81065C55.3169 1.69065 54.2378 3.14266 55.4208 3.04133L55.4214 3.042Z" fill="currentColor"></path></svg>
                        </span>
                    </h2>
                    <p className="mt-10 text-neutral-300 text-sm sm:text-base leading-relaxed font-normal">
                        From the first lead to the final project, GripCRM helps your team keep every step organized and connected.
                    </p>
                </div>

                {/* Main Content 2-Column Layout */}
                <div className="lg:mt-15 mt-10 lg:px-0 px-4 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                    {/* Left Column: UI Mockup Preview with Animated Image Change */}
                    <div className="lg:col-span-5 relative group">
                        <div className="absolute -inset-1 opacity-40 group-hover:opacity-70 transition duration-500" />

                        <div className="relative overflow-hidden">
                            {/* Animated Images Container */}
                            <div className="relative w-full rounded-2xl overflow-hidden">
                                <Image
                                    src='/images/home/competitive-advantage.png'
                                    alt={"competitive advantage"}
                                    height={775}
                                    width={632}
                                    className="w-full rounded-xl"
                                />

                            </div>
                        </div>
                    </div>

                    {/* Right Column: Feature Selection Cards */}
                    <div className={`lg:col-span-7 relative`}>
                        <div className="w-full block">
                            {FEATURES.map((feature, index) => {
                                return (
                                    <div key={feature.id} className={`relative py-8 sm:py-10 px-5 cursor-pointer transition-all duration-300 overflow-hidden ${index !== FEATURES.length - 1 ? "border-b border-neutral-700" : ""}`}>
                                        <div className="flex items-start gap-8">
                                            <div className={`size-10 sm:size-12 rounded-md flex items-center justify-center shrink-0 transition-all duration-300 bg-neutral-50`}>
                                                <span className="size-8 bg-neutral-900 rounded-full flex items-center justify-center">
                                                    <Check className="size-5 " />
                                                </span>
                                            </div>
                                            <div className="flex-1">
                                                <div className="flex items-center justify-between">
                                                    <h3
                                                        className={`text-lg sm:text-xl font-bold font-sans transition-colors duration-200`}>
                                                        {feature.title}
                                                    </h3>
                                                </div>
                                                <p className="mt-2 text-xs sm:text-sm text-gray-400 leading-relaxed font-sans">
                                                    {feature.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}