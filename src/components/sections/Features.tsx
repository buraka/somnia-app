"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";
import { useLocale } from "@/lib/LocaleContext";

const SIZES = ["wide", "normal", "small", "small", "small"] as const;

export default function Features() {
  const { t } = useLocale();

  return (
    <section id="features" className="py-28">
      <div className="mx-auto max-w-6xl px-6">
        <ScrollReveal>
          <p className="text-xs font-medium text-purple-light uppercase tracking-widest mb-3">
            {t.features.label}
          </p>
          <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-5xl font-semibold max-w-lg">
            {t.features.title}
          </h2>
        </ScrollReveal>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-6 gap-4">
          {t.features.items.map((f, i) => {
            const size = SIZES[i] ?? "small";
            const span =
              size === "wide"
                ? "md:col-span-4"
                : "md:col-span-2";

            return (
              <ScrollReveal key={i} delay={i * 0.08} className={span}>
                <div className="group relative h-full rounded-2xl border border-white/5 bg-card/50 p-6 md:p-8 overflow-hidden transition-all duration-300 hover:border-purple/30 hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(123,94,167,0.1)]">
                  {/* Hover gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />

                  <div className="relative">
                    <span className="text-3xl mb-4 block">{f.icon}</span>
                    <h3 className="text-lg font-semibold text-soft-white mb-2">
                      {f.title}
                    </h3>
                    <p className="text-sm text-moonlight/40 leading-relaxed">
                      {f.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
