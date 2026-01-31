import React from 'react';
import '../styles/footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Column 1 - Quick Links */}
          <div className="footer-column">
            <h3 className="column-title">Quick Links</h3>
            <ul className="footer-links">
              <li><a href="#" className="footer-link" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>Home</a></li>
              <li><a href="#" className="footer-link" onClick={(e) => { e.preventDefault(); scrollToSection('courses'); }}>Courses</a></li>
              <li><a href="#" className="footer-link" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>About</a></li>
              <li><a href="#" className="footer-link" onClick={(e) => { e.preventDefault(); scrollToSection('faq'); }}>FAQ</a></li>
              <li><a href="#" className="footer-link" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Contact</a></li>
            </ul>
          </div>

          {/* Column 2 - Popular Courses */}
          <div className="footer-column">
            <h3 className="column-title">Popular Courses</h3>
            <ul className="footer-links">
              <li><a href="#" className="footer-link" onClick={(e) => { e.preventDefault(); scrollToSection('devops-course'); }}>DevOps for Absolute Beginners</a></li>
              <li><a href="#" className="footer-link" onClick={(e) => { e.preventDefault(); scrollToSection('ai-web-dev'); }}>AI-Powered Web Development</a></li>
              <li><a href="#" className="footer-link" onClick={(e) => { e.preventDefault(); scrollToSection('cloud-native'); }}>Cloud Native Development</a></li>
              <li><a href="#" className="footer-link" onClick={(e) => { e.preventDefault(); scrollToSection('full-stack'); }}>Full Stack JavaScript</a></li>
            </ul>
          </div>

          {/* Column 3 - Contact */}
          <div className="footer-column">
            <h3 className="column-title">Contact</h3>
            <div className="contact-info">
              <div className="contact-item">
                <span className="contact-label">EMAIL</span>
                <a href="mailto:info@devopsschool.pk" className="contact-value">info@devopsschool.pk</a>
              </div>
              <div className="contact-item">
                <span className="contact-label">PHONE</span>
                <a href="tel:+923334039990" className="contact-value">+923089758321</a>
              </div>
              <div className="contact-item">
                <span className="contact-label">LOCATION</span>
                <span className="contact-value">Islamabad, Pakistan</span>
              </div>
            </div>
          </div>
        </div>

        {/* Horizontal Divider */}
        <div className="horizontal-divider"></div>

        {/* Copyright */}
        <div className="copyright-section">
          <p className="copyright-text">© {currentYear} DevOps School PK. All rights reserved.</p>
        </div>

        {/* Second Horizontal Divider */}
        <div className="horizontal-divider"></div>

        {/* Policies */}
        <div className="policies-section">
          <div className="policies-links">
            <a href="/privacy-policy" className="policy-link">Privacy Policy</a>
            <span className="policy-separator">|</span>
            <a href="/terms-of-service" className="policy-link">Terms of Service</a>
            <span className="policy-separator">|</span>
            <a href="/refund-policy" className="policy-link">Refund Policy</a>
            <span className="policy-separator">|</span>
            <a href="/service-policy" className="policy-link">Service Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;