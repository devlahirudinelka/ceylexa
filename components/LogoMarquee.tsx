"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

const LOGOS = [
  "2nd Chance Flowers.webp",
  "BurgerTime.webp",
  "Centro Cafe.webp",
  "Ceylon Wedding Planners.webp",
  "Ceylora.webp",
  "Ceyora Jewelry.webp",
  "Ceyzler.webp",
  "Cinnarooo.webp",
  "Country Bunches.webp",
  "Cyclone Swimminng.webp",
  "DB Ceylon.webp",
  "Dhananjaya Bandara.webp",
  "Doctor Band.webp",
  "Grand Ceylon.webp",
  "Hot Chocolate.webp",
  "Lakdiv.webp",
  "Looks Salon.webp",
  "Lovi.webp",
  "Manjula Handapangoda.webp",
  "Nuwan Wijethunga.webp",
  "Queen of the World.webp",
  "Tandoori Grill.webp",
  "Team T.webp",
];

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
          duration: 78,
          ease: "none",
          repeat: -1,
        }
      );
    });
    return () => ctx.revert();
  }, [reverse]);

  return (
    <div className="logo-marque-list" style={{ overflow: "hidden" }}>
      <div
        ref={trackRef}
        style={{ display: "flex", width: "max-content", gap: "var(--_spacing---spacer--spacing-lg)" }}
      >
        {[0, 1].map((rep) => (
          <div key={rep} style={{ display: "flex", gap: "var(--_spacing---spacer--spacing-lg)" }}>
            {LOGOS.map((logo) => (
              <div key={`${rep}-${logo}`} className="marque-content">
                <Image
                  src={`/images/Clients/${logo}`}
                  alt={logo.replace(/\.webp$/, "")}
                  width={154}
                  height={80}
                  className="marque-logo"
                  style={{ objectFit: "contain" }}
                />
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
      {/* `.logo-marque-main` lays its children out in a row, not stacked
         (no flex-direction: column) — with a second full-width track
         appended, that row previously started 22,632px+ off to the right
         of the (overflow: hidden) viewport and was never actually visible.
         One row, reversed to scroll right-to-left's opposite (i.e. to the
         right) per request, instead of animating a row nobody could see. */}
      <div className="logo-marque-main">
        <MarqueeRow reverse />
      </div>
    </section>
  );
}
