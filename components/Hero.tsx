"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

const CARDS = [
  {
    id: "_1",
    className: "absolute overflow-hidden z-1 w-full h-full",
    imgClassName: "object-cover w-full h-full rounded-[1.875rem] transform-3d transform-[rotateX(0)_rotateY(10deg)_rotateZ(0)]",
    transform:
      "translate3d(-72%, 0, -800px) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
    src: "/images/hero-1.webp",
    alt: "Person wearing a futuristic white helmet with a pink visor and matching pink headphones, dressed in an orange jacket against a clear blue sky.",
  },
  {
    id: "_2",
    className: "absolute overflow-hidden z-1 w-full h-full",
    imgClassName: "object-cover w-full h-full rounded-[1.875rem] transform-3d transform-[rotateX(0)_rotateY(10deg)_rotateZ(0)]",
    transform:
      "translate3d(-40%, 0, -550px) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
    src: "/images/hero-2.webp",
    alt: "Hand holding a melting chocolate bar partially wrapped in orange packaging.",
  },
  {
    id: "_3",
    className: "absolute overflow-hidden z-1 w-full h-full",
    imgClassName: "object-cover w-full h-full rounded-[1.875rem] transform-3d transform-[rotateX(0)_rotateY(10deg)_rotateZ(0)]",
    transform:
      "translate3d(0%, 0, 0px) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
    src: "/images/hero-3.webp",
    alt: "Man with buzz cut and black round glasses wearing a white button-up shirt against a bright pink background.",
  },
  {
    id: "_4",
    className: "absolute overflow-hidden z-1 w-full h-full",
    imgClassName: "object-cover w-full h-full rounded-[1.875rem] transform-3d transform-[rotateX(0)_rotateY(10deg)_rotateZ(0)]",
    transform:
      "translate3d(45%, 0, -550px) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
    src: "/images/hero-4.webp",
    alt: "Young person wearing yellow sunglasses and a colorful patterned jacket against an orange background.",
  },
  {
    id: "_5",
    className: "absolute overflow-hidden z-1",
    imgClassName: "object-cover w-full h-full rounded-[1.875rem] transform-3d transform-[rotateX(0)_rotateY(10deg)_rotateZ(0)]",
    transform:
      "translate3d(72%, 0, -800px) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
    src: "/images/hero-5.webp",
    alt: "Young woman with brown hair in a ponytail, wearing a dark hoodie and smiling gently against a plain gray background.",
  },
  {
    id: "_6",
    className: "absolute overflow-hidden z-1",
    imgClassName: "object-cover w-full h-full rounded-[1.875rem] transform-3d transform-[rotateX(0)_rotateY(10deg)_rotateZ(0)]",
    transform:
      "translate3d(100%, 0, -800px) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
    src: "/images/hero-6.webp",
    alt: "Young woman with shoulder-length dark hair and hazel eyes wearing a red lace top with a satin bow tie collar.",
    startOpacity: 0,
  },
];

// Slot positions of the 3D card stack, left to right. Slot 2 is the centre
// (front) card. Each step the whole stack shifts one slot to the left, so the
// images slide through one by one.
const SLOTS = [
  { x: -72, z: -800 },
  { x: -40, z: -550 },
  { x: 0, z: 0 },
  { x: 45, z: -550 },
  { x: 72, z: -800 },
  { x: 100, z: -1000 },
];
const SLIDE_INTERVAL_MS = 3200;

function StarIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 12 12" fill="none" className="w-3 text-scarlet">
      <path
        d="M10.9906 5.36147L8.87657 7.20647L9.50985 9.95334C9.54337 10.0969 9.5338 10.2472 9.48236 10.3854C9.43092 10.5236 9.33989 10.6436 9.22064 10.7303C9.10139 10.8171 8.95922 10.8667 8.8119 10.8731C8.66458 10.8795 8.51865 10.8423 8.39235 10.7662L5.99657 9.31303L3.60595 10.7662C3.47965 10.8423 3.33372 10.8795 3.1864 10.8731C3.03909 10.8667 2.89691 10.8171 2.77766 10.7303C2.65841 10.6436 2.56738 10.5236 2.51594 10.3854C2.4645 10.2472 2.45494 10.0969 2.48845 9.95334L3.12079 7.20928L1.00626 5.36147C0.894421 5.26501 0.813549 5.13768 0.773787 4.99544C0.734024 4.85321 0.737142 4.7024 0.782747 4.56193C0.828353 4.42145 0.914417 4.29757 1.03015 4.20582C1.14588 4.11407 1.28612 4.05852 1.43329 4.04616L4.22048 3.80475L5.30845 1.20975C5.36526 1.07359 5.4611 0.957276 5.58388 0.875465C5.70666 0.793654 5.85091 0.75 5.99845 0.75C6.14599 0.75 6.29023 0.793654 6.41302 0.875465C6.5358 0.957276 6.63163 1.07359 6.68845 1.20975L7.7797 3.80475L10.5659 4.04616C10.7131 4.05852 10.8534 4.11407 10.9691 4.20582C11.0848 4.29757 11.1709 4.42145 11.2165 4.56193C11.2621 4.7024 11.2652 4.85321 11.2255 4.99544C11.1857 5.13768 11.1048 5.26501 10.993 5.36147H10.9906Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function Hero() {
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const heroTextRef = useRef<HTMLDivElement>(null);
  const subtitleWrapRef = useRef<HTMLDivElement>(null);
  const reviewWrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.1 });

      if (headingRef.current) {
        tl.fromTo(
          headingRef.current,
          { opacity: 0, y: 24 },
          { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" },
          0
        );
      }

      if (imageContainerRef.current) {
        tl.fromTo(
          imageContainerRef.current,
          { opacity: 0, scale: 0.85 },
          { opacity: 1, scale: 1, duration: 0.9, ease: "power3.out" },
          0.15
        );

        // Card _6 (hero-6.webp) starts at opacity 0 (see CARDS above,
        // `startOpacity: 0`) so it can fade in on its own beat instead of
        // popping in with the rest of the stack. Nothing was ever
        // animating it back to visible, so it stayed invisible for good —
        // bring it in explicitly, just after the container reveal.
        const lastCard = imageContainerRef.current.querySelector<HTMLElement>('[data-card="_6"]');
        if (lastCard) {
          tl.fromTo(
            lastCard,
            { opacity: 0 },
            { opacity: 1, duration: 0.6, ease: "power2.out" },
            0.55
          );
        }
      }

      if (heroTextRef.current) {
        tl.fromTo(
          heroTextRef.current,
          { opacity: 0, scale: 0.9 },
          { opacity: 1, scale: 1, duration: 0.9, ease: "power3.out" },
          0.15
        );
      }

      if (subtitleWrapRef.current) {
        tl.fromTo(
          subtitleWrapRef.current,
          { filter: "blur(5px)", yPercent: 100 },
          { filter: "blur(0px)", yPercent: 0, duration: 0.7, ease: "power3.out" },
          0.5
        );
      }

      if (reviewWrapRef.current) {
        tl.fromTo(
          reviewWrapRef.current,
          { filter: "blur(5px)", yPercent: 100 },
          { filter: "blur(0px)", yPercent: 0, duration: 0.7, ease: "power3.out" },
          0.6
        );
      }
    });

    return () => ctx.revert();
  }, []);

  // Slide-by-slide carousel: every few seconds each card moves one slot to the
  // left; the card leaving the first slot fades out, jumps to the far right
  // slot and fades back in.
  useEffect(() => {
    const container = imageContainerRef.current;
    if (!container) return;
    const cards = Array.from(container.querySelectorAll<HTMLElement>("[data-card]"));
    if (cards.length !== SLOTS.length) return;

    const slotOf = cards.map((_, i) => i);
    cards.forEach((card, i) =>
      gsap.set(card, { x: 0, y: 0, xPercent: SLOTS[i].x, z: SLOTS[i].z })
    );

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let paused = false;
    const step = () => {
      if (paused || document.hidden) return;
      cards.forEach((card, i) => {
        const from = slotOf[i];
        const to = (from + SLOTS.length - 1) % SLOTS.length;
        slotOf[i] = to;
        const slot = SLOTS[to];
        if (from === 0) {
          gsap
            .timeline()
            .to(card, { opacity: 0, duration: 0.25, ease: "power1.in" })
            .set(card, { xPercent: slot.x, z: slot.z })
            .to(card, { opacity: 1, duration: 0.45, ease: "power1.out" });
        } else {
          gsap.to(card, { xPercent: slot.x, z: slot.z, duration: 0.9, ease: "power3.inOut" });
        }
      });
    };

    const onEnter = () => (paused = true);
    const onLeave = () => (paused = false);
    container.addEventListener("mouseenter", onEnter);
    container.addEventListener("mouseleave", onLeave);

    let interval: number | undefined;
    const start = window.setTimeout(() => {
      interval = window.setInterval(step, SLIDE_INTERVAL_MS);
    }, 2600); // let the intro animation finish first

    return () => {
      window.clearTimeout(start);
      if (interval) window.clearInterval(interval);
      container.removeEventListener("mouseenter", onEnter);
      container.removeEventListener("mouseleave", onLeave);
      gsap.killTweensOf(cards);
    };
  }, []);

  return (
    <section className="relative w-full max-md:pt-0 ">
      <div className="pt-17 max-tablet:pt-[3.4rem] max-md:pt-[2.97rem] max-mobile:pt-[2.55rem]" />
      <div className=" block mx-auto px-6 max-w-[120rem] w-full before:content-['_'] before:[grid-area:1_/_1_/_2_/_2] before:table after:clear-both after:content-['_'] after:[grid-area:1_/_1_/_2_/_2] after:table max-tablet:px-[1.2rem] max-md:px-[1.0499rem] max-mobile:px-[0.899rem]">
        <div className="overflow-hidden">
          <h1
            className="mx-auto  text-[6.5rem] leading-[1.05em] font-semibold tracking-tight text-center max-tablet:text-[4.75rem] max-md:text-[3.5rem] max-mobile:text-[2.5rem]"
            ref={headingRef}
          >
            Your partner in digital
          </h1>
        </div>
        <div className="flex relative justify-center items-center pb-12 max-tablet:pb-[2.4rem] max-md:pb-[2.09rem] max-mobile:mt-[1.2rem] max-mobile:pb-[1.799rem]">
          <div className="relative z-9">
            <div
              className="flex relative justify-center items-center w-[23.1rem] h-[29.1rem] perspective-[3000px] transform-3d transform-[rotateX(0.5deg)rotateY(0)rotateZ(0)] max-tablet:w-76 max-tablet:h-96 max-md:w-64 max-md:h-88 max-mobile:w-58 max-mobile:h-78"
              ref={imageContainerRef}
            >
              {CARDS.map((card) => (
                <div
                  key={card.id}
                  style={{
                    transform: card.transform,
                    transformStyle: "preserve-3d",
                    opacity: card.startOpacity,
                  }}
                  data-card={card.id}
                  className={card.className}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    sizes="(max-width: 767px) 100vw, (max-width: 991px) 728px, 940px"
                    alt={card.alt}
                    src={card.src}
                    loading="lazy"
                    className={card.imgClassName}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="absolute -z-1">
            <div
              className="text-cultured text-[25rem] leading-[0.9em] font-bold text-center max-tablet:text-[11.1rem] max-md:text-[9.3rem] max-mobile:text-[8rem]"
              ref={heroTextRef}
            >
              CEYLEXA
            </div>
          </div>
        </div>
        <div className="flex overflow-hidden flex-col justify-start items-center">
          <div ref={subtitleWrapRef} className="max-w-[35rem]">
            <div className="text-[1.75rem] leading-[1.2em] font-semibold text-center max-tablet:text-[1.5rem] max-md:text-[1.25rem] max-mobile:text-[1.125rem]">
              A digital marketing agency helping brands build, connect, and grow
              — from Sri Lanka and New Zealand
            </div>
          </div>
          <div className="pt-6 w-full max-tablet:pt-[1.2rem] max-md:pt-[1.0499rem] max-mobile:pt-[0.899rem]" />
          <div
            ref={reviewWrapRef}
            className="flex gap-4 max-tablet:gap-[0.8rem] max-md:gap-[2.09rem] max-md:justify-center max-md:items-center max-md:w-full max-mobile:gap-6 max-mobile:flex-col"
          >
            <div className="flex gap-3 justify-start items-center max-tablet:gap-[0.6rem] max-md:gap-[0.5249rem] max-mobile:gap-3">
              <div className="flex justify-start items-center pl-2 max-tablet:pl-[0.4rem] max-md:pl-[0.35rem] max-mobile:pl-[0.3rem]">
                {[
                  "/images/reviewer-1.webp",
                  "/images/reviewer-2.webp",
                  "/images/reviewer-3.webp",
                ].map((src) => (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    key={src}
                    src={src}
                    loading="lazy"
                    alt="Reviewer portrait."
                    className="-ml-2 aspect-square w-9 h-9 object-cover rounded-full"
                  />
                ))}
              </div>
              <div className="max-w-28">
                <div className="font-sans text-black text-[0.875rem] leading-[1.5em]">
                  Trusted by 250+ Brands
                </div>
              </div>
            </div>
            <div className="flex gap-3 justify-start items-center max-tablet:gap-[0.6rem] max-md:gap-[0.5249rem] max-mobile:gap-[0.449rem]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              {/* <img
                  src="/images/rating-badge.webp"
                  loading="lazy"
                  alt="Blue letter C with a red circle in the center."
                  className="w-6"
                /> */}
              <div className="flex gap-0.5 flex-col max-tablet:gap-[0.1rem] max-md:gap-[0.0875rem] max-mobile:gap-[0.075rem]">
                <div className="font-sans text-black text-[0.875rem] leading-[1.5em]">
                  100+ Reviews
                </div>
                <div className="flex gap-0.5 justify-start items-center max-tablet:gap-[0.1rem] max-md:gap-[0.0875rem] max-mobile:gap-[0.075rem]">
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
