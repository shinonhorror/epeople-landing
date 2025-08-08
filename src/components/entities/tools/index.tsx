'use client';

import { Icon } from '@iconify/react';
import styles from './index.module.css';
import { useRef, useState } from 'react';
import { useTextAnimation } from '@/hooks/useTextAnimation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper/modules';
import HRSolution from '../solutions/components/hr';
import LawSolution from '../solutions/components/law';
import StaffingSolution from '../solutions/components/staffing';

const TAB_MOCK = [
	{
		title: 'Staffing Perfection',
		desc: 'Achieve Staffing Compliance while Cutting Labor Costs',
		icon: 'line-md:account',
		color: '#00bd75',
		id: 0,
		link: 'staff&comp',
		image: '/staffing.jpg',
		component: <StaffingSolution />,
	},
	{
		title: 'Labor Law Compliance',
		desc: 'Adherence to wage & hour laws, prevention of payroll violations, and reduction of legal and financial liabilities',
		icon: 'icon-park-outline:people-safe',
		color: '#1249fd',
		id: 1,
		link: 'labor&law',
		image: '/labor.jpg',
		component: <LawSolution />,
	},
	{
		title: 'Digital HR & Credentialing Hub',
		desc: 'Maintaining audit-ready records, onboarding efficiency, credential tracking, internal in-servicing, continuous education training, and standardized HR processes.',
		icon: 'line-md:clipboard-check',
		color: '#f3d700',
		id: 2,
		link: 'hr&staff',
		image: '/HR.jpg',
		component: <HRSolution />,
	},
];

const Tools = () => {
	const sectionRef = useRef(null);
	const [active, setActive] = useState(TAB_MOCK[0]);

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
							style={
								{
									'--tab-color': item.color,
									color: item.id === active.id ? item.color : undefined,
								} as React.CSSProperties
							}
						>
							<Icon icon={item.icon} /> <span>{item.title}</span>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
			<div key={active.id}>{active.component}</div>
		</section>
	);
};

export default Tools;
