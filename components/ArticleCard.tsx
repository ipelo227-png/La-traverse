import Link from "next/link";
import { CategoryBadge } from "@/components/CategoryBadge";
import { TagList } from "@/components/TagList";
import type { Article } from "@/types/editorial";

export function ArticleCard({ article }: { article: Article }) {
  return (
    <article className="flex h-full flex-col border border-line bg-white/60 p-5 transition hover:border-night">
      <CategoryBadge slug={article.category} />
      <h3 className="mt-4 font-serif text-2xl leading-tight text-night">
        <Link className="focus-ring rounded-sm" href={`/articles/${article.slug}`}>
          {article.title}
        </Link>
      </h3>
      <p className="mt-3 flex-1 text-sm leading-6 text-muted">{article.excerpt}</p>
      <div className="mt-5">
        <TagList tags={article.tags.slice(0, 4)} />
      </div>
      <p className="mt-5 text-xs uppercase text-muted">
        {article.format} · {article.readingTime} min
      </p>
    </article>
  );
}
