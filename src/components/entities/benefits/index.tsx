import styles from './index.module.css';
import { Icon } from '@iconify/react';
import SectionTitle from '../sectionTitle';

const BENEFITS = [
	{
		id: 1,
		title: 'Automate Staffing',
		description: 'Always Meet Minimum Staffing Requirements',
		icon: 'ic:baseline-auto-mode',
		color: '#1249FD',
	},
	{
		id: 2,
		title: 'Mitigate Risk',
		description: 'Of Wage & Hour Claims, Staffing Non-Compliance & Wage Theft',
		icon: 'icon-park-outline:safe-retrieval',
		color: '#BA52FF',
	},
	{
		id: 3,
		title: 'Pass Audits',
		description: 'PPD & PBJ Reports Ready with 1-Click',
		icon: 'hugeicons:audit-01',
		color: '#79DE32',
	},
	{
		id: 4,
		title: 'Reduce Costs',
		description: 'Optimize Labor Cost, Avoid Non-Compliance Fines',
		icon: 'material-symbols-light:payment-arrow-down-outline',
		color: '#00BD75',
	},
	{
		id: 5,
		title: 'Level-Up Performance',
		description:
			'Compliance with Company Policies and State/ Federal Regulations',
		icon: 'streamline-ultimate:performance-increase',
		color: '#EC4E46',
	},
	{
		id: 6,
		title: 'Eliminate Bias',
		description: 'Automated Disciplinary Actions',
		icon: 'fluent:flash-auto-24-regular',
		color: '#F39E00',
	},
];

const Benefits = () => {
	return (
		<section className={styles.wrapper}>
			<SectionTitle
				title="Your Business Advantages"
				subtitle="Key Benefits"
				desc="These aren’t just features — they’re strategic wins for your facility."
			/>

			<div className={styles.list}>
				{BENEFITS.map((item, index) => (
					<div key={index} className={styles.item}>
						<div className={styles.item_icon} style={{ color: item.color }}>
							<Icon icon={item.icon} />
						</div>
						<p className={styles.item_title}>{item.title}</p>
						<p className={styles.item_desc}>{item.description}</p>
					</div>
				))}
			</div>
		</section>
	);
};

export default Benefits;
