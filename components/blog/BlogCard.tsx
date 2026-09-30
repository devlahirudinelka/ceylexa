import Image from "next/image";
import Link from "next/link";
import type { BlogPost } from "@/lib/blog";

export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link href={post.href} className="group block">
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-border bg-surface-2">
        <Image
          src={post.image}
          alt={post.title}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
        />
      </div>
      <div className="mt-4 flex items-center justify-center gap-2 text-xs text-muted">
        <span>{post.category}</span>
        <span className="h-1 w-1 rounded-full bg-muted/60" />
        <span>{post.readingTime.replace(" read", "")}</span>
      </div>
      <h3 className="mt-3 line-clamp-2 text-lg font-semibold leading-snug text-foreground transition-colors group-hover:text-accent-2 sm:text-xl">
        {post.title}
      </h3>
      <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted">{post.excerpt}</p>
    </Link>
  );
}
