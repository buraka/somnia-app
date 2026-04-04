"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { APP_STORE_URL } from "@/lib/constants";
import { useLocale } from "@/lib/LocaleContext";

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
      <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden pt-20">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <img
            src="/morpheo-app/backgrounds/hero.png"
            alt=""
            className="section-bg"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />
        </div>

        {/* Content */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="relative z-10 text-center px-6 max-w-5xl mx-auto"
        >
          <motion.h1
            variants={fadeUp}
            className="font-[family-name:var(--font-display)] text-6xl md:text-8xl font-bold leading-tight serif-glow"
          >
            {t.hero.title1}
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-6 text-xl md:text-2xl text-on-surface-variant font-light max-w-2xl mx-auto leading-relaxed"
          >
            {t.hero.subtitle}
          </motion.p>

          {/* CTAs */}
          <motion.div variants={fadeUp} className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="glass px-8 py-4 rounded-xl flex items-center gap-3 hover:bg-white/10 transition-all duration-300"
            >
              <AppleIcon />
              <div className="text-left">
                <p className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold">
                  {t.hero.appStoreLabel}
                </p>
                <p className="text-lg font-bold text-on-surface">App Store</p>
              </div>
            </a>
            <button
              onClick={() => setVideoOpen(true)}
              className="glass px-8 py-4 rounded-xl flex items-center gap-2 hover:bg-white/10 transition-all duration-300 text-on-surface"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-primary">
                <path d="M8 5v14l11-7z" />
              </svg>
              {t.hero.cta2}
            </button>
          </motion.div>

          <motion.p variants={fadeUp} className="mt-4 text-sm text-text-muted">
            {t.hero.badge}
          </motion.p>
        </motion.div>

        {/* Phone mockup */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="relative z-10 mt-12 max-w-[280px] mx-auto"
          style={{ animation: "float 6s ease-in-out infinite" }}
        >
          <div className="absolute -inset-8 rounded-[3rem] bg-gradient-to-b from-primary/15 to-secondary/10 blur-2xl" />
          <div className="relative rounded-[2.5rem] border border-white/10 bg-surface-container-low p-2 shadow-2xl overflow-hidden">
            <div className="absolute top-3 left-1/2 -translate-x-1/2 z-10 h-[22px] w-[90px] rounded-full bg-black" />
            <img
              src="/morpheo-app/screenshots/recording.png"
              alt="Morpheo Voice Recording"
              className="w-full rounded-[2rem] object-cover"
              loading="eager"
            />
          </div>
        </motion.div>
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
              {/* Close button */}
              <button
                onClick={() => setVideoOpen(false)}
                className="absolute -top-12 right-0 w-8 h-8 rounded-full glass flex items-center justify-center text-white/60 hover:text-white transition-colors z-10"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M6 6l12 12M6 18L18 6" />
                </svg>
              </button>

              {/* Phone frame */}
              <div className="relative">
                <div className="absolute -inset-4 rounded-[3rem] bg-primary/10 blur-2xl" />
                <div className="relative rounded-[2.5rem] border border-white/10 bg-background p-2 shadow-2xl overflow-hidden">
                  {/* Dynamic Island */}
                  <div className="absolute top-3 left-1/2 -translate-x-1/2 z-10 h-[22px] w-[90px] rounded-full bg-black" />
                  <video
                    src={t.hero.videoSrc}
                    autoPlay
                    playsInline
                    muted
                    loop
                    className="w-full rounded-[2rem] object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function AppleIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 18 18" fill="currentColor" className="text-primary">
      <path d="M14.94 13.38c-.34.78-.5 1.13-.94 1.82-.61.97-1.47 2.17-2.54 2.18-1.19.02-1.5-.77-3.11-.76-1.61.01-1.95.78-3.14.76-1.07-.01-1.88-1.08-2.49-2.05C1.22 12.87.67 9.7 1.9 7.57c.87-1.5 2.24-2.38 3.5-2.38 1.3 0 2.12.78 3.19.78 1.04 0 1.68-.78 3.18-.78 1.12 0 2.33.61 3.19 1.66-2.8 1.54-2.35 5.54.48 6.61l-.5-.08zM11.15 3.5c.5-.64.88-1.54.74-2.5-.82.06-1.78.58-2.34 1.26-.5.62-.92 1.53-.76 2.42.9.03 1.83-.5 2.36-1.18z" />
    </svg>
  );
}
