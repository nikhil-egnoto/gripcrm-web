'use client';

import Image from 'next/image';
import LogoLoop from '@/components/providers/LogoLoop';
import SplitText from '@/components/providers/SplitText';

// Toggl wordmark logo matching reference design
function TogglLogo() {
    return (
        <div className="flex items-center select-none" aria-label="Toggl">
            <span className="font-extrabold text-[23px] tracking-[-0.05em] text-gray-950 font-sans leading-none">
                toggl
            </span>
        </div>
    );
}

// Gumroad wordmark logo matching reference design
function GumroadLogo() {
    return (
        <div className="flex items-center select-none" aria-label="Gumroad">
            <span className="font-black text-[16px] tracking-[-0.01em] text-gray-950 uppercase font-sans leading-none">
                GUMROAD
            </span>
        </div>
    );
}

// Afterpay logo with double-chevron symbol matching reference design
function AfterpayLogo() {
    return (
        <div className="flex items-center gap-1.5 select-none" aria-label="Afterpay">
            <span className="font-extrabold text-[20px] tracking-[-0.04em] text-gray-950 lowercase font-sans leading-none">
                afterpay
            </span>
            <svg
                className="w-4 h-4 text-gray-950 stroke-[2.4] shrink-0"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
            >
                <path d="M13 6l-6 6 6 6" />
                <path d="M19 6l-6 6 6 6" />
            </svg>
        </div>
    );
}

// Stripe wordmark logo
function StripeLogo() {
    return (
        <div className="flex items-center select-none" aria-label="Stripe">
            <span className="font-extrabold text-[21px] tracking-[-0.05em] text-gray-950 lowercase font-sans leading-none">
                stripe
            </span>
        </div>
    );
}

// Loom wordmark logo
function LoomLogo() {
    return (
        <div className="flex items-center gap-1.5 select-none" aria-label="Loom">
            <svg className="size-4 text-gray-950 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2a10 10 0 0 0-7.07 17.07l1.41-1.41A8 8 0 1 1 20 12h2a10 10 0 0 0-10-10z" />
            </svg>
            <span className="font-extrabold text-[19px] tracking-tight text-gray-950 lowercase font-sans leading-none">
                loom
            </span>
        </div>
    );
}

const STORIES = [
    {
        id: 'allied-buildings',
        company: 'Allied Buildings',
        logo: <TogglLogo />,
        quote:
            'Orders used to get re-typed between sales and the shop floor, and mistakes crept in every week. Now an order moves straight to production without anyone re-entering it. Our team spends less time fixing and more time building.',
        avatar: '/images/customers/alina.jpg',
        name: 'Alina Bradley',
        role: 'Operations Manager',
        metricLabel: 'Orders processed',
        metricValue: '150–250 / month',
        bgColor: '#eff2fa',
    },
    {
        id: 'carolina-carports',
        company: 'Carolina Carports',
        logo: <GumroadLogo />,
        quote:
            'We used to lose track of leads between phone calls and spreadsheets. With GripCRM, every follow-up is in one place, and nothing slips through anymore. Our team knows exactly who to call each morning.',
        avatar: '/images/front/dave.png',
        name: 'Dave Miller',
        role: 'Owner',
        metricLabel: 'Tracked',
        metricValue: '200-300',
        bgColor: '#fcf6e8',
    },
    {
        id: 'eagle-carports',
        company: 'Eagle Carports',
        logo: <AfterpayLogo />,
        quote:
            "Customers used to ask us to 'email a quote and we'll think about it.' Now we show them their building in 3D right on the first call. The conversation moves much faster, and people say yes on the spot.",
        avatar: '/images/customers/marcus.jpg',
        name: 'Marcus Vance',
        role: 'Sales Director',
        metricLabel: 'Close rate',
        metricValue: '+42% faster',
        bgColor: '#faf7f5',
    },
    {
        id: 'coast-to-coast',
        company: 'Coast to Coast Carports',
        logo: <StripeLogo />,
        quote:
            'The automated job status updates and 3D estimator reduced our customer service calls by half. Contractors love seeing real-time material specs and instant pricing directly in the portal.',
        avatar: '/images/customers/rachel.jpg',
        name: 'Rachel Torres',
        role: 'VP of Operations',
        metricLabel: 'Turnaround time',
        metricValue: '< 10 minutes',
        bgColor: '#eff7f4',
    },
    {
        id: 'american-carports',
        company: 'American Carports',
        logo: <LoomLogo />,
        quote:
            'Before GripCRM, our estimators spent 40 minutes on every custom metal building layout. Now it takes 4 minutes, and the output is ready for engineering sign-off instantly.',
        avatar: '/images/home/avatar-3.jpg',
        name: 'Nathan Reed',
        role: 'Lead Estimator',
        metricLabel: 'Quotes generated',
        metricValue: '500+ / month',
        bgColor: '#f8f5ee',
    },
];

