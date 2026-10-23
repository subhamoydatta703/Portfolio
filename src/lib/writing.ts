import "server-only";
import snapshot from "@/data/writing-snapshot.json";

export interface PublishedArticle {
  id: number;
  title: string;
  url: string;
  publishedAt: string;
  readingMinutes: number;
  tags: string[];
}

interface DevArticle {
  id: number;
  title: string;
  url: string;
  published_at: string;
  reading_time_minutes: number;
  tag_list: string[];
  user: { username: string };
}

export async function getPublishedArticles(): Promise<PublishedArticle[]> {
  try {
    const response = await fetch("https://dev.to/api/articles?username=itssubhamoy&per_page=10", {
      next: { revalidate: 86400 },
      signal: AbortSignal.timeout(8000),
      headers: { Accept: "application/json" },
    });
    if (!response.ok) throw new Error("DEV articles unavailable");
    const articles: DevArticle[] = await response.json();
    if (!Array.isArray(articles)) throw new Error("Invalid DEV response");
    const seen = new Set<string>();
    return articles
      .filter((article) => article.user?.username === "itssubhamoy" && article.title && article.url?.startsWith("https://dev.to/itssubhamoy/") && Number.isFinite(Date.parse(article.published_at)))
      .sort((a, b) => Date.parse(b.published_at) - Date.parse(a.published_at))
      .filter((article) => {
        const title = article.title.toLowerCase().trim();
        if (seen.has(title)) return false;
        seen.add(title);
        return true;
      })
      .slice(0, 3)
      .map((article) => ({
        id: article.id,
        title: article.title,
        url: article.url,
        publishedAt: article.published_at,
        readingMinutes: article.reading_time_minutes,
        tags: Array.isArray(article.tag_list) ? article.tag_list : [],
      }));
  } catch {
    return snapshot;
  }
}
