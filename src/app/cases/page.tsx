import { CaseStudyCard } from "@/components/CaseStudyCard/CaseStudyCard";
import { caseStudies } from "@/lib/cases";
import styles from "./page.module.css";

export const metadata = {
  title: "公司案例 | 从零学习美股",
  description: "用真实公司拆解商业模式、财务变量、估值逻辑和常见误区。所有案例仅作学习样本，不构成投资建议。",
};

export default function CasesPage() {
  return (
    <main>
      <section className="pageIntro">
        <h1>公司案例训练场</h1>
        <p>用真实公司拆解商业模式、财务变量、估值逻辑和常见误区。</p>
      </section>
      <section className={styles.trainingNote}>
        <p>
          这些案例不是买卖建议，也不提供具体价格判断或评级。每张卡片都围绕一条训练链条：
          业务变化如何进入财务变量，财务变量如何影响估值预期，以及什么风险会让原有分析失效。
        </p>
      </section>
      <section className={styles.caseGrid}>
        {caseStudies.map((study) => (
          <CaseStudyCard study={study} key={study.ticker} />
        ))}
      </section>
    </main>
  );
}
