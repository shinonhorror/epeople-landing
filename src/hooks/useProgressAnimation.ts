import { useEffect, useRef } from 'react';
import { TypesList } from 'split-type';
import { gsap } from 'gsap';


type UseTextAnimationOptions = {
	types?: TypesList;
	tagName?: string;
	trigger?: React.RefObject<HTMLElement | null>;
	animationOptions?: any;
	triggerOptions?: any;
	progress?: number;
};

export const useProgressAnimation = (options: UseTextAnimationOptions = {}) => {
	const {
		types = 'lines,words,chars',
		tagName = 'span',
		trigger,
		animationOptions = {
			duration: 0.5,
			ease: 'power2.out',
		},
		triggerOptions = {
			start: 'top 80%',
			toggleActions: 'play none none reverse',
			scrub: false,
			once: false,
		},
		progress = 100,
	} = options;

	const progressRef = useRef<HTMLElement>(null);
	const textRef = useRef<HTMLElement>(null);

	useEffect(() => {
		const tl = gsap.timeline({
			scrollTrigger:
				trigger && trigger.current
					? {
							trigger: trigger.current,
							...triggerOptions,
					  }
					: undefined,
		});

		if (progressRef.current) {
			tl.to(progressRef.current, {
				width: progress > 100 ? `100%` : `${progress}%`,
				...animationOptions,
			});
		}

		if (textRef?.current) {
			gsap.set(textRef.current, { innerText: 0 });

			tl.to(
				textRef.current,
				{
					duration: animationOptions.duration,
					innerText: `${progress}`,
					roundProps: 'innerText',
					ease: animationOptions.ease,
				},
				0,
			);
		}

		return () => {
			tl.kill();
		};
	}, [types, tagName, trigger, triggerOptions, animationOptions]);

	return { progressRef, textRef };
};
