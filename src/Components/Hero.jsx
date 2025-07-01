import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaArrowRight } from 'react-icons/fa';
import heroImage from '../assets/hero.svg';

const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section id='home' className="bg-sea_green-900 min-h-screen flex items-center ">
      <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-20 flex flex-col md:flex-row items-center">
        
        {/* Left content */}
        <div className="md:w-1/2 text-center md:text-left" data-aos="fade-up">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight text-castleton_green-500">
            Trust. Verify. Grow with{' '}
            <span className="text-sea_green-600">SNPSTECH SOLUTION</span>
          </h1>

          <p className="mt-4 text-base sm:text-lg text-yinmn_blue-500 max-w-md mx-auto md:mx-0">
            We specialize in verification services — from background checks to insurance claims — to empower financial institutions, corporates, and startups with reliable, data-driven decisions.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row w-full sm:w-auto justify-center md:justify-start gap-4">
            <button
              className="w-full sm:w-auto bg-sea_green-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-sea_green-700 transition duration-300 flex items-center justify-center"
              role="button"
              aria-label="Get Verified Now"
            >
              Get Verified Now <FaArrowRight className="ml-2" />
            </button>

            <button
              className="w-full sm:w-auto border-2 border-sea_green-600 text-sea_green-600 font-semibold py-3 px-6 rounded-lg hover:bg-sea_green-600 hover:text-white transition duration-300"
              role="button"
              aria-label="View Our Services"
              onClick={() =>
                window.scrollTo({
                  top: document.getElementById('services').offsetTop,
                  behavior: 'smooth',
                })
              }
            >
              View Our Services
            </button>
          </div>
        </div>

        {/* Right image */}
        <div className="md:w-1/2 mt-10 md:mt-0" data-aos="zoom-in">
          <img
            src={heroImage}
            alt="Hero Graphic showing verification and growth"
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg rounded-lg shadow-lg animate-float mx-auto"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
