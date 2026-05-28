import Link from "next/link";
import { notFound } from "next/navigation";
import { getArticleBySlug } from "@/lib/articles";
import { getCaseStudyByTicker } from "@/lib/cases";
import { getIndustryBySlug, getIndustrySlugs } from "@/lib/industries";
import styles from "./page.module.css";

type IndustryPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return getIndustrySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: IndustryPageProps) {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);

  if (!industry) {
    return {
      title: "行业未找到",
    };
  }

  return {
    title: `${industry.name} | 行业地图`,
    description: industry.summary,
  };
}

export default async function IndustryPage({ params }: IndustryPageProps) {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);

  if (!industry) {
    notFound();
  }

  const relatedArticles = industry.relatedArticles
    .map((articleSlug) => getArticleBySlug(articleSlug))
    .filter((article) => article !== undefined);
  const relatedCases = industry.relatedCases
    .map((ticker) => getCaseStudyByTicker(ticker))
    .filter((study) => study !== undefined);

  return (
    <main>
      <div className={styles.navRow}>
        <Link className={styles.backLink} href="/industries">
          返回行业地图
        </Link>
      </div>

      <section className={styles.hero}>
        <p>{industry.englishName}</p>
        <h1>{industry.name}</h1>
        <span>{industry.summary}</span>
      </section>

      <section className={styles.overview}>
        <article>
          <h2>商业模式</h2>
          <p>{industry.businessModel}</p>
        </article>
        <article>
          <h2>谁付钱</h2>
          <p>{industry.customer}</p>
        </article>
        <article>
          <h2>收入模式</h2>
          <p>{industry.revenueModel}</p>
        </article>
      </section>

      <section className={styles.sections}>
        <ListSection title="成本结构" items={industry.costStructure} />
        <ListSection title="产业链位置" items={industry.valueChain} />
        <ListSection title="关键指标" items={industry.keyMetrics} />
        <ListSection title="周期驱动因素" items={industry.cycleDrivers} />
        <ListSection title="常用估值方法" items={industry.valuationMethods} />
        <ListSection title="常见误读" items={industry.commonMisreadings} />
        <ListSection title="主要风险" items={industry.risks} />
      </section>

      <section className={styles.companySection}>
        <h2>代表公司及其角色</h2>
        <div className={styles.companyGrid}>
          {industry.representativeCompanies.map((company) => (
            <article className={styles.companyCard} key={company.ticker}>
              <strong>{company.name}</strong>
              <span>{company.ticker}</span>
              <p>{company.role}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.learningSection}>
        <h2>学习价值</h2>
        <p>{industry.learningValue}</p>
      </section>

      <section className={styles.related}>
        <div>
          <h2>关联文章</h2>
          {relatedArticles.length > 0 ? (
            <div className={styles.linkList}>
              {relatedArticles.map((article) => (
                <Link href={`/articles/${article.slug}`} key={article.slug}>
                  {article.title}
                </Link>
              ))}
            </div>
          ) : (
            <p>暂无关联文章。</p>
          )}
        </div>
        <div>
          <h2>关联公司案例</h2>
          {relatedCases.length > 0 ? (
            <div className={styles.linkList}>
              {relatedCases.map((study) => (
                <Link href={`/cases/${study.ticker.toLowerCase()}`} key={study.ticker}>
                  {study.company} ({study.ticker})
                </Link>
              ))}
            </div>
          ) : (
            <p>暂无关联公司案例。</p>
          )}
        </div>
      </section>

      <p className={styles.disclaimer}>本页用于行业学习和研究训练，不构成投资建议。</p>
    </main>
  );
}

function ListSection({ title, items }: { title: string; items: string[] }) {
  return (
    <section className={styles.listSection}>
      <h2>{title}</h2>
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  );
}
