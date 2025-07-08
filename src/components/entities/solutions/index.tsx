import styles from './index.module.css';
import TypingText from '@/components/ui/typing-text';
import HRSolution from './components/hr';
import LawSolution from './components/law';
import StaffingSolution from './components/staffing';
import FadeInSection from '@/components/ui/FadeInSection';

const Solutions = () => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.title_wrapper}>
				<TypingText
					text="Audit-Ready Compliance Solutions"
					classname={styles.title}
				/>
				<p className={styles.title_desc}>
					When compliance is built in, audits are just another day at the
					office.
				</p>
			</div>

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
