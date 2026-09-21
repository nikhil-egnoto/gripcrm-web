"use client";

import Counter from "@/components/ui/Counter";
import Image from "next/image";

export default function WhyGripCrm({ fields }) {
    const title = fields?.why_title || "Why GripCRM?";
    const desc = fields?.why_desc || "Everything your team needs to manage customers, streamline work, and build better business relationships.";
    const statsList = Array.isArray(fields?.why_stats) && fields.why_stats.length > 0 ? fields.why_stats : [
        { value: "32", label: "Increased Productivity", subtext: "Companies using GripCRM report a 32% boost in team productivity within the first 90 days." },
        { value: "59", label: "Faster Implementation", subtext: "Teams get up and running 59% faster with GripCRM compared to legacy CRM tools." },
        { value: "99.9", label: "Accurate Reporting", subtext: "GripCRM's automated data sync delivers 99.9% accurate reporting, eliminating manual entry errors." },
        { value: "29", label: "Increase in Sales Revenue", subtext: "Businesses using GripCRM see a 29% average increase in sales revenue year-over-year." },
    ];

    return (
        <section className="py-16 md:py-24 bg-white px-4 sm:px-6 lg:px-8 border-t border-neutral-300">
            <div className="container mx-auto">

                {/* Header Section */}
                <div className="text-center mb-12 sm:mb-16">
                    <h2 className="font-spaceGrotesk text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-900 tracking-tight leading-tight">
                        {title}
                        <svg className="mt-3 mx-auto text-violet-500" width="110" height="10" viewBox="0 0 110 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M55.4214 3.042C56.6044 2.94 79.4965 0.883309 91.9777 0.247303C97.256 -0.0306999 102.543 -0.0107027 107.775 0.0119642C108.546 0.0399645 109.831 0.643972 109.957 1.17664C110.146 2.00532 109.687 3.22 109.099 3.842C107.496 5.52202 105.364 6.02869 103.164 6.12003C95.0808 6.51403 86.9996 6.96804 78.9141 7.30271C58.3441 8.15405 37.7152 8.88805 17.1435 9.67939C13.1835 9.8434 9.16523 9.89006 5.20303 9.99406C3.22303 10.0761 1.54828 9.30873 0.399327 7.68204C-0.0599231 7.04337 -0.0967732 5.79002 0.155127 5.00201C0.359177 4.45534 1.39208 3.99467 2.05208 3.96734C19.5421 3.244 53.2131 1.89332 54.0695 1.81065C55.3169 1.69065 54.2378 3.14266 55.4208 3.04133L55.4214 3.042Z" fill="currentColor"></path></svg>
                    </h2>
                    <p className="text-neutral-700 text-sm sm:text-base mt-10">
                        {desc}
                    </p>
                </div>

                {console.log(statsList)}

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-center">

                    {/* Column 1 */}
                    {statsList[0] && (
                        <div className="w-full">
                            <div
                                className={`${statsList[0]?.bgColor || "bg-green-500"} text-white rounded-2xl p-9 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col items-start`}
                            >
                                <div className="size-21 bg-white rounded-lg p-3 flex items-center justify-center mb-8">
                                    <Image
                                        src={statsList[0]?.image || "/images/home/increased-productivity.svg"}
                                        alt={statsList[0]?.label || ""}
                                        width={64}
                                        height={64}
                                    />
                                </div>

                                <div className="font-spaceGrotesk text-5xl lg:text-6xl font-semibold text-white tracking-tight mb-2">
                                    <Counter end={statsList[0]?.value || 0} />
                                </div>

                                <h3 className="text-2xl font-medium text-white mb-8">
                                    {statsList[0]?.label}
                                </h3>

                                <p className="text-green-50 text-sm/8 font-normal">
                                    {statsList[0]?.subtext}
                                </p>
                            </div>
                        </div>
                    )}

                    {/* Column 2 - Array [1] and [2] */}
                    <div className="w-full flex flex-col gap-6 lg:gap-8">
                        {[statsList[1], statsList[2]].map((item, index) => (
                            item && (
                                <div
                                    key={index}
                                    className={`${item?.bgColor || "bg-green-500"} text-white rounded-2xl p-9 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col items-start`}
                                >
                                    <div className="size-21 bg-white rounded-lg p-3 flex items-center justify-center mb-8">
                                        <Image
                                            src={item?.image || "/images/home/increased-productivity.svg"}
                                            alt={item?.label || ""}
                                            width={64}
                                            height={64}
                                        />
                                    </div>

                                    <div className="font-spaceGrotesk text-5xl lg:text-6xl font-semibold text-white tracking-tight mb-2">
                                        <Counter end={item?.value || 0} />
                                    </div>

                                    <h3 className="text-2xl font-medium text-white mb-8">
                                        {item?.label}
                                    </h3>

                                    <p className="text-green-50 text-sm/8 font-normal">
                                        {item?.subtext}
                                    </p>
                                </div>
                            )
                        ))}
                    </div>

                    {/* Column 3 */}
                    {statsList[3] && (
                        <div className="w-full">
                            <div
                                className={`${statsList[3]?.bgColor || "bg-green-500"} text-white rounded-2xl p-9 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col items-start`}
                            >
                                <div className="size-21 bg-white rounded-lg p-3 flex items-center justify-center mb-8">
                                    <Image
                                        src={statsList[3]?.image || "/images/home/increased-productivity.svg"}
                                        alt={statsList[3]?.label || ""}
                                        width={64}
                                        height={64}
                                    />
                                </div>

                                <div className="font-spaceGrotesk text-5xl lg:text-6xl font-semibold text-white tracking-tight mb-2">
                                    <Counter end={statsList[3]?.value || 0} />
                                </div>

                                <h3 className="text-2xl font-medium text-white mb-8">
                                    {statsList[3]?.label}
                                </h3>

                                <p className="text-green-50 text-sm/8 font-normal">
                                    {statsList[3]?.subtext}
                                </p>
                            </div>
                        </div>
                    )}

                </div>

                {/* Footer Disclaimer Text */}
                <p className="text-center text-sm text-neutral-500 font-medium mt-10">
                    Based on a 2026 survey of 100+ GripCRM customers* or a link to a case study.
                </p>

            </div>
        </section>
    );
}
