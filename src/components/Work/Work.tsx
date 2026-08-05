import { WORK_ITEMS } from '../../data/content';
import WorkItem from './WorkItem';
import styles from './Work.module.css';

export default function Work() {
  return (
    <section id="work">
      <div className={styles.workTitleWrap}>
        <h2 className={styles.workTitle}>
          recent <span className={styles.accent}>Work</span>
        </h2>
      </div>

      {WORK_ITEMS.map((item, index) => (
        <WorkItem key={item.bgAlt} item={item} index={index} />
      ))}
    </section>
  );
}
