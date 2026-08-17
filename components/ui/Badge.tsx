import { ReactNode } from "react";

export default function Badge({
  children,
  icon,
  tone = "light",
  className = "",
}: {
  children: ReactNode;
  icon?: ReactNode;
  tone?: "light" | "dark";
  className?: string;
}) {
  const toneClass =
    tone === "dark"
      ? "border-white/30 bg-white/10 text-white/90 backdrop-blur-sm"
      : "border-border bg-white/70 text-foreground/80 backdrop-blur-sm";

  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-medium uppercase tracking-wider ${toneClass} ${className}`}
    >
      {icon}
      {children}
    </span>
  );
}
