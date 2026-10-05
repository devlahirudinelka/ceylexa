import type { MetadataRoute } from "next";
import { PROJECTS } from "@/lib/projects";
import { BLOG_POSTS } from "@/lib/blog";
import { NEWS } from "@/lib/news";
import { SERVICES } from "@/lib/services-data";

const BASE = "https://www.ceylexa.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/services", "/project", "/about", "/clients", "/blog", "/news", "/careers", "/contact"];
  return [
    ...staticRoutes.map((path) => ({ url: `${BASE}${path}` })),
    ...SERVICES.map((s) => ({ url: `${BASE}/services/${s.slug}` })),
    ...PROJECTS.map((p) => ({ url: `${BASE}${p.href}` })),
    ...NEWS.map((n) => ({ url: `${BASE}/news/${n.slug}` })),
    ...BLOG_POSTS.map((b) => ({ url: `${BASE}${b.href}` })),
  ];
}
