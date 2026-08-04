import { Fragment } from 'react';
import { MARQUEE_ITEMS } from '../../data/content';
import styles from './Marquee.module.css';

function MarqueeGroup({ ariaHidden }: { ariaHidden?: boolean }) {
  return (
    <div className={styles.marqueeGroup} aria-hidden={ariaHidden}>
      {MARQUEE_ITEMS.map((item) => (
        <Fragment key={item}>
          <span>{item}</span>
          <span>·</span>
        </Fragment>
      ))}
    </div>
  );
}

export default function Marquee() {
  return (
    <div className={styles.ribbon}>
      <div className={styles.marqueeTrack}>
        <MarqueeGroup />
        <MarqueeGroup ariaHidden />
      </div>
    </div>
  );
}
