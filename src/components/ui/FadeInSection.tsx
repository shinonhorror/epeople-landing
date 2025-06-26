'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { CustomEase } from 'gsap/CustomEase';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(CustomEase, ScrollTrigger);

CustomEase.create("easeScroll", "M0,0 C0.25,0.1 0.25,1 1,1");

export default function FadeInSection({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ref.current,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play pause resume pause',
          markers: false,
          onEnter: () => {
            // Play animation when entering the section
            tl.play();
          },
          onLeave: () => {
            // Pause animation when leaving the section
            tl.pause();
          },
          onEnterBack: () => {
            // Resume animation when scrolling back up
            tl.resume();
          },
          onLeaveBack: () => {
            // Pause animation when scrolling back up and leaving
            tl.pause();
          }
        }
      });

      tl.fromTo(
        ref.current,
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: 'easeScroll',
        }
      );
    });

    return () => ctx.revert(); // Cleanup
  }, []);

  return <div ref={ref}>{children}</div>;
}
