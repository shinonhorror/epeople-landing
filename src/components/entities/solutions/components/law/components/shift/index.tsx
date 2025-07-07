'use client';

import { FC, RefObject, useMemo } from 'react';
import { Icon } from '@iconify/react';
import { Chart as ChartJS, ArcElement } from 'chart.js';
import styles from './index.module.css';
import { Doughnut } from 'react-chartjs-2';
import { useProgressAnimation } from '@/hooks/useProgressAnimation';

ChartJS.register(ArcElement);

interface IShiftCard {
	sectionRef: RefObject<HTMLElement | null> | undefined;
}

const ShiftCard: FC<IShiftCard> = ({ sectionRef }) => {
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

	const { progressRef: animatedWorking, textRef: workingPercent } =
		useProgressAnimation({ ...progressOptions, progress: 35 });
	const { progressRef: animatedLunch, textRef: lunchPercent } =
		useProgressAnimation({ ...progressOptions, progress: 15 });
	const { progressRef: animatedComplete, textRef: completePercent } =
		useProgressAnimation({ ...progressOptions, progress: 25 });
	const { progressRef: animatedNoCall, textRef: noCallPercent } =
		useProgressAnimation({ ...progressOptions, progress: 10 });
	const { progressRef: animatedSchedule, textRef: schedulePercent } =
		useProgressAnimation({ ...progressOptions, progress: 15 });

	const statusData = useMemo(
		() => [
			{
				iconColor: '#1249FD',
				title: 'Working Now',
				progressPercent: 35,
				key: 'working',
				progressRef: animatedWorking,
				textRef: workingPercent,
			},
			{
				iconColor: '#F3D700',
				title: 'On a Meal Break',
				progressPercent: 15,
				key: 'lunch',
				progressRef: animatedLunch,
				textRef: lunchPercent,
			},
			{
				iconColor: '#79DE32',
				title: 'Complete Shift',
				progressPercent: 25,
				key: 'complete',
				progressRef: animatedComplete,
				textRef: completePercent,
			},
			{
				iconColor: '#EC4E46',
				title: 'No Call / No Show',
				progressPercent: 10,
				key: 'noCall',
				progressRef: animatedNoCall,
				textRef: noCallPercent,
			},
			{
				iconColor: '#999999',
				title: 'Schedule',
				progressPercent: 15,
				key: 'schedule',
				progressRef: animatedSchedule,
				textRef: schedulePercent,
			},
		],
		[
			animatedWorking,
			animatedLunch,
			animatedComplete,
			animatedNoCall,
			animatedSchedule,
			workingPercent,
			lunchPercent,
			completePercent,
			noCallPercent,
			schedulePercent,
		],
	);

	const { textRef: shiftCountPercent } = useProgressAnimation({
		...progressOptions,
		progress: 100,
	});

	// Подготовка данных для диаграммы
	const chartData = useMemo(() => {
		const labels = statusData.map((item) => item.title);
		const datasetData = statusData.map((item) => item.progressPercent);
		const backgroundColors = statusData.map((item) => item.iconColor);

		return {
			labels,
			datasets: [
				{
					label: 'Shifts',
					data: datasetData,
					backgroundColor: backgroundColors,
				},
			],
		};
	}, [statusData]);

	return (
		<div className={styles.shift_block}>
			<p className={styles.image_block__title}>Live Status Report</p>
			<div className={styles.shift_chart__wrapper}>
				<div className={styles.shift_chart}>
					<Doughnut
						options={{ cutout: 70 }}
						data={chartData}
						redraw
						updateMode="show"
					/>
					<span className={styles.shift_chart__title} ref={shiftCountPercent}>
						0
					</span>
				</div>
				<div className={styles.shift_info}>
					{statusData.map(
						({ iconColor, title, progressRef, textRef }, index) => (
							<div className={styles.shift_item} key={index}>
								<span className={styles.auth_title}>
									<Icon
										width={12}
										height={12}
										icon="material-symbols:circle"
										color={iconColor}
									/>
									{title}
								</span>
								<span className={styles.auth__progress__wrapper}>
									<span className={styles.auth__progress}>
										<span
											ref={progressRef}
											className={styles.auth__progress__bar}
											style={{
												width: '0%',
												backgroundColor: iconColor,
											}}
										></span>
									</span>
									<span ref={textRef} className={styles.auth__counter}>
										0
									</span>
								</span>
							</div>
						),
					)}
				</div>
			</div>
		</div>
	);
};

export default ShiftCard;
