"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./SiteHeader.module.css";

type NavLinkProps = {
  href: string;
  label: string;
};

export function NavLink({ href, label }: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href || (href !== "/" && pathname.startsWith(href));

  return (
    <Link
      href={href}
      aria-current={isActive ? "page" : undefined}
      className={isActive ? styles.navLinkActive : undefined}
    >
      {label}
    </Link>
  );
}
