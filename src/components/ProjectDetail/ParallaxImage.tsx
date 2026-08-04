import { useRef } from 'react';
import { useParallaxOffset } from '../../hooks/useParallaxOffset';

const SPEED = 0.08;
const MAX_OFFSET = 20;

const clamp = (value: number, max: number) => Math.max(-max, Math.min(max, value));

export default function ParallaxImage({
  src,
  alt,
  className,
  fill = false,
}: {
  src: string;
  alt: string;
  className?: string;
  /** Set when the wrapping element has a fixed height the image must fill (e.g. a hero band). */
  fill?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const offset = clamp(useParallaxOffset(ref) * SPEED, MAX_OFFSET);

  if (fill) {
    // Crop bands (e.g. a hero image band): the image is scaled up so the
    // parallax drift never reveals empty space at the clipped edges.
    return (
      <div ref={ref} style={{ width: '100%', height: '100%', overflow: 'hidden', display: 'block' }}>
        <img
          src={src}
          alt={alt}
          className={className}
          style={{ transform: `scale(1.15) translateY(${offset}px)` }}
        />
      </div>
    );
  }

  // Full-display images (screenshots, documentation): no scale/crop, just a
  // gentle float so the whole image stays visible.
  return (
    <div ref={ref} style={{ width: '100%', display: 'block' }}>
      <img src={src} alt={alt} className={className} style={{ transform: `translateY(${offset}px)` }} />
    </div>
  );
}
