import TypingText from '@/components/ui/typing-text';
import styles from './index.module.css';
import IntegrationCard from './components/card';
import FadeInSection from '@/components/ui/FadeInSection';
import PayrollCard from './components/card/payroll';
import EMRCard from './components/card/emr';

const INTEGRATION_MOCK = [
	{
		title: 'Electronic Medical Records (EMR)',
		description:
			'Live Census Data For Accurate PPD Planning & Effect Assignment Creation Per Shift',
		icon: 'material-symbols:medical-information',
		color: '#79DE32',
		children: <EMRCard />,
	},
	{
		title: 'Payroll Processors',
		description:
			"Plug ePeople's Time Data into your Payroll Solution for Seamless End-to-End Wage & Hour Compliance",
		icon: 'streamline-plump:payment-recieve-7-solid',
		color: '#1249FD',
		children: <PayrollCard />,
	},
];

const Integration = () => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.title_wrapper}>
				<TypingText text="Seamless Integrations" classname={styles.title} />
				<p className={styles.title_desc}>
					Let us handle the connection so you can focus on what matters most —
					your <b> people</b> and your <b> mission</b>.
				</p>
			</div>

			<FadeInSection>
				<div className={styles.list}>
					{INTEGRATION_MOCK.map((item) => (
						<IntegrationCard {...item} key={item.title}>
							{item.children}
						</IntegrationCard>
					))}
				</div>
			</FadeInSection>
		</div>
	);
};

export default Integration;
