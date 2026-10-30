"use client";

import { useEffect, useRef, useState } from "react";

/**
 * FadeIn component provides smooth scroll-triggered or entrance fade animations.
 * 
 * @param {React.ReactNode} children Content to animate
 * @param {string} className Additional classes
 * @param {number} delay Delay in seconds (e.g. 0.2)
 * @param {number} duration Duration in seconds (default: 0.8)
 * @param {"up"|"down"|"left"|"right"|"none"} direction Entrance movement direction
 * @param {number} distance Movement distance in px (default: 24)
 * @param {number} threshold IntersectionObserver threshold (0 to 1)
 * @param {boolean} once Whether to animate only once
 * @param {React.ElementType} as HTML tag to render as (default: "div")
 */
export default function FadeIn({
  children,
  className = "",
  delay = 0,
  duration = 0.8,
  direction = "up",
  distance = 24,
  threshold = 0.15,
  once = true,
  as: Component = "div",
  ...props
}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    // Check if element is already in the viewport on initial load
    const rect = node.getBoundingClientRect();
    const isInViewport =
      rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.95;
    if (isInViewport) {
      setIsVisible(true);
      if (once) return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) {
            observer.unobserve(node);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold, once]);

  // Compute transform offset based on direction
  const getTransform = () => {
    if (isVisible) return "translate3d(0, 0, 0)";
    switch (direction) {
      case "up":
        return `translate3d(0, ${distance}px, 0)`;
      case "down":
        return `translate3d(0, -${distance}px, 0)`;
      case "left":
        return `translate3d(${distance}px, 0, 0)`;
      case "right":
        return `translate3d(-${distance}px, 0, 0)`;
      case "none":
      default:
        return "none";
    }
  };

  return (
    <Component
      ref={ref}
      className={`transition-all ${className}`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: getTransform(),
        transitionDuration: `${duration}s`,
        transitionDelay: `${delay}s`,
        transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
        willChange: isVisible ? "auto" : "opacity, transform",
      }}
      {...props}
    >
      {children}
    </Component>
  );
}
