import TitleSection from '@/components/titleSection';
import ValuePropsBanner from '@/components/ValuePropsBanner';
import ScheduleDemoForm from '@/components/formSection';
import style from './page.module.css';
import './styles.css';
import FadeInSection from '@/components/ui/FadeInSection';
import Compliance from '@/components/entities/compliance';
import Solutions from '@/components/entities/solutions';
import Integration from '@/components/entities/integration';
import Benefits from '@/components/entities/benefits';
import Welcome from '@/components/entities/welcome';

export default function Home() {
	return (
		<div className={style.main}>
			<Welcome />
			{/* <FadeInSection>
				<Compliance />
			</FadeInSection> */}
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
			<FadeInSection>
				<Benefits />
			</FadeInSection>
			<Solutions /> <Integration />
			<FadeInSection>
				<section id="scheduleDemo">
					<ScheduleDemoForm />
				</section>
			</FadeInSection>
		</div>
	);
}
