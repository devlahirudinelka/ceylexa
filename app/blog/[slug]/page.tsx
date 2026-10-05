import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Mail, Phone } from "lucide-react";

import Navbar from "@/components/home/Navbar";
import Footer from "@/components/home/Footer";
import { ArrowButton, Eyebrow, GoldWord, H2_CLASS, Sparkle } from "@/components/ui/brand";
import Reveal from "@/components/ui/Reveal";
import TableOfContents from "@/components/blog/TableOfContents";
import BlogCard from "@/components/blog/BlogCard";
import { CEYLEXA_SOCIALS, OFFICES } from "@/lib/site";
import {
  BLOG_POSTS,
  getOtherPosts,
  getPostBySlug,
  slugifyHeading,
  type Block,
} from "@/lib/blog";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Blog — Ceylexa" };
  return { title: `${post.title} — Ceylexa`, description: post.excerpt };
}

function renderBlock(block: Block, key: number) {
  switch (block.type) {
    case "h2":
      return (
        <h2
          key={key}
          id={slugifyHeading(block.text)}
          className="mt-12 scroll-mt-28 font-sans text-[2.25rem] font-medium leading-[1.15em] tracking-tight text-black first:mt-0 max-md:text-[1.75rem]"
        >
          {block.text}
        </h2>
      );
    case "h3":
      return (
        <h3 key={key} className="mt-8 font-sans text-[1.5rem] font-medium leading-[1.2em] text-black max-md:text-[1.25rem]">
          {block.text}
        </h3>
      );
    case "ul":
      return (
        <ul key={key} className="mt-5 flex flex-col gap-3">
          {block.items.map((item) => (
            <li key={item} className="flex items-start gap-3 font-sans text-[1.0625rem] leading-[1.6em] text-dim-gray">
              <Sparkle className="mt-2 w-3.5 shrink-0 text-[#d7ba5e]" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      );
    case "flow":
      return (
        <div key={key} className="mt-6 rounded-2xl bg-black px-6 py-5 font-sans text-[1rem] font-medium leading-[1.5em] text-white">
          {block.text}
        </div>
      );
    case "quote":
      return (
        <blockquote key={key} className="mt-8 border-l-2 border-[#d7ba5e] pl-6 font-sans text-[1.5rem] font-medium italic leading-[1.35em] text-black max-md:text-[1.25rem]">
          {block.text}
        </blockquote>
      );
    default:
      return (
        <p key={key} className="mb-0 mt-5 font-sans text-[1.0625rem] leading-[1.7em] text-black">
          {block.text}
        </p>
      );
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const toc = post.blocks
    .filter((b): b is Extract<Block, { type: "h2" }> => b.type === "h2")
    .map((b) => ({ id: slugifyHeading(b.text), label: b.text }));
  const more = getOtherPosts(slug);
  const sri = OFFICES[1];

  return (
    <div className="overflow-clip">
      <Navbar />

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="mx-auto container px-6 lg:px-8 pb-14 pt-40 max-md:pt-32">
            <Reveal>
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 font-sans text-[0.875rem] text-dim-gray transition-colors hover:text-[#d7ba5e]"
              >
                <ArrowLeft size={15} /> All articles
              </Link>
            </Reveal>

            <div className="mt-8 grid items-end gap-10 lg:grid-cols-12">
              <Reveal delay={60} className="lg:col-span-7">
                <Eyebrow>
                  {post.category} / {post.readingTime}
                </Eyebrow>
                <h1 className="mt-5 font-sans text-[4rem] font-semibold leading-[1.05em] tracking-tight max-tablet:text-[3.25rem] max-md:text-[2.5rem] max-mobile:text-[2rem]">
                  {post.title}
                </h1>
                <p className="mb-0 mt-6 max-w-xl font-sans text-[1.125rem] leading-[1.6em] text-black">{post.excerpt}</p>
              </Reveal>

              <Reveal delay={140} className="lg:col-span-5">
                <div className="relative aspect-[16/11] w-full overflow-hidden rounded-[1.875rem] bg-ghost-white max-mobile:rounded-2xl">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    priority
                    sizes="(min-width: 1024px) 600px, 100vw"
                    className="object-cover"
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Body with sticky TOC */}
        <section className="mx-auto container px-6 lg:px-8 pb-28 max-md:pb-18">
          <div className="grid gap-12 border-t border-light-transparent-black pt-14 lg:grid-cols-[260px_minmax(0,1fr)] lg:gap-16">
            <aside>
              <div className="sticky top-28">
                <TableOfContents items={toc} />
              </div>
            </aside>

            <article className="mx-auto w-full max-w-3xl">
              {post.blocks.map(renderBlock)}

              {/* Author box */}
              <div className="mt-16 flex flex-col gap-6 rounded-[1.875rem] bg-ghost-white p-8 sm:flex-row sm:items-center max-md:p-6 max-mobile:rounded-2xl">
                <Image
                  src="/images/favicon.png"
                  alt="Ceylexa Digital"
                  width={72}
                  height={72}
                  className="h-[72px] w-[72px] shrink-0 rounded-2xl bg-white object-contain p-3"
                />
                <div className="flex-1">
                  <Eyebrow>Written by</Eyebrow>
                  <div className="mt-1 font-sans text-[1.5rem] font-medium leading-[1.2em] text-black">Team Ceylexa</div>
                  <p className="mb-0 mt-2 font-sans text-[0.9375rem] leading-[1.6em] text-dim-gray">
                    Ceylexa Digital brings strategy, branding, content, web
                    design, paid media and influencer marketing together to help
                    brands grow online.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {CEYLEXA_SOCIALS.slice(0, 4).map((s) => (
                      <a
                        key={s.label}
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full border border-light-transparent-black px-4 py-1.5 text-[0.75rem] leading-[1.5em] text-dim-gray transition-colors duration-300 hover:border-[#d7ba5e] hover:text-[#d7ba5e]"
                      >
                        {s.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          </div>
        </section>

        {/* Latest blogs */}
        <section className="mx-auto container px-6 lg:px-8 pb-28 max-md:pb-18">
          <div className="flex items-end justify-between gap-6 border-t border-light-transparent-black pt-14 max-md:flex-col max-md:items-start">
            <div>
              <Eyebrow>More</Eyebrow>
              <h2 className={`mt-4 ${H2_CLASS}`}>
                Read our <GoldWord>Latest Blogs</GoldWord>
              </h2>
            </div>
            <ArrowButton href="/blog" variant="outline">
              View all
            </ArrowButton>
          </div>
          <div className="mt-12 grid gap-x-6 gap-y-12 sm:grid-cols-2">
            {more.map((item) => (
              <BlogCard key={item.slug} post={item} />
            ))}
          </div>
        </section>

        {/* Contact / CTA */}
        <section className="mx-auto container px-6 lg:px-8 pb-24 max-md:pb-16">
          <div className="relative grid gap-10 overflow-hidden rounded-[1.875rem] bg-black p-14 text-white lg:grid-cols-12 lg:items-end max-md:p-7 max-mobile:rounded-2xl">
            <div className="lg:col-span-8">
              <div className="flex items-center gap-1 font-sans text-[0.875rem] uppercase leading-[1.5em]">
                <span className="text-[#d7ba5e]">{"//"}</span>
                <span className="text-white/70">Let&apos;s talk</span>
              </div>
              <h2 className={`mt-4 text-white ${H2_CLASS}`}>
                Ready to turn attention into <GoldWord>growth?</GoldWord>
              </h2>
              <p className="mb-0 mt-6 max-w-md font-sans text-[1rem] leading-[1.6em] text-white/70">
                Tell us about your brand and we&rsquo;ll show you how strategy,
                creativity and technology can work together for you.
              </p>
              <ArrowButton href="/contact" className="mt-8">
                Book a Consultation
              </ArrowButton>
            </div>
            <div className="flex flex-col gap-3 font-sans text-[0.9375rem] lg:col-span-4 lg:items-end">
              <a href="mailto:hello@ceylexa.com" className="inline-flex items-center gap-2 text-white/80 transition-colors hover:text-[#d7ba5e]">
                <Mail size={15} /> hello@ceylexa.com
              </a>
              <a href={sri.phoneHref} className="inline-flex items-center gap-2 text-white/80 transition-colors hover:text-[#d7ba5e]">
                <Phone size={15} /> {sri.phone}
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
