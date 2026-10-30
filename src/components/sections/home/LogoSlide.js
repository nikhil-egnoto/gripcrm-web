'use client';

import LogoLoop from '@/components/providers/LogoLoop';

function SparkBurstIcon({ className = "size-6 sm:size-8" }) {
    return (
        <svg
            className={className}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            aria-hidden="true"
        >
            {/* 8-ray sunburst with hollow center */}
            <line x1="12" y1="2.5" x2="12" y2="6.5" />
            <line x1="12" y1="17.5" x2="12" y2="21.5" />
            <line x1="2.5" y1="12" x2="6.5" y2="12" />
            <line x1="17.5" y1="12" x2="21.5" y2="12" />
            <line x1="5.28" y1="5.28" x2="8.11" y2="8.11" />
            <line x1="15.89" y1="15.89" x2="18.72" y2="18.72" />
            <line x1="5.28" y1="18.72" x2="8.11" y2="15.89" />
            <line x1="15.89" y1="8.11" x2="18.72" y2="5.28" />
        </svg>
    );
}

function TickerItem({ text }) {
    return (
        <span className="inline-flex items-center gap-7 sm:gap-9 md:gap-11 select-none">
            <span className="text-6xl font-normal tracking-tight text-madison-950 leading-none whitespace-nowrap">
                {text}
            </span>
            <SparkBurstIcon className="size-6 sm:size-8 text-madison-950 shrink-0" />
        </span>
    );
}

const WORDS = ["Grow", "Quote", "Sell", "Build", "Track", "Automate"];

export const PARTNER_LOGOS3 = [
    ...WORDS.map((word) => ({
        title: word,
        node: <TickerItem text={word} />
    })),
    ...WORDS.map((word) => ({
        title: `${word} Repeat`,
        node: <TickerItem text={word} />
    }))
];

export const PARTNER_LOGOS = PARTNER_LOGOS3;

export default function LogoSlide() {
    return (
        <section className="bg-madison-50 w-full pb-18 select-none">
            {/* Seamless Horizontal Word & Burst Loop */}
            <LogoLoop
                logos={PARTNER_LOGOS3}
                speed={50}
                direction="right"
                logoHeight={34}
                gap={44}
                pauseOnHover={true}
                scaleOnHover={false}
                fadeOut={true}
                fadeOutWidth={0.12}
                ariaLabel="Business capabilities ticker"
            />
        </section>
    );
}