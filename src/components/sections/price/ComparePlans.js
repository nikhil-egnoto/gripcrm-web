"use client";

import { Fragment } from "react";
import Button from "@/components/ui/Button";
import SplitText from "@/components/providers/SplitText";

export default function ComparePlans() {
    const products = [
        {
            id: "crm",
            name: "GripCRM",
            price: "$499",
            period: "/month",
            buttonText: "Select product",
            href: "/contact?product=crm",
        },
        {
            id: "estimator",
            name: "Grip Estimator",
            price: "$699",
            period: "/month",
            buttonText: "Select product",
            href: "/contact?product=estimator",
        },
        {
            id: "ninja",
            name: "Ninja AI",
            price: "$49",
            period: "/month",
            buttonText: "Select product",
            href: "/contact?product=ninja",
        },
    ];

    const categories = [
        {
            title: "Core",
            rows: [
                {
                    crm: {
                        text: "Multiple sales pipelines",
                        tooltip: "Track every deal through your own stages.",
                    },
                    estimator: {
                        text: "3D building design",
                    },
                    ninja: {
                        text: "Chat plugin for your website",
                    },
                },
                {
                    crm: {
                        text: "Lead and deal tracking",
                    },
                    estimator: {
                        text: "Estimates from your design",
                    },
                    ninja: {
                        text: "AI answers to customer questions",
                    },
                },
                {
                    crm: {
                        text: "Account and deal management",
                    },
                    estimator: {
                        text: "Material list",
                    },
                    ninja: {
                        text: "Conversation history",
                    },
                },
                {
                    crm: {
                        text: "Activity logging",
                    },
                    estimator: {
                        text: "Cost breakdown",
                    },
                    ninja: {
                        text: "Custom chat appearance",
                    },
                },
            ],
        },
        {
            title: "Features",
            rows: [
                {
                    crm: {
                        text: "AI email generator",
                    },
                    estimator: {
                        text: "Edit and revise estimates",
                    },
                    ninja: {
                        text: "Hand off to your team",
                    },
                },
                {
                    crm: {
                        text: "Email templates",
                        tooltip: "Multiple team members can edit dashboards simultaneously",
                    },
                    estimator: {
                        text: "Shareable estimate links",
                    },
                    ninja: {
                        text: "Works with GripCRM",
                    },
                },
                {
                    crm: {
                        text: "Sales forecasting",
                    },
                    estimator: {
                        text: "Feature placeholder",
                    },
                    ninja: {
                        text: "Feature placeholder",
                    },
                },
                {
                    crm: {
                        text: "HTML editor for mass emails",
                    },
                    estimator: {
                        text: "Export to PDF",
                    },
                    ninja: {
                        text: "Chat analytics",
                    },
                },
            ],
        },
        {
            title: "Team",
            rows: [
                {
                    crm: {
                        text: "Team members: up to XX",
                    },
                    estimator: {
                        text: "Team members: up to XX",
                    },
                    ninja: {
                        text: "Team members: up to XX",
                    },
                },
                {
                    crm: {
                        text: "Role-based access controls",
                        tooltip: "Control who can view, edit, or share specific dashboards",
                    },
                    estimator: {
                        text: "Role-based access controls",
                    },
                    ninja: {
                        text: "Role-based access controls",
                    },
                },
                {
                    crm: {
                        text: "Team collaboration",
                    },
                    estimator: {
                        text: "Shared project access",
                    },
                    ninja: {
                        text: "Shared chat inbox",
                    },
                },
            ],
        },
    ];

    return (
        <section className="bg-white px-4 select-none">
            <div className="lg:container mx-auto">
                {/* Section Title */}
                <SplitText
                    text="What each product does"
                    className="text-xl font-medium text-madison-950 tracking-tight blur-rise mb-6"
                    effect="rise"
                    splitType="Chars"
                    delay={50}
                    duration={1.25}
                    staggerFrom="start"
                    trigger="view"
                    hoverEffect="none"
                    loop={false}
                    loopDelay={0.5}
                    mask={false}
                    threshold={0.1}
                    rootMargin="0"
                    textAlign="left"
                />

                {/* Compare Table */}
                <div className="w-full overflow-x-auto md:overflow-visible">
                    <table className="w-full text-left border-separate border-spacing-0">
                        {/* Sticky Table Head */}
                        <thead className="sticky top-0 z-30 shadow-xs">
                            <tr>
                                {products.map((product, idx) => (
                                    <th
                                        key={product.id}
                                        className={`sticky top-0 z-30 bg-madison-50 p-4 text-left align-top border-t border-b border-madison-950/10 ${idx < products.length - 1 ? "border-r border-madison-950/10" : ""
                                            }`}
                                        style={{ width: "33.333%" }}
                                    >
                                        <div className="flex flex-col items-start">
                                            <h3 className="text-base sm:text-lg font-medium text-madison-950 tracking-tight">
                                                {product.name}
                                            </h3>
                                            <div className="mt-1 flex items-baseline gap-1">
                                                <span className="text-sm sm:text-base font-medium text-madison-950">
                                                    {product.price}
                                                </span>
                                                <span className="text-xs sm:text-sm font-normal text-madison-950/60">
                                                    {product.period}
                                                </span>
                                            </div>
                                            <Button
                                                href={product.href}
                                                className={`mt-4 sm:mt-5 inline-flex split-btn h-9 bg-white border border-madison-950/20! hover:shadow-[0px_0px_0px_2px_#e1e1e1,0px_0.48175px_0.86715px_-1.41667px_rgba(0,0,0,0.16),0px_1.83083px_3.29549px_-2.83333px_rgba(0,0,0,0.14),0px_8px_14.4px_-4.25px_rgba(0,0,0,0.03)] hover:bg-white`}
                                            >
                                                <span className="wave-text-inner flex">
                                                    {product.buttonText.split("").map((char, index) => (
                                                        <span
                                                            className="wave-char"
                                                            key={index}
                                                            style={{ "--i": index }}
                                                        >
                                                            <span>{char === " " ? "\u00A0" : char}</span>
                                                            <span>{char === " " ? "\u00A0" : char}</span>
                                                        </span>
                                                    ))}
                                                </span>
                                            </Button>
                                        </div>
                                    </th>
                                ))}
                            </tr>
                        </thead>

                        {/* Table Body */}
                        <tbody>
                            {categories.map((cat, catIdx) => (
                                <Fragment key={catIdx}>
                                    {/* Category Section Header */}
                                    <tr className="bg-white">
                                        <td
                                            colSpan={3}
                                            className="px-4 py-5 border-b border-madison-950/10 align-middle"
                                        >
                                            <h3 className="text-lg sm:text-xl font-medium text-madison-950 tracking-tight">
                                                {cat.title}
                                            </h3>
                                        </td>
                                    </tr>

                                    {/* Category Rows */}
                                    {cat.rows.map((row, rowIdx) => (
                                        <tr
                                            key={rowIdx}
                                            className="bg-white transition-colors"
                                        >
                                            {/* Col 1: GripCRM */}
                                            <td className="p-4 text-sm font-medium text-madison-950 border-b border-r border-madison-950/10 align-middle">
                                                {row.crm.tooltip ? (
                                                    <div className="relative inline-flex items-center group/tooltip">
                                                        <span
                                                            tabIndex={0}
                                                            className="border-b border-dotted border-madison-950 cursor-pointer focus:outline-none"
                                                        >
                                                            {row.crm.text}
                                                        </span>

                                                        {/* Tooltip Content */}
                                                        <div
                                                            className="absolute left-0 sm:left-1/2 sm:-translate-x-1/2 bottom-full mb-2 opacity-0 translate-y-2 scale-95 group-hover/tooltip:opacity-100 group-hover/tooltip:translate-y-0 group-hover/tooltip:scale-100 group-focus-within/tooltip:opacity-100 group-focus-within/tooltip:translate-y-0 group-focus-within/tooltip:scale-100 transition-all duration-300 ease-out pointer-events-none group-hover/tooltip:pointer-events-auto group-focus-within/tooltip:pointer-events-auto z-50 w-52 sm:w-60 flex flex-col items-start sm:items-center origin-bottom"
                                                        >
                                                            <div className="bg-[#333333] text-white text-xs font-normal py-2 px-3.5 rounded-lg shadow-xl text-center leading-relaxed">
                                                                {row.crm.tooltip}
                                                            </div>

                                                            <div className="w-2.5 h-2.5 bg-[#333333] rotate-45 -mt-2 ml-6 sm:ml-0" />
                                                        </div>
                                                    </div>
                                                ) : (
                                                    <span>{row.crm.text}</span>
                                                )}
                                            </td>

                                            {/* Col 2: Grip Estimator */}
                                            <td className="p-4 text-sm font-medium text-madison-950 border-b border-r border-madison-950/10 align-middle">
                                                <span>{row.estimator.text}</span>
                                            </td>

                                            {/* Col 3: Ninja AI */}
                                            <td className="p-4 text-sm font-medium text-madison-950 border-b border-r border-madison-950/10 align-middle">
                                                <span>{row.ninja.text}</span>
                                            </td>
                                        </tr>
                                    ))}
                                </Fragment>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
}
