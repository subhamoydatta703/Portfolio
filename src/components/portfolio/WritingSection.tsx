import type { PublishedArticle } from "@/lib/writing";
import { portfolio } from "@/lib/portfolio";
import LinkArrow from "./LinkArrow";

const publishedDate = (date: string) => new Intl.DateTimeFormat("en-GB", {
  day: "numeric", month: "short", year: "numeric", timeZone: "UTC",
}).format(new Date(date));

export default function WritingSection({ articles }: { articles: PublishedArticle[] }) {
  if (!articles.length) return null;

  return (
    <section id="writing" className="writing wrap" aria-labelledby="writing-heading" data-reveal>
      <div className="section-head">
        <h2 id="writing-heading">Writing<span> / 04</span></h2>
        <a className="textlink" href={portfolio.dev} target="_blank" rel="noreferrer">Read on DEV <LinkArrow /></a>
      </div>
      <ul className="writing-list">
        {articles.map((article) => (
          <li key={article.id}>
            <a className="writing-article" href={article.url} target="_blank" rel="noreferrer">
              <div className="writing-meta"><time dateTime={article.publishedAt}>{publishedDate(article.publishedAt)}</time><span>{article.readingMinutes} min read</span></div>
              <div className="writing-copy"><h3>{article.title}</h3><p>{article.tags.map((tag) => `#${tag}`).join(" · ")}</p></div>
              <LinkArrow />
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
