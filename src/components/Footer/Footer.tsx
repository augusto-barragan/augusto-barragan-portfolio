import { DownloadOutlineIcon, LinkedInIcon, MailIcon, WhatsAppIcon } from '../icons/Icons';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer id="contact" className={styles.footer}>
      <div className={styles.contactRow}>
        <h2 className={styles.contactTitle}>Contact</h2>
        <div className={styles.social}>
          <a href="mailto:augustobarragan@gmail.com">
            <MailIcon />
            augustobarragan@gmail.com
          </a>
          <a href="https://www.linkedin.com/in/augustobarrragan" target="_blank" rel="noopener noreferrer">
            <LinkedInIcon />
            www.linkedin.com/in/augustobarrragan
          </a>
          <a href="https://wa.me/augustobarragan" target="_blank" rel="noopener noreferrer">
            <WhatsAppIcon />
            @AugustoBarragan
          </a>
        </div>
      </div>

      <div className={styles.rights}>
        <p className={styles.rightsText}>© 2026 Augusto barragan. All rights reserved</p>
        <a href="#" className={styles.footerDownload}>
          <DownloadOutlineIcon />
          Download CV
        </a>
      </div>

      <div className={styles.created}>
        <p>
          Designed in figma <strong>·</strong> Coded in claude
        </p>
      </div>
    </footer>
  );
}
