import { useRef } from 'react';
import gsap from 'gsap';

export const useFullpageAnimations = (sections: string[]) => {
  const sectionAnimations = useRef<{ [key: string]: gsap.core.Timeline }>({});
  const fullpageApiRef = useRef<any>(null);

  const initAnimations = () => {
    sections.forEach(section => {
      const anime = document.querySelector(`.${section} .anime`);
      if (anime && !sectionAnimations.current[section]) {
        const tl = gsap.timeline({ paused: true });
        tl.fromTo(anime, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' });
        sectionAnimations.current[section] = tl;
      }
    });
  };

  const handleHashChange = () => {
    const hash = window.location.hash.replace('#', '');
    const defaultSection = sections[0];
    const target = sections.includes(hash) ? hash : defaultSection;

    if (fullpageApiRef.current) {
      fullpageApiRef.current.moveTo(sections.indexOf(target) + 1);
      const targetAnim = sectionAnimations.current[target];
      if (targetAnim) {
        targetAnim.restart();
      }
    }
  };

  const onLeave = (origin: any) => {
    const currentAnim = sectionAnimations.current[origin.anchor];
    if (currentAnim) currentAnim.pause();
  };

  const afterLoad = (_origin: any, destination: any) => {
    const currentAnim = sectionAnimations.current[destination.anchor];
    if (currentAnim) currentAnim.restart();
  };

  const afterRender = () => {
    // гарантированно вызывается после отрисовки всех секций
    initAnimations();
    handleHashChange();
  };

  return { onLeave, afterLoad, afterRender, fullpageApiRef };
};
