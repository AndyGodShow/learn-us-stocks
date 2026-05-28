import Link from "next/link";
import styles from "./SiteHeader.module.css";

const navItems = [
  { href: "/learn", label: "学习路线" },
  { href: "/articles", label: "文章" },
  { href: "/industries", label: "行业地图" },
  { href: "/masters", label: "人物" },
  { href: "/glossary", label: "术语表" },
  { href: "/cases", label: "案例" },
  { href: "/reviews", label: "复盘" },
  { href: "/tools", label: "工具箱" },
];

export function SiteHeader() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link className={styles.brand} href="/">
          从零学习美股
        </Link>
        <nav className={styles.nav} aria-label="主导航">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
