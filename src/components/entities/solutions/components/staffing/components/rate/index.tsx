import { FC, RefObject } from 'react';
import styles from './index.module.css';
import { useProgressAnimation } from '@/hooks/useProgressAnimation';
import { Icon } from '@iconify/react';

interface IRateCard {
	sectionRef: RefObject<HTMLElement | null> | undefined;
}
const RateCard: FC<IRateCard> = ({ sectionRef }) => {
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

	const { textRef: employeePercent } = useProgressAnimation({
		...progressOptions,
		progress: 6340,
	});

	const { textRef: contractorsPercent } = useProgressAnimation({
		...progressOptions,
		progress: 2810,
	});

	const rateData = [
		{
			icon: 'simple-line-icons:check',
			color: '#1249FD',
			title: 'Employee',
			textRef: employeePercent,
		},
		{
			icon: 'simple-line-icons:check',
			color: '#79DE32',
			title: 'Contractors',
			textRef: contractorsPercent,
		},
	];

	return (
		<div className={styles.wrapper}>
			<p className={styles.title}>Average Rate</p>
			<div className={styles.rate_wrapper}>
				{rateData.map((item, index) => (
					<div key={index} className={styles.rate_item}>
						<span className={styles.rate_title}>
							<Icon
								width={24}
								height={24}
								icon={item.icon}
								color={item.color}
							/>
							{item.title}
						</span>
						<span
							style={{ color: item.color }}
							className={styles.rate__counter}
						>
							$ <span ref={item.textRef}>0</span>
						</span>
					</div>
				))}
			</div>
		</div>
	);
};

export default RateCard;
