'use client';

import LogoLoop from '@/components/providers/LogoLoop';
import SplitText from '@/components/providers/SplitText';

function TickerItem({ image, alt }) {
    return (
        <span className="inline-flex items-center select-none border border-madison-950/10 px-2">
            <img
                src={image}
                alt={alt}
                className="h-10 w-auto object-contain"
            />
        </span>
    );
}

const brandLogos = [
    { title: "Afterpay", image: "/images/icon/afterpay.svg" },
    { title: "rippling", image: "/images/icon/rippling.svg" },
    { title: "medium", image: "/images/icon/medium.svg" },
    { title: "gumroad", image: "/images/icon/gumroad.svg" },
    { title: "hashicorp", image: "/images/icon/hashicorp.svg" },
    { title: "maze", image: "/images/icon/maze.svg" },
    { title: "toggl", image: "/images/icon/toggl.svg" },
    { title: "uper", image: "/images/icon/uper.svg" }
];

// Divide into two parts
const BRAND_LOGOS1 = brandLogos.slice(0, 4).map((logo) => ({
    title: logo.title,
    node: <TickerItem image={logo.image} alt={logo.title} />
}));

const BRAND_LOGOS2 = brandLogos.slice(4, 8).map((logo) => ({
    title: logo.title,
    node: <TickerItem image={logo.image} alt={logo.title} />
}));

export const BRAND_LOGOS = [
    ...brandLogos.map((logo) => ({
        title: logo.title,
        node: <TickerItem image={logo.image} alt={logo.title} />
    })),
    ...brandLogos.map((logo) => ({
        title: `${logo.title} Repeat`,
        node: <TickerItem image={logo.image} alt={logo.title} />
    }))
];

export default function TrustedDealers() {
    return (
        <section className='pb-20 px-4'>
            <div className='lg:container mx-auto'>
                <div className='text-center mb-4'>
                    <SplitText
                        text="Trusted by dealers, manufacturers, and contractors"
                        className="text-xl font-medium text-madison-950 blur-rise"
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
                        textAlign="center"
                    />
                </div>
                <div className='max-w-3xl mx-auto'>
                    <LogoLoop
                        className="mask-none! mb-3"
                        logos={BRAND_LOGOS1}
                        speed={50}
                        direction="left"
                        logoHeight={34}
                        gap={30}
                        pauseOnHover={true}
                        scaleOnHover={false}
                        fadeOut={true}
                        fadeOutWidth={0.12}
                        ariaLabel="Business capabilities ticker"
                    />
                    <LogoLoop
                        className="mask-none!"
                        logos={BRAND_LOGOS2}
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
                </div>
            </div>
        </section>
    )
}