import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

import Navbar from "@/components/home/Navbar";
import Footer from "@/components/home/Footer";
import CTASection from "@/components/home/CTASection";
import { ArrowButton, Eyebrow, GoldWord, H2_CLASS, Sparkle } from "@/components/ui/brand";
import Reveal from "@/components/ui/Reveal";
import { CONTACT_EMAIL } from "@/lib/site";
import { PROJECTS, getOtherProjects, getProjectBySlug } from "@/lib/projects";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return PROJECTS.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
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

  const index = PROJECTS.findIndex((item) => item.slug === project.slug);

  return (
    <div className="overflow-clip">
      <Navbar />

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div aria-hidden className="pointer-events-none absolute -right-4 top-20 -z-1 select-none text-[24rem] font-bold leading-[0.9em] text-cultured max-tablet:text-[14rem] max-md:text-[9rem]">
            {String(index + 1).padStart(2, "0")}
          </div>
          <div className="mx-auto container px-6 lg:px-8 pb-14 pt-40 max-md:pt-32">
            <Reveal>
              <Link
                href="/project"
                className="inline-flex items-center gap-2 font-sans text-[0.875rem] text-dim-gray transition-colors hover:text-[#d7ba5e]"
              >
                <ArrowLeft size={15} />
                Back to projects
              </Link>
            </Reveal>

            <Reveal delay={80} className="mt-8">
              <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
                <div className="lg:col-span-8">
                  <Eyebrow>{project.category}</Eyebrow>
                  <h1 className="mt-5 font-sans text-[5.5rem] font-semibold leading-[1.02em] tracking-tight max-tablet:text-[4.25rem] max-md:text-[3.25rem] max-mobile:text-[2.5rem]">{project.title}</h1>
                </div>
                <p className="mb-0 font-sans text-[1.125rem] leading-[1.6em] text-black lg:col-span-4">{project.summary}</p>
              </div>
            </Reveal>

            <Reveal delay={160}>
              <div className="mt-12 grid grid-cols-3 border-t border-light-transparent-black max-mobile:grid-cols-1">
                <MetaItem label="Client" value={project.client} />
                <MetaItem label="Campaign" value={project.date} divided />
                <MetaItem label="Platforms" value={project.platforms} divided />
              </div>
            </Reveal>
          </div>
        </section>

        {/* Hero image */}
        <Reveal className="mx-auto container px-6 lg:px-8">
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-[1.875rem] bg-ghost-white max-mobile:rounded-2xl">
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
        <section className="mx-auto container px-6 lg:px-8 py-28 max-md:py-18">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <Reveal>
                <Eyebrow>Overview</Eyebrow>
                <h2 className={`mt-4 ${H2_CLASS}`}>Project <GoldWord>overview</GoldWord></h2>
                <div className="mt-6 flex flex-col gap-5">
                  {project.overview.map((paragraph) => (
                    <p key={paragraph} className="mb-0 font-sans text-[1rem] leading-[1.6em] text-black">{paragraph}</p>
                  ))}
                </div>
              </Reveal>

              <Reveal delay={100} className="mt-14 border-t border-light-transparent-black pt-10">
                <h3 className="font-sans text-[2.25rem] font-medium leading-[1.15em] tracking-tight max-md:text-[1.75rem]">
                  The challenge
                </h3>
                {project.challengeIntro && (
                  <p className="mb-0 font-sans text-[1rem] leading-[1.6em] text-black mt-4">{project.challengeIntro}</p>
                )}
                <ul className="mt-6 flex flex-col gap-3">
                  {project.challenges.map((item) => (
                    <li key={item} className="flex items-start gap-3 font-sans text-[1rem] leading-[1.6em] text-dim-gray">
                      <Sparkle className="mt-1.5 w-3.5 shrink-0 text-[#d7ba5e]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>

            <Reveal delay={120} className="lg:col-span-5 lg:sticky lg:top-28 lg:self-start">
              <div className="rounded-[1.875rem] bg-black p-8 text-white max-md:p-6 max-mobile:rounded-2xl">
                <div className="flex items-center gap-1 font-sans text-[0.875rem] uppercase leading-[1.5em]">
                  <span className="text-[#d7ba5e]">{"//"}</span>
                  <span className="text-white/70">Quick facts</span>
                </div>
                <dl className="mt-6">
                  <FactRow label="Client" value={project.client} />
                  <FactRow label="Category" value={project.category} />
                  <FactRow label="Platforms" value={project.platforms} />
                </dl>

                <div className="mt-6 flex flex-wrap gap-2">
                  {services.map((service) => (
                    <span key={service} className="rounded-full border border-white/20 px-3 py-1 text-[0.75rem] leading-[1.5em] text-white/80">
                      {service}
                    </span>
                  ))}
                </div>

                <ArrowButton href={`mailto:${CONTACT_EMAIL}`} className="mt-8">
                  Start a similar project
                </ArrowButton>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Solution */}
        <section className="bg-ghost-white">
          <div className="mx-auto container px-6 lg:px-8 py-28 max-md:py-18">
            <Reveal>
              <div className="flex items-end justify-between gap-8 max-md:flex-col max-md:items-start">
                <div>
                  <Eyebrow>Team Ceylexa&rsquo;s solution</Eyebrow>
                  <h2 className={`mt-4 ${H2_CLASS}`}>How we <GoldWord>got there</GoldWord></h2>
                </div>
                <p className="mb-0 font-sans text-[1rem] leading-[1.6em] text-black max-w-[30rem]">{project.solutionIntro}</p>
              </div>
            </Reveal>

            <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3 max-md:mt-10">
              {project.approach.map((step, i) => (
                <Reveal key={step.title} delay={(i % 3) * 80} className="h-full">
                  <div className="group relative h-full overflow-hidden rounded-[1.875rem] border border-light-transparent-black bg-white p-8 transition-[border-color,box-shadow] duration-300 hover:border-[#d7ba5e] hover:shadow-[0_30px_60px_-35px_rgba(0,0,0,0.35)] max-md:p-6 max-mobile:rounded-2xl">
                    <span aria-hidden className="absolute -right-2 -top-5 select-none text-[8rem] font-medium leading-none tracking-tighter text-black/[0.05] transition-colors duration-300 group-hover:text-[#d7ba5e]/20">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="relative text-[0.8125rem] font-medium tabular-nums text-[#d7ba5e]">{String(i + 1).padStart(2, "0")}</span>
                    <h3 className="relative mt-4 font-sans text-[1.5rem] font-medium leading-[1.2em] text-black max-md:text-[1.25rem]">{step.title}</h3>
                    <p className="relative mb-0 mt-3 font-sans text-[0.9375rem] leading-[1.6em] text-dim-gray">{step.description}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Results */}
        <section className="mx-auto container px-6 lg:px-8 py-28 max-md:py-18">
          <Reveal>
            <div className="flex items-end justify-between gap-8 max-md:flex-col max-md:items-start">
              <div>
                <Eyebrow>Results</Eyebrow>
                <h2 className={`mt-4 ${H2_CLASS}`}>The <GoldWord>numbers</GoldWord></h2>
              </div>
              <p className="mb-0 font-sans text-[1rem] leading-[1.6em] text-black max-w-[30rem]">{project.resultsIntro}</p>
            </div>
          </Reveal>

          <div className="mt-14 grid border-t border-light-transparent-black sm:grid-cols-2 lg:grid-cols-3 max-md:mt-10">
            {project.results.map((item, i) => (
              <Reveal key={item.label} delay={(i % 3) * 80} className="border-b border-light-transparent-black py-8 sm:px-8 sm:[&:nth-child(2n+1)]:pl-0 lg:[&:nth-child(2n+1)]:pl-8 lg:[&:nth-child(3n+1)]:pl-0 sm:border-l sm:[&:nth-child(2n+1)]:border-l-0 lg:[&:nth-child(2n+1)]:border-l lg:[&:nth-child(3n+1)]:border-l-0">
                <div className="font-sans text-[3.75rem] font-medium leading-none tracking-tight text-black max-tablet:text-[3rem] max-md:text-[2.5rem]">
                  {item.value}
                </div>
                <div className="mt-3 font-sans text-[1rem] font-medium leading-[1.4em] text-[#d7ba5e]">{item.label}</div>
                <p className="mb-0 mt-2 font-sans text-[0.9375rem] leading-[1.6em] text-dim-gray">{item.description}</p>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Impact */}
        <section className="mx-auto container px-6 lg:px-8 pb-28 max-md:pb-18">
          <Reveal>
            <div className="relative overflow-hidden rounded-[1.875rem] bg-black p-14 text-white max-md:p-7 max-mobile:rounded-2xl">
              <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
                <div className="lg:col-span-5">
                  <div className="flex items-center gap-1 font-sans text-[0.875rem] uppercase leading-[1.5em]">
                    <span className="text-[#d7ba5e]">{"//"}</span>
                    <span className="text-white/70">Impact</span>
                  </div>
                  <h2 className={`mt-4 text-white ${H2_CLASS}`}>
                    The bigger <GoldWord>picture</GoldWord>
                  </h2>
                </div>
                <div className="flex flex-col gap-5 lg:col-span-7">
                  {project.impact.map((paragraph) => (
                    <p key={paragraph} className="mb-0 font-sans text-[1rem] leading-[1.6em] text-white/70">{paragraph}</p>
                  ))}
                  <p className="mb-0 mt-4 flex items-start gap-3 border-t border-white/15 pt-6 font-sans text-[1.5rem] font-medium leading-[1.3em] text-white max-md:text-[1.25rem]">
                    <Sparkle className="mt-2 w-5 shrink-0 text-[#d7ba5e]" />
                    {project.tagline}
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        {/* More work */}
        {otherProjects.length > 0 && (
          <section className="mx-auto container px-6 lg:px-8 pb-28 max-md:pb-18">
            <Reveal>
              <div className="flex items-end justify-between gap-6 border-t border-light-transparent-black pt-14 max-md:flex-col max-md:items-start">
                <div>
                  <Eyebrow>More work</Eyebrow>
                  <h2 className={`mt-4 ${H2_CLASS}`}>Other <GoldWord>campaigns</GoldWord></h2>
                </div>
                <ArrowButton href="/project" variant="outline">
                  View all projects
                </ArrowButton>
              </div>
            </Reveal>

            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {otherProjects.map((item, i) => (
                <Reveal key={item.slug} delay={i * 100}>
                  <ProjectTile project={item} index={PROJECTS.findIndex((entry) => entry.slug === item.slug)} />
                </Reveal>
              ))}
            </div>
          </section>
        )}

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

function MetaItem({ label, value, divided = false }: { label: string; value: string; divided?: boolean }) {
  return (
    <div className={`py-6 ${divided ? "border-l border-light-transparent-black pl-8 max-md:pl-5 max-mobile:border-l-0 max-mobile:border-t max-mobile:pl-0" : ""}`}>
      <div className="font-sans text-[0.75rem] font-medium uppercase tracking-wider text-dim-gray">{label}</div>
      <div className="mt-2 font-sans text-[1.25rem] font-medium leading-[1.3em] text-black max-md:text-[1rem]">{value}</div>
    </div>
  );
}

function FactRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-start justify-between gap-6 border-b border-white/15 py-4 font-sans text-[0.9375rem]">
      <dt className="text-white/60">{label}</dt>
      <dd className="text-right font-medium text-white">{value}</dd>
    </div>
  );
}
