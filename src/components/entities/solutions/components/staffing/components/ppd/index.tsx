import { useEffect, useRef } from 'react';
import styles from './index.module.css';
import { Icon } from '@iconify/react';
import gsap from 'gsap';

const statusCards = [
	{
		title: 'CNA',
		count: 2.5,
		bgColor: '#fefaee',
		iconColor: '#F3D700',
		icon: 'material-symbols:error-outline',
	},
	{
		title: 'Nurse',
		count: 1.2,
		bgColor: '#ffeae9',
		iconColor: '#EC4E46',
		icon: 'fluent:alert-off-16-regular',
	},
];

const PPDCard = () => {
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
			tl.fromTo(
				el,
				{
					y: 50,
					opacity: 0,
					duration: 0.6,
					ease: 'power3.out',
				},
				{
					opacity: 1,
					y: 0,
					duration: 0.6,
					ease: 'power3.out',
				},
			);
		});

		return () => {
			if (tl) tl.kill();
		};
	}, []);

	return (
		<div className={styles.wrapper} >
			<p className={styles.title}>
				<span>PPD Value:</span>
				<span style={{ color: '#79DE32' }}>3.7</span>
			</p>

			<div className={styles.status__wrapper}>
				{statusCards.map((card, index) => (
					<div
						key={index}
						ref={(el) => {
							cardRefs.current[index] = el;
						}}
						className={styles.status__card}
					>
						<div className={styles.status__title}>{card.title}</div>
						<span className={styles.status__count}>{card.count}</span>
					</div>
				))}
			</div>
		</div>
	);
};

export default PPDCard;
