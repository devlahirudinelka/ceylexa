import { ArrowButton, Eyebrow, Sparkle } from "@/components/ui/brand";
import Reveal from "@/components/ui/Reveal";

export default function CTASection() {
  return (
    <section id="cta" className="relative py-24 max-md:py-16">
      <Reveal className="mx-auto container px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[1.875rem] bg-black px-10 py-20 text-white max-md:px-6 max-md:py-14 max-mobile:rounded-2xl">
          <div aria-hidden className="pointer-events-none absolute -right-6 -top-10 select-none text-[16rem] font-bold leading-none text-white/[0.05] max-md:text-[9rem]">
            CEYLEXA
          </div>
          <div className="relative grid gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <Eyebrow className="[&>span:last-child]:text-white/70">Let&apos;s talk</Eyebrow>
              <h2 className="mt-4 font-sans text-[3.75rem] font-medium leading-[1.08em] tracking-tight text-white max-tablet:text-[3rem] max-md:text-[2.25rem]">
                Your competition is already investing in digital.{" "}
                <span className="italic text-[#d7ba5e]">Are you?</span>
              </h2>
              <p className="mb-0 mt-6 max-w-xl font-sans text-[1rem] leading-[1.6em] text-white/70">
                Book your consultation today. We&apos;ll show you exactly
                what&apos;s missing &mdash; and what it would take to close the gap.
                No obligation. No credit card. No sales pressure. Just strategy.
              </p>
            </div>
            <div className="flex flex-col items-start gap-3 lg:col-span-4 lg:items-end">
              <ArrowButton href="/contact" variant="gold">
                Book a Consultation
              </ArrowButton>
              <ArrowButton href="/about" variant="light">
                Learn more about us
              </ArrowButton>
              <div className="mt-2 flex items-center gap-2 text-[0.875rem] text-white/60">
                <Sparkle className="w-3.5 text-[#d7ba5e]" />
                Sri Lanka &amp; New Zealand
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
