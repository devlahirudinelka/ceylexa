"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

const PROJECTS = [
  {
    href: "/project/oster",
    date: "May 4, 2025",
    category: "Advertising",
    title: "Oster",
    tags: "Illustration Design, eBook & Digital Reports",
    image: "/images/project-3.webp",
  },
  {
    href: "/project/roland-88tdv",
    date: "February 15, 2023",
    category: "Marketing",
    title: "Roland",
    tags: "Ad Creative, Social Media Creative",
    image: "/images/project-2.webp",
  },
  {
    href: "/project/reddit",
    date: "March 30, 2023",
    category: "Advertising",
    title: "Reddit",
    tags: "Motion Designer, Social Media Creative",
    image: "/images/project-1.webp",
  },
];

const STACK_TOP = "8vh";

function ArrowIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 32 32" fill="none" className="aroww-ichon">
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
    <section className="section">
      <div className="space-29xl" />
      <div className="w-layout-blockcontainer container large w-container">
        <div className="inner-wrappar">
          <div className="featured-work-title">
            <div className="testimonial-header-left">
              <div className="font-size-xsm">
                <span className="highlight-text orrenge">{"// "}</span>Recent Work
              </div>
              <h2 className="heading-style-h2">Growth looks different for every brand</h2>
            </div>
          </div>
          <div className="spacing-20xl" />
          <div className="featured-card-wrapper">
            <div className="w-dyn-list">
              <div role="list" className="project-collection-list w-dyn-items">
                {PROJECTS.map((project, i) => (
                  <div
                    key={project.href}
                    ref={(el) => {
                      cardRefs.current[i] = el;
                    }}
                    role="listitem"
                    className="project-collection-item w-dyn-item"
                    style={{ position: "sticky", top: STACK_TOP, zIndex: i + 1 }}
                  >
                    <a
                      href={project.href}
                      className="project-card w-inline-block"
                    >
                      <div
                        className="project-card-image"
                        style={{ backgroundImage: `url("${project.image}")` }}
                      >
                        <div className="arrow">
                          <ArrowIcon />
                        </div>
                      </div>
                      <div className="project-card-content">
                        <div className="project-card-top">
                          <div className="font-size-sm">{project.date}</div>
                          <div className="font-size-sm">{project.category}</div>
                        </div>
                        <div className="middle-top-contain">
                          <div className="font-size-5-5-xl">{project.title}</div>
                          <div className="font-size-sm">{project.tags}</div>
                        </div>
                      </div>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
