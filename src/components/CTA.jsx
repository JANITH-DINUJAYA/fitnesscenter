import ctaBackground from "../assets/gym.jpg" // Import the image

function CTA(){
  return(
    <section 
      className="cta-section" 
      style={{ backgroundImage: `url(${ctaBackground})` }} // Apply as background
    >
      <div className="cta-overlay">
        <h2>Ready To Start Your Journey?</h2>
        <button className="lets-talk-btn">Lets Talk</button>
      </div>
    </section>
  )
}

export default CTA;