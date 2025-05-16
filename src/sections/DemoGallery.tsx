import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Demo data
const demos = [
  {
    title: "Homepage Design",
    image: "https://i.imgur.com/HIVMIo3.png"
  },
  {
    title: "Tour Booking Experience",
    image: "https://i.imgur.com/2dcxLvY.jpeg"
  },
  {
    title: "Mobile Responsive Layout",
    image: "https://i.imgur.com/6yTxGDw.jpg"
  },
  {
    title: "Tour Details Page",
    image: "https://i.imgur.com/LThJDWA.jpg"
  }
];

export default function DemoGallery() {
  const settings = { 
    dots: true, 
    arrows: false, 
    infinite: true, 
    speed: 400, 
    slidesToShow: 1, 
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true
  };

  return (
    <section className="demo-gallery" id="demo-gallery">
      <h2 className="demo-gallery__title">Live Site Samples</h2>
      <p className="section-subtitle">Browse through our collection of demo designs</p>

      <div className="max-w-4xl mx-auto">
        <Slider {...settings}>
          {demos.map(d => (
            <div key={d.title} className="demo-gallery__slide">
              <img src={d.image} alt={d.title} className="demo-gallery__img"/>
              <p className="demo-gallery__caption">{d.title}</p>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
} 