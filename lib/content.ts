import fs from "node:fs";
import path from "node:path";
import { siteConfig } from "@/config/site.config";
import type { Article, Author, Dossier, EditorialFormat, PublicationStatus } from "@/types/editorial";

const contentDirectory = path.join(process.cwd(), "content");
const articlesDirectory = path.join(contentDirectory, "articles");
const dossiersDirectory = path.join(contentDirectory, "dossiers");

type Frontmatter = Record<string, string | string[] | boolean | number | undefined>;

function readContentFiles(directory: string) {
  if (!fs.existsSync(directory)) {
    return [];
  }

  return fs
    .readdirSync(directory)
    .filter((fileName) => fileName.endsWith(".md") || fileName.endsWith(".mdx"))
    .map((fileName) => ({
      fileName,
      raw: fs.readFileSync(path.join(directory, fileName), "utf8")
    }));
}

function parseFrontmatter(raw: string): { data: Frontmatter; body: string } {
  if (!raw.startsWith("---")) {
    return { data: {}, body: raw.trim() };
  }

  const closingMarker = raw.indexOf("\n---", 3);
  if (closingMarker === -1) {
    return { data: {}, body: raw.trim() };
  }

  const block = raw.slice(3, closingMarker).trim();
  const body = raw.slice(closingMarker + 4).trim();
  const data = block.split(/\r?\n/).reduce<Frontmatter>((accumulator, line) => {
    const separatorIndex = line.indexOf(":");
    if (separatorIndex === -1) {
      return accumulator;
    }

    const key = line.slice(0, separatorIndex).trim();
    const value = line.slice(separatorIndex + 1).trim();
    accumulator[key] = parseFrontmatterValue(value);
    return accumulator;
  }, {});

  return { data, body };
}

function parseFrontmatterValue(value: string) {
  const trimmed = value.replace(/^["']|["']$/g, "");

  if (trimmed === "true") return true;
  if (trimmed === "false") return false;
  if (/^\d+$/.test(trimmed)) return Number(trimmed);
  if (trimmed.startsWith("[") && trimmed.endsWith("]")) {
    return trimmed
      .slice(1, -1)
      .split(",")
      .map((item) => item.trim().replace(/^["']|["']$/g, ""))
      .filter(Boolean);
  }

  return trimmed;
}

function asString(value: Frontmatter[string], fallback = "") {
  return typeof value === "string" ? value : fallback;
}

function asStringArray(value: Frontmatter[string]) {
  return Array.isArray(value) ? value : [];
}

function asBoolean(value: Frontmatter[string]) {
  return typeof value === "boolean" ? value : false;
}

function asNumber(value: Frontmatter[string], fallback: number) {
  return typeof value === "number" ? value : fallback;
}

function getAuthor(data: Frontmatter): Author {
  return {
    name: asString(data.author, siteConfig.author.name),
    slug: asString(data.authorSlug, siteConfig.author.slug),
    bio: asString(data.authorBio, siteConfig.author.bio)
  };
}

export function getAllArticles(options: { includeDrafts?: boolean } = {}): Article[] {
  return readContentFiles(articlesDirectory)
    .map(({ fileName, raw }) => {
      const { data, body } = parseFrontmatter(raw);
      const slug = asString(data.slug, fileName.replace(/\.mdx?$/, ""));

      return {
        title: asString(data.title, "Article sans titre"),
        slug,
        excerpt: asString(data.excerpt),
        date: asString(data.date),
        updatedAt: asString(data.updatedAt) || undefined,
        author: getAuthor(data),
        category: asString(data.category, "international"),
        tags: asStringArray(data.tags),
        format: asString(data.format, "Analyse longue") as EditorialFormat,
        status: asString(data.status, "draft") as PublicationStatus,
        featured: asBoolean(data.featured),
        readingTime: asNumber(data.readingTime, estimateReadingTime(body)),
        coverImage: asString(data.coverImage) || undefined,
        relatedArticles: asStringArray(data.relatedArticles),
        body
      };
    })
    .filter((article) => options.includeDrafts || article.status === "published")
    .sort((a, b) => new Date(b.date || 0).getTime() - new Date(a.date || 0).getTime());
}

export function getPublishedArticles() {
  return getAllArticles();
}

export function getArticleBySlug(slug: string) {
  return getPublishedArticles().find((article) => article.slug === slug);
}

export function getFeaturedArticle() {
  return getPublishedArticles().find((article) => article.featured) ?? null;
}

export function getArticlesByRubric(slug: string) {
  return getPublishedArticles().filter((article) => article.category === slug);
}

export function searchPublishedArticles(query: string) {
  const normalizedQuery = normalizeSearch(query);
  if (!normalizedQuery) {
    return getPublishedArticles();
  }

  return getPublishedArticles().filter((article) => {
    const searchable = [article.title, article.excerpt, article.category, article.format, ...article.tags]
      .join(" ")
      .toLowerCase();

    return normalizeSearch(searchable).includes(normalizedQuery);
  });
}

export function getAllDossiers(options: { includeDrafts?: boolean } = {}): Dossier[] {
  return readContentFiles(dossiersDirectory)
    .map(({ fileName, raw }) => {
      const { data, body } = parseFrontmatter(raw);
      const slug = asString(data.slug, fileName.replace(/\.mdx?$/, ""));

      return {
        title: asString(data.title, "Dossier sans titre"),
        slug,
        description: asString(data.description),
        status: asString(data.status, "draft") as PublicationStatus,
        coverImage: asString(data.coverImage) || undefined,
        articles: asStringArray(data.articles),
        createdAt: asString(data.createdAt),
        updatedAt: asString(data.updatedAt) || undefined,
        body
      };
    })
    .filter((dossier) => options.includeDrafts || dossier.status === "published")
    .sort((a, b) => new Date(b.createdAt || 0).getTime() - new Date(a.createdAt || 0).getTime());
}

export function getPublishedDossiers() {
  return getAllDossiers();
}

export function getDossierBySlug(slug: string) {
  return getPublishedDossiers().find((dossier) => dossier.slug === slug);
}

export function getRubricBySlug(slug: string) {
  return siteConfig.rubrics.find((rubric) => rubric.slug === slug);
}

function estimateReadingTime(body: string) {
  const words = body.split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / 220));
}

function normalizeSearch(value: string) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim();
}
