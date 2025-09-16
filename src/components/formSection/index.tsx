'use client';

import React, { useState } from 'react';
import InputField from './fromInput';
import FormButton from './fromButton';
import './style.css';

const ScheduleDemoForm: React.FC = () => {

  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const { firstName, lastName, email, phone, message } = formData;
  
    if (!firstName.trim() || !lastName.trim() || !email.trim() || !phone.trim() || !message.trim()) {
      alert('Please fill in all fields.');
      return false;
    }
  
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address.');
      return false;
    }
  
    const phoneRegex = /^\+?[0-9]{7,15}$/;
    if (!phoneRegex.test(phone)) {
      alert('Please enter a valid phone number (7–15 digits, optional +).');
      return false;
    }
  
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  if (isSubmitting) return;
  if (!validateForm()) return;

  setIsSubmitting(true);

  const payload = {
    first_name: formData.firstName,
    last_name: formData.lastName,
    email: formData.email,
    phone_number: formData.phone,
    text: formData.message,
  };

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/demo/schedule_form`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      throw new Error('Failed to submit form');
    }

    const result = await res.json();
    console.log('Form submitted successfully:', result);
    alert('Demo Scheduled! ✅');

    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      message: '',
    });
  } catch (error) {
    console.error('Submission error:', error);
    alert('Something went wrong. Please try again later.');
  } finally {
    setIsSubmitting(false);
  }
};

  return (
		<section className="schedule-demo">
			<h2 className="schedule-demo__title">How Can We Help?</h2>
			<form className="schedule-demo__form" onSubmit={handleSubmit}>
				<InputField
					label="First name"
					name="firstName"
					value={formData.firstName}
					onChange={handleChange}
					placeholder="First name"
				/>
				<InputField
					label="Last name"
					name="lastName"
					value={formData.lastName}
					onChange={handleChange}
					placeholder="Last name"
				/>
				<InputField
					label="Email"
					name="email"
					type="email"
					value={formData.email}
					onChange={handleChange}
					placeholder="Hello@epeopleai.com"
				/>
				<InputField
					label="Phone"
					name="phone"
					type="tel"
					value={formData.phone}
					onChange={handleChange}
					placeholder="+1"
				/>
				<InputField
					label="How Can We Help"
					name="message"
					type="text"
					value={formData.message}
					onChange={handleChange}
					placeholder="Message"
					className="full-width"
				/>
				<FormButton type="submit" text="Submit" disabled={isSubmitting} />
			</form>
		</section>
	);
};

export default ScheduleDemoForm;
