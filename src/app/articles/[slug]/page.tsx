import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";
import { ArticleCard } from "@/components/ArticleCard/ArticleCard";
import { getArticleBySlug, getArticleSlugs, getRelatedArticles } from "@/lib/articles";
import styles from "./page.module.css";

type ArticleDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return getArticleSlugs().map((slug) => ({
    slug,
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

  const relatedArticles = getRelatedArticles(article, 3);

  return (
    <main className={styles.page}>
      <div className={styles.navRow}>
        <Link className={styles.backLink} href="/articles">
          ← 返回文章
        </Link>
      </div>
      <article className={styles.article}>
        <header className={styles.header}>
          <div className={styles.meta}>
            <span>第 {article.readingOrder} 篇</span>
            <span>{article.category}</span>
            <span>{article.difficulty}</span>
            <span>{article.readingTime}</span>
            <time dateTime={article.publishedAt}>{article.publishedAt}</time>
          </div>
          <h1>{article.title}</h1>
          <p className={styles.summary}>{article.summary}</p>
          {article.tags.length > 0 ? (
            <div className={styles.tags} aria-label="文章标签">
              {article.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          ) : null}
        </header>
        <div className={styles.content}>
          <MDXRemote source={article.content} />
        </div>
      </article>
      {relatedArticles.length > 0 ? (
        <section className={styles.related}>
          <h2>继续阅读</h2>
          <div className="cardGrid">
            {relatedArticles.map((relatedArticle) => (
              <ArticleCard article={relatedArticle} key={relatedArticle.slug} />
            ))}
          </div>
        </section>
      ) : null}
    </main>
  );
}
