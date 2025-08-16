import React, { useState, useEffect } from 'react';
import promotionImage from '../../assets/images/tulip-vase.png';

const PromotionSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Show animation when component mounts
    setIsVisible(true);
  }, []);
  return (
    <section className="py-16 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-pink-100 opacity-70 -z-10" />
      <div className="absolute top-40 right-10 w-32 h-32 rounded-full bg-pink-200 opacity-40 -z-10" />
      <div className="absolute bottom-10 left-1/4 w-48 h-48 rounded-full bg-pink-100 opacity-60 -z-10" />

      {/* Pattern overlay */}
      <div className="absolute inset-0 opacity-5 -z-10">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <pattern id="flowerPattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse" patternTransform="rotate(10)">
            <circle cx="20" cy="20" r="2" fill="#ec4899" opacity="0.3" />
            <path d="M20,10 Q25,15 20,20 Q15,25 10,20 Q5,15 10,10 Q15,5 20,10 Z" fill="none" stroke="#ec4899" strokeWidth="0.5" opacity="0.3" />
          </pattern>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#flowerPattern)" />
        </svg>
      </div>

      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center bg-white rounded-2xl md:rounded-3xl overflow-hidden shadow-lg relative max-w-6xl mx-auto border border-pink-100">
          <div className="md:w-1/2 p-6 sm:p-8 md:p-12 lg:p-16">
            <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{transitionDelay: '0.2s'}}>
              <span className="inline-block py-1 px-3 rounded-full bg-pink-100 text-pink-600 font-medium text-xs uppercase tracking-wider mb-4">Limited Time</span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading mb-4">
                Hot Deal! Sale Up To <span className="inline-block relative text-pink-600">
                  25% OFF
                  <span className="absolute -bottom-1 left-0 right-0 h-2 bg-pink-100 rounded-full -z-10"></span>
                </span>
              </h2>
              <p className="text-gray-600 mb-8 max-w-md leading-relaxed">
                Freshen up your home with our beautiful seasonal tulips. This special offer won't last long - order now while supplies last!  
              </p>
              <div className="flex gap-2 sm:gap-4 mb-6 sm:mb-8">
                <div className="flex flex-col items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-pink-50 border border-pink-100">
                  <span className="text-base sm:text-xl font-bold text-pink-600">21</span>
                  <span className="text-xs text-gray-500">Days</span>
                </div>
                <div className="flex flex-col items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-pink-50 border border-pink-100">
                  <span className="text-base sm:text-xl font-bold text-pink-600">14</span>
                  <span className="text-xs text-gray-500">Hours</span>
                </div>
                <div className="flex flex-col items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-pink-50 border border-pink-100">
                  <span className="text-base sm:text-xl font-bold text-pink-600">36</span>
                  <span className="text-xs text-gray-500">Mins</span>
                </div>
              </div>
              <button className="group bg-gradient-to-r from-pink-500 to-pink-600 text-white px-5 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base rounded-full hover:shadow-lg transition duration-300 font-medium flex items-center">
                SHOP NOW
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          </div>
          <div className="md:w-1/2 bg-gradient-to-br from-pink-50 to-pink-100 p-8 flex items-center justify-center overflow-hidden relative">
            <div className="absolute -bottom-10 -right-10 w-48 h-48 rounded-full bg-pink-200 mix-blend-multiply opacity-60 -z-0"></div>
            <div className="absolute -top-10 -left-10 w-48 h-48 rounded-full bg-pink-200 mix-blend-multiply opacity-60 -z-0"></div>
            <div className={`relative transition-all duration-700 transform ${isVisible ? 'scale-100 opacity-100' : 'scale-90 opacity-0'}`} style={{transitionDelay: '0.5s'}}>
              <div className="absolute -top-10 right-20 rotate-12 transform scale-75 md:scale-100">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-md">
                  <span className="text-pink-600 text-sm font-bold">-25%</span>
                </div>
              </div>
              <div className="absolute -top-3 md:top-0 left-0 -rotate-12 transform">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="text-pink-300 transform scale-150" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                </svg>
              </div>
              <img
                src={promotionImage}
                alt="Special offer on flower bouquets"
                className="w-full h-auto max-w-md mx-auto drop-shadow-2xl hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
        <div className={`flex justify-center mt-6 transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`} style={{transitionDelay: '0.8s'}}>
          <p className="text-sm text-gray-500 italic">* Limited time offer, terms and conditions apply</p>
        </div>
      </div>
    </section>
  );
};

export default PromotionSection;
