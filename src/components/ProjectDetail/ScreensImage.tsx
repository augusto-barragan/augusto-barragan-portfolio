import ParallaxImage from './ParallaxImage';
import styles from './ProjectDetail.module.css';

export default function ScreensImage({
  src,
  alt,
  background = 'black',
}: {
  src: string;
  alt: string;
  background?: 'black' | 'white';
}) {
  return (
    <div className={background === 'white' ? styles.screensWhite : styles.screensBlack}>
      <ParallaxImage src={src} alt={alt} />
    </div>
  );
}
