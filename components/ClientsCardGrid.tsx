
"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import type { ReactNode } from "react";
import { Globe } from "lucide-react";
import { SocialIcon } from "@/components/ui/SocialIcons";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { CLIENTS, type ClientSocials } from "@/lib/clients-data";

// Social platforms a card can show — only the ones a client actually has
// a link for are rendered (see ClientSocialRow).
const SOCIAL_PLATFORMS: {
  key: keyof ClientSocials;
  label: string;
  icon: (size: number) => ReactNode;
}[] = [
  {
    key: "facebook",
    label: "Facebook",
    icon: (size) => <SocialIcon name="Facebook" size={size} />,
  },
  {
    key: "instagram",
    label: "Instagram",
    icon: (size) => <SocialIcon name="Instagram" size={size} />,
  },
  {
    key: "linkedin",
    label: "LinkedIn",
    icon: (size) => <SocialIcon name="LinkedIn" size={size} />,
  },
  {
    key: "tiktok",
    label: "TikTok",
    icon: (size) => <SocialIcon name="TikTok" size={size} />,
  },
  {
    key: "youtube",
    label: "YouTube",
    icon: (size) => <SocialIcon name="YouTube" size={size} />,
  },
  {
    key: "threads",
    label: "Threads",
    icon: (size) => <SocialIcon name="Threads" size={size} />,
  },
  {
    key: "x",
    label: "X",
    icon: (size) => <SocialIcon name="X" size={size} />,
  },
  {
    key: "website",
    label: "Website",
    icon: (size) => <Globe size={size} />,
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
    <div className="flex gap-2 justify-center flex-wrap mt-[0.2rem]">
      {SOCIAL_PLATFORMS.map(({ key, label, icon }) => {
        const href = socials[key];
        if (!href) return null;

        return (
          <a
            key={key}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${name} on ${label}`}
            className="flex items-center justify-center w-[1.9rem] h-[1.9rem] rounded-[999px] text-[#a8915a] [transition:transform_0.2s_ease,color_0.2s_ease] hover:text-black hover:-translate-y-0.5"
          >
            {icon(15)}
          </a>
        );
      })}
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
      className="grid gap-3 grid-cols-[repeat(4,1fr)] max-tablet:gap-[0.6rem] max-tablet:grid-cols-[repeat(3,1fr)] max-md:gap-[0.35rem] max-md:grid-cols-[repeat(2,1fr)] max-mobile:gap-[0.224rem] max-mobile:grid-cols-[repeat(1,1fr)]"
    >
      {CLIENTS.map((client) => (
        <div
          key={client.file}
          className="block h-full client-card-tilt"
        >
          <div className="flex gap-3 flex-col items-center h-full text-center bg-white border border-light-transparent-black rounded-[1.25rem] [transition:box-shadow_0.3s_ease] hover:shadow-[0_20px_45px_rgba(0,0,0,0.12)] focus-within:shadow-[0_20px_45px_rgba(0,0,0,0.12)] max-tablet:gap-[0.6rem] max-md:gap-[0.5249rem] max-mobile:gap-[0.449rem] py-10 px-8 md:py-12 md:px-10">
            {/* =========================
                LOGO
            ========================= */}
            <div className="flex gap-[0.6rem] flex-col items-center justify-center flex-[0_0_auto] w-full">
              <div className="flex aspect-[2/1] items-center justify-center w-full">
                <Image
                  src={`/images/Clients/${client.file}`}
                  alt={client.name}
                  width={140}
                  height={70}
                  className="max-h-full max-w-full object-contain scale-170"
                />
              </div>
            </div>

            {/* =========================
                CONTENT
            ========================= */}
            <div className="flex gap-[0.4rem] flex-col items-center pt-3 w-full min-w-0 text-center max-tablet:pt-[0.6rem] max-md:pt-[0.5249rem] max-mobile:pt-[0.449rem]">
              <div className="font-sans text-[0.875rem] font-medium uppercase tracking-[0.05em] text-[#d7ba5e]">
                {client.name}
              </div>

              <p className="font-sans text-[0.875rem] leading-[1.4em] text-dim-gray">
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

