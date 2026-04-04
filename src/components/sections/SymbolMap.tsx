"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";
import { useLocale } from "@/lib/LocaleContext";

export default function SymbolMap() {
  const { t } = useLocale();

  return (
    <section className="relative min-h-[80vh] py-32 flex flex-col justify-center items-center text-center overflow-hidden" id="dreamscapes">
      {/* Background - constellation image is the hero here */}
      <div className="absolute inset-0 z-0">
        <img
          src="/morpheo-app/backgrounds/symbolmap.png"
          alt=""
          className="section-bg opacity-50 scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-background/60" />
      </div>

      <div className="relative z-10 max-w-4xl px-8">
        <ScrollReveal>
          <h2 className="font-[family-name:var(--font-display)] text-5xl md:text-7xl mb-8 serif-glow">
            {t.symbolMap.title}
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.15}>
          <p className="text-xl md:text-2xl text-on-surface-variant font-light mb-12 leading-relaxed">
            {t.symbolMap.description}
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
