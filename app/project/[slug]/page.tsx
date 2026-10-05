import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";

import Navbar from "@/components/home/Navbar";
import Footer from "@/components/home/Footer";
import CTASection from "@/components/home/CTASection";
import CreamGradientBackground from "@/components/home/CreamGradientBackground";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import { CONTACT_EMAIL } from "@/lib/site";
import { PROJECTS, getOtherProjects, getProjectBySlug } from "@/lib/projects";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return PROJECTS.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Project — Ceylexa" };

  return {
    title: `${project.title} — Ceylexa`,
    description: project.summary,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const services = project.tags.split(",").map((tag) => tag.trim());
  const otherProjects = getOtherProjects(slug).slice(0, 2);

  return (
    <div className="overflow-clip">
      <Navbar />

      <main className="bg-background">
        {/* Hero */}
        <section className="relative overflow-hidden bg-background pt-32 pb-16 sm:pt-40 sm:pb-20">
          <CreamGradientBackground />
          <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
            <Reveal>
              <Link
                href="/project"
                className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-foreground"
              >
                <ArrowLeft size={15} />
                Back to projects
              </Link>
            </Reveal>

            <Reveal delay={80} className="mt-8">
              <Badge tone="light" icon={<span className="h-1.5 w-1.5 rounded-full bg-accent-2" />}>
                {project.category}
              </Badge>
            </Reveal>

            <Reveal delay={140}>
              <h1 className="tracking-tight text-foreground">
                {project.title}
              </h1>
            </Reveal>

            <Reveal delay={200}>
              <p className="max-w-2xl text-balance text-[1rem] sm:text-[1.125rem]">
                {project.summary}
              </p>
            </Reveal>

            <Reveal delay={260}>
              <div className="mt-10 flex flex-wrap gap-x-10 gap-y-4 border-t border-border pt-8">
                <MetaItem label="Client" value={project.client} />
                <MetaItem label="Campaign" value={project.date} />
                <MetaItem label="Platforms" value={project.platforms} />
              </div>
            </Reveal>
          </div>
        </section>

        {/* Hero image */}
        <Reveal className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-3xl border border-border shadow-[0_30px_80px_-40px_rgba(36,26,12,0.35)]">
            <Image
              src={project.image}
              alt={`${project.title} — ${project.category} by Ceylexa`}
              fill
              priority
              sizes="(min-width: 1280px) 1152px, 100vw"
              className="object-cover"
            />
          </div>
        </Reveal>

        {/* Overview + challenge + quick facts */}
        <section className="mx-auto max-w-6xl px-6 py-20 lg:px-8 sm:py-28">
          <div className="grid gap-12 lg:grid-cols-3 lg:gap-16">
            <div className="lg:col-span-2">
              <Reveal>
                <span className="font-mono text-sm text-accent-2">{"// "}</span>
                <span className="text-sm font-medium text-muted">Overview</span>
                <h2 className="tracking-tight text-foreground">
                  Project overview
                </h2>
                <div className="mt-4 leading-relaxed text-muted">
                  {project.overview.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </Reveal>

              <Reveal delay={100} className="mt-12">
                <h3 className="tracking-tight text-foreground">
                  The challenge
                </h3>
                {project.challengeIntro && (
                  <p className="">{project.challengeIntro}</p>
                )}
                <ul className="space-y-2 leading-relaxed text-muted">
                  {project.challenges.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-2" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>

            <Reveal delay={120}>
              <div className="bg-[linear-gradient(180deg,rgba(255,255,255,0.75),rgba(255,255,255,0.55))] border border-border backdrop-blur-[6px] h-fit rounded-2xl p-6 sm:p-8">
                <h3 className="tracking-wider text-muted uppercase">
                  Quick facts
                </h3>
                <dl className="mt-5 space-y-4 text-sm">
                  <FactRow label="Client" value={project.client} />
                  <FactRow label="Category" value={project.category} />
                  <FactRow label="Platforms" value={project.platforms} />
                </dl>

                <div className="mt-6 flex flex-wrap gap-2 border-t border-border pt-6">
                  {services.map((service) => (
                    <span
                      key={service}
                      className="rounded-full border border-border bg-white/60 px-3 py-1 text-xs font-medium text-foreground/80"
                    >
                      {service}
                    </span>
                  ))}
                </div>

                <Button
                  href={`mailto:${CONTACT_EMAIL}`}
                  size="md"
                  className="mt-6 w-full justify-center"
                >
                  Start a similar project
                </Button>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Solution */}
        <section className="border-t border-border bg-surface-2/60 py-20 sm:py-28">
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <Reveal>
              <span className="font-mono text-sm text-accent-2">{"// "}</span>
              <span className="text-sm font-medium text-muted">Team Ceylexa&rsquo;s solution</span>
              <h2 className="max-w-xl tracking-tight text-foreground">
                How we got there
              </h2>
              <p className="max-w-3xl">{project.solutionIntro}</p>
            </Reveal>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {project.approach.map((step, i) => (
                <Reveal key={step.title} delay={(i % 3) * 80}>
                  <div className="bg-[linear-gradient(180deg,rgba(255,255,255,0.75),rgba(255,255,255,0.55))] border border-border backdrop-blur-[6px] h-full rounded-2xl p-6">
                    <span className="font-mono text-sm text-accent-2">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-foreground">{step.title}</h3>
                    <p className="text-[0.875rem]">{step.description}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Results */}
        <section className="mx-auto max-w-6xl px-6 py-20 lg:px-8 sm:py-28">
          <Reveal>
            <span className="font-mono text-sm text-accent-2">{"// "}</span>
            <span className="text-sm font-medium text-muted">Results</span>
            <h2 className="tracking-tight text-foreground">
              The numbers
            </h2>
            <p className="max-w-3xl">{project.resultsIntro}</p>
          </Reveal>

          <div className="mt-12 grid gap-8 border-t border-border pt-10 sm:grid-cols-2 lg:grid-cols-3">
            {project.results.map((item, i) => (
              <Reveal key={item.label} delay={(i % 3) * 80}>
                <div className="text-transparent bg-[linear-gradient(90deg,#92400e_0%,#b45309_45%,#ea580c_100%)] bg-clip-text text-3xl font-semibold tracking-tight sm:text-4xl">
                  {item.value}
                </div>
                <div className="mt-1.5 text-sm font-medium text-foreground">{item.label}</div>
                <p className="text-[0.875rem]">{item.description}</p>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Impact */}
        <section className="border-t border-border bg-surface-2/60 py-20 sm:py-28">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <Reveal>
              <span className="font-mono text-sm text-accent-2">{"// "}</span>
              <span className="text-sm font-medium text-muted">Impact</span>
              <h2 className="tracking-tight text-foreground">
                The bigger picture
              </h2>
              <div className="mt-4 leading-relaxed text-muted">
                {project.impact.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              <p className="text-[1.25rem] font-semibold tracking-tight sm:text-[1.5rem]">
                {project.tagline}
              </p>
            </Reveal>
          </div>
        </section>

        {/* More work */}
        {otherProjects.length > 0 && (
          <section className="border-t border-border py-20 sm:py-28">
            <div className="mx-auto max-w-6xl px-6 lg:px-8">
              <Reveal className="flex items-end justify-between gap-6">
                <div>
                  <span className="font-mono text-sm text-accent-2">{"// "}</span>
                  <span className="text-sm font-medium text-muted">More work</span>
                  <h2 className="tracking-tight text-foreground">
                    Other campaigns
                  </h2>
                </div>
                <Link
                  href="/project"
                  className="hidden shrink-0 items-center gap-1.5 text-sm font-medium text-muted transition-colors hover:text-foreground sm:inline-flex"
                >
                  View all projects
                  <ArrowRight size={15} />
                </Link>
              </Reveal>

              <div className="mt-10 grid gap-6 sm:grid-cols-2">
                {otherProjects.map((item, i) => (
                  <Reveal key={item.slug} delay={i * 100}>
                    <ProjectTile project={item} />
                  </Reveal>
                ))}
              </div>
            </div>
          </section>
        )}

        <CTASection />
      </main>

      <Footer />
    </div>
  );
}

function ProjectTile({ project }: { project: (typeof PROJECTS)[number] }) {
  return (
    <Link href={project.href} className="flex gap-2 flex-col bg-[linear-gradient(180deg,rgba(255,255,255,0.75),rgba(255,255,255,0.55))] border border-border backdrop-blur-[6px] max-tablet:gap-[0.4rem] max-md:gap-[0.35rem] max-mobile:gap-[0.3rem] group relative overflow-hidden rounded-2xl">
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <Image
          src={project.image}
          alt={`${project.title} — ${project.category} by Ceylexa`}
          fill
          sizes="(min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6">
          <div>
            <div className="text-xs font-medium text-white/70">{project.category}</div>
            <div className="mt-1 text-xl font-semibold text-white">{project.title}</div>
          </div>
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/30 bg-black/25 text-white transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
            <ArrowUpRight size={18} />
          </span>
        </div>
      </div>
    </Link>
  );
}

function MetaItem({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="text-xs font-semibold tracking-wider text-muted uppercase">{label}</div>
      <div className="mt-1 text-sm font-medium text-foreground">{value}</div>
    </div>
  );
}

function FactRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between gap-4">
      <dt className="text-muted">{label}</dt>
      <dd className="text-right font-medium text-foreground">{value}</dd>
    </div>
  );
}
