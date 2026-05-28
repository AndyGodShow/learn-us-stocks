import Link from "next/link";
import { notFound } from "next/navigation";
import { caseStudies, getCaseStudyByTicker } from "@/lib/cases";
import styles from "./page.module.css";

type CaseDetailPageProps = {
  params: Promise<{
    ticker: string;
  }>;
};

export function generateStaticParams() {
  return caseStudies.map((study) => ({
    ticker: study.ticker.toLowerCase(),
  }));
}

export async function generateMetadata({ params }: CaseDetailPageProps) {
  const { ticker } = await params;
  const study = getCaseStudyByTicker(ticker);

  return {
    title: study ? `${study.company} 案例拆解 | 从零学习美股` : "案例未找到",
    description: study?.summary,
  };
}

export default async function CaseDetailPage({ params }: CaseDetailPageProps) {
  const { ticker } = await params;
  const study = getCaseStudyByTicker(ticker);

  if (!study) {
    notFound();
  }

  return (
    <main className={styles.page}>
      <div className={styles.navRow}>
        <Link className={styles.backLink} href="/cases">
          ← 返回案例
        </Link>
      </div>

      <article className={styles.article}>
        <header className={styles.header}>
          <div className={styles.meta}>
            <span>{study.ticker}</span>
            <span>{study.industry}</span>
          </div>
          <h1>{study.company} 案例拆解</h1>
          <p className={styles.focus}>{study.focus}</p>
          <p className={styles.summary}>{study.summary}</p>
          <div className={styles.tags} aria-label="学习主题">
            {study.learningTopics.map((topic) => (
              <span key={topic}>{topic}</span>
            ))}
          </div>
        </header>

        <div className={styles.content}>
          <section>
            <h2>商业模式</h2>
            <p>{study.businessModel}</p>
          </section>

          <CaseList title="关键变量" items={study.keyVariables} />
          <CaseList title="分析路径" items={study.analysisPath} ordered />
          <CaseList title="常见误读" items={study.commonMisreadings} />
          <CaseList title="风险和失效条件" items={study.risks} />

          <section>
            <h2>关联文章</h2>
            <div className={styles.relatedLinks}>
              {study.relatedArticles.map((slug) => (
                <Link href={`/articles/${slug}`} key={slug}>
                  {slug}
                </Link>
              ))}
            </div>
          </section>
        </div>
      </article>
    </main>
  );
}

type CaseListProps = {
  title: string;
  items: string[];
  ordered?: boolean;
};

function CaseList({ title, items, ordered = false }: CaseListProps) {
  const ListTag: "ol" | "ul" = ordered ? "ol" : "ul";

  return (
    <section>
      <h2>{title}</h2>
      <ListTag>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ListTag>
    </section>
  );
}
