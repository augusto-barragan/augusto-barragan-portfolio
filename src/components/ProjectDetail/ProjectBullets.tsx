import styles from './ProjectDetail.module.css';

export interface Bullet {
  label: string;
  value: string | string[];
}

export default function ProjectBullets({ items }: { items: Bullet[] }) {
  return (
    <div className={styles.bullets}>
      {items.map((item) => (
        <div key={item.label} className={styles.bulletItem}>
          <p className={styles.bulletLabel}>{item.label}</p>
          <div className={styles.bulletValue}>
            {Array.isArray(item.value) ? (
              item.value.map((line) => <p key={line}>{line}</p>)
            ) : (
              <p>{item.value}</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
