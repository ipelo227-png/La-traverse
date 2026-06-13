import type { Rubric, SiteConfig } from "@/types/editorial";

export const rubrics: Rubric[] = [
  {
    title: "À la une",
    slug: "a-la-une",
    description: "Les analyses mises en avant par la rédaction.",
    color: "wine"
  },
  {
    title: "International",
    slug: "international",
    description: "Actualité mondiale, impérialismes, institutions et rapports de puissance.",
    color: "night"
  },
  {
    title: "Géopolitique",
    slug: "geopolitique",
    description: "Conflits, recompositions régionales et stratégies d'influence.",
    color: "wine"
  },
  {
    title: "Macroéconomie",
    slug: "macroeconomie",
    description: "Inflation, dette, monnaies, commerce mondial, classes et banques centrales.",
    color: "brass"
  },
  {
    title: "Économie politique",
    slug: "economie-politique",
    description: "Capitalisme, travail, bureaucraties, souveraineté et transformations productives.",
    color: "moss"
  },
  {
    title: "Théorie & idées",
    slug: "theorie-idees",
    description: "Concepts, débats intellectuels, traditions critiques et libertés collectives.",
    color: "night"
  },
  {
    title: "Données & graphiques",
    slug: "donnees-graphiques",
    description: "Repères empiriques, visualisations et chiffres commentés.",
    color: "brass"
  },
  {
    title: "Briefing hebdomadaire",
    slug: "briefing-hebdomadaire",
    description: "Une synthèse régulière pour relier les événements de la semaine.",
    color: "moss"
  }
];

export const siteConfig: SiteConfig = {
  name: "La Traverse",
  shortName: "LT",
  description:
    "Une revue critique indépendante consacrée aux rapports de force internationaux, à l'économie politique, aux institutions et aux conflits du présent.",
  promise: "Comprendre les rapports de force sans céder au bruit médiatique ni aux réflexes de camp.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  locale: "fr_FR",
  contactEmail: "contact@latraverse.fr",
  author: {
    name: "Rédaction",
    slug: "redaction",
    bio: "Collectif éditorial indépendant, attaché à l'autonomie intellectuelle, à l'enquête documentée et au refus des autoritarismes."
  },
  social: {
    newsletter: "/newsletter"
  },
  rubrics,
  tags: [
    "États-Unis",
    "Europe",
    "Chine",
    "Russie",
    "Moyen-Orient",
    "Afrique",
    "Amérique latine",
    "Inflation",
    "Dette",
    "Dollar",
    "Souveraineté",
    "Guerre économique",
    "Élections",
    "Conflits sociaux",
    "Libertés publiques",
    "Bureaucratie",
    "Travail",
    "Capitalisme",
    "Mondialisation",
    "Écologie politique"
  ]
};
