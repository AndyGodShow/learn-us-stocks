import { MasterCard } from "@/components/MasterCard/MasterCard";
import { getAllMasters } from "@/lib/masters";
import styles from "./page.module.css";

export const metadata = {
  title: "投资人物思想地图 | 从零学习美股",
  description: "把经典投资人物的思想拆成可学习、可比较、可迁移的框架。",
};

export default function MastersPage() {
  const masters = getAllMasters();

  return (
    <main>
      <section className="pageIntro">
        <h1>投资人物思想地图</h1>
        <p>不是语录合集，而是把经典投资思想拆成可学习、可比较、可迁移的框架。</p>
      </section>
      <section className={styles.guide} aria-label="板块说明">
        <div>
          <span>研究边界</span>
          <p>本板块基于公开资料做原创提炼，重点是训练投资分析能力，不提供买卖、目标价或仓位建议。</p>
        </div>
        <div>
          <span>学习方法</span>
          <p>先比较人物的核心问题，再进入详情页看思想框架、教学案例、误读、局限性和来源说明。</p>
        </div>
      </section>
      <section className="cardGrid" aria-label="投资人物列表">
        {masters.map((master) => (
          <MasterCard key={master.slug} master={master} />
        ))}
      </section>
    </main>
  );
}
