"use client";

import { motion } from "framer-motion";

const phones = [
  { src: "/morpheo-app/screenshots/recording.png", alt: "Voice recording a dream with waveform visualization" },
  { src: "/morpheo-app/screenshots/journal-list.png", alt: "Dream Journal list showing recent dreams" },
  { src: "/morpheo-app/screenshots/ai-analysis.png", alt: "AI Analysis with symbols and emotion breakdown" },
  { src: "/morpheo-app/screenshots/patterns.png", alt: "Dream statistics and pattern detection" },
  { src: "/morpheo-app/screenshots/map.png", alt: "Dream map showing connections between dreams" },
];

export default function PhoneShowcase() {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex items-center justify-center gap-4 md:gap-6" style={{ perspective: "1200px" }}>
          {phones.map((phone, i) => {
            const center = 2;
            const dist = Math.abs(i - center);
            const isCenter = i === center;
            const scale = isCenter ? 1 : dist === 1 ? 0.88 : 0.78;
            const rotateY = i < center ? `${dist * 5}deg` : i > center ? `${-dist * 5}deg` : "0deg";
            const opacity = isCenter ? 1 : dist === 1 ? 0.8 : 0.6;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                className={isCenter ? "z-10" : dist === 1 ? "hidden sm:block" : "hidden lg:block"}
                style={{
                  transform: `rotateY(${rotateY}) scale(${scale})`,
                  opacity,
                }}
              >
                <div className="relative w-[220px] md:w-[240px]">
                  {/* Glow */}
                  <div className="absolute -inset-4 rounded-[3rem] bg-gradient-to-b from-purple/15 to-transparent blur-2xl" />

                  {/* Phone frame */}
                  <div className="relative rounded-[2.5rem] border border-white/10 bg-deep p-2 shadow-2xl overflow-hidden">
                    {/* Dynamic Island */}
                    <div className="absolute top-3 left-1/2 -translate-x-1/2 z-10 h-[22px] w-[90px] rounded-full bg-black" />

                    {/* Screenshot */}
                    <img
                      src={phone.src}
                      alt={phone.alt}
                      className="w-full rounded-[2rem] object-cover"
                      loading={isCenter ? "eager" : "lazy"}
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
