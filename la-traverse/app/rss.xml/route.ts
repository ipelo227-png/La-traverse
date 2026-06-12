import { siteConfig } from "@/config/site.config";
import { getPublishedArticles } from "@/lib/content";

export function GET() {
  const articles = getPublishedArticles();
  const items = articles
    .map(
      (article) => `
        <item>
          <title><![CDATA[${article.title}]]></title>
          <description><![CDATA[${article.excerpt}]]></description>
          <link>${siteConfig.url}/articles/${article.slug}</link>
          <guid>${siteConfig.url}/articles/${article.slug}</guid>
          <pubDate>${new Date(article.date).toUTCString()}</pubDate>
        </item>`
    )
    .join("");

  const rss = `<?xml version="1.0" encoding="UTF-8" ?>
    <rss version="2.0">
      <channel>
        <title>${siteConfig.name}</title>
        <description>${siteConfig.description}</description>
        <link>${siteConfig.url}</link>
        <language>fr</language>
        ${items}
      </channel>
    </rss>`;

  return new Response(rss, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8"
    }
  });
}
