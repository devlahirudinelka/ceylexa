"use client";

import Link from "next/link";
import { ReactNode } from "react";
import { useMercuryGlow } from "@/lib/useMercuryGlow";

type ButtonProps = {
  href?: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  tone?: "light" | "dark";
  size?: "md" | "lg";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
};

const base =
  "relative inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-300 whitespace-nowrap cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/60";

const primary =
  "btn-mercury [--mx:50%] [--my:50%] before:absolute before:inset-0 before:content-[''] before:bg-[radial-gradient(circle_at_var(--mx)_var(--my),rgba(255,255,255,0.35),transparent_65%)] before:rounded-[inherit] before:opacity-0 before:[transition:opacity_0.4s_ease] before:pointer-events-none hover:before:opacity-100 overflow-hidden bg-gradient-to-r from-[#c79d00] to-[#e5d38e] text-white shadow-[0_0_0_1px_rgba(255,255,255,0.18)_inset,0_10px_30px_-10px_rgba(199,157,0,0.55)] hover:shadow-[0_0_0_1px_rgba(255,255,255,0.24)_inset,0_16px_40px_-10px_rgba(199,157,0,0.7)] hover:-translate-y-0.5";

const secondary: Record<string, string> = {
  light:
    "text-foreground border border-border hover:-translate-y-0.5",
  dark: "text-white border border-white/30 backdrop-blur-sm hover:-translate-y-0.5",
};

// Only the <button> element gets a tint; the <a> variant stays transparent.
const buttonTint: Record<string, string> = {
  light: "bg-black/5 hover:bg-black/10",
  dark: "bg-white/10 hover:bg-white/20",
};

const ghost: Record<string, string> = {
  light: "text-muted hover:text-foreground",
  dark: "text-white/75 hover:text-white",
};

const sizes: Record<string, string> = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
};

export default function Button({
  href,
  children,
  variant = "primary",
  tone = "light",
  size = "md",
  className = "",
  onClick,
  type = "button",
}: ButtonProps) {
  const variantClass =
    variant === "primary" ? primary : variant === "secondary" ? secondary[tone] : ghost[tone];
  const classes = `${base} ${variantClass} ${sizes[size]} ${className}`;
  const onMouseMove = useMercuryGlow<HTMLElement>();
  const content = <span className="relative z-10 inline-flex items-center gap-2">{children}</span>;

  if (href) {
    return (
      <Link
        href={href}
        className={classes}
        onMouseMove={variant === "primary" ? onMouseMove : undefined}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={variant === "secondary" ? `${classes} ${buttonTint[tone]}` : classes}
      onMouseMove={variant === "primary" ? onMouseMove : undefined}
    >
      {content}
    </button>
  );
}
