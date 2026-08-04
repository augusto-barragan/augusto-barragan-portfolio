import ParallaxImage from './ParallaxImage';
import styles from './ShowcaseSection.module.css';

export interface ShowcasePanel {
  eyebrow: string;
  description: string;
  image: string;
  imageAlt: string;
}

export function ShowcaseSection({
  eyebrow,
  description,
  image,
  imageAlt,
  background = 'dark',
}: ShowcasePanel & { background?: 'dark' | 'black' }) {
  return (
    <div className={`${styles.section} ${background === 'black' ? styles.black : styles.dark}`}>
      <div className={styles.text}>
        <p className={styles.eyebrow}>{eyebrow}</p>
        <p className={styles.description}>{description}</p>
      </div>
      <ParallaxImage className={styles.image} src={image} alt={imageAlt} />
    </div>
  );
}

export function ShowcasePair({ panels }: { panels: ShowcasePanel[] }) {
  return (
    <div className={`${styles.pair} ${styles.black}`}>
      {panels.map((panel) => (
        <div key={panel.eyebrow} className={styles.pairColumn}>
          <div className={styles.text}>
            <p className={styles.eyebrow}>{panel.eyebrow}</p>
            <p className={styles.description}>{panel.description}</p>
          </div>
          <ParallaxImage className={styles.image} src={panel.image} alt={panel.imageAlt} />
        </div>
      ))}
    </div>
  );
}
