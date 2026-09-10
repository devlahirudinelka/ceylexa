"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X, Sparkles, ChevronDown } from "lucide-react";
import { nav } from "@/lib/home-content";
import { SERVICES } from "@/lib/services-data";
import Button from "@/components/ui/Button";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock page scroll behind the open drop-down and let Escape close it,
  // matching the expected behavior of a mobile/tablet nav overlay.
  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        setMobileServicesOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  // Close the drop-down if the viewport grows past the mobile/tablet
  // breakpoint (1024px - phones and tablets get the hamburger, only laptop-and-up gets the full nav) so it never gets
  // stuck open behind the desktop nav.
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const onChange = () => {
      setOpen(false);
      setMobileServicesOpen(false);
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
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

        <nav className="hidden items-center gap-10 lg:flex">
          {nav.map((item) =>
            item.label === "Services" ? (
              <div key={item.href} className="group relative">
                <Link
                  href={item.href}
                  className="flex items-center gap-1 text-sm text-muted transition-colors hover:text-foreground"
                >
                  {item.label}
                  <ChevronDown
                    size={14}
                    className="transition-transform duration-200 group-hover:rotate-180"
                  />
                </Link>

                {/* Invisible bridge so the pointer can travel from the
                    trigger down to the panel without the hover group
                    losing state on the gap between them. */}
                <div className="absolute left-1/2 top-full h-3 w-full -translate-x-1/2" />

                <div className="invisible absolute left-1/2 top-full w-72 -translate-x-1/2 translate-y-2 rounded-2xl border border-border bg-background/95 p-2 opacity-0 shadow-[0_20px_60px_-20px_rgba(36,26,12,0.25)] backdrop-blur-xl transition-all duration-200 group-hover:visible group-hover:translate-y-3 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-3 group-focus-within:opacity-100">
                  {SERVICES.map((service) => (
                    <Link
                      key={service.slug}
                      href={`/services/${service.slug}`}
                      className="block rounded-xl px-3 py-2.5 transition-colors hover:bg-black/5"
                    >
                      <span className="block text-sm font-medium text-foreground">
                        {service.title}
                      </span>
                      <span className="mt-0.5 block text-xs text-muted">
                        {service.summary}
                      </span>
                    </Link>
                  ))}
                  <div className="mt-1 border-t border-border pt-1">
                    <Link
                      href="/services"
                      className="block rounded-xl px-3 py-2.5 text-sm font-medium text-accent-2 transition-colors hover:bg-black/5"
                    >
                      View all services & packages
                    </Link>
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-muted transition-colors hover:text-foreground"
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        <div className="hidden lg:block">
          <Button href="mailto:hello@ceylexa.com" size="md">
            Contact now
          </Button>
        </div>

        <button
          aria-label="Toggle menu"
          aria-expanded={open}
          className="relative flex h-9 w-9 cursor-pointer items-center justify-center text-foreground lg:hidden"
          onClick={() =>
            setOpen((v) => {
              const next = !v;
              if (!next) setMobileServicesOpen(false);
              return next;
            })
          }
        >
          <Menu
            size={22}
            className={`absolute transition-all duration-300 ease-out ${
              open ? "rotate-90 scale-50 opacity-0" : "rotate-0 scale-100 opacity-100"
            }`}
          />
          <X
            size={22}
            className={`absolute transition-all duration-300 ease-out ${
              open ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-50 opacity-0"
            }`}
          />
        </button>
      </div>

      {/* Animated drop-down for mobile + tablet. The grid-rows trick
          animates height from 0 to auto (no fixed max-height guess),
          while the links themselves fade/slide in with a short stagger. */}
      <div
        className={`grid transition-[grid-template-rows] duration-300 ease-in-out lg:hidden ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="min-h-0 overflow-hidden">
          <nav
            className={`flex flex-col gap-1 border-t border-border bg-background px-6 py-4 transition-opacity duration-300 ${
              open ? "opacity-100" : "opacity-0"
            }`}
          >
            {nav.map((item, i) =>
              item.label === "Services" ? (
                <div key={item.href}>
                  <div
                    className={`flex items-center justify-between rounded-lg transition-all duration-300 ease-out ${
                      open ? "translate-y-0 opacity-100" : "-translate-y-2 opacity-0"
                    }`}
                    style={{ transitionDelay: open ? `${80 + i * 40}ms` : "0ms" }}
                  >
                    <Link
                      href={item.href}
                      className="flex-1 rounded-lg px-2 py-2.5 text-sm text-muted transition-colors hover:bg-black/5 hover:text-foreground"
                      onClick={() => {
                        setOpen(false);
                        setMobileServicesOpen(false);
                      }}
                    >
                      {item.label}
                    </Link>
                    <button
                      type="button"
                      aria-label="Toggle services list"
                      aria-expanded={mobileServicesOpen}
                      onClick={() => setMobileServicesOpen((v) => !v)}
                      className="flex h-9 w-9 items-center justify-center text-muted transition-colors hover:text-foreground"
                    >
                      <ChevronDown
                        size={16}
                        className={`transition-transform duration-200 ${
                          mobileServicesOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  </div>

                  <div
                    className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
                      mobileServicesOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="min-h-0 overflow-hidden">
                      <div className="ml-2 flex flex-col gap-1 border-l border-border pb-1 pl-3">
                        {SERVICES.map((service) => (
                          <Link
                            key={service.slug}
                            href={`/services/${service.slug}`}
                            className="rounded-lg px-2 py-2 text-sm text-muted transition-colors hover:bg-black/5 hover:text-foreground"
                            onClick={() => {
                        setOpen(false);
                        setMobileServicesOpen(false);
                      }}
                          >
                            {service.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`rounded-lg px-2 py-2.5 text-sm text-muted transition-all duration-300 ease-out hover:bg-black/5 hover:text-foreground ${
                    open ? "translate-y-0 opacity-100" : "-translate-y-2 opacity-0"
                  }`}
                  style={{ transitionDelay: open ? `${80 + i * 40}ms` : "0ms" }}
                  onClick={() => {
                        setOpen(false);
                        setMobileServicesOpen(false);
                      }}
                >
                  {item.label}
                </Link>
              )
            )}
            <div
              className={`mt-2 w-fit transition-all duration-300 ease-out ${
                open ? "translate-y-0 opacity-100" : "-translate-y-2 opacity-0"
              }`}
              style={{ transitionDelay: open ? `${80 + nav.length * 40}ms` : "0ms" }}
            >
              <Button href="mailto:hello@ceylexa.com" size="md" onClick={() => {
                        setOpen(false);
                        setMobileServicesOpen(false);
                      }}>
                Contact now
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
