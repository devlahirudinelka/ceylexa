"use client";

import { Check } from "lucide-react";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";

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

function PlanCard({ plan }: { plan: Plan }) {
  const dark = !!plan.highlight;

  return (
    <div
      className={`flex h-full flex-col rounded-3xl border p-9 transition-transform duration-300 hover:-translate-y-1 max-md:p-6 ${
        dark ? "border-black bg-black text-white" : "border-border bg-white text-foreground"
      }`}
    >
      <div className="flex items-center justify-between gap-3">
        <h3 className={`text-[1.75rem] ${dark ? "text-white" : "text-foreground"}`}>{plan.name}</h3>
        {dark && (
          <span className="rounded-full bg-[#d7ba5e] px-3 py-1 text-[0.6875rem] font-semibold uppercase tracking-wider text-black">
            Most Popular
          </span>
        )}
      </div>
      <p className={`mt-3 min-h-[2.75rem] text-[0.9375rem] leading-snug ${dark ? "text-white/65" : "text-muted"}`}>
        {plan.tagline}
      </p>

      <div className={`my-7 h-px w-full ${dark ? "bg-white/15" : "bg-border"}`} />

      {plan.extras.length > 0 && (
        <>
          <p className="text-[0.75rem] font-medium text-[#d7ba5e]">
            Everything in {plan.buildsOn}, plus
          </p>
          <ul className="mt-4 flex flex-col gap-3">
            {plan.extras.map((feature) => (
              <li key={feature} className="flex items-start gap-3 text-[0.9375rem] font-medium leading-snug">
                <Check size={16} strokeWidth={2.5} className="mt-0.5 shrink-0 text-[#d7ba5e]" />
                {feature}
              </li>
            ))}
          </ul>
          <div className={`my-6 h-px w-full ${dark ? "bg-white/15" : "bg-border"}`} />
        </>
      )}

      <ul className="flex flex-col gap-3">
        {plan.included.map((feature) => (
          <li
            key={feature}
            className={`flex items-start gap-3 text-[0.875rem] leading-snug ${
              dark ? "text-white/70" : plan.extras.length ? "text-muted" : "text-foreground"
            }`}
          >
            <Check size={15} strokeWidth={2.5} className={`mt-0.5 shrink-0 ${dark ? "text-white/50" : "text-[#d7ba5e]"}`} />
            {feature}
          </li>
        ))}
      </ul>

      <div className="mt-auto pt-9">
        <Button href="/contact" variant={dark ? "primary" : "secondary"} className="w-full" size="md">
          Request a Quote
        </Button>
      </div>
    </div>
  );
}

export default function ServicePackages() {
  return (
    <section id="packages" className="relative py-28 max-md:py-20">
      <div className="mx-auto container px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          {/* <Badge>Packages</Badge> */}
          <h2 className="mt-4 tracking-tight">Social media packages built to grow with you.</h2>
          <p className="mt-4 text-muted">
            Each tier builds on the one before it, so upgrading later is seamless.
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 items-stretch gap-6 md:grid-cols-3 md:gap-5 max-md:mt-12">
          {PLANS.map((plan, i) => (
            <Reveal key={plan.name} delay={i * 100} className="h-full">
              <PlanCard plan={plan} />
            </Reveal>
          ))}
        </div>

        <p className="mt-12 text-center text-[0.875rem] text-muted">
          Not sure which package fits?{" "}
          <a href="/contact" className="font-medium text-foreground underline underline-offset-4 hover:text-[#d7ba5e]">
            Talk to us
          </a>{" "}
          and we&apos;ll recommend the right fit for your goals and budget.
        </p>
      </div>
    </section>
  );
}
