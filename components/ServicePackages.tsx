"use client";

import { Check, Sparkles } from "lucide-react";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import { useMercuryGlow } from "@/lib/useMercuryGlow";

type Plan = {
  name: string;
  tagline: string;
  highlight?: boolean;
  features: string[];
};

const PLANS: Plan[] = [
  {
    name: "Starter",
    tagline: "Get your social presence built, managed, and secure.",
    features: [
      "Social Media Management",
      "Monthly Content Plan",
      "Creative Posts",
      "Caption & Hashtag Strategy",
      "Community Management",
      "Paid Advertising Management",
      "Influencer / Creator Campaigns",
      "High Security for Social Media Platforms",
    ],
  },
  {
    name: "Growth",
    tagline: "Everything in Starter, plus strategy and reporting to scale.",
    highlight: true,
    features: [
      "Social Media Management",
      "Monthly Content Plan",
      "Creative Posts",
      "Caption & Hashtag Strategy",
      "Community Management",
      "Paid Advertising Management",
      "Influencer / Creator Campaigns",
      "High Security for Social Media Platforms",
      "Marketing Consultation",
      "Monthly Performance Report",
    ],
  },
  {
    name: "Premium",
    tagline: "Full-service management with hands-on budget and insights.",
    features: [
      "Social Media Management",
      "Monthly Content Plan",
      "Creative Posts",
      "Caption & Hashtag Strategy",
      "Community Management",
      "Paid Advertising Management",
      "Influencer / Creator Campaigns",
      "High Security for Social Media Platforms",
      "Marketing Consultation",
      "Monthly Performance Report",
      "Paid Advertising Budget Management",
      "Guiding and Providing Insights",
    ],
  },
];

function PlanCard({ plan }: { plan: Plan }) {
  const onMouseMove = useMercuryGlow<HTMLDivElement>();

  return (
    <div
      onMouseMove={plan.highlight ? undefined : onMouseMove}
      className={`relative flex overflow-hidden gap-2 flex-col bg-[linear-gradient(180deg,rgba(255,255,255,0.8),rgba(255,255,255,0.6))] border border-border backdrop-blur-[6px] [--mx:50%] [--my:50%] [&>*]:relative [&>*]:z-1 after:absolute after:-inset-0.25 after:z-0 after:content-[''] after:bg-[radial-gradient(480px_circle_at_var(--mx)_var(--my),rgba(234,88,12,0.14),transparent_45%)] after:rounded-[inherit] after:opacity-0 after:[transition:opacity_0.4s_ease] after:pointer-events-none hover:after:opacity-100 max-tablet:gap-[0.4rem] max-md:gap-[0.35rem] max-mobile:gap-[0.3rem] bento-card group h-full rounded-2xl p-8 transition-all duration-300 ${
        plan.highlight
          ? "border-accent/50 shadow-[0_20px_60px_-20px_rgba(199,157,0,0.45)] md:-translate-y-3"
          : "hover:border-accent/40"
      }`}
      style={
        plan.highlight
          ? {
              background:
                "linear-gradient(180deg, rgba(255,253,248,0.95), rgba(255,251,235,0.85))",
            }
          : undefined
      }
    >
      {plan.highlight && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-gradient-to-r from-[#c79d00] to-[#e5d38e] px-4 py-1 text-xs font-medium uppercase tracking-wider text-white shadow-[0_8px_20px_-6px_rgba(199,157,0,0.7)]">
          <span className="inline-flex items-center gap-1.5">
            <Sparkles size={12} />
            Most Popular
          </span>
        </span>
      )}

      <h3 className="text-foreground">{plan.name}</h3>
      <p className="min-h-[2.5rem] text-[0.875rem]">
        {plan.tagline}
      </p>

      <div className="py-6 border-t border-border mt-3">
        <ul className="">
          {plan.features.map((feature) => (
            <li key={feature} className="flex items-start gap-3 text-[0.875rem]">
              <span
                className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                  plan.highlight
                    ? "bg-gradient-to-br from-[#c79d00] to-[#e5d38e] text-white"
                    : "bg-gradient-to-br from-accent/15 to-accent-2/15 text-accent-2"
                }`}
              >
                <Check size={12} strokeWidth={3} />
              </span>
              <span className="leading-snug">{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-auto pt-8">
        <Button
          href="/contact"
          variant={plan.highlight ? "primary" : "secondary"}
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
    <section id="packages" className="relative bg-surface-2 py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <Badge>Packages</Badge>
          <h2 className="tracking-tight">
            Social media packages built
            <span className="text-transparent bg-[linear-gradient(90deg,#92400e_0%,#b45309_45%,#ea580c_100%)] bg-clip-text"> to grow with you.</span>
          </h2>
          <p className="">
            Pick the level of hands-on management your brand needs today — every
            package is built on the same foundation, so upgrading later is
            seamless.
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 items-stretch gap-6 md:grid-cols-3 md:gap-5">
          {PLANS.map((plan, i) => (
            <Reveal key={plan.name} delay={i * 100} className="h-full">
              <PlanCard plan={plan} />
            </Reveal>
          ))}
        </div>
        <div className="pt-27 w-full max-tablet:pt-24 max-md:pt-18 max-mobile:pt-[3.6rem]" />
        <p className="text-center text-[0.875rem]">
          Not sure which package fits?{" "}
          <a
            href="/contact"
            className="font-medium text-accent-2 underline-offset-4"
          >
            Talk to us
          </a>{" "}
          and we&apos;ll recommend the right fit for your goals and budget.
        </p>
      </div>
    </section>
  );
}
