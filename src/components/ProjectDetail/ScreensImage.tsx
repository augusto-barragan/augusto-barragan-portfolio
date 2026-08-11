import ParallaxImage from './ParallaxImage';
import styles from './ProjectDetail.module.css';

const BACKGROUND_CLASS = {
  black: 'screensBlack',
  white: 'screensWhite',
  dark: 'screensDark',
} as const;

export default function ScreensImage({
  src,
  alt,
  background = 'black',
}: {
  src: string;
  alt: string;
  background?: 'black' | 'white' | 'dark';
}) {
  return (
    <div className={styles[BACKGROUND_CLASS[background]]}>
      <ParallaxImage src={src} alt={alt} />
    </div>
  );
}
