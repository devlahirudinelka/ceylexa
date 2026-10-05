import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Navbar from "@/components/home/Navbar";
import Footer from "@/components/home/Footer";
import CTASection from "@/components/home/CTASection";
import { ArrowButton, Eyebrow, GoldWord, H2_CLASS } from "@/components/ui/brand";
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
        <section className="relative overflow-hidden">
          <div aria-hidden className="pointer-events-none absolute -right-4 top-20 -z-1 select-none text-[24rem] font-bold leading-[0.9em] text-cultured max-tablet:text-[14rem] max-md:text-[9rem]">
            {service.number}
          </div>
          <div className="mx-auto container px-6 lg:px-8 pb-20 pt-40 max-md:pb-14 max-md:pt-32">
            <Reveal>
              <Link
                href="/services"
                className="inline-flex items-center gap-1.5 font-sans text-[0.875rem] text-dim-gray transition-colors hover:text-[#d7ba5e]"
              >
                <ArrowLeft size={14} />
                All services
              </Link>

              <div className="mt-8 grid gap-10 lg:grid-cols-12 lg:items-end">
                <div className="lg:col-span-7">
                  <Eyebrow>Service {service.number}</Eyebrow>
                  <h1 className="mt-5 font-sans text-[5.5rem] font-semibold leading-[1.02em] tracking-tight max-tablet:text-[4.25rem] max-md:text-[3.25rem] max-mobile:text-[2.5rem]">{service.title}</h1>
                </div>
                <div className="flex flex-col gap-4 lg:col-span-5">
                  <p className="mb-0 font-sans text-[1.125rem] leading-[1.6em] text-black">{service.description}</p>
                  {service.extra && (
                    <p className="mb-0 font-sans text-[1rem] leading-[1.6em] text-dim-gray">{service.extra}</p>
                  )}
                  <div className="mt-2 flex flex-wrap gap-3">
                    <ArrowButton href="/contact">Start a Project</ArrowButton>
                    <ArrowButton href="/services#packages" variant="light">
                      View all packages
                    </ArrowButton>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="relative bg-ghost-white py-24 max-md:py-16">
          <div className="mx-auto container px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
              <Reveal className="lg:col-span-4 lg:sticky lg:top-28 lg:self-start">
                <div>
                  <Eyebrow>Scope</Eyebrow>
                  <h2 className={`mt-4 ${H2_CLASS}`}>What&apos;s <GoldWord>included</GoldWord></h2>
                  <p className="mt-4 max-w-xs text-[0.9375rem] leading-relaxed text-dim-gray">
                    Everything that comes with {service.title}, from the first
                    conversation to the final delivery.
                  </p>
                  <div className="mt-8 flex items-baseline gap-2">
                    <span className="text-[3.5rem] font-medium leading-none text-black">
                      {String(service.items.length).padStart(2, "0")}
                    </span>
                    <span className="text-[0.875rem] text-dim-gray">deliverables</span>
                  </div>
                </div>
              </Reveal>

              <Reveal className="lg:col-span-8">
                <ul className="border-t border-light-transparent-black">
                  {service.items.map((item, i) => (
                    <li
                      key={item.title}
                      className="group relative grid grid-cols-[auto_1fr_auto] items-start gap-x-6 border-b border-light-transparent-black py-7 transition-[padding] duration-500 hover:pl-3 max-md:gap-x-4 max-md:py-5"
                    >
                      <span className="absolute inset-x-0 bottom-[-1px] h-px origin-left scale-x-0 bg-[#d7ba5e] transition-transform duration-500 group-hover:scale-x-100" />
                      <span className="pt-1 text-[0.8125rem] font-medium tabular-nums text-dim-gray transition-colors duration-300 group-hover:text-[#d7ba5e]">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <h3 className="text-[1.375rem] font-medium leading-tight text-black max-md:text-[1.125rem]">
                          {item.title}
                        </h3>
                        <p className="mt-2 max-w-xl text-[0.9375rem] leading-relaxed text-dim-gray">
                          {item.description}
                        </p>
                      </div>
                      <span className="mt-1 flex h-9 w-9 items-center justify-center rounded-full border border-light-transparent-black text-black transition-all duration-500 group-hover:rotate-45 group-hover:border-[#d7ba5e] group-hover:bg-[#d7ba5e] group-hover:text-white max-md:hidden">
                        <ArrowUpRight size={15} />
                      </span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="relative">
          <div className="mx-auto container px-6 lg:px-8 py-24 max-md:py-16">
            <Reveal>
              <div className="flex items-end justify-between gap-6 max-md:flex-col max-md:items-start">
                <div>
                  <Eyebrow>More</Eyebrow>
                  <h2 className={`mt-4 ${H2_CLASS}`}>
                    Explore other <GoldWord>services</GoldWord>
                  </h2>
                </div>
                <ArrowButton href="/services" variant="outline">
                  All services
                </ArrowButton>
              </div>
            </Reveal>

            <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3">
              {otherServices.map((other, i) => (
                <Reveal key={other.slug} delay={i * 90} className="h-full">
                  <a
                    href={`/services/${other.slug}`}
                    className="group relative flex h-full flex-col overflow-hidden rounded-[1.875rem] border border-light-transparent-black bg-white p-8 transition-[border-color,box-shadow] duration-300 hover:border-[#d7ba5e] hover:shadow-[0_30px_60px_-35px_rgba(0,0,0,0.35)] max-md:p-6 max-mobile:rounded-2xl"
                  >
                    <span aria-hidden className="absolute -right-2 -top-5 select-none text-[8rem] font-medium leading-none tracking-tighter text-black/[0.05] transition-colors duration-300 group-hover:text-[#d7ba5e]/20">
                      {other.number}
                    </span>
                    <span className="relative text-[0.8125rem] font-medium tabular-nums text-[#d7ba5e]">{other.number}</span>
                    <h3 className="relative mt-4 font-sans text-[1.75rem] font-medium leading-[1.2em] text-black max-md:text-[1.375rem]">{other.title}</h3>
                    <p className="relative mb-0 mt-3 font-sans text-[0.9375rem] leading-[1.6em] text-dim-gray">{other.summary}</p>
                    <span className="relative mt-auto flex h-10 w-10 items-center justify-center self-end rounded-full bg-black text-white transition-all duration-500 group-hover:rotate-45 group-hover:bg-[#d7ba5e] group-hover:text-black">
                      <ArrowUpRight size={16} />
                    </span>
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
