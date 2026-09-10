import ParallaxImage from './ParallaxImage';
import styles from './ProjectDetail.module.css';

export default function ImageBand({
  src,
  alt,
  logo,
  logoAlt,
  blend = false,
}: {
  src: string;
  alt: string;
  /** Optional logo mark centered on top of the band (e.g. a client/brand wordmark). */
  logo?: string;
  logoAlt?: string;
  /** Blends the photo into the dark background instead of showing it at full brightness. */
  blend?: boolean;
}) {
  return (
    <div className={styles.imageBand}>
      <ParallaxImage src={src} alt={alt} fill className={blend ? styles.imageBandBlend : undefined} />
      {logo && (
        <div className={styles.imageBandLogo}>
          <img src={logo} alt={logoAlt ?? ''} />
        </div>
      )}
    </div>
  );
}
