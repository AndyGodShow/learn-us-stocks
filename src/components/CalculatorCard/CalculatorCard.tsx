"use client";

import { useMemo, useState } from "react";
import styles from "./CalculatorCard.module.css";

type CalculatorKind = "profitLoss" | "position" | "marketCap";

type CalculatorCardProps = {
  kind: CalculatorKind;
  title: string;
  description: string;
};

function toNumber(value: string): number {
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : 0;
}

function formatNumber(value: number): string {
  return new Intl.NumberFormat("zh-CN", {
    maximumFractionDigits: 2,
  }).format(value);
}

export function CalculatorCard({ kind, title, description }: CalculatorCardProps) {
  const [first, setFirst] = useState("");
  const [second, setSecond] = useState("");
  const [third, setThird] = useState("");

  const result = useMemo(() => {
    const a = toNumber(first);
    const b = toNumber(second);
    const c = toNumber(third);

    if (kind === "profitLoss") {
      const profit = (b - a) * c;
      const percent = a > 0 ? ((b - a) / a) * 100 : 0;
      return `盈亏 ${formatNumber(profit)}，收益率 ${formatNumber(percent)}%`;
    }

    if (kind === "position") {
      const riskAmount = a * (b / 100);
      const shares = c > 0 ? riskAmount / c : 0;
      return `可承受亏损 ${formatNumber(riskAmount)}，参考股数 ${formatNumber(shares)}`;
    }

    return `参考市值 ${formatNumber(a * b)}，约 ${formatNumber((a * b) / 100000000)} 亿美元`;
  }, [first, second, third, kind]);

  const labels =
    kind === "profitLoss"
      ? ["买入价", "卖出价", "股数"]
      : kind === "position"
        ? ["账户资金", "单笔风险 %", "每股风险"]
        : ["股价", "总股本", "预留"];

  return (
    <section className={styles.card}>
      <div className={styles.header}>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <div className={styles.fields}>
        <label>
          <span>{labels[0]}</span>
          <input inputMode="decimal" value={first} onChange={(event) => setFirst(event.target.value)} />
        </label>
        <label>
          <span>{labels[1]}</span>
          <input inputMode="decimal" value={second} onChange={(event) => setSecond(event.target.value)} />
        </label>
        {kind !== "marketCap" ? (
          <label>
            <span>{labels[2]}</span>
            <input inputMode="decimal" value={third} onChange={(event) => setThird(event.target.value)} />
          </label>
        ) : null}
      </div>
      <output className={styles.result}>{result}</output>
    </section>
  );
}
