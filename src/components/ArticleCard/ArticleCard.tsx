import Link from "next/link";
import type { Article } from "@/lib/articles";
import styles from "./ArticleCard.module.css";

type ArticleCardProps = {
  article: Article;
};

export function ArticleCard({ article }: ArticleCardProps) {
  return (
    <Link className={styles.card} href={`/articles/${article.slug}`}>
      <div className={styles.meta}>
        <span>{article.category}</span>
        <span>{article.difficulty}</span>
      </div>
      <h2>{article.title}</h2>
      <p>{article.summary}</p>
      {article.tags.length > 0 ? (
        <div className={styles.tags}>
          {article.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      ) : null}
      <div className={styles.footer}>
        <span>{article.readingTime}</span>
        <time dateTime={article.publishedAt}>{article.publishedAt}</time>
      </div>
    </Link>
  );
}
