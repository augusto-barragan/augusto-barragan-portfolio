import { ChevronDownIcon } from '../icons/Icons';
import styles from './ScrollIndicator.module.css';

export default function ScrollIndicator() {
  return (
    <div className={styles.scrollIndicator}>
      <ChevronDownIcon />
    </div>
  );
}
