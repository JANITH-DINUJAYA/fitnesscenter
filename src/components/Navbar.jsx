import logo from "../assets/logo.png";

function Navbar({ toggleTheme, theme }) {
  return (
    <nav className="navbar">

      {/* LOGO */}
      <div className="logo">
        <img src={logo} alt="Fitness Logo" />
      </div>

      {/* MENU */}
      <ul>
        <li>Home</li>
        <li>About Us</li>
        <li>Services</li>
        <li>Gallery</li>

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

      {/* CTA BUTTON */}
      <button className="talk-btn">Talk To Us</button>

    </nav>
  );
}

export default Navbar;