import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticleCard } from "@/components/ArticleCard";
import { EmptyState } from "@/components/EmptyState";
import { SectionTitle } from "@/components/SectionTitle";
import { siteConfig } from "@/config/site.config";
import { getArticlesByRubric, getRubricBySlug } from "@/lib/content";
import { createMetadata } from "@/lib/metadata";

export function generateStaticParams() {
  return siteConfig.rubrics.map((rubric) => ({ slug: rubric.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const rubric = getRubricBySlug(params.slug);
  return createMetadata({
    title: rubric?.title ?? "Rubrique",
    description: rubric?.description,
    path: `/rubriques/${params.slug}`
  });
}

export default function RubricPage({ params }: { params: { slug: string } }) {
  const rubric = getRubricBySlug(params.slug);
  if (!rubric) {
    notFound();
  }

  const articles = getArticlesByRubric(params.slug);

  return (
    <section className="bg-paper px-5 py-12 md:py-16">
      <div className="mx-auto max-w-6xl">
        <SectionTitle eyebrow="Rubrique" title={rubric.title} description={rubric.description} />
        <div className="mt-10">
          {articles.length > 0 ? (
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {articles.map((article) => (
                <ArticleCard article={article} key={article.slug} />
              ))}
            </div>
          ) : (
            <EmptyState title="Cette rubrique accueillera prochainement ses premières analyses." description="Seuls les contenus publiés apparaîtront ici." />
          )}
        </div>
      </div>
    </section>
  );
}
