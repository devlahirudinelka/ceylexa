import { Quote } from "lucide-react";
import Badge from "@/components/ui/Badge";
import Reveal from "@/components/ui/Reveal";
import { testimonials } from "@/lib/home-content";

export default function Testimonials() {
  return (
    <section className="relative bg-surface py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <Badge>What clients say</Badge>
          <h2 className="mt-6 text-3xl font-semibold tracking-tight sm:text-4xl">
            Teams that run on
            <span className="text-gradient"> autonomous workflows.</span>
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-5 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 100}>
              <div className="card-border flex h-full flex-col justify-between rounded-2xl p-6">
                <Quote className="text-accent-2/70" size={22} />
                <p className="mt-4 text-sm leading-relaxed text-foreground/85">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-6 border-t border-border pt-4">
                  <p className="text-sm font-medium text-foreground">
                    {t.name}
                  </p>
                  <p className="text-xs text-muted">{t.role}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
