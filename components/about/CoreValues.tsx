"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

const VALUES = [
  {
    title: "Finding Balance",
    description:
      "At our company, we value finding balance in work and life. We believe that a harmonious equilibrium leads to enhanced well-being, productivity, and overall satisfaction. We support our team in achieving personal growth and maintaining a healthy work-life balance.",
  },
  {
    title: "Being Sincere",
    description:
      "Sincerity is at the heart of our company. We believe in conducting ourselves with authenticity, honesty, and integrity. We build trust through genuine and ethical practices in our interactions with colleagues, clients, and stakeholders. Our commitment to sincerity forms the foundation of strong relationships and long-lasting partnerships.",
  },
  {
    title: "Openness",
    description:
      "Openness is a core value we uphold. We foster a culture of transparency, embracing diverse perspectives and feedback. We encourage collaboration, continuous learning, and innovation. By promoting openness, we create an inclusive environment where everyone's voice is valued and ideas flourish.",
  },
  {
    title: "Loving Our Planet",
    description:
      "We are passionate about loving our planet. Sustainability is deeply ingrained in our values. We actively strive to minimize our ecological footprint, implement environmentally friendly practices, and support initiatives that protect and preserve our environment.",
  },
];

export default function CoreValues() {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
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
      description,
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
      <div className="container mx-auto block w-full px-6 before:table before:content-['_'] before:[grid-area:1_/_1_/_2_/_2] after:table after:clear-both after:content-['_'] after:[grid-area:1_/_1_/_2_/_2] max-tablet:px-[1.2rem] max-md:px-[1.0499rem] max-mobile:px-[0.899rem]">
        <div className="inner-wrappar">
          {/* Section label */}
       

          <div className="w-full pt-4 max-tablet:pt-[0.8rem] max-md:pt-[0.7rem] max-mobile:pt-[0.6rem]" />

          {/* Main heading */}
          <h2 ref={headingRef} className="text-left">
            Our Core Values
          </h2>

          <div className="w-full pt-4 max-tablet:pt-[0.8rem] max-md:pt-[0.7rem] max-mobile:pt-[0.6rem]" />

          {/* Subtitle */}
          <h3 ref={subtitleRef} className="text-left">
            The principles that shape who we are.
          </h3>

          <div className="w-full pt-4 max-tablet:pt-[0.8rem] max-md:pt-[0.7rem] max-mobile:pt-[0.6rem]" />

          {/* Description */}
          <div className=" max-tablet:max-w-none">
            <p
              ref={descriptionRef}
              className="mb-0 font-sans text-[1rem] font-normal leading-[1.5em] text-black"
            >
              We&rsquo;re with you every step of the way, pushing you ever
              closer towards the summit of your success.
            </p>
          </div>

          <div className="w-full pt-15 max-tablet:pt-12 max-md:pt-10.5 max-mobile:pt-9" />

          {/* Core values cards */}
          <div ref={cardsRef} className="grid gap-5 md:grid-cols-2">
            {VALUES.map((value) => (
              <div
                key={value.title}
                className="bento-card relative overflow-hidden rounded-2xl border border-border bg-[linear-gradient(180deg,rgba(255,255,255,0.8),rgba(255,255,255,0.6))] p-8 backdrop-blur-[6px] [--mx:50%] [--my:50%] [&>*]:relative [&>*]:z-[1] after:pointer-events-none after:absolute after:-inset-0.25 after:z-0 after:rounded-[inherit] after:bg-[radial-gradient(480px_circle_at_var(--mx)_var(--my),rgba(215,186,94,0.14),transparent_45%)] after:opacity-0 after:transition-opacity after:duration-400 after:content-[''] hover:after:opacity-100"
              >
                <h3 className="text-foreground">{value.title}</h3>

                <p className="text-[0.875rem]">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full pt-30 max-tablet:pt-20 max-md:pt-18 max-mobile:pt-16" />
    </section>
  );
}
