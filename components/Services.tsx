"use client";

import { useEffect, useRef, useState } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

import { SERVICES } from "@/lib/services-data";

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
    <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 20 20" fill="none" className="w-4 text-[#d7ba5e]">
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
  const mobileContentRef = useRef<HTMLDivElement>(null);

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

  // `.services-tab` is the mobile/tablet stand-in for the desktop split
  // layout above (CSS flips them at the 992px breakpoint — see
  // `.services-grid` / `.services-tab` in uxoral.css). The Webflow source
  // paired that tab menu with a `.services-tab-content` pane, but this
  // port only ever rendered the menu — tapping a service updated `active`
  // correctly, but nothing on screen reflected it, which read as "the
  // animation doesn't work" on mobile. This animates the now-rendered
  // content pane (below) in on every change, mirroring the desktop
  // slide's easing so both breakpoints feel like the same interaction.
  useEffect(() => {
    const panel = mobileContentRef.current;
    if (!panel) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    gsap.fromTo(
      panel,
      { opacity: 0, y: 16 },
      { opacity: 1, y: 0, duration: 0.45, ease: "power3.out" }
    );
  }, [active]);

  return (
    <section className="relative">
      <div className="pt-43 w-full max-tablet:pt-24 max-mobile:pt-18" />
      <div className="block mx-auto px-6 max-w-[84rem] w-full before:content-['_'] before:[grid-area:1_/_1_/_2_/_2] before:table after:clear-both after:content-['_'] after:[grid-area:1_/_1_/_2_/_2] after:table max-tablet:px-[1.2rem] max-md:px-[1.0499rem] max-mobile:px-[0.899rem]">
        <div className="inner-wrappar">
          <div className="grid gap-4 grid-rows-[auto] grid-cols-[1fr_0.75fr] auto-cols-[1fr] justify-between items-start max-tablet:gap-6 max-tablet:grid-cols-[repeat(1,1fr)] max-md:gap-5.25 max-md:justify-end max-md:flex-col max-mobile:gap-4.5">
            <div className="gap-4 justify-start items-start max-tablet:gap-[0.8rem] max-md:gap-[0.7rem] max-mobile:flex max-mobile:gap-[0.224rem] max-mobile:flex-col">
              <div className="font-sans text-dim-gray text-[0.875rem] leading-[1.5em]">
                <span className="text-[#d7ba5e] orrenge">{"// "}</span>Solutions
              </div>
              <div className="pt-4 w-full max-tablet:pt-[0.8rem] max-md:pt-[0.7rem] max-mobile:pt-[0.6rem]" />
              <h2 className="font-sans text-[3.75rem] leading-[1.2em] font-medium text-left max-tablet:text-[3rem] max-md:text-[2.5rem] max-mobile:text-[2.25rem]">Creative Services</h2>
            </div>
            <div className="flex justify-end items-center w-full h-full max-tablet:justify-start">
              <div className="services-p-block">
                <div className="max-w-[30rem] max-tablet:max-w-none">
                  {/* <p className="font-size-sm">
                    We build the next in commerce on Shopify. From strategy to design,
                    development to retention, we&rsquo;ve got you covered. 9+ years of
                    experience, 200+ stores launched, 60+ experts and we&rsquo;re your partner
                    from discovery to launch and beyond.
                  </p> */}
                </div>
              </div>
            </div>
          </div>

          <div className="pt-15 w-full max-tablet:pt-12 max-md:pt-10.5 max-mobile:pt-9" />

          <div className="h-[300vh] max-tablet:h-auto" ref={wrapperRef}>
            <div className="grid sticky top-48 gap-4 grid-rows-[auto] grid-cols-[repeat(2,1fr)] auto-cols-[1fr] max-tablet:hidden max-tablet:static max-md:gap-[2.44rem] max-md:grid-cols-[repeat(1,1fr)] max-mobile:gap-[2.1rem]">
              <div className="services-left-item-wrap">
                <div className="flex gap-11 flex-col max-tablet:gap-[2.2rem] max-md:gap-[1.924rem] max-mobile:gap-[1.65rem]">
                  {SERVICES.map((s, i) => {
                    const isActive = active === i;
                    return (
                      <div
                        key={s.number}
                        className={i === 0 ? "flex gap-6 flex-row justify-start items-start max-tablet:gap-[1.2rem] max-md:gap-[1.0499rem] max-mobile:gap-[0.899rem]" : "flex gap-6 flex-row justify-start items-start opacity-30 max-tablet:gap-[1.2rem] max-md:gap-[1.0499rem] max-mobile:gap-[0.899rem]"}
                        style={{
                          opacity: isActive ? 1 : 0.3,
                          cursor: "pointer",
                          transition: "opacity 0.3s ease",
                        }}
                        onClick={() => setActive(i)}
                        role="button"
                        tabIndex={0}
                      >
                        <div className="font-sans text-dim-gray text-[0.875rem] leading-[1.5em]">{s.number}</div>
                        <div className="text-[2.5rem] leading-[1.2em] font-medium max-tablet:text-[2.25rem] max-md:text-[2rem] max-mobile:text-[1.75rem]">{s.title}</div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="flex relative overflow-hidden flex-col max-h-[25.625rem]" ref={windowRef} style={{ height: CARD_WINDOW_HEIGHT }}>
                <div className="flex gap-6 flex-col flex-none max-tablet:gap-[1.2rem] max-md:gap-[1.0499rem] max-mobile:gap-[0.899rem]" ref={listRef}>
                  {SERVICES.map((s, i) => {
                    const isActive = active === i;
                    return (
                      <div
                        key={s.number}
                        ref={(el) => {
                          cardRefs.current[i] = el;
                        }}
                        className="flex flex-col flex-none justify-between h-full max-h-[25.625rem] max-tablet:gap-[1.2rem] max-md:gap-[1.0499rem] max-mobile:gap-[0.899rem]"
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
                        <div className="flex gap-2 flex-wrap max-w-[31.3rem] max-tablet:gap-[0.4rem] max-md:gap-[0.35rem] max-mobile:gap-[0.3rem]">
                          {s.pills.map((pill) => (
                            <div key={pill} className="py-2 px-4 bg-white-smoke rounded-full max-tablet:py-[0.4rem] max-tablet:px-[0.8rem] max-md:py-[0.35rem] max-md:px-[0.7rem] max-mobile:py-[0.3rem] max-mobile:px-[0.6rem]">
                              <div className="mb-0 font-sans text-black text-[1rem] leading-[1.5em] font-normal">{pill}</div>
                            </div>
                          ))}
                        </div>
                        <p>{s.description}</p>
                        <div className="flex flex-col justify-start items-start pb-6 border-b border-b-[#0000001a] max-tablet:pb-[1.2rem] max-md:pb-[1.0499rem] max-mobile:pb-[0.899rem]">
                          <a
                            href={`/services/${s.slug}`}
                            className="flex gap-2 justify-start items-center max-w-full max-tablet:gap-[0.4rem] max-md:gap-[0.35rem] max-mobile:gap-[0.3rem]"
                            tabIndex={isActive ? 0 : -1}
                          >
                            <div className="overflow-hidden h-[1.4rem]">
                              <div className="mb-0 font-sans text-[#d7ba5e] text-[1rem] leading-[1.5em] font-normal">Learn More</div>
                              <div className="mb-0 font-sans text-[#d7ba5e] text-[1rem] leading-[1.5em] font-normal">Learn More</div>
                            </div>
                            <div className="flex overflow-hidden justify-start items-center max-w-[1.2rem]">
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

            <div className="relative hidden before:content-['_'] before:[grid-area:1_/_1_/_2_/_2] before:table after:clear-both after:content-['_'] after:[grid-area:1_/_1_/_2_/_2] after:table max-tablet:block">
              <div className="relative max-tablet:flex max-tablet:gap-4 max-tablet:flex-col max-tablet:justify-start max-tablet:items-start max-md:gap-3.5 max-mobile:gap-3">
                {SERVICES.map((s, i) => (
                  <a
                    key={s.number}
                    onClick={(e) => {
                      e.preventDefault();
                      setActive(i);
                    }}
                    aria-current={active === i ? "true" : undefined}
                    className="inline-block relative py-2.25 px-7.5 max-w-full align-top text-left text-[#222] no-underline bg-[#ddd] cursor-pointer focus:outline-0 max-tablet:p-0 max-tablet:bg-[#ddd0] max-tablet:opacity-35 max-tablet:[transition:opacity_0.3s_ease] max-tablet:aria-[current=true]:bg-[#ddd0] max-tablet:aria-[current=true]:opacity-100 max-mobile:block"
                  >
                    <div className={i === 0 ? "flex gap-6 flex-row justify-start items-start max-tablet:gap-[1.2rem] max-md:gap-[1.0499rem] max-mobile:gap-[0.899rem]" : "flex gap-6 flex-row justify-start items-start opacity-30 max-tablet:gap-[1.2rem] max-md:gap-[1.0499rem] max-mobile:gap-[0.899rem]"}>
                      <div className="font-sans text-dim-gray text-[0.875rem] leading-[1.5em]">{s.number}</div>
                      <div className="text-[2.5rem] leading-[1.2em] font-medium max-tablet:text-[2.25rem] max-md:text-[2rem] max-mobile:text-[1.75rem]">{s.title}</div>
                    </div>
                  </a>
                ))}
              </div>

              <div className="max-tablet:mt-10 max-md:mt-8.75 max-mobile:mt-7.5" ref={mobileContentRef}>
                <div className="flex gap-2 flex-wrap max-w-[31.3rem] max-tablet:gap-[0.4rem] max-md:gap-[0.35rem] max-mobile:gap-[0.3rem]">
                  {SERVICES[active].pills.map((pill) => (
                    <div key={pill} className="py-2 px-4 bg-white-smoke rounded-full max-tablet:py-[0.4rem] max-tablet:px-[0.8rem] max-md:py-[0.35rem] max-md:px-[0.7rem] max-mobile:py-[0.3rem] max-mobile:px-[0.6rem]">
                      <div className="mb-0 font-sans text-black text-[1rem] leading-[1.5em] font-normal">{pill}</div>
                    </div>
                  ))}
                </div>
                <p>{SERVICES[active].description}</p>
                <div className="flex flex-col justify-start items-start pb-6 border-b border-b-[#0000001a] max-tablet:pb-[1.2rem] max-md:pb-[1.0499rem] max-mobile:pb-[0.899rem]">
                  <a href={`/services/${SERVICES[active].slug}`} className="flex gap-2 justify-start items-center max-w-full max-tablet:gap-[0.4rem] max-md:gap-[0.35rem] max-mobile:gap-[0.3rem]">
                    <div className="overflow-hidden h-[1.4rem]">
                      <div className="mb-0 font-sans text-[#d7ba5e] text-[1rem] leading-[1.5em] font-normal">Learn More</div>
                      <div className="mb-0 font-sans text-[#d7ba5e] text-[1rem] leading-[1.5em] font-normal">Learn More</div>
                    </div>
                    <div className="flex overflow-hidden justify-start items-center max-w-[1.2rem]">
                      <CaretIcon />
                      <CaretIcon />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-20 max-tablet:pt-16 max-md:pt-14 max-mobile:pt-12" />
    </section>
  );
}
