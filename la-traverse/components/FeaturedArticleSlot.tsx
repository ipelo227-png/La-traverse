import Link from "next/link";
import { ArticleCard } from "@/components/ArticleCard";
import { EmptyState } from "@/components/EmptyState";
import type { Article } from "@/types/editorial";

export function FeaturedArticleSlot({ article }: { article: Article | null }) {
  if (!article) {
    return (
      <EmptyState
        title="Les premiers textes critiques seront bientôt disponibles."
        description="La une accueillera le prochain article publié avec le statut published et l’option featured activée."
        action={{ label: "Voir le modèle d’article", href: "/articles" }}
      />
    );
  }

  return (
    <div className="grid gap-5 lg:grid-cols-[1.4fr_0.8fr]">
      <ArticleCard article={article} />
      <div className="border border-line bg-night p-6 text-paper">
        <p className="text-xs font-bold uppercase text-paper/60">Analyse mise en avant</p>
        <p className="mt-5 font-serif text-3xl leading-tight">{article.title}</p>
        <p className="mt-4 text-sm leading-6 text-paper/75">{article.excerpt}</p>
        <Link className="focus-ring mt-6 inline-flex border border-paper px-4 py-2 text-sm font-semibold transition hover:bg-paper hover:text-night" href={`/articles/${article.slug}`}>
          Lire l&rsquo;analyse
        </Link>
      </div>
    </div>
  );
}
