import Link from "next/link";
import type { Industry } from "@/lib/industries";
import styles from "./IndustryCard.module.css";

type IndustryCardProps = {
  industry: Industry;
};

export function IndustryCard({ industry }: IndustryCardProps) {
  return (
    <article className={styles.card}>
      <div className={styles.heading}>
        <div>
          <span>{industry.englishName}</span>
          <h2>{industry.name}</h2>
        </div>
        <Link className={styles.detailLink} href={`/industries/${industry.slug}`}>
          查看地图
        </Link>
      </div>
      <p className={styles.summary}>{industry.summary}</p>
      <div className={styles.block}>
        <strong>关键指标</strong>
        <div className={styles.tags}>
          {industry.keyMetrics.slice(0, 5).map((metric) => (
            <span key={metric}>{metric}</span>
          ))}
        </div>
      </div>
      <div className={styles.block}>
        <strong>代表公司</strong>
        <p>{industry.representativeCompanies.map((company) => `${company.name} (${company.ticker})`).join("、")}</p>
      </div>
      <div className={styles.learning}>
        <strong>学习价值</strong>
        <p>{industry.learningValue}</p>
      </div>
    </article>
  );
}
