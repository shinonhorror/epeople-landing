import React from 'react';
import styles from './BenefitsSection.module.css';

interface Benefit {
  title: string;
  description: string;
}

interface BenefitsSectionProps {
  benefits: Benefit[];
}

const BenefitsSection: React.FC<BenefitsSectionProps> = ({ benefits }) => {
  return (
    <section className={styles.benefitsSection}>
      <div className={styles.container}>
        {benefits.map((benefit, index) => (
          <div key={index} className={styles.benefitCard}>
            <h3 className={styles.benefitTitle}>{benefit.title}</h3>
            <p className={styles.benefitDescription}>{benefit.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BenefitsSection; 