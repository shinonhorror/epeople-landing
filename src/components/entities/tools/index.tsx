'use client';

import { Icon } from '@iconify/react';
import styles from './index.module.css';
import { RefObject, useRef, useState } from 'react';
import { useTextAnimation } from '@/hooks/useTextAnimation';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper/modules';
import FadeInSection from '@/components/ui/FadeInSection';

const TAB_MOCK = [
	{
		title: 'Staffing Perfection',
		desc: 'Achieve Staffing Compliance while Cutting Labor Costs',
		icon: 'line-md:account',
		color: '#00bd75',
		id: 0,
		link: '#staff&comp',
		image: '/staffing.jpg',
	},
	{
		title: 'Labor Law Compliance',
		desc: 'Adherence to wage & hour laws, prevention of payroll violations, and reduction of legal and financial liabilities',
		icon: 'icon-park-outline:people-safe',
		color: '#1249fd',
		id: 1,
		link: '#labor&law',
		image: '/labor.jpg',
	},
	{
		title: 'Digital HR & Credentialing Hub',
		desc: 'Maintaining audit-ready records, onboarding efficiency, credential tracking, internal in-servicing, continuous education training, and standardized HR processes.',
		icon: 'line-md:clipboard-check',
		color: '#f3d700',
		id: 2,
		link: '#hr&staff',
		image: '/HR.jpg',
	},
];

const Tools = () => {
	const sectionRef = useRef(null);
	const [active, setActive] = useState(TAB_MOCK[0]);

	const animatedTextRef = useTextAnimation({
		types: 'lines,words',
		trigger: sectionRef,
		triggerOptions: {
			start: '-20% center',
			end: '+=200',
			toggleActions: 'play none none reverse',
			scrub: false,
		},
	});

	const animatedTitleRef = useTextAnimation({
		types: 'lines,words',
		trigger: sectionRef,
		triggerOptions: {
			start: '-20% center',
			end: '+=200',
			toggleActions: 'play none none reverse',
			scrub: false,
		},
	});

	return (
		<section className={styles.wrapper} ref={sectionRef}>
			<Swiper
				slidesPerView="auto"
				className={styles.swiper}
				modules={[FreeMode]}
				freeMode={{ enabled: true }}
			>
				{TAB_MOCK.map((item) => (
					<SwiperSlide className={styles.swiper_slide} key={item.title}>
						<div
							onClick={() => setActive(item)}
							className={`${styles.tab} ${
								item.id === active.id ? styles.tab_active : ''
							}`}
						>
							<Icon icon={item.icon} /> {item.title}
						</div>
					</SwiperSlide>
				))}
			</Swiper>
			<div className={styles.content}>
				<div className={styles.text_block}>
					<div
						className={styles.text_icon}
						style={{ backgroundColor: active.color }}
					>
						<Icon icon={active.icon} />
					</div>
					<div className={styles.text_wrapper}>
						<h3
							key={active.title}
							ref={animatedTitleRef as RefObject<HTMLHeadingElement>}
						>
							{active.title}
						</h3>
						<p
							key={active.desc}
							ref={animatedTextRef as RefObject<HTMLParagraphElement>}
						>
							{active.desc}
						</p>
					</div>
					<a href={active.link} className={styles.button}>
						Read More
					</a>
				</div>
				<FadeInSection>
					<Image
						src={active.image}
						alt={active.title}
						width={600}
						height={600}
					/>
				</FadeInSection>
			</div>
		</section>
	);
};

export default Tools;
