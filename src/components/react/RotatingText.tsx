import { useState, useEffect, useMemo, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface RotatingTextProps {
  texts: string[];
  interval?: number;
  staggerDuration?: number;
  mainClassName?: string;
  splitLevelClassName?: string;
  elementLevelClassName?: string;
  transition?: Record<string, unknown>;
}

const cn = (...classes: (string | false | undefined | null)[]) =>
  classes.filter(Boolean).join(' ');

function splitIntoCharacters(text: string): string[] {
  if (typeof Intl !== 'undefined' && typeof (Intl as { Segmenter?: unknown }).Segmenter !== 'undefined') {
    const segmenter = new (Intl as unknown as { Segmenter: new (locale: string, opts: { granularity: string }) => { segment: (s: string) => Iterable<{ segment: string }> } }).Segmenter('en', { granularity: 'grapheme' });
    return Array.from(segmenter.segment(text), (s) => s.segment);
  }
  return Array.from(text);
}

export default function RotatingText({
  texts,
  interval = 2200,
  staggerDuration = 0.025,
  mainClassName,
  splitLevelClassName,
  elementLevelClassName,
  transition = { type: 'spring', damping: 28, stiffness: 360 },
}: RotatingTextProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % texts.length), interval);
    return () => clearInterval(t);
  }, [texts.length, interval]);

  const elements = useMemo(() => {
    const current = texts[index];
    return current.split(' ').map((word, i, arr) => ({
      characters: splitIntoCharacters(word),
      needsSpace: i !== arr.length - 1,
    }));
  }, [texts, index]);

  const getStaggerDelay = useCallback(
    (charIndex: number, total: number) => {
      // staggerFrom: "last" — da direita pra esquerda
      return (total - 1 - charIndex) * staggerDuration;
    },
    [staggerDuration],
  );

  return (
    <motion.span
      className={cn('text-rotate inline-flex flex-wrap items-baseline', mainClassName)}
      layout
      transition={transition as never}
    >
      <span className="sr-only">{texts[index]}</span>
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={index}
          className="inline-flex flex-wrap items-baseline"
          layout
          aria-hidden="true"
        >
          {elements.map((wordObj, wordIndex, array) => {
            const previousChars = array
              .slice(0, wordIndex)
              .reduce((sum, w) => sum + w.characters.length, 0);
            return (
              <span key={wordIndex} className={cn('inline-flex', splitLevelClassName)}>
                {wordObj.characters.map((char, charIndex) => (
                  <motion.span
                    key={charIndex}
                    initial={{ y: '100%', opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: '-120%', opacity: 0 }}
                    transition={{
                      ...transition,
                      delay: getStaggerDelay(
                        previousChars + charIndex,
                        array.reduce((sum, w) => sum + w.characters.length, 0),
                      ),
                    } as never}
                    className={cn('inline-block', elementLevelClassName)}
                  >
                    {char}
                  </motion.span>
                ))}
                {wordObj.needsSpace && <span className="whitespace-pre"> </span>}
              </span>
            );
          })}
        </motion.span>
      </AnimatePresence>
    </motion.span>
  );
}
