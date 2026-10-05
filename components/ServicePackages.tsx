"use client";

import { Check, Plus, Sparkles } from "lucide-react";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import { useMercuryGlow } from "@/lib/useMercuryGlow";

const BASE = [
  "Social Media Management",
  "Monthly Content Plan",
  "Creative Posts",
  "Caption & Hashtag Strategy",
  "Community Management",
  "Paid Advertising Management",
  "Influencer / Creator Campaigns",
  "High Security for Social Media Platforms",
];
const GROWTH_EXTRAS = ["Marketing Consultation", "Monthly Performance Report"];
const PREMIUM_EXTRAS = [
  "Paid Advertising Budget Management",
  "Guiding and Providing Insights",
];

type Plan = {
  name: string;
  tagline: string;
  highlight?: boolean;
  /** Name of the plan this one builds on. */
  buildsOn?: string;
  /** What this plan adds on top of the one it builds on. */
  extras: string[];
  /** Everything inherited from the lower plans. */
  included: string[];
};

const PLANS: Plan[] = [
  {
    name: "Starter",
    tagline: "Get your social presence built, managed, and secure.",
    extras: [],
    included: BASE,
  },
  {
    name: "Growth",
    tagline: "Everything in Starter, plus strategy and reporting to scale.",
    highlight: true,
    buildsOn: "Starter",
    extras: GROWTH_EXTRAS,
    included: BASE,
  },
  {
    name: "Premium",
    tagline: "Full-service management with hands-on budget and insights.",
    buildsOn: "Growth",
    extras: PREMIUM_EXTRAS,
    included: [...BASE, ...GROWTH_EXTRAS],
  },
];

