"use client";

import { useState } from "react";

const SERVICES = [
  {
    number: "01",
    title: "Web Design",
    pills: ["Landing", "Brochure Site", "Corporate Website", "E-Commerce", "Web 3.0", "UI/UX Design"],
    description:
      "We create world-class websites using modern design practices. Mobile-first websites and web experiences are essential to the success of your web project. While maintaining bespoke originality, our team will focus on responsive design and optimize your website for any device and interface. Your new website will attract desirable target audiences, boost engagement, drive sales, and increase the brand value of your business.",
  },
  {
    number: "02",
    title: "Branding",
    pills: ["Corporate", "Beauty", "F&B", "Web 3.0", "Hospitality", "Re-Branding"],
    description:
      "Our branding team will excel at presenting your business in its best light. Whether you're looking to attract a new set of eyes, rekindle an old client base, or simply refine your business's identity - our creatives will formulate the optimal corporate identity, collateral designs, and brand guidelines unique to your company's needs. Armed with your new bespoke brand - you will now be able to captivate engaged new audiences and capitalize on your company's full potential.",
  },
  {
    number: "03",
    title: "Graphic Design",
    pills: ["Print Graphics", "Conference Event Branding", "Deck Designs", "Digital Brand Collateral", "Social Media Designs"],
    description:
      "From decks to social media assets, our graphic design team crafts clean, consistent visuals that carry your brand across every touchpoint. We balance bold creative direction with practical, print-ready and pixel-perfect execution.",
  },
  {
    number: "04",
    title: "Packaging Design",
    pills: ["Consumer Good Packaging", "Merchandise Packaging", "Beverage Packaging", "Startup Product Packaging"],
    description:
      "Experienced with top-grade packaging design for a wide range of products from consumer goods to startup ideas. Your packaging design will exceed all expectations with fresh yet pragmatic design ideas realistic to produce by the creatives at DD.NYC®. Packaging design is what makes us fall in love with some of our favorite products. Make yours a favorite.",
  },
  {
    number: "05",
    title: "Video Production",
    pills: ["Corporate Video Production", "Event Video Production", "Promotional Videos", "Post-Production & Editing"],
    description:
      "Uxora specializes in video production since 2015 in Manhattan, our talented team leverages over 30 years of combined experience working with advertising agencies and brands to create exceptional visual narratives. We are dedicated to video excellence, crafting impactful content that authentically engages audiences and elevates brands.",
  },
];

function CaretIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 20 20" fill="none" className="button-arrow">
      <path d="M7 4l6 6-6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Services() {
  const [active, setActive] = useState(0);

  return (
    <section className="section">
      <div className="space-10-75" />
      <div className="w-layout-blockcontainer container w-container">
        <div className="inner-wrappar">
          <div className="services-header">
            <div className="services-header-left">
              <div className="font-size-xsm">
                <span className="highlight-text orrenge">{"// "}</span>Featured Work
              </div>
              <div className="spacing-2xl" />
              <h2 className="heading-style-h2">Creative Services</h2>
            </div>
            <div className="services-header-right">
              <div className="services-p-block">
                <div className="max-width-29">
                  <p className="font-size-sm">
                    We build the next in commerce on Shopify. From strategy to design,
                    development to retention, we&rsquo;ve got you covered. 9+ years of
                    experience, 200+ stores launched, 60+ experts and we&rsquo;re your partner
                    from discovery to launch and beyond.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="spacing-20xl" />

          <div className="sticky-wrapper">
            <div className="w-layout-grid services-grid">
              <div className="services-left-item-wrap">
                <div className="services-left">
                  {SERVICES.map((s, i) => (
                    <div
                      key={s.number}
                      className={`services-left-item _0${i + 1}`}
                      onClick={() => setActive(i)}
                      role="button"
                      tabIndex={0}
                    >
                      <div className="font-size-xsm">{s.number}</div>
                      <div className="services-title">{s.title}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="services-right">
                <div className="services-list">
                  <div className="services-right-item-card">
                    <div className="services-pill-wrap">
                      {SERVICES[active].pills.map((pill) => (
                        <div key={pill} className="services-pill">
                          <div className="font-size-sm pure-black">{pill}</div>
                        </div>
                      ))}
                    </div>
                    <p>{SERVICES[active].description}</p>
                    <div className="services-btn-wrap">
                      <a href="/contact" className="services-button w-inline-block">
                        <div className="btn-text-pil">
                          <div className="font-size-sm brand-color">Learn More</div>
                          <div className="font-size-sm brand-color">Learn More</div>
                        </div>
                        <div className="btn-arrow-pill">
                          <CaretIcon />
                          <CaretIcon />
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="services-tab w-tabs">
              <div className="services-tab-menu w-tab-menu">
                {SERVICES.map((s, i) => (
                  <a
                    key={s.number}
                    onClick={(e) => {
                      e.preventDefault();
                      setActive(i);
                    }}
                    className={`services-tab-link w-inline-block w-tab-link${active === i ? " w--current" : ""}`}
                  >
                    <div className={`services-left-item _0${i + 1}`}>
                      <div className="font-size-xsm">{s.number}</div>
                      <div className="services-title">{s.title}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="speachng-28xl" />
    </section>
  );
}
