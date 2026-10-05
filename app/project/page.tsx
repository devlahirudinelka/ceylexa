import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import Navbar from "@/components/home/Navbar";
import Footer from "@/components/home/Footer";
import CTASection from "@/components/home/CTASection";
import { Eyebrow, GoldWord, Sparkle } from "@/components/ui/brand";
import Reveal from "@/components/ui/Reveal";
import { PROJECTS, PROJECTS_INTRO } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projects & Campaigns — Ceylexa",
  description:
    "Explore digital marketing campaigns, brand launches, music releases and influencer activations delivered by Ceylexa across industries and markets.",
};

export default function ProjectsPage() {
  return (
    <div className="overflow-clip">
      <Navbar />

      <main>
        <section className="relative overflow-hidden">
          <div aria-hidden className="pointer-events-none absolute inset-x-0 top-24 -z-1 select-none text-center text-[20rem] font-bold leading-[0.9em] text-cultured max-tablet:text-[10rem] max-md:text-[7rem] max-mobile:text-[4.5rem]">
            WORK
          </div>
          <div className="mx-auto container px-6 lg:px-8 pb-16 pt-40 max-md:pt-32">
            <Reveal>
              <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
                <div className="lg:col-span-7">
                  <Eyebrow>{PROJECTS_INTRO.eyebrow}</Eyebrow>
                  <h1 className="mt-5 font-sans text-[5.5rem] font-semibold leading-[1.02em] tracking-tight max-tablet:text-[4.25rem] max-md:text-[3.25rem] max-mobile:text-[2.5rem]">
                    {PROJECTS_INTRO.heading} <GoldWord>{PROJECTS_INTRO.headingAccent}</GoldWord>
                  </h1>
                </div>
                <div className="flex flex-col gap-4 lg:col-span-5">
                  {PROJECTS_INTRO.paragraphs.map((text) => (
                    <p key={text} className="mb-0 font-sans text-[1rem] leading-[1.6em] text-black">{text}</p>
                  ))}
                  <p className="mb-0 flex items-start gap-2 font-sans text-[1rem] font-medium leading-[1.5em] text-black">
                    <Sparkle className="mt-1.5 w-3.5 shrink-0 text-[#d7ba5e]" />
                    {PROJECTS_INTRO.closing}
                  </p>
                </div>
              </div>
            </Reveal>
            <div className="mt-14 flex items-baseline gap-3 border-t border-light-transparent-black pt-6">
              <span className="text-[3.75rem] font-medium leading-none text-black max-md:text-[2.5rem]">{String(PROJECTS.length).padStart(2, "0")}</span>
              <span className="font-sans text-[0.875rem] text-dim-gray">projects &amp; campaigns</span>
            </div>
          </div>
        </section>

        <section className="mx-auto container px-6 lg:px-8 pb-28 max-md:pb-18">
          <div className="grid gap-x-6 gap-y-12 md:grid-cols-2">
            {PROJECTS.map((project, i) => (
              <Reveal key={project.slug} delay={(i % 2) * 80} className={i % 2 === 1 ? "md:mt-16" : ""}>
                <ProjectTile project={project} index={i} />
              </Reveal>
            ))}
          </div>
        </section>

        <CTASection />
      </main>

      <Footer />
    </div>
  );
}

function ProjectTile({ project, index }: { project: (typeof PROJECTS)[number]; index: number }) {
  return (
    <Link href={project.href} className="group block">
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[1.875rem] bg-ghost-white max-mobile:rounded-2xl">
        <Image
          src={project.image}
          alt={`${project.title} — ${project.category} by Ceylexa`}
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-7 max-md:p-5">
          <div>
            <div className="flex flex-wrap items-center gap-x-3 font-sans text-[0.8125rem] uppercase leading-[1.5em] text-white/80">
              <span className="text-[#d7ba5e]">{String(index + 1).padStart(2, "0")}</span>
              <span>{project.category}</span>
              <span className="opacity-50">/</span>
              <span>{project.date}</span>
            </div>
            <div className="mt-2 font-sans text-[2rem] font-medium leading-[1.1em] tracking-tight text-white max-md:text-[1.375rem]">
              {project.title}
            </div>
          </div>
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#d7ba5e] text-black transition-transform duration-500 group-hover:rotate-45 max-md:h-10 max-md:w-10">
            <ArrowUpRight size={18} />
          </span>
        </div>
      </div>
      <p className="mb-0 mt-4 font-sans text-[0.9375rem] leading-[1.6em] text-dim-gray">{project.summary}</p>
    </Link>
  );
}
