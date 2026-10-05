"use client";

import { useState } from "react";
import { ArrowButton, Eyebrow, GoldWord, H2_CLASS } from "@/components/ui/brand";

const FAQS = [
  {
    q: "Which services does Ceylexa offer?",
    a: "Web design and development, digital marketing, content creation, paid media marketing, branding, and influencer marketing campaigns — planned together or as individual services.",
  },
  {
    q: "Do you work with brands outside Sri Lanka?",
    a: "Yes. We have offices in Wellington, New Zealand and Pannipitiya, Sri Lanka, and have worked with brands across 11+ international markets.",
  },
  {
    q: "How much do your services cost?",
    a: "Pricing depends on the scope and goals of each project. Get in touch for a consultation and a tailored proposal.",
  },
  {
    q: "How do you measure results?",
    a: "We track meaningful metrics such as reach, engagement, leads, conversions, and return on ad spend, and report on what is actually moving your business objective.",
  },
  {
    q: "How do I get started?",
    a: "Book a consultation through our contact page or email hello@ceylexa.com. We will learn about your brand and recommend the right next step.",
  },
];

function FaqArrow({ open }: { open: boolean }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      viewBox="0 0 24 24"
      fill="none"
      className="w-4"
      style={{
        transform: open ? "rotate(45deg)" : "none",
        transition: "transform 0.3s",
      }}
    >
      <path
        d="M20.8125 12C20.8125 12.1492 20.7532 12.2923 20.6477 12.3977C20.5423 12.5032 20.3992 12.5625 20.25 12.5625H12.5625V20.25C12.5625 20.3992 12.5032 20.5423 12.3977 20.6477C12.2923 20.7532 12.1492 20.8125 12 20.8125C11.8508 20.8125 11.7077 20.7532 11.6023 20.6477C11.4968 20.5423 11.4375 20.3992 11.4375 20.25V12.5625H3.75C3.60082 12.5625 3.45774 12.5032 3.35225 12.3977C3.24676 12.2923 3.1875 12.1492 3.1875 12C3.1875 11.8508 3.24676 11.7077 3.35225 11.6023C3.45774 11.4968 3.60082 11.4375 3.75 11.4375H11.4375V3.75C11.4375 3.60082 11.4968 3.45774 11.6023 3.35225C11.7077 3.24676 11.8508 3.1875 12 3.1875C12.1492 3.1875 12.2923 3.24676 12.3977 3.35225C12.5032 3.45774 12.5625 3.60082 12.5625 3.75V11.4375H20.25C20.3992 11.4375 20.5423 11.4968 20.6477 11.6023C20.7532 11.7077 20.8125 11.8508 20.8125 12Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function FAQ() {
  const [active, setActive] = useState(0);

  return (
    <section className="relative bg-ghost-white">
      <div className="mx-auto container px-6 py-30 max-tablet:py-20 max-md:py-18 max-mobile:py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5 lg:sticky lg:top-28 lg:self-start">
            <Eyebrow>FAQs</Eyebrow>
            <h2 className={`mt-4 max-w-[26rem] ${H2_CLASS}`}>
              Frequently Asked <GoldWord>Questions!</GoldWord>
            </h2>
            <p className="mt-6 mb-0 max-w-[26rem] font-sans text-[1rem] leading-[1.5em] text-black">
              Answers to the questions brands ask us most. Can&rsquo;t find
              yours? Get in touch and our team will help.
            </p>
            <ArrowButton href="/about" className="mt-8">
              More About Us
            </ArrowButton>
          </div>

          <div className="border-t border-light-transparent-black lg:col-span-7">
            {FAQS.map((item, i) => {
              const open = active === i;
              return (
                <div key={item.q} className="group relative border-b border-light-transparent-black">
                  <span
                    className={`absolute inset-x-0 bottom-[-1px] h-px origin-left bg-[#d7ba5e] transition-transform duration-500 ${
                      open ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                  <button
                    type="button"
                    onClick={() => setActive(open ? -1 : i)}
                    aria-expanded={open}
                    className="grid w-full cursor-pointer grid-cols-[auto_1fr_auto] items-start gap-x-6 py-7 text-left max-md:gap-x-4 max-md:py-5"
                  >
                    <span
                      className={`pt-1.5 text-[0.8125rem] font-medium tabular-nums transition-colors duration-300 ${
                        open ? "text-[#d7ba5e]" : "text-dim-gray"
                      }`}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-sans text-[1.375rem] font-medium leading-[1.3em] text-black max-md:text-[1.0625rem]">
                      {item.q}
                    </span>
                    <span
                      className={`flex h-9 w-9 items-center justify-center rounded-full border transition-colors duration-300 ${
                        open
                          ? "border-[#d7ba5e] bg-[#d7ba5e] text-white"
                          : "border-light-transparent-black text-black"
                      }`}
                    >
                      <FaqArrow open={open} />
                    </span>
                  </button>
                  <div
                    className="grid transition-[grid-template-rows] duration-500 ease-out"
                    style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
                  >
                    <div className="overflow-hidden">
                      <p className="mb-0 max-w-xl pb-7 pl-[2.6rem] font-sans text-[1rem] leading-[1.5em] text-dim-gray max-md:pl-[2.1rem]">
                        {item.a}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
