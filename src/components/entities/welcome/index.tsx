'use client';

import { useEffect } from 'react';
import styles from './index.module.css';
import Image from 'next/image';
import SplitType from 'split-type';
import gsap from 'gsap';

const Welcome = () => {
	useEffect(() => {
		// Разбиваем текст для анимации
		const title = new SplitType('#header-title', { types: 'words,chars' });
		const subtitle = new SplitType('#header-subtitle', { types: 'words' });

		// Анимация с GSAP
		gsap.from(title.chars, {
			opacity: 0,
			x: -10,
			stagger: {
				each: 0.03,
				ease: 'none',
			},
			duration: 0.5,
			ease: 'none',
		});

		gsap.from(subtitle.words, {
			scale: 0.9,
			opacity: 0,
			stagger: 0.1,
			duration: 0.6,
			delay: 0.5,
			ease: 'power2.out',
		});

		gsap.from('#header-button', {
			y: 20,
			opacity: 0,
			duration: 0.6,
			delay: 1.2,
			ease: 'power2.out',
		});
	}, []);

	return (
		<section className={styles.wrapper}>
			<div className={styles.text_wrapper}>
				<h1 className={styles.title} id="header-title">
					{' '}
					Effortless SNF Compliance
				</h1>
				<p className={styles.subtitle} id="header-subtitle">
					Protect Yourself From Wage & Hour Claims. Pass Staffing PPD & PBJ
					Audits with Confidence.
				</p>
				<a id="header-button" href="#scheduleDemo" className={styles.button}>
					Schedule a Demo
				</a>
			</div>
			<Image width={600} height={600} alt="header" src="/header-image.png" />
		</section>
	);
};

export default Welcome;
