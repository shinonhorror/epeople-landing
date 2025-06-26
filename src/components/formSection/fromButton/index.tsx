import React from 'react';
import './style.css';

interface FormButtonProps {
  text: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
  disabled?: boolean;
}

const FormButton: React.FC<FormButtonProps> = ({
  text,
  onClick,
  type = 'button',
  disabled = false,
}) => {
  return (
    <button className="form-button" type={type} onClick={onClick} disabled={disabled}>
      {disabled ? 'Submitting...' : text}
    </button>
  );
};

export default FormButton;
