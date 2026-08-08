"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

// The source template's marquee logos are large inline decorative SVGs
// specific to its demo brand set; those weren't part of the assets we
// downloaded, so each slot below is a text wordmark placeholder styled
// with the exact .marque-content / .marque-logo classes from the ported CSS.
const LOGOS = ["Acme", "Lumen", "Northwind", "Vertex", "Solace", "Orbit", "Halcyon"];

function MarqueeRow({ reverse = false }: { reverse?: boolean }) {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { xPercent: reverse ? -50 : 0 },
        {
          xPercent: reverse ? 0 : -50,
          duration: 28,
          ease: "none",
          repeat: -1,
        }
      );
    });
    return () => ctx.revert();
  }, [reverse]);

  return (
    <div className="logo-marque-list" style={{ overflow: "hidden" }}>
      <div ref={trackRef} style={{ display: "flex", width: "max-content" }}>
        {[0, 1].map((rep) => (
          <div key={rep} style={{ display: "flex" }}>
            {LOGOS.map((logo) => (
              <div key={`${rep}-${logo}`} className="marque-content">
                <span className="marque-logo" style={{ textAlign: "center", fontWeight: 600 }}>
                  {logo}
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function LogoMarquee() {
  return (
    <section className="section">
      <div className="space-29xl" />
      <div className="logo-marque-main">
        <MarqueeRow />
        <MarqueeRow reverse />
      </div>
    </section>
  );
}
