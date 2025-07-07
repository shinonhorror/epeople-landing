'use client';

import { RefObject, useRef } from 'react';
import styles from './index.module.css';
import { Icon } from '@iconify/react';
import { useTextAnimation } from '../../../../../hooks/useTextAnimation';
import FadeInSection from '@/components/ui/FadeInSection';
import Image from 'next/image';

const StaffingSolution = () => {
	const sectionRef = useRef(null);
	const animatedTextRef = useTextAnimation({
		types: 'lines,words',
		trigger: sectionRef,
		triggerOptions: {
			start: 'top center',
			end: '+=200',
			toggleActions: 'play none none reverse',
			scrub: false,
		},
	});

	const animatedTitleRef = useTextAnimation({
		types: 'lines,words',
		trigger: sectionRef,
		triggerOptions: {
			start: 'top center',
			end: '+=200',
			toggleActions: 'play none none reverse',
			scrub: false,
		},
	});

	return (
		<section id='staff&comp' className={styles.wrapper} ref={sectionRef}>
			<div className={styles.image_block}>
				<Image
					src="/fact_page_1.svg"
					width={400}
					height={600}
					alt="staffing"
				/>
			</div>
			<div className={styles.text_block}>
				<div className={styles.text_icon}>
					<Icon icon="line-md:account" />
				</div>
				<div className={styles.text_wrapper}>
					<h3 ref={animatedTitleRef as RefObject<HTMLHeadingElement>}>
						Staffing Perfection
					</h3>
					<p ref={animatedTextRef as RefObject<HTMLParagraphElement>}>
						Compliance with State and Federal Staffing Ratios
					</p>
				</div>
				<FadeInSection>
					<div className={styles.text_advantages}>
						<div className={styles.text_advantage}>
							<Icon icon="carbon:checkmark-filled" />
							Optimize Balance Between Overtime & Agency Staff Usage
						</div>
						<div className={styles.text_advantage}>
							<Icon icon="carbon:checkmark-filled" />
							Reduce Dependence on Costly Agency Staff
						</div>
						<div className={styles.text_advantage}>
							<Icon icon="carbon:checkmark-filled" />
							Real-Time Adjustments to Call-Offs
						</div>
						<div className={styles.text_advantage}>
							<Icon icon="carbon:checkmark-filled" />
							Proactive Compliance Alerts & Notifications
						</div>
						<div className={styles.text_advantage}>
							<Icon icon="carbon:checkmark-filled" />
							Integration with Staffing Agency Marketplace
						</div>
					</div>
				</FadeInSection>
			</div>
		</section>
	);
};

export default StaffingSolution;
