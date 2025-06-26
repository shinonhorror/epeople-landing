import React from 'react';
import styles from './ValuePropsBanner.module.css';

interface IValuePropsBanner {
	valueProps: string[];
	title: string;
}

const ValuePropsBanner: React.FC<IValuePropsBanner> = ({
	valueProps,
	title,
}) => (
	<>
	
		<section className={styles.banner}>
			<ul className={styles.valuePropsList}>
				{valueProps.map((prop, idx) => (
					<li key={idx} className={styles.valueProp}>
						<span>{prop}</span>
					</li>
				))}
			</ul>
		</section>
	</>
);

export default ValuePropsBanner;
