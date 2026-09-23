"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Button from "@/components/ui/Button";
import { FEATURED_POSTS, BLOG_POSTS } from "@/data/blogData";
import { fetchBlogData } from "@/lib/api";

import {
    ArrowRight,
    ArrowLeft,
    ChevronRight,
    Phone
} from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


// Helper to extract clean post title (handles strings and WP { rendered } format)
const getPostTitle = (post) => {
    if (!post) return "";
    if (typeof post.title === "object") return post.title?.rendered || "";
    return post.title || "";
};

// Helper to extract clean post excerpt without HTML tags
const getPostExcerpt = (post) => {
    if (!post) return "";
    const raw = typeof post.excerpt === "object" ? post.excerpt?.rendered : post.excerpt;
    if (typeof raw === "string") {
        return raw.replace(/<[^>]+>/g, "").trim();
    }
    return raw || "";
};

const getPostSlug = (post, fallback) => {
    return post?.slug || post?.id || fallback;
};

const getPostImage = (post) => {
    return post?.image || post?.featured_image || "/images/blog/image-thumbnail@2x.png";
};

export default function BlogPage() {
    const [fields, setFields] = useState(null);

    useEffect(() => {
        const getBlogData = async () => {
            const data = await fetchBlogData();
            const posts = data?.fields || data?.blogs;
            if (posts) {
                setFields(posts);
            }
        };

        getBlogData();
    }, []);

    // Merge or select posts list: dynamic API data if available, otherwise fallback posts
    const allPosts = React.useMemo(() => {
        if (Array.isArray(fields) && fields.length > 0) return fields;
        if (Array.isArray(fields?.blogs) && fields.blogs.length > 0) return fields.blogs;
        if (Array.isArray(fields?.posts) && fields.posts.length > 0) return fields.posts;
        return [...FEATURED_POSTS, ...BLOG_POSTS];
    }, [fields]);

    // First (latest) 3 posts go to Swiper
    const swiperPosts = React.useMemo(() => {
        return allPosts.slice(0, 3);
    }, [allPosts]);

    // Remaining posts continue in the Main Blog Grid section
    const gridPosts = React.useMemo(() => {
        const remaining = allPosts.slice(3);
        const specialCta = BLOG_POSTS.find(p => p.isSpecialCta);

        // If remaining posts don't include the special CTA card and there are posts, insert it after the 3rd post to preserve layout
        if (remaining.length > 0 && !remaining.some(p => p.isSpecialCta) && specialCta) {
            const copy = [...remaining];
            const insertIndex = Math.min(3, copy.length);
            copy.splice(insertIndex, 0, specialCta);
            return copy;
        }
        return remaining;
    }, [allPosts]);

    const [currentPage, setCurrentPage] = useState(1);
    const POSTS_PER_PAGE = 6;

    const totalPages = Math.ceil(gridPosts.length / POSTS_PER_PAGE);

    // Paginate grid posts (max 6 per page)
    const paginatedGridPosts = React.useMemo(() => {
        const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
        return gridPosts.slice(startIndex, startIndex + POSTS_PER_PAGE);
    }, [gridPosts, currentPage]);

    // Keep currentPage within bounds if totalPages changes
    useEffect(() => {
        if (totalPages > 0 && currentPage > totalPages) {
            setCurrentPage(1);
        }
    }, [totalPages, currentPage]);

    const handlePageChange = (page) => {
        if (page < 1 || page > totalPages || page === currentPage) return;
        setCurrentPage(page);

        // Smooth scroll to top of main blog grid
        const gridSection = document.getElementById("main-blog-grid");
        if (gridSection) {
            const yOffset = -80;
            const y = gridSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: "smooth" });
        }
    };

    const getPaginationItems = (current, total) => {
        if (total <= 5) {
            return Array.from({ length: total }, (_, i) => i + 1);
        }

        if (current <= 3) {
            return [1, 2, 3, "...", total];
        }

        if (current >= total - 2) {
            return [1, "...", total - 2, total - 1, total];
        }

        return [1, "...", current - 1, current, current + 1, "...", total];
    };

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

                {/* Featured Post Hero Card (First 3 Latest Posts) */}
                {swiperPosts.length > 0 && (
                    <Swiper className="blog-swiper"
                        modules={[Navigation, Pagination, Autoplay]}
                        slidesPerView={1}
                        spaceBetween={20}
                        pagination={pagination}
                        autoplay={false}
                    >
                        {swiperPosts.map((post, idx) => {
                            const title = getPostTitle(post);
                            const excerpt = getPostExcerpt(post);
                            const slug = getPostSlug(post, idx);
                            const image = getPostImage(post);

                            return (
                                <SwiperSlide key={post.id || slug || idx}
                                    className={`bg-white rounded-3xl p-5 sm:p-7 shadow-[0_4px_25px_rgba(0,0,0,0.03)] border border-gray-100`}>
                                    {/* Card Header Row */}
                                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 items-center">

                                        {/* Left Column: 16:9 Image Placeholder / Featured Image */}
                                        <div className="md:col-span-6 w-full">
                                            <Link href={`/blog/${slug}`}>
                                                <Image src={image} alt={title || "Blog Thumbnail"} className="aspect-video w-full object-cover rounded-2xl" width={600} height={400} />
                                            </Link>
                                        </div>

                                        {/* Right Column: Featured Details */}
                                        <div className="md:col-span-6 flex flex-col justify-center h-full">
                                            {post.date && (
                                                <span className="text-sm text-neutral-700 font-medium mb-4">
                                                    {post.date}
                                                </span>
                                            )}

                                            <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-neutral-900 mb-6 sm:mb-10 hover:text-neutral-700 transition-colors cursor-pointer">
                                                <Link href={`/blog/${slug}`}>{title}</Link>
                                            </h2>

                                            {excerpt && (
                                                <p className="text-neutral-700 text-sm sm:text-base leading-relaxed mb-6 sm:mb-10 line-clamp-2">
                                                    {excerpt}
                                                </p>
                                            )}

                                            <div>
                                                <Button href={`/blog/${slug}`} className="bg-neutral-900 border-2 text-neutral-100 hover:text-neutral-900 hover:bg-neutral-100 inline-flex py-2!" type="with-icon">
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
                )}

                {/* Main Blog Grid (Continuing Other Posts) */}
                <section id="main-blog-grid" className="grid grid-cols-1 md:grid-cols-2 gap-6 scroll-mt-24">
                    {paginatedGridPosts.map((post, idx) => {
                        if (post.isSpecialCta) {
                            return (
                                <div
                                    key={post.id || `special-cta-${idx}`}
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
                                            Need help choosing a plan?
                                        </h3>

                                        {/* Action Buttons Row */}
                                        <div className="flex flex-wrap items-center justify-center gap-4">
                                            <Button className="bg-transparent border-2 border-neutral-50! text-neutral-50 hover:bg-neutral-50 hover:text-neutral-900" href={`tel:+11234567890`}>
                                                <Phone className="size-4 group-hover:scale-110 transition-transform" />
                                                <span className="hidden sm:flex relative z-1">+1 (123) 456-7890</span>
                                            </Button>

                                            <Button className="bg-neutral-50 border-2 border-neutral-50! text-neutral-900 hover:bg-transparent hover:text-neutral-50" href={`/pricing`}>
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
                                            src={post.image || "/images/blog/support-agent.png"}
                                            alt="Customer Support Representative"
                                            width={379}
                                            height={450}
                                            className="relative -bottom-3"
                                        />
                                    </div>
                                </div>
                            );
                        }

                        const title = getPostTitle(post);
                        const excerpt = getPostExcerpt(post);
                        const slug = getPostSlug(post, idx);
                        const image = getPostImage(post);

                        return (
                            <div
                                key={post.id || slug || idx}
                                className="bg-white rounded-2xl p-5 sm:p-8 flex flex-col justify-between hover:shadow-md transition-all duration-200"
                            >
                                <div>
                                    <Link href={`/blog/${slug}`}>
                                        <Image src={image} alt={title || "Blog Thumbnail"} className="aspect-video w-full object-cover mb-6 sm:mb-8 rounded-2xl" width={600} height={400} />
                                    </Link>

                                    {post.date && (
                                        <div className="text-sm text-neutral-700 font-medium mb-4">
                                            {post.date}
                                        </div>
                                    )}

                                    <Link href={`/blog/${slug}`}>
                                        <h3 className="text-xl sm:text-2xl font-semibold text-neutral-900 mb-5 sm:mb-8 line-clamp-2 leading-snug hover:text-neutral-700 transition-colors cursor-pointer">
                                            {title}
                                        </h3>
                                    </Link>

                                    {excerpt && (
                                        <p className="text-neutral-700 text-sm sm:text-base leading-relaxed mb-5 sm:mb-8 line-clamp-2">
                                            {excerpt}
                                        </p>
                                    )}
                                </div>

                                <div>
                                    <Button href={`/blog/${slug}`} className="bg-neutral-900 border-2 text-neutral-100 hover:text-neutral-900 hover:bg-neutral-100 inline-flex py-2!" type="with-icon">
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
                {totalPages > 1 && (
                    <section className="flex items-center justify-center gap-2">
                        <button
                            onClick={() => handlePageChange(currentPage - 1)}
                            disabled={currentPage === 1}
                            className="group lg:px-4 px-3 rounded-lg border-neutral-900 text-sm font-semibold items-center gap-2.5 transition-all cursor-pointer bg-neutral-900 border-2 text-neutral-100 hover:text-neutral-900 hover:bg-neutral-100 inline-flex py-2 disabled:cursor-not-allowed disabled:opacity-50"
                            aria-label="Previous page"
                        >
                            <span className="w-5 h-5 rounded-full bg-white group-hover:bg-black text-black group-hover:text-white flex items-center justify-center text-xs shrink-0 group-hover:translate-x-0.5 transition-transform">
                                <ArrowLeft className="size-4" />
                            </span>
                            <span>Prev</span>
                        </button>

                        {getPaginationItems(currentPage, totalPages).map((item, index) => {
                            if (item === "...") {
                                return (
                                    <span
                                        key={`ellipsis-${index}`}
                                        className="w-8 h-8 rounded-lg bg-white border border-gray-200 text-gray-500 text-xs flex items-center justify-center select-none"
                                    >
                                        ...
                                    </span>
                                );
                            }

                            const pageNum = Number(item);
                            const isActive = currentPage === pageNum;

                            return (
                                <button
                                    key={`page-${pageNum}`}
                                    onClick={() => handlePageChange(pageNum)}
                                    className={`lg:px-4 px-3 rounded-lg border-neutral-900 text-sm font-semibold items-center transition-all cursor-pointer border-2 inline-flex py-2 ${isActive
                                        ? "bg-gray-900 text-white shadow-xs"
                                        : "bg-white border-2 border-black text-black hover:text-neutral-100 hover:bg-neutral-900"
                                        }`}
                                    aria-label={`Page ${pageNum}`}
                                    aria-current={isActive ? "page" : undefined}
                                >
                                    {pageNum}
                                </button>
                            );
                        })}

                        <button
                            onClick={() => handlePageChange(currentPage + 1)}
                            disabled={currentPage === totalPages}
                            className="group lg:px-4 px-3 rounded-lg border-neutral-900 text-sm font-semibold items-center gap-2.5 transition-all cursor-pointer bg-neutral-900 border-2 text-neutral-100 hover:text-neutral-900 hover:bg-neutral-100 inline-flex py-2"
                            aria-label="Next page"
                        >
                            <span>Next</span>
                            <span className="w-5 h-5 rounded-full bg-white group-hover:bg-black text-black group-hover:text-white flex items-center justify-center text-xs shrink-0 group-hover:translate-x-0.5 transition-transform">
                                <ArrowRight className="size-4" />
                            </span>
                        </button>
                    </section>
                )}

            </div>
        </main >
    );
}