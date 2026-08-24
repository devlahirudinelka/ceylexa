"use client";

import Link from "next/link";
import { ArrowUp, Sparkles } from "lucide-react";
import { footerLinks } from "@/lib/home-content";
import CreamGradientBackground from "./CreamGradientBackground";

export default function Footer() {
  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="relative overflow-hidden border-t border-border bg-background">
      {/* Same "Cream Ribbons" shader as the homepage hero (see
          CreamGradientBackground.tsx) instead of a one-off glow, so the
          footer reads as a continuation of the hero rather than a
          different surface — plus the same gold hairline as before along
          the top edge. */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#c79d00]/50 to-transparent" />
      <CreamGradientBackground />

      <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[#b45309] to-[#ea580c] text-white">
                <Sparkles size={16} />
              </span>
              <span className="font-display text-lg font-semibold tracking-tight text-foreground">
                Ceylexa
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm text-muted">
              An AI agency for operations teams who want their time back.
            </p>
            <button
              type="button"
              onClick={scrollToTop}
              className="mt-6 inline-flex cursor-pointer items-center gap-1.5 text-xs font-medium text-muted transition-colors hover:text-foreground"
            >
              <ArrowUp size={13} />
              Back to top
            </button>
          </div>

          <FooterColumn title="Services" links={footerLinks.product} />
          <FooterColumn title="Company" links={footerLinks.company} />
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-xs text-muted md:flex-row">
          <p>&copy; {new Date().getFullYear()} Ceylexa, Inc. All rights reserved.</p>
          <p>An AI agency for automation &amp; agentic systems.</p>
        </div>
      </div>

      {/* Large ghost wordmark — a quiet, premium closing statement that
          spans the full width of the footer without pulling focus from
          the links above it. */}
      <div className="relative -mt-4 select-none overflow-hidden pb-2 text-center sm:-mt-6 lg:-mt-10">
        <span
          aria-hidden="true"
          className="font-display block text-[16vw] leading-none font-bold tracking-tight text-foreground/[0.045] sm:text-[13vw] lg:text-[10vw]"
        >
          Ceylexa
        </span>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <h4 className="text-xs font-semibold tracking-wider text-muted uppercase">{title}</h4>
      <ul className="mt-4 space-y-3">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-sm text-muted transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
