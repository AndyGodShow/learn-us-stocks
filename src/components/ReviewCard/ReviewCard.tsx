import type { TradeReview } from "@/lib/reviews";
import styles from "./ReviewCard.module.css";

type ReviewCardProps = {
  review: TradeReview;
};

export function ReviewCard({ review }: ReviewCardProps) {
  const rows = [
    ["买入理由", review.buyReason],
    ["卖出理由", review.sellReason],
    ["做对的地方", review.didWell],
    ["做错的地方", review.mistake],
    ["下次改进", review.improvement],
  ] as const;

  return (
    <article className={styles.card}>
      <div className={styles.top}>
        <h2>{review.symbol}</h2>
        <span>{review.direction}</span>
      </div>
      <dl className={styles.rows}>
        {rows.map(([label, value]) => (
          <div key={label}>
            <dt>{label}</dt>
            <dd>{value}</dd>
          </div>
        ))}
      </dl>
      <div className={styles.tags}>
        {review.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
    </article>
  );
}
