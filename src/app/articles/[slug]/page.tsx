import { notFound } from "next/navigation";
import { articles, getArticleBySlug } from "@/lib/articles";
import styles from "./page.module.css";

type ArticleDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: ArticleDetailPageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  return {
    title: article ? `${article.title} | 从零学习美股` : "文章未找到",
    description: article?.summary,
  };
}

export default async function ArticleDetailPage({ params }: ArticleDetailPageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  return (
    <main>
      <article className={styles.article}>
        <div className={styles.meta}>
          <span>{article.category}</span>
          <span>{article.difficulty}</span>
          <span>{article.readingTime}</span>
          <time dateTime={article.publishedAt}>{article.publishedAt}</time>
        </div>
        <h1>{article.title}</h1>
        <p className={styles.summary}>{article.summary}</p>
        <div className={styles.content}>
          {article.content.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </article>
    </main>
  );
}
