import { ReviewCard } from "@/components/ReviewCard/ReviewCard";
import { tradeReviews } from "@/lib/reviews";

export const metadata = {
  title: "交易复盘 | 从零学习美股",
  description: "展示复盘模板和记录方式，训练计划、执行和反馈循环。不构成实际交易建议。",
};

export default function ReviewsPage() {
  return (
    <main>
      <section className="pageIntro">
        <h1>交易复盘</h1>
        <p>这里展示的是复盘模板和记录方式，不构成实际交易建议。重点是训练计划、执行和反馈循环。</p>
      </section>
      <section className="cardGrid">
        {tradeReviews.map((review) => (
          <ReviewCard review={review} key={review.symbol} />
        ))}
      </section>
    </main>
  );
}
