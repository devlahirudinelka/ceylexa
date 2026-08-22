"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

const TESTIMONIALS = [
  {
    quote:
      "I have had the pleasure of working with Thilanka and the entire team at Ceylexa for the past five years, and I can confidently say that they have been instrumental in helping me manage my social media platforms. From the beginning, their dedication to delivering high-quality and results-driven services has been evident in every aspect of our partnership. Thilanka and the team at Ceylexa are not only skilled in digital marketing, but they are also highly professional, proactive, and incredibly easy to work with. They consistently come up with creative solutions, keep me updated with the latest trends, and have a deep understanding of social media strategies",
    name: "Dhananjaya Bandara",
    role: "Founder CEO, DB Ceylon",
    location: "Colombo, Sri Lanka",
    image: "/images/reviewer-1.webp",
  },
  {
    quote:
      "I am working with Thilanka and Team Ceylexa for my social media management. They provide a high-quality, professional service and have a great understanding of the latest digital trends. Their team is creative, responsive, and always up to date with the latest social media strategies and content trends. I’m very happy with their work and the way they manage my digital presence. I would highly recommend Thilanka and Team Ceylexa to anyone looking for a professional and reliable digital marketing team.",
    name: "Wanindu Hasaranga",
    role: "Cricketer, Sri Lanka National Cricket Team",
    location: "Colombo, Sri Lanka",
    image: "/images/reviewer-2.webp",
  },
  {
    quote:
      "I’ve been working with Thilanka and Team Ceylexa for more than 8 years. Throughout our journey, they have been managing my social media platforms with great dedication, creativity, and professionalism. The team is incredibly friendly, supportive, and always willing to go the extra mile to deliver top-notch work. They understand the digital space, stay updated with the latest trends, and consistently maintain a high standard of service. I’m truly happy with their work and would highly recommend Thilanka and Team Ceylexa to anyone looking for a reliable, creative, and professional digital marketing team.",
    name: "Yureni Noshika",
    role: "Actress and Singer",
    location: "Colombo, Sri Lanka",
    image: "/images/reviewer-3.webp",
  },
  {
    quote:
      "I’ve been working with Thilanka and the team at Ceylexa for more than five years. Throughout this time, they have been managing my social media and helping me build and maintain a strong digital presence. What I really appreciate about Ceylexa is their creativity, consistency, professionalism, and understanding of how to present my personal brand online. The team has always been supportive, responsive, and committed to delivering quality work. I’m genuinely happy with the service and would highly recommend Thilanka and Team Ceylexa to anyone looking for a reliable and creative digital marketing team.",
    name: "Bhanuka Rajapaksa",
    role: "Cricketer, Sri Lanka National Cricket Team",
    location: "Colombo, Sri Lanka",
    image: "/images/reviewer-4.webp",
  },
  {
    quote:
      "Putting together a social media presence is a task; finding the right individual or company is even more complex. I did my search looking for this particular company that has the ability to create, design, and optimize my Social Media. Thank God I met Thilanka at Ceylexa; not only do they have great taste in design, but they can guide you through the process and beyond. 🙌🏽♥️",
    name: "Dulani Fonseka",
    role: "Founder CEO, One Weddings",
    location: "Melbourne, Australia",
    image: "/images/reviewer-5.webp",
  },
  {
    quote:
      "I just wanted to take a moment to express my gratitude for all the incredible work you do. Ceylexa has consistently produced top-quality content that has entertained, informed, and inspired me time and time again. From your engaging social media campaigns to your informative blog posts, your team has truly set the standard for digital media excellence.",
    name: "Chandana Wijesinghe",
    role: "Founder CEO, The Looks",
    location: "Colombo, Sri Lanka",
    image: "/images/reviewer-6.webp",
  },
  {
    quote:
      "We have been working with Ceylexa Digital Marketing Agency to manage our digital marketing efforts in New Zealand, and the results have been outstanding. Their team has consistently delivered high-quality leads and daily sign-ups for our website, far exceeding our expectations. Their professionalism, innovative strategies, and dedication to our success have made a significant impact on our business growth. We highly recommend Ceylexa Digital to anyone looking for top-tier digital marketing services.",
    name: "Vikash Singh",
    role: "Founder & CEO, Thandoor Grill",
    location: "Auckland, New Zealand",
    image: "/images/reviewer-7.webp",
  },
];

function TestimonialCard({ t }: { t: (typeof TESTIMONIALS)[number] }) {
  return (
    <div className="testiomonial-card">
      <div className="testiomoniul-card-info-block">
        <div className="max-width-25-2">
          <p className="font-size-base normal">&ldquo;{t.quote}&rdquo;</p>
        </div>
        <div className="testiomoniul-bottm-title">
          <div className="font-size-lg">{t.name}</div>
          <div className="user-info-block">
            <div className="font-size-xsm ironside-grey">{t.role}</div>
            <div className="font-size-xsm">{t.location}</div>
          </div>
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
