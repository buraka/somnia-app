"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { APP_STORE_URL } from "@/lib/constants";
import { useLocale } from "@/lib/LocaleContext";
import Button from "@/components/ui/Button";

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const } },
};

export default function Hero() {
  const { t } = useLocale();
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center pt-16">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="mx-auto max-w-3xl px-6 text-center"
        >
          {/* Eyebrow badge */}
          <motion.div variants={fadeUp} className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-teal opacity-75" style={{ animation: "pulse-dot 2s ease-in-out infinite" }} />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-teal" />
            </span>
            <span className="text-xs text-moonlight/70">{t.hero.badge}</span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={fadeUp}
            className="font-[family-name:var(--font-display)] text-5xl md:text-7xl font-semibold leading-tight tracking-tight"
          >
            {t.hero.title1}{" "}
            <span className="relative">
              <span className="italic bg-gradient-to-r from-purple-light via-lavender to-cyan bg-clip-text text-transparent">
                {t.hero.title2}
              </span>
              <span
                className="absolute -inset-4 -z-10 rounded-full bg-gradient-to-r from-purple/30 to-cyan/20 opacity-60"
                style={{ animation: "glow-morph 4s ease-in-out infinite" }}
              />
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={fadeUp}
            className="mt-6 text-lg md:text-xl text-moonlight/50 max-w-xl mx-auto leading-relaxed"
          >
            {t.hero.subtitle}
          </motion.p>

          {/* CTAs */}
          <motion.div variants={fadeUp} className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href={APP_STORE_URL} external variant="primary" className="text-base px-8 py-3.5">
              <AppleIcon />
              {t.hero.cta}
            </Button>
            <button
              onClick={() => setVideoOpen(true)}
              className="inline-flex items-center gap-2 text-base px-8 py-3.5 rounded-xl border border-white/10 text-soft-white hover:bg-white/5 transition-colors"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-purple-light">
                <path d="M8 5v14l11-7z" />
              </svg>
              {t.hero.cta2}
            </button>
          </motion.div>
        </motion.div>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-void to-transparent pointer-events-none" />
      </section>

      {/* Video Modal */}
      <AnimatePresence>
        {videoOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm"
            onClick={() => setVideoOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-sm mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setVideoOpen(false)}
                className="absolute -top-10 right-0 text-white/60 hover:text-white transition-colors"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M6 6l12 12M6 18L18 6" />
                </svg>
              </button>
              <video
                src={t.hero.videoSrc}
                controls
                autoPlay
                playsInline
                className="w-full rounded-2xl shadow-2xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function AppleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="currentColor">
      <path d="M14.94 13.38c-.34.78-.5 1.13-.94 1.82-.61.97-1.47 2.17-2.54 2.18-1.19.02-1.5-.77-3.11-.76-1.61.01-1.95.78-3.14.76-1.07-.01-1.88-1.08-2.49-2.05C1.22 12.87.67 9.7 1.9 7.57c.87-1.5 2.24-2.38 3.5-2.38 1.3 0 2.12.78 3.19.78 1.04 0 1.68-.78 3.18-.78 1.12 0 2.33.61 3.19 1.66-2.8 1.54-2.35 5.54.48 6.61l-.5-.08zM11.15 3.5c.5-.64.88-1.54.74-2.5-.82.06-1.78.58-2.34 1.26-.5.62-.92 1.53-.76 2.42.9.03 1.83-.5 2.36-1.18z" />
    </svg>
  );
}
