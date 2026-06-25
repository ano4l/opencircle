import { motion, type Variants } from 'framer-motion';
import type { ReactNode } from 'react';

type Direction = 'up' | 'down' | 'left' | 'right' | 'scale' | 'none';

interface RevealProps {
  children: ReactNode;
  direction?: Direction;
  delay?: number;
  className?: string;
  once?: boolean;
}

const offset = 60;

const buildVariants = (direction: Direction): Variants => {
  const hidden: Record<string, number> = { opacity: 0 };
  switch (direction) {
    case 'up': hidden.y = offset; break;
    case 'down': hidden.y = -offset; break;
    case 'left': hidden.x = offset; break;
    case 'right': hidden.x = -offset; break;
    case 'scale': hidden.scale = 0.9; break;
  }
  return {
    hidden,
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
    },
  };
};

/** Scroll-triggered reveal wrapper powered by framer-motion. */
export default function Reveal({
  children,
  direction = 'up',
  delay = 0,
  className = '',
  once = true,
}: RevealProps) {
  return (
    <motion.div
      className={className}
      variants={buildVariants(direction)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.25 }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
