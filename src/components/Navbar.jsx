import logo from "../assets/logo.png";
import { HashLink as Link } from 'react-router-hash-link';

function Navbar({ toggleTheme, theme }) {
  return (
    <nav className="navbar">

      {/* LOGO - Now points back to home properly */}
      <div className="logo">
        <Link smooth to="/#home">
          <img src={logo} alt="Fitness Logo" />
        </Link>
      </div>

      {/* MENU */}
      <ul>
        {/* ADDED "/" BEFORE THE "#" TO ALL HOME LINKS */}
        <li><Link smooth to="/#home">Home</Link></li>
        <li><Link smooth to="/#about">About Us</Link></li>
        <li><Link smooth to="/#services">Services</Link></li>
        
        {/* Gallery is a direct route */}
        <li><Link to="/gallery">Gallery</Link></li>

        {/* THEME TOGGLE */}
        <li>
          <button 
            onClick={toggleTheme} 
            className="theme-toggle" 
            aria-label="Toggle theme"
          >
            {theme === "dark" ? "☀️" : "🌙"}
          </button>
        </li>
      </ul>

      {/* CTA BUTTON / LINK - Also needs the "/" prefix */}
      <Link smooth to="/#contact" className="talk-btn">
        Talk To Us
      </Link>

    </nav>
  );
}

export default Navbar;