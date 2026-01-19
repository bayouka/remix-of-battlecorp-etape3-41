// Content index - exports all content packs
import { common as commonFr } from "./fr/common";
import { common as commonEn } from "./en/common";
import { home as homeFr } from "./fr/home";
import { home as homeEn } from "./en/home";
import { legal as legalFr } from "./fr/legal";
import { legal as legalEn } from "./en/legal";

export type Locale = "fr" | "en";

export type ContentNamespace = "common" | "home" | "legal";

const content = {
  fr: {
    common: commonFr,
    home: homeFr,
    legal: legalFr,
  },
  en: {
    common: commonEn,
    home: homeEn,
    legal: legalEn,
  },
} as const;

export type ContentMap = typeof content;

/**
 * Get content for a specific locale and namespace
 */
export function getContent<
  L extends Locale,
  N extends ContentNamespace
>(locale: L, namespace: N): ContentMap[L][N] {
  return content[locale][namespace];
}

/**
 * Type-safe content getter with key path
 */
export function t<
  L extends Locale,
  N extends ContentNamespace,
  K extends keyof ContentMap[L][N]
>(locale: L, namespace: N, key: K): ContentMap[L][N][K] {
  return content[locale][namespace][key];
}

export { content };
