import { IndustryCard } from "@/components/IndustryCard/IndustryCard";
import { getAllIndustries } from "@/lib/industries";
import styles from "./page.module.css";

export default function IndustriesPage() {
  const industries = getAllIndustries();

  return (
    <main>
      <section className="pageIntro">
        <h1>行业地图</h1>
        <p>从商业模式、产业链、关键指标和估值逻辑理解不同美股板块。</p>
      </section>
      <section className={styles.note}>
        <p>
          这里不做行情跟踪、板块轮动或买卖判断。每个行业都用同一套研究框架拆解：谁付钱、钱从哪里来、成本在哪里、周期怎么形成，以及估值为什么不能套同一把尺。
        </p>
      </section>
      <section className={styles.grid} aria-label="行业列表">
        {industries.map((industry) => (
          <IndustryCard industry={industry} key={industry.slug} />
        ))}
      </section>
    </main>
  );
}
