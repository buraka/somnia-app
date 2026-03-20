"use client";

import Link from "next/link";
import { APP_STORE_URL, SUPPORT_EMAIL } from "@/lib/constants";
import { useLocale } from "@/lib/LocaleContext";

export default function Footer() {
  const { t } = useLocale();

  return (
    <footer className="border-t border-white/5 bg-void">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          {/* Brand */}
          <div className="flex flex-col gap-3">
            <span className="font-[family-name:var(--font-display)] text-lg font-semibold text-soft-white">
              Somnia
            </span>
            <p className="text-sm text-moonlight/40 max-w-xs">
              {t.footer.tagline}
            </p>
          </div>

          {/* Links */}
          <div className="flex gap-16">
            <div className="flex flex-col gap-3">
              <span className="text-xs font-medium text-moonlight/40 uppercase tracking-wider">
                {t.footer.app}
              </span>
              <a
                href={APP_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-moonlight/60 hover:text-soft-white transition-colors"
              >
                {t.footer.download}
              </a>
              <a
                href="#features"
                className="text-sm text-moonlight/60 hover:text-soft-white transition-colors"
              >
                {t.footer.features}
              </a>
            </div>
            <div className="flex flex-col gap-3">
              <span className="text-xs font-medium text-moonlight/40 uppercase tracking-wider">
                {t.footer.legal}
              </span>
              <Link
                href="/privacy-policy"
                className="text-sm text-moonlight/60 hover:text-soft-white transition-colors"
              >
                {t.footer.privacyPolicy}
              </Link>
              <Link
                href="/terms"
                className="text-sm text-moonlight/60 hover:text-soft-white transition-colors"
              >
                {t.footer.terms}
              </Link>
              <Link
                href="/support"
                className="text-sm text-moonlight/60 hover:text-soft-white transition-colors"
              >
                {t.footer.support}
              </Link>
            </div>
            <div className="flex flex-col gap-3">
              <span className="text-xs font-medium text-moonlight/40 uppercase tracking-wider">
                {t.footer.contact}
              </span>
              <a
                href={`mailto:${SUPPORT_EMAIL}`}
                className="text-sm text-moonlight/60 hover:text-soft-white transition-colors"
              >
                {t.footer.sendEmail}
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/5 text-center text-xs text-moonlight/30">
          © {new Date().getFullYear()} Somnia. {t.footer.rights}
        </div>
      </div>
    </footer>
  );
}
