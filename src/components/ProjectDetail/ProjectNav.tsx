import { Link } from 'react-router-dom';
import { PROJECT_ORDER } from '../../data/content';
import { ArrowRightIcon } from '../icons/Icons';
import styles from './ProjectNav.module.css';

export default function ProjectNav({ current }: { current: string }) {
  const index = PROJECT_ORDER.findIndex((project) => project.slug === current);
  const prev = PROJECT_ORDER[(index - 1 + PROJECT_ORDER.length) % PROJECT_ORDER.length];
  const next = PROJECT_ORDER[(index + 1) % PROJECT_ORDER.length];

  return (
    <div className={styles.nav}>
      <Link to={`/work/${prev.slug}`} className={`${styles.link} ${styles.prev}`}>
        <ArrowRightIcon className={styles.arrow} />
        <div>
          <p className={styles.label}>Previous Project</p>
          <p className={styles.title}>{prev.title}</p>
        </div>
      </Link>
      <Link to={`/work/${next.slug}`} className={`${styles.link} ${styles.next}`}>
        <div>
          <p className={styles.label}>Next Project</p>
          <p className={styles.title}>{next.title}</p>
        </div>
        <ArrowRightIcon className={styles.arrow} />
      </Link>
    </div>
  );
}
