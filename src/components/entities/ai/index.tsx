import styles from './index.module.css';
import SectionTitle from '../sectionTitle';
import Image from 'next/image';

const AI_MOCK = [
	{
		title: 'Security',
		desc: 'Face Recognition confirms the pre-verified licensed worker is who they say they are',
		image: '/security.jpg',
	},
	{
		title: 'Compliance',
		desc: 'Live Audit of Risk-Adjusted PPD & Credentialing Before Every Shift',
		image: '/compliance.jpg',
	},
	{
		title: 'Performance',
		desc: 'A unified solution for comprehensive attendance tracking, automated discipline, and guided self-resolution.',
		image: '/performance.jpg',
	},
];

const AI = () => {
	return (
		<section className={styles.wrapper}>
			<SectionTitle
				title="AI Assistants"
				subtitle="artificial intelligence"
				desc="Automate The Boring  - To Focus On The Important"
			/>
			<div className={styles.list}>
				{AI_MOCK.map((item) => (
					<div className={styles.item} key={item.title}>
						<Image
							src={item.image}
							width={600}
							height={600}
							alt="marketplace"
						/>
						<p className={styles.title}>{item.title}</p>
						<p className={styles.desc}>{item.desc}</p>
					</div>
				))}
			</div>
		</section>
	);
};

export default AI;
