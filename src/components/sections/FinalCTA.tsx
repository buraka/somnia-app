"use client";

import { useState } from "react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { APP_STORE_URL } from "@/lib/constants";
import { useLocale } from "@/lib/LocaleContext";

export default function FinalCTA() {
  const { t } = useLocale();
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const form = e.currentTarget;
    const data = new FormData(form);
    await fetch("https://formspree.io/f/xyknlvoa", {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    });
    setLoading(false);
    setSubmitted(true);
  }

  return (
    <section id="download" className="py-28 relative">
      {/* Radial glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[400px] bg-purple/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-2xl px-6 text-center">
        <ScrollReveal>
          <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-5xl font-semibold leading-tight">
            {t.cta.title1}{" "}
            <span className="italic text-lavender">{t.cta.title2}</span>
          </h2>
          <p className="mt-6 text-moonlight/40 text-lg">
            {t.cta.subtitle}
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* App Store button */}
            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-xl bg-white text-void px-6 py-3.5 font-medium transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(255,255,255,0.15)]"
            >
              <svg width="22" height="22" viewBox="0 0 18 18" fill="currentColor">
                <path d="M14.94 13.38c-.34.78-.5 1.13-.94 1.82-.61.97-1.47 2.17-2.54 2.18-1.19.02-1.5-.77-3.11-.76-1.61.01-1.95.78-3.14.76-1.07-.01-1.88-1.08-2.49-2.05C1.22 12.87.67 9.7 1.9 7.57c.87-1.5 2.24-2.38 3.5-2.38 1.3 0 2.12.78 3.19.78 1.04 0 1.68-.78 3.18-.78 1.12 0 2.33.61 3.19 1.66-2.8 1.54-2.35 5.54.48 6.61l-.5-.08zM11.15 3.5c.5-.64.88-1.54.74-2.5-.82.06-1.78.58-2.34 1.26-.5.62-.92 1.53-.76 2.42.9.03 1.83-.5 2.36-1.18z" />
              </svg>
              <div className="text-left">
                <p className="text-[10px] leading-none opacity-60">{t.cta.appStore}</p>
                <p className="text-sm font-semibold leading-tight">{t.cta.appStoreName}</p>
              </div>
            </a>

            {/* Apple Watch badge */}
            <div className="inline-flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-6 py-3.5 text-soft-white">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="6" y="2" width="12" height="20" rx="4" />
                <rect x="8" y="6" width="8" height="12" rx="2" />
              </svg>
              <div className="text-left">
                <p className="text-[10px] leading-none text-moonlight/40">{t.cta.watchLabel}</p>
                <p className="text-sm font-medium leading-tight">{t.cta.watchName}</p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Android Waitlist */}
        <ScrollReveal delay={0.3}>
          <div className="mt-16 rounded-2xl border border-white/5 bg-card/50 p-8 max-w-md mx-auto">
            <div className="flex items-center justify-center gap-2 mb-3">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="#2dd4bf">
                <path d="M6 18c0 .55.45 1 1 1h1v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h2v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h1c.55 0 1-.45 1-1V8H6v10zM3.5 8C2.67 8 2 8.67 2 9.5v7c0 .83.67 1.5 1.5 1.5S5 17.33 5 16.5v-7C5 8.67 4.33 8 3.5 8zm17 0c-.83 0-1.5.67-1.5 1.5v7c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-7c0-.83-.67-1.5-1.5-1.5zm-4.97-5.84l1.3-1.3c.2-.2.2-.51 0-.71-.2-.2-.51-.2-.71 0l-1.48 1.48A5.84 5.84 0 0012 1c-.96 0-1.86.23-2.66.63L7.85.15c-.2-.2-.51-.2-.71 0-.2.2-.2.51 0 .71l1.31 1.31A5.983 5.983 0 006 7h12c0-2.12-1.1-3.98-2.77-5.04zM10 5H9V4h1v1zm5 0h-1V4h1v1z" />
              </svg>
              <p className="text-sm font-medium text-teal">{t.cta.androidTitle}</p>
            </div>
            <p className="text-xs text-moonlight/40 mb-4">
              {t.cta.androidSubtitle}
            </p>
            {submitted ? (
              <p className="text-sm text-teal py-2">
                {t.cta.androidSuccess}
              </p>
            ) : (
              <form onSubmit={handleSubmit} className="flex gap-2">
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="your@email.com"
                  className="flex-1 rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-soft-white placeholder:text-moonlight/30 outline-none focus:border-purple/40 transition-colors"
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="rounded-lg bg-teal/90 px-5 py-2.5 text-sm font-medium text-void hover:bg-teal transition-colors disabled:opacity-50"
                >
                  {loading ? "..." : t.cta.androidButton}
                </button>
              </form>
            )}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
