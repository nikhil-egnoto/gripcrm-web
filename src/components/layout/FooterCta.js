"use client";

import SplitText from "../providers/SplitText";
import Button from "../ui/Button";
import { motion } from "framer-motion";
import { fadeInUp } from "../providers/motionAnimation";

export default function FooterCta() {
    return (
        <section className="relative bg-madison-950 text-white overflow-hidden select-none pt-20 px-4">
            <div className="lg:container mx-auto">
                <div className="max-w-xl w-full mx-auto text-center">
                    <SplitText
                        text="Ready to quote faster and close more jobs?"
                        className="text-3xl sm:text-4xl md:text-5xl font-medium mb-3 blur-rise"
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
                    <SplitText
                        text="See how GripTech helps metal building dealers, manufacturers, and contractors win more jobs and run a smoother business"
                        className="max-w-lg w-full text-base text-light/60 text-center! font-normal leading-relaxed mx-auto mb-5 blur-rise"
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
                    <motion.div
                        {...fadeInUp}
                        viewport={{ once: true, amount: 0 }}
                        transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        className="flex items-center gap-2 justify-center"
                    >
                        <Button
                            href="/contact"
                            className="inline-flex bg-madison-700 text-neutral-100 border-0 split-btn hover:shadow-[0px_0px_0px_2px_#80b9ff,0px_0.48175px_0.86715px_-1.41667px_rgba(0,0,0,0.16),0px_1.83083px_3.29549px_-2.83333px_rgba(0,0,0,0.14),0px_8px_14.4px_-4.25px_rgba(0,0,0,0.03)]"
                        >
                            <span className="wave-text-inner flex">
                                {"Get in touch".split("").map((char, index) => (
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
                        <Button
                            href="/contact"
                            className="inline-flex bg-light text-black border-0 split-btn hover:shadow-[0px_0px_0px_2px_#d1d5db,0px_0.48175px_0.86715px_-1.41667px_rgba(0,0,0,0.16),0px_1.83083px_3.29549px_-2.83333px_rgba(0,0,0,0.14),0px_8px_14.4px_-4.25px_rgba(0,0,0,0.03)]"
                        >
                            <span className="wave-text-inner flex">
                                {"Explore products".split("").map((char, index) => (
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
                    </motion.div>
                </div>
            </div>
        </section>
    );
}