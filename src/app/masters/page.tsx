import { MasterCard } from "@/components/MasterCard/MasterCard";
import { getAllMasters } from "@/lib/masters";

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
      <section className="cardGrid" aria-label="投资人物列表">
        {masters.map((master) => (
          <MasterCard key={master.slug} master={master} />
        ))}
      </section>
    </main>
  );
}
