import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site.config";
import { getPublishedArticles, getPublishedDossiers } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/articles", "/rubriques", "/dossiers", "/newsletter", "/a-propos", "/contact", "/mentions-legales"];
  const rubricRoutes = siteConfig.rubrics.map((rubric) => `/rubriques/${rubric.slug}`);
  const articleRoutes = getPublishedArticles().map((article) => `/articles/${article.slug}`);
  const dossierRoutes = getPublishedDossiers().map((dossier) => `/dossiers/${dossier.slug}`);

  return [...staticRoutes, ...rubricRoutes, ...articleRoutes, ...dossierRoutes].map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date()
  }));
}
