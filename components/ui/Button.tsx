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
  "btn-mercury overflow-hidden bg-gradient-to-r from-[#b45309] to-[#ea580c] text-white shadow-[0_0_0_1px_rgba(255,255,255,0.18)_inset,0_10px_30px_-10px_rgba(180,83,9,0.55)] hover:shadow-[0_0_0_1px_rgba(255,255,255,0.24)_inset,0_16px_40px_-10px_rgba(180,83,9,0.7)] hover:-translate-y-0.5";

const secondary: Record<string, string> = {
  light:
    "bg-black/5 text-foreground border border-border hover:bg-black/10 hover:-translate-y-0.5",
  dark: "bg-white/10 text-white border border-white/30 backdrop-blur-sm hover:bg-white/20 hover:-translate-y-0.5",
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
      className={classes}
      onMouseMove={variant === "primary" ? onMouseMove : undefined}
    >
      {content}
    </button>
  );
}
