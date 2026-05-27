import styles from "./SiteFooter.module.css";

export function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <span>从零学习美股</span>
        <span>静态学习资料库，不提供实时行情或投资建议。</span>
      </div>
    </footer>
  );
}
