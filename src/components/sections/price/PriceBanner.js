import SplitText from "@/components/providers/SplitText";

export default function PriceBanner() {
    return (
        <section
            className="relative bg-madison-50 text-madison-950 py-16 md:py-20 overflow-hidden select-none"
        >
            <div className="relative z-10 lg:container mx-auto px-4">
                {/* Section Header */}
                <div className="max-w-xl mx-auto text-center">
                    {/* Tag / Category Badge */}
                    <div className="inline-flex items-center gap-2 mb-3">
                        <span className="size-1.5 rounded-full transition-colors duration-300 bg-madison-700 blink-dot" />
                        <span className="text-xs sm:text-[13px] font-normal tracking-wider text-madison-700 uppercase">
                            Pricing
                        </span>
                    </div>

                    {/* Main Title */}
                    <h2>
                        <SplitText
                            text="Pick the products your team needs."
                            className="flex text-3xl sm:text-4xl md:text-5xl font-medium text-madison-950 leading-[1.14] blur-rise"
                            effect="rise"
                            splitType="Chars"
                            delay={50}
                            duration={1.25}
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
                    </h2>

                    {/* Subtitle Paragraph */}
                    <SplitText
                        text="Use one, or combine them. Select a product to see how your plan adds up."
                        className="text-center! mt-4 sm:mt-5 text-base text-madison-950/60 max-w-2xl mx-auto leading-relaxed font-normal blur-rise"
                        effect="rise"
                        splitType="Chars"
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

            </div>
        </section>
    );
}