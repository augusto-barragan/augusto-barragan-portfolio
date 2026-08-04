import { ArrowRightIcon, DownloadIcon } from '../icons/Icons';
import RoleCycler from './RoleCycler';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <header className={styles.hero}>
      <div className={styles.heroPhoto}>
        <img
          src="/images/Augusto-photo.jpg"
          alt="Augusto Barragán"
        />
      </div>
      <div className={styles.heroText}>
        <p className={styles.subtitle}>AUGUSTO BARRAGAN C.</p>
        <div className={styles.titleBlock}>
          <p className={styles.titleLine}>Hi, I'm</p>
          <p className={`${styles.titleLine} ${styles.highlight}`}>Augusto,</p>
          <p className={`${styles.titleLine} ${styles.roleLine}`}>
            <RoleCycler />
          </p>
          <p className={styles.titleLine}>
            based in <span className={styles.accent}>bogotá.</span>
          </p>
        </div>
        <div className={styles.cta}>
          <a href="#work" className={styles.btnOutline}>
            View Work
            <ArrowRightIcon />
          </a>
          <a href="#" className={styles.downloadLink}>
            <DownloadIcon />
            Download CV
          </a>
        </div>
      </div>
    </header>
  );
}
