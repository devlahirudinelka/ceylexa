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
    const cards = cardRefs.current.filter((el): el is HTMLDivElement => el !== null);
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
          }
        );
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="section bg-image">
      <div className="space-xxxl" />
      <div className="w-layout-blockcontainer container regular w-container">
        <div className="inner-wrappar">
          <div className="featured-work-title process">
            <div className="testimonial-header-left">
              <div className="font-size-xsm process">
                <span className="highlight-text orrenge">{"//"}</span>
                <span> WORKING PROCESS</span>
              </div>
              <h2 className="heading-style-h2">Let&rsquo;s See Our Work Process</h2>
            </div>
          </div>
          <div className="spaching-20-xl" />

          <div className="working-process-step">
            <div className="working-step-main">
              <div className="spaching-20-xl hide-tablet" />
              <div
                className="process-card-wrapper"
                ref={(el) => {
                  cardRefs.current[0] = el;
                }}
              >
                <div className="step-noumber-wrapper">
                  <div className="font-super-xl">1</div>
                </div>
                <div className="step-contant-wrapper">
                  <div className="font-size-lg">Discovery</div>
                  <div className="max-width-16">
                    <p className="font-size-sm">
                      We dive deep into your brand, audience, and goals to uncover the real
                      opportunity.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="working-step-main step-2">
              <div
                className="process-card-wrapper"
                ref={(el) => {
                  cardRefs.current[1] = el;
                }}
              >
                <div className="step-noumber-wrapper step-2">
                  <div className="font-super-xl">2</div>
                </div>
                <div className="step-contant-wrapper step-2">
                  <div className="font-size-lg brand-color">Strategy &amp; Design</div>
                  <div className="max-width-16">
                    <p className="font-size-sm">
                      We craft a clear direction and design experiences that align creativity
                      with business goals.
                    </p>
                  </div>
                </div>
              </div>
              <div className="spaching-20-xl hide-tablet" />
            </div>

            <div className="working-step-main">
              <div className="spaching-20-xl hide-tablet" />
              <div
                className="process-card-wrapper step-3"
                ref={(el) => {
                  cardRefs.current[2] = el;
                }}
              >
                <div className="step-noumber-wrapper step-3">
                  <div className="font-super-xl">3</div>
                </div>
                <div className="step-contant-wrapper">
                  <div className="font-size-lg">Build &amp; Launch</div>
                  <div className="max-width-16">
                    <p className="font-size-sm">
                      Our team brings the vision to life with precision, testing every detail.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="working-step-main step-4">
              <div
                className="process-card-wrapper"
                ref={(el) => {
                  cardRefs.current[3] = el;
                }}
              >
                <div className="step-noumber-wrapper">
                  <div className="font-super-xl">4</div>
                </div>
                <div className="step-contant-wrapper">
                  <div className="font-size-lg">Optimize &amp; Scale</div>
                  <div className="max-width-16">
                    <p className="font-size-sm">
                      We measure performance, refine continuously, and help your product grow
                      with confidence.
                    </p>
                  </div>
                </div>
              </div>
              <div className="spaching-20-xl hide-tablet" />
            </div>
          </div>
        </div>
      </div>
      <div className="speachng-28xl" />
    </section>
  );
}
