import React from 'react';
import './style.css';
import Link from 'next/link';

interface AddsWithPhotoSectionProps {
  title: string;
  description: string;
  buttonText: string;
  imageSrc?: string;
  imageList?: string[];
  imageAlt?: string;
  reverse?: boolean;
  onClinkLink?: string;
}

const AddsWithPhotoSection: React.FC<AddsWithPhotoSectionProps> = ({
  title,
  description,
  buttonText,
  imageSrc,
  imageList,
  imageAlt = '',
  reverse = false,
  onClinkLink = '#',
}) => {
  return (
    <section className={`adds-section ${reverse ? 'reverse' : ''}`}>
      <div className="adds-section__content">
        <div className="adds-section__text">
          <div>
          <h2>{title}</h2>
          <p>{description}</p>
          </div>
          <Link className="adds-section__button" href={onClinkLink}>
            {buttonText}
          </Link>
        </div>
        <div className={imageList ? 'adds-section__images' : 'adds-section__image'}>
          {imageList ? (
            <div className="adds-section__image-stack">
              {imageList.map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt={`Image ${index}`}
                  className="adds-section__image-layer"
                  style={{
                    zIndex: imageList.length - index,
                    transform: `translate(${index * -63}px, ${index * -27}px)`
                  }}
                />
              ))}
            </div>
          ) : (
            <img className='addds-section__single_photo' src={imageSrc} alt={imageAlt} />
          )}
        </div>
      </div>
    </section>
  );
};

export default AddsWithPhotoSection;
