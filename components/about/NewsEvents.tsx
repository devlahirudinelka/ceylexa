"use client";

import { useEffect, useRef } from "react";
import NewsCard from "@/components/NewsCard";
import { NEWS } from "@/lib/news";
import { gsap } from "@/lib/gsap";

function ArrowIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      viewBox="0 0 20 20"
      fill="none"
      className="relative z-[2] flex-none w-5 text-white"
    >
      <path
        d="M17.3172 10.4425L11.6922 16.0675C11.5749 16.1848 11.4159 16.2507 11.25 16.2507C11.0841 16.2507 10.9251 16.1848 10.8078 16.0675C10.6905 15.9503 10.6247 15.7912 10.6247 15.6253C10.6247 15.4595 10.6905 15.3004 10.8078 15.1832L15.3664 10.6253H3.125C2.95924 10.6253 2.80027 10.5595 2.68306 10.4423C2.56585 10.3251 2.5 10.1661 2.5 10.0003C2.5 9.83459 2.56585 9.67562 2.68306 9.55841C2.80027 9.4412 2.95924 9.37535 3.125 9.37535H15.3664L10.8078 4.81753C10.6905 4.70026 10.6247 4.5412 10.6247 4.37535C10.6247 4.2095 10.6905 4.05044 10.8078 3.93316C10.9251 3.81588 11.0841 3.75 11.25 3.75C11.4159 3.75 11.5749 3.81588 11.6922 3.93316L17.3172 9.55816C17.3753 9.61621 17.4214 9.68514 17.4529 9.76101C17.4843 9.83688 17.5005 9.91821 17.5005 10.0003C17.5005 10.0825 17.4843 10.1638 17.4529 10.2397C17.4214 10.3156 17.3753 10.3845 17.3172 10.4425Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function NewsEvents() {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const heading = headingRef.current;
    const subtitle = subtitleRef.current;
    const description = descriptionRef.current;
    const cards = cardsRef.current;

    if (!heading || !subtitle || !description || !cards) return;

    const elements = [
      heading,
      subtitle,
      ...Array.from(description.children),
      ...Array.from(cards.children),
    ];

    const animation = gsap.fromTo(
      elements,
      {
        opacity: 0,
        y: 24,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        stagger: 0.12,
        ease: "power3.out",
        paused: true,
      },
    );

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (mediaQuery.matches) {
      gsap.set(elements, { opacity: 1, y: 0 });
    } else {
      animation.play();
    }

    return () => {
      animation.kill();
      gsap.set(elements, { clearProps: "all" });
    };
  }, []);

  return (
    <section className="relative">
      <div className="max-w-7xl mx-auto block w-full px-6 before:table before:content-['_'] before:[grid-area:1_/_1_/_2_/_2] after:table after:clear-both after:content-['_'] after:[grid-area:1_/_1_/_2_/_2] max-tablet:px-[1.2rem] max-md:px-[1.0499rem] max-mobile:px-[0.899rem]">
        <div className="inner-wrappar">
          {/* Section label */}

          <div className="w-full pt-4 max-tablet:pt-[0.8rem] max-md:pt-[0.7rem] max-mobile:pt-[0.6rem]" />

          {/* Main heading */}
          <h2 ref={headingRef} className="text-left">
            Latest News &amp; Events
          </h2>

          <div className="w-full pt-4 max-tablet:pt-[0.8rem] max-md:pt-[0.7rem] max-mobile:pt-[0.6rem]" />

          {/* Subtitle */}
          <h3 ref={subtitleRef} className="text-left">
            Stories, milestones, and moments from our journey.
          </h3>

          <div className="w-full pt-4 max-tablet:pt-[0.8rem] max-md:pt-[0.7rem] max-mobile:pt-[0.6rem]" />

          {/* Section description */}
          <div
            ref={descriptionRef}
            className="w-full max-w-7xl flex flex-col gap-5"
          >
            <p className="mb-0 font-sans text-[1rem] font-normal leading-[1.5em] text-black">
              <strong>Stay connected with Ceylexa journey.</strong>
            </p>

            <p className="mb-0 font-sans text-[1rem] font-normal leading-[1.5em] text-black">
              At Ceylexa, we take pride in our journey of excellence, having
              participated in and won multiple industry awards while
              representing Sri Lanka on prestigious international stages. Our
              work has been recognized for its creativity, innovation, and
              measurable impact earning us accolades across Digital Marketing,
              Web Design and Technology Innovation.
            </p>

            <p className="mb-0 font-sans text-[1rem] font-normal leading-[1.5em] text-black">
              Beyond awards, our projects have been showcased in global forums,
              positioning Ceylexa as a trusted name in delivering world-class
              digital solutions. These achievements reflect our commitment to
              pushing boundaries, setting benchmarks, and making Sri Lanka proud
              in the international digital arena.
            </p>
          </div>

          <div className="w-full pt-15 max-tablet:pt-12 max-md:pt-10.5 max-mobile:pt-9" />

          {/* News cards */}
          <div ref={cardsRef} className="grid gap-5 md:grid-cols-3">
            {NEWS.slice(0, 6).map((item) => (
              <NewsCard key={item.slug} item={item} />
            ))}
          </div>

          {/* View all news button - enable when needed */}
          {/*
          <div className="pt-10">
            <Link
              href="/news"
              className="inline-flex relative overflow-hidden gap-2 justify-center items-center rounded-[6.25rem] bg-[#d7ba5e] px-6 py-3 text-white max-w-full max-tablet:gap-[0.4rem] max-tablet:py-[0.8rem] max-tablet:px-[1.2rem] max-md:gap-[0.35rem] max-md:py-[0.7875rem] max-md:px-[1.0499rem] max-mobile:gap-[0.3rem] max-mobile:py-[0.825rem] max-mobile:px-[0.899rem]"
            >
              <div className="h-6 overflow-hidden">
                <div className="relative z-[2] font-semibold leading-[1.5em]">
                  View all news
                </div>
                <div className="relative z-[2] font-semibold leading-[1.5em]">
                  View all news
                </div>
              </div>

              <div className="flex max-w-[1.2rem] items-center justify-start overflow-hidden">
                <ArrowIcon />
                <ArrowIcon />
              </div>

              <div className="absolute -bottom-4 left-0 top-auto h-4 w-4 rounded-full bg-black" />
            </Link>
          </div>
          */}
        </div>
      </div>

      <div className="w-full pt-30 max-tablet:pt-20 max-md:pt-18 max-mobile:pt-16" />
    </section>
  );
}
