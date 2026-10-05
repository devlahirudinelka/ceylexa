import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";

import Navbar from "@/components/home/Navbar";
import Footer from "@/components/home/Footer";
import CTASection from "@/components/home/CTASection";
import CreamGradientBackground from "@/components/home/CreamGradientBackground";
import Reveal from "@/components/ui/Reveal";
import NewsCard from "@/components/NewsCard";
import { NEWS, getNewsBySlug, getOtherNews } from "@/lib/news";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return NEWS.map((n) => ({ slug: n.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = getNewsBySlug(slug);
  if (!item) return { title: "News — Ceylexa" };
  return { title: `${item.title} — Ceylexa`, description: item.paragraphs[0] };
}

export default async function NewsItemPage({ params }: Props) {
  const { slug } = await params;
  const item = getNewsBySlug(slug);
  if (!item) notFound();
  const more = getOtherNews(slug).slice(0, 3);

  return (
    <div className="overflow-clip">
      <Navbar />

      <main className="bg-background">
        <section className="relative overflow-hidden pt-28 pb-10 sm:pt-36">
          <CreamGradientBackground />
          <div className="relative mx-auto container px-6 lg:px-8">
            <Reveal>
              <Link
                href="/news"
                className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-foreground"
              >
                <ArrowLeft size={15} /> All news
              </Link>
            </Reveal>
            <Reveal delay={60}>
              <span className="mt-8 inline-block rounded-full border border-border bg-white/70 px-3 py-1 text-xs font-medium text-foreground">
                {item.category}
              </span>
              <h1 className="mt-4 max-w-4xl tracking-tight text-foreground">{item.title}</h1>
            </Reveal>
          </div>
        </section>

        <section className="mx-auto container px-6 pb-16 lg:px-8">
          <Reveal>
            <article className="max-w-3xl space-y-5">
              {item.paragraphs.map((paragraph) => (
                <p key={paragraph} className="text-[17px]">
                  {paragraph}
                </p>
              ))}
              <blockquote className="rounded-2xl border-accent-2 bg-surface-2/70 font-medium text-foreground">
                {item.tagline}
              </blockquote>
            </article>
          </Reveal>
        </section>

        <section className="mx-auto container px-6 pb-20 lg:px-8">
          <h2 className="text-left">More news</h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {more.map((n) => (
              <NewsCard key={n.slug} item={n} />
            ))}
          </div>
        </section>

        <CTASection />
      </main>

      <Footer />
    </div>
  );
}
