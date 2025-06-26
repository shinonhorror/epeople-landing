import React from 'react';
import styles from './SolutionsSection.module.css';

interface Solution {
	title: string;
	focus: string;
	features: string[];
}

const solutions: Solution[] = [
	{
		title: 'Staffing Perfection',
		focus: 'Compliance with State and Federal Staffing Ratios',
		features: [
			'Optimize Balance Between Overtime & Agency Staff Usage',
			'Reduce Dependence on Costly Agency Staff',
			'Real-Time Adjustments to Call-Offs',
			'Proactive Compliance Alerts & Notifications',
			'Integration with Staffing Agency Marketplace',
		],
	},
	{
		title: 'Labor Law Compliance',
		focus:
			'Adherence to wage & hour laws, prevention of payroll violations, and reduction of legal and financial liabilities.',
		features: [
			'Seamless Compliance with Wage & Hour Laws',
			'Liability Reduction',
			'Data-Driven HR & Payroll Accuracy',
			'Eliminate Costly Fines & Penalties',
			'Increase Profit Margins through Labor Efficiency',
		],
	},
	{
		title: 'HR Documentation Compliance',
		focus:
			'Maintaining audit-ready records, onboarding efficiency, credential tracking, internal in-servicing, continuous education training, and standardized HR processes.',
		features: [
			'Audit-Ready Documentation',
			'Faster Onboarding & Credentialing',
			'Automated Disciplinary Action Tracking',
			'Improved Employee Engagement & Satisfaction',
			'Retention & Stability Improvement',
			'Centralized Documentation Management',
		],
	},
];

const SolutionsSection: React.FC = () => {
	return (
		<section className={styles.solutionsSection}>
			<h2 className={styles.heading}>Solutions</h2>
			<div className={styles.solutionsGrid}>
				{solutions.map((solution, idx) => (
					<div key={idx} className={styles.solutionCard}>
						<h3 className={styles.solutionTitle}>{solution.title}</h3>
						<p className={styles.solutionFocus}>{solution.focus}</p>
						<ul className={styles.featuresList}>
							{solution.features.map((feature, i) => (
								<li key={i} className={styles.featureItem}>
									{feature}
								</li>
							))}
						</ul>
					</div>
				))}
			</div>
		</section>
	);
};

export default SolutionsSection;
