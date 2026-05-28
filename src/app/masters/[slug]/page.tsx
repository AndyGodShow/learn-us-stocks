import Link from "next/link";
import { notFound } from "next/navigation";
import { getArticleBySlug, type Article } from "@/lib/articles";
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

function isArticle(article: Article | undefined): article is Article {
  return article !== undefined;
}

export default async function MasterDetailPage({ params }: MasterDetailPageProps) {
  const { slug } = await params;
  const master = getMasterBySlug(slug);

  if (!master) {
    notFound();
  }

  const relatedArticles = master.relatedArticles.map((articleSlug) => ({
    slug: articleSlug,
    article: getArticleBySlug(articleSlug),
  }));
  const linkedArticles = relatedArticles.filter((item): item is { slug: string; article: Article } => isArticle(item.article));
  const missingArticleSlugs = relatedArticles.filter((item) => !item.article).map((item) => item.slug);

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
          <span className={styles.category}>{master.category}</span>
          <p className={styles.summary}>{master.summary}</p>
          <div className={styles.tags} aria-label="核心主题">
            {master.bestKnownFor.map((idea) => (
              <span key={idea}>{idea}</span>
            ))}
          </div>
        </header>

        <p className={styles.notice}>本页用于学习投资框架和研究方法，不构成投资建议，也不包含买卖、目标价或仓位建议。</p>

        <section className={styles.section}>
          <h2>这个人主要解决什么问题</h2>
          <p>{master.problemStatement}</p>
        </section>

        <section className={styles.section}>
          <h2>一句话思想核心</h2>
          <p>{master.philosophy}</p>
        </section>

        <ListSection title="核心思想" items={master.coreIdeas} />

        <section className={styles.section}>
          <h2>最值得学习的地方</h2>
          <p>{master.learningValue}</p>
        </section>

        <ListSection title="放到美股学习里怎么用" items={master.howToUse} />

        <section className={styles.section}>
          <h2>关键学习点</h2>
          <div className={styles.lessonGrid}>
            {master.keyLessons.map((lesson) => (
              <div className={styles.lessonCard} key={lesson.title}>
                <h3>{lesson.title}</h3>
                <p>{lesson.explanation}</p>
                {lesson.example ? <small>{lesson.example}</small> : null}
              </div>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <h2>教学案例</h2>
          <div className={styles.caseBox}>
            <h3>{master.teachingCase.title}</h3>
            <p>{master.teachingCase.setup}</p>
            <strong>{master.teachingCase.takeaway}</strong>
          </div>
        </section>

        <ListSection title="常见误读" items={master.commonMisreadings} />
        <ListSection title="适用场景" items={master.applicableScenarios} />
        <ListSection title="失效条件或局限性" items={master.limitations} />

        {linkedArticles.length > 0 || missingArticleSlugs.length > 0 ? (
          <section className={styles.section}>
            <h2>关联站内文章</h2>
            <div className={styles.articleLinks}>
              {linkedArticles.map(({ article }) => (
                <Link className={styles.articleLink} href={`/articles/${article.slug}`} key={article.slug}>
                  <span>{article.category}</span>
                  <strong>{article.title}</strong>
                </Link>
              ))}
              {missingArticleSlugs.map((articleSlug) => (
                <div className={styles.articleLink} key={articleSlug}>
                  <span>待关联</span>
                  <strong>{articleSlug}</strong>
                </div>
              ))}
            </div>
          </section>
        ) : null}

        <ListSection title="关联书籍或资料" items={master.relatedBooks} />

        <section className={styles.section}>
          <h2>参考来源说明</h2>
          <div className={styles.sourceList}>
            {master.sourceNotes.map((source) => (
              <div className={styles.sourceItem} key={`${source.title}-${source.source}`}>
                <span>{source.source}</span>
                {source.url ? (
                  <a href={source.url} target="_blank" rel="noreferrer">
                    {source.title}
                  </a>
                ) : (
                  <strong>{source.title}</strong>
                )}
                <p>{source.note}</p>
              </div>
            ))}
          </div>
        </section>
      </article>
    </main>
  );
}
