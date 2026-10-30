'use client';

import { motion } from "framer-motion";
import { fadeInUp } from '@/components/providers/motionAnimation';
import SplitText from '@/components/providers/SplitText';
import Button from '@/components/ui/Button';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const BLOG_POSTS = [
    {
        id: 'industry-trends-2026',
        title: '6 Trends Shaping the Metal Building Industry in 2026',
        slug: '6-trends-shaping-the-metal-building-industry-in-2026',
        category: 'Industry Trends',
        date: 'Oct 20',
        image: '/images/blog/industry-trends-barn.jpg',
        excerpt:
            'The metal building industry has always been about strength, speed and value. But the way these buildings are designed, quoted and delivered is changing fast.',
        authors: [
            {
                name: 'James Miller',
                avatar: '/images/home/avatar-1.jpg',
            },
        ],
        authorText: 'James Miller',
    },
    {
        id: 'estimating-mistakes',
        title: '5 Costly Estimating Mistakes in Metal Building Projects (and How to Avoid Them)',
        slug: '5-costly-estimating-mistakes-in-metal-building-projects',
        category: 'Grip Estimator',
        date: 'Oct 19',
        image: '/images/blog/brushed-metal-estimator.jpg',
        excerpt:
            'In the metal building industry, a winning quote is not always the lowest one. It\u2019s the most accurate one. A small error in steel weight, a missed accessory, or an...',
        authors: [
            {
                name: 'Natasha Lee',
                avatar: '/images/customers/alina.jpg',
            },
            {
                name: 'James Miller',
                avatar: '/images/home/avatar-1.jpg',
            },
        ],
        authorText: 'Natasha Lee and James Miller',
    },
    {
        id: 'dealership-spreadsheets',
        title: '5 signs your dealership has outgrown spreadsheets',
        slug: '5-signs-your-dealership-has-outgrown-spreadsheets',
        category: 'GripCRM',
        date: 'Oct 18',
        image: '/images/blog/dealership-office.jpg',
        excerpt:
            'Missed follow-ups and scattered customer notes cost you jobs. Here\u2019s how to spot the problem before it does.',
        authors: [
            {
                name: 'Michael Brooks',
                avatar: '/images/customers/marcus.jpg',
            },
            {
                name: 'Sarah Jenkins',
                avatar: '/images/customers/rachel.jpg',
            },
        ],
        authorText: 'Michael Brooks and Sarah Jenkins',
    },
];

