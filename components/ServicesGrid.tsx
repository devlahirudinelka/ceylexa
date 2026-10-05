"use client";

import {
  Layout,
  Megaphone,
  Camera,
  Target,
  Fingerprint,
  Users,
  ArrowUpRight,
} from "lucide-react";
import { Eyebrow, GoldWord, H2_CLASS } from "@/components/ui/brand";
import Reveal from "@/components/ui/Reveal";
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
  const Icon = ICONS[service.icon];

  return (
    <a
      href={`/services/${service.slug}`}
      className="group relative grid grid-cols-[auto_1fr_auto] items-start gap-x-8 border-b border-light-transparent-black py-9 max-md:gap-x-4 max-md:py-6"
    >
      <span className="absolute inset-x-0 bottom-[-1px] h-px origin-left scale-x-0 bg-[#d7ba5e] transition-transform duration-500 group-hover:scale-x-100" />
      <span className="pt-2 text-[0.8125rem] font-medium tabular-nums text-dim-gray transition-colors duration-300 group-hover:text-[#d7ba5e]">
        {service.number}
      </span>
      <div className="grid gap-x-10 gap-y-3 lg:grid-cols-[1fr_1.2fr] lg:items-start">
        <h3 className="flex items-center gap-4 font-sans text-[2.25rem] font-medium leading-[1.1em] tracking-tight text-black transition-transform duration-500 group-hover:translate-x-2 max-tablet:text-[1.75rem] max-md:text-[1.375rem]">
          <Icon size={26} className="shrink-0 text-[#d7ba5e] max-md:hidden" />
          {service.title}
        </h3>
        <div>
          <p className="mb-0 font-sans text-[1rem] leading-[1.6em] text-dim-gray">{service.summary}</p>
          <div className="mt-4 flex flex-wrap gap-2 max-md:hidden">
            {service.pills.slice(0, 4).map((pill) => (
              <span key={pill} className="rounded-full border border-light-transparent-black px-3 py-1 text-[0.75rem] leading-[1.5em] text-dim-gray">
                {pill}
              </span>
            ))}
          </div>
        </div>
      </div>
      <span className="mt-1 flex h-11 w-11 items-center justify-center rounded-full border border-light-transparent-black text-black transition-all duration-500 group-hover:rotate-45 group-hover:border-[#d7ba5e] group-hover:bg-[#d7ba5e] group-hover:text-white max-md:h-9 max-md:w-9">
        <ArrowUpRight size={17} />
      </span>
    </a>
  );
}

export default function ServicesGrid() {
  return (
    <section id="all-services" className="relative scroll-mt-24">
      <div className="mx-auto container px-6 lg:px-8 py-28 max-md:py-18">
        <Reveal>
          <div className="flex items-end justify-between gap-8 max-md:flex-col max-md:items-start">
            <div>
              <Eyebrow>What we do</Eyebrow>
              <h2 className={`mt-4 ${H2_CLASS}`}>
                Every service, under <GoldWord>one roof.</GoldWord>
              </h2>
            </div>
            <p className="mb-0 max-w-[26rem] font-sans text-[1rem] leading-[1.6em] text-black">
              From the first pixel of your website to the last influencer
              partnership, here&apos;s everything Ceylexa can take off your plate.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 border-t border-light-transparent-black max-md:mt-10">
          {SERVICES.map((service, i) => (
            <Reveal key={service.slug} delay={(i % 3) * 60}>
              <ServiceCard service={service} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
