import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { BlogPost } from "@/lib/blog";

export default function BlogCard({ post, featured = false }: { post: BlogPost; featured?: boolean }) {
  return (
    <Link
      href={post.href}
      className={`group ${featured ? "grid items-center gap-8 lg:grid-cols-12 lg:gap-12" : "flex flex-col"}`}
    >
      <div
        className={`relative w-full overflow-hidden rounded-[1.875rem] bg-ghost-white max-mobile:rounded-2xl ${
          featured ? "aspect-[16/10] lg:col-span-7" : "aspect-[4/3]"
        }`}
      >
        <Image
          src={post.image}
          alt={post.title}
          fill
          sizes={featured ? "(min-width: 1024px) 58vw, 100vw" : "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"}
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <span className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-[#d7ba5e] text-black opacity-0 transition-all duration-500 group-hover:rotate-45 group-hover:opacity-100">
          <ArrowUpRight size={17} />
        </span>
      </div>
      <div className={featured ? "lg:col-span-5" : "mt-5"}>
        <div className="flex items-center gap-3 font-sans text-[0.8125rem] uppercase leading-[1.5em] text-dim-gray">
          <span className="text-[#d7ba5e]">{"//"}</span>
          <span>{post.category}</span>
          <span className="opacity-50">/</span>
          <span>{post.readingTime}</span>
        </div>
        <h3
          className={`mt-3 font-sans font-medium tracking-tight text-black transition-colors duration-300 group-hover:text-[#d7ba5e] ${
            featured
              ? "text-[2.75rem] leading-[1.1em] max-tablet:text-[2.25rem] max-md:text-[1.75rem]"
              : "line-clamp-2 text-[1.5rem] leading-[1.2em] max-md:text-[1.25rem]"
          }`}
        >
          {post.title}
        </h3>
        <p className={`mb-0 mt-3 font-sans text-[0.9375rem] leading-[1.6em] text-dim-gray ${featured ? "max-w-md" : "line-clamp-2"}`}>
          {post.excerpt}
        </p>
        {featured && (
          <span className="mt-6 inline-flex items-center gap-1.5 border-b border-black pb-0.5 font-sans text-[0.9375rem] font-medium text-black transition-colors group-hover:border-[#d7ba5e] group-hover:text-[#d7ba5e]">
            Read article <ArrowUpRight size={15} />
          </span>
        )}
      </div>
    </Link>
  );
}
