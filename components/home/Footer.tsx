"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { ArrowButton, GoldWord, Sparkle } from "@/components/ui/brand";
import { SERVICES } from "@/lib/services-data";
import { CEYLEXA_SOCIALS, CONTACT_EMAIL, OFFICES } from "@/lib/site";
import CreamGradientBackground from "./CreamGradientBackground";

const EXPLORE = [
  { label: "Projects", href: "/project" },
  { label: "Clients", href: "/clients" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

const linkClass = "font-sans text-[0.9375rem] leading-[1.5em] text-dim-gray transition-colors duration-300 hover:text-[#d7ba5e]";

// Sticky "reveal" footer: it stays fixed to the bottom of the viewport and the
// page content scrolls up to uncover it. The wrapper reserves the footer's
// height and clips it so it only shows once the end of the page is reached.
export default function Footer() {
  const innerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<number>();

  useEffect(() => {
    const el = innerRef.current;
    if (!el) return;
    const update = () => setHeight(el.offsetHeight);
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return (
    <div className="relative w-full [clip-path:inset(0)]" style={{ height }}>
      <div ref={innerRef} className="fixed bottom-0 left-0 w-full">
        <FooterContent />
      </div>
    </div>
  );
}

function FooterContent() {
  return (
    <footer className="relative overflow-hidden border-t border-light-transparent-black bg-background">
      <CreamGradientBackground />

      <div className="relative mx-auto container px-6 lg:px-8">
        {/* Call to action */}
        <div className="grid gap-6 border-b border-light-transparent-black py-12 lg:grid-cols-12 lg:items-center max-md:py-9">
          <div className="lg:col-span-7">
            <p className="mb-0 font-sans text-[2.25rem] font-medium leading-[1.12em] tracking-tight text-black max-md:text-[1.625rem]">
              Have a project in <GoldWord>mind?</GoldWord> Let&apos;s talk.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 lg:col-span-5 lg:justify-end">
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="border-b border-black pb-0.5 font-sans text-[1rem] font-medium text-black transition-colors duration-300 hover:border-[#d7ba5e] hover:text-[#d7ba5e]"
            >
              {CONTACT_EMAIL}
            </a>
            <ArrowButton href="/contact">Start a project</ArrowButton>
          </div>
        </div>

        {/* Directory */}
        <div className="grid gap-x-8 gap-y-10 py-14 sm:grid-cols-2 lg:grid-cols-12 max-md:py-10">
          <div className="sm:col-span-2 lg:col-span-4">
            <Link href="/" className="inline-flex">
              <Image
                src="/images/logo/text_with_logo.png"
                alt="Ceylexa"
                width={2702}
                height={856}
                className="h-9 w-auto"
              />
            </Link>
            <p className="mb-0 mt-5 max-w-[19rem] font-sans text-[0.9375rem] leading-[1.6em] text-dim-gray">
              A digital marketing agency helping brands build, connect and
              grow, from Sri Lanka and New Zealand.
            </p>
            <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2">
              {CEYLEXA_SOCIALS.slice(0, 5).map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-1 font-sans text-[0.875rem] font-medium text-black transition-colors duration-300 hover:text-[#d7ba5e]"
                >
                  {s.label}
                  <ArrowUpRight size={13} className="text-dim-gray transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#d7ba5e]" />
                </a>
              ))}
            </div>
          </div>

          <Column title="Services" className="lg:col-span-3">
            {SERVICES.map((s) => (
              <Link key={s.slug} href={`/services/${s.slug}`} className={linkClass}>
                {s.title}
              </Link>
            ))}
          </Column>

          <Column title="Company" className="lg:col-span-2">
            {EXPLORE.map((l) => (
              <Link key={l.label} href={l.href} className={linkClass}>
                {l.label}
              </Link>
            ))}
          </Column>

          <Column title="Offices" className="sm:col-span-2 lg:col-span-3">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
              {OFFICES.map((office) => (
                <address key={office.name} className="flex flex-col gap-1 not-italic">
                  <span className="font-sans text-[0.9375rem] font-medium leading-[1.5em] text-black">{office.city}</span>
                  <a href={office.phoneHref} className={linkClass}>
                    {office.phone}
                  </a>
                  <a href={`mailto:${office.email}`} className={linkClass}>
                    {office.email}
                  </a>
                  <a href={office.websiteHref} target="_blank" rel="noopener noreferrer" className={linkClass}>
                    {office.website}
                  </a>
                </address>
              ))}
            </div>
          </Column>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col gap-3 border-t border-light-transparent-black py-6 font-sans text-[0.8125rem] text-dim-gray sm:flex-row sm:items-center sm:justify-between">
          <p className="mb-0">© {new Date().getFullYear()} Ceylexa Digital. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <Sparkle className="w-3 text-[#d7ba5e]" />
              Sri Lanka &amp; New Zealand
            </span>
            <a href="#top" className="group inline-flex items-center gap-1.5 font-medium text-black transition-colors duration-300 hover:text-[#d7ba5e]">
              Back to top
              <ArrowUpRight size={13} className="-rotate-45 transition-transform duration-300 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function Column({ title, children, className = "" }: { title: string; children: React.ReactNode; className?: string }) {
  return (
    <div className={className}>
      <h3 className="mb-5 font-sans text-[0.75rem] font-semibold uppercase tracking-[0.14em] text-black">{title}</h3>
      <div className="flex flex-col gap-2.5">{children}</div>
    </div>
  );
}
