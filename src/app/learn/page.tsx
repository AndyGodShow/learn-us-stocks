import { LearningPath } from "@/components/LearningPath/LearningPath";
import { learningPath } from "@/lib/learningPath";

export const metadata = {
  title: "学习路线 | 从零学习美股",
  description: "从市场基础出发，逐步进入财报、估值、宏观、行业研究和交易复盘，避免一开始就被碎片信息带着走。",
};

export default function LearnPage() {
  return (
    <main>
      <section className="pageIntro">
        <h1>学习路线</h1>
        <p>从市场基础出发，逐步进入财报、估值、宏观、行业研究和交易复盘，避免一开始就被碎片信息带着走。</p>
      </section>
      <LearningPath stages={learningPath} />
    </main>
  );
}
