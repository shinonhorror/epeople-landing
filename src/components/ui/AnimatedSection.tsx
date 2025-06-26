'use client';

import { useRef, useEffect } from 'react';
import gsap from 'gsap';

interface AnimatedSectionProps {
  children: React.ReactNode;
  delay?: number;
}

const AnimatedSection = ({ children, delay = 0 }: AnimatedSectionProps) => {
  const el = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (el.current) {
      gsap.fromTo(
        el.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay,
          ease: 'power3.out',
        }
      );
    }
  }, [delay]);

  return <div ref={el}>{children}</div>;
};

export default AnimatedSection;
