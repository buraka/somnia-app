import type { MetadataRoute } from "next";
import { blogPosts } from "@/lib/blog/posts";

export const dynamic = "force-static";

const BASE = "https://buraka.github.io/morpheo-app";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: `${BASE}/`, changeFrequency: "monthly", priority: 1 },
    { url: `${BASE}/blog/`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE}/privacy-policy/`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE}/terms/`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE}/support/`, changeFrequency: "yearly", priority: 0.3 },
  ];

  const blogPages: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${BASE}/blog/${post.slug}/`,
    lastModified: post.updatedAt || post.publishedAt,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticPages, ...blogPages];
}
