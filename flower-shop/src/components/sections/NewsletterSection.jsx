import React, { useState, useEffect } from 'react';
import newsletterBg from '../../assets/images/hero-tulips.png';

const NewsletterSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  useEffect(() => {
    // Trigger animation after component mounts
    setIsVisible(true);
  }, []);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 3000);
      setEmail('');
    }
  };
  return (
    <section 
      className="py-12 sm:py-16 md:py-20 bg-cover bg-center relative overflow-hidden" 
      style={{ backgroundImage: `url(${newsletterBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      {/* Overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/40"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-pink-400 rounded-full opacity-10 mix-blend-overlay blur-2xl"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-pink-300 rounded-full opacity-10 mix-blend-overlay blur-3xl"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className={`text-center max-w-xl mx-auto bg-white/10 backdrop-blur-sm p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl border border-white/20 shadow-xl ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <h6 className={`font-medium text-pink-300 mb-2 uppercase tracking-wider text-sm ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{transitionDelay: '0.2s'}}>Special Offers</h6>
          <h2 className={`text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-3 font-heading text-white ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{transitionDelay: '0.4s'}}>Get The Latest Deals</h2>
          <p className={`text-white/80 mb-6 text-sm md:text-base ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{transitionDelay: '0.6s'}}>
            $30 coupon for first shopping
          </p>
          <form onSubmit={handleSubmit} className={`flex flex-col md:flex-row gap-3 max-w-md mx-auto ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-4'}`} style={{transitionDelay: '0.8s'}}>
            <div className="flex-grow relative">
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email here..."
                className="w-full px-4 sm:px-5 py-2.5 sm:py-3 text-sm sm:text-base rounded-full md:rounded-r-none border border-white/30 bg-white/90 focus:outline-none focus:ring-2 focus:ring-pink-400 transition-all duration-300"
                required
              />
              {isSubmitted && (
                <div className="absolute -top-10 left-0 right-0 text-center text-green-300 bg-green-900/80 py-1.5 px-4 rounded-full text-sm font-medium animate-fade-in">
                  Thanks for subscribing!
                </div>
              )}
            </div>
            <button 
              type="submit" 
              className="bg-gradient-to-r from-pink-600 to-pink-500 text-white px-5 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base rounded-full md:rounded-l-none hover:from-pink-700 hover:to-pink-600 transition-all duration-300 font-medium shadow-md hover:shadow-lg hover:-translate-y-0.5 whitespace-nowrap border border-pink-400/50"
            >
              Subscribe
            </button>
          </form>
          <p className={`mt-4 text-xs text-white/60 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{transitionDelay: '1s'}}>By subscribing, you agree to our Privacy Policy and Terms.</p>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
