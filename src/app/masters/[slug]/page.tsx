import Link from "next/link";
import { notFound } from "next/navigation";
import { getArticleBySlug } from "@/lib/articles";
import { getMasterBySlug, getMasterSlugs } from "@/lib/masters";
import styles from "./page.module.css";

type MasterDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return getMasterSlugs().map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: MasterDetailPageProps) {
  const { slug } = await params;
  const master = getMasterBySlug(slug);

  return {
    title: master ? `${master.chineseName}思想地图 | 从零学习美股` : "人物未找到",
    description: master?.summary,
  };
}

function ListSection({ title, items }: { title: string; items: string[] }) {
  return (
    <section className={styles.section}>
      <h2>{title}</h2>
      <ul className={styles.list}>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  );
}

export default async function MasterDetailPage({ params }: MasterDetailPageProps) {
  const { slug } = await params;
  const master = getMasterBySlug(slug);

  if (!master) {
    notFound();
  }

  const relatedArticles = master.relatedArticles
    .map((articleSlug) => getArticleBySlug(articleSlug))
    .filter((article) => article !== undefined);

  return (
    <main className={styles.page}>
      <div className={styles.navRow}>
        <Link className={styles.backLink} href="/masters">
          ← 返回人物地图
        </Link>
      </div>
      <article>
        <header className={styles.header}>
          <p className={styles.eyebrow}>Investing Masters</p>
          <h1>
            {master.chineseName}
            <span className={styles.englishName}>{master.name}</span>
          </h1>
          <p className={styles.summary}>{master.summary}</p>
          <div className={styles.tags} aria-label="核心主题">
            {master.bestKnownFor.map((idea) => (
              <span key={idea}>{idea}</span>
            ))}
          </div>
        </header>

        <p className={styles.notice}>本页用于学习投资框架和研究方法，不构成投资建议，也不包含买卖、目标价或仓位建议。</p>

        <ListSection title="核心思想" items={master.coreIdeas} />

        <section className={styles.section}>
          <h2>最值得学习的地方</h2>
          <p>{master.learningValue}</p>
        </section>

        <ListSection title="常见误读" items={master.commonMisreadings} />
        <ListSection title="适用场景" items={master.applicableScenarios} />
        <ListSection title="失效条件或局限性" items={master.limitations} />

        {relatedArticles.length > 0 ? (
          <section className={styles.section}>
            <h2>关联站内文章</h2>
            <div className={styles.articleLinks}>
              {relatedArticles.map((article) => (
                <Link className={styles.articleLink} href={`/articles/${article.slug}`} key={article.slug}>
                  <span>{article.category}</span>
                  <strong>{article.title}</strong>
                </Link>
              ))}
            </div>
          </section>
        ) : null}

        <ListSection title="关联书籍或资料" items={master.relatedBooks} />
      </article>
    </main>
  );
}
