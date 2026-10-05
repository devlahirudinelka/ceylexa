"use client";

import { useState } from "react";

const FAQS = [
  {
    q: "1.  Which services does Ceylexa offer?",
    a: "Web design and development, digital marketing, content creation, paid media marketing, branding, and influencer marketing campaigns — planned together or as individual services.",
  },
  {
    q: "2.  Do you work with brands outside Sri Lanka?",
    a: "Yes. We have offices in Wellington, New Zealand and Pannipitiya, Sri Lanka, and have worked with brands across 11+ international markets.",
  },
  {
    q: "3.  How much do your services cost?",
    a: "Pricing depends on the scope and goals of each project. Get in touch for a consultation and a tailored proposal.",
  },
  {
    q: "4.  How do you measure results?",
    a: "We track meaningful metrics such as reach, engagement, leads, conversions, and return on ad spend, and report on what is actually moving your business objective.",
  },
  {
    q: "5.  How do I get started?",
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
      className="w-6 text-dark-charcoal max-md:w-[1.2rem] max-mobile:w-4"
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
      <div className="pt-30 w-full max-tablet:pt-20 max-md:pt-18 max-mobile:pt-16" />
      <div className="block mx-auto px-6 mx-auto container w-full before:content-['_'] before:[grid-area:1_/_1_/_2_/_2] before:table after:clear-both after:content-['_'] after:[grid-area:1_/_1_/_2_/_2] after:table max-tablet:px-[1.2rem] max-md:px-[1.0499rem] max-mobile:px-[0.899rem]">
        <div className="inner-wrappar">
          <div className="grid gap-4 grid-rows-[auto] grid-cols-[repeat(2,1fr)] auto-cols-[1fr] max-tablet:gap-10 max-tablet:grid-cols-[repeat(1,1fr)] max-md:gap-8.75 max-mobile:gap-6">
            <div className="block gap-6 flex-col justify-start items-start max-tablet:gap-[1.2rem] max-md:gap-[1.0499rem] max-mobile:gap-[0.899rem]">
              <div className="flex gap-6 flex-col justify-start items-start max-tablet:gap-[1.2rem] max-md:gap-[1.0499rem] max-mobile:gap-[0.899rem]">
                <div className="flex gap-4 flex-col flex-1 justify-start items-start text-left max-tablet:gap-[0.8rem] max-md:gap-[0.7rem] max-mobile:gap-[0.6rem]">
                  <div className="flex gap-0.5 justify-start items-center">
                    <div className="z-999 font-sans text-[#d7ba5e] text-[0.875rem] leading-[1.5em]">
                      {"//"}
                    </div>
                    <div className="font-sans text-dim-gray text-[0.875rem] leading-[1.5em]">
                      FAQS
                    </div>
                  </div>
                  <div className="max-w-[26rem]">
                    <h2 className="font-sans text-[3.75rem] leading-[1.2em] font-medium text-left max-tablet:text-[3rem] max-md:text-[2.5rem] max-mobile:text-[2.25rem]">
                      Frequently Asked Questions!
                    </h2>
                  </div>
                </div>
                <div className="flex gap-8 flex-col justify-start items-start max-tablet:gap-[1.4rem] max-md:gap-[1.224rem] max-mobile:gap-[1.05rem]">
                  <div className="max-w-[26rem]">
                    <p className="mb-0 font-sans text-black text-[1rem] leading-[1.5em] font-normal">
                      Answers to the questions brands ask us most. Can&rsquo;t
                      find yours? Get in touch and our team will help.
                    </p>
                  </div>
                  <a
                    href="/about"
                    className="inline-block relative overflow-hidden max-w-full bg-[#d7ba5e] rounded-full"
                  >
                    <div className="flex relative z-1 gap-2 justify-center items-center py-3 px-6 text-white rounded-[6.25rem] max-tablet:gap-[0.4rem] max-tablet:py-[0.6rem] max-tablet:px-[1.2rem] max-md:gap-[0.35rem] max-md:py-[0.5249rem] max-md:px-[1.0499rem] max-mobile:gap-[0.3rem] max-mobile:py-[0.449rem] max-mobile:px-[0.899rem]">
                      More About Us
                    </div>
                    <div className="absolute top-auto -bottom-4 right-auto left-[0%] w-4 h-4 bg-black rounded-full" />
                  </a>
                </div>
              </div>
            </div>

            <div className="faq-right">
              <div className="faq-tab relative before:content-['_'] before:[grid-area:1_/_1_/_2_/_2] before:table after:clear-both after:content-['_'] after:[grid-area:1_/_1_/_2_/_2] after:table">
                <div className="relative flex gap-3 flex-col max-tablet:gap-[0.6rem] max-md:gap-[0.5249rem] max-mobile:gap-[0.449rem]">
                  {FAQS.map((item, i) => {
                    const open = active === i;
                    return (
                      <a
                        key={item.q}
                        onClick={(e) => {
                          e.preventDefault();
                          setActive(open ? -1 : i);
                        }}
                        aria-expanded={open}
                        className="block relative p-5 max-w-full align-top text-left text-[#222] no-underline bg-white rounded-2xl cursor-pointer aria-expanded:bg-white focus:outline-0 max-tablet:p-4 max-md:p-3.5 max-mobile:p-[1.05rem]"
                      >
                        <div className="block">
                          <div className="flex justify-between items-center max-mobile:grid max-mobile:gap-4 max-mobile:items-start max-mobile:grid-rows-[auto] max-mobile:grid-cols-[4fr_0.25fr] max-mobile:auto-cols-[1fr] max-mobile:justify-items-stretch">
                            <div className="font-sans text-black text-[1.25rem] leading-[1.5em] font-medium max-tablet:text-[1.125rem] max-md:text-[1rem] max-mobile:text-[0.875rem]">
                              {" "}
                              {item.q}
                            </div>
                            <FaqArrow open={open} />
                          </div>
                          <div
                            className="overflow-hidden"
                            style={{
                              maxHeight: open ? "12rem" : 0,
                              transition: "max-height 0.35s ease",
                            }}
                          >
                            <div className="pt-3 max-tablet:pt-[0.6rem] max-md:pt-[0.5249rem] max-mobile:pt-[0.449rem]" />
                            <div className="max-w-96">
                              <p className="mb-0 font-sans text-black text-[1rem] leading-[1.5em] font-normal">
                                {item.a}
                              </p>
                            </div>
                          </div>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-30 w-full max-tablet:pt-20 max-md:pt-18 max-mobile:pt-16" />
    </section>
  );
}
