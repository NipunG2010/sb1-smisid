import React from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

interface ScrollGroupProps {
  children: React.ReactNode;
  baseDelay?: number;
  staggerDelay?: number;
}

export function ScrollGroup({
  children,
  baseDelay = 0,
  staggerDelay = 0.1
}: ScrollGroupProps) {
  const isVisible = useScrollAnimation({ threshold: 0.1 });

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: baseDelay,
        staggerChildren: staggerDelay
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <motion.div
      data-scroll-animation
      variants={container}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
    >
      {React.Children.map(children, (child) => (
        <motion.div variants={item}>
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
}