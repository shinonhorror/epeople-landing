import styles from './index.module.css';
import { FC } from 'react';
import { Icon } from '@iconify/react';

interface IIntegrationCard {
	title: string;
	description: string;
	icon: string;
	color: string;
	children: React.ReactNode;
}

const IntegrationCard: FC<IIntegrationCard> = ({
	title,
	description,
	icon,
	color,
	children,
}) => {
	return (
		<div className={styles.wrapper}>
			<h3 className={styles.title}>
				<div className={styles.title_icon} style={{ backgroundColor: color }}>
					<Icon icon={icon} />
				</div>
				{title}
			</h3>
			<p>{description}</p>
			{children}
		</div>
	);
};

export default IntegrationCard;
