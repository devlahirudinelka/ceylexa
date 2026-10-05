import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import Navbar from "@/components/home/Navbar";
import Footer from "@/components/home/Footer";
import CTASection from "@/components/home/CTASection";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import { SERVICES, getServiceBySlug } from "@/lib/services-data";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return SERVICES.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};

  return {
    title: `${service.title} — Ceylexa`,
    description: service.summary,
  };
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const index = SERVICES.findIndex((s) => s.slug === service.slug);
  const otherServices = [
    ...SERVICES.slice(index + 1),
    ...SERVICES.slice(0, index),
  ].slice(0, 3);

  return (
    <div className="overflow-clip">
      <Navbar />

      <div className="main">
        <section className="relative overflow-hidden bg-background pb-16 pt-40 lg:pt-44">
          <div className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[720px] -translate-x-1/2 -translate-y-1/3 rounded-full bg-gradient-to-br from-accent/20 via-accent-2/10 to-transparent blur-3xl" />

          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <Reveal>
              <Link
                href="/services"
                className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-foreground"
              >
                <ArrowLeft size={14} />
                All services
              </Link>

              <div className="mt-6 flex items-center gap-3">
                <Badge>{service.number}</Badge>
                <Badge>Service</Badge>
              </div>

              <h1 className="tracking-tight">
                {service.title}
              </h1>
              <p className="max-w-2xl text-[1.125rem]">
                {service.description}
              </p>
              {service.extra && (
                <p className="max-w-2xl text-[1.125rem]">
                  {service.extra}
                </p>
              )}

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Button href="/contact" size="lg">
                  Start a Project
                  <ArrowRight size={16} />
                </Button>
                <Button href="/services" variant="secondary" size="lg">
                  View all packages
                </Button>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="relative bg-surface-2 py-20">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <Reveal>
              <h2 className="tracking-tight">
                What&apos;s included
              </h2>
              <ul className="grid-cols-1 sm:grid-cols-2">
                {service.items.map((item) => (
                  <li
                    key={item.title}
                    className="relative overflow-hidden bg-[linear-gradient(180deg,rgba(255,255,255,0.8),rgba(255,255,255,0.6))] border border-border backdrop-blur-[6px] [--mx:50%] [--my:50%] [&>*]:relative [&>*]:z-1 after:absolute after:-inset-0.25 after:z-0 after:content-[''] after:bg-[radial-gradient(480px_circle_at_var(--mx)_var(--my),rgba(234,88,12,0.14),transparent_45%)] after:rounded-[inherit] after:opacity-0 after:[transition:opacity_0.4s_ease] after:pointer-events-none hover:after:opacity-100 bento-card flex items-start gap-3 rounded-xl p-4 text-[0.875rem]"
                  >
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-accent/15 to-accent-2/15 text-accent-2">
                      <Check size={12} strokeWidth={3} />
                    </span>
                    <span className="leading-snug">
                      <span className="font-semibold text-foreground">{item.title}</span>
                      <span className="text-muted"> – {item.description}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>

        <section className="relative bg-background py-20">
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <Reveal className="mx-auto max-w-2xl text-center">
              <h2 className="tracking-tight">
                Explore other services
              </h2>
            </Reveal>

            <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-3">
              {otherServices.map((other, i) => (
                <Reveal key={other.slug} delay={i * 90} className="h-full">
                  <a
                    href={`/services/${other.slug}`}
                    className="relative flex overflow-hidden gap-2 flex-col bg-[linear-gradient(180deg,rgba(255,255,255,0.8),rgba(255,255,255,0.6))] border border-border backdrop-blur-[6px] [--mx:50%] [--my:50%] [&>*]:relative [&>*]:z-1 after:absolute after:-inset-0.25 after:z-0 after:content-[''] after:bg-[radial-gradient(480px_circle_at_var(--mx)_var(--my),rgba(234,88,12,0.14),transparent_45%)] after:rounded-[inherit] after:opacity-0 after:[transition:opacity_0.4s_ease] after:pointer-events-none hover:after:opacity-100 max-tablet:gap-[0.4rem] max-md:gap-[0.35rem] max-mobile:gap-[0.3rem] bento-card group h-full rounded-2xl p-6 transition-colors hover:border-accent/40"
                  >
                    <span className="text-xs font-medium tracking-wider text-muted">
                      {other.number}
                    </span>
                    <h3 className="text-foreground">
                      {other.title}
                    </h3>
                    <p className="text-[0.875rem]">
                      {other.summary}
                    </p>
                    <div className="mt-auto flex items-center gap-1.5 pt-5 text-sm font-medium text-accent-2">
                      Learn more
                      <ArrowRight
                        size={15}
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </div>
                  </a>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <CTASection />
      </div>

      <Footer />
    </div>
  );
}
