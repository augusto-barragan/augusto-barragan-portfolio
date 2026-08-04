import { Link } from 'react-router-dom';
import { BackArrowIcon, CloseIcon } from '../icons/Icons';
import styles from './ProjectDetail.module.css';

export default function ProjectHeader() {
  return (
    <div className={styles.header}>
      <Link to="/" className={styles.backLink}>
        <BackArrowIcon />
        Back to Portfolio
      </Link>
      <Link to="/" className={styles.closeLink} aria-label="Close">
        <CloseIcon />
      </Link>
    </div>
  );
}
