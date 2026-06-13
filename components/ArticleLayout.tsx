import { AuthorBox } from "@/components/AuthorBox";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CategoryBadge } from "@/components/CategoryBadge";
import { MarkdownRenderer } from "@/components/MarkdownRenderer";
import { TagList } from "@/components/TagList";
import type { Article } from "@/types/editorial";

export function ArticleLayout({ article }: { article: Article }) {
  return (
    <article className="bg-paper px-5 py-12 md:py-16">
      <div className="mx-auto max-w-4xl">
        <Breadcrumbs items={[{ label: "Articles", href: "/articles" }, { label: article.title }]} />
        <div className="mt-8">
          <CategoryBadge slug={article.category} />
          <h1 className="mt-5 font-serif text-5xl leading-none text-night md:text-7xl">{article.title}</h1>
          <p className="mt-6 text-xl leading-8 text-muted">{article.excerpt}</p>
          <div className="mt-6 flex flex-wrap gap-4 text-xs uppercase text-muted">
            <span>{article.format}</span>
            <span>{article.readingTime} min de lecture</span>
            <span>{new Intl.DateTimeFormat("fr-FR", { dateStyle: "long" }).format(new Date(article.date))}</span>
          </div>
          <div className="mt-6">
            <TagList tags={article.tags} />
          </div>
        </div>
        <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_260px]">
          <MarkdownRenderer body={article.body} />
          <AuthorBox author={article.author} />
        </div>
      </div>
    </article>
  );
}
