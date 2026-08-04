import { useEffect, useRef, useState } from 'react';
import { ROLES } from '../../data/content';
import styles from './RoleCycler.module.css';

const SCRAMBLE_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ#%&$@!*/\\<>01';
const CYCLE_DELAY_MS = 2600;
const FRAME_DELAY_MS = 55;

const randInt = (n: number) => Math.floor(Math.random() * n);

export default function RoleCycler() {
  const [text, setText] = useState(ROLES[0]);
  const [isGlitching, setIsGlitching] = useState(false);
  const displayedRef = useRef(text);
  displayedRef.current = text;

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let index = 0;
    let cancelled = false;
    let cycleTimer: ReturnType<typeof setTimeout>;
    let frameTimer: ReturnType<typeof setInterval>;
    let glitchOffTimer: ReturnType<typeof setTimeout>;

    // Scrambles a handful of characters for a few frames, then settles on the target text.
    function scrambleTo(target: string, onDone: () => void) {
      const from = displayedRef.current;
      let frame = 0;
      const totalFrames = 5 + randInt(4);

      frameTimer = setInterval(() => {
        const base = frame < totalFrames - 1 ? from : target;
        const chars = base.split('');
        const hits = 3 + randInt(4);

        for (let i = 0; i < hits; i++) {
          const idx = randInt(chars.length);
          if (chars[idx] === ' ') continue;
          chars[idx] = SCRAMBLE_CHARS[randInt(SCRAMBLE_CHARS.length)];
        }

        setText(chars.join(''));
        setIsGlitching(true);

        frame++;
        if (frame >= totalFrames) {
          clearInterval(frameTimer);
          setText(target);
          glitchOffTimer = setTimeout(() => setIsGlitching(false), 90);
          onDone();
        }
      }, FRAME_DELAY_MS);
    }

    function cycle() {
      index = (index + 1) % ROLES.length;
      scrambleTo(ROLES[index], () => {
        cycleTimer = setTimeout(() => {
          if (!cancelled) cycle();
        }, CYCLE_DELAY_MS);
      });
    }

    cycleTimer = setTimeout(cycle, CYCLE_DELAY_MS);

    return () => {
      cancelled = true;
      clearTimeout(cycleTimer);
      clearInterval(frameTimer);
      clearTimeout(glitchOffTimer);
    };
  }, []);

  return (
    <span className={`${styles.roleCycler} ${isGlitching ? styles.isGlitching : ''}`}>
      <span className={`${styles.roleLayer} ${styles.roleBase}`}>{text}</span>
      <span className={`${styles.roleLayer} ${styles.roleColor} ${styles.roleA}`} aria-hidden="true">
        {text}
      </span>
      <span className={`${styles.roleLayer} ${styles.roleColor} ${styles.roleB}`} aria-hidden="true">
        {text}
      </span>
    </span>
  );
}