function PlanCard({ plan, index }: { plan: Plan; index: number }) {
  const onMouseMove = useMercuryGlow<HTMLDivElement>();
  const dark = !!plan.highlight;
  const total = plan.included.length + plan.extras.length;

  return (
    <div
      onMouseMove={dark ? undefined : onMouseMove}
      className={`group relative flex h-full flex-col overflow-hidden rounded-3xl border p-8 transition-all duration-500 max-md:p-6 [--mx:50%] [--my:50%] [&>*]:relative [&>*]:z-1 after:pointer-events-none after:absolute after:inset-0 after:z-0 after:rounded-[inherit] after:opacity-0 after:content-[''] after:[transition:opacity_0.4s_ease] hover:after:opacity-100 ${
        dark
          ? "border-transparent bg-foreground text-white shadow-[0_30px_80px_-30px_rgba(199,157,0,0.55)] md:-translate-y-4 after:bg-[radial-gradient(420px_circle_at_50%_0%,rgba(229,211,142,0.22),transparent_60%)] after:opacity-100"
          : "border-border bg-white/70 backdrop-blur-[6px] hover:-translate-y-1 hover:border-accent/40 after:bg-[radial-gradient(480px_circle_at_var(--mx)_var(--my),rgba(199,157,0,0.14),transparent_45%)]"
      }`}
    >
      {/* Oversized tier number in the corner */}
      <span
        aria-hidden
        className={`!absolute -right-2 -top-6 select-none text-[9rem] font-medium leading-none tracking-tighter ${
          dark ? "text-white/[0.06]" : "text-foreground/[0.05]"
        }`}
      >
        {String(index + 1).padStart(2, "0")}
      </span>

      <div className="flex items-center justify-between">
        <span
          className={`text-[0.75rem] font-semibold uppercase tracking-[0.2em] ${
            dark ? "text-[#e5d38e]" : "text-accent-2"
          }`}
        >
          {"// "}Tier {String(index + 1).padStart(2, "0")}
        </span>
        {dark && (
          <span className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-[#c79d00] to-[#e5d38e] px-3 py-1 text-[0.6875rem] font-semibold uppercase tracking-wider text-black">
            <Sparkles size={11} />
            Most Popular
          </span>
        )}
      </div>

      <h3 className={`mt-6 text-[2.25rem] font-medium leading-none ${dark ? "text-white" : "text-foreground"}`}>
        {plan.name}
      </h3>
      <p className={`mt-3 min-h-[2.75rem] text-[0.9375rem] leading-snug ${dark ? "text-white/70" : "text-muted"}`}>
        {plan.tagline}
      </p>

      {/* Tier meter: how much of the full offering this plan covers */}
      <div className="mt-6 flex items-center gap-3">
        <div className="flex flex-1 gap-1">
          {PLANS.map((_, i) => (
            <span
              key={i}
              className={`h-1 flex-1 rounded-full ${
                i <= index
                  ? "bg-gradient-to-r from-[#c79d00] to-[#e5d38e]"
                  : dark
                    ? "bg-white/15"
                    : "bg-foreground/10"
              }`}
            />
          ))}
        </div>
        <span className={`text-[0.75rem] tabular-nums ${dark ? "text-white/60" : "text-muted"}`}>
          {total} services
        </span>
      </div>

      {plan.extras.length > 0 && (
        <div
          className={`mt-7 rounded-2xl p-4 ${
            dark ? "bg-white/[0.07]" : "bg-accent/[0.07]"
          }`}
        >
          <p className={`text-[0.6875rem] font-semibold uppercase tracking-[0.18em] ${dark ? "text-[#e5d38e]" : "text-accent-2"}`}>
            Everything in {plan.buildsOn}, plus
          </p>
          <ul className="mt-3 flex flex-col gap-2.5">
            {plan.extras.map((feature) => (
              <li key={feature} className="flex items-start gap-2.5 text-[0.9375rem] font-medium leading-snug">
                <Plus size={16} strokeWidth={2.5} className={`mt-0.5 shrink-0 ${dark ? "text-[#e5d38e]" : "text-accent-2"}`} />
                {feature}
              </li>
            ))}
          </ul>
        </div>
      )}

      <ul className={`mt-7 flex flex-col gap-3 border-t pt-7 ${dark ? "border-white/10" : "border-border"}`}>
        {plan.included.map((feature) => (
          <li
            key={feature}
            className={`flex items-start gap-2.5 text-[0.875rem] leading-snug ${
              dark ? "text-white/75" : plan.extras.length ? "text-muted" : "text-foreground"
            }`}
          >
            <Check size={15} strokeWidth={2.5} className={`mt-0.5 shrink-0 ${dark ? "text-[#e5d38e]" : "text-accent-2"}`} />
            {feature}
          </li>
        ))}
      </ul>

      <div className="mt-auto pt-8">
        <Button
          href="/contact"
          variant={dark ? "primary" : "secondary"}
          className="w-full"
          size="md"
        >
          Request a Quote
        </Button>
      </div>
    </div>
  );
}

export default function ServicePackages() {
  return (
    <section id="packages" className="relative bg-surface-2 py-28 max-md:py-20">
      <div className="mx-auto container px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <Badge>Packages</Badge>
          <h2 className="mt-4 tracking-tight">
            Social media packages built
            <span className="text-transparent bg-[linear-gradient(90deg,#92400e_0%,#b45309_45%,#ea580c_100%)] bg-clip-text">
              {" "}
              to grow with you.
            </span>
          </h2>
          <p className="mt-4 text-muted">
            Each tier builds on the one before it, so upgrading later is
            seamless.
          </p>
        </Reveal>

        <div className="mt-20 grid grid-cols-1 items-stretch gap-6 md:grid-cols-3 md:gap-5 max-md:mt-12">
          {PLANS.map((plan, i) => (
            <Reveal key={plan.name} delay={i * 100} className="h-full">
              <PlanCard plan={plan} index={i} />
            </Reveal>
          ))}
        </div>

        <p className="mt-14 text-center text-[0.875rem] text-muted">
          Not sure which package fits?{" "}
          <a
            href="/contact"
            className="font-medium text-accent-2 underline underline-offset-4"
          >
            Talk to us
          </a>{" "}
          and we&apos;ll recommend the right fit for your goals and budget.
        </p>
      </div>
    </section>
  );
}
