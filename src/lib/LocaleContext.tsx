"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { type Locale, type Translations, translations } from "./i18n";

type LocaleContextType = {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: Translations;
};

const LocaleContext = createContext<LocaleContextType>({
  locale: "en",
  setLocale: () => {},
  t: translations.en,
});

const LOCALES: Locale[] = ["en", "tr", "es"];

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");

  useEffect(() => {
    const saved = localStorage.getItem("somnia-locale") as Locale | null;
    if (saved && LOCALES.includes(saved)) {
      setLocaleState(saved);
    } else {
      const browserLang = navigator.language.toLowerCase();
      if (browserLang.startsWith("tr")) {
        setLocaleState("tr");
      } else if (browserLang.startsWith("es")) {
        setLocaleState("es");
      }
    }
  }, []);

  function setLocale(l: Locale) {
    setLocaleState(l);
    localStorage.setItem("somnia-locale", l);
  }

  return (
    <LocaleContext.Provider value={{ locale, setLocale, t: translations[locale] }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  return useContext(LocaleContext);
}
