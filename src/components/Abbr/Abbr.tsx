'use client';

import { useEffect, useId, useRef, useState } from 'react';
import styles from './Abbr.module.css';

type AbbrProps = {
  term: string;
  definition: string;
  className?: string;
};

export function Abbr({ term, definition, className }: AbbrProps) {
  const [open, setOpen] = useState(false);
  const tooltipId = useId();
  const wrapperRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    if (!open) {
      return;
    }

    const handlePointerDown = (event: PointerEvent) => {
      if (!wrapperRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false);
      }
    };

    document.addEventListener('pointerdown', handlePointerDown);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('pointerdown', handlePointerDown);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [open]);

  return (
    <span ref={wrapperRef} className={styles.wrapper} data-open={open ? 'true' : 'false'}>
      <button
        type="button"
        className={`${styles.trigger}${className ? ` ${className}` : ''}`}
        onClick={() => setOpen((prev) => !prev)}
        aria-describedby={tooltipId}
        aria-expanded={open}
      >
        <abbr className={styles.abbr} aria-label={`${term}: ${definition}`}>
          {term}
        </abbr>
      </button>
      <span id={tooltipId} role="tooltip" className={styles.tooltip}>
        {definition}
      </span>
    </span>
  );
}
