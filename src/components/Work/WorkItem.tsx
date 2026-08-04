import { Fragment } from 'react';
import type { WorkItem as WorkItemType } from '../../data/content';
import { ArrowRightIcon } from '../icons/Icons';
import styles from './Work.module.css';

export default function WorkItem({ item }: { item: WorkItemType }) {
  return (
    <a href={item.href} className={styles.workItem}>
      <img className={styles.bg} src={item.bgSrc} alt={item.bgAlt} />
      <div className={styles.workInner}>
        <div className={styles.workDesc}>
          <div className={styles.logoRow}>
            {item.logos.map((logo, i) => (
              <Fragment key={logo.src}>
                {i > 0 && item.withDivider && <div className={styles.logoDivider} />}
                <img
                  src={logo.src}
                  alt={logo.alt}
                  style={{ height: logo.height, width: 'auto', objectFit: logo.objectFit }}
                />
              </Fragment>
            ))}
          </div>
          <div className={styles.viewProject}>
            <span>
              View Project
              <ArrowRightIcon />
            </span>
          </div>
        </div>
      </div>
    </a>
  );
}
