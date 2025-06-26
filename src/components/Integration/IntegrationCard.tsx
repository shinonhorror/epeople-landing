import React from 'react';
import './IntegrationCard.css';

interface IntegrationCardProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt?: string;
}

const IntegrationCard: React.FC<IntegrationCardProps> = ({
  title,
  description,
  imageSrc,
  imageAlt = '',
}) => {
  return (
    <div className="integration-card">
      <div className="integration-card__text">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div className="integration-card__image">
        <img src={imageSrc} alt={imageAlt} />
      </div>
    </div>
  );
};

export default IntegrationCard;
