// French legal pages translations
export const legal = {
  terms: {
    title: "Conditions Générales d'Utilisation",
    content: "Contenu des conditions générales à venir.",
  },
  cookies: {
    title: "Politique de Cookies",
    content: "Contenu de la politique de cookies à venir.",
  },
  privacy: {
    title: "Politique de Confidentialité",
    content: "Contenu de la politique de confidentialité à venir.",
  },
} as const;

export type LegalContent = typeof legal;
