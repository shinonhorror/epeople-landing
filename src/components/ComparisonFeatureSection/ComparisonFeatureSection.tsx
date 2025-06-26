import React from 'react';
import './ComparisonFeatureSection.css';

interface ComparisonItem {
  icon: string;
  text: string;
}

interface ComparisonColumn {
  title: string;
  items: ComparisonItem[];
}

interface ComparisonFeatureSectionProps {
  sectionTitle: string;
  leftColumn: ComparisonColumn;
  rightColumn: ComparisonColumn;
  imageSrc?: string;
  imageAlt?: string;
  imageList?: string[];
}

const ComparisonFeatureSection: React.FC<ComparisonFeatureSectionProps> = ({
  sectionTitle,
  leftColumn,
  rightColumn,
  imageSrc,
  imageAlt = '',
  imageList
}) => {
  return (
    <section className="comparison-section">
      <h2 className="comparison-title">{sectionTitle}</h2>
      <div className="comparison-content">
        <div className="comparison-text">
          {[leftColumn, rightColumn].map((col, idx) => (
            <div className="comparison-column" key={idx}>
              <h3>{col.title}</h3>
              <ul>
                {col.items.map((item, i) => (
                  <li key={i}>
                    <img src={item.icon} alt="" />
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="comparison-image">
          {imageList ? (
            <div className="comparison-image-stack">
              {imageList.map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt={`screenshot-${index}`}
                  className="comparison-image-layer"
                  style={{
                    zIndex: imageList.length - index,
                    transform: `translate(${-index * 60}px, ${-index * 60}px)`,
                  }}
                />
              ))}
            </div>
          ) : (
            <img src={imageSrc} alt={imageAlt} />
          )}
        </div>
      </div>
    </section>
  );
};

export default ComparisonFeatureSection;
