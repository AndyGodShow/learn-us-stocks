import Link from "next/link";
import { ArticleCard } from "@/components/ArticleCard/ArticleCard";
import { getAllArticles } from "@/lib/articles";
import styles from "./page.module.css";

const entries = [
  { href: "/learn", title: "学习路线", description: "按市场、财报、估值、宏观、行业和复盘逐步推进。" },
  { href: "/articles", title: "最新文章", description: "用短文章建立可复用的基础概念和分析框架。" },
  { href: "/cases", title: "公司研究案例", description: "从真实公司出发练习商业模式、财报和估值分析。" },
  { href: "/reviews", title: "交易复盘", description: "使用模板记录假设、执行、错误和下一步改进。" },
  { href: "/tools", title: "工具箱", description: "本地计算盈亏、仓位和市值，不接外部行情接口。" },
];

export default function Home() {
  const articles = getAllArticles();

  return (
    <main>
      <section className={styles.hero}>
        <div>
          <p className={styles.kicker}>Research Library</p>
          <h1>从零学习美股</h1>
          <p>用第一性原理学习市场、公司、估值和交易</p>
        </div>
        <div className={styles.panel}>
          <span>第一版范围</span>
          <strong>静态内容 + 本地数据</strong>
          <p>专注学习路径、文章、术语、案例、复盘和简单工具，不提供实时行情。</p>
        </div>
      </section>

      <section className={styles.entries} aria-label="核心入口">
        {entries.map((entry) => (
          <Link className={styles.entry} href={entry.href} key={entry.href}>
            <h2>{entry.title}</h2>
            <p>{entry.description}</p>
          </Link>
        ))}
      </section>

      <h2 className="sectionTitle">最新文章</h2>
      <section className="cardGrid">
        {articles.slice(0, 3).map((article) => (
          <ArticleCard article={article} key={article.slug} />
        ))}
      </section>
    </main>
  );
}
