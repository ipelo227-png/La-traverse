export type PublicationStatus = "draft" | "published";

export type EditorialFormat =
  | "Décryptage rapide"
  | "Analyse longue"
  | "Briefing hebdomadaire"
  | "Dossier thématique"
  | "Fiche concept"
  | "Article théorique"
  | "Article empirique"
  | "Revue de presse commentée"
  | "Lecture d'auteur"
  | "Chronique";

export type RubricColor = "night" | "wine" | "moss" | "brass";

export type Rubric = {
  title: string;
  slug: string;
  description: string;
  color: RubricColor;
};

export type Author = {
  name: string;
  slug: string;
  bio?: string;
  avatar?: string;
};

export type Article = {
  title: string;
  slug: string;
  excerpt: string;
  date: string;
  updatedAt?: string;
  author: Author;
  category: string;
  tags: string[];
  format: EditorialFormat;
  status: PublicationStatus;
  featured: boolean;
  readingTime: number;
  coverImage?: string;
  relatedArticles?: string[];
  body: string;
};

export type Dossier = {
  title: string;
  slug: string;
  description: string;
  status: PublicationStatus;
  coverImage?: string;
  articles: string[];
  createdAt: string;
  updatedAt?: string;
  body?: string;
};

export type SiteConfig = {
  name: string;
  shortName: string;
  description: string;
  promise: string;
  url: string;
  locale: string;
  contactEmail: string;
  author: Author;
  social: {
    newsletter: string;
  };
  rubrics: Rubric[];
  tags: string[];
};
