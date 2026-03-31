import Link from "next/link";
import { ReactNode } from "react";

export default function LegalPage({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen bg-void text-soft-white">
      <nav className="border-b border-white/5 bg-void/80 backdrop-blur-xl">
        <div className="mx-auto max-w-3xl px-6 h-16 flex items-center">
          <Link
            href="/"
            className="font-[family-name:var(--font-display)] text-lg font-semibold text-soft-white hover:text-lavender transition-colors"
          >
            ← Morpheo
          </Link>
        </div>
      </nav>
      <main className="mx-auto max-w-3xl px-6 py-16">
        <h1 className="font-[family-name:var(--font-display)] text-3xl font-semibold mb-8">
          {title}
        </h1>
        <div className="prose prose-invert prose-sm max-w-none [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-soft-white [&_h2]:mt-10 [&_h2]:mb-4 [&_h3]:text-base [&_h3]:font-semibold [&_h3]:text-moonlight [&_h3]:mt-6 [&_h3]:mb-2 [&_p]:text-moonlight/60 [&_p]:leading-relaxed [&_ul]:text-moonlight/60 [&_li]:text-moonlight/60 [&_a]:text-purple-light [&_a]:underline [&_strong]:text-moonlight [&_hr]:border-white/5 [&_ol]:text-moonlight/60">
          {children}
        </div>
      </main>
    </div>
  );
}
