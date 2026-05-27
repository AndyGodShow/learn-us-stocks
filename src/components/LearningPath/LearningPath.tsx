import type { LearningStage } from "@/lib/learningPath";
import styles from "./LearningPath.module.css";

type LearningPathProps = {
  stages: LearningStage[];
};

export function LearningPath({ stages }: LearningPathProps) {
  return (
    <ol className={styles.path}>
      {stages.map((stage) => (
        <li className={styles.stage} key={stage.id}>
          <div className={styles.index}>{String(stage.id).padStart(2, "0")}</div>
          <div>
            <h2>{stage.title}</h2>
            <p>{stage.description}</p>
            <div className={styles.topics}>
              {stage.topics.map((topic) => (
                <span key={topic}>{topic}</span>
              ))}
            </div>
          </div>
        </li>
      ))}
    </ol>
  );
}
