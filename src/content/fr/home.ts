// French home page translations
export const home = {
  meta: {
    title: "Battlecorp Launchpad",
    description: "Le portail officiel de l'univers Battlecorp",
  },
  hero: {
    title: "Battlecorp",
    subtitle: "Votre portail vers l'univers Battlecorp — un wargame stratégique où chaque décision façonne le destin de votre empire.",
    ctaPrimaryLabel: "Découvrir",
    ctaPrimaryHref: "#wargame",
    ctaSecondaryLabel: "Whitepaper",
    ctaSecondaryHref: "https://battlecorp.gitbook.io/whitepaper/",
  },
  wargame: {
    title: "Le Wargame est Jouable",
    description: "Battlecorp est un jeu de stratégie au tour par tour où vous construisez, gérez et défendez votre empire dans un univers persistant.",
    bullets: [
      "Affrontez des joueurs du monde entier",
      "Développez votre économie et vos armées",
      "Forgez des alliances stratégiques",
    ],
    mediaSrc: "/assets/map-view.jpg",
    mediaAlt: "Aperçu du gameplay Battlecorp",
  },
  twoViews: {
    title: "Deux Perspectives, Un Empire",
    cards: [
      {
        title: "Vue Cité",
        description: "Gérez votre capitale et développez votre infrastructure.",
        bullets: [
          "Construisez des bâtiments de production",
          "Recrutez et entraînez vos unités",
          "Recherchez de nouvelles technologies",
        ],
        imageSrc: "/assets/city-view.jpg",
        imageAlt: "Vue de la cité dans Battlecorp — interface de gestion avec bâtiments et ressources",
      },
      {
        title: "Vue Carte",
        description: "Explorez le monde et étendez votre territoire.",
        bullets: [
          "Conquérez des régions stratégiques",
          "Collectez des ressources rares",
          "Planifiez vos campagnes militaires",
        ],
        imageSrc: "/assets/map-view.jpg",
        imageAlt: "Vue de la carte dans Battlecorp — carte stratégique avec territoires et zones de combat",
      },
    ],
  },
  loop: {
    title: "Boucle de Jeu",
    steps: [
      {
        title: "Planification",
        description: "Analysez la situation et définissez vos objectifs stratégiques pour le tour.",
      },
      {
        title: "Production",
        description: "Construisez des bâtiments, recrutez des unités et gérez vos ressources.",
      },
      {
        title: "Déploiement",
        description: "Positionnez vos forces et préparez vos défenses sur la carte.",
      },
      {
        title: "Combat",
        description: "Engagez vos ennemis et exécutez vos manœuvres tactiques.",
      },
      {
        title: "Résolution",
        description: "Récoltez les fruits de vos victoires et adaptez votre stratégie.",
      },
    ],
  },
  battlefield: {
    title: "Actions de Bataille",
    items: [
      {
        title: "Pillonnage",
        description: "Bombardez les positions ennemies pour affaiblir leurs défenses avant l'assaut.",
      },
      {
        title: "Fortification",
        description: "Renforcez vos positions défensives pour résister aux attaques adverses.",
      },
      {
        title: "Attaque",
        description: "Lancez vos troupes à l'assaut pour conquérir de nouveaux territoires.",
      },
    ],
  },
  playstyle: {
    title: "Quel Genre de Leader Êtes-Vous ?",
    items: [
      {
        title: "Seigneur de Guerre",
        description: "La force brute est votre langage. Vos armées écrasent tout sur leur passage.",
        bullets: [
          "Bonus de combat et de recrutement",
          "Unités d'élite débloquées plus tôt",
        ],
      },
      {
        title: "Magnat Industriel",
        description: "L'économie est le nerf de la guerre. Vos usines tournent sans relâche.",
        bullets: [
          "Production de ressources accrue",
          "Bâtiments moins coûteux",
        ],
      },
      {
        title: "Marionnettiste",
        description: "Les alliances sont votre arme. Manipulez vos adversaires dans l'ombre.",
        bullets: [
          "Bonus diplomatiques et d'espionnage",
          "Accès aux technologies secrètes",
        ],
      },
    ],
  },
  faq: {
    title: "Questions Fréquentes",
    items: [
      {
        q: "Quand Battlecorp sera-t-il disponible ?",
        a: "Le jeu est déjà jouable en version alpha. Rejoignez notre Discord pour accéder aux tests.",
      },
      {
        q: "Le jeu sera-t-il gratuit ?",
        a: "Battlecorp proposera un modèle free-to-play avec des options cosmétiques optionnelles.",
      },
      {
        q: "Sur quelles plateformes le jeu sera-t-il disponible ?",
        a: "Battlecorp sera accessible via navigateur web, avec des applications mobiles prévues pour une phase ultérieure.",
      },
      {
        q: "Puis-je jouer en solo ?",
        a: "Le jeu est principalement multijoueur, mais des modes contre l'IA sont en développement.",
      },
      {
        q: "Comment rejoindre la communauté ?",
        a: "Rejoignez notre serveur Discord pour discuter avec d'autres joueurs et l'équipe de développement.",
      },
    ],
  },
  progress: {
    title: "État du Développement",
    description: "Battlecorp est en développement actif. Rejoignez notre communauté pour suivre l'avancement et participer aux tests.",
    ctaDiscordLabel: "Rejoindre Discord",
    ctaDiscordHref: "https://discord.gg/battlecorp",
    ctaSupportLabel: "Soutenir le Projet",
    ctaSupportHref: "https://buymeacoffee.com/badmarinesstudio",
  },
} as const;

export type HomeContent = typeof home;
