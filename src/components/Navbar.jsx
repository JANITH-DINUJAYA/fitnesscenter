import { useState } from "react";
import logo from "../assets/logo.png";
import { HashLink as Link } from "react-router-hash-link";

function Navbar({ toggleTheme, theme }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">

      {/* LOGO */}
      <div className="logo">
        <Link smooth to="/#home">
          <img src={logo} alt="Fitness Logo" />
        </Link>
      </div>

      {/* HAMBURGER MENU ICON */}
      <div 
        className={`menu-icon ${menuOpen ? "open" : ""}`} 
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </div>

      {/* MENU */}
      <ul className={menuOpen ? "active" : ""}>
        <li><Link smooth to="/#home" onClick={() => setMenuOpen(false)}>Home</Link></li>
        <li><Link smooth to="/#about" onClick={() => setMenuOpen(false)}>About Us</Link></li>
        <li><Link smooth to="/#services" onClick={() => setMenuOpen(false)}>Services</Link></li>
        <li><Link to="/gallery" onClick={() => setMenuOpen(false)}>Gallery</Link></li>

        <li>
          <button 
            onClick={toggleTheme} 
            className="theme-toggle"
          >
            {theme === "dark" ? "☀️" : "🌙"}
          </button>
        </li>
      </ul>

      {/* CTA */}
      <Link smooth to="/#contact" className="talk-btn">
        Talk To Us
      </Link>

    </nav>
  );
}

export default Navbar;