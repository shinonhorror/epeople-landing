'use client';

import styles from './index.module.css';
import { FC, RefObject, useRef } from 'react';
import { Icon } from '@iconify/react';
import { useTextAnimation } from '@/hooks/useTextAnimation';

interface IIntegrationCard {
	title: string;
	description: string;
	icon: string;
	color: string;
	children: React.ReactNode;
}

const IntegrationCard: FC<IIntegrationCard> = ({
	title,
	description,
	icon,
	color,
	children,
}) => {
	const sectionRef = useRef(null);

	const animatedTextRef = useTextAnimation({
		types: 'lines,words',
		trigger: sectionRef,
		triggerOptions: {
			start: '10% center',
			end: '+=200',
			toggleActions: 'play none none reverse',
			scrub: false,
		},
	});

	return (
		<div className={styles.wrapper} ref={sectionRef}>
			<h3 className={styles.title}>
				<div className={styles.title_icon} style={{ backgroundColor: color }}>
					<Icon icon={icon} />
				</div>
				{title}
			</h3>
			<p ref={animatedTextRef as RefObject<HTMLParagraphElement>}>
				{description}
			</p>
			{children}
		</div>
	);
};

export default IntegrationCard;
