"use client";

import { Layout, Megaphone, Camera, Target, Fingerprint, Users, ArrowRight } from "lucide-react";
import Badge from "@/components/ui/Badge";
import Reveal from "@/components/ui/Reveal";
import { useMercuryGlow } from "@/lib/useMercuryGlow";
import { SERVICES, type ServiceItem } from "@/lib/services-data";

const ICONS: Record<ServiceItem["icon"], typeof Layout> = {
  layout: Layout,
  megaphone: Megaphone,
  camera: Camera,
  target: Target,
  fingerprint: Fingerprint,
  users: Users,
};

function ServiceCard({ service }: { service: ServiceItem }) {
  const onMouseMove = useMercuryGlow<HTMLAnchorElement>();
  const Icon = ICONS[service.icon];

  return (
    <a
      href={`/services/${service.slug}`}
      onMouseMove={onMouseMove}
      className="relative flex overflow-hidden gap-2 flex-col bg-[linear-gradient(180deg,rgba(255,255,255,0.8),rgba(255,255,255,0.6))] border border-border backdrop-blur-[6px] [--mx:50%] [--my:50%] [&>*]:relative [&>*]:z-1 after:absolute after:-inset-0.25 after:z-0 after:content-[''] after:bg-[radial-gradient(480px_circle_at_var(--mx)_var(--my),rgba(234,88,12,0.14),transparent_45%)] after:rounded-[inherit] after:opacity-0 after:[transition:opacity_0.4s_ease] after:pointer-events-none hover:after:opacity-100 max-tablet:gap-[0.4rem] max-md:gap-[0.35rem] max-mobile:gap-[0.3rem] bento-card group h-full rounded-2xl p-7 transition-colors hover:border-accent/40"
    >
      <div className="flex items-center justify-between">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-accent/15 to-accent-2/15 text-accent-2">
          <Icon size={20} />
        </div>
        <span className="text-xs font-medium tracking-wider text-muted">
          {service.number}
        </span>
      </div>

      <h3 className="text-foreground">
        {service.title}
      </h3>
      <p className="text-[0.875rem]">
        {service.summary}
      </p>

      <div className="mt-auto flex items-center gap-1.5 pt-6 text-sm font-medium text-accent-2">
        Learn more
        <ArrowRight
          size={15}
          className="transition-transform duration-300 group-hover:translate-x-1"
        />
      </div>
    </a>
  );
}

export default function ServicesGrid() {
  return (
    <section id="all-services" className="relative bg-background py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <Badge>What we do</Badge>
          <h2 className="tracking-tight">
            Every service, under
            <span className="text-transparent bg-[linear-gradient(90deg,#92400e_0%,#b45309_45%,#ea580c_100%)] bg-clip-text"> one roof.</span>
          </h2>
          <p className="">
            From the first pixel of your website to the last influencer partnership,
            here&apos;s everything Ceylexa can take off your plate.
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => (
            <Reveal key={service.slug} delay={(i % 3) * 90} className="h-full">
              <ServiceCard service={service} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
