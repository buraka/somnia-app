"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { APP_STORE_URL } from "@/lib/constants";
import { useLocale } from "@/lib/LocaleContext";
import type { Locale } from "@/lib/i18n";
import Button from "@/components/ui/Button";

const LOCALES: { code: Locale; label: string }[] = [
  { code: "en", label: "English" },
  { code: "tr", label: "Türkçe" },
  { code: "es", label: "Español" },
];

function LangDropdown({ locale, setLocale }: { locale: Locale; setLocale: (l: Locale) => void }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 text-xs font-medium text-moonlight/50 hover:text-soft-white border border-white/10 rounded-full px-3 py-1.5 transition-colors"
      >
        {locale.toUpperCase()}
        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.5" className={`transition-transform ${open ? "rotate-180" : ""}`}>
          <path d="M2.5 3.75L5 6.25L7.5 3.75" />
        </svg>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.15 }}
            className="absolute right-0 top-full mt-2 min-w-[120px] rounded-xl border border-white/10 bg-deep/95 backdrop-blur-xl shadow-xl overflow-hidden z-50"
          >
            {LOCALES.map((l) => (
              <button
                key={l.code}
                onClick={() => { setLocale(l.code); setOpen(false); }}
                className={`w-full text-left px-4 py-2.5 text-sm transition-colors ${
                  locale === l.code
                    ? "text-soft-white bg-white/5"
                    : "text-moonlight/50 hover:text-soft-white hover:bg-white/5"
                }`}
              >
                {l.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { locale, setLocale, t } = useLocale();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: t.nav.features, href: "#features" },
    { label: t.nav.howItWorks, href: "#how-it-works" },
    { label: t.nav.download, href: "#download" },
  ];

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-void/80 backdrop-blur-xl border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <img
            src="/morpheo-app/logo.png"
            alt="Morpheo logo"
            width={32}
            height={32}
            className="rounded-lg group-hover:scale-110 transition-transform"
          />
          <span className="font-[family-name:var(--font-display)] text-lg font-semibold text-soft-white">
            Morpheo
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-moonlight/60 hover:text-soft-white transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop right */}
        <div className="hidden md:flex items-center gap-3">
          <LangDropdown locale={locale} setLocale={setLocale} />
          <Button href={APP_STORE_URL} external variant="primary">
            {t.nav.getApp}
          </Button>
        </div>

        {/* Mobile hamburger */}
        <div className="flex md:hidden items-center gap-2">
          <LangDropdown locale={locale} setLocale={setLocale} />
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 text-soft-white"
            aria-label="Toggle menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              {menuOpen ? (
                <path d="M6 6l12 12M6 18L18 6" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-void/95 backdrop-blur-xl border-b border-white/5 overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-moonlight/60 hover:text-soft-white transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <Button href={APP_STORE_URL} external variant="primary">
                {t.nav.getApp}
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
