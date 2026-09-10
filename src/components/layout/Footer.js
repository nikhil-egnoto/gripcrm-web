"use client";

import { Copyright, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    const resourceLinks = [
        { name: "About us", href: "#" },
        { name: "Knowledge Hubs/ Help Center", href: "#" },
        { name: "Blog", href: "#" },
        { name: "Faq's", href: "#" },
        { name: "What's New", href: "#" },
    ];

    const policyLinks = [
        { name: "Terms", href: "#" },
        { name: "Privacy", href: "#" },
        { name: "Refund & Cancellation", href: "#" },
        { name: "Sitemap", href: "#" },
    ];

    return (
        <footer className="w-full bg-white px-4">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12">
                    {/* Left Column: Logo & Nav Sections */}
                    <div className="lg:col-span-6 xl:col-span-7 flex flex-col py-10 pt-16 lg:py-24">
                        {/* Logo */}
                        <div className="mb-10">
                            <Link href="/" className="inline-block">
                                <Image
                                    src="/gripcrm-web.svg"
                                    alt="GRIPCRM Logo"
                                    width={222}
                                    height={50}
                                    className="h-auto w-auto object-contain"
                                />
                            </Link>
                        </div>

                        {/* Resources Section */}
                        <div>
                            <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-neutral-900 mb-6 tracking-tight">
                                Resources
                            </h3>
                            <div className="flex flex-wrap gap-4 sm:gap-8">
                                {resourceLinks.map((link) => (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        className="capitalize rounded-lg text-sm font-semibold text-neutral-500 hover:text-neutral-900 transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                ))}
                            </div>
                        </div>

                        <div className="border-t border-neutral-300 my-5 sm:my-8" />

                        {/* Pricing Section */}
                        <div className="py-2">
                            <Link href="#" className="inline-block">
                                <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-neutral-900 tracking-tight">
                                    Pricing
                                </h3>
                            </Link>
                        </div>

                        <div className="border-t border-neutral-300 my-5 sm:my-8" />

                        {/* Contact Section */}
                        <div className="py-2">
                            <Link href="#" className="inline-block">
                                <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-neutral-900 tracking-tight">
                                    Contact
                                </h3>
                            </Link>
                        </div>

                        <div className="border-t border-neutral-300 my-5 sm:my-8" />

                        {/* Policies Section */}
                        <div className="py-2">
                            <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-neutral-900 mb-6 tracking-tight">
                                Policies
                            </h3>
                            <div className="flex flex-wrap gap-4 sm:gap-8">
                                {policyLinks.map((link) => (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        className="capitalize rounded-lg text-sm font-semibold text-neutral-500 hover:text-neutral-900 transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Newsletter & Socials */}
                    <div className="lg:col-span-6 xl:col-span-5 lg:border-l lg:border-neutral-300 lg:pl-10 xl:pl-20 flex flex-col items-center justify-between md:pb-0 pb-15">
                        <div className="w-full flex flex-col items-start my-auto">
                            {/* Newsletter Header */}
                            <h3 className="text-2xl sm:text-3xl font-bold text-neutral-900 tracking-tight">
                                Sign Up for Our Newsletter
                            </h3>
                            <p className="text-neutral-500 text-sm sm:text-base mt-5 leading-8 font-normal">
                                Got a cool feature idea? Share it or upvote others to help shape the future of GripCRM!
                            </p>

                            {/* Email Form */}
                            <form
                                onSubmit={(e) => e.preventDefault()}
                                className="w-full max-w-md mt-6 sm:mt-8"
                            >
                                <div className="relative flex items-center border border-neutral-300 rounded-full p-2 pl-5 bg-white focus-within:border-neutral-900 transition-all">
                                    <input
                                        type="email"
                                        placeholder="Enter Email to Subscribe"
                                        className="w-full bg-transparent text-sm text-neutral-900 placeholder-neutral-500 outline-none py-3"
                                        required
                                    />
                                    <button
                                        type="submit"
                                        aria-label="Subscribe"
                                        className="size-9 sm:size-10 rounded-full bg-neutral-900 text-white flex items-center justify-center transition-colors shrink-0 cursor-pointer"
                                    >
                                        <ArrowRight />
                                    </button>
                                </div>
                            </form>

                            {/* Social Media Icons */}
                            <div className="flex items-center justify-center gap-3 mt-10 md:mt-12">
                                {/* Facebook */}
                                <a
                                    href="#"
                                    aria-label="Facebook"
                                    className="w-12 h-9 sm:w-14 sm:h-11 rounded-full bg-black/10 flex items-center justify-center text-gray-800 hover:bg-black hover:text-white transition-all duration-200"
                                >
                                    <svg className="size-5 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M576 320C576 178.6 461.4 64 320 64C178.6 64 64 178.6 64 320C64 440 146.7 540.8 258.2 568.5L258.2 398.2L205.4 398.2L205.4 320L258.2 320L258.2 286.3C258.2 199.2 297.6 158.8 383.2 158.8C399.4 158.8 427.4 162 438.9 165.2L438.9 236C432.9 235.4 422.4 235 409.3 235C367.3 235 351.1 250.9 351.1 292.2L351.1 320L434.7 320L420.3 398.2L351 398.2L351 574.1C477.8 558.8 576 450.9 576 320z" /></svg>
                                </a>

                                {/* Instagram */}
                                <a
                                    href="#"
                                    aria-label="Instagram"
                                    className="w-12 h-9 sm:w-14 sm:h-11 rounded-full bg-black/10 flex items-center justify-center text-gray-800 hover:bg-black hover:text-white transition-all duration-200"
                                >
                                    <svg className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M320.3 205C256.8 204.8 205.2 256.2 205 319.7C204.8 383.2 256.2 434.8 319.7 435C383.2 435.2 434.8 383.8 435 320.3C435.2 256.8 383.8 205.2 320.3 205zM319.7 245.4C360.9 245.2 394.4 278.5 394.6 319.7C394.8 360.9 361.5 394.4 320.3 394.6C279.1 394.8 245.6 361.5 245.4 320.3C245.2 279.1 278.5 245.6 319.7 245.4zM413.1 200.3C413.1 185.5 425.1 173.5 439.9 173.5C454.7 173.5 466.7 185.5 466.7 200.3C466.7 215.1 454.7 227.1 439.9 227.1C425.1 227.1 413.1 215.1 413.1 200.3zM542.8 227.5C541.1 191.6 532.9 159.8 506.6 133.6C480.4 107.4 448.6 99.2 412.7 97.4C375.7 95.3 264.8 95.3 227.8 97.4C192 99.1 160.2 107.3 133.9 133.5C107.6 159.7 99.5 191.5 97.7 227.4C95.6 264.4 95.6 375.3 97.7 412.3C99.4 448.2 107.6 480 133.9 506.2C160.2 532.4 191.9 540.6 227.8 542.4C264.8 544.5 375.7 544.5 412.7 542.4C448.6 540.7 480.4 532.5 506.6 506.2C532.8 480 541 448.2 542.8 412.3C544.9 375.3 544.9 264.5 542.8 227.5zM495 452C487.2 471.6 472.1 486.7 452.4 494.6C422.9 506.3 352.9 503.6 320.3 503.6C287.7 503.6 217.6 506.2 188.2 494.6C168.6 486.8 153.5 471.7 145.6 452C133.9 422.5 136.6 352.5 136.6 319.9C136.6 287.3 134 217.2 145.6 187.8C153.4 168.2 168.5 153.1 188.2 145.2C217.7 133.5 287.7 136.2 320.3 136.2C352.9 136.2 423 133.6 452.4 145.2C472 153 487.1 168.1 495 187.8C506.7 217.3 504 287.3 504 319.9C504 352.5 506.7 422.6 495 452z" /></svg>
                                </a>

                                {/* LinkedIn */}
                                <a
                                    href="#"
                                    aria-label="LinkedIn"
                                    className="w-12 h-9 sm:w-14 sm:h-11 rounded-full bg-black/10 flex items-center justify-center text-gray-800 hover:bg-black hover:text-white transition-all duration-200"
                                >
                                    <svg className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M196.3 512L103.4 512L103.4 212.9L196.3 212.9L196.3 512zM149.8 172.1C120.1 172.1 96 147.5 96 117.8C96 103.5 101.7 89.9 111.8 79.8C121.9 69.7 135.6 64 149.8 64C164 64 177.7 69.7 187.8 79.8C197.9 89.9 203.6 103.6 203.6 117.8C203.6 147.5 179.5 172.1 149.8 172.1zM543.9 512L451.2 512L451.2 366.4C451.2 331.7 450.5 287.2 402.9 287.2C354.6 287.2 347.2 324.9 347.2 363.9L347.2 512L254.4 512L254.4 212.9L343.5 212.9L343.5 253.7L344.8 253.7C357.2 230.2 387.5 205.4 432.7 205.4C526.7 205.4 544 267.3 544 347.7L544 512L543.9 512z" /></svg>
                                </a>

                                {/* X (Twitter) */}
                                <a
                                    href="#"
                                    aria-label="X (Twitter)"
                                    className="w-12 h-9 sm:w-14 sm:h-11 rounded-full bg-black/10 flex items-center justify-center text-gray-800 hover:bg-black hover:text-white transition-all duration-200"
                                >
                                    <svg className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M453.2 112L523.8 112L369.6 288.2L551 528L409 528L297.7 382.6L170.5 528L99.8 528L264.7 339.5L90.8 112L236.4 112L336.9 244.9L453.2 112zM428.4 485.8L467.5 485.8L215.1 152L173.1 152L428.4 485.8z" /></svg>
                                </a>

                                {/* YouTube */}
                                <a
                                    href="#"
                                    aria-label="YouTube"
                                    className="w-12 h-9 sm:w-14 sm:h-11 rounded-full bg-black/10 flex items-center justify-center text-gray-800 hover:bg-black hover:text-white transition-all duration-200"
                                >
                                    <svg className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M581.7 188.1C575.5 164.4 556.9 145.8 533.4 139.5C490.9 128 320.1 128 320.1 128C320.1 128 149.3 128 106.7 139.5C83.2 145.8 64.7 164.4 58.4 188.1C47 231 47 320.4 47 320.4C47 320.4 47 409.8 58.4 452.7C64.7 476.3 83.2 494.2 106.7 500.5C149.3 512 320.1 512 320.1 512C320.1 512 490.9 512 533.5 500.5C557 494.2 575.5 476.3 581.8 452.7C593.2 409.8 593.2 320.4 593.2 320.4C593.2 320.4 593.2 231 581.8 188.1zM264.2 401.6L264.2 239.2L406.9 320.4L264.2 401.6z" /></svg>
                                </a>
                            </div>
                            {/* Copyright */}
                            <div className="flex items-center gap-2 text-base text-black/75 font-normal mt-10 md:mt-12">
                                <Copyright className="size-4" /> {new Date().getFullYear()} GRIPCRM | All Right Reserved
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
