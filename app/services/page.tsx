import type { Metadata } from "next";
import Navbar from "@/components/home/Navbar";
import Footer from "@/components/home/Footer";
import CTASection from "@/components/home/CTASection";
import ServicePackages from "@/components/ServicePackages";
import ServicesGrid from "@/components/ServicesGrid";
import { PLATFORM_PARTNERS, SERVICES_INTRO } from "@/lib/services-data";
import Badge from "@/components/ui/Badge";
import Reveal from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Services & Packages — Ceylexa",
  description:
    "Web design, digital marketing, content creation, paid media, branding, and influencer campaigns — plus Starter, Growth, and Premium social media packages from Ceylexa.",
};

export default function ServicesPage() {
  return (
    <div className="page-wrapper">
      <Navbar />

      <div className="main">
        <section className="relative overflow-hidden bg-background pb-8 pt-40 lg:pt-44">
          <div className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[720px] -translate-x-1/2 -translate-y-1/3 rounded-full bg-gradient-to-br from-accent/20 via-accent-2/10 to-transparent blur-3xl" />
          <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
            <Reveal>
              <Badge>Services</Badge>
              <h1 className="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl">
                {SERVICES_INTRO.heading}
                <span className="text-gradient"> {SERVICES_INTRO.headingAccent}</span>
              </h1>
              {SERVICES_INTRO.paragraphs.map((paragraph) => (
                <p key={paragraph} className="mx-auto mt-5 max-w-2xl text-muted">
                  {paragraph}
                </p>
              ))}
            </Reveal>
          </div>
        </section>

        <ServicesGrid />
        <ServicePackages />

        <section className="relative bg-background py-24">
          <div className="mx-auto max-w-6xl px-6 text-center lg:px-8">
            <Reveal>
              <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                {PLATFORM_PARTNERS.heading}
              </h2>
              <p className="mx-auto mt-5 max-w-3xl text-muted">{PLATFORM_PARTNERS.body}</p>
              <ul className="mt-8 flex flex-wrap items-center justify-center gap-3">
                {PLATFORM_PARTNERS.partners.map((partner) => (
                  <li
                    key={partner}
                    className="bento-card rounded-full px-5 py-2 text-sm font-medium text-foreground/80"
                  >
                    {partner}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>

        <CTASection />
      </div>

      <Footer />
    </div>
  );
}
