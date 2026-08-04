import { type RefObject, useEffect, useState } from 'react';

/**
 * Distance in px between an element's vertical center and the viewport's
 * vertical center, updated on scroll/resize. Multiply by a small factor
 * (e.g. 0.1-0.4) to drive a parallax transform - larger factors move more.
 */
export function useParallaxOffset(ref: RefObject<HTMLElement | null>) {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let ticking = false;

    function measure() {
      const el = ref.current;
      if (el) {
        const rect = el.getBoundingClientRect();
        const elementCenter = rect.top + rect.height / 2;
        setOffset(elementCenter - window.innerHeight / 2);
      }
      ticking = false;
    }

    function onScroll() {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(measure);
      }
    }

    measure();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [ref]);

  return offset;
}
