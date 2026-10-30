"use client";

import { useState, useRef } from "react";
import confetti from "canvas-confetti";

export default function NewsLetter() {
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState("idle"); // idle | loading | success
    const containerRef = useRef(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!email || !email.includes("@")) {
            return;
        }

        // Calculate origin dynamically from the newsletter form container position on screen
        let originX = 0.8;
        let originY = 0.6;
        if (containerRef.current) {
            const rect = containerRef.current.getBoundingClientRect();
            originX = Math.max(0.1, Math.min(0.9, (rect.left + rect.width / 2) / window.innerWidth));
            originY = Math.max(0.1, Math.min(0.9, (rect.top + rect.height / 2) / window.innerHeight));
        }

        setStatus("loading");

        setTimeout(() => {
            setStatus("success");
            setEmail("");

            confetti({
                particleCount: 160,
                spread: 100,
                origin: { x: originX, y: originY },
                zIndex: 9999,
                colors: ["#0e285d", "#1e3a8a", "#2563eb", "#60a5fa", "#38bdf8"],
            });
        }, 400);
    };

    return (
        <section className="bg-white py-10 sm:py-12 lg:py-14 select-none px-4 sm:px-6 lg:px-8">

            <div className="lg:container mx-auto">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 sm:gap-8">
                    {/* Left Statement */}
                    <p className="text-base text-madison-950 font-medium leading-relaxed">
                        Subscribe for tips and updates and company news straight to your inbox.
                    </p>

                    {/* Right Container: Form or Success Message */}
                    <div ref={containerRef} className="max-w-85 w-full">
                        {status === "success" ? (
                            <div className="flex items-center justify-center w-full h-11 rounded-lg bg-madison-50 text-madison-500 text-sm font-normal transition-all duration-300">
                                Thank you for subscribing!
                            </div>
                        ) : (
                            <form
                                onSubmit={handleSubmit}
                                className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3 w-full lg:w-auto"
                            >
                                <div className="relative">
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="Enter your email"
                                        required
                                        className="w-full h-11 px-4 text-sm text-madison-950 placeholder:text-madison-950/60 bg-white rounded-lg border border-madison-950/60 focus:outline-none focus:border-madison-950 focus:ring-2 focus:ring-madison-950/15 transition-all duration-200"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={status === "loading"}
                                    className="h-11 px-4 text-sm font-normal text-madison-950 bg-madison-50 hover:bg-madison-100 rounded-lg border border-madison-950/60 transition-all duration-200 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed shrink-0"
                                >
                                    {status === "loading" ? "Subscribing..." : "Subscribe"}
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}