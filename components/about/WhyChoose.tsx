/* eslint-disable react/no-unescaped-entities */

"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

const BENEFITS = [
  {
    title: "Dedicated support",
    description:
      "We only take on a limited amount of projects at a given time to ensure that adequate attention is provided to our clients.",
  },
  {
    title: "Frequent reporting",
    description:
      "One of our key objectives with our client engagements is to provide them with tangible results and reporting.",
  },
  {
    title: "360 Digital Marketing solutions",
    description:
      "End-to-end branding and digital marketing solutions which make it possible to get all of your needs completed in one place.",
  },
];

export default function WhyChoose() {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const ctx = gsap.context(() => {
      if (headingRef.current) {
        gsap.fromTo(
          headingRef.current,
          { opacity: 0, y: 24 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "power3.out",
          },
        );
      }

      if (contentRef.current) {
        gsap.fromTo(
          contentRef.current,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            delay: 0.15,
            ease: "power3.out",
          },
        );
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="relative">
      <div className="max-w-7xl mx-auto w-full px-6 max-tablet:px-[1.2rem] max-md:px-[1.0499rem] max-mobile:px-[0.899rem]">
        <div className="inner-wrappar">
          <div className="grid grid-cols-1 gap-16">
            {/* Why Choose Us */}
            <div>
              <div className="flex items-center justify-start gap-0.5">
                <h1 className="text-left" ref={headingRef}>
                  Why Choose Us?
                </h1>
              </div>

              <div className="h-4 w-full" />

              <h3 className="text-left">
                Smarter marketing decisions, real business goals.
              </h3>

              <div className="h-6 w-full" />

              <div ref={contentRef} className="flex flex-col gap-5">
                <p className="mb-0 font-sans text-base font-normal leading-[1.5em] text-black">
                  We help brands, startups, and growing businesses make smarter
                  marketing decisions through research, strategy, and execution
                  that actually align with business goals.
                </p>

                <p className="mb-0 font-sans text-base font-normal leading-[1.5em] text-black">
                  At Ceylexa Digital, we bring together creative thinking,
                  industry knowledge, and practical experience to develop
                  solutions that fit where your business is today and where you
                  want it to go. We believe the best work comes from genuine
                  collaboration. By working closely with our clients, we create
                  thoughtful campaigns, engaging content, memorable brand
                  experiences, and digital solutions that feel authentic to each
                  business. Whether you're launching something new or looking to
                  take your brand further, we're here to bring fresh ideas,
                  clear direction, and the right expertise to the table.
                </p>
              </div>
            </div>

            {/* Work With Us */}
            <div>
              <div className="flex items-center justify-start gap-0.5">
                <h1 className="text-left" ref={headingRef}>
                  Work With Us
                </h1>
              </div>

              <div className="h-4 w-full" />

              <h3 className="text-left">Where Great Brands Begin</h3>

              <div className="h-6 w-full" />

              <div className="flex flex-col gap-5">
                <p className="mb-0 font-sans text-base font-normal leading-[1.5em] text-black">
                  Whether you have a new idea, a growing business, or a brand
                  ready for its next chapter, we're here to listen, collaborate,
                  and help bring it to life. At Ceylexa Digital, we work closely
                  with our clients to create thoughtful digital experiences that
                  feel true to their brand and connect with the people who
                  matter most. From the first idea to the final execution, we
                  make the process clear, creative, and collaborative.
                </p>

                <p className="mb-0 font-sans text-base font-normal leading-[1.5em] text-black">
                  Partner with Ceylexa Digital and let's turn your ideas into
                  digital experiences that create impact, build connections, and
                  drive growth.
                </p>
              </div>
            </div>
          </div>

          {/* Benefits */}
          <div className="h-15 w-full max-tablet:h-12 max-md:h-10 max-mobile:h-9" />

          <div className="flex items-center justify-start gap-0.5">
            <div className="font-sans text-[0.875rem] leading-[1.5em] text-dim-gray">
              Benefits of working with Ceylexa
            </div>
          </div>

          <div className="h-6 w-full" />

          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {BENEFITS.map((benefit) => (
              <div
                key={benefit.title}
                className="bento-card relative overflow-hidden rounded-2xl border border-border bg-[linear-gradient(180deg,rgba(255,255,255,0.8),rgba(255,255,255,0.6))] p-7 backdrop-blur-[6px] [--mx:50%] [--my:50%] [&>*]:relative [&>*]:z-[1] after:pointer-events-none after:absolute after:-inset-0.25 after:z-0 after:rounded-[inherit] after:bg-[radial-gradient(480px_circle_at_var(--mx)_var(--my),rgba(215,186,94,0.14),transparent_45%)] after:opacity-0 after:transition-opacity after:duration-300 hover:after:opacity-100"
              >
                <h3 className="text-foreground">{benefit.title}</h3>

                <p className="text-[0.875rem]">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="h-30 w-full max-tablet:h-20 max-md:h-18 max-mobile:h-16" />
    </section>
  );
}
