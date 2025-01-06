'use client'

import { useEffect, useRef } from 'react';

interface UseClickOutsideProps {
  onClickOutside: () => void;
  onScroll?: () => void;
}

export const useClickOutside = ({ onClickOutside, onScroll }: UseClickOutsideProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    let timeoutId: NodeJS.Timeout;

    const handleClick = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        timeoutId = setTimeout(() => {
          onClickOutside();
        }, 0);
      }
    };

    const handleScroll = () => {
      if (onScroll) {
        timeoutId = setTimeout(() => {
          onScroll();
        }, 0);
      }
    };

    requestAnimationFrame(() => {
      document.addEventListener('mousedown', handleClick);
      if (onScroll) {
        window.addEventListener('scroll', handleScroll, { passive: true });
      }
    });

    return () => {
      document.removeEventListener('mousedown', handleClick);
      if (onScroll) {
        window.removeEventListener('scroll', handleScroll);
      }
      clearTimeout(timeoutId);
    };
  }, [onClickOutside, onScroll]);

  return ref;
};