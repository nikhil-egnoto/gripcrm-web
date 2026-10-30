'use client';

import { useState, useEffect } from "react";
import Button from "@/components/ui/Button";
import DriftWall from "@/components/providers/DriftWall";
import SplitText from "@/components/providers/SplitText";

export default function HomeBanner() {
    const introDelay = 0.5;
    const [isRelative, setIsRelative] = useState(true);
    const [roll, setRoll] = useState(40);
    const [tilt, setTilt] = useState(40);
    const [columns, setColumns] = useState(4);
    const [turn, setTurn] = useState(-15);


    useEffect(() => {
        const timer = setTimeout(() => {
            setIsRelative(false);
        }, introDelay * 1000);

        const updateRoll = () => {
            if (window.innerWidth < 1025) {
                setRoll(0); // Mobile
                setTilt(0);
                setColumns(2);
                setTurn(0);
            } else {
                setRoll(40); // Desktop
                setTilt(40);
                setColumns(4);
                setTurn(-15);
            }
        };

        updateRoll();
        window.addEventListener("resize", updateRoll);

        return () => {
            clearTimeout(timer);
            window.removeEventListener("resize", updateRoll);
        };
    }, [introDelay]);

    const items = [
        { image: '/images/front/01.jpg' },
        { image: '/images/front/02.jpg' },
        { image: '/images/front/03.jpg' },
        { image: '/images/front/04.jpg' },
        { image: '/images/front/05.jpg' }
    ];

    return (
        <div className="bg-madison-50 py-10 md:py-20 lg:py-0 lg:h-[calc(100vh-64px)] px-4 relative overflow-hidden">
            <div className="pointer-events-none absolute top-0 left-0 right-0 h-30 lg:h-100 bg-linear-to-b from-madison-50 to-transparent z-10"></div>
            <div className="lg:container mx-auto flex flex-col md:flex-row h-full md:gap-6 gap-10">
                <div className="w-full md:w-1/2 lg:w-lg h-full flex justify-center flex-col relative z-20">
                    <p className="uppercase text-xs text-madison-950/80 relative flex gap-2 items-center mb-3">
                        <span className="size-2 bg-madison-950/60 block rounded-full blink-dot"></span> Built for Metal Buildings</p>
                    <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-7xl flex flex-col font-medium mb-5">
                        <span className="text-madison-950">Quote it. Sell it.</span>
                        <span className="text-madison-700 max-w-lg">Run it all in one place.</span>
                    </h1>
                    <SplitText
                        text="GripCRM, Grip Estimator, and Ninja AI help dealers, manufacturers, and contractors win more jobs and run a smoother business."
                        className="text-madison-950/80 max-w-full md:max-w-sm mb-5 blur-rise"
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

                    <div className="flex gap-5 flex-wrap mb-2">
                        <Button
                            href="/contact"
                            className="bg-madison-700 text-neutral-100 border-0 split-btn hover:shadow-[0px_0px_0px_2px_#80b9ff,0px_0.48175px_0.86715px_-1.41667px_rgba(0,0,0,0.16),0px_1.83083px_3.29549px_-2.83333px_rgba(0,0,0,0.14),0px_8px_14.4px_-4.25px_rgba(0,0,0,0.03)]"
                        >
                            <span className="wave-text-inner flex">
                                {"Get in Touch".split("").map((char, index) => (
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
                            className="bg-white text-neutral-950 border border-[#E5E7EB]! split-btn hover:shadow-[0px_0px_0px_2px_#E5E7EB,0px_0.48175px_0.86715px_-1.41667px_rgba(0,0,0,0.16),0px_1.83083px_3.29549px_-2.83333px_rgba(0,0,0,0.14),0px_8px_14.4px_-4.25px_rgba(0,0,0,0.03)]"
                        >
                            <span className="wave-text-inner flex">
                                {"See what's included".split("").map((char, index) => (
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
                    <p className="text-xs text-madison-950/80 max-w-sm">Talk to a team that understands the metal building industry.</p>
                </div>
                <div className={`flex-1 h-[50vh] md:h-auto`}>
                    <div className={`w-full h-full transition-all duration-1000 ease-in-out ${isRelative ? '' : 'scale-160'}`}>
                        <DriftWall
                            items={items}
                            columns={columns}
                            tileWidth={280}
                            tileHeight={280}
                            gap={20}
                            tilt={tilt}
                            turn={turn}
                            perspective={2400}
                            depth={380}
                            speed={40}
                            direction="up"
                            variance={0}
                            parallax={0}
                            lift={0}
                            fade={0}
                            dim={1}
                            overlayColor="#ffffff"
                            radius={10}
                            roll={roll}
                            pauseOnHover={false}
                            grayscale
                            introDelay={introDelay}
                            introDuration={1.5}
                        />
                    </div>
                </div>
            </div>

            <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-50 lg:h-100 bg-linear-to-t from-madison-50 to-transparent z-10"></div>
        </div>
    )
}