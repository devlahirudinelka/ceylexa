
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

// Social platforms displayed on every card.
const SOCIAL_PLATFORMS: {
  key: keyof ClientSocials;
  label: string;
  icon: (size: number) => ReactNode;
}[] = [
  {
    key: "facebook",
    label: "Facebook",
    icon: (size) => <Facebook size={size} />,
  },
  {
    key: "instagram",
    label: "Instagram",
    icon: (size) => <Instagram size={size} />,
  },
  {
    key: "linkedin",
    label: "LinkedIn",
    icon: (size) => <Linkedin size={size} />,
  },
  {
    key: "tiktok",
    label: "TikTok",
    icon: (size) => <TikTokIcon size={size} />,
  },
];

function ClientSocialRow({
  socials,
  name,
}: {
  socials: ClientSocials;
  name: string;
}) {
  return (
    <div className="client-social-row">
      {SOCIAL_PLATFORMS.map(
        ({ key, label, icon }) => {
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
            <a
              key={key}
              className="is-placeholder"
              aria-hidden="true"
              tabIndex={-1}
            >
              {icon(15)}
            </a>
          );
        }
      )}
    </div>
  );
}

export default function ClientsCardGrid() {
  const gridRef =
    useRef<HTMLDivElement>(null);

  useEffect(() => {
    const grid = gridRef.current;

    if (!grid) return;

    if (
      window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches
    ) {
      return;
    }

    const ctx = gsap.context(() => {
      const cards =
        gsap.utils.toArray<HTMLElement>(
          ".client-card-tilt",
          grid
        );

      /*
       * Initial scroll animation.
       *
       * No rotation or 3D transformation.
       */
      gsap.set(cards, {
        opacity: 0,
        y: 28,
      });

      /*
       * Stagger cards into view when
       * the grid enters the viewport.
       */
      ScrollTrigger.batch(cards, {
        start: "top 88%",
        once: true,

        onEnter: (batch) => {
          gsap.to(batch, {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.06,
            ease: "power2.out",
          });
        },
      });
    }, grid);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={gridRef}
      className="clients-grid"
    >
      {CLIENTS.map((client) => (
        <div
          key={client.file}
          className="client-card-tilt"
        >
          <div className="client-card py-10 px-8 md:py-12 md:px-10">
            {/* =========================
                LOGO
            ========================= */}
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

            {/* =========================
                CONTENT
            ========================= */}
            <div className="client-card-content-col">
              <div className="client-card-title">
                {client.name}
              </div>

              <p className="client-card-desc">
                {client.description}
              </p>

              <ClientSocialRow
                socials={
                  client.socials ?? {}
                }
                name={client.name}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

