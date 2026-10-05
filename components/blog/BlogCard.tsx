import Image from "next/image";
import Link from "next/link";
import type { BlogPost } from "@/lib/blog";

export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link href={post.href} className="flex gap-2 flex-col max-tablet:gap-[0.4rem] max-md:gap-[0.35rem] max-mobile:gap-[0.3rem] group">
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
      <h3 className="line-clamp-2 text-foreground transition-colors group-hover:text-accent-2">
        {post.title}
      </h3>
      <p className="line-clamp-2 text-[0.875rem]">{post.excerpt}</p>
    </Link>
  );
}
