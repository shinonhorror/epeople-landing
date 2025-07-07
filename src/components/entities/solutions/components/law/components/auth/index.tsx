'use client';

import { FC, RefObject } from 'react';
import { Icon } from '@iconify/react';
import { Chart as ChartJS, ArcElement } from 'chart.js';
import { useProgressAnimation } from '@/hooks/useProgressAnimation';
import styles from './index.module.css';

ChartJS.register(ArcElement);

interface IAuthCard {
	sectionRef: RefObject<HTMLElement | null> | undefined;
}

const AuthCard: FC<IAuthCard> = ({ sectionRef }) => {
	const progressOptions = {
		trigger: sectionRef,
		animationOptions: {
			duration: 1.5,
			ease: 'power2.out',
		},
		triggerOptions: {
			start: 'top center',
			end: '+=200',
			toggleActions: 'play none none reverse',
			scrub: false,
		},
	};

	const { progressRef: animatedLateStart, textRef: lateStartPercent } =
		useProgressAnimation({ ...progressOptions, progress: 35 });

	const { progressRef: animatedOvertime, textRef: overtimePercent } =
		useProgressAnimation({ ...progressOptions, progress: 25 });

	const { progressRef: animatedMissed, textRef: missedPercent } =
		useProgressAnimation({ ...progressOptions, progress: 30 });

	const { progressRef: animatedWorkzone, textRef: workzonePercent } =
		useProgressAnimation({ ...progressOptions, progress: 30 });

	const authData = [
		{
			icon: 'mingcute:alert-line',
			color: '#F3D700',
			title: 'Late Start',
			progressRef: animatedLateStart,
			textRef: lateStartPercent,
		},
		{
			icon: 'mingcute:alert-line',
			color: '#EC4E46',
			title: 'Unauthorized Overtime',
			progressRef: animatedOvertime,
			textRef: overtimePercent,
		},
		{
			icon: 'mingcute:alert-line',
			color: '#EC4E46',
			title: 'Missed Meal Break',
			progressRef: animatedMissed,
			textRef: missedPercent,
		},
		{
			icon: 'mingcute:alert-line',
			color: '#999999',
			title: 'Outside of Work Zone',
			progressRef: animatedWorkzone,
			textRef: workzonePercent,
		},
	];

	return (
		<div className={styles.auth_block}>
			<p className={styles.image_block__title}>Authorization</p>
			<div className={styles.auth_wrapper}>
				{authData.map((item, index) => (
					<div key={index} className={styles.auth_item}>
						<span className={styles.auth_title}>
							<Icon
								width={24}
								height={24}
								icon={item.icon}
								color={item.color}
							/>
							{item.title}
						</span>
						<span className={styles.auth__progress__wrapper}>
							<span className={styles.auth__progress}>
								<span
									ref={item.progressRef}
									className={styles.auth__progress__bar}
									style={{
										width: '0%',
										backgroundColor: item.color,
									}}
								></span>
							</span>
							<span ref={item.textRef} className={styles.auth__counter}>
								0
							</span>
						</span>
					</div>
				))}
			</div>
		</div>
	);
};
export default AuthCard;
