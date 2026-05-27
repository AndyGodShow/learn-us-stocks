import { CaseStudyCard } from "@/components/CaseStudyCard/CaseStudyCard";
import { caseStudies } from "@/lib/cases";

export default function CasesPage() {
  return (
    <main>
      <section className="pageIntro">
        <h1>公司研究案例</h1>
        <p>用典型公司练习不同类型的研究问题：成长、周期、现金流、竞争格局和估值预期。</p>
      </section>
      <section className="cardGrid">
        {caseStudies.map((study) => (
          <CaseStudyCard study={study} key={study.ticker} />
        ))}
      </section>
    </main>
  );
}
