"use client";

import { usePathname } from "next/navigation";

/**
 * PageFadeTransition wraps pages to provide a smooth, silky fade-in entrance
 * on initial page load and whenever the route changes.
 */
export default function PageFadeTransition({ children }) {
  const pathname = usePathname();

  return (
    <div
      key={pathname}
      className="page-fade-wrapper min-h-screen"
    >
      {children}
    </div>
  );
}
