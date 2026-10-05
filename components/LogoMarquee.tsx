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
    <div className="flex flex-none justify-center items-start" style={{ overflow: "hidden" }}>
      <div
        ref={trackRef}
        className="flex w-max gap-3 max-tablet:gap-[0.6rem] max-md:gap-[0.5249rem] max-mobile:gap-[0.449rem]"
      >
        {[0, 1].map((rep) => (
          <div key={rep} className="flex gap-3 max-tablet:gap-[0.6rem] max-md:gap-[0.5249rem] max-mobile:gap-[0.449rem]">
            {LOGOS.map((logo) => (
              <div key={`${rep}-${logo}`} className="flex flex-col flex-none justify-center items-center py-8 px-12 h-44 border border-[#0000001a] rounded-xl max-tablet:py-8 max-tablet:px-12 max-tablet:h-40 max-md:py-7 max-md:px-[2.44rem] max-md:h-28 max-mobile:p-6 max-mobile:h-20">
                <Image
                  src={`/images/Clients/${logo}`}
                  alt={logo.replace(/\.webp$/, "")}
                  width={154}
                  height={80}
                  className="w-40 max-tablet:w-34 max-md:w-32 max-mobile:w-28"
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
    <section className="relative">
      <div className="pt-27 w-full max-tablet:pt-24 max-md:pt-18 max-mobile:pt-[3.6rem]" />
      {/* `.logo-marque-main` lays its children out in a row, not stacked
         (no flex-direction: column) — with a second full-width track
         appended, that row previously started 22,632px+ off to the right
         of the (overflow: hidden) viewport and was never actually visible.
         One row, reversed to scroll right-to-left's opposite (i.e. to the
         right) per request, instead of animating a row nobody could see. */}
      <div className="flex overflow-hidden justify-start items-center">
        <MarqueeRow reverse />
      </div>
    </section>
  );
}
