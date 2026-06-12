import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticleCard } from "@/components/ArticleCard";
import { EmptyState } from "@/components/EmptyState";
import { SectionTitle } from "@/components/SectionTitle";
import { siteConfig } from "@/config/site.config";
import { getPublishedArticles } from "@/lib/content";
import { createMetadata } from "@/lib/metadata";

export function generateStaticParams() {
  const slugs = new Set([siteConfig.author.slug, ...getPublishedArticles().map((article) => article.author.slug)]);
  return Array.from(slugs).map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const author = params.slug === siteConfig.author.slug ? siteConfig.author : getPublishedArticles().find((article) => article.author.slug === params.slug)?.author;
  return createMetadata({
    title: author?.name ?? "Auteur",
    description: author?.bio,
    path: `/auteurs/${params.slug}`
  });
}

export default function AuthorPage({ params }: { params: { slug: string } }) {
  const articles = getPublishedArticles().filter((article) => article.author.slug === params.slug);
  const author = params.slug === siteConfig.author.slug ? siteConfig.author : articles[0]?.author;

  if (!author) {
    notFound();
  }

  return (
    <section className="bg-paper px-5 py-12 md:py-16">
      <div className="mx-auto max-w-6xl">
        <SectionTitle eyebrow="Auteur" title={author.name} description={author.bio} />
        <div className="mt-10">
          {articles.length > 0 ? (
            <div className="grid gap-5 md:grid-cols-3">
              {articles.map((article) => (
                <ArticleCard article={article} key={article.slug} />
              ))}
            </div>
          ) : (
            <EmptyState title="Aucun article publié pour cet auteur." description="Les prochaines publications apparaîtront automatiquement ici." />
          )}
        </div>
      </div>
    </section>
  );
}
