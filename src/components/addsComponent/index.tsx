import React from 'react';
import './style.css';
import Link from 'next/link';

interface AddsComponentProps {
  title: string;
  buttonText: string;
  onClinkLink?: string;
}

const AddsComponent: React.FC<AddsComponentProps> = ({
  title,
  buttonText,
  onClinkLink,
}) => {
  return (
    <div className="adds-container">
      <span className="adds-title">{title}</span>
      <Link className="adds-button" href={onClinkLink || '/'}>
        {buttonText}
      </Link>
    </div>
  );
};

export default AddsComponent;
