"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";
import { useLocale } from "@/lib/LocaleContext";

const ICONS = ["📅", "🔔", "⌚", "📤", "🔲", "☁️"];

export default function Features() {
  const { t } = useLocale();

  return (
    <section id="features" className="relative min-h-screen py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="/morpheo-app/backgrounds/features.png"
          alt=""
          className="section-bg opacity-10"
          loading="lazy"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8">
        <ScrollReveal>
          <h2 className="font-[family-name:var(--font-display)] text-5xl text-center mb-24 serif-glow">
            {t.features.title}
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.features.items.map((feature, i) => (
            <ScrollReveal key={i} delay={i * 0.08}>
              <div className="glass p-8 rounded-[1.5rem] group hover:bg-white/[0.08] transition-all duration-300">
                <span className="text-3xl mb-6 block">{ICONS[i]}</span>
                <h4 className="font-[family-name:var(--font-display)] text-lg mb-2 text-on-surface">
                  {feature.title}
                </h4>
                <p className="text-on-surface-variant text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
