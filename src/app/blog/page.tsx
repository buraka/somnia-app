"use client";

import Link from "next/link";
import { LocaleProvider, useLocale } from "@/lib/LocaleContext";
import { blogPosts } from "@/lib/blog/posts";
import BlogCard from "@/components/blog/BlogCard";

function BlogListing() {
  const { t } = useLocale();

  return (
    <div className="min-h-screen bg-void text-soft-white">
      <div className="mx-auto max-w-4xl px-6 py-20">
        {/* Back nav */}
        <Link
          href="/"
          className="inline-flex items-center gap-1 text-sm text-moonlight/40 hover:text-soft-white transition-colors mb-12"
        >
          ← Morpheo
        </Link>

        {/* Header */}
        <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl font-semibold mb-3">
          {t.blog.title}
        </h1>
        <p className="text-moonlight/40 text-lg mb-12">
          {t.blog.subtitle}
        </p>

        {/* Posts grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {blogPosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function BlogPage() {
  return (
    <LocaleProvider>
      <BlogListing />
    </LocaleProvider>
  );
}
