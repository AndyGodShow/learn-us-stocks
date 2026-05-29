import { CalculatorCard } from "@/components/CalculatorCard/CalculatorCard";

export const metadata = {
  title: "工具箱 | 从零学习美股",
  description: "本地计算盈亏、仓位和市值，不连接后端，不接实时行情接口。计算结果仅供学习和复盘参考。",
};

const calculators = [
  {
    kind: "profitLoss",
    title: "盈亏计算器",
    description: "输入买入价、卖出价和股数，估算本地盈亏和收益率。",
  },
  {
    kind: "position",
    title: "仓位计算器",
    description: "按账户资金、单笔风险比例和每股风险，估算参考股数。",
    explanation: "账户资金 × 单笔风险比例 ÷ 每股风险 = 参考股数",
  },
  {
    kind: "marketCap",
    title: "市值计算器",
    description: "输入股价和总股本，估算公司参考市值。",
    explanation: "股价 × 总股本 = 参考市值",
  },
] as const;

export default function ToolsPage() {
  return (
    <main>
      <section className="pageIntro">
        <h1>工具箱</h1>
        <p>三个计算器都只在浏览器本地计算，不连接后端，也不接任何实时行情接口。</p>
        <p>所有计算结果仅用于学习和复盘，不构成投资建议。</p>
      </section>
      <section className="cardGrid">
        {calculators.map((calculator) => (
          <CalculatorCard
            description={calculator.description}
            explanation={"explanation" in calculator ? calculator.explanation : undefined}
            kind={calculator.kind}
            key={calculator.kind}
            title={calculator.title}
          />
        ))}
      </section>
    </main>
  );
}
