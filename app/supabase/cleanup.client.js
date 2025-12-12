"use client";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * Remove global header/footer/reach-out ONLY on /supabase/* pages.
 * This is client-side only so it won't break SSR.
 */
export default function SupabaseCleanup() {
  const pathname = usePathname();

  useEffect(() => {
    if (!pathname) return;
    if (!pathname.startsWith("/supabase")) return;

    try {
      // Remove root header (site nav)
      const rootHeader = document.querySelector("header.sticky");
      if (rootHeader) rootHeader.remove();

      // Remove the reach-out section
      const reachOut = document.getElementById("reach-out");
      if (reachOut) reachOut.remove();

      // Remove site footer (if present)
      const footer = document.querySelector("footer");
      if (footer) footer.remove();
    } catch (err) {
      // silent fail — we don't want to crash the page
      // eslint-disable-next-line no-console
      console.warn("SupabaseCleanup failed:", err);
    }
  }, [pathname]);

  return null;
}
