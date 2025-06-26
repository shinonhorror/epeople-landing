import React from 'react';
import './FeatureSectionWithImage.css';

interface FeatureItem {
  icon: string;
  title: string;
  description?: string;
  boldText?: string;
}

interface FeatureSectionWithImageProps {
  title: string;
  features: FeatureItem[];
  imageSrc?: string;
  imageAlt?: string;
  imageList?: string[];
  reverse?: boolean;
}

const FeatureSectionWithImage: React.FC<FeatureSectionWithImageProps> = ({
  title,
  features,
  imageSrc,
  imageAlt = '',
  reverse = false,
  imageList,
}) => {
  return (
    <section className={`feature-section ${reverse ? 'reverse' : ''}`}>
      <div className="feature-section__content">
        <h2>{title}</h2>
        <ul className="feature-section__list">
          {features.map((item, index) => (
            <li key={index} className="feature-item">
              <img src={item.icon} alt="" className="feature-item__icon" />
              <div className="feature-item__text">
                <h3>{item.title}</h3>
                {item.description && <div className='feature-item__text_desc'>
                  {item.description}{' '}
                  {item.boldText && <p className='feature-item__text_bold'>{item.boldText}</p>}
                </div>}
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="feature-section__image">
        {imageList ? (
          <div className="feature-image-stack">
            {imageList.map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`image-${index}`}
                className="feature-image-layer"
                style={{
                  zIndex: imageList.length - index,
                  transform: `translate(${-index * 20}px, ${-index * 20}px)`,
                }}
              />
            ))}
          </div>
        ) : (
          <img src={imageSrc} alt={imageAlt} />
        )}
      </div>
    </section>
  );
};

export default FeatureSectionWithImage;
