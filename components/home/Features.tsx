"use client";

import {
  Workflow,
  Bot,
  Plug,
  Activity,
  ShieldCheck,
  UserCheck,
} from "lucide-react";
import Badge from "@/components/ui/Badge";
import Reveal from "@/components/ui/Reveal";
import { features } from "@/lib/home-content";
import { useMercuryGlow } from "@/lib/useMercuryGlow";

const icons = [Workflow, Bot, Plug, Activity, ShieldCheck, UserCheck];

// 12-col bento spans, cycling 8/4/4/8 so each pair of cards fills a row
// with one "spotlight" tile and one supporting tile.
const spanClasses = ["md:col-span-8", "md:col-span-4", "md:col-span-4", "md:col-span-8"];

export default function Features() {
  const onMouseMove = useMercuryGlow<HTMLDivElement>();

  return (
    <section id="services" className="relative bg-background py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <Badge>Services</Badge>
          <h2 className="mt-6 text-3xl font-semibold tracking-tight sm:text-4xl">
            Everything your team needs to
            <span className="text-gradient"> ship automation.</span>
          </h2>
          <p className="mt-4 text-muted">
            From the first workflow audit to a fully autonomous, multi-step
            system — we cover the whole build, end to end.
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-5 md:grid-cols-12">
          {features.map((feature, i) => {
            const Icon = icons[i % icons.length];
            const span = spanClasses[i % spanClasses.length];
            return (
              <Reveal
                key={feature.title}
                delay={(i % 4) * 80}
                className={`col-span-1 ${span}`}
              >
                <div
                  onMouseMove={onMouseMove}
                  className="bento-card group h-full rounded-2xl p-6 transition-colors hover:border-accent/40"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-accent/15 to-accent-2/15 text-accent-2">
                    <Icon size={20} />
                  </div>
                  <h3 className="mt-5 text-base font-semibold text-foreground">
                    {feature.title}
                  </h3>
                  <p className="mt-2 max-w-md text-sm leading-relaxed text-muted">
                    {feature.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
