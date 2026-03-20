"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";
import { useLocale } from "@/lib/LocaleContext";

const STEP_COLORS = ["purple", "cyan", "teal"] as const;

const colorMap = {
  purple: {
    border: "border-purple",
    text: "text-purple",
    glow: "shadow-[0_0_12px_rgba(123,94,167,0.3)]",
  },
  cyan: {
    border: "border-cyan",
    text: "text-cyan",
    glow: "shadow-[0_0_12px_rgba(34,211,238,0.3)]",
  },
  teal: {
    border: "border-teal",
    text: "text-teal",
    glow: "shadow-[0_0_12px_rgba(45,212,191,0.3)]",
  },
};

export default function HowItWorks() {
  const { t } = useLocale();

  return (
    <section id="how-it-works" className="py-28">
      <div className="mx-auto max-w-3xl px-6">
        <ScrollReveal>
          <p className="text-xs font-medium text-purple-light uppercase tracking-widest mb-3">
            {t.howItWorks.label}
          </p>
          <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-5xl font-semibold">
            {t.howItWorks.title}
          </h2>
        </ScrollReveal>

        <div className="mt-16 relative">
          {/* Timeline line */}
          <div className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-purple via-cyan to-teal opacity-20" />

          <div className="space-y-16">
            {t.howItWorks.steps.map((step, i) => {
              const colors = colorMap[STEP_COLORS[i]];
              const number = String(i + 1).padStart(2, "0");
              return (
                <ScrollReveal key={i} delay={i * 0.15}>
                  <div className="flex gap-6 items-start">
                    {/* Number badge */}
                    <div
                      className={`shrink-0 w-10 h-10 rounded-lg border ${colors.border} ${colors.glow} flex items-center justify-center`}
                    >
                      <span className={`text-sm font-semibold ${colors.text}`}>
                        {number}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-soft-white mb-2">
                        {step.title}
                      </h3>
                      <p className="text-moonlight/40 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
