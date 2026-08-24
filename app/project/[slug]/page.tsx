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
    <div className="page-wrapper">
      <Navbar />

      <main className="bg-background">
        {/* Hero */}
        <section className="relative overflow-hidden bg-background pt-32 pb-16 sm:pt-40 sm:pb-20">
          <CreamGradientBackground />
          <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
            <Reveal>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-foreground"
              >
                <ArrowLeft size={15} />
                Back to work
              </Link>
            </Reveal>

            <Reveal delay={80} className="mt-8">
              <Badge tone="light" icon={<span className="h-1.5 w-1.5 rounded-full bg-accent-2" />}>
                {project.category}
              </Badge>
            </Reveal>

            <Reveal delay={140}>
              <h1 className="mt-6 text-4xl font-semibold leading-[1.08] tracking-tight text-foreground sm:text-6xl lg:text-7xl">
                {project.title}
              </h1>
            </Reveal>

            <Reveal delay={200}>
              <p className="mt-6 max-w-2xl text-balance text-base text-muted sm:text-lg">
                {project.summary}
              </p>
            </Reveal>

            <Reveal delay={260}>
              <div className="mt-10 flex flex-wrap gap-x-10 gap-y-4 border-t border-border pt-8">
                <MetaItem label="Client" value={project.client} />
                <MetaItem label="Industry" value={project.industry} />
                <MetaItem label="Date" value={project.date} />
                <MetaItem label="Location" value={project.location} />
              </div>
            </Reveal>
          </div>
        </section>

        {/* Hero image */}
        <Reveal className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-3xl border border-border shadow-[0_30px_80px_-40px_rgba(36,26,12,0.35)]">
            <Image
              src={project.image}
              alt={`${project.title} — ${project.category} project by Ceylexa`}
              fill
              priority
              sizes="(min-width: 1280px) 1152px, 100vw"
              className="object-cover"
            />
          </div>
        </Reveal>

        {/* Overview + quick facts */}
        <section className="mx-auto max-w-6xl px-6 py-20 lg:px-8 sm:py-28">
          <div className="grid gap-12 lg:grid-cols-3 lg:gap-16">
            <div className="lg:col-span-2">
              <Reveal>
                <span className="font-mono text-sm text-accent-2">{"// "}</span>
                <span className="text-sm font-medium text-muted">Overview</span>
                <h2 className="mt-3 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                  Project overview
                </h2>
                <p className="mt-4 leading-relaxed text-muted">{project.overview}</p>
              </Reveal>

              <Reveal delay={100} className="mt-10">
                <h3 className="text-xl font-semibold tracking-tight text-foreground">
                  The challenge
                </h3>
                <p className="mt-4 leading-relaxed text-muted">{project.challenge}</p>
              </Reveal>
            </div>

            <Reveal delay={120}>
              <div className="card-border h-fit rounded-2xl p-6 sm:p-8">
                <h3 className="text-xs font-semibold tracking-wider text-muted uppercase">
                  Quick facts
                </h3>
                <dl className="mt-5 space-y-4 text-sm">
                  <FactRow label="Client" value={project.client} />
                  <FactRow label="Industry" value={project.industry} />
                  <FactRow label="Category" value={project.category} />
                  <FactRow label="Location" value={project.location} />
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
                  href="mailto:hello@ceylexa.com"
                  size="md"
                  className="mt-6 w-full justify-center"
                >
                  Start a similar project
                </Button>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Approach */}
        <section className="border-t border-border bg-surface-2/60 py-20 sm:py-28">
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <Reveal>
              <span className="font-mono text-sm text-accent-2">{"// "}</span>
              <span className="text-sm font-medium text-muted">Our approach</span>
              <h2 className="mt-3 max-w-xl text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                How we got there
              </h2>
            </Reveal>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {project.approach.map((step, i) => (
                <Reveal key={step.step} delay={i * 80}>
                  <div className="card-border h-full rounded-2xl p-6">
                    <span className="font-mono text-sm text-accent-2">{step.step}</span>
                    <h3 className="mt-4 font-semibold text-foreground">{step.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{step.description}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* What we delivered */}
        <section className="mx-auto max-w-6xl px-6 py-20 lg:px-8 sm:py-28">
          <Reveal>
            <span className="font-mono text-sm text-accent-2">{"// "}</span>
            <span className="text-sm font-medium text-muted">Scope</span>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
              What we delivered
            </h2>
          </Reveal>

          <div className="mt-12 grid grid-cols-2 gap-8 border-t border-border pt-10 sm:grid-cols-4">
            {project.deliverables.map((item, i) => (
              <Reveal key={item.label} delay={i * 80}>
                <div className="text-gradient text-3xl font-semibold tracking-tight sm:text-4xl">
                  {item.value}
                </div>
                <div className="mt-1.5 text-sm text-muted">{item.label}</div>
              </Reveal>
            ))}
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
                  <h2 className="mt-3 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                    Other recent projects
                  </h2>
                </div>
                <Link
                  href="/about"
                  className="hidden shrink-0 items-center gap-1.5 text-sm font-medium text-muted transition-colors hover:text-foreground sm:inline-flex"
                >
                  View all work
                  <ArrowRight size={15} />
                </Link>
              </Reveal>

              <div className="mt-10 grid gap-6 sm:grid-cols-2">
                {otherProjects.map((item, i) => (
                  <Reveal key={item.slug} delay={i * 100}>
                    <Link
                      href={item.href}
                      className="group card-border relative block overflow-hidden rounded-2xl"
                    >
                      <div className="relative aspect-[4/3] w-full overflow-hidden">
                        <Image
                          src={item.image}
                          alt={`${item.title} — ${item.category} project by Ceylexa`}
                          fill
                          sizes="(min-width: 640px) 50vw, 100vw"
                          className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                        <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6">
                          <div>
                            <div className="text-xs font-medium text-white/70">{item.category}</div>
                            <div className="mt-1 text-xl font-semibold text-white">{item.title}</div>
                          </div>
                          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/30 bg-black/25 text-white transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                            <ArrowUpRight size={18} />
                          </span>
                        </div>
                      </div>
                    </Link>
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
