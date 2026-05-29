import Link from "next/link";
import { ArticleCard } from "@/components/ArticleCard/ArticleCard";
import { getAllArticles, getArticleCategories } from "@/lib/articles";
import styles from "./page.module.css";

export const metadata = {
  title: "从零学习美股",
  description: "用第一性原理理解市场、财报、估值、宏观和交易复盘。面向从零开始学习美股的中文用户，不构成投资建议。",
};

const entries = [
  { href: "/learn", title: "学习路线", description: "按市场、财报、估值、宏观、行业和复盘逐步推进。", label: "Path" },
  { href: "/articles", title: "文章库", description: "用短文章建立可复用的基础概念和分析框架。", label: "Library" },
  { href: "/industries", title: "行业地图", description: "从商业模式、产业链、关键指标和估值逻辑理解不同美股板块。", label: "Industries" },
  { href: "/masters", title: "人物地图", description: "拆解经典投资人物的思想框架、适用边界和常见误读。", label: "Masters" },
  { href: "/glossary", title: "术语表", description: "快速对照财报、研报和公司公告里的核心英文指标。", label: "Terms" },
  { href: "/cases", title: "公司案例", description: "从真实公司出发练习商业模式、财报和估值分析。", label: "Cases" },
  { href: "/reviews", title: "交易复盘", description: "使用模板记录假设、执行、错误和下一步改进。", label: "Review" },
  { href: "/tools", title: "工具箱", description: "本地计算盈亏、仓位和市值，不接外部行情接口。", label: "Tools" },
];

export default function Home() {
  const articles = getAllArticles();
  const categoryCount = getArticleCategories().length;
  const stats = [
    { value: articles.length, label: "篇文章" },
    { value: categoryCount, label: "个分类" },
    { value: "MDX", label: "知识库" },
    { value: "Search", label: "搜索筛选" },
  ];

  return (
    <main>
      <section className={styles.hero}>
        <div>
          <p className={styles.kicker}>Research Library</p>
          <h1>从零学习美股</h1>
          <p>用第一性原理理解市场、财报、估值、宏观和交易复盘。</p>
          <div className={styles.actions}>
            <Link href="/learn">开始学习路线</Link>
            <Link href="/articles">浏览文章库</Link>
          </div>
        </div>
        <div className={styles.panel}>
          <span>知识库状态</span>
          <strong>静态内容 + 本地 MDX</strong>
          <div className={styles.stats}>
            {stats.map((item) => (
              <div key={item.label}>
                <b>{item.value}</b>
                <small>{item.label}</small>
              </div>
            ))}
          </div>
          <p>专注学习路径、文章、术语、案例、复盘和简单工具，不提供实时行情。</p>
        </div>
      </section>

      <section className={styles.entries} aria-label="核心入口">
        {entries.map((entry) => (
          <Link className={styles.entry} href={entry.href} key={entry.href}>
            <span>{entry.label}</span>
            <h2>{entry.title}</h2>
            <p>{entry.description}</p>
          </Link>
        ))}
      </section>

      <h2 className="sectionTitle">推荐起点</h2>
      <section className="cardGrid">
        {articles.slice(0, 3).map((article) => (
          <ArticleCard article={article} key={article.slug} />
        ))}
      </section>
    </main>
  );
}
