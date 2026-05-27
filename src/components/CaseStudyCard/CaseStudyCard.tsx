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
          <h2>{study.companyName}</h2>
          <span>{study.industry}</span>
        </div>
        <strong>{study.ticker}</strong>
      </div>
      <p>{study.focus}</p>
      <div className={styles.points}>
        {study.learningPoints.map((point) => (
          <span key={point}>{point}</span>
        ))}
      </div>
    </article>
  );
}
