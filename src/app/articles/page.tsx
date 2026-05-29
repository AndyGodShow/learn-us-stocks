import { ArticleFilters } from "@/components/ArticleFilters/ArticleFilters";
import { ArticleCard } from "@/components/ArticleCard/ArticleCard";
import {
  getArticleCategories,
  getArticleDifficulties,
  searchArticles,
  type ArticleSort,
  type ArticleSearchParams,
} from "@/lib/articles";

export const metadata = {
  title: "文章库 | 从零学习美股",
  description: "用短篇内容拆解美股学习中的关键概念。按市场基础、财报、估值、宏观、行业研究和交易复盘分类。",
};

type ArticlesPageProps = {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

function readParam(searchParams: Record<string, string | string[] | undefined>, key: keyof ArticleSearchParams) {
  const value = searchParams[key];
  return Array.isArray(value) ? value[0] : value;
}

function readSort(searchParams: Record<string, string | string[] | undefined>): ArticleSort | undefined {
  const sort = readParam(searchParams, "sort");

  return sort === "path" || sort === "latest" || sort === "recommended" ? sort : undefined;
}

export default async function ArticlesPage({ searchParams }: ArticlesPageProps) {
  const resolvedSearchParams = await searchParams;
  const filters: ArticleSearchParams = {
    query: readParam(resolvedSearchParams, "query"),
    category: readParam(resolvedSearchParams, "category"),
    difficulty: readParam(resolvedSearchParams, "difficulty"),
    sort: readSort(resolvedSearchParams),
  };
  const articles = searchArticles(filters);

  return (
    <main>
      <section className="pageIntro">
        <h1>文章</h1>
        <p>用短篇内容拆解美股学习中的关键概念。默认先入门，再中级，最后进阶。</p>
      </section>
      <ArticleFilters
        categories={getArticleCategories()}
        difficulties={getArticleDifficulties()}
        initialFilters={filters}
        resultCount={articles.length}
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
          <p>可以减少关键词，或先清空分类和难度筛选。</p>
        </section>
      )}
    </main>
  );
}
