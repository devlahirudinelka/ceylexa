"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import type { ReactNode } from "react";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { CLIENTS, type ClientSocials } from "@/lib/clients-data";

function TikTokIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M16.6 5.82c-1.02-.9-1.62-2.2-1.62-3.62h-3.14v13.44c0 1.62-1.32 2.94-2.94 2.94a2.94 2.94 0 0 1 0-5.88c.28 0 .55.04.8.11V9.6a6.1 6.1 0 0 0-.8-.05A6.09 6.09 0 0 0 3 15.65a6.09 6.09 0 0 0 6.09 6.09c3.36 0 6.09-2.73 6.09-6.09V8.4a8.1 8.1 0 0 0 4.74 1.53V6.79a4.85 4.85 0 0 1-3.32-.97Z" />
    </svg>
  );
}

// One entry per platform, in display order — used to always render all
// four icons (see ClientSocialRow) rather than only the ones a client
// happens to have a URL for.
const SOCIAL_PLATFORMS: {
  key: keyof ClientSocials;
  label: string;
  icon: (size: number) => ReactNode;
}[] = [
  { key: "facebook", label: "Facebook", icon: (size) => <Facebook size={size} /> },
  { key: "instagram", label: "Instagram", icon: (size) => <Instagram size={size} /> },
  { key: "linkedin", label: "LinkedIn", icon: (size) => <Linkedin size={size} /> },
  { key: "tiktok", label: "TikTok", icon: (size) => <TikTokIcon size={size} /> },
];

// Placeholder icon row: shows all four platforms on every card so the
// design reads as finished, but only the ones with a real URL in
// lib/clients-data.ts (client.socials) are actual links — the rest
// render as inert icons (no href, so no hover affordance, not in the
// tab order) until a real URL is filled in.
function ClientSocialRow({ socials, name }: { socials: ClientSocials; name: string }) {
  return (
    <div className="client-social-row">
      {SOCIAL_PLATFORMS.map(({ key, label, icon }) => {
        const href = socials[key];
        return href ? (
          <a
            key={key}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${name} on ${label}`}
          >
            {icon(15)}
          </a>
        ) : (
          <a key={key} className="is-placeholder" aria-hidden="true" tabIndex={-1}>
            {icon(15)}
          </a>
        );
      })}
    </div>
  );
}

export default function ClientsCardGrid() {
  const gridRef = useRef<HTMLDivElement>(null);

  // Every card is wrapped in a dedicated `.client-card-tilt` element (see
  // the JSX below) that GSAP owns exclusively for the entrance animation
  // and the mouse-tilt below. The inner `.client-card` keeps its own
  // existing CSS-only hover lift (translateY, border/shadow) completely
  // untouched — GSAP never writes an inline transform onto `.client-card`
  // itself, so the two effects never fight over the same `transform`
  // property.
  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      const tiltCards = gsap.utils.toArray<HTMLElement>(".client-card-tilt", grid);

      gsap.set(tiltCards, { opacity: 0, y: 28, transformPerspective: 800 });

      // Stagger the cards in as the grid scrolls into view — once only,
      // so re-scrolling past the section doesn't replay it.
      ScrollTrigger.batch(tiltCards, {
        start: "top 88%",
        once: true,
        onEnter: (batch) =>
          gsap.to(batch, {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.06,
            ease: "power2.out",
          }),
      });

      // Magnetic tilt on hover — a subtle 3D tilt that follows the
      // pointer, using gsap.quickTo for a smooth, interruption-safe tween
      // instead of restarting a new tween on every mousemove. Skipped on
      // coarse-pointer (touch) devices, which don't get hover/mousemove
      // in any useful sense.
      if (!window.matchMedia("(pointer: coarse)").matches) {
        tiltCards.forEach((card) => {
          const rotateX = gsap.quickTo(card, "rotationX", { duration: 0.4, ease: "power3.out" });
          const rotateY = gsap.quickTo(card, "rotationY", { duration: 0.4, ease: "power3.out" });

          const handleMove = (event: MouseEvent) => {
            const rect = card.getBoundingClientRect();
            const px = (event.clientX - rect.left) / rect.width - 0.5;
            const py = (event.clientY - rect.top) / rect.height - 0.5;
            rotateY(px * 10);
            rotateX(py * -10);
          };
          const handleLeave = () => {
            rotateX(0);
            rotateY(0);
          };

          card.addEventListener("mousemove", handleMove);
          card.addEventListener("mouseleave", handleLeave);
        });
      }
    }, grid);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={gridRef} className="clients-grid">
      {CLIENTS.map((client) => (
        <div key={client.file} className="client-card-tilt">
          {/* Static split layout — logo on one side, name/title/
              description/socials on the other, always visible (no
              hover-to-reveal). Real <a href> social links stay in the
              tab order on their own; the card itself no longer needs to
              be a tab stop since there's nothing hidden left to reveal. */}
          <div className="client-card py-10 px-8 md:py-12 md:px-10">
            <div className="client-card-logo-col">
              <div className="client-logo-wrap">
                <Image
                  src={`/images/Clients/${client.file}`}
                  alt={client.name}
                  width={140}
                  height={70}
                />
              </div>
            </div>

            <div className="client-card-content-col">
              <div className="client-card-title">{client.name}</div>
              {/* <div className="client-name">{client.name}</div> */}
              <p className="client-card-desc">{client.description}</p>
              <ClientSocialRow
                socials={client.socials ?? {}}
                name={client.name}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
