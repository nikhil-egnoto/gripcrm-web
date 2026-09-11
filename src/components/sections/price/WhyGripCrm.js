"use client";

import Counter from "@/components/ui/Counter";
import Image from "next/image";

export default function WhyGripCrm() {
    return (
        <section className="py-16 md:py-24 bg-white px-4 sm:px-6 lg:px-8 border-t border-neutral-300">
            <div className="container mx-auto">

                {/* Header Section */}
                <div className="text-center mb-12 sm:mb-16">
                    <h2 className="font-spaceGrotesk text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-900 tracking-tight leading-tight">
                        Why GripCRM?
                        <svg className="mt-3 mx-auto text-violet-500" width="110" height="10" viewBox="0 0 110 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M55.4214 3.042C56.6044 2.94 79.4965 0.883309 91.9777 0.247303C97.256 -0.0306999 102.543 -0.0107027 107.775 0.0119642C108.546 0.0399645 109.831 0.643972 109.957 1.17664C110.146 2.00532 109.687 3.22 109.099 3.842C107.496 5.52202 105.364 6.02869 103.164 6.12003C95.0808 6.51403 86.9996 6.96804 78.9141 7.30271C58.3441 8.15405 37.7152 8.88805 17.1435 9.67939C13.1835 9.8434 9.16523 9.89006 5.20303 9.99406C3.22303 10.0761 1.54828 9.30873 0.399327 7.68204C-0.0599231 7.04337 -0.0967732 5.79002 0.155127 5.00201C0.359177 4.45534 1.39208 3.99467 2.05208 3.96734C19.5421 3.244 53.2131 1.89332 54.0695 1.81065C55.3169 1.69065 54.2378 3.14266 55.4208 3.04133L55.4214 3.042Z" fill="currentColor"></path></svg>
                    </h2>
                    <p className="text-neutral-700 text-sm sm:text-base mt-10">
                        Everything your team needs to manage customers, streamline work, and build better business relationships.
                    </p>
                </div>

                {/* Staggered Bento Cards Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-center">

                    {/* Column 1: Green Card - Increased Productivity */}
                    <div className="w-full">
                        <div className="bg-green-500 text-white rounded-2xl p-9 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col items-start">
                            {/* Icon Badge */}
                            <div className="size-21 bg-white rounded-lg p-3 flex items-center justify-center mb-8">
                                <Image src="/images/home/increased-productivity.svg" alt="Increased Productivity" width={64} height={64} />
                            </div>

                            {/* Stat Number */}
                            <div className="font-spaceGrotesk text-5xl lg:text-6xl font-semibold text-white tracking-tight mb-2">
                                <Counter end={32} />
                            </div>

                            {/* Subtitle */}
                            <h3 className="text-2xl font-medium text-white mb-8">
                                Increased Productivity
                            </h3>

                            {/* Description */}
                            <p className="text-green-50 text-sm/8 font-normal">
                                Companies using GripCRM report a 32% boost in team productivity within the first 90 days.
                            </p>
                        </div>
                    </div>

                    {/* Column 2: Stacked Cards (Blue + Orange) */}
                    <div className="w-full flex flex-col gap-6 lg:gap-8">

                        {/* Card 2: Blue - Faster Implementation */}
                        <div className="bg-blue-500 text-white rounded-2xl p-9 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col items-start">
                            <div className="size-21 bg-white rounded-lg p-3 flex items-center justify-center mb-8">
                                <Image src="/images/home/faster-implementation.svg" alt="Faster Implementation" width={64} height={64} />
                            </div>

                            {/* Stat Number */}
                            <div className="font-spaceGrotesk text-5xl lg:text-6xl font-semibold text-white tracking-tight mb-2">
                                <Counter end={59} />
                            </div>

                            {/* Subtitle */}
                            <h3 className="text-2xl font-medium text-white mb-8">
                                Faster Implementation
                            </h3>

                            {/* Description */}
                            <p className="text-green-50 text-sm/8 font-normal">
                                Teams get up and running 59% faster with GripCRM compared to legacy CRM tools.
                            </p>
                        </div>

                        {/* Card 3: Orange - Accurate Reporting */}
                        <div className="bg-orange-500 text-white rounded-2xl p-9 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col items-start">
                            <div className="size-21 bg-white rounded-lg p-3 flex items-center justify-center mb-8">
                                <Image src="/images/home/accurate-reporting.svg" alt="Accurate Reporting" width={64} height={64} />
                            </div>

                            {/* Stat Number */}
                            <div className="font-spaceGrotesk text-5xl lg:text-6xl font-semibold text-white tracking-tight mb-2">
                                <Counter end={99.9} />
                            </div>

                            {/* Subtitle */}
                            <h3 className="text-2xl font-medium text-white mb-8">
                                Accurate Reporting
                            </h3>

                            {/* Description */}
                            <p className="text-green-50 text-sm/8 font-normal">
                                GripCRM's automated data sync delivers 99.9% accurate reporting, eliminating manual entry errors.
                            </p>
                        </div>

                    </div>

                    {/* Column 3: Red Card - Increase in Sales Revenue */}
                    <div className="w-full">
                        <div className="bg-red-500 text-white rounded-2xl p-9 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col items-start">
                            <div className="size-21 bg-white rounded-lg p-3 flex items-center justify-center mb-8">
                                <Image src="/images/home/increase-revenue.svg" alt="Accurate Reporting" width={64} height={64} />
                            </div>

                            {/* Stat Number */}
                            <div className="font-spaceGrotesk text-5xl lg:text-6xl font-semibold text-white tracking-tight mb-2">
                                <Counter end={29} />
                            </div>

                            {/* Subtitle */}
                            <h3 className="text-2xl font-medium text-white mb-8">
                                Increase in Sales Revenue
                            </h3>

                            {/* Description */}
                            <p className="text-green-50 text-sm/8 font-normal">
                                Businesses using GripCRM see a 29% average increase in sales revenue year-over-year.
                            </p>
                        </div>
                    </div>

                </div>

                {/* Footer Disclaimer Text */}
                <p className="text-center text-sm text-neutral-500 font-medium mt-10">
                    Based on a 2026 survey of 100+ GripCRM customers* or a link to a case study.
                </p>

            </div>
        </section>
    );
}
