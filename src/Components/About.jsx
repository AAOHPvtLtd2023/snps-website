import aboutImage from '../assets/about.svg';

const About = () => {
  return (
    <section id="about" className="bg-white py-20 px-6 md:px-20">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12">

        {/* Text Section */}
        <div 
          className="flex-1 text-center md:text-left"
          data-aos="fade-right"
        >
          <h3 className="text-sea_green-600 uppercase tracking-wide font-semibold text-sm mb-4">
            About Our Company
          </h3>
          <h2 className="text-4xl md:text-5xl font-bold text-yale_blue-500 leading-tight mb-6">
            Driving Innovation. Delivering Results.
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            We are a results-focused team dedicated to helping businesses grow through strategic thinking, cutting-edge technology, and a commitment to excellence. Our goal is to be your trusted partner in navigating a constantly evolving digital landscape.
          </p>
          <a 
            href="#services" 
            className="inline-block px-6 py-3 bg-sea_green-500 text-white rounded-md shadow-md hover:bg-sea_green-600 transition duration-300"
          >
            Explore Our Services
          </a>
        </div>

        {/* Image Section */}
        <div 
          className="flex-1"
          data-aos="fade-left"
        >
          <img 
            src={aboutImage} 
            alt="Team collaboration illustration" 
            className="w-full max-w-md mx-auto md:mx-0" 
          />
        </div>
      </div>
    </section>
  );
};

export default About;