export default function GriptechBlog() {
    return (
        <section className="bg-white select-none px-4 sm:px-6 lg:px-8">
            <div className="lg:container mx-auto">
                {/* Header Top Row */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-10 sm:mb-12 lg:mb-14">
                    <div>
                        {/* Kicker Badge: • BLOG */}
                        <div className="flex items-center gap-2 mb-3">
                            <span className="size-1.5 rounded-full transition-colors duration-300 bg-madison-700 blink-dot" />
                            <span className="text-xs sm:text-[13px] font-normal tracking-wider text-madison-700 uppercase">
                                BLOG
                            </span>
                        </div>

                        {/* Heading */}
                        <SplitText
                            text="Insights for the metal building industry"
                            className="text-3xl sm:text-4xl md:text-5xl font-medium text-madison-950 blur-rise"
                            effect="rise"
                            splitType="words"
                            delay={30}
                            duration={0.75}
                            staggerFrom="start"
                            trigger="view"
                            hoverEffect="none"
                            loop={false}
                            loopDelay={0.5}
                            mask={false}
                            threshold={0.1}
                            rootMargin="0"
                            textAlign="start"
                        />

                        {/* Subtitle */}
                        <div>
                            <SplitText
                                text="A collection of news, insights, and tutorials."
                                className="mt-4 sm:mt-5 text-base text-madison-950/60 leading-relaxed font-normal max-w-sm blur-rise"
                                effect="rise"
                                splitType="words"
                                delay={30}
                                duration={0.75}
                                staggerFrom="start"
                                trigger="view"
                                hoverEffect="none"
                                loop={false}
                                loopDelay={0.5}
                                mask={false}
                                threshold={0.1}
                                rootMargin="0"
                                textAlign="start"
                            />
                        </div>
                    </div>

                    {/* "View all posts" Button */}
                    <div className="shrink-0">
                        {/* Action Button */}
                        <Button
                            href="/blog"
                            className="inline-flex bg-white text-dark border border-madison-950/20! split-btn hover:shadow-[0px_0px_0px_2px_#00000017,0px_0.48175px_0.86715px_-1.41667px_rgba(0,0,0,0.16),0px_1.83083px_3.29549px_-2.83333px_rgba(0,0,0,0.14),0px_8px_14.4px_-4.25px_rgba(0,0,0,0.03)]"
                        >
                            <span className="wave-text-inner flex">
                                {"View all posts".split("").map((char, index) => (
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
                </div>

                {/* 3-Column Card Container matching reference */}
                <div className="rounded-xl border border-madison-950/10 bg-white overflow-hidden">
                    <motion.div {...fadeInUp} className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-madison-950/10">
                        {BLOG_POSTS.map((post) => (
                            <article
                                key={post.id}
                                className="group flex flex-col justify-between bg-white transition-colors duration-200 hover:bg-madison-50"
                            >
                                <Link
                                    href={`/blog/${post.slug}`}>
                                    {/* Top Zone: Image with rounded corners and outer padding */}
                                    <div className="p-5 sm:p-6 pb-5 bg-white">
                                        <div
                                            href={`/blog/${post.slug}`}
                                            className="block relative w-full aspect-[16/10] rounded-xl overflow-hidden"
                                        >
                                            <Image
                                                src={post.image}
                                                alt={post.title}
                                                fill
                                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
                                                className="object-cover transition-transform duration-500 ease-out"
                                            />
                                        </div>
                                    </div>

                                    {/* Middle Zone: Category Tag and Date bordered strip */}
                                    <div className="border-t border-b border-madison-950/10 px-5 sm:px-6 py-3.5 flex items-center justify-between">
                                        <span className="inline-flex items-center justify-center bg-madison-950 text-white text-xs font-normal px-2.5 py-2 rounded-sm leading-none">
                                            {post.category}
                                        </span>
                                        <time className="text-xs text-madison-950/60 font-normal">
                                            {post.date}
                                        </time>
                                    </div>

                                    {/* Bottom Zone: Title, Excerpt, and Author */}
                                    <div className="p-5 sm:p-6 pt-5 flex flex-col justify-between flex-1">
                                        <div>
                                            <h3 className="text-base sm:text-lg font-medium text-madison-950 line-clamp-2 min-h-15">
                                                {post.title}
                                            </h3>

                                            <p className="mt-3 text-base text-madison-950/60 leading-relaxed font-normal line-clamp-3 min-h-20">
                                                {post.excerpt}
                                            </p>
                                        </div>

                                        {/* Author Info */}
                                        <div className="mt-7 flex items-center justify-between">
                                            {/* Avatar(s) */}
                                            <div className='flex gap-2 items-center'>
                                                <div className="flex -space-x-1.5 shrink-0 items-center">
                                                    {post.authors.map((author, index) => (
                                                        <div
                                                            key={author.name}
                                                            className="relative size-6 sm:size-6.5 rounded-full overflow-hidden ring-2 ring-white bg-slate-100"
                                                            style={{ zIndex: 10 - index }}
                                                        >
                                                            <Image
                                                                src={author.avatar}
                                                                alt={author.name}
                                                                fill
                                                                sizes="28px"
                                                                className="object-cover"
                                                            />
                                                        </div>
                                                    ))}
                                                </div>

                                                {/* Author Names */}
                                                <span className="text-sm text-madison-950/60 font-normal truncate">
                                                    {post.authorText}
                                                </span>
                                            </div>
                                            <ArrowRight className='size-4 opacity-0 group-hover:opacity-100 transition-all duration-300' />
                                        </div>
                                    </div>
                                </Link>
                            </article>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}