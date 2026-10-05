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
    <div className="flex overflow-hidden flex-row justify-start items-stretch p-3 w-full h-[28.0625rem] max-w-[53rem] bg-ghost-white rounded-4xl max-tablet:flex-none max-tablet:p-[0.6rem] max-tablet:h-92 max-tablet:max-w-[40rem] max-md:p-[0.5249rem] max-md:h-76 max-md:max-w-[34.3rem] max-mobile:p-[0.449rem] max-mobile:h-64 max-mobile:max-w-[27rem] max-mobile:rounded-2xl">
      <div className="flex gap-6 flex-1 flex-col justify-between items-start p-12 max-tablet:gap-[1.2rem] max-tablet:py-8 max-tablet:pr-6 max-tablet:pl-8 max-md:gap-[1.0499rem] max-md:p-[1.4rem] max-mobile:gap-[0.899rem] max-mobile:p-3">
        <div className="max-w-[25.2rem]">
          <p className="font-sans text-black text-[1.25rem] leading-[1.2em] font-normal max-tablet:text-[1.125rem] max-md:text-[1rem] max-mobile:text-[0.875rem] line-clamp-8 sm:line-clamp-10">
            &ldquo;{t.quote}&rdquo;
          </p>
        </div>
        <div className="flex gap-2 flex-col max-tablet:gap-[0.4rem] max-md:gap-[0.35rem] max-mobile:gap-[0.3rem]">
          <div className="font-sans text-[1.5rem] leading-[1.2em] font-medium max-tablet:text-[1.4rem] max-md:text-[1.3rem]">{t.name}</div>
          <div className="flex gap-0.5 flex-col justify-start items-start max-tablet:gap-[0.1rem] max-md:gap-[0.0875rem] max-mobile:gap-[0.075rem]">
            <div className="font-sans text-dim-gray text-[0.875rem] leading-[1.5em]">{t.role}</div>
            <div className="font-sans text-dim-gray text-[0.875rem] leading-[1.5em]">{t.location}</div>
          </div>
        </div>
      </div>
      <div className="overflow-hidden rounded-[1.25rem]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={t.image} loading="lazy" alt={`${t.name} portrait.`} className="object-cover w-full max-w-87.75 h-[28.0625rem] rounded-[1.25rem] max-tablet:h-92 max-md:h-76 max-mobile:h-64" />
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
    <div className="flex overflow-hidden gap-6 justify-start items-center max-tablet:gap-[1.2rem] max-md:gap-[1.0499rem] max-mobile:gap-[0.899rem]">
      <div ref={trackRef} className="flex gap-6 flex-none justify-start items-center max-tablet:gap-[1.2rem] max-md:gap-[1.0499rem] max-mobile:gap-[0.899rem]" style={{ width: "max-content" }}>
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
      <div className="pt-30 w-full max-tablet:pt-20 max-md:pt-18 max-mobile:pt-16" />
      <div className="block mx-auto px-6 max-w-[84rem] w-full before:content-['_'] before:[grid-area:1_/_1_/_2_/_2] before:table after:clear-both after:content-['_'] after:[grid-area:1_/_1_/_2_/_2] after:table max-tablet:px-[1.2rem] max-md:px-[1.0499rem] max-mobile:px-[0.899rem]">
        <div className="inner-wrappar">
          <div className="testiomonial-header">
            <div className="flex grid-rows-[auto] grid-cols-[1.5fr_1fr] auto-cols-[1fr] justify-between items-center max-tablet:gap-4 max-tablet:justify-start max-tablet:items-start max-tablet:flex-col max-md:gap-[0.7875rem] max-mobile:gap-[0.674rem]">
              <div className="inline-flex gap-4 flex-col flex-1 justify-center items-start text-left max-tablet:gap-[0.8rem] max-md:gap-[0.7rem] max-mobile:gap-[0.6rem]">
                <div className="flex gap-0.5 justify-start items-center">
                  <div className="z-999 font-sans text-[#d7ba5e] text-[0.875rem] leading-[1.5em]">{"//"}</div>
                  <div className="font-sans text-dim-gray text-[0.875rem] leading-[1.5em]">TESTIMONIALS</div>
                </div>
                <h2 className="font-sans text-[3.75rem] leading-[1.2em] font-medium text-left max-tablet:text-[3rem] max-md:text-[2.5rem] max-mobile:text-[2.25rem]">Trusted Brands Worldwide</h2>
              </div>
              <div className="self-center max-tablet:self-auto max-tablet:justify-start max-tablet:items-center max-tablet:mr-auto">
                <div className="flex justify-center items-center max-w-[25.8rem] max-tablet:max-w-[40rem] max-md:justify-start max-md:max-w-none">
                  <p className="mb-0 font-sans text-black text-[1rem] leading-[1.5em] font-normal">
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

      <div className="pt-12.5 w-full max-tablet:pt-10 max-md:pt-8.75 max-mobile:pt-7.5" />

      <MarqueeRow />

      <div className="pt-30 w-full max-tablet:pt-20 max-md:pt-18 max-mobile:pt-16" />
    </section>
  );
}
