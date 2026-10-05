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
    <div className="overflow-clip">
      <Navbar />

      <div className="main">
        <section className="relative overflow-hidden bg-background pb-8 pt-40 lg:pt-44">
          <div className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[720px] -translate-x-1/2 -translate-y-1/3 rounded-full bg-gradient-to-br from-accent/20 via-accent-2/10 to-transparent blur-3xl" />
          <div className="mx-auto  container px-6 text-left lg:px-8">
            <Reveal>
              {/* <Badge>Services</Badge> */}
              <h1 className="tracking-tight">
                {SERVICES_INTRO.heading}
                
                  {" "}
                  {SERVICES_INTRO.headingAccent}
                
              </h1>
              {SERVICES_INTRO.paragraphs.map((paragraph) => (
                <p key={paragraph} className="mx-auto mt-6 text-muted">
                  {paragraph}
                </p>
              ))}
            </Reveal>
          </div>
        </section>

        <ServicesGrid />
        <ServicePackages />

        <section className="relative bg-background py-24">
          <div className="mx-auto  container px-6 text-center lg:px-8">
            <Reveal>
              <h2 className="tracking-tight">{PLATFORM_PARTNERS.heading}</h2>
              <p className="mx-auto max-w-3xl">{PLATFORM_PARTNERS.body}</p>
              <ul className="flex flex-row items-center justify-center mt-5">
                {PLATFORM_PARTNERS.partners.map((partner) => (
                  <li
                    key={partner}
                    className="relative overflow-hidden bg-[linear-gradient(180deg,rgba(255,255,255,0.8),rgba(255,255,255,0.6))] border border-border backdrop-blur-[6px] [--mx:50%] [--my:50%] [&>*]:relative [&>*]:z-1 after:absolute after:-inset-0.25 after:z-0 after:content-[''] after:bg-[radial-gradient(480px_circle_at_var(--mx)_var(--my),rgba(215,186,94,0.14),transparent_45%)] after:rounded-[inherit] after:opacity-0 after:[transition:opacity_0.4s_ease] after:pointer-events-none hover:after:opacity-100 bento-card rounded-full px-5 py-2 text-[0.875rem] font-medium"
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
