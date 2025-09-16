import styles from './index.module.css';
import HRSolution from './components/hr';
import LawSolution from './components/law';
import StaffingSolution from './components/staffing';
import FadeInSection from '@/components/ui/FadeInSection';
import SectionTitle from '../sectionTitle';

const Solutions = () => {
	return (
		<div className={styles.wrapper}>
			<SectionTitle
				title="Audit-Ready Compliance Solutions"
				subtitle="Solutions"
				desc="When compliance is built in, audits are just another day at the
					office."
			/>

			<StaffingSolution />
			<LawSolution />
			<HRSolution />
		</div>
	);
};

export default Solutions;
