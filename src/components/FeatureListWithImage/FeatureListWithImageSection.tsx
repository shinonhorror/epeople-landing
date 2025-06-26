import React from 'react';
import './FeatureListWithImageSection.css';

interface FeatureItem {
	title: string;
	subtitle?: string;
	icon?: string;
}

interface FeatureListWithImageSectionProps {
	sectionTitle: string;
	focus?: string;
	features: FeatureItem[];
	imageSrc?: string;
	imageAlt?: string;
	reverse?: boolean;
}

const FeatureListWithImageSection: React.FC<
	FeatureListWithImageSectionProps
> = ({
	sectionTitle,
	focus,
	features,
	imageSrc,
	imageAlt = '',
	reverse = false,
}) => {
	return (
		<div className="feature-list-section-main">
			<div className="feature-list-section_text">
				<h2 className="feature-list-section_title">{sectionTitle}</h2>
				{focus && <div className="feature-list-section__focus">{focus}</div>}
			</div>

			<section className={`feature-list-section ${reverse ? 'reverse' : ''}`}>
				<div className="feature-list-section__content">
					<ul className="feature-list-section__list">
						{features.map((item, index) => (
							<li className="feature-item" key={index}>
								{item.icon && <img src={item.icon} alt="" />}
								<div>
									<h4>{item.title}</h4>
									{item.subtitle && <p>{item.subtitle}</p>}
								</div>
							</li>
						))}
					</ul>
				</div>
				{imageSrc && (
					<div className="feature-list-section__image">
						<img src={imageSrc} alt={imageAlt} />
					</div>
				)}
			</section>
		</div>
	);
};

export default FeatureListWithImageSection;
