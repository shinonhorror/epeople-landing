import React from 'react';
import Link from 'next/link';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        {/* Logo and Contact */}
        <div className="footer__section footer__logo-area">
          <img src="/logo.png" alt="ePeople AI Logo" className="footer__logo" />
        </div>

        {/* Location */}
        <div className="footer__section">
          <h4>Location</h4>
          <p>500 Terry Francine Street<br />San Francisco, CA 94158</p>
          <div className="footer__contact">
            <p><a href="mailto:support@epeople.com">support@epeople.com</a></p>
            <p><a href="tel:+16502453237">+1 650 245 32–37</a></p>
          </div>
        </div>

        {/* Social Links */}
        <div className="footer__section">
          <h4>Social</h4>
          <p><a href="#">Instagram</a></p>
          <p><a href="#">Facebook</a></p>
          <p><a href="#">LinkedIn</a></p>
        </div>

        {/* Stay Connected */}
        <div className="footer__section">
          <h4>Stay Connected</h4>
          <p>Get the latest news & updates</p>
          <Link href="https://marketplace.epeople.com/auth" className="footer__button">Client Login</Link>
          <div className="footer__copyright">
            © 2025 ePeople, Inc.
          </div>
        </div>
      </div>
    </footer>
  );
}
