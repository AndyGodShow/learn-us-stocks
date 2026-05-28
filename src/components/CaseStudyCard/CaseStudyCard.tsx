import type { CaseStudy } from "@/lib/cases";
import styles from "./CaseStudyCard.module.css";

type CaseStudyCardProps = {
  study: CaseStudy;
};

export function CaseStudyCard({ study }: CaseStudyCardProps) {
  return (
    <article className={styles.card}>
      <div className={styles.top}>
        <div>
          <h2>{study.company}</h2>
          <span>{study.industry}</span>
        </div>
        <strong>{study.ticker}</strong>
      </div>
      <p className={styles.focus}>{study.focus}</p>
      <p className={styles.summary}>{study.summary}</p>
      <div className={styles.points} aria-label="学习主题">
        {study.learningTopics.map((point) => (
          <span key={point}>{point}</span>
        ))}
      </div>
      <div className={styles.section}>
        <h3>商业模式</h3>
        <p>{study.businessModel}</p>
      </div>
      <div className={styles.columns}>
        <ListBlock title="关键变量" items={study.keyVariables} />
        <ListBlock title="分析路径" items={study.analysisPath} ordered />
        <ListBlock title="常见误读" items={study.commonMisreadings} />
        <ListBlock title="主要风险" items={study.risks} />
      </div>
      <div className={styles.section}>
        <h3>关联文章</h3>
        <div className={styles.links}>
          {study.relatedArticles.map((slug) => (
            <a href={`/articles/${slug}`} key={slug}>
              {slug}
            </a>
          ))}
        </div>
      </div>
    </article>
  );
}

type ListBlockProps = {
  title: string;
  items: string[];
  ordered?: boolean;
};

function ListBlock({ title, items, ordered = false }: ListBlockProps) {
  const ListTag: "ol" | "ul" = ordered ? "ol" : "ul";

  return (
    <div className={styles.section}>
      <h3>{title}</h3>
      <ListTag>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ListTag>
    </div>
  );
}
