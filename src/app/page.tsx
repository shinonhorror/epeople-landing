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
import Compliance from '@/components/entities/compliance';
import TypingText from '@/components/ui/typing-text';
import Solutions from '@/components/entities/solutions';
import Integration from '@/components/entities/integration';

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
			<Integration />
			<Solutions />
			<FadeInSection>
				<section id="scheduleDemo">
					<ScheduleDemoForm />
				</section>
			</FadeInSection>
		</div>
	);
}
