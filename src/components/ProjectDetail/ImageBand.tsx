import ParallaxImage from './ParallaxImage';
import styles from './ProjectDetail.module.css';

export default function ImageBand({ src, alt }: { src: string; alt: string }) {
  return (
    <div className={styles.imageBand}>
      <ParallaxImage src={src} alt={alt} fill />
    </div>
  );
}
