import styles from './StatsRow.module.css';

export interface Stat {
  value: string;
  label: string;
}

export default function StatsRow({ stats }: { stats: Stat[] }) {
  return (
    <div className={styles.row}>
      {stats.map((stat) => (
        <div key={stat.label} className={styles.stat}>
          <p className={styles.value}>{stat.value}</p>
          <p className={styles.label}>{stat.label}</p>
        </div>
      ))}
    </div>
  );
}
