import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import Navbar from "@/components/home/Navbar";
import Footer from "@/components/home/Footer";
import CTASection from "@/components/home/CTASection";
import CreamGradientBackground from "@/components/home/CreamGradientBackground";
import Reveal from "@/components/ui/Reveal";
import { PROJECTS, PROJECTS_INTRO } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projects & Campaigns — Ceylexa",
  description:
    "Explore digital marketing campaigns, brand launches, music releases and influencer activations delivered by Ceylexa across industries and markets.",
};

export default function ProjectsPage() {
  return (
    <div className="page-wrapper">
      <Navbar />

      <main className="bg-background">
        <section className="relative overflow-hidden bg-background pt-32 pb-16 sm:pt-40 sm:pb-20">
          <CreamGradientBackground />
          <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
            <Reveal>
              <span className="font-mono text-sm text-accent-2">{"// "}</span>
              <span className="text-sm font-medium text-muted">{PROJECTS_INTRO.eyebrow}</span>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="mt-6 text-4xl font-semibold leading-[1.08] tracking-tight text-foreground sm:text-6xl lg:text-7xl">
                {PROJECTS_INTRO.heading} <span className="text-gradient">{PROJECTS_INTRO.headingAccent}</span>
              </h1>
            </Reveal>
            <Reveal delay={140}>
              <div className="mt-8 max-w-3xl space-y-4 leading-relaxed text-muted">
                {PROJECTS_INTRO.paragraphs.map((text) => (
                  <p key={text}>{text}</p>
                ))}
                <p className="font-medium text-foreground">{PROJECTS_INTRO.closing}</p>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-20 lg:px-8 sm:pb-28">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PROJECTS.map((project, i) => (
              <Reveal key={project.slug} delay={(i % 3) * 80}>
                <Link
                  href={project.href}
                  className="group card-border relative block h-full overflow-hidden rounded-2xl"
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    <Image
                      src={project.image}
                      alt={`${project.title} — ${project.category} by Ceylexa`}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5">
                      <div>
                        <div className="text-xs font-medium text-white/70">
                          {project.date} · {project.category}
                        </div>
                        <div className="mt-1 text-lg font-semibold leading-snug text-white">
                          {project.title}
                        </div>
                      </div>
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/30 bg-black/25 text-white transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                        <ArrowUpRight size={16} />
                      </span>
                    </div>
                  </div>
                  <p className="p-5 text-sm leading-relaxed text-muted">{project.summary}</p>
                </Link>
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
