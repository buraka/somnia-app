import { LocaleProvider } from "@/lib/LocaleContext";
import { blogPosts, getPostBySlug, getAllSlugs } from "@/lib/blog/posts";
import BlogContent from "@/components/blog/BlogContent";
import Link from "next/link";
import type { Metadata } from "next";

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Not Found" };

  const en = post.content.en;
  return {
    title: `${en.title} | Morpheo Blog`,
    description: en.description,
    openGraph: {
      title: en.title,
      description: en.description,
      type: "article",
      publishedTime: post.publishedAt,
    },
    other: {
      "script:ld+json": JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Article",
        headline: en.title,
        description: en.description,
        datePublished: post.publishedAt,
        ...(post.updatedAt && { dateModified: post.updatedAt }),
        author: { "@type": "Organization", name: "Morpheo" },
        publisher: { "@type": "Organization", name: "Morpheo" },
      }),
    },
  };
}

function BlogPostNav({ slug }: { slug: string }) {
  return (
    <div className="min-h-screen bg-void text-soft-white">
      <div className="mx-auto max-w-3xl px-6 py-20">
        <div className="flex items-center gap-3 mb-12">
          <Link
            href="/"
            className="text-sm text-moonlight/40 hover:text-soft-white transition-colors"
          >
            Morpheo
          </Link>
          <span className="text-moonlight/20">/</span>
          <Link
            href="/blog"
            className="text-sm text-moonlight/40 hover:text-soft-white transition-colors"
          >
            Blog
          </Link>
        </div>

        <BlogPostClient slug={slug} />
      </div>
    </div>
  );
}

function BlogPostClient({ slug }: { slug: string }) {
  "use client";
  const post = getPostBySlug(slug);
  if (!post) return <p className="text-moonlight/40">Post not found.</p>;
  return <BlogContent post={post} />;
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return (
    <LocaleProvider>
      <BlogPostNav slug={slug} />
    </LocaleProvider>
  );
}
