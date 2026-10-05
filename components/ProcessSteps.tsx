"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

// Per-card entrance, matching the source template's own scroll-bound
// interaction ("Work Card Scroll On" — a Webflow IX2 scroll-progress
// binding on this exact section): each card carries its own rotation
// amount rather than a flat left/right split, and two of the four also
// slide in horizontally. The sign still alternates the way steps 1 & 3
// vs. 2 & 4 are already grouped by the zigzag layout (see below) — 1 & 3
// rotate in positive, 2 & 4 negative — just with different magnitudes per
// card instead of a uniform angle.
const STEP_ANIMATIONS = [
  { rotate: 40, xPercent: 20 }, // step 1
  { rotate: -35, xPercent: 0 }, // step 2
  { rotate: 20, xPercent: 0 }, // step 3
  { rotate: -18, xPercent: -50 }, // step 4
];

export default function ProcessSteps() {
  // One ref per `.process-card-wrapper`, in step order (1-4). The layout
  // already zigzags steps 1 & 3 low and 2 & 4 high (via the `spaching-*`
  // spacer div sitting before vs. after the card in each column — see
  // uxoral.css, `.working-process-step` is just a 4-column grid with no
  // rotation/positioning of its own).
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const cards = cardRefs.current.filter(
      (el): el is HTMLDivElement => el !== null,
    );
    if (cards.length === 0) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      cards.forEach((card, i) => {
        const { rotate, xPercent } = STEP_ANIMATIONS[i];

        gsap.fromTo(
          card,
          { rotate, xPercent, opacity: 0 },
          {
            rotate: 0,
            xPercent: 0,
            opacity: 1,
            ease: "none",
            scrollTrigger: {
              trigger: card,
              // Matches the source interaction's own range: it starts as
              // the card's top edge enters the bottom of the viewport and
              // is fully settled by the halfway point of that transit
              // (its scroll-progress keyframes run 0 → 50, not 0 → 100).
              // A numeric scrub (rather than `true`) adds the same kind
              // of catch-up lag as its "smoothing: 90" setting — still
              // tied to scroll position point-by-point in both
              // directions, just softened instead of razor-sharp.
              start: "top bottom",
              end: "center center",
              scrub: 0.8,
            },
          },
        );
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="relative overflow-hidden bg-surface-2">
      <div
        className="absolute inset-0 overflow-hidden z-0 pointer-events-none"
        aria-hidden="true"
      >
        <div className="absolute -top-[10%] -left-[8%] w-[34vmin] h-[34vmin] bg-accent rounded-[50%] blur-[min(8vw,90px)] opacity-40 will-change-[transform,border-radius] animate-blob-float-1 motion-reduce:animate-none" />
        <div className="absolute -bottom-[12%] -right-[8%] w-[30vmin] h-[30vmin] bg-accent-2 rounded-[50%] blur-[min(8vw,90px)] opacity-40 will-change-[transform,border-radius] animate-blob-float-2 motion-reduce:animate-none" />
        <div className="absolute top-[38%] left-[55%] w-[22vmin] h-[22vmin] bg-accent-3 rounded-[50%] blur-[min(8vw,90px)] opacity-40 will-change-[transform,border-radius] animate-blob-float-3 motion-reduce:animate-none" />
      </div>
      <div className="pt-30 w-full max-tablet:pt-20 max-md:pt-18 max-mobile:pt-16" />
      <div
        className="block mx-auto px-6 mx-auto container w-full before:content-['_'] before:[grid-area:1_/_1_/_2_/_2] before:table after:clear-both after:content-['_'] after:[grid-area:1_/_1_/_2_/_2] after:table max-tablet:px-[1.2rem] max-md:px-[1.0499rem] max-mobile:px-[0.899rem]"
        style={{ position: "relative", zIndex: 1 }}
      >
        <div className="inner-wrappar">
          <div className="flex gap-6 flex-col justify-center items-center max-tablet:gap-[1.2rem] max-md:gap-[1.0499rem] max-mobile:gap-[0.899rem] process">
            <div className="inline-flex gap-4 flex-col flex-1 justify-center items-center max-tablet:gap-[0.8rem] max-md:gap-[0.7rem] max-mobile:gap-[0.6rem] max-mobile:justify-start max-mobile:items-start">
              <div className="font-sans text-dim-gray text-[0.875rem] leading-[1.5em] process">
                <span className="text-[#d7ba5e] orrenge">{"//"}</span>
                <span> WORKING PROCESS</span>
              </div>
              <h2 className="text-left">
                Let&rsquo;s See Our Work Process
              </h2>
            </div>
          </div>
          <div className="pt-15 max-tablet:pt-12 max-md:pt-10.5 max-mobile:pt-9" />

          <div className="grid gap-4 grid-rows-[auto] grid-cols-[repeat(4,1fr)] auto-cols-[1fr] max-tablet:grid-cols-[repeat(2,1fr)] max-mobile:grid-cols-[repeat(1,1fr)]">
            <div className="working-step-main">
              <div className="pt-15 max-tablet:hidden max-tablet:pt-12 max-md:pt-10.5 max-mobile:pt-9" />
              <div
                className="flex gap-[7.16rem] flex-col pt-10 pb-6 px-6 bg-white rounded-2xl max-tablet:pt-8 max-tablet:pb-[1.2rem] max-tablet:px-[1.2rem] max-md:gap-12 max-md:pt-7 max-md:pb-[1.0499rem] max-md:px-[1.0499rem] max-md:h-full max-mobile:pt-6 max-mobile:pb-[0.899rem] max-mobile:px-[0.899rem]"
                ref={(el) => {
                  cardRefs.current[0] = el;
                }}
              >
                <div className="flex justify-center items-center">
                  <div className="font-sans text-[15.625rem] leading-[1em] max-tablet:text-[12rem] max-md:text-[10rem] max-mobile:text-[9rem]">
                    1
                  </div>
                </div>
                <div className="flex gap-2 flex-col justify-start items-start max-tablet:gap-[0.4rem] max-md:gap-[0.35rem] max-mobile:gap-[0.3rem]">
                  <div className="font-sans text-[1.5rem] leading-[1.2em] font-medium max-tablet:text-[1.4rem] max-md:text-[1.3rem]">
                    Discovery
                  </div>
                  <div className="max-w-64 max-mobile:max-w-none">
                    <p className="mb-0 font-sans text-black text-[1rem] leading-[1.5em] font-normal">
                      We dive deep into your brand, audience, and goals to
                      uncover the real opportunity.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="working-step-main step-2">
              <div
                className="flex gap-[7.16rem] flex-col pt-10 pb-6 px-6 bg-white rounded-2xl max-tablet:pt-8 max-tablet:pb-[1.2rem] max-tablet:px-[1.2rem] max-md:gap-12 max-md:pt-7 max-md:pb-[1.0499rem] max-md:px-[1.0499rem] max-md:h-full max-mobile:pt-6 max-mobile:pb-[0.899rem] max-mobile:px-[0.899rem]"
                ref={(el) => {
                  cardRefs.current[1] = el;
                }}
              >
                <div className="flex justify-center items-center step-2">
                  <div className="font-sans text-[15.625rem] leading-[1em] max-tablet:text-[12rem] max-md:text-[10rem] max-mobile:text-[9rem]">
                    2
                  </div>
                </div>
                <div className="flex gap-2 flex-col justify-start items-start max-tablet:gap-[0.4rem] max-md:gap-[0.35rem] max-mobile:gap-[0.3rem] step-2">
                  <div className="font-sans text-[1.5rem] leading-[1.2em] font-medium text-[#d7ba5e] max-tablet:text-[1.4rem] max-md:text-[1.3rem]">
                    Strategy &amp; Design
                  </div>
                  <div className="max-w-64 max-mobile:max-w-none">
                    <p className="mb-0 font-sans text-black text-[1rem] leading-[1.5em] font-normal">
                      We craft a clear direction and design experiences that
                      align creativity with business goals.
                    </p>
                  </div>
                </div>
              </div>
              <div className="pt-15 max-tablet:hidden max-tablet:pt-12 max-md:pt-10.5 max-mobile:pt-9" />
            </div>

            <div className="working-step-main">
              <div className="pt-15 max-tablet:hidden max-tablet:pt-12 max-md:pt-10.5 max-mobile:pt-9" />
              <div
                className="flex gap-[7.16rem] flex-col pt-10 pb-6 px-6 bg-white rounded-2xl max-tablet:pt-8 max-tablet:pb-[1.2rem] max-tablet:px-[1.2rem] max-md:gap-12 max-md:pt-7 max-md:pb-[1.0499rem] max-md:px-[1.0499rem] max-md:h-full max-mobile:pt-6 max-mobile:pb-[0.899rem] max-mobile:px-[0.899rem] step-3"
                ref={(el) => {
                  cardRefs.current[2] = el;
                }}
              >
                <div className="flex justify-center items-center step-3">
                  <div className="font-sans text-[15.625rem] leading-[1em] max-tablet:text-[12rem] max-md:text-[10rem] max-mobile:text-[9rem]">
                    3
                  </div>
                </div>
                <div className="flex gap-2 flex-col justify-start items-start max-tablet:gap-[0.4rem] max-md:gap-[0.35rem] max-mobile:gap-[0.3rem]">
                  <div className="font-sans text-[1.5rem] leading-[1.2em] font-medium max-tablet:text-[1.4rem] max-md:text-[1.3rem]">
                    Build &amp; Launch
                  </div>
                  <div className="max-w-64 max-mobile:max-w-none">
                    <p className="mb-0 font-sans text-black text-[1rem] leading-[1.5em] font-normal">
                      Our team brings the vision to life with precision, testing
                      every detail.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="working-step-main step-4">
              <div
                className="flex gap-[7.16rem] flex-col pt-10 pb-6 px-6 bg-white rounded-2xl max-tablet:pt-8 max-tablet:pb-[1.2rem] max-tablet:px-[1.2rem] max-md:gap-12 max-md:pt-7 max-md:pb-[1.0499rem] max-md:px-[1.0499rem] max-md:h-full max-mobile:pt-6 max-mobile:pb-[0.899rem] max-mobile:px-[0.899rem]"
                ref={(el) => {
                  cardRefs.current[3] = el;
                }}
              >
                <div className="flex justify-center items-center">
                  <div className="font-sans text-[15.625rem] leading-[1em] max-tablet:text-[12rem] max-md:text-[10rem] max-mobile:text-[9rem]">
                    4
                  </div>
                </div>
                <div className="flex gap-2 flex-col justify-start items-start max-tablet:gap-[0.4rem] max-md:gap-[0.35rem] max-mobile:gap-[0.3rem]">
                  <div className="font-sans text-[1.5rem] leading-[1.2em] font-medium max-tablet:text-[1.4rem] max-md:text-[1.3rem]">
                    Optimize &amp; Scale
                  </div>
                  <div className="max-w-64 max-mobile:max-w-none">
                    <p className="mb-0 font-sans text-black text-[1rem] leading-[1.5em] font-normal">
                      We measure performance, refine continuously, and help your
                      brand grow with confidence.
                    </p>
                  </div>
                </div>
              </div>
              <div className="pt-15 max-tablet:hidden max-tablet:pt-12 max-md:pt-10.5 max-mobile:pt-9" />
            </div>
          </div>
        </div>
      </div>
      <div className="pt-20 max-tablet:pt-16 max-md:pt-14 max-mobile:pt-12" />
    </section>
  );
}
