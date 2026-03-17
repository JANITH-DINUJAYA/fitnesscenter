import React, { useState } from "react"; // Added useState
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About";
import Philosophy from "./components/philosophy"
import Services from "./components/Services"
import Testimonial from "./components/Testimonial"
import CTA from "./components/CTA"
import Footer from "./components/Footer"
import Gallery from "./pages/Gallery";

function App() {
  // 1. Initialize theme state
  const [theme, setTheme] = useState("dark");

  // 2. Toggle function
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  return (
    // 3. Wrap everything in a div that carries the theme class
    <div className={`app-container ${theme}`}>
      <Navbar toggleTheme={toggleTheme} theme={theme} />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <About />
            <Philosophy />
            <Services />
            <Testimonial />
            <CTA />
          </>
        } />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;