import React from 'react';

const demos = [
  { 
    title: <>Pirate <span className="site-type">Group</span></>, 
    url: 'https://wc-pirategroup.netlify.app/', 
    img: 'https://i.imgur.com/X1z5qYi.jpeg', 
    desc: 'Arrrgh! Unleash your inner pirate.' 
  },
  { 
    title: <><span className="site-type">Corporate</span> Site</>, 
    url: 'https://wildcabocorporate.framer.website/', 
    img: 'https://i.imgur.com/BWvy16S.png', 
    desc: 'Enterprise fleet management portal.' 
  },
  { 
    title: <>Cabo Wave <span className="site-type">Private</span></>, 
    url: 'https://cabowaveprivate.framer.website/', 
    img: 'https://i.imgur.com/oWupJDh.jpeg', 
    desc: 'Private yacht charters & snorkeling.' 
  },
  { 
    title: <>Tu Enamorado <span className="site-type">Vessel</span></>, 
    url: 'https://tuenamoradoprivate.framer.website/', 
    img: 'https://i.imgur.com/nYhcxnd.png', 
    desc: 'Luxury yacht experience for couples.' 
  },
  { 
    title: <><span className="site-type">Destination</span> Funnel</>, 
    url: 'https://wildcabodestination.framer.website/', 
    img: 'https://i.imgur.com/gXvZrKp.png', 
    desc: 'Full marketing funnel demo.' 
  }
];

export default function DemoGallery() {
  return (
    <section id="demos" className="live-demos section-container">
      <div className="demos-content">
        <h2 className="section-title">Live Demos</h2>
        <p className="demos-intro">These are fully functional builds, not just concepts.</p>
        
        <div className="demos-list">
          {demos.map((demo, index) => (
            <div key={index} className="demo-card">
              <div className="demo-card-left">
                <a
                  href={demo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="demo-image-link"
                >
                  <div className="demo-image-wrapper">
                    <img src={demo.img} alt={typeof demo.title === 'string' ? demo.title : 'Demo site'} className="demo-image" />
                    <div className="demo-overlay">
                      <span className="preview-btn">Preview Site</span>
                    </div>
                  </div>
                </a>
              </div>
              
              <div className="demo-card-right">
                <h3 className="demo-title">{demo.title}</h3>
                <p className="demo-desc">{demo.desc}</p>
                <a 
                  href={demo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="demo-link"
                >
                  Visit Site →
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <p className="demos-note">
          We're not showing concepts—we have functional builds for every tier.
        </p>
      </div>
    </section>
  );
} 