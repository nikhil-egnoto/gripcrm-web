"use client";

import { usePathname } from "next/navigation";

/**
 * PageFadeTransition wraps pages to provide a smooth, silky fade-in entrance
 * on initial page load and whenever the route changes.
 */
export default function PageFadeTransition({ children }) {
  const pathname = usePathname();

  return (
    <main
      key={pathname}
      className="page-fade-wrapper min-h-screen bg-white"
    >
      {children}
    </main>
  );
}
