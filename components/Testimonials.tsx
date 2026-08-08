"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

const TESTIMONIALS = [
  {
    quote:
      "They brought our app redesign to life beyond expectations! We're thrilled with the results and truly loved collaborating with their incredibly talented team.",
    name: "Robin Fish",
    role: "Founder & CEO, Arrive",
    location: "New York, USA",
    image: "/images/reviewer-1.webp",
  },
  {
    quote:
      "As a founder, finding the right team for Trainmate was a challenge until we discovered Uxora. They quickly onboarded, worked within our budget, and delivered high-quality designs at an impressive pace.",
    name: "George El Nachar",
    role: "Founder, Trainmate",
    location: "Dubai, United Arab Emirates",
    image: "/images/hero-6.webp",
  },
  {
    quote:
      "Uxora truly exceeded our expectations. Their designs were not only visually stunning but also incredibly intuitive, making the user experience seamless. We highly recommend them for any UI/UX project!",
    name: "Val Koval",
    role: "Co-founder & CEO, Ubiquic",
    location: "Maryland, United States",
    image: "/images/hero-5.webp",
  },
];

function TestimonialCard({ t }: { t: (typeof TESTIMONIALS)[number] }) {
  return (
    <div className="testiomonial-card">
      <div className="testiomoniul-card-info-block">
        <div className="max-width-25-2">
          <p className="font-size-base normal">&ldquo;{t.quote}&rdquo;</p>
        </div>
      </div>
      <div className="testiomoniul-bottm-title">
        <div className="font-size-lg">{t.name}</div>
        <div className="user-info-block">
          <div className="font-size-xsm ironside-grey">{t.role}</div>
          <div className="font-size-xsm">{t.location}</div>
        </div>
      </div>
      <div className="card-image-wrapper">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={t.image} loading="lazy" alt={`${t.name} portrait.`} className="user-image" />
      </div>
    </div>
  );
}

function MarqueeRow({ reverse = false }: { reverse?: boolean }) {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { xPercent: reverse ? -50 : 0 },
        { xPercent: reverse ? 0 : -50, duration: 32, ease: "none", repeat: -1 }
      );
    });
    return () => ctx.revert();
  }, [reverse]);

  return (
    <div className="marque-card-main">
      <div ref={trackRef} className="marque-list" style={{ width: "max-content" }}>
        {[0, 1].map((rep) =>
          TESTIMONIALS.map((t) => <TestimonialCard key={`${rep}-${t.name}`} t={t} />)
        )}
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section>
      <div className="space-xxxl" />
      <div className="w-layout-blockcontainer container regular w-container">
        <div className="inner-wrappar">
          <div className="testiomonial-header">
            <div className="testiomonial-top-contant">
              <div className="testimonial-header-left align-left">
                <div className="title-wrapar">
                  <div className="font-size-xsm brand">{"//"}</div>
                  <div className="font-size-xsm">TESTIMONIALS</div>
                </div>
                <h2 className="heading-style-h2">Trusted Brands Worldwide</h2>
              </div>
              <div className="tm-top-right">
                <div className="max-width-25-6">
                  <p className="font-size-sm">
                    We build the next in commerce on Shopify. From strategy to design,
                    development to retention, we&rsquo;ve got you covered. 9+ years of
                    experience, 200+ stores launched,
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="spacing-17xl" />

      <div className="flex flex-col gap-6">
        <MarqueeRow />
        <MarqueeRow reverse />
      </div>

      <div className="space-xxxl" />
    </section>
  );
}
