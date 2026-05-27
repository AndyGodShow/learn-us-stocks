import { GlossaryList } from "@/components/GlossaryList/GlossaryList";
import { glossaryTerms } from "@/lib/glossary";

export default function GlossaryPage() {
  return (
    <main>
      <section className="pageIntro">
        <h1>术语表</h1>
        <p>把常见英文指标和中文含义放在一起，方便阅读财报、研报和公司公告时快速对照。</p>
      </section>
      <GlossaryList terms={glossaryTerms} />
    </main>
  );
}
