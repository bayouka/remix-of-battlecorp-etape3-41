// English common translations
export const common = {
  nav: {
    whitepaper: "Whitepaper",
    wiki: "Wiki",
    support: "Soutien",
    login: "Connexion",
    register: "Inscription",
    whitepaperHref: "https://battlecorp.gitbook.io/whitepaper/",
    wikiHref: "https://battlecorp.fandom.com/fr/wiki/Home",
    supportHref: "https://buymeacoffee.com/badmarinesstudio",
    battlecorpHref: "https://battlecorp.com/en/",
  },

  footer: {
    home: "Home",
    wiki: "Wiki",
    whitepaper: "Whitepaper",
    terms: "Terms & Conditions",
    cookies: "Cookie Policy",
    privacy: "Privacy Policy",
    copyright: "© 2025 Battlecorp. All rights reserved.",
    headings: {
      nav: "Navigation",
      legal: "Legal",
      social: "Follow Us",
    },
  },
  language: {
    switch: "Switch language",
    fr: "FR",
    en: "EN",
  },
  modal: {
    comingSoon: "Coming Soon",
    comingSoonMessage: "This feature will be available soon. Stay tuned!",
    close: "Close",
  },
  notFound: {
    title: "Page Not Found",
    message: "The page you are looking for does not exist or has been moved.",
    backHome: "Back to Home",
  },
  social: {
    facebook: "Facebook",
    discord: "Discord",
  },
} as const;

export type CommonContent = typeof common;
