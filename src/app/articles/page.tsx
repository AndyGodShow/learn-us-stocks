import { ArticleCard } from "@/components/ArticleCard/ArticleCard";
import { getAllArticles } from "@/lib/articles";

export default function ArticlesPage() {
  const articles = getAllArticles();

  return (
    <main>
      <section className="pageIntro">
        <h1>文章</h1>
        <p>用短篇内容拆解美股学习中的关键概念。每篇文章都对应一个可复用的分析问题。</p>
      </section>
      <section className="cardGrid">
        {articles.map((article) => (
          <ArticleCard article={article} key={article.slug} />
        ))}
      </section>
    </main>
  );
}
