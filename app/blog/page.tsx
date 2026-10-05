import type { Metadata } from "next";

import Navbar from "@/components/home/Navbar";
import Footer from "@/components/home/Footer";
import CTASection from "@/components/home/CTASection";
import CreamGradientBackground from "@/components/home/CreamGradientBackground";
import Reveal from "@/components/ui/Reveal";
import BlogCard from "@/components/blog/BlogCard";
import { BLOG_POSTS } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog & Articles — Ceylexa",
  description:
    "Ideas, stories and creative insight on digital marketing, short-form video, website design and brand growth from the Ceylexa team.",
};

export default function BlogPage() {
  return (
    <div className="overflow-clip">
      <Navbar />

      <main className="bg-background">
        <section className="relative overflow-hidden bg-background pt-32 pb-16 sm:pt-40 sm:pb-20">
          <CreamGradientBackground />
          <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
            <Reveal>
              <span className="font-mono text-sm text-accent-2">{"// "}</span>
              <span className="text-sm font-medium text-muted">Blog &amp; articles</span>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="tracking-tight text-foreground">
                Ideas, Stories &amp; <span className="text-transparent bg-[linear-gradient(90deg,#92400e_0%,#b45309_45%,#ea580c_100%)] bg-clip-text">Creative Insight</span>
              </h1>
            </Reveal>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-20 lg:px-8 sm:pb-28">
          <div className="grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
            {BLOG_POSTS.map((post, i) => (
              <Reveal key={post.slug} delay={(i % 3) * 80}>
                <BlogCard post={post} />
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
