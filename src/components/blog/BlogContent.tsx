"use client";

import { useLocale } from "@/lib/LocaleContext";
import { APP_STORE_URL } from "@/lib/constants";
import type { BlogPost } from "@/lib/blog/types";

export default function BlogContent({ post }: { post: BlogPost }) {
  const { locale, t } = useLocale();
  const localized = post.content[locale];

  return (
    <article>
      {/* Header */}
      <header className="mb-10">
        <p className="text-xs text-purple-light uppercase tracking-widest mb-3">
          {post.category === "dream-meaning"
            ? t.blog.dreamMeaning
            : post.category === "guide"
            ? t.blog.guide
            : t.blog.psychology}
        </p>
        <h1 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-semibold text-soft-white leading-tight">
          {localized.title}
        </h1>
        <p className="mt-4 text-moonlight/40 text-sm">
          {new Date(post.publishedAt).toLocaleDateString(locale, {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
      </header>

      {/* Body */}
      <div className="space-y-6">
        {localized.body.map((block, i) => {
          switch (block.type) {
            case "h2":
              return (
                <h2
                  key={i}
                  className="font-[family-name:var(--font-display)] text-2xl font-semibold text-soft-white mt-10 mb-4"
                >
                  {block.text}
                </h2>
              );
            case "h3":
              return (
                <h3
                  key={i}
                  className="text-lg font-semibold text-soft-white mt-6 mb-2"
                >
                  {block.text}
                </h3>
              );
            case "p":
              return (
                <p
                  key={i}
                  className="text-moonlight/60 leading-relaxed"
                >
                  {block.text}
                </p>
              );
            case "ul":
              return (
                <ul key={i} className="space-y-2 ml-4">
                  {block.items.map((item, j) => (
                    <li
                      key={j}
                      className="text-moonlight/60 leading-relaxed flex gap-2"
                    >
                      <span className="text-purple-light mt-1.5 shrink-0">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              );
            case "cta":
              return (
                <div
                  key={i}
                  className="mt-12 rounded-2xl border border-purple/20 bg-purple/5 p-8 text-center"
                >
                  <h3 className="text-xl font-semibold text-soft-white mb-2">
                    {t.blog.ctaTitle}
                  </h3>
                  <p className="text-sm text-moonlight/50 mb-6 max-w-md mx-auto">
                    {t.blog.ctaText}
                  </p>
                  <a
                    href={APP_STORE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-purple px-6 py-3 text-sm font-medium text-white hover:bg-purple-light transition-colors"
                  >
                    <svg width="16" height="16" viewBox="0 0 18 18" fill="currentColor">
                      <path d="M14.94 13.38c-.34.78-.5 1.13-.94 1.82-.61.97-1.47 2.17-2.54 2.18-1.19.02-1.5-.77-3.11-.76-1.61.01-1.95.78-3.14.76-1.07-.01-1.88-1.08-2.49-2.05C1.22 12.87.67 9.7 1.9 7.57c.87-1.5 2.24-2.38 3.5-2.38 1.3 0 2.12.78 3.19.78 1.04 0 1.68-.78 3.18-.78 1.12 0 2.33.61 3.19 1.66-2.8 1.54-2.35 5.54.48 6.61l-.5-.08zM11.15 3.5c.5-.64.88-1.54.74-2.5-.82.06-1.78.58-2.34 1.26-.5.62-.92 1.53-.76 2.42.9.03 1.83-.5 2.36-1.18z" />
                    </svg>
                    {t.blog.ctaButton}
                  </a>
                </div>
              );
          }
        })}
      </div>
    </article>
  );
}
