'use client';

import { useRef, useState } from 'react';
import styles from './index.module.css';
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import Image from 'next/image';
import TypingText from '@/components/ui/typing-text';
import { Icon } from '@iconify/react';

const SLIDES = [
	{
		title: 'Regulatory Compliance & Risk Mitigation',
		description:
			"Sleep easy knowing you're fully protected from fines and audits. Our automated compliance keeps your facility safe and staff accountable—freeing you to focus on care, not paperwork.",
		icon: 'icon-park-outline:people-safe',
		color: '#1249FD',
	},
	{
		title: 'Staffing Efficiency & Cost Optimization',
		description:
			'Cut costs and stress with AI-powered scheduling that fills shifts smartly and reduces overtime. Get the right people, at the right time, without wasting resources.',
		icon: 'uis:schedule',
		color: '#F39E00',
	},
	{
		title: 'Workforce Productivity & Retention',
		description:
			'Build a stronger team faster. Streamlined onboarding and clear scheduling boost engagement, cut turnover, and create a loyal, ready workforce.',
		icon: 'ion:bar-chart',
		color: '#79DE32',
	},
	{
		title: 'Operational Transparency & Decision-Making',
		description:
			'Make confident decisions with real-time data and automated alerts. Stay ahead with clear insights that keep staffing, HR, and payroll running smoothly.',
		icon: 'hugeicons:ai-user',
		color: '#BA52FF',
	},
	{
		title: 'Revenue Protection & Business Growth',
		description:
			'Protect your revenue by avoiding costly penalties and optimizing labor expenses. Scale your operations with ease and watch your facility thrive.',
		icon: 'healthicons:money-bag',
		color: '#00BD75',
	},
];

const Compliance = () => {
	const [activeIndex, setActiveIndex] = useState(0);

	const swiperRef = useRef<SwiperRef>(null);

	const handleSlideChange = () => {
		if (swiperRef.current && swiperRef.current?.swiper) {
			const swiperInstance = swiperRef.current?.swiper;
			setActiveIndex(swiperInstance.realIndex);
		}
	};

	return (
		<section className={styles.section}>
			<TypingText text="Effortless SNF Compliance" classname={styles.title} />
			<div className={styles.wrapper}>
				<Swiper
					className={styles.swiper}
					ref={swiperRef}
					loop
					autoplay={{ delay: 5000, pauseOnMouseEnter: true }}
					modules={[Autoplay]}
					onSlideChange={handleSlideChange}
					breakpoints={{
						0: {
							direction: 'horizontal',
							slidesPerView: 1,
							spaceBetween: 8,
						},
						968: {
							direction: 'vertical',
							slidesPerView: 3,
							spaceBetween: 24,
						},
					}}
				>
					{SLIDES.map((item, index) => {
						const isActive =
							activeIndex === SLIDES.length - 1
								? index === 0
								: activeIndex + 1 === index;

						return (
							<SwiperSlide className={styles.swiper_slide}>
								<div
									onClick={() => {
										index === 0
											? swiperRef.current?.swiper.slideToLoop(
													SLIDES.length - 1,
													400,
											  )
											: swiperRef.current?.swiper.slideToLoop(index - 1, 400);
									}}
									className={`${styles.slide__wrapper} ${
										isActive ? styles.slide__wrapper__active : ''
									}`}
								>
									<span
										style={{ backgroundColor: item.color }}
										className={styles.slide__number}
									>
										<Icon icon={item.icon} />
									</span>
									<h3 className={styles.slide__title}>{item.title}</h3>
									<p className={styles.slide__description}>
										{item.description}
									</p>
								</div>
							</SwiperSlide>
						);
					})}
				</Swiper>
				<div className={styles.image_wrapper}>
					<Image
						src="/fact_page_2.svg"
						alt="time-card"
						width={600}
						height={600}
					/>
				</div>
			</div>
		</section>
	);
};

export default Compliance;
