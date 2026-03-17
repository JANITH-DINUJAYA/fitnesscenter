import React, { useEffect } from "react";

function Gallery() {
  // Ensures the page starts at the top when navigated to
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const gymImages = [
    { url: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800", class: "tall" },
    { url: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=800", class: "wide" },
    { url: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?q=80&w=800", class: "" },
    { url: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=800", class: "tall" },
    { url: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=800", class: "" },
   
    { url: "https://images.unsplash.com/photo-1593079831268-3381b0db4a77?q=80&w=800", class: "" },
    { url: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=800", class: "tall" },
  ];

  return (
    <div className="gallery-page">
      <div className="gallery-header">
        <h3>VISUALIZE YOUR SUCCESS</h3>
        <h1>OUR <strong>TRAINING</strong> GALLERY</h1>
      </div>

      <div className="gallery-container">
        {gymImages.map((image, index) => (
          <div key={index} className={`gallery-card ${image.class}`}>
            <img src={image.url} alt={`Fitness ${index}`} loading="lazy" />
            <div className="gallery-overlay">
              <span>VIEW FULL</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;