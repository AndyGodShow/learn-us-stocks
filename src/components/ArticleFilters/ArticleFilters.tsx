"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import type { ArticleSearchParams } from "@/lib/articles";
import styles from "./ArticleFilters.module.css";

type ArticleFiltersProps = {
  categories: string[];
  difficulties: string[];
  tags: string[];
  initialFilters: ArticleSearchParams;
  resultCount: number;
};

function buildSearchPath(filters: ArticleSearchParams): string {
  const params = new URLSearchParams();

  Object.entries(filters).forEach(([key, value]) => {
    if (value) {
      params.set(key, value);
    }
  });

  const queryString = params.toString();
  return queryString ? `/articles?${queryString}` : "/articles";
}

export function ArticleFilters({
  categories,
  difficulties,
  tags,
  initialFilters,
  resultCount,
}: ArticleFiltersProps) {
  const router = useRouter();
  const [filters, setFilters] = useState<ArticleSearchParams>(initialFilters);

  function updateFilter(key: keyof ArticleSearchParams, value: string) {
    setFilters((current) => ({
      ...current,
      [key]: value || undefined,
    }));
  }

  function applyFilters() {
    router.push(buildSearchPath(filters));
  }

  function resetFilters() {
    setFilters({});
    router.push("/articles");
  }

  return (
    <section className={styles.filters} aria-label="文章筛选">
      <div className={styles.searchRow}>
        <label className={styles.searchField}>
          <span>搜索</span>
          <input
            type="search"
            value={filters.query ?? ""}
            onChange={(event) => updateFilter("query", event.target.value)}
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                applyFilters();
              }
            }}
            placeholder="标题、摘要、分类、标签或正文关键词"
          />
        </label>
        <button className={styles.primaryButton} type="button" onClick={applyFilters}>
          搜索
        </button>
        <button className={styles.secondaryButton} type="button" onClick={resetFilters}>
          重置
        </button>
      </div>

      <div className={styles.selectRow}>
        <label>
          <span>分类</span>
          <select value={filters.category ?? ""} onChange={(event) => updateFilter("category", event.target.value)}>
            <option value="">全部分类</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </label>
        <label>
          <span>难度</span>
          <select
            value={filters.difficulty ?? ""}
            onChange={(event) => updateFilter("difficulty", event.target.value)}
          >
            <option value="">全部难度</option>
            {difficulties.map((difficulty) => (
              <option key={difficulty} value={difficulty}>
                {difficulty}
              </option>
            ))}
          </select>
        </label>
        <label>
          <span>标签</span>
          <select value={filters.tag ?? ""} onChange={(event) => updateFilter("tag", event.target.value)}>
            <option value="">全部标签</option>
            {tags.map((tag) => (
              <option key={tag} value={tag}>
                {tag}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div className={styles.resultCount}>当前筛选出 {resultCount} 篇文章</div>
    </section>
  );
}
