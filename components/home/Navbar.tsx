"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X, Sparkles } from "lucide-react";
import { nav } from "@/lib/home-content";
import Button from "@/components/ui/Button";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // The hero directly below sits on the light "Amber Crystal" cream
  // background (--background, #faf8f2), not a dark section, so the bar
  // uses the same light/foreground text at all scroll positions —
  // it only gains a background + border once the user scrolls.
  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "border-b border-border bg-background/85 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[#b45309] to-[#ea580c] text-white">
            <Sparkles size={16} />
          </span>
          <span className="font-display text-lg font-semibold tracking-tight text-foreground">
            Ceylexa
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-muted transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button href="mailto:hello@ceylexa.com" size="md">
            Contact now
          </Button>
        </div>

        <button
          aria-label="Toggle menu"
          className="cursor-pointer text-foreground md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background px-6 py-4 md:hidden">
          <nav className="flex flex-col gap-4">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-muted hover:text-foreground"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Button href="mailto:hello@ceylexa.com" size="md" className="mt-2 w-fit">
              Contact now
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
