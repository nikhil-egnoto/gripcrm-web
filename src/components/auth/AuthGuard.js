"use client";

import { useState, useEffect } from "react";
import { useAuth } from "@/context/AuthContext";
import LoginForm from "./LoginForm";
import { motion } from "framer-motion";
import { fadeInUp } from "../providers/motionAnimation";

export default function AuthGuard({ children }) {
  const { isAuthenticated, isLoading } = useAuth();
  const [progress, setProgress] = useState(0);
  const [isAnimationDone, setIsAnimationDone] = useState(false);
  const [isFading, setIsFading] = useState(false);
  const [isReady, setIsReady] = useState(false);

  // Animate progress smoothly from 0 to 100%
  useEffect(() => {
    let animationFrame;
    const startTime = performance.now();
    const duration = 1200; // 1.2s smooth counter animation

    const updateProgress = (currentTime) => {
      const elapsed = currentTime - startTime;
      const factor = Math.min(elapsed / duration, 1);

      // Smooth ease-out cubic curve
      const eased = 1 - Math.pow(1 - factor, 3);
      const currentVal = Math.round(eased * 100);

      setProgress(currentVal);

      if (factor < 1) {
        animationFrame = requestAnimationFrame(updateProgress);
      } else {
        setProgress(100);
        setIsAnimationDone(true);
      }
    };

    animationFrame = requestAnimationFrame(updateProgress);

    return () => {
      if (animationFrame) cancelAnimationFrame(animationFrame);
    };
  }, []);

  // When 100% is reached and auth check is complete, smoothly fade out
  useEffect(() => {
    if (isAnimationDone && !isLoading) {
      setIsFading(true);
      const timer = setTimeout(() => {
        setIsReady(true);
      });
      return () => clearTimeout(timer);
    }
  }, [isAnimationDone, isLoading]);

  // Show loading screen while loading or until 0-100% counter finishes
  if (!isReady) {
    return (
      <div
        className={`bg-madison-950 text-white select-none overflow-hidden fixed inset-0 z-90 w-screen h-screen min-h-screen transition-opacity duration-300 ease-out ${isFading ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
      >
        {/* Center Brand Name */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none px-6">
          <motion.h1 {...fadeInUp} className="text-white text-5xl font-medium text-center antialiased">
            GripTech
          </motion.h1>
        </div>

        {/* Bottom Section: Percentage and Progress Line */}
        <div className="absolute inset-x-4 sm:inset-x-6 md:inset-x-8 lg:inset-x-10 bottom-3 sm:bottom-4 md:bottom-5 pointer-events-none">
          {/* Percentage Counter (positioned left, right above the line) */}
          <div className="mb-2 sm:mb-2.5 flex items-center">
            <span className="text-white text-3xl font-normal">
              {progress}%
            </span>
          </div>

          {/* Horizontal Progress Bar Line */}
          <div
            className="w-full h-[1.5px] sm:h-[2px] bg-white/[0.12] relative overflow-hidden rounded-full"
            role="progressbar"
            aria-valuenow={progress}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-label="Loading progress"
          >
            {/* Active Progress Fill */}
            <div
              className="h-full bg-white transition-[width] duration-75 ease-out rounded-full"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>
    );
  }

  // If not authenticated, lock website and display Login Page
  if (!isAuthenticated) {
    return <LoginForm />;
  }

  // User is authenticated, render protected website
  return <>{children}</>;
}
