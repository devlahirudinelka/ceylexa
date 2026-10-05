"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { SERVICES } from "@/lib/services-data";
import { CEYLEXA_SOCIALS, OFFICES } from "@/lib/site";
import CreamGradientBackground from "./CreamGradientBackground";

const EXPLORE = [
  { label: "Projects", href: "/project" },
  { label: "Clients", href: "/clients" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

const linkClass = "text-sm text-muted transition-colors hover:text-foreground";

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
    <footer className="relative overflow-hidden border-t border-border bg-background">
      <CreamGradientBackground />
      <div className="relative mx-auto container px-6 py-14 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Link href="/" className="inline-flex">
              <Image
                src="/images/logo/text_with_logo.png"
                alt="Ceylexa"
                width={2702}
                height={856}
                className="h-8 w-auto"
              />
            </Link>
            <p className="mt-4 max-w-xs text-sm text-muted">
              Strategy, design and technology for brands that want to grow.
            </p>
            <Link
              href="/contact"
              className="group mt-6 inline-flex items-center gap-1.5 border-b border-foreground pb-0.5 text-sm font-medium text-foreground transition-colors hover:border-accent-2 hover:text-accent-2"
            >
              Start a project
              <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-7">
            <Column title="Services">
              {SERVICES.map((s) => (
                <Link key={s.slug} href={`/services/${s.slug}`} className={linkClass}>
                  {s.title}
                </Link>
              ))}
            </Column>
            <Column title="Explore">
              {EXPLORE.map((l) => (
                <Link key={l.label} href={l.href} className={linkClass}>
                  {l.label}
                </Link>
              ))}
            </Column>
            <Column title="Contact">
              <a href="mailto:hello@ceylexa.com" className={linkClass}>
                hello@ceylexa.com
              </a>
              <a href={OFFICES[1].phoneHref} className={linkClass}>
                {OFFICES[1].phone}
              </a>
            </Column>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-border pt-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Ceylexa</p>
          <div className="flex flex-wrap gap-x-5 gap-y-1">
            {CEYLEXA_SOCIALS.slice(0, 4).map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-foreground"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

function Column({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h3 className="mb-4 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-foreground">
        {title}
      </h3>
      <div className="flex flex-col gap-2.5">{children}</div>
    </div>
  );
}
