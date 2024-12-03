import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

interface ScrollRevealProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
}

export function ScrollReveal({
  children,
  delay = 0,
  duration = 0.5,
  ...props
}: ScrollRevealProps) {
  const isVisible = useScrollAnimation({ threshold: 0.1 });

  const variants = {
    hidden: { 
      opacity: 0,
      y: 20
    },
    visible: { 
      opacity: 1,
      y: 0,
      transition: {
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <motion.div
      data-scroll-animation
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={variants}
      {...props}
    >
      {children}
    </motion.div>
  );
}