function CustomerStoryCard({ story }) {
    return (
        <div
            className="select-none text-left min-h-[460px] text-gray-900 rounded-2xl p-7 sm:p-9 md:p-10 w-80 sm:w-[560px] md:w-[610px] lg:w-185 flex md:flex-row flex-col justify-between gap-8 sm:gap-12 transition-transform duration-300 shrink-0"
            style={{ backgroundColor: story.bgColor }}
        >
            {/* Left Column: Logo, Company Name, Story Paragraph */}
            <div className="flex-1 flex flex-col justify-between min-w-0 pr-1">
                {/* Brand Logo Header */}
                <div className="h-7 flex items-center">
                    {story.logo}
                </div>

                {/* Company Name and Quote Content */}
                <div className="mt-8 sm:mt-10">
                    <h3 className="text-2xl md:text-3xl font-medium text-dark tracking-tight mb-3 sm:mb-3.5 leading-snug">
                        {story.company}
                    </h3>
                    <p className="text-madison-950/60 text-base sm:text-lg leading-relaxed font-normal">
                        {story.quote}
                    </p>
                </div>
            </div>

            {/* Right Column: Customer Photo & Role / Metric Badges */}
            <div className="w-full sm:w-48 md:w-52 shrink-0 flex flex-col justify-between">
                {/* Photo with rounded-2xl */}
                <div className="w-[160px] sm:w-[195px] md:w-[210px] aspect-square rounded-2xl overflow-hidden bg-gray-200/80 shadow-sm relative">
                    <Image
                        src={story.avatar}
                        alt={story.name}
                        fill
                        sizes="(max-width: 640px) 160px, 210px"
                        className="object-cover pointer-events-none"
                    />
                </div>

                {/* Meta Details: Role and Metric */}
                <div className="mt-4 sm:mt-5 pt-0.5">
                    {/* Name & Role */}
                    <div className="text-xs font-normal text-gray-500 tracking-normal leading-tight">
                        Name and role
                    </div>
                    <div className="text-base sm:text-lg font-medium text-dark mt-0.5 leading-snug truncate">
                        {story.name}, {story.role}
                    </div>

                    {/* Subtle Divider Line */}
                    <div className="w-full h-px bg-gray-300/70 my-2 sm:my-2.5" />

                    {/* Metric Label and Value */}
                    <div className="text-xs font-normal text-gray-500 tracking-normal leading-tight">
                        {story.metricLabel}
                    </div>
                    <div className="text-base sm:text-lg font-medium text-dark mt-0.5 leading-snug truncate">
                        {story.metricValue}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function CustomerStories() {
    // Prepare logo loop items
    const loopItems = STORIES.map((story) => ({
        title: story.company,
        node: <CustomerStoryCard story={story} />,
    }));

    return (
        <section className="relative bg-madison-950 text-white py-16 sm:py-20 md:py-24 overflow-hidden select-none">
            {/* Header: Left-aligned with container */}
            <div className="lg:container mx-auto px-4 sm:px-6 lg:px-8 mb-10 sm:mb-12 md:mb-14">
                {/* Category Kicker with Glowing Bullet */}
                <div className="flex items-center gap-2 mb-3.5">
                    <span className="size-1.5 rounded-full transition-colors duration-300 bg-light/90 blink-dot" />
                    <span className="text-xs sm:text-[13px] font-normal tracking-wider text-light/85 uppercase">
                        CUSTOMER STORIES
                    </span>
                </div>

                <SplitText
                    text="Trusted by metal building pros"
                    className="text-3xl sm:text-4xl md:text-5xl font-medium text-white tracking-tight leading-[1.12] blur-rise"
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

                {/* Subtitle Description */}
                <div>
                    <SplitText
                        text="See how teams quote faster and close more with GripTech."
                        className="mt-3.5 sm:mt-4 text-base text-madison-50/70 font-normal leading-relaxed blur-rise"
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

            {/* Seamless Infinite Loop Slider of Customer Story Cards */}
            <div className="w-full">
                <LogoLoop
                    logos={loopItems}
                    speed={50}
                    direction="left"
                    logoHeight={28}
                    gap={28}
                    pauseOnHover={true}
                    scaleOnHover={false}
                    fadeOut={false}
                    draggable={true}
                    ariaLabel="Customer success stories"
                    className="py-2"
                />
            </div>
        </section>
    );
}