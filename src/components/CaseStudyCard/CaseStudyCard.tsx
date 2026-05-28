import Link from "next/link";
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
      <div className={styles.points} aria-label="学习主题">
        {study.learningTopics.map((point) => (
          <span key={point}>{point}</span>
        ))}
      </div>
      <Link className={styles.detailLink} href={`/cases/${study.ticker.toLowerCase()}`}>
        查看案例拆解
      </Link>
    </article>
  );
}
