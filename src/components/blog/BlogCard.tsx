"use client";

import Link from "next/link";
import { useLocale } from "@/lib/LocaleContext";
import type { BlogPost } from "@/lib/blog/types";

const categoryColors = {
  "dream-meaning": "text-purple-light border-purple/30",
  guide: "text-teal border-teal/30",
  psychology: "text-cyan border-cyan/30",
};

export default function BlogCard({ post }: { post: BlogPost }) {
  const { locale, t } = useLocale();
  const localized = post.content[locale];
  const categoryLabel =
    post.category === "dream-meaning"
      ? t.blog.dreamMeaning
      : post.category === "guide"
      ? t.blog.guide
      : t.blog.psychology;

  return (
    <Link href={`/blog/${post.slug}`}>
      <article className="group h-full rounded-2xl border border-white/5 bg-card/50 p-6 transition-all duration-300 hover:border-purple/30 hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(123,94,167,0.1)]">
        <div className="flex items-center gap-3 mb-4">
          <span
            className={`text-[10px] font-medium uppercase tracking-wider border rounded-full px-2.5 py-0.5 ${categoryColors[post.category]}`}
          >
            {categoryLabel}
          </span>
          <span className="text-xs text-moonlight/30">
            {new Date(post.publishedAt).toLocaleDateString(locale, {
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
          </span>
        </div>
        <h2 className="text-lg font-semibold text-soft-white mb-2 group-hover:text-purple-light transition-colors">
          {localized.title}
        </h2>
        <p className="text-sm text-moonlight/40 leading-relaxed line-clamp-3">
          {localized.description}
        </p>
        <span className="inline-block mt-4 text-sm text-purple-light opacity-0 group-hover:opacity-100 transition-opacity">
          {t.blog.readMore} →
        </span>
      </article>
    </Link>
  );
}
