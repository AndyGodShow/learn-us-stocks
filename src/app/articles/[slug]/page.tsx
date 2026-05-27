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
