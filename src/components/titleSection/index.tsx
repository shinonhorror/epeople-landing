import React from 'react';
import './style.css';
import TypingText from '../ui/typing-text';

interface TitleSectionProps {
	title: string;
	description?: string;
}

const TitleSection: React.FC<TitleSectionProps> = ({ title, description }) => {
	return (
		<section className="title-section">
			<TypingText text={title} classname="title-section__title" />
			<p className="title-section__description">{description}</p>
		</section>
	);
};

export default TitleSection;
