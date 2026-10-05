import Link from "next/link";
import type { NewsItem } from "@/lib/news";

export default function NewsCard({ item }: { item: NewsItem }) {
  return (
    <Link
      href={`/news/${item.slug}`}
      className="group flex h-full flex-col rounded-2xl border border-border bg-[linear-gradient(180deg,rgba(255,255,255,0.8),rgba(255,255,255,0.6))] p-8 transition-transform duration-300 hover:-translate-y-1"
    >
      <span className="w-fit rounded-full border border-border bg-white/70 px-3 py-1 text-xs font-medium text-foreground">
        {item.category}
      </span>
      <h3 className="mt-5 text-foreground">{item.title}</h3>
      <p className="mt-3 line-clamp-3 text-[0.875rem]">{item.paragraphs[0]}</p>
      <span className="mt-auto pt-6 text-sm font-semibold text-[#d7ba5e] underline-offset-4 group-hover:underline">Read more &rarr;</span>
    </Link>
  );
}
