"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Button from "@/components/ui/Button";
import { FEATURED_POSTS, BLOG_POSTS } from "@/data/blogData";
import {
    ArrowRight,
    ChevronLeft,
    ChevronRight,
    Phone
} from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


export default function BlogPage() {

    const [currentPage, setCurrentPage] = useState(1);

    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="size-3.5! ' + className + '">' + '</span>';
        },
    };

    return (
        <main className="bg-blue-50 py-8 sm:py-16 md:py-24 px-4 relative overflow-hidden">
            <div className="container mx-auto space-y-8 sm:space-y-15">

                {/* Top Header Section */}
                <div className="text-center">
                    <h1 className="font-spaceGrotesk text-4xl lg:text-5xl leading-[1.2] font-bold text-neutral-900">
                        Blog
                        <svg width="110" height="10" viewBox="0 0 110 10" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-auto mt-4 text-violet-500"><path d="M55.4214 3.042C56.6044 2.94 79.4965 0.883309 91.9777 0.247303C97.256 -0.0306999 102.543 -0.0107027 107.775 0.0119642C108.546 0.0399645 109.831 0.643972 109.957 1.17664C110.146 2.00532 109.687 3.22 109.099 3.842C107.496 5.52202 105.364 6.02869 103.164 6.12003C95.0808 6.51403 86.9996 6.96804 78.9141 7.30271C58.3441 8.15405 37.7152 8.88805 17.1435 9.67939C13.1835 9.8434 9.16523 9.89006 5.20303 9.99406C3.22303 10.0761 1.54828 9.30873 0.399327 7.68204C-0.0599231 7.04337 -0.0967732 5.79002 0.155127 5.00201C0.359177 4.45534 1.39208 3.99467 2.05208 3.96734C19.5421 3.244 53.2131 1.89332 54.0695 1.81065C55.3169 1.69065 54.2378 3.14266 55.4208 3.04133L55.4214 3.042Z" fill="currentColor"></path></svg>
                    </h1>
                    <p className="max-w-3xl mt-6 sm:mt-10 m-auto text-neutral-700 text-sm sm:text-base leading-[1.9] font-normal">
                        Explore our blog section to gain valuable insights into customer relationship management, the latest CRM technology, project management strategies, industry trends, tips, and much more.
                    </p>
                </div>

                {/* Featured Post Hero Card */}
                <Swiper className="blog-swiper"
                    modules={[Navigation, Pagination, Autoplay]}
                    slidesPerView={1}
                    spaceBetween={20}
                    pagination={pagination}
                    autoplay={false}
                >

                    {FEATURED_POSTS.map((post) => {
                        return (

                            <SwiperSlide key={post.id}
                                className={`bg-white rounded-3xl p-5 sm:p-7 shadow-[0_4px_25px_rgba(0,0,0,0.03)] border border-gray-100`}>
                                {/* Card Header Row */}
                                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 items-center">

                                    {/* Left Column: 16:9 Image Placeholder / Featured Image */}
                                    <div className="md:col-span-6 w-full">
                                        <Link href={`/blog/${post.slug}`}>
                                            <Image src={"/images/blog/image-thumbnail@2x.png"} alt="Blog Thumbnail" className="aspect-video w-full object-cover" width={600} height={400} />
                                        </Link>
                                    </div>

                                    {/* Right Column: Featured Details */}
                                    <div className="md:col-span-6 flex flex-col justify-center h-full">
                                        <span className="text-sm text-neutral-700 font-medium mb-4">
                                            {post.date}
                                        </span>

                                        <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-neutral-900 mb-6 sm:mb-10 hover:text-neutral-700 transition-colors cursor-pointer">
                                            <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                                        </h2>

                                        <p className="text-neutral-700 text-sm sm:text-base leading-relaxed mb-6 sm:mb-10 line-clamp-3">
                                            {post.excerpt}
                                        </p>

                                        <div>
                                            <Button href={`/blog/${post.slug}`} className="bg-neutral-900 border-2 text-neutral-100 hover:text-neutral-900 hover:bg-neutral-100 inline-flex py-2!" type="with-icon">
                                                <span className="relative z-1">
                                                    Read Full Blog
                                                </span>
                                                <span className="w-5 h-5 rounded-full bg-white group-hover:bg-black text-black group-hover:text-white flex items-center justify-center text-xs shrink-0 group-hover:translate-x-0.5 transition-transform">
                                                    <ArrowRight className="size-4" />
                                                </span>
                                            </Button>
                                        </div>
                                    </div>

                                </div>
                            </SwiperSlide>
                        );
                    })}


                </Swiper>

                {/* Main Blog Grid */}
                <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {BLOG_POSTS.map((post) => {
                        if (post.isSpecialCta) {
                            return (
                                <div
                                    key={post.id}
                                    className="bg-violet-500 rounded-2xl p-6 sm:p-9 text-white flex flex-col justify-between relative overflow-hidden"
                                >
                                    {/* Background Diamond Pattern Overlay */}
                                    <div
                                        className="absolute inset-0 pointer-events-none"
                                        style={{
                                            backgroundImage: `url("/images/blog/cta-bg.png")`,
                                            backgroundSize: 'cover',
                                            backgroundPosition: 'center',
                                            backgroundRepeat: 'no-repeat',
                                        }} />

                                    <div className="relative z-10 text-center">
                                        <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white font-spaceGrotesk tracking-tight leading-10 sm:leading-14 w-full max-w-sm mx-auto mb-8">
                                            {post.title}
                                        </h3>

                                        {/* Action Buttons Row */}
                                        <div className="flex flex-wrap items-center justify-center gap-4">
                                            <Button className="bg-transparent border-2 border-neutral-50! text-neutral-50 hover:bg-neutral-50 hover:text-neutral-900" href={`tel:${post.phone}`}>
                                                <Phone className="size-4 group-hover:scale-110 transition-transform" />
                                                <span className="hidden sm:flex relative z-1">{post.phone}</span>
                                            </Button>

                                            <Button className="bg-neutral-50 border-2 border-neutral-50! text-neutral-900 hover:bg-transparent hover:text-neutral-50" href={post.pricingUrl || "/pricing"}>
                                                <span className="relative z-1">
                                                    View Pricing
                                                </span>
                                                <span className="w-5 h-5 rounded-full bg-neutral-900 group-hover:bg-neutral-50! group-hover:text-neutral-900 text-neutral-100 flex items-center justify-center text-xs shrink-0 group-hover:translate-x-0.5 transition-transform">
                                                    <ArrowRight className="size-4" />
                                                </span>
                                            </Button>
                                        </div>
                                    </div>

                                    {/* Support Representative Graphic */}
                                    <div className="relative z-10 flex justify-center items-end mt-2 -mb-7">
                                        <Image
                                            src={post.image}
                                            alt="Customer Support Representative"
                                            width={379}
                                            height={450}
                                            className="relative -bottom-3"
                                        />
                                    </div>
                                </div>
                            );
                        }

                        return (
                            <div
                                key={post.id}
                                className="bg-white rounded-2xl p-5 sm:p-8 flex flex-col justify-between hover:shadow-md transition-all duration-200"
                            >
                                <div>
                                    <Link href={`/blog/${post.slug}`}>
                                        <Image src={"/images/blog/image-thumbnail@2x.png"} alt="Blog Thumbnail" className="aspect-video w-full object-cover mb-6 sm:mb-8" width={600} height={400} />
                                    </Link>

                                    <div className="text-sm text-neutral-700 font-medium mb-4">
                                        {post.date}
                                    </div>

                                    <Link href={`/blog/${post.slug}`}>
                                        <h3 className="text-xl sm:text-2xl font-semibold text-neutral-900 mb-5 sm:mb-8 line-clamp-2 leading-snug hover:text-neutral-700 transition-colors cursor-pointer">
                                            {post.title}
                                        </h3>
                                    </Link>

                                    <p className="text-neutral-700 text-sm sm:text-base leading-relaxed mb-5 sm:mb-8 line-clamp-2">
                                        {post.excerpt}
                                    </p>
                                </div>

                                <div>
                                    <Button href={`/blog/${post.slug}`} className="bg-neutral-900 border-2 text-neutral-100 hover:text-neutral-900 hover:bg-neutral-100 inline-flex py-2!" type="with-icon">
                                        <span className="relative z-1">
                                            Read Full Blog
                                        </span>
                                        <span className="w-5 h-5 rounded-full bg-white group-hover:bg-black text-black group-hover:text-white flex items-center justify-center text-xs shrink-0 group-hover:translate-x-0.5 transition-transform">
                                            <ArrowRight className="size-4" />
                                        </span>
                                    </Button>
                                </div>
                            </div>
                        );
                    })}
                </section>

                {/* Pagination Section */}
                <section className="flex items-center justify-center gap-2">
                    <button
                        onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                        disabled={currentPage === 1}
                        className="inline-flex items-center gap-1 bg-gray-200 hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed text-gray-700 font-medium text-xs px-3 py-2 rounded-lg transition-colors cursor-pointer"
                    >
                        <ChevronLeft className="w-3.5 h-3.5" />
                        <span>Prev</span>
                    </button>

                    <button
                        onClick={() => setCurrentPage(1)}
                        className={`w-8 h-8 rounded-lg font-semibold text-xs flex items-center justify-center transition-colors cursor-pointer ${currentPage === 1
                            ? "bg-gray-900 text-white shadow-xs"
                            : "bg-white border border-gray-200 text-gray-700 hover:border-gray-400"
                            }`}
                    >
                        1
                    </button>

                    <button
                        onClick={() => setCurrentPage(2)}
                        className={`w-8 h-8 rounded-lg font-semibold text-xs flex items-center justify-center transition-colors cursor-pointer ${currentPage === 2
                            ? "bg-gray-900 text-white shadow-xs"
                            : "bg-white border border-gray-200 text-gray-700 hover:border-gray-400"
                            }`}
                    >
                        2
                    </button>

                    <span className="w-8 h-8 rounded-lg bg-white border border-gray-200 text-gray-500 text-xs flex items-center justify-center">
                        ...
                    </span>

                    <button
                        onClick={() => setCurrentPage(9)}
                        className={`w-8 h-8 rounded-lg font-semibold text-xs flex items-center justify-center transition-colors cursor-pointer ${currentPage === 9
                            ? "bg-gray-900 text-white shadow-xs"
                            : "bg-white border border-gray-200 text-gray-700 hover:border-gray-400"
                            }`}
                    >
                        9
                    </button>

                    <button
                        onClick={() => setCurrentPage(prev => Math.min(prev + 1, 9))}
                        className="inline-flex items-center gap-1 bg-[#18191c] hover:bg-black text-white font-medium text-xs px-3.5 py-2 rounded-lg transition-colors shadow-xs cursor-pointer"
                    >
                        <span>Next</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                </section>

            </div>
        </main >
    );
}