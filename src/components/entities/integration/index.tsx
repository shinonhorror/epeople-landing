import styles from './index.module.css';
import IntegrationCard from './components/card';
import FadeInSection from '@/components/ui/FadeInSection';
import PayrollCard from './components/card/payroll';
import EMRCard from './components/card/emr';
import SectionTitle from '../sectionTitle';
import MarketplaceCard from './components/card/marketplace';

const INTEGRATION_MOCK = [
	{
		title: 'Staffing Agency Marketplace ',
		description:
			'Effortless On-Click Open Shift Management straight from your Schedule',
		icon: 'material-symbols:shopping-bag-speed',
		color: '#BA52FF',
		children: <MarketplaceCard />,
	},
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
			<SectionTitle
				title="Seamless Integrations"
				subtitle="Integration"
				desc="	Let us handle the connection so you can focus on what matters most —
					your <b> people</b> and your <b> mission</b>."
			/>

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
