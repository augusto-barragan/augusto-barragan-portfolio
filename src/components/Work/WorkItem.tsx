import { Fragment, useRef } from 'react';
import { Link } from 'react-router-dom';
import type { WorkItem as WorkItemType } from '../../data/content';
import { ArrowRightIcon } from '../icons/Icons';
import { useParallaxOffset } from '../../hooks/useParallaxOffset';
import styles from './Work.module.css';

const BG_PARALLAX_SPEED = 0.12;
const BG_MAX_OFFSET = 60;
const CONTENT_PARALLAX_SPEED = 0.35;
const CONTENT_MAX_OFFSET = 140;

const clamp = (value: number, max: number) => Math.max(-max, Math.min(max, value));

export default function WorkItem({ item, index }: { item: WorkItemType; index: number }) {
  const isExternal = item.href.startsWith('http');
  const trackRef = useRef<HTMLDivElement>(null);
  const scrollOffset = useParallaxOffset(trackRef);
  const bgOffset = clamp(scrollOffset * BG_PARALLAX_SPEED, BG_MAX_OFFSET);
  const contentOffset = clamp(scrollOffset * CONTENT_PARALLAX_SPEED, CONTENT_MAX_OFFSET);

  const content = (
    <>
      {item.bgSrc ? (
        <div className={styles.bgLayer} style={{ transform: `translateY(${bgOffset}px)` }}>
          <img src={item.bgSrc} alt={item.bgAlt} />
        </div>
      ) : (
        <div className={styles.placeholderBg} />
      )}
      <div className={styles.overlay} />
      <div className={styles.workInner}>
        <div className={styles.workDesc} style={{ transform: `translateY(${contentOffset}px)` }}>
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
            {item.comingSoon ? (
              <span className={styles.comingSoonTag}>Coming Soon</span>
            ) : (
              <span>
                View Project
                <ArrowRightIcon />
              </span>
            )}
          </div>
        </div>
      </div>
    </>
  );

  return (
    <div className={styles.workTrack} ref={trackRef}>
      {item.comingSoon ? (
        <div className={styles.workItem} style={{ zIndex: index + 1 }}>
          {content}
        </div>
      ) : isExternal ? (
        <a
          href={item.href}
          className={styles.workItem}
          style={{ zIndex: index + 1 }}
          target="_blank"
          rel="noopener noreferrer"
        >
          {content}
        </a>
      ) : (
        <Link to={item.href} className={styles.workItem} style={{ zIndex: index + 1 }}>
          {content}
        </Link>
      )}
    </div>
  );
}
