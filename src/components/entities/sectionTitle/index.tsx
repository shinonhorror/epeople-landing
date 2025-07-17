'use client';

import TypingText from '@/components/ui/typing-text';
import styles from './index.module.css';
import { FC, useRef } from 'react';
import { useTextAnimation } from '@/hooks/useTextAnimation';

interface ISectionTitle {
	title: string;
	subtitle: string;
	desc: string;
}

const SectionTitle: FC<ISectionTitle> = ({ title, subtitle, desc }) => {
	const sectionRef = useRef(null);
	const animatedSpanRef = useTextAnimation({
		types: 'words',
		trigger: sectionRef,
		animationOptions: {
			opacity: 0,
			x: -10,
			stagger: {
				each: 0.03,
				ease: 'none',
			},
			duration: 0.5,
			ease: 'none',
		},
		triggerOptions: {
			start: '50% 75%',
			end: '+=300',
			toggleActions: 'play none none reverse',
			scrub: false,
			markers: true,
		},
	});

	const animatedDescRef = useTextAnimation({
		types: 'words',
		trigger: sectionRef,
		animationOptions: {
			opacity: 0,
			x: -10,
			stagger: {
				each: 0.03,
				ease: 'none',
			},
			duration: 0.5,
			ease: 'none',
		},
		triggerOptions: {
			start: '50% 75%',
			end: '+=300',
			toggleActions: 'play none none reverse',
			scrub: false,
			markers: true,
		},
	});

	return (
		<div className={styles.title_wrapper} ref={sectionRef}>
			<span ref={animatedSpanRef} className={styles.subtitle}>
				{subtitle}
			</span>
			<TypingText text={title} classname={styles.title} />
			<span
				ref={animatedDescRef}
				className={styles.title_desc}
				dangerouslySetInnerHTML={{ __html: desc }}
			/>
		</div>
	);
};

export default SectionTitle;
