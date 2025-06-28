import React from 'react';
import partner1 from '../assets/partners/au.jpeg';
import partner2 from '../assets/partners/fincare.png';
import partner3 from '../assets/partners/fino.jpeg';
import partner4 from '../assets/partners/hdfc.png';
import partner5 from '../assets/partners/icici.png';
import partner6 from '../assets/partners/jio.jpeg';
import partner7 from '../assets/partners/lt.png'; 
import partner8 from '../assets/partners/maxlife.png';
import partner9 from '../assets/partners/pnb.png';
import partner10 from '../assets/partners/sbi.png';
import partner11 from '../assets/partners/suzuki.png';
import partner12 from '../assets/partners/tcs.png';

const partners = [partner1, partner2, partner3, partner4, partner5,partner6, partner7, partner8, partner9, partner10, partner11, partner12];


const Partners = () => {
  // Duplicate logos to create seamless infinite scroll effect
  const scrollingLogos = [...partners, ...partners];

  return (
    <section id="partners" className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-6 text-center mb-12">
        <h2 className="text-4xl font-bold text-castleton_green-500" data-aos="fade-up">
          Our Trusted Partners
        </h2>
      </div>

      <div className="relative">
        <div className="w-full overflow-hidden">
          <div
            className="flex animate-scroll whitespace-nowrap"
            style={{ animationDuration: `${scrollingLogos.length * 2}s` }}
          >
            {scrollingLogos.map((logo, index) => (
              <div
                key={index}
                className="mx-6 flex-shrink-0"
                style={{ width: '120px' }}
              >
                <img
                  src={logo}
                  alt={`Partner ${index + 1}`}
                  className="h-16 w-auto object-contain grayscale hover:grayscale-0 transition duration-300"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};


export default Partners;
