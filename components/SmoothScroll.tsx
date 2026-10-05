"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";
import "lenis/dist/lenis.css";
import { gsap, ScrollTrigger } from "@/lib/gsap";

export default function SmoothScroll({ children }: { children: ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1,
      wheelMultiplier: 1,
      infinite: false,
      anchors: true,
    });
    lenisRef.current = lenis;

    lenis.on("scroll", ScrollTrigger.update);

    const tick = (time: number) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    // The page keeps growing after first paint (images, fonts, the loader
    // revealing content). If Lenis keeps an outdated page height it clamps
    // scrolling to that old limit, which feels like the page is stuck.
    const remeasure = () => {
      lenis.resize();
      ScrollTrigger.refresh();
    };
    window.addEventListener("load", remeasure);
    document.fonts?.ready.then(remeasure).catch(() => {});
    const observer = new ResizeObserver(() => lenis.resize());
    observer.observe(document.body);

    return () => {
      window.removeEventListener("load", remeasure);
      observer.disconnect();
      gsap.ticker.remove(tick);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  // Next.js keeps this component mounted across client-side navigation, so
  // Lenis would otherwise carry the previous page's scroll target and height
  // onto the new page.
  useEffect(() => {
    const lenis = lenisRef.current;
    if (!lenis) return;
    lenis.start();
    if (!window.location.hash) {
      lenis.scrollTo(0, { immediate: true, force: true });
    }
    const id = window.setTimeout(() => {
      lenis.resize();
      ScrollTrigger.refresh();
    }, 100);
    return () => window.clearTimeout(id);
  }, [pathname]);

  return <>{children}</>;
}
