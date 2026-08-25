"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "@/lib/gsap";

function SparkleIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 32 23" fill="none" className="about-icon">
      <g clipPath="url(#clip0_about_sparkle)">
        <path
          d="M10 3C10.3395 8.37596 14.624 12.6605 20 13C14.624 13.3395 10.3395 17.624 10 23C9.66052 17.624 5.37596 13.3395 0 13C5.37596 12.6605 9.66052 8.37596 10 3Z"
          fill="currentColor"
        />
        <path
          d="M25 0C25.2376 3.76317 28.2368 6.76236 32 7C28.2368 7.23765 25.2376 10.2368 25 14C24.7624 10.2368 21.7632 7.23765 18 7C21.7632 6.76236 24.7624 3.76317 25 0Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_about_sparkle">
          <rect width="32" height="23" fill="currentColor" />
        </clipPath>
      </defs>
    </svg>
  );
}

function ArrowIcon({ className = "button-arrow-main" }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 20 20" fill="none" className={className}>
      <path
        d="M17.3172 10.4425L11.6922 16.0675C11.5749 16.1848 11.4159 16.2507 11.25 16.2507C11.0841 16.2507 10.9251 16.1848 10.8078 16.0675C10.6905 15.9503 10.6247 15.7912 10.6247 15.6253C10.6247 15.4595 10.6905 15.3004 10.8078 15.1832L15.3664 10.6253H3.125C2.95924 10.6253 2.80027 10.5595 2.68306 10.4423C2.56585 10.3251 2.5 10.1661 2.5 10.0003C2.5 9.83459 2.56585 9.67562 2.68306 9.55841C2.80027 9.4412 2.95924 9.37535 3.125 9.37535H15.3664L10.8078 4.81753C10.6905 4.70026 10.6247 4.5412 10.6247 4.37535C10.6247 4.2095 10.6905 4.05044 10.8078 3.93316C10.9251 3.81588 11.0841 3.75 11.25 3.75C11.4159 3.75 11.5749 3.81588 11.6922 3.93316L17.3172 9.55816C17.3753 9.61621 17.4214 9.68514 17.4529 9.76101C17.4843 9.83688 17.5005 9.91821 17.5005 10.0003C17.5005 10.0825 17.4843 10.1638 17.4529 10.2397C17.4214 10.3156 17.3753 10.3845 17.3172 10.4425Z"
        fill="currentColor"
      />
    </svg>
  );
}

const SOCIALS = [
  { label: "Facebook", href: "https://www.facebook.com/" },
  { label: "LinkedIn", href: "https://www.linkedin.com/" },
  { label: "Twitter", href: "https://x.com/" },
  { label: "Instagram", href: "https://www.instagram.com/" },
];

export default function AboutHero() {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

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

      if (bottomRef.current) {
        tl.fromTo(
          bottomRef.current,
          { opacity: 0, filter: "blur(5px)", y: 20 },
          { opacity: 1, filter: "blur(0px)", y: 0, duration: 0.7, ease: "power3.out" },
          0.25
        );
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="section">
      <div className="space-28-xl" />
      <div className="w-layout-blockcontainer container w-container">
        <div className="about-header-main">
          <div className="about-header">
            <div className="hero-heading-wrap">
              <h1 className="hero-heading" ref={headingRef}>
                About Ceylexa
              </h1>
            </div>
          </div>

          <div className="about-header-bottom" ref={bottomRef}>
            <div className="about-header-info-left">
              <SparkleIcon />
              <div className="max-width-16">
                <p className="font-size-sm align-center-mobile">
                  We design, build, and operate the AI agents and automations that take
                  repetitive work off operations teams&rsquo; plates.
                </p>
              </div>
            </div>

            <div className="about-button-wrap">
              <Link href="/project" className="btn-primary w-inline-block">
                <div className="btn-text-pill">
                  <div className="button-text">Explore All Work</div>
                  <div className="button-text">Explore All Work</div>
                </div>
                <div className="btn-arrow-pill">
                  <ArrowIcon />
                  <ArrowIcon />
                </div>
                <div className="hover-color-block" />
              </Link>

              <Link href="/contact" className="btn-primary bg-normal-white w-inline-block">
                <div className="btn-text-pill bg-normal-white-2">
                  <div className="button-text">Contact Me</div>
                  <div className="button-text bg-normal-white-4">Contact Me</div>
                </div>
                <div className="btn-arrow-pill bg-normal-white-5">
                  <ArrowIcon className="button-arrow-main black" />
                  <ArrowIcon className="button-arrow-main black" />
                </div>
              </Link>
            </div>

            <div className="about-social-wrap">
              {SOCIALS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="about-social-link w-inline-block"
                >
                  <div className="social-link-text">{social.label}</div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="space-28-xl" />
      <div className="about-image-wrap" aria-hidden="true" />
    </section>
  );
}
