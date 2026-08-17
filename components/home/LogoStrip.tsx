import Reveal from "@/components/ui/Reveal";
import { trustStrip } from "@/lib/home-content";

export default function LogoStrip() {
  return (
    <section className="relative border-t border-border bg-background py-14">
      <Reveal className="mx-auto max-w-6xl px-6 text-center lg:px-8">
        <p className="text-xs uppercase tracking-[0.2em] text-muted">
          {trustStrip.eyebrow}
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-12 gap-y-6 opacity-80">
          {trustStrip.logos.map((logo) => (
            <span
              key={logo}
              className="font-display text-lg font-semibold tracking-tight text-muted transition-colors hover:text-foreground"
            >
              {logo}
            </span>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
