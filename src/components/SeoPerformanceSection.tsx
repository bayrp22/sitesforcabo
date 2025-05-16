import React from 'react';

const seoItems = [
  {
    title: "Lighthouse Performance Score",
    image: "https://i.imgur.com/JKVX8HL.png",
    caption: "98/100 score for performance metrics"
  },
  {
    title: "Page Speed Insights",
    image: "https://i.imgur.com/MrB9pD2.png",
    caption: "Fast loading on both mobile and desktop"
  },
  {
    title: "SEO Ranking Results",
    image: "https://i.imgur.com/K1nf7tV.png",
    caption: "Top positions for targeted keywords"
  },
  {
    title: "Organic Traffic Growth",
    image: "https://i.imgur.com/VdqJMpL.png",
    caption: "Consistent upward trend month over month"
  }
];

const SeoPerformanceSection: React.FC = () => {
  return (
    <section id="seo-performance" className="seo-performance">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 font-['Poppins']">
          SEO & Performance Excellence
        </h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
          We build sites that rank well and load fast, keeping visitors engaged
        </p>
        
        <div className="seo-performance__grid">
          {seoItems.map((item, index) => (
            <div key={index} className="seo-performance__item">
              <img 
                src={item.image} 
                alt={item.title} 
                className="seo-performance__img"
              />
              <h3 className="mt-4 font-medium text-lg">{item.title}</h3>
              <p className="seo-performance__caption">{item.caption}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SeoPerformanceSection; 