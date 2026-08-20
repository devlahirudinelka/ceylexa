"use client";

import { useEffect, useRef, useState } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

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

// Matches `.services-right` / `.services-right-item-card`'s max-height in
// uxoral.css — that pairing (a fixed-height, overflow-hidden "window" plus
// a `flex-flow: column` list of same-sized cards) is the CSS half of a
// vertical-carousel: stack every card in one column, then translate the
// column so only the active card's slot sits inside the window. We pin
// both to this value explicitly (see the two inline `style` heights below)
// instead of leaving it as the CSS `max-height`, so every card gets the
// same real height and the slide distance per step is exact.
const CARD_WINDOW_HEIGHT = "25.625rem";

function CaretIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 20 20" fill="none" className="button-arrow">
      <path d="M7 4l6 6-6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Services() {
  const [active, setActive] = useState(0);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const windowRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  // `.sticky-wrapper` is already 300vh tall with `.services-grid` pinned
  // via `position: sticky` (see uxoral.css) — that part of the ported
  // template was already built for a scroll-driven "active service"
  // interaction, it just never had anything advancing `active` besides
  // clicks. Map scroll progress through that 300vh range onto the 5
  // services so each one activates in turn as the user scrolls, without
  // touching the sticky positioning itself (that's still plain CSS).
  // Only wired up at the desktop breakpoint (matches the 992px min-width
  // this layout switches on) — below that, uxoral.css swaps to the plain
  // clickable `.services-tab` list instead.
  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const mm = gsap.matchMedia();
    mm.add("(min-width: 992px)", () => {
      const trigger = ScrollTrigger.create({
        trigger: wrapper,
        start: "top top",
        end: "bottom bottom",
        scrub: true,
        onUpdate: (self) => {
          const index = Math.min(SERVICES.length - 1, Math.floor(self.progress * SERVICES.length));
          setActive((prev) => (prev === index ? prev : index));
        },
      });

      return () => trigger.kill();
    });

    return () => mm.revert();
  }, []);

  // The right side is now one column of all five cards (see the render
  // below), clipped to a single card's height by `.services-right`'s
  // `overflow: hidden`. Slide that column up so the active card's slot
  // lands inside the visible window — smooth on every change, whether it
  // came from the scroll-driven index above or a direct click/tap.
  //
  // `.services-list` has a 1.5rem row-gap between cards (uxoral.css), so
  // translating by a flat "index * card height" under-shoots by that gap
  // on every step — by the last card it's off by 4 gaps, which is exactly
  // why the next card's "Learn More" was peeking into the bottom of the
  // window. `.services-right` is `position: relative`, so each card's own
  // `offsetTop` is already measured against it (the window) directly —
  // using that instead of a computed multiple accounts for the gap (and
  // anything else affecting spacing) automatically.
  useEffect(() => {
    const list = listRef.current;
    const target = cardRefs.current[active];
    if (!list || !target) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    gsap.to(list, {
      y: -target.offsetTop,
      duration: reduceMotion ? 0 : 0.7,
      ease: "power3.out",
    });
  }, [active]);

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

          <div className="sticky-wrapper" ref={wrapperRef}>
            <div className="w-layout-grid services-grid">
              <div className="services-left-item-wrap">
                <div className="services-left">
                  {SERVICES.map((s, i) => {
                    const isActive = active === i;
                    return (
                      <div
                        key={s.number}
                        className={`services-left-item _0${i + 1}`}
                        style={{
                          opacity: isActive ? 1 : 0.3,
                          cursor: "pointer",
                          transition: "opacity 0.3s ease",
                        }}
                        onClick={() => setActive(i)}
                        role="button"
                        tabIndex={0}
                      >
                        <div className="font-size-xsm">{s.number}</div>
                        <div className="services-title">{s.title}</div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="services-right" ref={windowRef} style={{ height: CARD_WINDOW_HEIGHT }}>
                <div className="services-list" ref={listRef}>
                  {SERVICES.map((s, i) => {
                    const isActive = active === i;
                    return (
                      <div
                        key={s.number}
                        ref={(el) => {
                          cardRefs.current[i] = el;
                        }}
                        className="services-right-item-card"
                        style={{ height: CARD_WINDOW_HEIGHT, flexShrink: 0, overflow: "hidden" }}
                        // The slide only moves the whole column into place —
                        // it doesn't remove the other four cards from the
                        // page. Without this, a screen reader or Tab key
                        // still walks through every service's pills,
                        // description, and "Learn More" link at once, even
                        // though only one is visible. Keeping only the
                        // active card exposed/reachable is what actually
                        // makes it "show related item content only".
                        aria-hidden={!isActive}
                        inert={!isActive || undefined}
                      >
                        <div className="services-pill-wrap">
                          {s.pills.map((pill) => (
                            <div key={pill} className="services-pill">
                              <div className="font-size-sm pure-black">{pill}</div>
                            </div>
                          ))}
                        </div>
                        <p>{s.description}</p>
                        <div className="services-btn-wrap">
                          <a
                            href="/contact"
                            className="services-button w-inline-block"
                            tabIndex={isActive ? 0 : -1}
                          >
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
                    );
                  })}
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
