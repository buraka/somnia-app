"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";
import { useLocale } from "@/lib/LocaleContext";

export default function VoiceCapture() {
  const { t } = useLocale();

  return (
    <section className="relative min-h-screen py-24 flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="/morpheo-app/backgrounds/voice.png"
          alt=""
          className="section-bg opacity-20"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-background/80" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Text */}
        <ScrollReveal>
          <h2 className="font-[family-name:var(--font-display)] text-5xl md:text-6xl mb-8 serif-glow leading-tight">
            {t.voice.title}
          </h2>
          <p className="text-xl text-on-surface-variant mb-12 max-w-lg leading-relaxed">
            {t.voice.description}
          </p>
          <div className="flex flex-wrap gap-3">
            {t.voice.pills.map((pill, i) => (
              <span
                key={i}
                className="px-5 py-2 rounded-full bg-surface-bright text-tertiary font-[family-name:var(--font-body)] text-xs uppercase tracking-widest font-bold"
              >
                {pill}
              </span>
            ))}
          </div>
        </ScrollReveal>

        {/* Visual - Mic + Waveform */}
        <ScrollReveal delay={0.2}>
          <div className="relative">
            <div className="absolute -inset-10 bg-primary/10 blur-[100px] rounded-full" />
            <div className="glass aspect-[3/4] rounded-[2.5rem] p-4 relative overflow-hidden flex flex-col justify-center items-center">
              {/* Mic button */}
              <div className="w-24 h-24 rounded-full bg-primary flex items-center justify-center bio-glow mb-8 cursor-pointer hover:scale-110 transition-transform"
                   style={{ animation: "pulse-dot 3s ease-in-out infinite" }}>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#002825" strokeWidth="2" strokeLinecap="round">
                  <rect x="9" y="1" width="6" height="11" rx="3" />
                  <path d="M5 10a7 7 0 0 0 14 0" />
                  <line x1="12" y1="17" x2="12" y2="21" />
                  <line x1="8" y1="21" x2="16" y2="21" />
                </svg>
              </div>

              {/* Waveform bars */}
              <div className="flex gap-1 h-12 items-center">
                {[4, 10, 8, 12, 6, 10, 4, 8, 10, 6].map((h, i) => (
                  <div
                    key={i}
                    className="w-1 bg-primary rounded-full"
                    style={{
                      animation: `waveform ${0.8 + i * 0.1}s ease-in-out infinite`,
                      animationDelay: `${i * 0.1}s`,
                      height: `${h * 4}px`,
                    }}
                  />
                ))}
              </div>

              <p className="mt-8 text-xs uppercase tracking-[0.2em] text-text-muted">
                {t.voice.capturing}
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
