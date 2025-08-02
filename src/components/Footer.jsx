// components/Footer.jsx
import './Footer.css';
import { FaInstagram, FaFacebookF, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <h3>Homyara Services and Solutions</h3>
        <p>Give us a chance – we’ll deliver better cleaning at less price!</p>
      </div>

      <div className="footer-contact">
        <p><FaPhoneAlt /> <strong>+91 92203 17499</strong></p>
        <p><FaEnvelope /> <strong>homyaraservices@gmail.com</strong></p>
      </div>

      <div className="footer-social">
        <a href="https://www.instagram.com/officalhomyara?igsh=MThjb3RsNWpkbjhjMg==" target="_blank" rel="noopener noreferrer">
          <FaInstagram /> Instagram
        </a>
        <a href="https://www.facebook.com/share/1YtMPXYrCZ/" target="_blank" rel="noopener noreferrer">
          <FaFacebookF /> Facebook
        </a>
      </div>

      <div className="footer-bottom">
        <p>© 2025 Homyara Services and Solutions. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
