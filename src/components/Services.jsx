const s1 = "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1200&auto=format&fit=crop"; 
const s2 = "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1200&auto=format&fit=crop"; 
const s3 = "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?q=80&w=1200&auto=format&fit=crop"; 
const s4 = "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=1200&auto=format&fit=crop"; 

function Services() {
  const serviceData = [
    { img: s1, title: "1 On 1 Training" },
    { img: s2, title: "Elderly Training" },
    { img: s3, title: "Crossover Training" },
    { img: s4, title: "Body Conditioning Training" }
  ];

  return (
    /* ADDED ID HERE */
    <section className="services" id="services"> 
      <div className="service-grid">
        {serviceData.map((service, index) => (
          <div className="service-card" key={index}>
            <img src={service.img} alt={service.title} />
            <div className="card-overlay">
              <h2>{service.title}</h2>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;