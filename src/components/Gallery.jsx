import React from "react";

function Gallery() {
  const images = [
    "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800",
    "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=800",
    "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?q=80&w=800",
    "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=800",
    "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=800",
    "https://images.unsplash.com/photo-1581009146145-b5ef03a7403f?q=80&w=800"
  ];

  return (
    <div className="gallery-page">
      <div className="gallery-header">
        <h1>Our <span>Gallery</span></h1>
        <p>Witness the dedication and the transformation within our walls.</p>
      </div>
      
      <div className="gallery-grid">
        {images.map((img, index) => (
          <div key={index} className="gallery-item">
            <img src={img} alt={`Gym training ${index}`} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;