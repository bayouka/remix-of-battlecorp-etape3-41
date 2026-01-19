import { createContext, useContext, useMemo, useEffect, type ReactNode } from "react";
import { useLocation } from "react-router-dom";
import { getContent, type Locale, type ContentNamespace, type ContentMap } from "@/content";

interface LocaleContextValue {
  locale: Locale;
  otherLocale: Locale;
  getLocalizedPath: (path?: string) => string;
  swapLocalePrefix: (targetLocale?: Locale) => string;
  content: <N extends ContentNamespace>(namespace: N) => ContentMap[Locale][N];
}

const LocaleContext = createContext<LocaleContextValue | null>(null);

interface LocaleProviderProps {
  children: ReactNode;
}

export function LocaleProvider({ children }: LocaleProviderProps) {
  const location = useLocation();

  // Detect locale from pathname
  const locale: Locale = location.pathname.startsWith("/en") ? "en" : "fr";
  const otherLocale: Locale = locale === "fr" ? "en" : "fr";

  // Sync document.documentElement.lang
  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const value = useMemo<LocaleContextValue>(() => ({
    locale,
    otherLocale,

    /**
     * Get a localized path for the current locale
     */
    getLocalizedPath: (path = "") => {
      const cleanPath = path.startsWith("/") ? path.slice(1) : path;
      return `/${locale}${cleanPath ? `/${cleanPath}` : ""}`;
    },

    /**
     * Swap locale in current URL, preserving path, search, and hash
     * @param targetLocale - Optional target locale (defaults to otherLocale)
     */
    swapLocalePrefix: (targetLocale?: Locale) => {
      const { pathname, search, hash } = location;
      const target = targetLocale ?? otherLocale;
      
      // Remove current locale prefix and add new one
      const pathWithoutLocale = pathname.replace(/^\/(fr|en)/, "");
      const newPath = `/${target}${pathWithoutLocale || ""}`;
      
      return `${newPath}${search}${hash}`;
    },

    /**
     * Get content for a specific namespace
     */
    content: <N extends ContentNamespace>(namespace: N) => {
      return getContent(locale, namespace);
    },
  }), [locale, otherLocale, location]);

  return (
    <LocaleContext.Provider value={value}>
      {children}
    </LocaleContext.Provider>
  );
}

/**
 * Hook to access locale context
 */
export function useLocale(): LocaleContextValue {
  const context = useContext(LocaleContext);
  
  if (!context) {
    throw new Error("useLocale must be used within a LocaleProvider");
  }
  
  return context;
}

/**
 * Hook to get content for a namespace (shorthand)
 */
export function useContent<N extends ContentNamespace>(namespace: N): ContentMap[Locale][N] {
  const { content } = useLocale();
  return content(namespace);
}
