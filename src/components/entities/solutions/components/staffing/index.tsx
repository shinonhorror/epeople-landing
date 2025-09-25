'use client';

import { RefObject, useRef } from 'react';
import styles from './index.module.css';
import { Icon } from '@iconify/react';
import { useTextAnimation } from '../../../../../hooks/useTextAnimation';
import FadeInSection from '@/components/ui/FadeInSection';
import RateCard from './components/rate';
import LaborCard from './components/labor';
import PPDCard from './components/ppd';

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
		<section id="staff&comp" className={styles.wrapper} ref={sectionRef}>
			<div className={styles.text_block}>
				<div className={styles.text_icon}>
					<Icon icon="line-md:account" />
				</div>
				<div className={styles.text_wrapper}>
					<h3 ref={animatedTitleRef as RefObject<HTMLHeadingElement>}>
						Staffing Perfection
					</h3>
					<p ref={animatedTextRef as RefObject<HTMLParagraphElement>}>
						Achieve Staffing Compliance while Cutting Labor Costs
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
							Proactive Compliance Alerts & Notifications
						</div>
						<div className={styles.text_advantage}>
							<Icon icon="carbon:checkmark-filled" />
							Integration with Staffing Agency Marketplace
						</div>
						<div className={styles.text_advantage}>
							<Icon icon="carbon:checkmark-filled" />
							Audit - Ready PPD Reporting
						</div>
						<div className={styles.text_advantage}>
							<Icon icon="carbon:checkmark-filled" />
							Real-Time Adjustments to Call-Offs
						</div>
					</div>
				</FadeInSection>
			</div>
			<div className={styles.image_block}>
				<PPDCard />
				<LaborCard sectionRef={sectionRef} />
			</div>
		</section>
	);
};

export default StaffingSolution;
