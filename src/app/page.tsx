import AddsComponent from '@/components/addsComponent';
import TitleSection from '@/components/titleSection';
import ValuePropsBanner from '@/components/ValuePropsBanner';
import AddsWithPhotoSection from '@/components/AddsWithPhotoSection';
import ScheduleDemoForm from '@/components/formSection';
import style from './page.module.css';
import './styles.css';
import FeatureSectionWithImage from '@/components/FeatureSectionWithImage/FeatureSectionWithImage';
import IntegrationsSection from '@/components/Integration/IntegrationsSection';
import FadeInSection from '@/components/ui/FadeInSection';
import FeatureListWithImageSection from '@/components/FeatureListWithImage/FeatureListWithImageSection';
import BenefitsSection from '@/components/BenefitsSection';
import SolutionsSection from '@/components/SolutionsSection';
import Compliance from '@/components/entities/comilance';
import TypingText from '@/components/ui/typing-text';

export default function Home() {
	return (
		<div className={style.main}>
			<TitleSection title="ePeople AI" description="" />
			<FadeInSection>
				<Compliance />
			</FadeInSection>
			<FadeInSection>
				<ValuePropsBanner
					title="Audit-Ready Compliance Solutions"
					valueProps={[
						'Zero Friction Deployment',
						'No Contracts',
						'No Hidden Fees',
						'Increase Revenue / Optimize Expenses',
						'Mitigate Risk',
					]}
				/>
			</FadeInSection>
			{/* <FadeInSection>
				<BenefitsSection
					benefits={[
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
					]}
				/>
			</FadeInSection> */}
			{/* <FadeInSection>
      <SolutionsSection />
    </FadeInSection> */}
			{/* <FadeInSection>
				<FeatureSectionWithImage
					title="For Facilities"
					features={[
						{
							icon: 'nike.svg',
							title: 'Staffing Perfection',
							description:
								'Automatically Create and Fill Shifts to Always Meet Minimum Staffing Requirements',
							boldText: 'Global Staff Marketplace',
						},
						{
							icon: 'money_globus.svg',
							title: 'Wage & Hour Compliance',
							description:
								'Eliminate Wage & Hour Threats. Automate Compliance with Internal Policy',
						},
						{
							icon: 'mini_people.svg',
							title: 'HR & Staff Development',
							description:
								'On/Off boarding, Training, Performance, Disciplinary Automation and More!',
						},
					]}
					imageSrc="facilities_2.svg"
					imageAlt="Facility Dashboard"
				/>
				<AddsComponent
					title="Works Seamlessly With"
					buttonText="Schedule a Demo"
					onClinkLink="#scheduleDemo"
				/>
			</FadeInSection> */}{' '}
			<FadeInSection>
				<IntegrationsSection />
			</FadeInSection>
			<FadeInSection>
				<TypingText
					text="Audit-Ready Compliance Solutions"
					classname="solutions"
				/>
			</FadeInSection>
			<FadeInSection>
				<section id="staff&comp">
					<FeatureListWithImageSection
						sectionTitle="Staffing Perfection"
						focus="Compliance with State and Federal Staffing Ratios"
						features={[
							{
								title: 'Optimize Balance Between Overtime & Agency Staff Usage',
							},
							{ title: 'Reduce Dependence on Costly Agency Staff' },
							{ title: 'Real-Time Adjustments to Call-Offs' },
							{ title: 'Proactive Compliance Alerts & Notifications' },
							{ title: 'Integration with Staffing Agency Marketplace' },
						]}
						imageSrc="fact_page_1.svg"
						imageAlt="Scheduler & Staffing UI"
					/>
				</section>
			</FadeInSection>
			<FadeInSection>
				<section id="labor&law">
					<FeatureListWithImageSection
						sectionTitle="Labor Law Compliance"
						focus="Adherence to wage & hour laws, prevention of payroll violations, and reduction of legal and financial liabilities."
						features={[
							{ title: 'Wage & Hour Indemnification' },
							{ title: 'Eliminate Threat of Wage Theft' },
							{ title: 'Eliminate Costly Fines & Penalties' },
							{ title: 'Reduce Liability' },
							{ title: 'Increase Profit Margin' },
						]}
						imageSrc="fact_page_2.svg"
						imageAlt="Scheduler & Staffing UI"
					/>
				</section>
			</FadeInSection>
			<FadeInSection>
				<section id="hr&staff">
					<FeatureListWithImageSection
						sectionTitle="HR Documentation Compliance"
						focus="Maintaining audit-ready records, onboarding efficiency, credential tracking, internal in-servicing, continuous education training, and standardized HR processes."
						features={[
							{ title: 'Audit-Ready Documentation' },
							{ title: 'Digital Onboarding & Credentialing' },
							{ title: 'Automated Disciplinary Enforcement' },
							{ title: 'Improved Employee Engagement & Satisfaction' },
							{ title: 'Retention & Stability Improvement' },
							{ title: 'Centralized Documentation Management' },
						]}
						imageSrc="fact_page_3.png"
						imageAlt="Scheduler & Staffing UI"
					/>
				</section>
			</FadeInSection>
			{/* <FadeInSection>
				<AddsComponent
					title="ePeople Shift Marketplace – Like An Agency, But Better!"
					buttonText="Sign-Up Today"
					onClinkLink="https://marketplace.epeople.com/auth"
				/>
			</FadeInSection> */}
			<FadeInSection>
				<section id="scheduleDemo">
					<ScheduleDemoForm />
				</section>
			</FadeInSection>
		</div>
	);
}
