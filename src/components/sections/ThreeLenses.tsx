"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";
import { useLocale } from "@/lib/LocaleContext";

const LENS_STYLES = [
  { color: "text-primary", glow: "hover:shadow-[0_0_40px_rgba(78,205,196,0.15)]", bg: "bg-primary/20" },
  { color: "text-secondary", glow: "hover:shadow-[0_0_40px_rgba(123,104,174,0.15)]", bg: "bg-secondary/20" },
  { color: "text-tertiary", glow: "hover:shadow-[0_0_40px_rgba(201,168,76,0.15)]", bg: "bg-tertiary/20" },
];

const ICONS = ["🧠", "🪞", "✨"];

export default function ThreeLenses() {
  const { t } = useLocale();

  return (
    <section className="relative min-h-screen py-24 flex flex-col justify-center items-center overflow-hidden" id="analysis">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="/morpheo-app/backgrounds/lenses.png"
          alt=""
          className="section-bg opacity-30"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-8">
        <ScrollReveal>
          <h2 className="font-[family-name:var(--font-display)] text-5xl md:text-6xl text-center mb-20 serif-glow">
            {t.lenses.title}
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.lenses.items.map((lens, i) => (
            <ScrollReveal key={i} delay={i * 0.15}>
              <div className={`glass p-10 rounded-[1.5rem] ${LENS_STYLES[i].glow} transition-all duration-500 group`}>
                <div className={`w-16 h-16 rounded-full ${LENS_STYLES[i].bg} flex items-center justify-center mb-8`}>
                  <span className="text-3xl">{ICONS[i]}</span>
                </div>
                <h3 className={`font-[family-name:var(--font-display)] text-2xl mb-4 ${LENS_STYLES[i].color}`}>
                  {lens.title}
                </h3>
                <p className="text-on-surface-variant leading-relaxed">
                  {lens.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
