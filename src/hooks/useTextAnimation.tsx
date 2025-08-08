import { useEffect, useRef } from 'react';
import SplitType, { TypesList } from 'split-type';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

type UseTextAnimationOptions = {
	types?: string;
	tagName?: string;
	trigger?: React.RefObject<HTMLElement | null>;
	animationOptions?: any;
	triggerOptions?: any;
};

export const useTextAnimation = (options: UseTextAnimationOptions = {}) => {
	const {
		types = 'lines,words,chars',
		tagName = 'span',
		trigger,
		animationOptions = {
			y: 20,
			autoAlpha: 0,
			stagger: 0.05,
			duration: 0.5,
			ease: 'power3.out',
		},
		triggerOptions = {
			start: 'top 80%',
			toggleActions: 'play none none reverse',
			scrub: false,
			once: false,
		},
	} = options;

	const textRef = useRef<HTMLElement>(null);

	useEffect(() => {
		const element = textRef.current;
		if (!element) return;

		// Разбиваем текст
		const splitText = new SplitType(element, {
			types: types as TypesList,
			tagName,
		});

		// Анимация
		const animation = gsap.from(
			splitText.words || splitText.lines || splitText.chars,
			{
				...animationOptions,
				scrollTrigger: trigger && {
					trigger: trigger.current,
					...triggerOptions,
				},
			},
		);

		return () => {
			animation.kill();
			
			splitText.revert();
		};
	}, [types, tagName, trigger, triggerOptions, animationOptions]);

	return textRef;
};
