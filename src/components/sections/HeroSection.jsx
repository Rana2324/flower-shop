import React, { useEffect, useState } from 'react';
import heroImage from '../../assets/images/hero-tulips1.png';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Trigger animation after component mounts
    setIsVisible(true);
  }, []);

  return (
    <section className="bg-gradient-to-br from-pink-50 to-pink-100 py-12 sm:py-16 md:py-24 overflow-hidden relative">
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-pink-200 rounded-full opacity-20 -z-10" />
      <div className="absolute bottom-10 right-10 w-48 h-48 bg-pink-200 rounded-full opacity-20 -z-10" />
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Text Content */}
          <div className="w-full md:w-1/2 mb-8 sm:mb-12 md:mb-0 md:pr-4 lg:pr-8">
            <h6 className={`font-medium text-pink-600 mb-2 tracking-wider uppercase text-sm ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{transitionDelay: '0.2s'}}>
              Fresh Floral Creations
            </h6>
            <h1 className={`font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{transitionDelay: '0.4s'}}>
              Beautiful Flowers <span className="text-pink-600">for Every</span> Occasion
            </h1>
            <p className={`text-gray-700 text-base sm:text-lg mb-6 sm:mb-8 max-w-lg ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{transitionDelay: '0.6s'}}>
              Brighten someone's day with our beautiful hand-crafted floral arrangements delivered with care and love.
            </p>
            <div className={`flex flex-wrap gap-4 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{transitionDelay: '0.8s'}}>
              <button className="btn btn-primary text-sm sm:text-base shadow-lg hover:shadow-xl py-2 px-4 sm:py-3 sm:px-6">
                Shop Now
              </button>
              <button className="btn btn-secondary text-sm sm:text-base py-2 px-4 sm:py-3 sm:px-6">
                Learn More
              </button>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className={`md:w-1/2 flex justify-center items-center ${isVisible ? 'animate-slide-in-right' : 'translate-x-full opacity-0'}`}>
            <div className="relative w-full max-w-md mx-auto">
              {/* Circle background */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90%] h-0 pt-[90%] rounded-full bg-pink-200 opacity-30 -z-10"></div>
              
              <div className="overflow-hidden rounded-lg shadow-2xl">
                <img 
                  src={heroImage} 
                  alt="Elegant Tulip Arrangement" 
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500" 
                  style={{ maxHeight: '500px' }}
                />
              </div>
              
              {/* Floating badge */}
              <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 bg-white rounded-full w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center shadow-lg transform rotate-12 border-2 border-pink-200">
                <div className="text-center">
                  <p className="text-pink-600 font-bold">25%</p>
                  <p className="text-xs">OFF</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
