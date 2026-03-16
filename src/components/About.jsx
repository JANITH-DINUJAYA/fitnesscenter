
function AboutUs() {
    const aboutImg = "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=1000";
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        
        <div className="about-image">
          <img src={aboutImg} alt="Our Fitness Center" />
          <div className="experience-badge">
            <span className="years">10+</span>
            <span className="text">Years of Experience</span>
          </div>
        </div>

        <div className="about-content">
          <div className="section-title">
            <span className="subtitle">WHO WE ARE</span>
            <h2>We Are Professional Experts In Fitness</h2>
          </div>
          
          <p className="main-para">
            At our Fitness Center, we believe that strength is the foundation of a healthy life. 
            Our mission is to provide an elite training environment where passion meets 
            performance.
          </p>

          <div className="about-features">
            <div className="feature-item">
              <h4>Modern Equipment</h4>
              <p>Train with the latest industry-leading machines and free weights.</p>
            </div>
            <div className="feature-item">
              <h4>Expert Coaches</h4>
              <p>Certified trainers dedicated to your personal transformation.</p>
            </div>
          </div>

          <button className="about-btn">Learn More</button>
        </div>

      </div>
    </section>
  );
}

export default AboutUs;