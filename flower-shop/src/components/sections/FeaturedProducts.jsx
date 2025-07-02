import React, { useState, useEffect } from 'react';
import product1 from '../../assets/images/pink-flowers.png';
import product2 from '../../assets/images/mixed-flowers.png';
import product3 from '../../assets/images/yellow-flowers.png';

const FeaturedProducts = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Trigger animation after component mounts
    setIsVisible(true);
  }, []);
  const products = [
    {
      id: 1,
      name: 'Pink Tulip Bouquet',
      description: 'Beautiful arrangement of pink tulips',
      price: 49.99,
      image: product1,
      badge: 'New',
    },
    {
      id: 2,
      name: 'Mixed Flower Arrangement',
      description: 'Seasonal mixed flowers with premium greenery',
      price: 59.99,
      image: product2,
      badge: 'Best Seller',
    },
    {
      id: 3,
      name: 'Yellow Rose Bouquet',
      description: 'Elegant yellow roses hand-tied with ribbon',
      price: 44.99,
      image: product3,
      badge: 'Sale',
    },
  ];

  const [hoveredProduct, setHoveredProduct] = useState(null);

  return (
    <section className="py-16 bg-gradient-to-br from-neutral-50 to-pink-50 relative overflow-hidden">
      {/* Decorative elements similar to HeroSection */}
      <div className="absolute top-20 left-10 w-40 h-40 bg-pink-200 rounded-full opacity-10 -z-10" />
      <div className="absolute bottom-20 right-10 w-56 h-56 bg-pink-200 rounded-full opacity-10 -z-10" />
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-pink-300 rounded-full opacity-10 -z-10" />
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h6 className={`text-pink-600 font-medium mb-2 uppercase tracking-wider text-sm ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{transitionDelay: '0.2s'}}>Our Collection</h6>
          <h2 className={`section-title text-3xl md:text-4xl font-bold mb-3 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{transitionDelay: '0.4s'}}>Featured Products</h2>
          <p className={`text-gray-600 max-w-xl mx-auto ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{transitionDelay: '0.6s'}}>Handcrafted floral arrangements made with love and attention to detail</p>
        </div>
        
        <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{transitionDelay: '0.8s'}}>
          {products.map((product) => (
            <div 
              key={product.id} 
              className="bg-white rounded-3xl overflow-hidden shadow-md group transition-all duration-300 hover:shadow-xl transform hover:-translate-y-2 border border-gray-100 hover:border-pink-200"
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              <div className="relative">
                {/* Product badge */}
                {product.badge && (
                  <div className="absolute top-4 left-4 z-10 bg-white px-3 py-1 rounded-full text-xs font-semibold text-pink-600 shadow-sm border border-white transform hover:scale-105 hover:shadow-md transition-all duration-300">
                    {product.badge}
                  </div>
                )}
                
                {/* Product image container */}
                <div className="bg-gradient-to-tr from-pink-50 to-pink-100 pt-8 px-8 pb-2 rounded-t-3xl relative overflow-hidden border-b border-gray-100">
                  {/* Decorative circle in background */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[70%] h-0 pt-[70%] rounded-full bg-pink-200 opacity-20 -z-10"></div>
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-56 object-contain transform transition-transform duration-500 group-hover:scale-110 max-w-[250px] mx-auto"
                  />
                </div>
                
                {/* Quick actions overlay on hover */}
                <div className={`absolute inset-0 flex items-center justify-center gap-4 bg-black bg-opacity-10 backdrop-blur-sm opacity-0 transition-opacity duration-300 ${hoveredProduct === product.id ? 'opacity-100' : ''}`}>
                  <button className="p-3 bg-white rounded-full shadow-md text-pink-600 hover:bg-pink-600 hover:text-white transition-colors border border-white">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                    </svg>
                  </button>
                  <button className="p-3 bg-white rounded-full shadow-md text-pink-600 hover:bg-pink-600 hover:text-white transition-colors border border-white">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                    </svg>
                  </button>
                </div>
              </div>
              
              {/* Product info */}
              <div className="p-6 relative">
                {/* Small decorative element */}
                <div className="absolute w-12 h-1 bg-pink-200 rounded-full top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-heading text-lg font-semibold group-hover:text-pink-600 transition-colors">{product.name}</h3>
                  <p className="text-pink-600 font-bold text-base bg-pink-50 px-3 py-1 rounded-full shadow-sm border border-pink-100">${product.price.toFixed(2)}</p>
                </div>
                <p className="text-gray-500 text-sm mb-5">{product.description}</p>
                
                <button className="w-full py-2.5 bg-white border border-pink-500 text-pink-600 rounded-full hover:bg-pink-600 hover:text-white transition-colors duration-300 flex items-center justify-center gap-2 shadow-sm hover:shadow-md group-hover:bg-pink-500 group-hover:text-white">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                  </svg>
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-14">
          <div className={`${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-4'}`} style={{transitionDelay: '1s'}}>
            <button className="px-8 py-3 bg-pink-600 text-white rounded-full hover:bg-pink-700 transition-colors shadow-md hover:shadow-lg transform hover:-translate-y-1 duration-300 font-medium relative overflow-hidden group">
              <span className="relative z-10">View All Products</span>
              <div className="absolute inset-0 h-full w-full scale-0 rounded-full transition-all duration-300 group-hover:scale-100 group-hover:bg-pink-700"></div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
