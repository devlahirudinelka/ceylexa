"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

const CARDS = [
  {
    id: "_1",
    transform:
      "translate3d(-72%, 0, -800px) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
    src: "/images/hero-1.webp",
    alt: "Person wearing a futuristic white helmet with a pink visor and matching pink headphones, dressed in an orange jacket against a clear blue sky.",
  },
  {
    id: "_2",
    transform:
      "translate3d(-40%, 0, -550px) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
    src: "/images/hero-2.webp",
    alt: "Hand holding a melting chocolate bar partially wrapped in orange packaging.",
  },
  {
    id: "_3",
    transform:
      "translate3d(0%, 0, 0px) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
    src: "/images/hero-3.webp",
    alt: "Man with buzz cut and black round glasses wearing a white button-up shirt against a bright pink background.",
  },
  {
    id: "_4",
    transform:
      "translate3d(45%, 0, -550px) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
    src: "/images/hero-4.webp",
    alt: "Young person wearing yellow sunglasses and a colorful patterned jacket against an orange background.",
  },
  {
    id: "_5",
    transform:
      "translate3d(72%, 0, -800px) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
    src: "/images/hero-5.webp",
    alt: "Young woman with brown hair in a ponytail, wearing a dark hoodie and smiling gently against a plain gray background.",
  },
  {
    id: "_6",
    transform:
      "translate3d(100%, 0, -800px) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
    src: "/images/hero-6.webp",
    alt: "Young woman with shoulder-length dark hair and hazel eyes wearing a red lace top with a satin bow tie collar.",
    startOpacity: 0,
  },
];

function StarIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 12 12" fill="none" className="star">
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
        const lastCard = imageContainerRef.current.querySelector<HTMLElement>(".card._6");
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

  return (
    <section className="section hero">
        <div className="spacing-24xl" />
        <div className="w-layout-blockcontainer container large w-container">
          <div className="home-hero-header">
            <h1 className="hero-heading" ref={headingRef}>
              We build the next
            </h1>
          </div>
          <div className="hero-middle">
            <div className="hero-image-wrapper">
              <div className="image-container" ref={imageContainerRef}>
                {CARDS.map((card) => (
                  <div
                    key={card.id}
                    style={{
                      transform: card.transform,
                      transformStyle: "preserve-3d",
                      opacity: card.startOpacity,
                    }}
                    className={`card ${card.id}`}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      sizes="(max-width: 767px) 100vw, (max-width: 991px) 728px, 940px"
                      alt={card.alt}
                      src={card.src}
                      loading="lazy"
                      className={`card-image-0-1 ${card.id}`}
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="hero-title-block">
              <div className="hero-text" ref={heroTextRef}>
                UXORA
              </div>
            </div>
          </div>
          <div className="hero-bottom-item">
            <div ref={subtitleWrapRef} className="max-width-35">
              <div className="hero-subtitle">
                The European Creative Agency developing the future of commerce
              </div>
            </div>
            <div className="spacing-6xl" />
            <div ref={reviewWrapRef} className="hero-review-block">
              <div className="reviewer-left">
                <div className="review-image-block">
                  {["/images/reviewer-1.webp", "/images/reviewer-2.webp", "/images/reviewer-3.webp"].map(
                    (src) => (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img key={src} src={src} loading="lazy" alt="Reviewer portrait." className="reviewer-image" />
                    )
                  )}
                </div>
                <div className="max-width-7">
                  <div className="font-size-xsm pure-black">Loved by 500+ Founders</div>
                </div>
              </div>
              <div className="reviewer-right">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/rating-badge.webp"
                  loading="lazy"
                  alt="Blue letter C with a red circle in the center."
                  className="logo"
                />
                <div className="star-item-wrap">
                  <div className="font-size-xsm pure-black">13 Reviews</div>
                  <div className="star-block">
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
