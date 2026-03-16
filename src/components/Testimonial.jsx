function Testimonial() {
  return (
    <section className="testimonial-section">
      <div className="container">
        <h3>OUR CLIENT SAY</h3>
        
        <div className="testimonial-content">
          <div className="profile-circle">
            <img 
              src="https://randomuser.me/api/portraits/men/32.jpg" 
              alt="Client" 
              className="client-img" 
            />
          </div>
          
          <p className="testimonial-text">
            “I really enjoy training at this Fitness Center. The environment is 
            clean, the equipment is modern, and the trainers are very 
            supportive. It motivates me to stay consistent with my workouts 
            and improve my fitness every day. I would highly recommend this 
            gym to anyone who wants to live a healthier lifestyle.”
          </p>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;