import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const feedbacks = [
  {
    id: 1,
    img: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "I really enjoy training at this Fitness Center. The environment is clean, and the trainers are very supportive."
  },
  {
    id: 2,
    img: "https://randomuser.me/api/portraits/women/44.jpg",
    text: "The best gym in Colombo! The equipment is top-notch and the community is very motivating."
  },
  {
    id: 3,
    img: "https://randomuser.me/api/portraits/men/45.jpg",
    text: "Started my transformation journey here 6 months ago. The progress I've seen is incredible!"
  },
  {
    id: 4,
    img: "https://randomuser.me/api/portraits/women/65.jpg",
    text: "Love the group classes and the energy of the place. Highly recommend to anyone seeking results."
  },
  {
    id: 5,
    img: "https://randomuser.me/api/portraits/men/22.jpg",
    text: "Great atmosphere and professional coaching. It’s more than just a gym, it's a lifestyle."
  }
];

function Testimonial() {
  return (
    <section className="testimonial-section">
      <div className="container">
        <h3>OUR CLIENT SAY</h3>
        
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={50}
          slidesPerView={1}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          className="testimonial-swiper"
        >
          {feedbacks.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="testimonial-content">
                <div className="profile-circle">
                  <img src={item.img} alt="Client" className="client-img" />
                </div>
                <p className="testimonial-text">“{item.text}”</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Testimonial;