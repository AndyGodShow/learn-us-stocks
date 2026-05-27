import type { GlossaryTerm } from "@/lib/glossary";
import styles from "./GlossaryList.module.css";

type GlossaryListProps = {
  terms: GlossaryTerm[];
};

export function GlossaryList({ terms }: GlossaryListProps) {
  return (
    <div className={styles.list}>
      {terms.map((item) => (
        <article className={styles.term} key={item.term}>
          <div>
            <h2>{item.term}</h2>
            <span>{item.name}</span>
          </div>
          <p>{item.description}</p>
        </article>
      ))}
    </div>
  );
}
