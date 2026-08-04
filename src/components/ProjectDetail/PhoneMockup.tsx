import type { ReactNode } from 'react';
import styles from './PhoneMockup.module.css';

export interface PhoneMockupData {
  src: string;
  alt: string;
  overlaySrc?: string;
  caption: string;
}

export function PhoneRow({ children }: { children: ReactNode }) {
  return <div className={styles.row}>{children}</div>;
}

export default function PhoneMockup({ src, alt, overlaySrc, caption }: PhoneMockupData) {
  return (
    <div className={styles.wrap}>
      <div className={styles.frame}>
        <img className={styles.screen} src={src} alt={alt} />
        {overlaySrc && <img className={styles.overlay} src={overlaySrc} alt="" />}
      </div>
      <p className={styles.caption}>{caption}</p>
    </div>
  );
}
