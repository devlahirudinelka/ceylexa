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
      className="faq-arrow"
      style={{ transform: open ? "rotate(45deg)" : "none", transition: "transform 0.3s" }}
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
    <section className="section faq">
      <div className="space-xxxl" />
      <div className="w-layout-blockcontainer container regular w-container">
        <div className="inner-wrappar">
          <div className="faq-wrapper">
            <div className="faq-left">
              <div className="faq-leaft-all-contant">
                <div className="faq-top-title align-left">
                  <div className="title-wrapar">
                    <div className="font-size-xsm brand">{"//"}</div>
                    <div className="font-size-xsm">FAQS</div>
                  </div>
                  <div className="max-width-26">
                    <h2 className="heading-style-h2">Frequently Asked Questions!</h2>
                  </div>
                </div>
                <div className="faq-bottom-wrapper">
                  <div className="max-width-26">
                    <p className="font-size-sm">
                      Answers to the questions brands ask us most. Can&rsquo;t find yours? Get in touch and
                      our team will help.
                    </p>
                  </div>
                  <a href="/about" className="primary-button w-inline-block">
                    <div className="button-item-wrap">More About Us</div>
                    <div className="hover-color-block" />
                  </a>
                </div>
              </div>
            </div>

            <div className="faq-right">
              <div className="faq-tab w-tabs">
                <div className="tabs-menu w-tab-menu">
                  {FAQS.map((item, i) => {
                    const open = active === i;
                    return (
                      <a
                        key={item.q}
                        onClick={(e) => {
                          e.preventDefault();
                          setActive(open ? -1 : i);
                        }}
                        className={`faq-tab-link w-inline-block w-tab-link${open ? " w--current" : ""}`}
                      >
                        <div className="faq-tab-link-wrapper">
                          <div className="faq-quetion-wrapper">
                            <div className="font-size-base faq"> {item.q}</div>
                            <FaqArrow open={open} />
                          </div>
                          <div
                            className="faq-answr-wapper"
                            style={{
                              maxHeight: open ? "12rem" : 0,
                              transition: "max-height 0.35s ease",
                            }}
                          >
                            <div className="spaching-lg" />
                            <div className="max-width-24">
                              <p className="font-size-sm">{item.a}</p>
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
      <div className="space-xxxl" />
    </section>
  );
}
