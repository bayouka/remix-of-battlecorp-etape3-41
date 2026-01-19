// English home page translations
export const home = {
  meta: {
    title: "Battlecorp Launchpad",
    description: "The official portal to the Battlecorp universe",
  },
  hero: {
    title: "Battlecorp",
    subtitle: "Your gateway to the Battlecorp universe — a strategic wargame where every decision shapes the fate of your empire.",
    ctaPrimaryLabel: "Discover",
    ctaPrimaryHref: "#wargame",
    ctaSecondaryLabel: "Whitepaper",
    ctaSecondaryHref: "https://battlecorp.gitbook.io/whitepaper/",
  },
  wargame: {
    title: "The Wargame is Playable",
    description: "Battlecorp is a turn-based strategy game where you build, manage, and defend your empire in a persistent universe.",
    bullets: [
      "Face players from around the world",
      "Develop your economy and armies",
      "Forge strategic alliances",
    ],
    mediaSrc: "/assets/map-view.jpg",
    mediaAlt: "Battlecorp gameplay preview",
  },
  twoViews: {
    title: "Two Perspectives, One Empire",
    cards: [
      {
        title: "City View",
        description: "Manage your capital and develop your infrastructure.",
        bullets: [
          "Build production facilities",
          "Recruit and train your units",
          "Research new technologies",
        ],
        imageSrc: "/assets/city-view.jpg",
        imageAlt: "City view in Battlecorp — management interface with buildings and resources",
      },
      {
        title: "Map View",
        description: "Explore the world and expand your territory.",
        bullets: [
          "Conquer strategic regions",
          "Collect rare resources",
          "Plan your military campaigns",
        ],
        imageSrc: "/assets/map-view.jpg",
        imageAlt: "Map view in Battlecorp — strategic map with territories and combat zones",
      },
    ],
  },
  loop: {
    title: "Game Loop",
    steps: [
      {
        title: "Planning",
        description: "Analyze the situation and define your strategic objectives for the turn.",
      },
      {
        title: "Production",
        description: "Build structures, recruit units, and manage your resources.",
      },
      {
        title: "Deployment",
        description: "Position your forces and prepare your defenses on the map.",
      },
      {
        title: "Combat",
        description: "Engage your enemies and execute your tactical maneuvers.",
      },
      {
        title: "Resolution",
        description: "Reap the rewards of your victories and adapt your strategy.",
      },
    ],
  },
  battlefield: {
    title: "Battle Actions",
    items: [
      {
        title: "Bombardment",
        description: "Shell enemy positions to weaken their defenses before the assault.",
      },
      {
        title: "Fortification",
        description: "Strengthen your defensive positions to withstand enemy attacks.",
      },
      {
        title: "Attack",
        description: "Launch your troops to assault and conquer new territories.",
      },
    ],
  },
  playstyle: {
    title: "What Kind of Leader Are You?",
    items: [
      {
        title: "Warlord",
        description: "Brute force is your language. Your armies crush everything in their path.",
        bullets: [
          "Combat and recruitment bonuses",
          "Elite units unlocked earlier",
        ],
      },
      {
        title: "Industrial Magnate",
        description: "Economy is the sinews of war. Your factories run relentlessly.",
        bullets: [
          "Increased resource production",
          "Cheaper buildings",
        ],
      },
      {
        title: "Puppeteer",
        description: "Alliances are your weapon. Manipulate your adversaries from the shadows.",
        bullets: [
          "Diplomatic and espionage bonuses",
          "Access to secret technologies",
        ],
      },
    ],
  },
  faq: {
    title: "Frequently Asked Questions",
    items: [
      {
        q: "When will Battlecorp be available?",
        a: "The game is already playable in alpha. Join our Discord to access the tests.",
      },
      {
        q: "Will the game be free?",
        a: "Battlecorp will offer a free-to-play model with optional cosmetic options.",
      },
      {
        q: "What platforms will the game be available on?",
        a: "Battlecorp will be accessible via web browser, with mobile apps planned for a later phase.",
      },
      {
        q: "Can I play solo?",
        a: "The game is primarily multiplayer, but AI modes are in development.",
      },
      {
        q: "How do I join the community?",
        a: "Join our Discord server to chat with other players and the development team.",
      },
    ],
  },
  progress: {
    title: "Development Status",
    description: "Battlecorp is in active development. Join our community to follow progress and participate in testing.",
    ctaDiscordLabel: "Join Discord",
    ctaDiscordHref: "https://discord.gg/battlecorp",
    ctaSupportLabel: "Support the Project",
    ctaSupportHref: "https://buymeacoffee.com/badmarinesstudio",
  },
} as const;

export type HomeContent = typeof home;
