import Image from "next/image";
import Link from "next/link";
import type { NewsItem } from "@/lib/news";

export default function NewsCard({ item }: { item: NewsItem }) {
  return (
    <Link
      href={`/news/${item.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-[linear-gradient(180deg,rgba(255,255,255,0.8),rgba(255,255,255,0.6))] transition-transform duration-300 hover:-translate-y-1"
    >
      {/* Featured image */}
      <div className="relative aspect-[16/9] w-full overflow-hidden bg-black/5">
        {item.image ? (
          <Image
            src={item.image}
            alt={item.title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-[#f3efe4]">
            <span className="font-sans text-sm text-black/50">
              Ceylexa News &amp; Events
            </span>
          </div>
        )}
      </div>

      {/* Card content */}
      <div className="flex flex-1 flex-col p-6 md:p-8">
        <span className="w-fit rounded-full border border-border bg-white/70 px-3 py-1 text-xs font-medium text-foreground">
          {item.category}
        </span>

        <h3 className="mt-5 text-foreground transition-colors duration-300 group-hover:text-[#b49a43]">
          {item.title}
        </h3>

        <p className="mt-3 line-clamp-3 text-[0.875rem]">
          {item.paragraphs[0]}
        </p>

        <span className="mt-auto flex items-center gap-2 pt-6 text-sm font-semibold text-[#d7ba5e] underline-offset-4 group-hover:underline">
          Read more
          <span
            aria-hidden="true"
            className="inline-block transition-transform duration-300 group-hover:translate-x-1"
          >
            →
          </span>
        </span>
      </div>
    </Link>
  );
}
