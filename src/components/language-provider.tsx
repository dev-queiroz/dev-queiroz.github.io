"use client";

import { Language } from "@/types/projects";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

interface LanguageContextValue {
  language: Language;
  setLanguage: (language: Language) => void;
}

const STORAGE_KEY = "douglas-portfolio-language";

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    if (typeof window === "undefined") {
      return "en";
    }

    const saved = window.localStorage.getItem(STORAGE_KEY);

    if (saved === "pt" || saved === "en") {
      return saved;
    }

    return window.navigator.language.toLowerCase().startsWith("pt") ? "pt" : "en";
  });

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, language);
  }, [language]);

  const value = useMemo(
    () => ({
      language,
      setLanguage,
    }),
    [language],
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function usePortfolioLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("usePortfolioLanguage must be used within LanguageProvider");
  }

  return context;
}
