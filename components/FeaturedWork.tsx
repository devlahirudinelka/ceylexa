"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "@/lib/gsap";
import { PROJECTS } from "@/lib/projects";

const FEATURED = PROJECTS.slice(0, 6);

const STACK_TOP = "8vh";

function ArrowIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 32 32" fill="none" className="w-8 h-8 text-ghost-white max-tablet:w-[1.8rem] max-tablet:h-[1.8rem] max-md:w-7 max-md:h-7 max-mobile:w-6 max-mobile:h-6">
      <path
        d="M25.0006 8V21C25.0006 21.2652 24.8952 21.5196 24.7077 21.7071C24.5201 21.8946 24.2658 22 24.0006 22C23.7353 22 23.481 21.8946 23.2934 21.7071C23.1059 21.5196 23.0006 21.2652 23.0006 21V10.4137L8.70806 24.7075C8.52042 24.8951 8.26592 25.0006 8.00056 25.0006C7.73519 25.0006 7.4807 24.8951 7.29306 24.7075C7.10542 24.5199 7 24.2654 7 24C7 23.7346 7.10542 23.4801 7.29306 23.2925L21.5868 9H11.0006C10.7353 9 10.481 8.89464 10.2934 8.70711C10.1059 8.51957 10.0006 8.26522 10.0006 8C10.0006 7.73478 10.1059 7.48043 10.2934 7.29289C10.481 7.10536 10.7353 7 11.0006 7H24.0006C24.2658 7 24.5201 7.10536 24.7077 7.29289C24.8952 7.48043 25.0006 7.73478 25.0006 8Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function FeaturedWork() {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const cards = cardRefs.current.filter((el): el is HTMLDivElement => el !== null);
    if (cards.length < 2) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      cards.forEach((card, i) => {
        const next = cards[i + 1];
        if (!next) return;

        gsap.set(card, { transformOrigin: "center top" });
        gsap.to(card, {
          scale: 0.94,
          opacity: 0.82,
          ease: "none",
          scrollTrigger: {
            trigger: next,
            start: "top bottom",
            end: "top top",
            scrub: true,
          },
        });
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="relative">
      <div className="pt-27 w-full max-tablet:pt-24 max-md:pt-18 max-mobile:pt-[3.6rem]" />
      <div className="block mx-auto px-6 max-w-[120rem] w-full before:content-['_'] before:[grid-area:1_/_1_/_2_/_2] before:table after:clear-both after:content-['_'] after:[grid-area:1_/_1_/_2_/_2] after:table max-tablet:px-[1.2rem] max-md:px-[1.0499rem] max-mobile:px-[0.899rem]">
        <div className="inner-wrappar">
          <div className="flex gap-6 flex-col justify-center items-center max-tablet:gap-[1.2rem] max-md:gap-[1.0499rem] max-mobile:gap-[0.899rem]">
            <div className="inline-flex gap-4 flex-col flex-1 justify-center items-center max-tablet:gap-[0.8rem] max-md:gap-[0.7rem] max-mobile:gap-[0.6rem] max-mobile:justify-start max-mobile:items-start">
              <div className="font-sans text-dim-gray text-[0.875rem] leading-[1.5em]">
                <span className="text-[#d7ba5e] orrenge">{"// "}</span>Recent Work
              </div>
              <h2 className="font-sans text-[3.75rem] leading-[1.2em] font-medium text-left max-tablet:text-[3rem] max-md:text-[2.5rem] max-mobile:text-[2.25rem]">Growth looks different for every brand</h2>
            </div>
          </div>
          <div className="pt-15 w-full max-tablet:pt-12 max-md:pt-10.5 max-mobile:pt-9" />
          <div className="flex gap-6 flex-col px-6 max-tablet:gap-[1.2rem] max-tablet:px-0 max-md:gap-[1.0499rem] max-mobile:gap-[0.899rem]">
            <div className="w-dyn-list">
              <div role="list" className="flex gap-6 flex-col max-tablet:gap-[1.2rem] max-md:gap-[1.0499rem] max-mobile:gap-[0.899rem] w-dyn-items">
                {FEATURED.map((project, i) => (
                  <div
                    key={project.href}
                    ref={(el) => {
                      cardRefs.current[i] = el;
                    }}
                    role="listitem"
                    className="perspective-[1500px] w-dyn-item"
                    style={{ position: "sticky", top: STACK_TOP, zIndex: i + 1 }}
                  >
                    <a
                      href={project.href}
                      className="flex relative overflow-hidden flex-col max-w-full h-auto bg-[#f4f5f9] border border-light-transparent-black rounded-4xl"
                    >
                      <div
                        className="relative min-h-[40rem] bg-position-[50%] bg-no-repeat bg-cover max-tablet:min-h-88 max-md:min-h-80 max-mobile:min-h-72"
                        style={{ backgroundImage: `url("${project.image}")` }}
                      >
                        <div className="absolute inset-x-0 bottom-0 h-2/3 bg-linear-to-t from-black/85 via-black/25 to-transparent" />
                        {/* <div className="arrow">
                          <ArrowIcon />
                        </div> */}
                      </div>
                      <div className="flex gap-6 flex-col items-center p-10 text-center max-tablet:gap-[1.2rem] max-tablet:p-8 max-md:gap-[1.0499rem] max-md:p-7 max-mobile:gap-[0.899rem] max-mobile:p-6 absolute bottom-0 left-0 right-0 w-full">
                        <div className="flex gap-6 justify-center items-center w-full text-[rgb(255_255_255_/_78%)] max-tablet:gap-[1.2rem] max-md:gap-[1.0499rem] max-mobile:gap-[0.899rem]">
                          <div className="mb-0 font-sans text-[rgb(255_255_255_/_78%)] text-[1rem] leading-[1.5em] font-normal">{project.date}</div>
                          <div className="mb-0 font-sans text-[rgb(255_255_255_/_78%)] text-[1rem] leading-[1.5em] font-normal">{project.category}</div>
                        </div>
                        <div className="flex gap-3 flex-col justify-center items-center max-tablet:gap-[0.6rem] max-md:gap-[0.5249rem] max-mobile:gap-[0.449rem]">
                          <div className="font-sans text-white text-[3.25rem] leading-[1.2em] font-semibold text-shadow-[0_1px_12px_rgb(0_0_0_/_35%)] max-tablet:text-[3rem] max-md:text-[2.5rem]">{project.title}</div>
                          <div className="mb-0 font-sans text-[rgb(255_255_255_/_78%)] text-[1rem] leading-[1.5em] font-normal">{project.tags}</div>
                        </div>
                      </div>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="pt-15 w-full max-tablet:pt-12 max-md:pt-10.5 max-mobile:pt-9" />
          <div className="flex justify-center">
            <Link href="/project" className="mb-0 font-sans text-black text-[1rem] leading-[1.5em] font-normal underline-offset-4">
              View all projects
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
