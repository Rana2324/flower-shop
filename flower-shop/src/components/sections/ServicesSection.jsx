import React, { useState, useEffect } from 'react';
import { FaLeaf, FaClock, FaTruck, FaAward, FaLifeRing } from 'react-icons/fa';

const ServicesSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Trigger animation after component mounts
    setIsVisible(true);
  }, []);
  const services = [
    {
      id: 1,
      title: "Same Day Delivery",
      description: "Order by 1pm for delivery the same day to your doorstep",
      icon: <FaTruck className="text-pink-500" size={32} />,
      bgColor: "bg-pink-50",
      borderColor: "border-pink-200"
    },
    {
      id: 2,
      title: "Fresh Flower Guarantee",
      description: "Our flowers stay fresh for up to 7 days or your money back",
      icon: <FaAward className="text-pink-500" size={32} />,
      bgColor: "bg-green-50",
      borderColor: "border-green-200"
    },
    {
      id: 3,
      title: "24/7 Customer Support",
      description: "Our team is available around the clock to assist you",
      icon: <FaLifeRing className="text-pink-500" size={32} />,
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200"
    },
  ];

  return (
    <section className="py-16 bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-40 h-40 bg-pink-200 rounded-full opacity-10 -z-10" />
      <div className="absolute bottom-20 left-10 w-56 h-56 bg-pink-200 rounded-full opacity-10 -z-10" />
      <div className="absolute top-1/3 left-1/2 w-24 h-24 bg-pink-300 rounded-full opacity-10 -z-10" />
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h6 className={`font-medium text-pink-600 mb-2 uppercase tracking-wider text-sm ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{transitionDelay: '0.2s'}}>Why Choose Us</h6>
          <h2 className={`section-title text-3xl md:text-4xl font-bold mb-3 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{transitionDelay: '0.4s'}}>Our Services</h2>
          <p className={`text-gray-600 max-w-lg mx-auto ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{transitionDelay: '0.6s'}}>We provide premium floral services with attention to detail and customer satisfaction</p>
        </div>
        
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{transitionDelay: '0.8s'}}>
          {services.map((service) => (
            <div 
              key={service.id} 
              className={`flex flex-col items-center ${service.bgColor} rounded-3xl p-8 border ${service.borderColor} hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 group relative overflow-hidden`}
            >
              <div className="mb-6 p-4 bg-white rounded-full shadow-md group-hover:shadow-xl transition-all duration-300 border border-white">
                {/* Decorative circle in background */}
                <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-pink-200 opacity-20 -z-10"></div>
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800 font-heading text-center group-hover:text-pink-600 transition-colors">{service.title}</h3>
              <p className="text-center text-gray-600">{service.description}</p>
              
              <div className="mt-6">
                <a href="#" className="text-pink-600 font-medium flex items-center hover:text-pink-700 transition-colors group-hover:font-semibold">
                  <span className="relative">
                    Learn more
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-pink-600 group-hover:w-full transition-all duration-300"></span>
                  </span>
                  <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
        
        {/* Additional Benefits */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16 max-w-6xl mx-auto ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-4'}`} style={{transitionDelay: '1s'}}>
          <div className="flex items-center p-5 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 border border-gray-50">
            <div className="mr-4 text-pink-500 bg-pink-50 p-2 rounded-full">
              <FaClock size={24} />
            </div>
            <div>
              <h4 className="font-medium">Fast Delivery</h4>
              <p className="text-sm text-gray-600">Within 24 hours</p>
            </div>
          </div>
          
          <div className="flex items-center p-5 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 border border-gray-50">
            <div className="mr-4 text-pink-500 bg-pink-50 p-2 rounded-full">
              <FaLeaf size={24} />
            </div>
            <div>
              <h4 className="font-medium">Eco Friendly</h4>
              <p className="text-sm text-gray-600">Sustainable practices</p>
            </div>
          </div>
          
          <div className="flex items-center p-5 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 border border-gray-50">
            <div className="mr-4 text-pink-500 bg-pink-50 p-2 rounded-full">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h4 className="font-medium">Best Prices</h4>
              <p className="text-sm text-gray-600">Premium quality</p>
            </div>
          </div>
          
          <div className="flex items-center p-5 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 border border-gray-50">
            <div className="mr-4 text-pink-500 bg-pink-50 p-2 rounded-full">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div>
              <h4 className="font-medium">Secure Payment</h4>
              <p className="text-sm text-gray-600">100% secure checkout</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
