import { ArticleFilters } from "@/components/ArticleFilters/ArticleFilters";
import { ArticleCard } from "@/components/ArticleCard/ArticleCard";
import {
  getArticleCategories,
  getArticleDifficulties,
  getArticleTags,
  searchArticles,
  type ArticleSearchParams,
} from "@/lib/articles";

type ArticlesPageProps = {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

function readParam(searchParams: Record<string, string | string[] | undefined>, key: keyof ArticleSearchParams) {
  const value = searchParams[key];
  return Array.isArray(value) ? value[0] : value;
}

export default async function ArticlesPage({ searchParams }: ArticlesPageProps) {
  const resolvedSearchParams = await searchParams;
  const filters: ArticleSearchParams = {
    query: readParam(resolvedSearchParams, "query"),
    category: readParam(resolvedSearchParams, "category"),
    difficulty: readParam(resolvedSearchParams, "difficulty"),
    tag: readParam(resolvedSearchParams, "tag"),
  };
  const articles = searchArticles(filters);

  return (
    <main>
      <section className="pageIntro">
        <h1>文章</h1>
        <p>用短篇内容拆解美股学习中的关键概念。每篇文章都对应一个可复用的分析问题。</p>
      </section>
      <ArticleFilters
        categories={getArticleCategories()}
        difficulties={getArticleDifficulties()}
        initialFilters={filters}
        resultCount={articles.length}
        tags={getArticleTags()}
      />
      {articles.length > 0 ? (
        <section className="cardGrid">
          {articles.map((article) => (
            <ArticleCard article={article} key={article.slug} />
          ))}
        </section>
      ) : (
        <section className="pageIntro">
          <h2>没有找到匹配文章</h2>
          <p>可以减少关键词，或先清空分类、难度和标签筛选。</p>
        </section>
      )}
    </main>
  );
}
