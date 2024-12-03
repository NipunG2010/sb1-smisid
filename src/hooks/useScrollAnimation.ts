import { useEffect, useState } from 'react';
import { useReducedMotion } from 'framer-motion';

interface ScrollAnimationOptions {
  threshold?: number;
  triggerOnce?: boolean;
}

export function useScrollAnimation(options: ScrollAnimationOptions = {}) {
  const [isVisible, setIsVisible] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  const { threshold = 0.1, triggerOnce = true } = options;

  useEffect(() => {
    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce) {
            observer.disconnect();
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      {
        threshold,
      }
    );

    const currentElement = document.querySelector('[data-scroll-animation]');
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => observer.disconnect();
  }, [threshold, triggerOnce, prefersReducedMotion]);

  return isVisible;
}