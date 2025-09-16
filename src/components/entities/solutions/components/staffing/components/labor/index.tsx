import { FC, RefObject } from 'react';
import styles from './index.module.css';
import { useProgressAnimation } from '@/hooks/useProgressAnimation';
import { Icon } from '@iconify/react';
import RateCard from '../rate';

interface ILaborCard {
	sectionRef: RefObject<HTMLElement | null> | undefined;
}
const LaborCard: FC<ILaborCard> = ({ sectionRef }) => {
	const progressOptions = {
		trigger: sectionRef,
		animationOptions: {
			duration: 1,
			ease: 'power2.out',
		},
		triggerOptions: {
			start: 'top center',
			end: '+=200',
			toggleActions: 'play none none reverse',
			scrub: false,
		},
	};

	const { textRef: scheduledPercent } = useProgressAnimation({
		...progressOptions,
		progress: 6340,
	});

	const { textRef: overagePercent } = useProgressAnimation({
		...progressOptions,
		progress: 3520,
	});

	const { textRef: marketplacePercent } = useProgressAnimation({
		...progressOptions,
		progress: 42,
	});

	return (
		<div className={styles.wrapper}>
			<div className={styles.card_wrapper}>
				<div
					className={styles.title_icon}
					style={{ backgroundColor: '#79DE32' }}
				>
					<Icon icon="stash:plan" />
				</div>
				<p className={styles.title}>Scheduled Labor Cost</p>{' '}
				<p className={styles.count}>
					$<span ref={scheduledPercent}> 0</span> / day
				</p>
			</div>
			<div className={styles.card_wrapper}>
				{' '}
				<div
					className={styles.title_icon}
					style={{ backgroundColor: '#1249FD' }}
				>
					<Icon icon="qlementine-icons:money-16" />
				</div>
				<p className={styles.title}>Overage Labor Cost</p>
				<p className={styles.count}>
					$<span ref={overagePercent}> 0</span> / day
				</p>
			</div>
			<RateCard style={{ gridColumn: '1/-1' }} />
		</div>
	);
};

export default LaborCard;
