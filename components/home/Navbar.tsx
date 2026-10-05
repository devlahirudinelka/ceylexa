"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import {
  Menu,
  X,
  ChevronDown,
  ArrowRight,
  ArrowUpRight,
  Layout,
  Megaphone,
  Camera,
  Target,
  Fingerprint,
  Users,
} from "lucide-react";
import { nav } from "@/lib/home-content";
import { SERVICES } from "@/lib/services-data";
import Button from "@/components/ui/Button";

const SERVICE_ICONS = {
  layout: Layout,
  megaphone: Megaphone,
  camera: Camera,
  target: Target,
  fingerprint: Fingerprint,
  users: Users,
} as const;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openServices = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setServicesOpen(true);
  };
  const closeServices = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setServicesOpen(false), 120);
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setServicesOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

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
        scrolled || open || servicesOpen
          ? "border-b border-border bg-background/85 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo/text_with_logo.png"
            alt="Ceylexa"
            width={2702}
            height={856}
            priority
            className="h-9 w-auto"
          />
        </Link>

        <nav className="hidden items-center gap-10 lg:flex">
          {nav.map((item) =>
            item.label === "Services" ? (
              <div
                key={item.href}
                onMouseEnter={openServices}
                onMouseLeave={closeServices}
                onFocus={openServices}
                onBlur={(e) => {
                  if (!e.currentTarget.contains(e.relatedTarget as Node | null)) setServicesOpen(false);
                }}
              >
                <Link
                  href={item.href}
                  className="flex items-center gap-1 text-sm text-muted transition-colors hover:text-foreground"
                  aria-expanded={servicesOpen}
                >
                  {item.label}
                  <ChevronDown
                    size={14}
                    className={`transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
                  />
                </Link>

                {/* Full-width mega menu, anchored to the header. The wrapper's
                    top padding is an invisible hover bridge from the trigger. */}
                <div
                  className={`absolute inset-x-0 top-full px-4 pt-3 transition-all duration-200 lg:px-8 ${
                    servicesOpen
                      ? "visible translate-y-0 opacity-100"
                      : "invisible -translate-y-2 opacity-0"
                  }`}
                >
                  <div className="mx-auto max-w-7xl rounded-3xl border border-border bg-background p-3 shadow-[0_30px_80px_-30px_rgba(36,26,12,0.3)]">
                    <div className="grid gap-3 lg:grid-cols-3">
                      {SERVICES.map((service) => {
                        const Icon = SERVICE_ICONS[service.icon];
                        return (
                          <Link
                            key={service.slug}
                            href={`/services/${service.slug}`}
                            onClick={() => setServicesOpen(false)}
                            className="group/card flex min-h-[170px] flex-col justify-between rounded-2xl p-5 transition-colors"
                          >
                            <div className="flex items-start justify-between gap-4">
                              <div className="flex items-start gap-4">
                                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-foreground shadow-sm">
                                  <Icon size={18} />
                                </span>
                                <div>
                                  <span className="block text-base font-semibold text-foreground">
                                    {service.title}
                                  </span>
                                  <span className="mt-1 block text-sm leading-snug text-muted">
                                    {service.summary.length > 78
                                      ? `${service.summary.slice(0, 78).trimEnd()}…`
                                      : service.summary}
                                  </span>
                                </div>
                              </div>
                              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-border bg-white text-foreground transition-transform duration-200 group-hover/card:-translate-y-0.5 group-hover/card:translate-x-0.5">
                                <ArrowUpRight size={14} />
                              </span>
                            </div>
                            <div className="mt-5 flex flex-wrap gap-1.5">
                              {service.pills.slice(0, 4).map((pill) => (
                                <span
                                  key={pill}
                                  className="rounded-full bg-white px-3 py-1 text-xs text-foreground/80"
                                >
                                  {pill}
                                </span>
                              ))}
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                    <div className="mt-3 flex items-center justify-between rounded-2xl px-4 py-3 text-sm">
                      <span className="text-muted">Strategy, creativity and technology in one team.</span>
                      <Link
                        href="/services"
                        onClick={() => setServicesOpen(false)}
                        className="inline-flex items-center gap-1.5 font-medium text-foreground hover:text-accent-2"
                      >
                        View all services &amp; packages <ArrowRight size={14} />
                      </Link>
                    </div>
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
          <Button href="/contact" size="md">
            Contact now
          </Button>
        </div>

        <button
          aria-label="Toggle menu"
          aria-expanded={open}
          className="relative flex h-9 w-9 items-center justify-center lg:hidden"
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
                      className="flex-1 rounded-lg px-2 py-2.5 text-sm text-muted transition-colors hover:text-foreground"
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
                      className="flex h-9 w-9 items-center justify-center transition-colors"
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
                            className="rounded-lg px-2 py-2 text-sm text-muted transition-colors hover:text-foreground"
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
              <Button href="/contact" size="md" onClick={() => {
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
