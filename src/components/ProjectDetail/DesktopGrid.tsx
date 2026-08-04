import ParallaxImage from './ParallaxImage';
import styles from './ProjectDetail.module.css';

export interface GridImage {
  src: string;
  alt: string;
}

export default function DesktopGrid({ images }: { images: GridImage[] }) {
  return (
    <div className={styles.desktopGrid}>
      {images.map((image) => (
        <ParallaxImage key={image.src} src={image.src} alt={image.alt} />
      ))}
    </div>
  );
}
