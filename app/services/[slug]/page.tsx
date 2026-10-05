import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
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

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
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

          <div className="mx-auto container px-6 lg:px-8">
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

              <h1 className="tracking-tight">{service.title}</h1>
              <p className=" text-[1.125rem]">{service.description}</p>
              {service.extra && (
                <p className=" text-[1.125rem]">{service.extra}</p>
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

        <section className="relative bg-surface-2 py-24 max-md:py-16">
          <div className="mx-auto container px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
              <Reveal className="lg:col-span-4 lg:sticky lg:top-28 lg:self-start">
                <div>
                  <span className="text-[0.75rem] font-semibold uppercase tracking-[0.2em] text-accent-2">
                    {"// "}Scope
                  </span>
                  <h2 className="mt-3 tracking-tight">What&apos;s included</h2>
                  <p className="mt-4 max-w-xs text-[0.9375rem] leading-relaxed text-muted">
                    Everything that comes with {service.title}, from the first
                    conversation to the final delivery.
                  </p>
                  <div className="mt-8 flex items-baseline gap-2">
                    <span className="text-[3.5rem] font-medium leading-none text-foreground">
                      {String(service.items.length).padStart(2, "0")}
                    </span>
                    <span className="text-[0.875rem] text-muted">deliverables</span>
                  </div>
                </div>
              </Reveal>

              <Reveal className="lg:col-span-8">
                <ul className="border-t border-border">
                  {service.items.map((item, i) => (
                    <li
                      key={item.title}
                      className="group relative grid grid-cols-[auto_1fr_auto] items-start gap-x-6 border-b border-border py-7 transition-[padding] duration-500 hover:pl-3 max-md:gap-x-4 max-md:py-5"
                    >
                      <span className="absolute inset-x-0 bottom-[-1px] h-px origin-left scale-x-0 bg-accent-2 transition-transform duration-500 group-hover:scale-x-100" />
                      <span className="pt-1 text-[0.8125rem] font-medium tabular-nums text-muted transition-colors duration-300 group-hover:text-accent-2">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <h3 className="text-[1.375rem] font-medium leading-tight text-foreground max-md:text-[1.125rem]">
                          {item.title}
                        </h3>
                        <p className="mt-2 max-w-xl text-[0.9375rem] leading-relaxed text-muted">
                          {item.description}
                        </p>
                      </div>
                      <span className="mt-1 flex h-9 w-9 items-center justify-center rounded-full border border-border text-foreground transition-all duration-500 group-hover:rotate-45 group-hover:border-accent-2 group-hover:bg-accent-2 group-hover:text-white max-md:hidden">
                        <ArrowUpRight size={15} />
                      </span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="relative bg-background py-20">
          <div className="mx-auto  container px-6 lg:px-8">
            <Reveal className="mx-auto max-w-2xl text-center">
              <h2 className="tracking-tight">Explore other services</h2>
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
                    <h3 className="text-foreground">{other.title}</h3>
                    <p className="text-[0.875rem]">{other.summary}</p>
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
