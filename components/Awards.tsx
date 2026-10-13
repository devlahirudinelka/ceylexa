"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

// Recognition copy is from the About Us document.
// Add more awards here when confirmed.
const AWARDS = [
  {
    org: "Popular Awards",
    category: "Most Popular Social Media Agency",
    date: "2024",
  },
];

export default function Awards() {
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const heading = headingRef.current;

    if (!heading) return;

    const ctx = gsap.context(() => {
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (prefersReducedMotion) return;

      gsap.fromTo(
        heading,
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          clearProps: "transform",
        },
      );
    }, heading);

    return () => ctx.revert();
  }, []);

  return (
    <section className="relative">
      <div className="pt-30 w-full max-tablet:pt-20 max-md:pt-18 max-mobile:pt-16" />

      <div className="block mx-auto px-6 max-w-6xl w-full before:content-['_'] before:[grid-area:1_/_1_/_2_/_2] before:table after:clear-both after:content-['_'] after:[grid-area:1_/_1_/_2_/_2] after:table max-tablet:px-[1.2rem] max-md:px-[1.0499rem] max-mobile:px-[0.899rem]">
        <div className="inner-wrappar">
          {/* Section heading — same layout as Team */}
          <div className="flex flex-col items-start justify-start gap-4 max-tablet:gap-[0.8rem] max-md:gap-[0.7rem] max-mobile:gap-[0.6rem]">
           

            <h1 ref={headingRef} className="text-left">
              Awards
            </h1>

            <h3 className="text-left">
              Celebrating the recognition behind our creative journey.
            </h3>
          </div>

          {/* Description — same spacing as Team */}
          <div className="pt-6 w-full max-tablet:pt-[1.2rem] max-md:pt-[1.0499rem] max-mobile:pt-[0.899rem]" />

          <div className="flex flex-col gap-5">
            <p className="mb-0 font-sans text-black text-[1rem] leading-[1.5em] font-normal">
              Our journey is built on creativity, innovation, and a commitment
              to delivering meaningful digital experiences. Recognition
              motivates us to keep raising our standards and creating work that
              makes a difference.
            </p>

            <p className="mb-0 font-sans text-black text-[1rem] leading-[1.5em] font-normal">
              We value the trust of our clients and the dedication of our team.
              Every project is an opportunity to combine creative thinking with
              strategic execution and deliver results that matter.
            </p>
          </div>

          {/* Awards list */}
          <div className="pt-15 w-full max-tablet:pt-12 max-md:pt-10.5 max-mobile:pt-9" />

          {/* <div className="flex flex-col gap-4 max-tablet:gap-[0.8rem] max-md:gap-[0.7rem] max-mobile:gap-3">
            {AWARDS.map((award) => (
              <div
                key={`${award.org}-${award.date}`}
                className="flex justify-between items-center pb-4 border-b border-b-light-transparent-black max-tablet:pb-[0.8rem] max-md:pb-[0.7rem] max-mobile:items-start max-mobile:pb-3"
              >
                <div className="award-left-item">
                  <div className="font-sans text-[1.5rem] leading-[1.2em] font-normal max-tablet:text-[1.4rem] max-md:text-[1.3rem]">
                    {award.org}
                  </div>
                </div>

                <div className="flex gap-10 justify-end items-center max-tablet:gap-8 max-md:gap-7 max-mobile:gap-[0.899rem] max-mobile:items-end max-mobile:flex-col">
                  <div className="font-sans text-dim-gray text-[0.875rem] leading-[1.5em]">
                    {award.category}
                  </div>

                  <div className="font-sans text-dim-gray text-[0.875rem] leading-[1.5em]">
                    {award.date}
                  </div>
                </div>
              </div>
            ))}
          </div> */}
        </div>
      </div>

      <div className="pt-30 w-full max-tablet:pt-20 max-md:pt-18 max-mobile:pt-16" />
    </section>
  );
}
