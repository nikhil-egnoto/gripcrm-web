"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";
import { CircleCheck } from "lucide-react";

export default function Plans() {
    // Initial state matching the design mockup: Grip Estimator is selected by default
    const [selectedProducts, setSelectedProducts] = useState(["estimator"]);
    const [billingYearly, setBillingYearly] = useState({
        crm: false,
        estimator: false,
        ninja: false,
    });

    const products = [
        {
            id: "crm",
            name: "GripCRM",
            description: "Manage customers, deals, and everyday workflows in one place.",
            monthlyPrice: 499,
            yearlyPrice: 399,
        },
        {
            id: "estimator",
            name: "Grip Estimator",
            description: "Design buildings in 3D and turn the design into an estimate.",
            monthlyPrice: 699,
            yearlyPrice: 559,
        },
        {
            id: "ninja",
            name: "Ninja AI",
            description: "A chat plugin that answers customer questions with AI.",
            monthlyPrice: 49,
            yearlyPrice: 39,
        },
    ];

    const toggleSelect = (id) => {
        setSelectedProducts((prev) =>
            prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
        );
    };

    const toggleBilling = (id) => {
        setBillingYearly((prev) => ({
            ...prev,
            [id]: !prev[id],
        }));
    };

    // Determine banner label based on selection
    const getBannerLabel = () => {
        if (selectedProducts.length === 0) return "Select a product";
        const selectedNames = products
            .filter((p) => selectedProducts.includes(p.id))
            .map((p) => p.name);
        return selectedNames.join(" + ");
    };

    return (
        <section className="bg-white py-16 md:py-20 px-4 select-none">
            <div className="lg:container mx-auto">
                {/* 3 Product Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
                    {products.map((product) => {
                        const isSelected = selectedProducts.includes(product.id);
                        const isYearly = billingYearly[product.id];
                        const currentPrice = isYearly ? product.yearlyPrice : product.monthlyPrice;

                        return (
                            <div
                                key={product.id}
                                className={`rounded-xl transition-all duration-200 flex flex-col justify-between overflow-hidden ${isSelected
                                    ? "bg-madison-50 border border-madison-950/10 shadow-sm"
                                    : "bg-white border border-madison-950/10 shadow-xs hover:bg-madison-50 hover:border-madison-950/10"
                                    }`}
                            >
                                {/* Top Header Section */}
                                <div className="p-6 sm:p-7">
                                    <h3 className="text-xl font-medium text-madison-950 tracking-tight">
                                        {product.name}
                                    </h3>
                                    <p className="mt-2 text-sm text-madison-950/60 font-normal leading-relaxed min-h-11">
                                        {product.description}
                                    </p>
                                </div>

                                {/* Full-width Divider Line */}
                                <div
                                    className={`w-full border-t ${isSelected ? "border-madison-950/10" : "border-madison-950/10"
                                        }`}
                                />

                                {/* Bottom Pricing & Action Section */}
                                <div className="p-6 sm:p-7 flex flex-col justify-between flex-1">
                                    <div>
                                        {/* Price */}
                                        <div className="flex items-baseline">
                                            <span className="text-3xl font-medium text-madison-950 leading-none tracking-tight">
                                                ${currentPrice}
                                            </span>
                                            <span className="text-sm font-normal text-emerald-950/60 ml-1">
                                                /month
                                            </span>
                                        </div>

                                        {/* Billed yearly toggle */}
                                        <div className="mt-4 flex items-center gap-2.5">
                                            <button
                                                type="button"
                                                role="switch"
                                                aria-checked={isYearly}
                                                onClick={() => toggleBilling(product.id)}
                                                className={`relative inline-flex h-5 w-9 shrink-0 cursor-pointer rounded-full p-0.5 transition-colors duration-200 ease-in-out focus:outline-none ${isYearly ? "bg-blue-600" : "bg-slate-300"
                                                    }`}
                                            >
                                                <span
                                                    className={`pointer-events-none inline-block size-4 transform rounded-full bg-white shadow-xs transition duration-200 ease-in-out ${isYearly ? "translate-x-4" : "translate-x-0"
                                                        }`}
                                                />
                                            </button>
                                            <span
                                                onClick={() => toggleBilling(product.id)}
                                                className="text-xs sm:text-sm text-slate-600 font-normal cursor-pointer select-none"
                                            >
                                                Billed yearly
                                            </span>
                                        </div>
                                    </div>

                                    {/* Action Button & Selected Checkmark */}
                                    <div className="mt-6 flex items-center justify-between">
                                        <Button
                                            onClick={() => toggleSelect(product.id)}
                                            className={`inline-flex split-btn h-9 ${isSelected
                                                ? "bg-madison-700 border-madison-700! text-white"
                                                : "bg-white border border-madison-950/20! hover:shadow-[0px_0px_0px_2px_#80b9ff,0px_0.48175px_0.86715px_-1.41667px_rgba(0,0,0,0.16),0px_1.83083px_3.29549px_-2.83333px_rgba(0,0,0,0.14),0px_8px_14.4px_-4.25px_rgba(0,0,0,0.03)] hover:bg-madison-700 hover:text-light"
                                                }`}
                                        >
                                            <span className="wave-text-inner flex">
                                                {isSelected ? "Selected" : "Select product".split("").map((char, index) => (
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

                                        {/* Checkmark icon shown on the right when selected */}
                                        {isSelected && (
                                            <div className="size-6 rounded-full bg-madison-100 flex items-center justify-center text-madison-500 shrink-0">
                                                <CircleCheck />
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Bottom Quote & Bundle Banner */}
                <div className="mt-6 sm:mt-8 bg-madison-950 rounded-xl p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 shadow-lg">
                    {/* Left: Product Label + Starting Price + Bundle Badge */}
                    <div className="flex flex-col">
                        <span className="text-sm font-normal text-madison-50/60 tracking-wide">
                            {getBannerLabel()}
                        </span>
                        <div className="flex items-center gap-3 flex-wrap mt-1">
                            <h3 className="text-2xl sm:text-3xl font-medium text-light tracking-tight">
                                Starting at $XX/month
                            </h3>
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-normal border border-blue-400/30 bg-madison-950 text-madison-50/60">
                                Bundle &amp; save
                            </span>
                        </div>
                    </div>

                    {/* Right: Get a quote Button */}

                    <Button
                        href="/contact"
                        className="inline-flex bg-light text-dark border-0 split-btn hover:shadow-[0px_0px_0px_2px_#9f9f9f,0px_0.48175px_0.86715px_-1.41667px_rgba(0,0,0,0.16),0px_1.83083px_3.29549px_-2.83333px_rgba(0,0,0,0.14),0px_8px_14.4px_-4.25px_rgba(0,0,0,0.03)]"
                    >
                        <span className="wave-text-inner flex">
                            {"Get a quote".split("").map((char, index) => (
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


                    {/* <Link
                        href="/contact"
                        className="px-6 py-2.5 bg-white hover:bg-slate-100 text-[#0c2340] text-sm sm:text-base font-semibold rounded-lg transition-all duration-150 shadow-sm whitespace-nowrap cursor-pointer text-center"
                    >
                        Get a quote
                    </Link> */}
                </div>
            </div>
        </section>
    );
}
