import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";

/** Shared building blocks of the Ceylexa look: gold, black and cream. */
export const GOLD = "#d7ba5e";

export const H2_CLASS =
  "font-sans text-[3.75rem] leading-[1.08em] font-medium tracking-tight max-tablet:text-[3rem] max-md:text-[2.5rem] max-mobile:text-[2.25rem]";

/** Small "// LABEL" line that opens every section. */
export function Eyebrow({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={`flex items-center gap-1 font-sans text-[0.875rem] uppercase leading-[1.5em] ${className}`}>
      <span className="text-[#d7ba5e]">{"//"}</span>
      <span className="text-dim-gray">{children}</span>
    </div>
  );
}

/** The highlighted word inside a headline. */
export function GoldWord({ children }: { children: ReactNode }) {
  return <span className="italic text-[#d7ba5e]">{children}</span>;
}

export function Sparkle({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" className={className} aria-hidden>
      <path
        d="M10 0C10.34 5.38 14.62 9.66 20 10C14.62 10.34 10.34 14.62 10 20C9.66 14.62 5.38 10.34 0 10C5.38 9.66 9.66 5.38 10 0Z"
        fill="currentColor"
      />
    </svg>
  );
}

const VARIANTS = {
  gold: { wrap: "bg-[#d7ba5e] text-white", dot: "bg-black text-white" },
  light: { wrap: "bg-alabaster text-black", dot: "bg-white text-black" },
  dark: { wrap: "bg-black text-white", dot: "bg-[#d7ba5e] text-black" },
  outline: { wrap: "border border-light-transparent-black text-black", dot: "bg-black text-white" },
};

/** Pill button with a circular arrow that turns on hover. */
export function ArrowButton({
  href,
  children,
  variant = "gold",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: keyof typeof VARIANTS;
  className?: string;
}) {
  const v = VARIANTS[variant];
  return (
    <Link
      href={href}
      className={`group inline-flex items-center gap-2 rounded-full py-2.5 pl-6 pr-2.5 font-semibold leading-[1.5em] transition-transform duration-300 hover:-translate-y-0.5 ${v.wrap} ${className}`}
    >
      {children}
      <span className={`flex h-8 w-8 items-center justify-center rounded-full transition-transform duration-500 group-hover:rotate-45 ${v.dot}`}>
        <ArrowUpRight size={16} />
      </span>
    </Link>
  );
}

/** Black band with gold sparkles between words. */
export function PillarStrip({ items }: { items: string[] }) {
  return (
    <div className="bg-black py-5 text-white max-mobile:py-4">
      <div className="mx-auto container flex flex-wrap items-center justify-between gap-x-8 gap-y-3 px-6 lg:px-8 max-md:justify-center">
        {items.map((item) => (
          <div key={item} className="flex items-center gap-3 text-[1.25rem] font-medium max-tablet:text-[1rem]">
            <Sparkle className="w-4 text-[#d7ba5e]" />
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
