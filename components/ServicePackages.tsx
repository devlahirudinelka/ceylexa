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
      className={`bento-card group relative flex h-full flex-col rounded-2xl p-6 transition-all duration-300 sm:p-8 ${
        plan.highlight
          ? "border border-accent/50 shadow-[0_20px_60px_-20px_rgba(199,157,0,0.45)] md:-translate-y-3"
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

      {/* Plan heading: consistent height */}
      <div className="min-h-[6.5rem]">
        <h3 className="text-xl font-semibold text-foreground">
          {plan.name}
        </h3>

        <p className="mt-2 text-sm leading-6 text-muted">
          {plan.tagline}
        </p>
      </div>

      {/* Features */}
      <div className="mt-4 flex-1 border-t border-border pt-6">
        <ul className="flex flex-col gap-3 pl-0">
          {plan.features.map((feature) => (
            <li
              key={feature}
              className="flex items-start gap-3 text-sm text-foreground/90"
            >
              <span
                className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                  plan.highlight
                    ? "bg-gradient-to-br from-[#c79d00] to-[#e5d38e] text-white"
                    : "bg-gradient-to-br from-accent/15 to-accent-2/15 text-accent-2"
                }`}
              >
                <Check size={12} strokeWidth={3} />
              </span>

              <span className="leading-5">{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* CTA: aligned at the bottom */}
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
      <div className="mx-auto w-full max-w-6xl px-6 lg:px-8">
        
        <Reveal className="mx-auto  text-left">
          <h2 className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            Social media packages built
            <span className="text-gradient"> to grow with you.</span>
          </h2>

          <p className="mx-auto mt-5  text-base leading-7 text-muted sm:text-lg">
            From consistent content to full-service social media management,
            choose a package designed to strengthen your brand, engage your
            audience, and support your growth.
          </p>
        </Reveal>
        <div className="mt-14 grid grid-cols-1 items-stretch gap-6 md:mt-16 md:grid-cols-3 md:gap-5">
          {PLANS.map((plan, i) => (
            <Reveal
              key={plan.name}
              delay={i * 100}
              className="flex h-full flex-col"
            >
              <PlanCard plan={plan} />
            </Reveal>
          ))}
        </div>
        
        <div className="space-29xl" />
        <p className="mt-10 text-center text-sm text-muted">
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
