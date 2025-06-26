import React from 'react';
import IntegrationCard from './IntegrationCard';
import './IntegrationsSection.css';

const IntegrationsSection: React.FC = () => {
  const integrations = [
		{
			title: 'Electronic Medical Records (EMR)',
			description:
				'Live Census Data For Accurate PPD Planning & Effect Assignment Creation Per Shift',
			imageSrc: 'emr.jpg',
		},
		{
			title: 'Payroll Processors',
			description:
				"Plug ePeople's Time Data into your Payroll Solution for Seamless End-to-End Wage & Hour Compliance",
			imageSrc: 'payments.png',
		},
	];

  return (
    <section className="integrations-section">
      <h2 className="integrations-title">Seamless Integrations</h2>
      <div className="integrations-grid">
        {integrations.map((item, index) => (
          <IntegrationCard
            key={index}
            title={item.title}
            description={item.description}
            imageSrc={item.imageSrc}
          />
        ))}
      </div>
    </section>
  );
};

export default IntegrationsSection;
