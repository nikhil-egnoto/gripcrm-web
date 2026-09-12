"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Navbar from "./Navbar";

export default function Header() {
    const [isVisible, setIsVisible] = useState(true);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        let lastScrollY = window.scrollY;

        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // Track if scrolled from very top
            if (currentScrollY > 10) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }

            // Hide header on scroll down, show on scroll up
            if (currentScrollY > lastScrollY && currentScrollY > 80) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }

            lastScrollY = currentScrollY;
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`sticky top-0 z-50 bg-white transition-transform duration-300 ease-in-out ${isVisible ? "translate-y-0" : "-translate-y-full"
                } ${isScrolled ? "shadow-md" : ""}`}
        >
            <div className="max-w-[1920px] w-full border-b border-neutral-300 mx-auto px-4 sm:px-8 lg:px-12 py-3.5 flex items-center justify-between lg:gap-15 gap-6">

                {/* --- LOGO --- */}
                <div className="flex items-center">
                    <a href="/" className="flex items-center gap-2">
                        {/* Desktop Logo (Full GRIPCRM) */}
                        <div className="hidden md:block">
                            <Image
                                src="/gripcrm-web.svg"
                                alt="GRIPCRM Logo"
                                width={165}
                                height={36}
                                priority
                                className="h-8 w-auto object-contain"
                            />
                        </div>

                        {/* Mobile Logo Icon (Matches Screenshot 2) */}
                        <div className="block md:hidden">
                            <svg
                                width="36"
                                height="36"
                                viewBox="0 0 52 50"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-9 w-auto"
                            >
                                <path
                                    d="M43.6417 50H7.93486C3.55085 50 0 46.5577 0 42.3077V7.69231C0 3.44231 3.55085 0 7.93486 0H43.6417C48.0257 0 51.5766 3.44231 51.5766 7.69231V42.3077C51.5766 46.5577 48.0257 50 43.6417 50Z"
                                    fill="black"
                                />
                                <path
                                    d="M45.1176 17.1114V5.76904H6.45898V44.2306H25.9232L40.0314 30.5383V44.2306H45.1176V22.0421H40.0314H23.2452V26.9729H36.5559L23.8403 39.2998H11.5452V10.6998H40.0314V17.1114H45.1176Z"
                                    fill="white"
                                />
                            </svg>
                        </div>
                    </a>
                </div>

                <Navbar />
            </div>
        </header>
    );
}