import hero from "../assets/hero.jpeg";

function Hero() {
  return (
    <section
      className="hero" 
      id="home" /* ADDED THIS ID */
      style={{ backgroundImage: `url(${hero})` }}
    >
      <div className="hero-text">
        <h3>SHAPE YOUR BODY</h3>
        <h1>
          BE <strong>STRONG</strong> WITH <br />
          A PROFESSIONAL!
        </h1>
      </div>
    </section>
  );
}

export default Hero;