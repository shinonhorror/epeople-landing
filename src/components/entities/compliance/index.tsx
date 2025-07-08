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
		title: 'Automate Staffing Compliance',
		icon: 'ic:baseline-auto-mode',
		color: '#1249FD',
	},
	{
		title: 'Reduce Labor Costs',
		icon: 'material-symbols-light:payment-arrow-down-outline',
		color: '#00BD75',
	},
	{
		title: 'Pass Any PPD or PBJ Audit',
		icon: 'hugeicons:audit-01',
		color: '#79DE32',
	},
	{
		title: 'Mitigate Risk of Wage Theft',
		icon: 'icon-park-outline:safe-retrieval',
		color: '#BA52FF',
	},
	{
		title: 'Mitigate Risk of Wage & Hour Allegations',
		icon: 'octicon:law-24',
		color: '#F39E00',
	},
	{
		title: 'Mitigate Risk of Staffing Non-Compliance Fines',
		icon: 'fluent:money-off-20-regular',
		color: '#EC4E46',
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
			<div className={styles.title_wrapper}>
				<TypingText text="Effortless SNF Compliance" classname={styles.title} />
				<p className={styles.title_desc}>
					With our platform, you’re always ready for any PPD or PBJ audit — no
					last-minute scrambles, no costly errors. Just clean data, accurate
					records, and full confidence in your compliance status.
				</p>
			</div>
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
									<h3 className={styles.slide__title}>
										{item.title}{' '}
										<span
											style={{ backgroundColor: item.color }}
											className={styles.slide__number}
										>
											<Icon icon={item.icon} />
										</span>
									</h3>
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
