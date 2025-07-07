import styles from './index.module.css';
import TypingText from '@/components/ui/typing-text';
import HRSolution from './components/hr';
import LawSolution from './components/law';
import StaffingSolution from './components/staffing';
import FadeInSection from '@/components/ui/FadeInSection';

const Solutions = () => {
	return (
		<div className={styles.wrapper}>
			<TypingText
				text="Audit-Ready Compliance Solutions"
				classname={styles.title}
			/>
			<FadeInSection>
				<StaffingSolution />
			</FadeInSection>
			<FadeInSection>
				<LawSolution />
			</FadeInSection>
			<FadeInSection>
				<HRSolution />
			</FadeInSection>
		</div>
	);
};

export default Solutions;
