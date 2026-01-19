// English legal pages translations
export const legal = {
  terms: {
    title: "Terms & Conditions",
    content: "Terms and conditions content coming soon.",
  },
  cookies: {
    title: "Cookie Policy",
    content: "Cookie policy content coming soon.",
  },
  privacy: {
    title: "Privacy Policy",
    content: "Privacy policy content coming soon.",
  },
} as const;

export type LegalContent = typeof legal;
