import type { Metadata } from "next";
import Navbar from "@/components/home/Navbar";
import Footer from "@/components/home/Footer";
import CTASection from "@/components/home/CTASection";
import Careers, { ROLES } from "@/components/about/Careers";
import Reveal from "@/components/ui/Reveal";
import { ArrowButton, Eyebrow, GoldWord, PillarStrip } from "@/components/ui/brand";
import { CONTACT_EMAIL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Careers — Ceylexa",
  description:
    "Join #TeamCeylexa. Explore open roles in digital marketing, design, content, web development and project management in Sri Lanka and New Zealand.",
};

const LOCATIONS = Array.from(new Set(ROLES.map((role) => role.location)));

const STATS = [
  { value: String(ROLES.length).padStart(2, "0"), label: "Open roles" },
  { value: String(LOCATIONS.length).padStart(2, "0"), label: LOCATIONS.join(" · ") },
  { value: "Full time", label: "All current positions" },
];

export default function CareersPage() {
  return (
    <div className="overflow-clip">
      <Navbar />

      <div className="main">
        <section className="relative overflow-hidden">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-24 -z-1 select-none text-center text-[20rem] font-bold leading-[0.9em] text-cultured max-tablet:text-[10rem] max-md:text-[7rem] max-mobile:text-[4.5rem]"
          >
            CAREERS
          </div>
          <div className="mx-auto container px-6 pt-40 lg:px-8 max-md:pt-32">
            <Reveal>
              <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
                <div className="lg:col-span-8">
                  <Eyebrow>Careers</Eyebrow>
                  <h1 className="mt-5 font-sans text-[5.5rem] font-semibold leading-[1.02em] tracking-tight max-tablet:text-[4.25rem] max-md:text-[3.25rem] max-mobile:text-[2.5rem]">
                    Join <GoldWord>#TeamCeylexa</GoldWord>
                  </h1>
                </div>
                <div className="flex flex-wrap gap-3 lg:col-span-4 lg:justify-end">
                  <ArrowButton href="#careers">See open roles</ArrowButton>
                  <ArrowButton href={`mailto:${CONTACT_EMAIL}`} variant="light">
                    Email us
                  </ArrowButton>
                </div>
              </div>
            </Reveal>

            <div className="mt-14 grid grid-cols-3 border-t border-light-transparent-black max-mobile:grid-cols-1">
              {STATS.map((stat, i) => (
                <div
                  key={stat.label}
                  className={`py-8 max-mobile:py-5 ${
                    i > 0
                      ? "border-l border-light-transparent-black pl-8 max-md:pl-5 max-mobile:border-l-0 max-mobile:border-t max-mobile:pl-0"
                      : ""
                  }`}
                >
                  <div className="text-[3.75rem] font-medium leading-none text-black max-tablet:text-[3rem] max-md:text-[2.25rem]">
                    {stat.value}
                  </div>
                  <div className="mt-2 font-sans text-[0.875rem] leading-[1.5em] text-dim-gray">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          <PillarStrip items={ROLES.slice(0, 4).map((role) => role.title)} />
        </section>

        <Careers />
        <CTASection />
      </div>

      <Footer />
    </div>
  );
}
