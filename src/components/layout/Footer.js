"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { toast } from "react-hot-toast";
import { fetchGlobalOptions } from "@/lib/api";
import Image from "next/image";
import GooglePartner from "../../../public/images/footer/google-partner.png";
import MetaBusinessPartner from "../../../public/images/footer/meta-partner.png";
import KeapCertified from "../../../public/images/footer/keap-certified.png";
import { motion } from "framer-motion";
import { fadeInUp } from "../providers/motionAnimation";

export default function Footer() {
    const [options, setOptions] = useState(null);
    const [email, setEmail] = useState("");
    const [isSubscribed, setIsSubscribed] = useState(false);

    useEffect(() => {
        const getGlobalOptions = async () => {
            try {
                const data = await fetchGlobalOptions();
                setOptions(data);
            } catch (error) {
                console.error("Error fetching global options in Footer:", error);
            }
        };

        getGlobalOptions();
    }, []);

    const opt = options?.options || options;

    const socialFacebook = opt?.social_facebook || "#";
    const socialInstagram = opt?.social_instagram || "#";
    const socialX = opt?.social_x || opt?.social_twitter || "#";
    const socialYoutube = opt?.social_youtube || "#";

    const handleSubscribe = (e) => {
        e.preventDefault();
        if (!email || !email.includes("@")) {
            toast.error("Please enter a valid email address");
            return;
        }
        setIsSubscribed(true);
        toast.success("Thank you for subscribing to our newsletter!");
        setEmail("");
    };

    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full bg-madison-950 py-8 sm:py-12 md:py-14 px-4 select-none">
            <div className="lg:container mx-auto bg-madison-50/5 rounded-3xl p-6 sm:p-10 lg:p-14 text-white">
                {/* Top Section: 4 Columns */}
                <motion.div {...fadeInUp} transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-8 pb-10 sm:pb-12">
                    {/* Col 1: Stay Connected & Newsletter */}
                    <div className="lg:col-span-5 xl:col-span-4 flex flex-col justify-start">
                        <h3 className="text-white font-medium text-base mb-3">
                            Stay connected
                        </h3>
                        <p className="text-light/60 text-base mb-5 max-w-sm">
                            Join our newsletter for tips, updates, and project highlights only the good stuff.
                        </p>

                        {/* Newsletter Input & Subscribe */}
                        <form onSubmit={handleSubscribe} className="flex items-center gap-2 max-w-sm mb-8">
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your email"
                                required
                                className="w-full h-9 sm:h-10 px-3.5 rounded-lg bg-white text-neutral-800 placeholder:text-neutral-400 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-400/50 transition-all shadow-xs"
                            />
                            <button
                                type="submit"
                                className="h-9 sm:h-10 px-4 rounded-lg bg-madison-50 text-madison-950 hover:ring-2 hover:ring-blue-400/50 font-medium text-xs sm:text-[13px] transition-colors cursor-pointer shrink-0 shadow-xs"
                            >
                                {isSubscribed ? "Subscribed" : "Subscribe"}
                            </button>
                        </form>

                        {/* Social Follow */}
                        <div className="flex items-center gap-2.5">
                            <span className="text-sm sm:text-base text-white/80 font-normal">
                                Follow us on:
                            </span>
                            <div className="flex items-center gap-2">
                                {/* Facebook */}
                                <a
                                    href={socialFacebook}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Facebook"
                                    className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-white flex items-center justify-center text-madison-900 hover:opacity-95 hover:scale-105 transition-all shadow-xs"
                                >
                                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                    </svg>
                                </a>

                                {/* YouTube */}
                                <a
                                    href={socialYoutube}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="YouTube"
                                    className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-white flex items-center justify-center text-madison-900 hover:opacity-95 hover:scale-105 transition-all shadow-xs"
                                >
                                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                                    </svg>
                                </a>

                                {/* Instagram */}
                                <a
                                    href={socialInstagram}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Instagram"
                                    className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-white flex items-center justify-center text-madison-900 hover:opacity-95 hover:scale-105 transition-all shadow-xs"
                                >
                                    <svg className="w-5 h-5 fill-none stroke-current stroke-2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                                    </svg>
                                </a>

                                {/* Twitter */}
                                <a
                                    href={socialX}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Twitter"
                                    className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-white flex items-center justify-center text-madison-900 hover:opacity-95 hover:scale-105 transition-all shadow-xs"
                                >
                                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.936 9.936 0 0024 4.59z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Col 2: Products */}
                    <div className="lg:col-span-2 xl:col-span-2.5">
                        <h4 className="text-madison-50 font-medium text-base mb-3 sm:mb-4">
                            Products
                        </h4>
                        <ul className="space-y-2 sm:space-y-2.5 text-sm sm:text-base text-madison-50/60 font-medium">
                            <li>
                                <Link href="/#products" className="hover:text-madison-50 transition-colors">
                                    Grip CRM
                                </Link>
                            </li>
                            <li>
                                <Link href="/#estimator" className="hover:text-madison-50 transition-colors">
                                    Grip Estimator
                                </Link>
                            </li>
                            <li>
                                <Link href="/#ninja-ai" className="hover:text-madison-50 transition-colors">
                                    Ninja Ai
                                </Link>
                            </li>
                            <li>
                                <Link href="/pricing" className="hover:text-madison-50 transition-colors">
                                    Pricing
                                </Link>
                            </li>
                            <li>
                                <Link href="/faqs" className="hover:text-madison-50 transition-colors">
                                    FAQs
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Col 3: Services */}
                    <div className="lg:col-span-3 xl:col-span-3">
                        <h4 className="text-madison-50 font-medium text-base mb-3 sm:mb-4">
                            Services
                        </h4>
                        <ul className="space-y-2 sm:space-y-2.5 text-sm sm:text-base text-madison-50/60 font-medium">
                            <li>
                                <Link href="/services/website-development" className="hover:text-madison-50 transition-colors">
                                    Website Development
                                </Link>
                            </li>
                            <li>
                                <Link href="/services/digital-solutions-manufacturing" className="hover:text-madison-50 transition-colors">
                                    Digital Solutions for Manufacturing
                                </Link>
                            </li>
                            <li>
                                <Link href="/services/digital-solutions-dealers" className="hover:text-madison-50 transition-colors">
                                    Digital Solutions for Dealers
                                </Link>
                            </li>
                            <li>
                                <Link href="/services/contractors" className="hover:text-madison-50 transition-colors">
                                    Contractors
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Col 4: Company */}
                    <div className="lg:col-span-2 xl:col-span-2.5">
                        <h4 className="text-madison-50 font-medium text-base mb-3 sm:mb-4">
                            Company
                        </h4>
                        <ul className="space-y-2 sm:space-y-2.5 text-sm sm:text-base text-madison-50/60 font-medium">
                            <li>
                                <Link href="/" className="hover:text-madison-50 transition-colors">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/about" className="hover:text-madison-50 transition-colors">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="hover:text-madison-50 transition-colors">
                                    Contact Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/blog" className="hover:text-madison-50 transition-colors">
                                    Blog
                                </Link>
                            </li>
                            <li>
                                <Link href="/privacy" className="hover:text-madison-50 transition-colors">
                                    Privacy policy
                                </Link>
                            </li>
                            <li>
                                <Link href="/terms" className="hover:text-madison-50 transition-colors">
                                    Terms &amp; conditions
                                </Link>
                            </li>
                        </ul>
                    </div>
                </motion.div>

                {/* Middle Row: Copyright & Legal Links */}
                <motion.div {...fadeInUp} transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }} className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pt-6 pb-6 text-sm sm:text-base text-madison-50/60">
                    <p>© {currentYear} All Rights Reserved</p>
                    <div className="flex items-center gap-3">
                        <Link href="/terms" className="hover:text-white transition-colors">
                            Terms
                        </Link>
                        <span className="text-white/40">|</span>
                        <Link href="/privacy" className="hover:text-white transition-colors">
                            Policy
                        </Link>
                        <span className="text-white/40">|</span>
                        <Link href="/payment" className="hover:text-white transition-colors">
                            Payment
                        </Link>
                    </div>
                </motion.div>

                {/* Bottom Section: Badges & Description */}
                <motion.div {...fadeInUp} transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }} className="pt-2 flex flex-col items-start gap-4 sm:gap-5">
                    {/* Partner Badges */}
                    <div className="flex items-center flex-wrap gap-2.5 sm:gap-3.5">
                        {/* Google Partner */}
                        <div className="size-18 bg-white rounded-lg p-1 flex flex-col items-center justify-center shadow-xs select-none">
                            <Image src={GooglePartner} alt="Google Partner" className="object-contain" />
                        </div>

                        {/* Meta Business Partner */}
                        <div className="w-28 rounded-lg select-none">
                            <Image src={MetaBusinessPartner} alt="Google Partner" className="object-contain" />
                        </div>

                        {/* Keap Certified */}
                        <div className="w-28 rounded-lg select-none">
                            <Image src={KeapCertified} alt="Google Partner" className="object-contain" />
                        </div>
                    </div>

                    {/* Description Paragraph */}
                    <p className="text-sm sm:text-base text-madison-50/60 max-w-6xl font-normal">
                        GripTech builds software and digital solutions for the metal building industry. GripCRM, Grip Estimator, and Ninja AI help dealers, manufacturers, and contractors track leads, quote in 3D, and run a smoother business. Get in touch and talk to a team that understands your side of the industry.
                    </p>
                </motion.div>
            </div>
        </footer>
    );
}

