import type { Metadata } from "next";
import Navbar from "@/components/home/Navbar";
import Footer from "@/components/home/Footer";
import CTASection from "@/components/home/CTASection";
import ServicePackages from "@/components/ServicePackages";
import ServicesGrid from "@/components/ServicesGrid";
import { PLATFORM_PARTNERS, SERVICES, SERVICES_INTRO } from "@/lib/services-data";
import { ArrowButton, Eyebrow, GoldWord, H2_CLASS, PillarStrip, Sparkle } from "@/components/ui/brand";
import Reveal from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Services & Packages — Ceylexa",
  description:
    "Web design, digital marketing, content creation, paid media, branding, and influencer campaigns — plus Starter, Growth, and Premium social media packages from Ceylexa.",
};

export default function ServicesPage() {
  return (
    <div className="overflow-clip">
      <Navbar />

      <div className="main">
        <section className="relative overflow-hidden">
          <div aria-hidden className="pointer-events-none absolute inset-x-0 top-24 -z-1 select-none text-center text-[20rem] font-bold leading-[0.9em] text-cultured max-tablet:text-[10rem] max-md:text-[7rem] max-mobile:text-[4.5rem]">SERVICES</div>
          <div className="mx-auto container px-6 lg:px-8 pb-16 pt-40 max-md:pt-32">
            <Reveal>
              <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
                <div className="lg:col-span-8">
                  <Eyebrow>Services</Eyebrow>
                  <h1 className="mt-5 font-sans text-[5.5rem] font-semibold leading-[1.02em] tracking-tight max-tablet:text-[4.25rem] max-md:text-[3.25rem] max-mobile:text-[2.5rem]">
                    {SERVICES_INTRO.heading}{" "}
                    <GoldWord>{SERVICES_INTRO.headingAccent}</GoldWord>
                  </h1>
                </div>
                <div className="flex flex-col gap-4 lg:col-span-4">
                  {SERVICES_INTRO.paragraphs.map((paragraph) => (
                    <p key={paragraph} className="mb-0 font-sans text-[1rem] leading-[1.6em] text-black">
                      {paragraph}
                    </p>
                  ))}
                  <div className="mt-2 flex flex-wrap gap-3">
                    <ArrowButton href="/contact">Start a Project</ArrowButton>
                    <ArrowButton href="#packages" variant="light">
                      View packages
                    </ArrowButton>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
          <PillarStrip items={SERVICES.slice(0, 4).map((service) => service.title)} />
        </section>

        <ServicesGrid />
        <ServicePackages />

        <section className="relative">
          <div className="mx-auto container px-6 lg:px-8 py-24 max-md:py-16">
            <Reveal>
              <div className="grid gap-10 border-t border-light-transparent-black pt-14 lg:grid-cols-12 lg:gap-16">
                <div className="lg:col-span-5">
                  <Eyebrow>Partners</Eyebrow>
                  <h2 className={`mt-4 ${H2_CLASS}`}>{PLATFORM_PARTNERS.heading}</h2>
                </div>
                <div className="lg:col-span-7">
                  <p className="mb-0 font-sans text-[1rem] leading-[1.6em] text-black">{PLATFORM_PARTNERS.body}</p>
                  <ul className="mt-8 flex flex-wrap gap-3">
                    {PLATFORM_PARTNERS.partners.map((partner) => (
                      <li
                        key={partner}
                        className="flex items-center gap-2 rounded-full border border-light-transparent-black px-5 py-2.5 font-sans text-[1rem] font-medium text-black transition-colors duration-300 hover:border-[#d7ba5e]"
                      >
                        <Sparkle className="w-3.5 text-[#d7ba5e]" />
                        {partner}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <CTASection />
      </div>

      <Footer />
    </div>
  );
}
