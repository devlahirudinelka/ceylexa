import type { Metadata } from "next";

import Navbar from "@/components/home/Navbar";
import Footer from "@/components/home/Footer";
import CTASection from "@/components/home/CTASection";
import CreamGradientBackground from "@/components/home/CreamGradientBackground";
import Reveal from "@/components/ui/Reveal";
import NewsCard from "@/components/NewsCard";
import { NEWS } from "@/lib/news";

export const metadata: Metadata = {
  title: "News & Events — Ceylexa",
  description:
    "Latest news, awards, partnerships and milestones from Ceylexa Digital.",
};

export default function NewsPage() {
  return (
    <div className="overflow-clip">
      <Navbar />

      <main className="bg-background">
        <section className="relative overflow-hidden bg-background pt-32 pb-16 sm:pt-40 sm:pb-20">
          <CreamGradientBackground />
          <div className="relative mx-auto container px-6 lg:px-8">
            <Reveal>
              <span className="font-mono text-sm text-accent-2">{"// "}</span>
              <span className="text-sm font-medium text-muted">News &amp; events</span>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="tracking-tight text-foreground">Latest News &amp; Events</h1>
            </Reveal>
            <Reveal delay={140}>
              <p className="mt-4 max-w-2xl">
                Stay connected with the Ceylexa journey — awards, partnerships and
                milestones from our team across Sri Lanka, New Zealand and beyond.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="mx-auto container px-6 pb-20 lg:px-8 sm:pb-28">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {NEWS.map((item, i) => (
              <Reveal key={item.slug} delay={(i % 3) * 80}>
                <NewsCard item={item} />
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
