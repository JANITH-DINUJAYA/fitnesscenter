import s1 from "../assets/service1.jpg"
import s2 from "../assets/service2.jpg"
import s3 from "../assets/service3.jpg"
import s4 from "../assets/service4.jpg"

function Services() {
  return (

    <section className="services">

      <div className="service-grid">

        <div className="service-card">
          <img src={s1}/>
          <h2>1 On 1 Training</h2>
        </div>

        <div className="service-card">
          <img src={s2}/>
          <h2>Elderly Training</h2>
        </div>

        <div className="service-card">
          <img src={s3}/>
          <h2>Crossover Training</h2>
        </div>

        <div className="service-card">
          <img src={s4}/>
          <h2>Body Conditioning Training</h2>
        </div>

      </div>

    </section>

  );
}

export default Services;