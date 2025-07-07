import AddsComponent from '@/components/addsComponent';
import FeatureListWithImageSection from '@/components/FeatureListWithImage/FeatureListWithImageSection';
import ScheduleDemoForm from '@/components/formSection';
import TitleSection from '@/components/titleSection';
import ClientFullpageProvider from '@/components/ui/ClientFullpageProvider';
import Footer from '@/components/entities/footer/Footer';
import FullpageProvider from '@/components/ui/FullpageProvider';

export default function About() {
	return (
		<FullpageProvider>
			<div className="section staff-comp">
				<div className="section-content">
					<div className="anime">
						<TitleSection title="For Facilities" />
						<FeatureListWithImageSection
							sectionTitle="Staffing Compliance"
							focus="Automated Scheduler + Global Staffing Marketplace"
							features={[
								{
									icon: 'nike.svg',
									title: 'Live Census Data',
									subtitle: 'Through EMR Integration',
								},
								{
									icon: 'nike.svg',
									title: 'Risk-Adjusted PPD Planning',
									subtitle: 'Based on Attendance Statistics',
								},
								{
									icon: 'nike.svg',
									title: 'Instant Assignment Creation',
									subtitle: 'Through Live Census Data',
								},
								{
									icon: 'nike.svg',
									title: 'Automatic Shift Fill',
									subtitle: 'Using Internal & Agency Staff',
								},
								{
									icon: 'nike.svg',
									title: 'AI Best-Match Suggestion',
									subtitle: 'Based on Availability & Behavior Scoring',
								},
							]}
							imageSrc="fact_page_1.svg"
							imageAlt="Scheduler & Staffing UI"
						/>
					</div>
				</div>
			</div>

			<div className="section wage-hour">
				<div className="section-content">
					<div className="anime">
						<FeatureListWithImageSection
							sectionTitle="Wage & Hour Compliance"
							focus="Automated Workforce Compliance"
							features={[
								{
									icon: 'money_globus.svg',
									title: 'Time & Attendance Tracker',
									subtitle: 'With Notification Enforcement',
								},
								{
									icon: 'money_globus.svg',
									title: 'AI Audits',
									subtitle:
										'Employee Self-Correction Steps For Wage Discrepancies',
								},
								{
									icon: 'money_globus.svg',
									title: 'Enforce Meal & Rest Breaks',
									subtitle: 'More Than Just a Reminder',
								},
								{
									icon: 'money_globus.svg',
									title: 'Indemnification Documentation',
									subtitle: 'Signed For Each Shift',
								},
								{
									icon: 'money_globus.svg',
									title: 'Data Accuracy',
									subtitle: 'Face ID & Geo Tracking',
								},
							]}
							imageSrc="fact_page_2.svg"
							imageAlt="Scheduler & Staffing UI"
						/>
					</div>
				</div>
			</div>

			<div className="section hr-staff">
				<div className="section-content">
					<div className="anime">
						<FeatureListWithImageSection
							sectionTitle="HR & Staff Development"
							focus=""
							features={[
								{
									icon: 'mini_people.svg',
									title: 'Performance Monitoring',
									subtitle: 'Track Performance Metrics',
								},
								{
									icon: 'mini_people.svg',
									title: 'Behavior Scoring',
									subtitle: 'Based on Tracked Performance',
								},
								{
									icon: 'mini_people.svg',
									title: 'Disciplinary Automation',
									subtitle: 'Eliminate Bias & Ensure Documentation',
								},
								{
									icon: 'mini_people.svg',
									title: 'Staff Development',
									subtitle: 'Virtual In-Service Training',
								},
								{
									icon: 'mini_people.svg',
									title: 'Digital On/Off Boarding',
									subtitle: 'Automated for Both W2 and I9 Staff',
								},
								{
									icon: 'mini_people.svg',
									title: 'Intelligent Dashboards',
									subtitle:
										'Flagged Operational Issues & Suggestions for Improvement',
								},
							]}
							imageSrc="fact_page_3.png"
							imageAlt="Scheduler & Staffing UI"
						/>
						<AddsComponent
							title="ePeople Shift Marketplace – Like An Agency, But Better!"
							buttonText="Sign-Up Today"
							onClinkLink="https://marketplace.epeople.com/auth"
						/>
					</div>
				</div>
			</div>

			<div className="section schedule-demo-section">
				<div className="section-content">
					<div className="anime">
						<div className="schedule-demo__form_facilities">
							<ScheduleDemoForm />
						</div>
						<Footer />
					</div>
				</div>
			</div>
		</FullpageProvider>
	);
}
