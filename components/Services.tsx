"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { SERVICES } from "@/lib/services-data";
import { ArrowButton, Eyebrow, GoldWord, H2_CLASS, Sparkle } from "@/components/ui/brand";

const pad = (n: number) => String(n).padStart(2, "0");

/** The black showcase panel for one service. */
function ServicePanel({ index }: { index: number }) {
  const service = SERVICES[index];
  return (
    <div className="relative flex h-full min-h-0 flex-col justify-between gap-6 overflow-hidden rounded-[1.875rem] bg-black p-[clamp(1.5rem,3.2vh,2.5rem)] text-white max-mobile:rounded-2xl">
      {/* giant number */}
      <span
        aria-hidden
        className="pointer-events-none absolute right-2 -top-6 select-none text-[clamp(8rem,26vh,15rem)] font-bold leading-none tracking-tighter text-white/[0.06] max-md:text-[10rem]"
      >
        {service.number}
      </span>
      {/* gold glow */}
      <div aria-hidden className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-[#d7ba5e]/25 blur-3xl" />

      {/* key re-mounts the content so it animates in on every change */}
      <div key={service.slug} className="relative min-h-0 animate-fade-up">
        <div className="flex items-center gap-1 font-sans text-[0.875rem] uppercase leading-[1.5em]">
          <span className="text-[#d7ba5e]">{"//"}</span>
          <span className="text-white/70">Service {service.number}</span>
        </div>
        <h3 className="mt-3 font-sans text-[clamp(1.75rem,4.4vh,2.75rem)] font-medium leading-[1.08em] tracking-tight text-white max-md:text-[1.75rem]">
          {service.title}
        </h3>
        <p className="mb-0 mt-4 line-clamp-4 max-w-lg font-sans text-[clamp(0.875rem,1.9vh,1rem)] leading-[1.55em] text-white/70 max-tablet:line-clamp-none">{service.description}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {service.pills.map((pill) => (
            <span
              key={pill}
              className="flex items-center gap-2 rounded-full border border-white/15 px-3.5 py-1.5 font-sans text-[0.8125rem] leading-[1.5em] text-white/85"
            >
              <Sparkle className="w-2.5 text-[#d7ba5e]" />
              {pill}
            </span>
          ))}
        </div>
      </div>

      <div className="relative flex shrink-0 flex-wrap items-center justify-between gap-4">
        <ArrowButton href={`/services/${service.slug}`}>Learn More</ArrowButton>
        <span className="font-sans text-[0.875rem] tabular-nums text-white/50">
          <span className="text-[1.5rem] font-medium text-[#d7ba5e]">{pad(index + 1)}</span> / {pad(SERVICES.length)}
        </span>
      </div>
    </div>
  );
}

export default function Services() {
  const [active, setActive] = useState(0);
  const [open, setOpen] = useState(0); // mobile accordion
  const wrapperRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLSpanElement>(null);

  // Desktop: the section stays pinned (plain CSS sticky) while scrolling
  // through the tall wrapper steps through the services one by one.
  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const mm = gsap.matchMedia();
    mm.add("(min-width: 992px)", () => {
      const trigger = ScrollTrigger.create({
        trigger: wrapper,
        start: "top top",
        end: "bottom bottom",
        onUpdate: (self) => {
          const index = Math.min(SERVICES.length - 1, Math.floor(self.progress * SERVICES.length));
          setActive((prev) => (prev === index ? prev : index));
          if (progressRef.current) progressRef.current.style.transform = `scaleY(${self.progress})`;
        },
      });
      return () => trigger.kill();
    });
    return () => mm.revert();
  }, []);

  // Clicking a service scrolls to its step, so scroll and click never disagree.
  const goTo = (index: number) => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;
    const scrollable = wrapper.offsetHeight - window.innerHeight;
    const top = wrapper.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({ top: top + (scrollable * (index + 0.5)) / SERVICES.length, behavior: "smooth" });
  };

  return (
    <section className="relative">
      <div className="mx-auto container px-6 pt-30 lg:px-8 max-tablet:pt-20 max-md:pt-18 max-mobile:pt-16">
        <div className="flex items-end justify-between gap-8 max-md:flex-col max-md:items-start">
          <div>
            <Eyebrow>Solutions</Eyebrow>
            <h2 className={`mt-4 ${H2_CLASS}`}>
              Creative <GoldWord>Services</GoldWord>
            </h2>
          </div>
          <ArrowButton href="/services" variant="outline">
            All services
          </ArrowButton>
        </div>
      </div>

      {/* Desktop: pinned, scroll-driven showcase */}
      <div ref={wrapperRef} className="max-tablet:hidden" style={{ height: `${SERVICES.length * 55 + 100}vh` }}>
        <div className="sticky top-0 flex h-screen items-center overflow-hidden pb-6 pt-24">
          <div className="mx-auto container grid w-full grid-cols-12 items-center gap-8 px-6 lg:px-8">
            <div className="relative col-span-5 min-w-0 pl-8">
              {/* progress rail */}
              <span className="absolute bottom-2 left-0 top-2 w-px bg-black/10" />
              <span ref={progressRef} className="absolute bottom-2 left-0 top-2 w-px origin-top scale-y-0 bg-[#d7ba5e]" />

              <div className="flex flex-col">
                {SERVICES.map((service, i) => {
                  const isActive = active === i;
                  return (
                    <button
                      key={service.slug}
                      type="button"
                      onClick={() => goTo(i)}
                      aria-current={isActive ? "true" : undefined}
                      className="group flex min-w-0 cursor-pointer items-baseline gap-4 py-[clamp(0.3rem,1.3vh,0.75rem)] text-left"
                    >
                      <span
                        className={`font-sans text-[0.8125rem] font-medium tabular-nums transition-colors duration-500 ${
                          isActive ? "text-[#d7ba5e]" : "text-dim-gray"
                        }`}
                      >
                        {service.number}
                      </span>
                      <span
                        className={`min-w-0 origin-left font-sans font-medium leading-[1.15em] tracking-tight transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                          isActive
                            ? "text-[clamp(1.5rem,min(4.4vh,2.9vw),2.75rem)] text-black"
                            : "text-[clamp(1.0625rem,min(2.7vh,1.9vw),1.625rem)] text-black/30 group-hover:text-black/60"
                        }`}
                      >
                        {service.title}
                      </span>
                      <Sparkle
                        className={`w-4 shrink-0 self-center text-[#d7ba5e] transition-all duration-500 ${
                          isActive ? "rotate-90 scale-100 opacity-100" : "scale-0 opacity-0"
                        }`}
                      />
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="col-span-7 h-[min(34rem,calc(100vh-9rem))] min-w-0">
              <ServicePanel index={active} />
            </div>
          </div>
        </div>
      </div>

      {/* Tablet and mobile: tap a service to open it */}
      <div className="mx-auto container hidden px-6 pb-20 pt-12 max-tablet:block max-md:pb-16 max-md:pt-9">
        <div className="border-t border-light-transparent-black">
          {SERVICES.map((service, i) => {
            const isOpen = open === i;
            return (
              <div key={service.slug} className="relative border-b border-light-transparent-black">
                <span
                  className={`absolute inset-x-0 bottom-[-1px] h-px origin-left bg-[#d7ba5e] transition-transform duration-500 ${
                    isOpen ? "scale-x-100" : "scale-x-0"
                  }`}
                />
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                  className="grid w-full cursor-pointer grid-cols-[auto_1fr_auto] items-center gap-x-4 py-5 text-left"
                >
                  <span className={`text-[0.8125rem] font-medium tabular-nums ${isOpen ? "text-[#d7ba5e]" : "text-dim-gray"}`}>
                    {service.number}
                  </span>
                  <span className="font-sans text-[1.75rem] font-medium leading-[1.2em] tracking-tight text-black max-mobile:text-[1.375rem]">
                    {service.title}
                  </span>
                  <span
                    className={`flex h-9 w-9 items-center justify-center rounded-full border transition-all duration-500 ${
                      isOpen ? "rotate-90 border-[#d7ba5e] bg-[#d7ba5e] text-white" : "border-light-transparent-black text-black"
                    }`}
                  >
                    <ArrowUpRight size={16} />
                  </span>
                </button>
                <div
                  className="grid transition-[grid-template-rows] duration-500 ease-out"
                  style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                >
                  <div className="overflow-hidden">
                    <div className="pb-6">
                      {isOpen && <ServicePanel index={i} />}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
