import React, { useState } from "react";
import ctaBackground from "../assets/gym.jpg";
import ContactForm from "./ContactForm"; // Ensure the path is correct

function CTA() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <section 
      className="cta-section" 
      id="contact"
      style={{ backgroundImage: `url(${ctaBackground})` }}
    >
      <div className="cta-overlay">
        <h2>Ready To Start Your Journey?</h2>
        <button className="lets-talk-btn" onClick={toggleModal}>
          Lets Talk
        </button>
      </div>

      {/* Pop-up Modal Logic */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={toggleModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={toggleModal}>&times;</button>
            <h3>Contact Us</h3>
            <ContactForm />
          </div>
        </div>
      )}
    </section>
  );
}

export default CTA;