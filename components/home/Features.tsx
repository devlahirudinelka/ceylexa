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
const spanClasses = [
  "md:col-span-8",
  "md:col-span-4",
  "md:col-span-4",
  "md:col-span-8",
];

export default function Features() {
  const onMouseMove = useMercuryGlow<HTMLDivElement>();

  return (
    <section id="services" className="relative bg-background py-28">
      <div className="mx-auto  container px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <Badge>Services</Badge>
          <h2 className="tracking-tight">
            Everything your team needs to
            <span className="text-transparent bg-[linear-gradient(90deg,#92400e_0%,#b45309_45%,#ea580c_100%)] bg-clip-text">
              {" "}
              ship automation.
            </span>
          </h2>
          <p className="">
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
                  className="relative flex overflow-hidden gap-2 flex-col bg-[linear-gradient(180deg,rgba(255,255,255,0.8),rgba(255,255,255,0.6))] border border-border backdrop-blur-[6px] [--mx:50%] [--my:50%] [&>*]:relative [&>*]:z-1 after:absolute after:-inset-0.25 after:z-0 after:content-[''] after:bg-[radial-gradient(480px_circle_at_var(--mx)_var(--my),rgba(234,88,12,0.14),transparent_45%)] after:rounded-[inherit] after:opacity-0 after:[transition:opacity_0.4s_ease] after:pointer-events-none hover:after:opacity-100 max-tablet:gap-[0.4rem] max-md:gap-[0.35rem] max-mobile:gap-[0.3rem] bento-card group h-full rounded-2xl p-6 transition-colors hover:border-accent/40"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-accent/15 to-accent-2/15 text-accent-2">
                    <Icon size={20} />
                  </div>
                  <h3 className="text-foreground">{feature.title}</h3>
                  <p className="max-w-md text-[0.875rem]">
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
