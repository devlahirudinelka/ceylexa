import type { Metadata } from "next";

import Navbar from "@/components/home/Navbar";
import Footer from "@/components/home/Footer";
import CTASection from "@/components/home/CTASection";
import { Eyebrow, GoldWord } from "@/components/ui/brand";
import Reveal from "@/components/ui/Reveal";
import BlogCard from "@/components/blog/BlogCard";
import { BLOG_POSTS } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog & Articles — Ceylexa",
  description:
    "Ideas, stories and creative insight on digital marketing, short-form video, website design and brand growth from the Ceylexa team.",
};

export default function BlogPage() {
  const [featured, ...rest] = BLOG_POSTS;

  return (
    <div className="overflow-clip">
      <Navbar />

      <main>
        <section className="relative overflow-hidden">
          <div aria-hidden className="pointer-events-none absolute inset-x-0 top-24 -z-1 select-none text-center text-[20rem] font-bold leading-[0.9em] text-cultured max-tablet:text-[10rem] max-md:text-[7rem] max-mobile:text-[4.5rem]">
            BLOG
          </div>
          <div className="mx-auto container px-6 lg:px-8 pb-14 pt-40 max-md:pt-32">
            <Reveal>
              <div className="flex items-end justify-between gap-8 max-md:flex-col max-md:items-start">
                <div>
                  <Eyebrow>Blog &amp; articles</Eyebrow>
                  <h1 className="mt-5 font-sans text-[5.5rem] font-semibold leading-[1.02em] tracking-tight max-tablet:text-[4.25rem] max-md:text-[3.25rem] max-mobile:text-[2.5rem]">
                    Ideas, Stories &amp; <GoldWord>Creative Insight</GoldWord>
                  </h1>
                </div>
                <div className="flex items-baseline gap-3">
                  <span className="text-[3.75rem] font-medium leading-none text-black max-md:text-[2.5rem]">{String(BLOG_POSTS.length).padStart(2, "0")}</span>
                  <span className="font-sans text-[0.875rem] text-dim-gray">articles</span>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="mx-auto container px-6 lg:px-8 pb-28 max-md:pb-18">
          {featured && (
            <Reveal className="border-t border-light-transparent-black pt-12">
              <BlogCard post={featured} featured />
            </Reveal>
          )}
          <div className="mt-16 grid gap-x-6 gap-y-14 border-t border-light-transparent-black pt-12 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((post, i) => (
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
