import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Mail, MapPin, Phone, ArrowRight } from "lucide-react";
import { SERVICES } from "@/lib/services-data";
import { CEYLEXA_SOCIALS, OFFICES } from "@/lib/site";
import CreamGradientBackground from "./CreamGradientBackground";

const QUICK_LINKS = [
  { label: "Projects", href: "/project" },
  { label: "Clients", href: "/clients" },
  { label: "About", href: "/about" },
  { label: "Careers", href: "/about#careers" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

const LEGAL_LINKS = [
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/project" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-background">
      <CreamGradientBackground />

      {/* Modern, High-End CTA Section */}
      <section className="relative border-t border-border/60 overflow-hidden">
        {/* Subtle background decorative shapes */}
        <div className="absolute right-0 top-0 -z-10 h-96 w-96 rounded-full bg-gradient-to-br from-accent-2/5 to-transparent blur-3xl" />
        <div className="absolute left-10 bottom-0 -z-10 h-72 w-72 rounded-full bg-gradient-to-tr from-accent-1/5 to-transparent blur-2xl" />

        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-36">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-8 max-w-3xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-accent-2/20 bg-accent-2/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-accent-2">
                <span className="h-1.5 w-1.5 rounded-full bg-accent-2 animate-pulse" />
                Let&apos;s build something meaningful
              </span>

              <h2 className="tracking-[-0.04em] text-foreground">
                Ready to engineer your <br className="hidden sm:inline" />
                <span className="relative inline-block text-accent-2 font-bold italic">
                  digital edge?
                  <span className="absolute bottom-1 left-0 h-[4px] w-full bg-accent-2/10 rounded-full" />
                </span>
              </h2>
            </div>

            <div className="lg:col-span-4 lg:justify-self-end">
              <Link
                href="/contact"
                className="flex gap-2 flex-col max-tablet:gap-[0.4rem] max-md:gap-[0.35rem] max-mobile:gap-[0.3rem] group relative items-center overflow-hidden rounded-full py-4 pl-8 pr-4 text-sm font-semibold text-white shadow-2xl transition-all duration-300 hover:shadow-accent-2/10"
              >
                <span>Book a Consultation</span>
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-black transition-transform duration-500 group-hover:rotate-45">
                  <ArrowUpRight size={20} />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Directory & Brand Hub */}
      <section className="relative border-t border-border/80 bg-white/[0.02] backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:py-24 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-12 lg:gap-8">
            {/* Brand Card Column */}
            <div className="lg:col-span-4 flex flex-col justify-between">
              <div>
                <Link
                  href="/"
                  className="inline-flex transition-opacity hover:opacity-90"
                >
                  <Image
                    src="/images/logo/text_with_logo.png"
                    alt="Ceylexa"
                    width={2702}
                    height={856}
                    className="h-9 w-auto"
                  />
                </Link>

                <p className="max-w-sm text-[0.875rem]">
                  A modern digital marketing agency intersecting strategy, bold
                  design, and next-generation technologies to deliver
                  conversion-focused results.
                </p>
              </div>

              {/* Dynamic Interactive Contact Strips */}
              <div className="mt-8 space-y-3.5">
                <a
                  href="mailto:hello@ceylexa.com"
                  className="flex gap-2 flex-col max-tablet:gap-[0.4rem] max-md:gap-[0.35rem] max-mobile:gap-[0.3rem] group w-fit items-center rounded-xl border border-border/60 p-1.5 pr-4 text-xs font-semibold text-foreground transition-all duration-300 hover:border-accent-2/40"
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-background text-foreground transition-colors group-hover:bg-[#111] group-hover:text-white">
                    <Mail size={13} />
                  </span>
                  hello@ceylexa.com
                </a>

                <a
                  href={OFFICES[1].phoneHref}
                  className="flex gap-2 flex-col max-tablet:gap-[0.4rem] max-md:gap-[0.35rem] max-mobile:gap-[0.3rem] group w-fit items-center rounded-xl border border-border/60 p-1.5 pr-4 text-xs font-semibold text-foreground transition-all duration-300 hover:border-accent-2/40"
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-background text-foreground transition-colors group-hover:bg-[#111] group-hover:text-white">
                    <Phone size={13} />
                  </span>
                  {OFFICES[1].phone}
                </a>
              </div>
            </div>

            {/* Structured Navigation Grid */}
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-8 lg:border-l lg:border-border/30 lg:pl-16">
              {/* Column 1: Services */}
              <div className="space-y-6">
                <FooterHeading>Services</FooterHeading>
                <ul className="space-y-3.5">
                  {SERVICES.map((service) => (
                    <li key={service.slug}>
                      <Link
                        href={`/services/${service.slug}`}
                        className="flex gap-2 flex-col max-tablet:gap-[0.4rem] max-md:gap-[0.35rem] max-mobile:gap-[0.3rem] group items-center text-[14px] font-medium text-muted transition-colors hover:text-foreground"
                      >
                        <span className="h-[1px] w-0 bg-accent-2 transition-all duration-300 group-hover:w-3" />
                        <span className="transform transition-transform duration-300 group-hover:translate-x-1">
                          {service.title}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Column 2: Explore */}
              <div className="space-y-6">
                <FooterHeading>Explore</FooterHeading>
                <ul className="space-y-3.5">
                  {QUICK_LINKS.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="flex gap-2 flex-col max-tablet:gap-[0.4rem] max-md:gap-[0.35rem] max-mobile:gap-[0.3rem] group items-center text-[14px] font-medium text-muted transition-colors hover:text-foreground"
                      >
                        <span className="h-[1px] w-0 bg-accent-2 transition-all duration-300 group-hover:w-3" />
                        <span className="transform transition-transform duration-300 group-hover:translate-x-1">
                          {link.label}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Column 3: Follow */}
              <div className="col-span-2 sm:col-span-1 space-y-6">
                <FooterHeading>Follow</FooterHeading>
                <ul className="space-y-3.5">
                  {CEYLEXA_SOCIALS.slice(0, 4).map((social) => (
                    <li key={social.label}>
                      <a
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex gap-2 flex-col max-tablet:gap-[0.4rem] max-md:gap-[0.35rem] max-mobile:gap-[0.3rem] group items-center text-[14px] font-medium text-muted transition-colors hover:text-foreground"
                      >
                        <span className="h-[1px] w-0 bg-accent-2 transition-all duration-300 group-hover:w-3" />
                        <span className="transform transition-transform duration-300 group-hover:translate-x-1">
                          {social.label}
                        </span>
                        <ArrowUpRight
                          size={12}
                          className="opacity-0 transition-opacity duration-300 group-hover:opacity-100 text-accent-2"
                        />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Styled Physical Locations Layout */}
          <div className="mt-20 border-t border-border/60 pt-16">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
              <div>
                <FooterHeading>Our Creative Labs</FooterHeading>
                <p className="text-[0.75rem]">
                  Pop by or connect with our teams worldwide.
                </p>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {OFFICES.map((office) => (
                <div
                  key={office.name}
                  className="flex gap-2 flex-col max-tablet:gap-[0.4rem] max-md:gap-[0.35rem] max-mobile:gap-[0.3rem] group relative overflow-hidden rounded-2xl border border-border/60 bg-white/20 p-6 backdrop-blur-md transition-all duration-300 hover:border-accent-2/30 hover:bg-white/50 hover:shadow-xl"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#111] text-white">
                        <MapPin size={14} />
                      </span>
                      <span className="text-sm font-semibold tracking-wide text-foreground">
                        {office.city}
                      </span>
                    </div>
                    {/* Tiny pulsing online status */}
                    <span className="flex items-center gap-1.5 rounded-full bg-accent-2/10 px-2 py-1 text-[10px] font-medium text-accent-2">
                      <span className="h-1 w-1 rounded-full bg-accent-2 animate-ping" />
                      HQ Support
                    </span>
                  </div>

                  <div className="mt-5 pl-11 text-xs leading-6 text-muted">
                    <p className="font-medium">{office.name}</p>

                    <div className="mt-3 flex flex-wrap gap-x-3 gap-y-1">
                      <a
                        href={office.phoneHref}
                        className="transition-colors hover:text-accent-2"
                      >
                        {office.phone}
                      </a>
                      <span className="opacity-50">•</span>
                      <a
                        href={`mailto:${office.email}`}
                        className="transition-colors hover:text-accent-2"
                      >
                        {office.email}
                      </a>
                    </div>

                    <a
                      href={office.websiteHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-flex items-center gap-1 font-semibold text-foreground transition-all duration-300 hover:text-accent-2"
                    >
                      Visit site map
                      <ArrowRight
                        size={10}
                        className="transform transition-transform group-hover:translate-x-1"
                      />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Legal & Compliance Strip */}
      <section className="relative border-t border-border/40 bg-foreground text-background">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-6 lg:px-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[11px] font-medium">
            © {new Date().getFullYear()} Ceylexa Digital. Devised with
            precision.
          </p>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[11px] font-medium text-muted/80">
            {LEGAL_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </footer>
  );
}

function FooterHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="mb-0 uppercase tracking-[0.25em] text-accent-2/90">
      {children}
    </h3>
  );
}
