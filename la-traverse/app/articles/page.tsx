import type { Metadata } from "next";
import { ArticleCard } from "@/components/ArticleCard";
import { EmptyState } from "@/components/EmptyState";
import { SearchBar } from "@/components/SearchBar";
import { SectionTitle } from "@/components/SectionTitle";
import { searchPublishedArticles } from "@/lib/content";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Articles",
  description: "Toutes les analyses publiées par La Traverse.",
  path: "/articles"
});

export default function ArticlesPage({ searchParams }: { searchParams: { q?: string } }) {
  const query = searchParams.q ?? "";
  const articles = searchPublishedArticles(query);

  return (
    <section className="bg-paper px-5 py-12 md:py-16">
      <div className="mx-auto max-w-6xl">
        <SectionTitle eyebrow="Articles" title="Analyses critiques" description="Recherche par titre, tag ou résumé parmi les contenus publiés." />
        <div className="mt-8">
          <SearchBar defaultValue={query} />
        </div>
        <div className="mt-10">
          {articles.length > 0 ? (
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {articles.map((article) => (
                <ArticleCard article={article} key={article.slug} />
              ))}
            </div>
          ) : (
            <EmptyState
              title={query ? "Aucun article publié ne correspond à cette recherche." : "Aucun article publié pour le moment."}
              description="Les articles en brouillon et le template technique restent invisibles sur le site public."
            />
          )}
        </div>
      </div>
    </section>
  );
}
