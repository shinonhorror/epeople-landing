'use client';

import { RefObject, useRef } from 'react';
import { useTextAnimation } from '../../../../../hooks/useTextAnimation';
import styles from './index.module.css';
import { Icon } from '@iconify/react';
import FadeInSection from '@/components/ui/FadeInSection';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement } from 'chart.js';
import { useProgressAnimation } from '@/hooks/useProgressAnimation';
import AuthCard from './components/auth';
import ShiftCard from './components/shift';

ChartJS.register(ArcElement);

const LawSolution = () => {
	const sectionRef = useRef(null);

	const textOptions = {
		types: 'words',
		trigger: sectionRef,
		triggerOptions: {
			start: '10% center',
			end: '+=200',
			toggleActions: 'play none none reverse',
			scrub: false,
		},
	};

	const animatedTextRef = useTextAnimation(textOptions);

	const animatedTitleRef = useTextAnimation(textOptions);

	return (
		<section id="labor&law" className={styles.wrapper} ref={sectionRef}>
			<div className={styles.image_block}>
				<ShiftCard sectionRef={sectionRef} />
				<AuthCard sectionRef={sectionRef} />
			</div>
			<div className={styles.text_block}>
				<div className={styles.text_icon}>
					<Icon icon="icon-park-outline:people-safe" />
				</div>
				<div className={styles.text_wrapper}>
					<h3 ref={animatedTitleRef as RefObject<HTMLHeadingElement>}>
						Labor Law Compliance
					</h3>
					<p ref={animatedTextRef as RefObject<HTMLParagraphElement>}>
						Adherence to wage & hour laws, prevention of payroll violations, and
						reduction of legal and financial liabilities.
					</p>
				</div>
				<FadeInSection>
					<div className={styles.text_advantages}>
						<div className={styles.text_advantage}>
							<Icon icon="carbon:checkmark-filled" />
							Wage & Hour Indemnification
						</div>
						<div className={styles.text_advantage}>
							<Icon icon="carbon:checkmark-filled" />
							Eliminate Threat of Wage Theft
						</div>
						<div className={styles.text_advantage}>
							<Icon icon="carbon:checkmark-filled" />
							Eliminate Costly Fines & Penalties
						</div>
						<div className={styles.text_advantage}>
							<Icon icon="carbon:checkmark-filled" />
							Increase Profit Margin & Reduce Liability
						</div>
						<div className={styles.text_advantage}>
							<Icon icon="carbon:checkmark-filled" />
							Audit-Ready PBJ Reporting
						</div>
						<div className={styles.text_advantage}>
							<Icon icon="carbon:checkmark-filled" />
							Performance Management
						</div>
					</div>
				</FadeInSection>
			</div>
		</section>
	);
};

export default LawSolution;
