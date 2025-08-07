'use client';

import Image from 'next/image';
import styles from './index.module.css';

const MarketplaceCard = () => {
	return (
		<div className={styles.wrapper}>
			<Image
				src="/marketplace.jpg"
				width={600}
				height={600}
				alt="marketplace"
			/>
		</div>
	);
};

export default MarketplaceCard;
