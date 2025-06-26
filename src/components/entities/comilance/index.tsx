'use client';

import { useRef, useState } from 'react';
import './index.css';
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import Image from 'next/image';
import TypingText from '@/components/ui/typing-text';

const SLIDES = [
	{
		title: 'Regulatory Compliance & Risk Mitigation',
		description:
			"Sleep easy knowing you're fully protected from fines and audits. Our automated compliance keeps your facility safe and staff accountable—freeing you to focus on care, not paperwork.",
	},
	{
		title: 'Staffing Efficiency & Cost Optimization',
		description:
			'Cut costs and stress with AI-powered scheduling that fills shifts smartly and reduces overtime. Get the right people, at the right time, without wasting resources.',
	},
	{
		title: 'Workforce Productivity & Retention',
		description:
			'Build a stronger team faster. Streamlined onboarding and clear scheduling boost engagement, cut turnover, and create a loyal, ready workforce.',
	},
	{
		title: 'Operational Transparency & Decision-Making',
		description:
			'Make confident decisions with real-time data and automated alerts. Stay ahead with clear insights that keep staffing, HR, and payroll running smoothly.',
	},
	{
		title: 'Revenue Protection & Business Growth',
		description:
			'Protect your revenue by avoiding costly penalties and optimizing labor expenses. Scale your operations with ease and watch your facility thrive.',
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
		<section className="section">
			<TypingText text="Effortless SNF Compliance" classname="title" />
			<div className="wrapper">
				<Swiper
					ref={swiperRef}
					spaceBetween={24}
					slidesPerView={3}
					loop
					direction={'vertical'}
					autoplay={{ delay: 3000 }}
					modules={[Autoplay]}
					onSlideChange={handleSlideChange}
				>
					{SLIDES.map((item, index) => {
						const isActive =
							activeIndex === SLIDES.length - 1
								? index === 0
								: activeIndex + 1 === index;

						return (
							<SwiperSlide>
								<div
									className={`slide__wrapper ${
										isActive ? 'slide__wrapper--active' : ''
									}`}
								>
									<span className="slide__number">{index + 1}</span>
									<h3 className="slide__title">{item.title}</h3>
									<p className="slide__description">{item.description}</p>
								</div>
							</SwiperSlide>
						);
					})}
				</Swiper>
				<div className="image-wrapper">
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
