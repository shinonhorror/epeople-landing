'use client';

import { useEffect, useRef } from 'react';
import styles from './index.module.css';
import { Icon } from '@iconify/react';
import gsap from 'gsap';

const statusCards = [
	{
		title: 'Absence',
		count: 8,
		bgColor: '#fefaee',
		iconColor: '#F3D700',
		icon: 'material-symbols:error-outline',
	},
	{
		title: 'No Call / No Show',
		count: 2,
		bgColor: '#ffeae9',
		iconColor: '#EC4E46',
		icon: 'fluent:alert-off-16-regular',
	},
	{
		title: 'Open Shifts',
		count: 4,
		bgColor: '#efeefe',
		iconColor: '#1249FD',
		icon: 'mingcute:time-line',
	},
];

const EMRCard = () => {
	const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

	useEffect(() => {
		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: cardRefs.current[0]?.parentElement,
				start: 'top 80%',
				toggleActions: 'play none none reverse',
			},
		});

		cardRefs.current.forEach((el) => {
			tl.from(el, {
				y: 50,
				opacity: 0,
				duration: 0.6,
				ease: 'power3.out',
			});
		});

		return () => {
			if (tl) tl.kill();
		};
	}, []);

	return (
		<div className={styles.wrapper}>
			<p className={styles.title}>
				<span>PPD Value:</span>
				<span style={{ color: '#79DE32' }}>3.6</span>
			</p>

			<div className={styles.status__wrapper}>
				{statusCards.map((card, index) => (
					<div
						key={index}
						ref={(el) => {
							cardRefs.current[index] = el;
						}}
						className={styles.status__card}
						style={{ backgroundColor: card.bgColor }}
					>
						<div className={styles.status__title}>
							<div
								className={styles.status__title_icon}
								style={{ backgroundColor: card.iconColor }}
							>
								<Icon icon={card.icon} />
							</div>
							{card.title}
						</div>
						<span
							className={styles.status__count}
							style={{ color: card.iconColor }}
						>
							{card.count}
						</span>
					</div>
				))}
			</div>
		</div>
	);
};

export default EMRCard;
