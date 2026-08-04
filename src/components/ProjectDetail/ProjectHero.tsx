import type { ReactNode } from 'react';
import styles from './ProjectDetail.module.css';

interface ProjectHeroProps {
  year: string;
  title: ReactNode;
  subtitle: string;
  summary: string;
}

export default function ProjectHero({ year, title, subtitle, summary }: ProjectHeroProps) {
  return (
    <div className={styles.hero}>
      <p className={styles.year}>{year}</p>
      <div className={styles.overview}>
        <div className={styles.titleBlock}>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.subtitle}>{subtitle}</p>
        </div>
        <p className={styles.summary}>{summary}</p>
      </div>
    </div>
  );
}
