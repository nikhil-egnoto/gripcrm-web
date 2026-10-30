
"use client";

import { useEffect } from "react";
import confetti from "canvas-confetti";

export default function Confetti() {
    useEffect(() => {
        const duration = 3000;
        const animationEnd = Date.now() + duration;

        const interval = setInterval(() => {
            const timeLeft = animationEnd - Date.now();

            if (timeLeft <= 0) {
                clearInterval(interval);
                return;
            }

            confetti({
                particleCount: 5,
                startVelocity: 30,
                spread: 360,
                ticks: 60,
                origin: {
                    x: Math.random(),
                    y: Math.random() - 0.2,
                },
                colors: ["#ff0000", "#00ff00", "#0000ff", "#ffd700"],
            });
        }, 200);

        return () => clearInterval(interval);
    }, []);

    return null;
}
