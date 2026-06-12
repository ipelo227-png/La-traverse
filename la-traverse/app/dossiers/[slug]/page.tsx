import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { MarkdownRenderer } from "@/components/MarkdownRenderer";
import { RelatedArticles } from "@/components/RelatedArticles";
import { getDossierBySlug, getPublishedArticles, getPublishedDossiers } from "@/lib/content";
import { createMetadata } from "@/lib/metadata";

export function generateStaticParams() {
  return getPublishedDossiers().map((dossier) => ({ slug: dossier.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const dossier = getDossierBySlug(params.slug);
  return createMetadata({
    title: dossier?.title ?? "Dossier",
    description: dossier?.description,
    path: `/dossiers/${params.slug}`,
    image: dossier?.coverImage ?? "/og-image.svg"
  });
}

export default function DossierPage({ params }: { params: { slug: string } }) {
  const dossier = getDossierBySlug(params.slug);
  if (!dossier) {
    notFound();
  }

  const linkedArticles = getPublishedArticles().filter((article) => dossier.articles.includes(article.slug));

  return (
    <section className="bg-paper px-5 py-12 md:py-16">
      <div className="mx-auto max-w-4xl">
        <Breadcrumbs items={[{ label: "Dossiers", href: "/dossiers" }, { label: dossier.title }]} />
        <h1 className="mt-8 font-serif text-5xl leading-none text-night md:text-7xl">{dossier.title}</h1>
        <p className="mt-6 text-xl leading-8 text-muted">{dossier.description}</p>
        {dossier.body ? (
          <div className="mt-12">
            <MarkdownRenderer body={dossier.body} />
          </div>
        ) : null}
        <div className="mt-12">
          <RelatedArticles articles={linkedArticles} />
        </div>
      </div>
    </section>
  );
}
