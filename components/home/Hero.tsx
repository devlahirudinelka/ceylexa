"use client";

import { useEffect, useRef, useState } from "react";
import { ShieldCheck, Star, Users } from "lucide-react";
import CreamGradientBackground from "./CreamGradientBackground";
import { gsap } from "@/lib/gsap";
import { heroStats } from "@/lib/home-content";
import { SERVICES } from "@/lib/services-data";
import { ArrowButton, Eyebrow, GoldWord, Sparkle } from "@/components/ui/brand";

const icons: Record<string, React.ReactNode> = {
  shield: <ShieldCheck size={16} />,
  star: <Star size={16} />,
  users: <Users size={16} />,
};

// The three promises from the intro line, shown one at a time.
const PROMISES = ["build powerful brands", "connect with their audiences", "grow in the digital world"];

const ROW_A = SERVICES.map((service) => service.title);
const ROW_B = [...ROW_A].reverse();

/** One endless row of outlined words drifting sideways behind the headline. */
function OutlineRow({ words, reverse = false }: { words: string[]; reverse?: boolean }) {
  return (
    <div className="flex overflow-hidden">
      <div data-marquee={reverse ? "reverse" : "forward"} className="flex w-max flex-none will-change-transform">
        {[0, 1].map((copy) => (
          <div key={copy} className="flex flex-none items-center">
            {words.map((word) => (
              <span
                key={`${copy}-${word}`}
                className="flex items-center whitespace-nowrap pr-10 font-sans text-[9rem] font-bold uppercase leading-[1.05em] tracking-tight text-transparent [-webkit-text-stroke:1px_rgba(0,0,0,0.09)] max-tablet:text-[6.5rem] max-md:text-[4.5rem] max-mobile:text-[3.25rem]"
              >
                {word}
                <Sparkle className="ml-10 w-[0.35em] shrink-0 text-[#d7ba5e]/50" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Hero() {
  const rootRef = useRef<HTMLElement>(null);
  const [promise, setPromise] = useState(0);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const ctx = gsap.context(() => {
      // Headline rises line by line, the rest fades up after it.
      const tl = gsap.timeline({ delay: 0.1, defaults: { ease: "power3.out" } });
      tl.fromTo("[data-line]", { yPercent: 110 }, { yPercent: 0, duration: 1, stagger: 0.12 }, 0)
        .fromTo("[data-pill]", { scaleX: 0 }, { scaleX: 1, duration: 0.9, ease: "power4.out" }, 0.45)
        .fromTo("[data-fade]", { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 0.8, stagger: 0.08 }, 0.5);

      if (reduced) return;
      gsap.fromTo('[data-marquee="forward"]', { xPercent: 0 }, { xPercent: -50, duration: 70, ease: "none", repeat: -1 });
      gsap.fromTo('[data-marquee="reverse"]', { xPercent: -50 }, { xPercent: 0, duration: 80, ease: "none", repeat: -1 });
      gsap.to("[data-spin]", { rotate: 360, duration: 14, ease: "none", repeat: -1 });
      gsap.to("[data-sheen]", { xPercent: 220, duration: 2.6, ease: "power1.inOut", repeat: -1, repeatDelay: 1.4 });
    }, root);

    // A soft gold light follows the pointer across the hero.
    const onMove = (e: MouseEvent) => {
      const r = root.getBoundingClientRect();
      root.style.setProperty("--mx", `${e.clientX - r.left}px`);
      root.style.setProperty("--my", `${e.clientY - r.top}px`);
    };
    if (!reduced) root.addEventListener("mousemove", onMove);

    const id = reduced
      ? undefined
      : window.setInterval(() => {
          if (!document.hidden) setPromise((value) => (value + 1) % PROMISES.length);
        }, 2400);

    return () => {
      root.removeEventListener("mousemove", onMove);
      if (id) window.clearInterval(id);
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={rootRef}
      className="relative overflow-hidden bg-background [--mx:70%] [--my:30%]"
    >
      <CreamGradientBackground />

      {/* pointer light */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(520px_circle_at_var(--mx)_var(--my),rgba(215,186,94,0.28),transparent_65%)]"
      />

      {/* outlined service words drifting behind everything */}
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-1/2 flex -translate-y-1/2 select-none flex-col gap-2">
        <OutlineRow words={ROW_A} />
        <OutlineRow words={ROW_B} reverse />
        <OutlineRow words={ROW_A} />
      </div>

      <div className="relative z-10 mx-auto container flex min-h-screen flex-col justify-center px-6 pb-14 pt-32 lg:px-8 max-md:pt-28">
        <div data-fade className="flex items-center justify-between gap-6">
          <Eyebrow>Digital Marketing Agency</Eyebrow>
          <div className="flex items-center gap-2 font-sans text-[0.875rem] text-dim-gray max-mobile:hidden">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#d7ba5e] opacity-70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#d7ba5e]" />
            </span>
            Sri Lanka &amp; New Zealand
          </div>
        </div>

        {/* Headline, with an animated gold pill set into the first line */}
        <h1 className="mt-6 font-sans text-[clamp(2.5rem,7.6vw,8.25rem)] font-semibold leading-[1em] tracking-[-0.03em] text-black">
          <span className="block overflow-hidden pb-[0.06em]">
            <span data-line className="flex flex-wrap items-center gap-x-[0.22em]">
              Your
              <span
                data-pill
                aria-hidden
                className="relative inline-flex h-[0.68em] w-[1.75em] origin-left items-center justify-center overflow-hidden rounded-full bg-black max-mobile:w-[1.4em]"
              >
                <span data-sheen className="absolute inset-y-0 -left-full w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-[#d7ba5e]/70 to-transparent" />
                <span data-spin className="relative flex">
                  <Sparkle className="w-[0.36em] text-[#d7ba5e]" />
                </span>
              </span>
              Partner in
            </span>
          </span>
          <span className="block overflow-hidden pb-[0.12em]">
            <span data-line className="block pr-[0.08em]">
              <GoldWord>Digital Excellence.</GoldWord>
            </span>
          </span>
        </h1>

        <div className="mt-12 grid gap-8 border-t border-light-transparent-black pt-8 lg:grid-cols-12 lg:gap-10 max-md:mt-9">
          <div data-fade className="lg:col-span-5">
            <p className="mb-0 max-w-xl font-sans text-[1.125rem] leading-[1.6em] text-black max-mobile:text-[1rem]">
              We are helping businesses build powerful brands, connect with
              their audiences, and grow in the digital world. We mix big ideas
              with bold execution to craft campaigns that create meaningful
              digital experiences.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <ArrowButton href="/contact">Start a Project</ArrowButton>
              <ArrowButton href="/#process" variant="light">
                See our process
              </ArrowButton>
            </div>
          </div>

          {/* Black card cycling through the three promises */}
          <div data-fade className="lg:col-span-4">
            <div className="flex h-full flex-col justify-between gap-8 rounded-[1.875rem] bg-black p-7 text-white max-mobile:rounded-2xl">
              <div className="flex items-center justify-between font-sans text-[0.8125rem] uppercase">
                <span className="flex items-center gap-1">
                  <span className="text-[#d7ba5e]">{"//"}</span>
                  <span className="text-white/70">We help you</span>
                </span>
                <span className="tabular-nums text-white/50">
                  <span className="text-[#d7ba5e]">{String(promise + 1).padStart(2, "0")}</span> / {String(PROMISES.length).padStart(2, "0")}
                </span>
              </div>
              <div className="relative h-[6.6rem] overflow-hidden max-md:h-[4rem]">
                {PROMISES.map((text, i) => (
                  <div
                    key={text}
                    className="absolute inset-0 flex items-center font-sans text-[clamp(1.375rem,2vw,1.875rem)] font-medium leading-[1.15em] tracking-tight transition-all duration-700 ease-[cubic-bezier(0.65,0,0.35,1)] "
                    style={{
                      transform: `translateY(${(i - promise) * 110}%)`,
                      opacity: i === promise ? 1 : 0,
                    }}
                  >
                    {text}
                  </div>
                ))}
              </div>
              <div className="flex gap-1.5">
                {PROMISES.map((text, i) => (
                  <span
                    key={text}
                    className={`h-1 flex-1 rounded-full transition-colors duration-500 ${i === promise ? "bg-[#d7ba5e]" : "bg-white/15"}`}
                  />
                ))}
              </div>
            </div>
          </div>

          <div data-fade className="flex flex-col justify-between lg:col-span-3">
            {heroStats.map((stat, i) => (
              <div
                key={stat.label}
                className={`flex items-center gap-3 py-3.5 font-sans text-[1rem] font-medium text-black max-md:text-[0.9375rem] ${
                  i > 0 ? "border-t border-light-transparent-black" : ""
                }`}
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-black text-[#d7ba5e]">
                  {icons[stat.icon]}
                </span>
                {stat.label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
