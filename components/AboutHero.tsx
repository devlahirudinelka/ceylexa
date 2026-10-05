"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { gsap } from "@/lib/gsap";
import { CEYLEXA_SOCIALS, OFFICES } from "@/lib/site";
import { SERVICES } from "@/lib/services-data";

const GOLD = "#d7ba5e";

const PILLARS = ["Creativity", "Technology", "Strategy", "Measurable results"];

const STATS = [
  { value: "250+", label: "Brands trust us" },
  { value: String(OFFICES.length).padStart(2, "0"), label: "Offices: Sri Lanka & New Zealand" },
  { value: String(SERVICES.length).padStart(2, "0"), label: "Services under one roof" },
];

// Portrait cards fanned out on the right side of the hero.
const PHOTOS = [
  { src: "/images/hero-2.webp", className: "left-0 top-10 -rotate-[8deg] z-1", depth: 14 },
  { src: "/images/hero-3.webp", className: "left-1/2 top-0 -translate-x-1/2 z-3", depth: 0 },
  { src: "/images/hero-4.webp", className: "right-0 top-10 rotate-[8deg] z-2", depth: -14 },
];

function Sparkle({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" className={className} aria-hidden>
      <path
        d="M10 0C10.34 5.38 14.62 9.66 20 10C14.62 10.34 10.34 14.62 10 20C9.66 14.62 5.38 10.34 0 10C5.38 9.66 9.66 5.38 10 0Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function AboutHero() {
  const rootRef = useRef<HTMLElement>(null);
  const photosRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const root = rootRef.current;
    if (!root) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.1, defaults: { ease: "power3.out" } });
      tl.fromTo("[data-line]", { yPercent: 110 }, { yPercent: 0, duration: 0.9, stagger: 0.1 }, 0)
        .fromTo(
          "[data-fade]",
          { opacity: 0, y: 20, filter: "blur(5px)" },
          { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.7, stagger: 0.08 },
          0.3,
        )
        .fromTo(
          "[data-photo]",
          { opacity: 0, y: 60, scale: 0.9 },
          { opacity: 1, y: 0, scale: 1, duration: 1, stagger: 0.12 },
          0.2,
        );
      gsap.to("[data-spin]", { rotate: 360, duration: 18, ease: "none", repeat: -1 });
    }, root);

    // Photos drift slightly with the pointer.
    const photos = photosRef.current;
    const onMove = (e: MouseEvent) => {
      if (!photos) return;
      const r = photos.getBoundingClientRect();
      const dx = (e.clientX - (r.left + r.width / 2)) / r.width;
      photos.querySelectorAll<HTMLElement>("[data-drift]").forEach((el) => {
        gsap.to(el, { x: dx * Number(el.dataset.drift), duration: 0.8, ease: "power2.out" });
      });
    };
    root.addEventListener("mousemove", onMove);

    return () => {
      root.removeEventListener("mousemove", onMove);
      ctx.revert();
    };
  }, []);

  return (
    <section ref={rootRef} className="relative overflow-hidden">
      {/* Giant brand word in the background, like the home hero */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-24 -z-1 select-none text-center text-[22rem] font-bold leading-[0.9em] text-cultured max-tablet:text-[11rem] max-md:text-[8rem] max-mobile:text-[5.5rem]"
      >
        ABOUT
      </div>

      <div className="mx-auto container px-6 pt-28 max-tablet:pt-20 max-md:pt-16 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-12 lg:gap-10">
          {/* Copy */}
          <div className="lg:col-span-7">
            <div data-fade className="flex items-center gap-1 text-[0.875rem] leading-[1.5em]">
              <span style={{ color: GOLD }}>{"//"}</span>
              <span className="text-dim-gray">ABOUT US</span>
            </div>

            <h1 className="mt-5 text-[5.5rem] font-semibold leading-[1.02em] tracking-tight max-tablet:text-[4.25rem] max-md:text-[3.25rem] max-mobile:text-[2.5rem]">
              <span className="block overflow-hidden">
                <span data-line className="block">We build brands</span>
              </span>
              <span className="block overflow-hidden">
                <span data-line className="flex flex-wrap items-center gap-x-4">
                  people
                  <Sparkle className="w-[0.55em] shrink-0 text-[#d7ba5e]" />
                  <span className="italic" style={{ color: GOLD }}>
                    remember.
                  </span>
                </span>
              </span>
            </h1>

            <p data-fade className="mt-7 max-w-xl text-[1.125rem] leading-[1.5em] text-black max-mobile:text-[1rem]">
              A forward-thinking digital marketing company built on creativity,
              technology, strategy, and measurable results.
            </p>

            <div data-fade className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                href="/project"
                className="group inline-flex items-center gap-2 rounded-full py-3 pl-6 pr-3 font-semibold text-white transition-transform duration-300 hover:-translate-y-0.5"
                style={{ backgroundColor: GOLD }}
              >
                Explore All Work
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-black text-white transition-transform duration-500 group-hover:rotate-45">
                  <ArrowUpRight size={16} />
                </span>
              </Link>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-alabaster py-3 pl-6 pr-3 font-semibold text-black transition-transform duration-300 hover:-translate-y-0.5"
              >
                Get in Touch
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-black transition-transform duration-500 group-hover:rotate-45">
                  <ArrowUpRight size={16} />
                </span>
              </Link>
            </div>

            <div data-fade className="mt-10 flex flex-wrap gap-2">
              {CEYLEXA_SOCIALS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-light-transparent-black px-4 py-1.5 text-[0.75rem] leading-[1.5em] text-dim-gray transition-colors duration-300 hover:border-[#d7ba5e] hover:text-[#d7ba5e]"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>

          {/* Fanned photo stack */}
          <div className="lg:col-span-5">
            <div
              ref={photosRef}
              className="relative mx-auto h-[26rem] w-full max-w-[30rem] max-md:h-[21rem] max-md:max-w-[24rem] max-mobile:h-[17rem] max-mobile:max-w-[19rem]"
            >
              {PHOTOS.map((photo) => (
                <div key={photo.src} data-photo className={`absolute w-[52%] ${photo.className}`}>
                  <div data-drift={photo.depth}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={photo.src}
                      alt=""
                      className="aspect-[4/5] w-full rounded-[1.875rem] object-cover shadow-[0_30px_60px_-30px_rgba(0,0,0,0.45)] max-mobile:rounded-2xl"
                    />
                  </div>
                </div>
              ))}

              {/* Rotating badge */}
              <div data-photo className="absolute -bottom-2 right-2 z-4 max-mobile:right-0">
                <div className="relative flex h-28 w-28 items-center justify-center rounded-full bg-black text-white max-mobile:h-22 max-mobile:w-22">
                  <svg data-spin viewBox="0 0 100 100" className="absolute inset-0 h-full w-full">
                    <defs>
                      <path id="about-badge-circle" d="M50,50 m-37,0 a37,37 0 1,1 74,0 a37,37 0 1,1 -74,0" />
                    </defs>
                    <text fill="currentColor" fontSize="9.5" letterSpacing="2.4" fontWeight="600">
                      <textPath href="#about-badge-circle">
                        SRI LANKA • NEW ZEALAND • CEYLEXA •
                      </textPath>
                    </text>
                  </svg>
                  <Sparkle className="w-6 text-[#d7ba5e]" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div data-fade className="mt-20 grid grid-cols-3 border-t border-light-transparent-black max-md:mt-14 max-mobile:grid-cols-1">
          {STATS.map((stat, i) => (
            <div
              key={stat.label}
              className={`py-8 max-mobile:py-5 ${
                i > 0 ? "border-l border-light-transparent-black pl-8 max-md:pl-5 max-mobile:border-l-0 max-mobile:border-t max-mobile:pl-0" : ""
              }`}
            >
              <div className="text-[3.75rem] font-medium leading-none max-tablet:text-[3rem] max-md:text-[2.25rem]">
                {stat.value}
              </div>
              <div className="mt-2 text-[0.875rem] leading-[1.5em] text-dim-gray">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Pillars strip */}
      <div className="bg-black py-5 text-white max-mobile:py-4">
        <div className="mx-auto container flex flex-wrap items-center justify-between gap-x-8 gap-y-3 px-6 lg:px-8 max-md:justify-center">
          {PILLARS.map((pillar) => (
            <div key={pillar} className="flex items-center gap-3 text-[1.25rem] font-medium max-tablet:text-[1rem]">
              <Sparkle className="w-4 text-[#d7ba5e]" />
              {pillar}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
