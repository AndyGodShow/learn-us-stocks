import Link from "next/link";
import type { Master } from "@/lib/masters";
import styles from "./MasterCard.module.css";

type MasterCardProps = {
  master: Master;
};

export function MasterCard({ master }: MasterCardProps) {
  return (
    <Link className={styles.card} href={`/masters/${master.slug}`}>
      <div className={styles.heading}>
        <p>{master.chineseName}</p>
        <span>{master.name}</span>
      </div>
      <h2>{master.title}</h2>
      <p className={styles.summary}>{master.summary}</p>
      <div className={styles.tags} aria-label={`${master.chineseName} 核心主题`}>
        {master.bestKnownFor.map((idea) => (
          <span key={idea}>{idea}</span>
        ))}
      </div>
      <div className={styles.learning}>
        <span>适合学习</span>
        <p>{master.learningValue}</p>
      </div>
    </Link>
  );
}
