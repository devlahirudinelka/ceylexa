import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ArrowUpRight, Mail, Phone } from "lucide-react";

import Navbar from "@/components/home/Navbar";
import Footer from "@/components/home/Footer";
import CreamGradientBackground from "@/components/home/CreamGradientBackground";
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
          className="scroll-mt-28 tracking-tight text-foreground"
        >
          {block.text}
        </h2>
      );
    case "h3":
      return (
        <h3 key={key} className="tracking-tight text-foreground">
          {block.text}
        </h3>
      );
    case "ul":
      return (
        <ul key={key} className="space-y-2.5 text-[17px] leading-relaxed text-foreground/80">
          {block.items.map((item) => (
            <li key={item} className="flex gap-3">
              <span className="mt-[11px] h-1.5 w-1.5 shrink-0 rounded-full bg-accent-2" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      );
    case "flow":
      return (
        <div
          key={key}
          className="mt-5 rounded-2xl border border-border bg-surface-2/70 px-5 py-4 text-[15px] font-semibold text-foreground sm:text-base"
        >
          {block.text}
        </div>
      );
    case "quote":
      return (
        <blockquote
          key={key}
          className="rounded-2xl border-accent-2 bg-surface-2/70 font-medium text-foreground"
        >
          {block.text}
        </blockquote>
      );
    default:
      return (
        <p key={key} className="text-[17px]">
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

      <main className="bg-background">
        {/* Hero */}
        <section className="relative overflow-hidden pt-28 pb-10 sm:pt-36">
          <CreamGradientBackground />
          <div className="relative mx-auto container px-6 lg:px-8">
            <Reveal>
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-foreground"
              >
                <ArrowLeft size={15} /> All articles
              </Link>
            </Reveal>

            <div className="mt-8 grid items-end gap-10 lg:grid-cols-2">
              <Reveal delay={60}>
                <div className="flex flex-wrap items-center gap-3 text-sm">
                  <span className="rounded-full border border-border bg-white/70 px-3 py-1 text-xs font-medium text-foreground">
                    {post.category}
                  </span>
                  <span className="text-muted">{post.readingTime}</span>
                </div>
                <h1 className="tracking-tight text-foreground">{post.title}</h1>
                <p className="max-w-xl text-[1rem] sm:text-[1.125rem]">
                  {post.excerpt}
                </p>
              </Reveal>

              <Reveal delay={140}>
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-3xl border border-border shadow-[0_30px_80px_-40px_rgba(36,26,12,0.4)]">
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
        <section className="mx-auto container px-6 py-14 lg:px-8 sm:py-20">
          <div className="grid gap-12 lg:grid-cols-[260px_minmax(0,1fr)] lg:gap-16">
            <aside className="">
              <div className="sticky top-28">
                <TableOfContents items={toc} />
              </div>
            </aside>

            <article className="mx-auto w-full max-w-3xl">
              {post.blocks.map(renderBlock)}

              {/* Author box */}
              <div className="mt-16 flex flex-col gap-5 rounded-3xl border border-border bg-surface-2/60 p-6 sm:flex-row sm:items-center sm:p-8">
                <Image
                  src="/images/favicon.png"
                  alt="Ceylexa Digital"
                  width={72}
                  height={72}
                  className="h-[72px] w-[72px] shrink-0 rounded-2xl bg-white object-contain p-3"
                />
                <div className="flex-1">
                  <div className="text-lg font-semibold text-foreground">
                    Team Ceylexa
                  </div>
                  <p className="text-[0.875rem]">
                    Ceylexa Digital brings strategy, branding, content, web
                    design, paid media and influencer marketing together to help
                    brands grow online.
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {CEYLEXA_SOCIALS.slice(0, 4).map((s) => (
                      <a
                        key={s.label}
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full px-3 py-1 text-xs font-medium text-foreground hover:text-accent-2"
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
        <section className="border-t border-border py-16 sm:py-24">
          <div className="mx-auto container px-6 lg:px-8">
            <div className="flex items-end justify-between gap-6">
              <h2 className="tracking-tight text-foreground">
                Read our Latest Blogs
              </h2>
              <Link
                href="/blog"
                className="hidden items-center gap-1.5 text-sm font-medium text-muted hover:text-foreground sm:inline-flex"
              >
                View all <ArrowRight size={15} />
              </Link>
            </div>
            <div className="mt-10 grid gap-8 sm:grid-cols-2">
              {more.map((item) => (
                <BlogCard key={item.slug} post={item} />
              ))}
            </div>
          </div>
        </section>

        {/* Contact / CTA */}
        <section className="px-6 pb-20 lg:px-8">
          <div className="mx-auto grid  container gap-8 overflow-hidden rounded-[2rem] bg-[#111] p-8 text-white sm:p-12 lg:grid-cols-2">
            <div>
              <h2 className="tracking-tight">
                Ready to turn attention into growth?
              </h2>
              <p className="max-w-md">
                Tell us about your brand and we&rsquo;ll show you how strategy,
                creativity and technology can work together for you.
              </p>
              <Link
                href="/contact"
                className="mt-8 inline-flex items-center gap-3 rounded-full py-2 pr-6 pl-2 text-sm font-medium text-black transition-transform hover:-translate-y-0.5"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-white">
                  <ArrowUpRight size={18} />
                </span>
                Book a Consultation
              </Link>
            </div>
            <div className="flex flex-col justify-end gap-4 text-sm lg:items-end">
              <a
                href="mailto:hello@ceylexa.com"
                className="inline-flex items-center gap-2 text-white/80 hover:text-white"
              >
                <Mail size={15} /> hello@ceylexa.com
              </a>
              <a
                href={sri.phoneHref}
                className="inline-flex items-center gap-2 text-white/80 hover:text-white"
              >
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
