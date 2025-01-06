import { useEffect, useRef } from 'react';

interface UseClickOutsideProps {
  onClickOutside: () => void;
  onScroll?: () => void;
}

export const useClickOutside = ({ onClickOutside, onScroll }: UseClickOutsideProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        onClickOutside();
      }
    };

    const handleScroll = () => {
      if (onScroll) {
        onScroll();
      }
    };

    document.addEventListener('mousedown', handleClick);
    if (onScroll) {
      window.addEventListener('scroll', handleScroll, { passive: true });
    }

    return () => {
      document.removeEventListener('mousedown', handleClick);
      if (onScroll) {
        window.removeEventListener('scroll', handleScroll);
      }
    };
  }, [onClickOutside, onScroll]);

  return ref;
};