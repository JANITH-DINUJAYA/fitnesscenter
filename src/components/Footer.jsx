import logo from "../assets/logo.png"; // Assuming your logo is here
import { FaTwitter, FaFacebookF, FaInstagram, FaDribbble, FaLinkedinIn } from "react-icons/fa"; // Optional: if using react-icons

function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        
        {/* Column 1: Logo & Tagline */}
        <div className="footer-col">
          <img src={logo} alt="Fitness Center Logo" className="footer-logo" />
          <p className="footer-desc">
            Bringing stories to life. Creating extraordinary experiences for corporate events, television, film, and theatre worldwide.
          </p>
        </div>

        {/* Column 2: Quick Contact */}
        <div className="footer-col">
          <h4>Quick Contact</h4>
          <address>
            No : 97 Delkanda,<br />
            Old Kesbewa Road,<br />
            Nugegoda 10250,<br />
            Sri Lanka.
          </address>
          <p>Phone : <strong>+94 71 893 3514</strong></p>
          <p>Email : <a href="mailto:sales@fitness.com">sales@fitness.com</a></p>
        </div>

        {/* Column 3: Social Media */}
        <div className="footer-col">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="#" className="social-link"><FaTwitter /></a>
            <a href="#" className="social-link"><FaFacebookF /></a>
            <a href="#" className="social-link"><FaInstagram /></a>
            <a href="#" className="social-link"><FaDribbble /></a>
            <a href="#" className="social-link"><FaLinkedinIn /></a>
          </div>
        </div>

      </div>
      
      <div className="footer-bottom">
        <p>Fitness Center 2026 @ All Right Reserved</p>
      </div>
    </footer>
  );
}

export default Footer;