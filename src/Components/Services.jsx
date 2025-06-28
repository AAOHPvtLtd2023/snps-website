import React from 'react';
import {
  FaUserCheck,
  FaBuilding,
  FaFileInvoice,
  FaHandHoldingUsd,
  FaUsers,
  FaBriefcase
} from 'react-icons/fa';

const services = [
  {
    icon: <FaUserCheck className="text-sea_green-600 text-4xl" />,
    title: 'Background Verification',
    description: 'Ensure safe hiring with accurate employee background checks.',
  },
  {
    icon: <FaBuilding className="text-sea_green-600 text-4xl" />,
    title: 'Company Profile Verification',
    description: 'Validate the authenticity and credibility of businesses.',
  },
  {
    icon: <FaFileInvoice className="text-sea_green-600 text-4xl" />,
    title: 'Insurance Claim Validation',
    description: 'Reduce fraud by verifying insurance claims with precision.',
  },
  {
    icon: <FaHandHoldingUsd className="text-sea_green-600 text-4xl" />,
    title: 'Commercial Loan Validation',
    description: 'Verify documents and credentials for commercial loan approvals.',
  },
  {
    icon: <FaUsers className="text-sea_green-600 text-4xl" />,
    title: 'Bank Staffing Solutions',
    description: 'Providing qualified, verified candidates for financial institutions.',
  },
  {
    icon: <FaBriefcase className="text-sea_green-600 text-4xl" />,
    title: 'Custom B2B Checks',
    description: 'Tailored verification solutions to match your business needs.',
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-castleton_green-500 mb-12" data-aos="fade-up">
          Our Verification Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-castleton_green-900 p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 text-left"
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-castleton_green-500 mb-2">{service.title}</h3>
              <p className="text-yinmn_blue-300 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
