import type { Rubric, SiteConfig } from "@/types/editorial";

export const rubrics: Rubric[] = [
  {
    title: "À la une",
    slug: "a-la-une",
    description: "Les textes mis en avant par la rédaction.",
    color: "wine"
  },
  {
    title: "International",
    slug: "international",
    description: "Diplomatie, conflits, institutions, puissances et récits stratégiques.",
    color: "lake"
  },
  {
    title: "Genève & Léman",
    slug: "geneve-leman",
    description: "Institutions internationales, ville-frontière, lac, Alpes et scènes locales.",
    color: "mauve"
  },
  {
    title: "Macroéconomie",
    slug: "macroeconomie",
    description: "Dette, monnaie, commerce mondial, banques centrales et dépendances économiques.",
    color: "brass"
  },
  {
    title: "Culture & littérature",
    slug: "culture-litterature",
    description: "Essais, livres, formes artistiques et imaginaires politiques du présent.",
    color: "wine"
  },
  {
    title: "Économie politique",
    slug: "economie-politique",
    description: "Travail, bureaucraties, souveraineté et transformations productives.",
    color: "moss"
  },
  {
    title: "Théorie & idées",
    slug: "theorie-idees",
    description: "Concepts, traditions critiques, controverses et libertés collectives.",
    color: "night"
  },
  {
    title: "Données & cartes",
    slug: "donnees-graphiques",
    description: "Repères empiriques, cartes, visualisations et chiffres commentés.",
    color: "ochre"
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
    "Une revue d'analyse critique, d'économie politique et culturelle, basée autour de Genève, attentive aux puissances, aux institutions, aux récits et aux formes sensibles du monde contemporain.",
  promise: "Depuis Genève, prendre le présent à revers.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  locale: "fr_FR",
  contactEmail: "contact@latraverse.fr",
  author: {
    name: "Rédaction",
    slug: "redaction",
    bio: "Collectif éditorial indépendant, attaché à l'autonomie intellectuelle, à l'enquête documentée, aux formes littéraires et au refus des autoritarismes."
  },
  social: {
    newsletter: "/newsletter"
  },
  rubrics,
  tags: [
    "États-Unis",
    "Europe",
    "Genève",
    "Léman",
    "Alpes",
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
    "Diplomatie",
    "Institutions internationales",
    "Élections",
    "Conflits sociaux",
    "Libertés publiques",
    "Culture",
    "Littérature",
    "Bureaucratie",
    "Travail",
    "Capitalisme",
    "Mondialisation",
    "Écologie politique"
  ]
};
