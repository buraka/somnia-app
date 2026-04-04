"use client";

import Link from "next/link";
import { APP_STORE_URL, SUPPORT_EMAIL } from "@/lib/constants";
import { useLocale } from "@/lib/LocaleContext";

export default function Footer() {
  const { t } = useLocale();

  return (
    <footer className="bg-background w-full py-12 px-8 border-t border-white/5">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8 max-w-7xl mx-auto">
        <div className="flex flex-col gap-2">
          <div className="font-[family-name:var(--font-display)] text-lg text-on-surface">
            Morpheo
          </div>
          <p className="text-xs uppercase tracking-[0.1em] text-on-surface-variant">
            © {new Date().getFullYear()} Morpheo. {t.footer.rights}
          </p>
        </div>

        <div className="flex flex-wrap gap-8 justify-center">
          <a
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs uppercase tracking-[0.1em] text-on-surface-variant hover:text-on-surface transition-colors"
          >
            {t.footer.download}
          </a>
          <Link
            href="/privacy-policy"
            className="text-xs uppercase tracking-[0.1em] text-on-surface-variant hover:text-on-surface transition-colors"
          >
            {t.footer.privacyPolicy}
          </Link>
          <Link
            href="/terms"
            className="text-xs uppercase tracking-[0.1em] text-on-surface-variant hover:text-on-surface transition-colors"
          >
            {t.footer.terms}
          </Link>
          <Link
            href="/support"
            className="text-xs uppercase tracking-[0.1em] text-on-surface-variant hover:text-on-surface transition-colors"
          >
            {t.footer.support}
          </Link>
          <a
            href={`mailto:${SUPPORT_EMAIL}`}
            className="text-xs uppercase tracking-[0.1em] text-on-surface-variant hover:text-on-surface transition-colors"
          >
            {t.footer.contact}
          </a>
        </div>

        <p className="text-[10px] uppercase tracking-[0.15em] text-on-surface-variant/50">
          Made by Burak Alparslan
        </p>
      </div>
    </footer>
  );
}
