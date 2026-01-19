// French common translations
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
    battlecorpHref: "https://battlecorp.com/fr/",
  },

  footer: {
    home: "Accueil",
    wiki: "Wiki",
    whitepaper: "Whitepaper",
    terms: "Conditions Générales",
    cookies: "Politique de Cookies",
    privacy: "Politique de Confidentialité",
    copyright: "© 2025 Battlecorp. Tous droits réservés.",
    headings: {
      nav: "Navigation",
      legal: "Légal",
      social: "Suivez-nous",
    },
  },
  language: {
    switch: "Changer de langue",
    fr: "FR",
    en: "EN",
  },
  modal: {
    comingSoon: "Bientôt disponible",
    comingSoonMessage: "Cette fonctionnalité sera disponible prochainement. Restez connecté !",
    close: "Fermer",
  },
  notFound: {
    title: "Page introuvable",
    message: "La page que vous recherchez n'existe pas ou a été déplacée.",
    backHome: "Retour à l'accueil",
  },
  social: {
    facebook: "Facebook",
    discord: "Discord",
  },
} as const;

export type CommonContent = typeof common;
