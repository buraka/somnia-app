import type { Locale } from "../i18n";

export type ContentBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "cta" };

export type LocalizedPost = {
  title: string;
  description: string;
  body: ContentBlock[];
};

export type BlogPost = {
  slug: string;
  publishedAt: string;
  updatedAt?: string;
  category: "dream-meaning" | "guide" | "psychology";
  image?: string;
  content: Record<Locale, LocalizedPost>;
};
