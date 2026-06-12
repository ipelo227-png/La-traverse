import { ArticleCard } from "@/components/ArticleCard";
import { EmptyState } from "@/components/EmptyState";
import type { Article } from "@/types/editorial";

export function RelatedArticles({ articles }: { articles: Article[] }) {
  if (articles.length === 0) {
    return <EmptyState title="Aucune analyse associée pour le moment." description="Les articles liés apparaîtront ici au fil des publications." />;
  }

  return (
    <div className="grid gap-5 md:grid-cols-2">
      {articles.map((article) => (
        <ArticleCard article={article} key={article.slug} />
      ))}
    </div>
  );
}
