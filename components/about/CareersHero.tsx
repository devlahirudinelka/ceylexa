"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function CareersHero() {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.1 });

      if (headingRef.current) {
        tl.fromTo(
          headingRef.current,
          { opacity: 0, y: 24 },
          { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" },
          0,
        );
      }

      if (bottomRef.current) {
        tl.fromTo(
          bottomRef.current,
          { opacity: 0, filter: "blur(5px)", y: 20 },
          {
            opacity: 1,
            filter: "blur(0px)",
            y: 0,
            duration: 0.7,
            ease: "power3.out",
          },
          0.25,
        );
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="relative">
      <div className="pt-30 w-full max-tablet:pt-24 max-md:pt-18 max-mobile:pt-[3.6rem]" />

      <div className="w-full max-w-6xl mx-auto px-6 max-tablet:px-[1.2rem] max-md:px-[1.0499rem] max-mobile:px-[0.899rem]">
        <h1
          ref={headingRef}
          className=""
        >
          Careers at <span className="text-[#B08D3C]">Ceylexa</span>
        </h1>
      </div>

      <div className="pt-30 w-full max-tablet:pt-20 max-md:pt-18 max-mobile:pt-16" />
    </section>
  );
}
