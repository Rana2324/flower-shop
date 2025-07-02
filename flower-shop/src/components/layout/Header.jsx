import React, { useState, useEffect } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartCount] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  
  // Handle scroll event to change header style
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Trigger animation after component mounts
    setIsVisible(true);
    
    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-white shadow-sm py-4'}`}>
      {/* Announcement Bar */}
      <div className="bg-gradient-to-r from-pink-600 via-pink-500 to-pink-400 text-white text-center py-1.5 sm:py-2.5 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -inset-1 opacity-10">
            <svg className="w-full h-full" viewBox="0 0 500 100" preserveAspectRatio="none">
              <path d="M0,0 L500,0 L500,100 L0,100 Z" fill="url(#wave)" />
              <defs>
                <pattern id="wave" patternUnits="userSpaceOnUse" width="100" height="20" patternTransform="rotate(10)">
                  <path d="M0,10 C30,15 70,5 100,10 L100,20 L0,20 Z" fill="#FFF" fillOpacity="0.3" />
                </pattern>
              </defs>
            </svg>
          </div>
          <div className="absolute top-0 left-0 w-full h-full">
            <svg className="h-full w-full" viewBox="0 0 1200 30" preserveAspectRatio="none">
              <path d="M0,0 Q300,30 600,15 T1200,0 V30 H0 Z" fill="rgba(255,255,255,0.05)"></path>
            </svg>
          </div>
          <div className="absolute -top-1 right-32 w-10 h-10 bg-white opacity-10 rounded-full blur-xl"></div>
          <div className="absolute -bottom-2 left-40 w-12 h-12 bg-white opacity-10 rounded-full blur-xl"></div>
        </div>
        <div className="container mx-auto px-2 sm:px-4 flex justify-center items-center">
          <div className="inline-flex items-center relative z-10">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <p className="font-medium text-xs sm:text-sm tracking-wide">Free Shipping on Orders Over $50 <span className="hidden xs:inline">|</span> <span className="font-semibold block xs:inline text-xs sm:text-sm">Same Day Delivery Available</span></p>
          </div>
        </div>
      </div>
      
      {/* Main Header */}
      <div className="container mx-auto px-4 flex justify-between items-center transition-all duration-300">
        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden text-gray-700 hover:text-pink-600 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className="relative w-8 h-6 flex flex-col justify-between items-center">
            <span className={`bg-gray-700 h-0.5 w-full rounded-full transform transition-all duration-300 ease-in-out ${isMenuOpen ? 'rotate-45 translate-y-2.5' : ''}`} />
            <span className={`bg-gray-700 h-0.5 w-full rounded-full transition-all duration-300 ease-in-out ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`} />
            <span className={`bg-gray-700 h-0.5 w-full rounded-full transform transition-all duration-300 ease-in-out ${isMenuOpen ? '-rotate-45 -translate-y-2.5' : ''}`} />
          </div>
        </button>
        
        {/* Logo */}
        <div className={`logo ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{transitionDelay: '0.2s'}}>
          <h1 className="font-heading text-2xl sm:text-3xl font-bold relative group flex items-center">
            <div className="absolute -left-2 -top-2 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-pink-100 opacity-70 -z-10 group-hover:scale-125 transition-transform duration-500"></div>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-pink-500 mr-1.5">Bloom</span>
            <span className="inline-flex items-center">
              <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 sm:w-5 sm:h-5 text-pink-400 mx-0.5 mt-0.5 animate-pulse" style={{animationDuration: '3s'}}>
                <path d="M12 3.5C7.30558 3.5 3.5 7.30558 3.5 12C3.5 13.9159 4.11418 15.6978 5.13102 17.1229C5.83577 18.0793 6.74191 18.8742 7.78586 19.4362C9.05462 20.1164 10.5191 20.5 12 20.5C13.6493 20.5 15.2577 20.0146 16.5945 19.0851L16.3982 18.741C16.9066 18.2906 17.3681 17.7839 17.777 17.228C18.9637 15.6065 19.74 13.6336 19.7485 11.5919L19.75 11.3177V11.25L19.749 11.1521C19.7172 9.11164 19.074 7.24604 17.8868 5.66611C17.7472 5.4776 17.5984 5.29511 17.4407 5.11891C15.9712 3.99143 14.0682 3.5 12 3.5Z" fill="currentColor" fillOpacity="0.2"/>
                <path d="M7.93555 10.3223C8.197 9.95053 8.73225 9.8582 9.10403 10.1197L12 12V6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M14.25 9.75L18.75 9.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M15.75 13.5H18.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-pink-600">Blossom</span>
            </span>
            <div className="absolute -right-1.5 -bottom-1 w-4 h-4 sm:w-6 sm:h-6 rounded-full bg-pink-100 opacity-60 -z-10 group-hover:scale-125 transition-transform duration-500"></div>
            <span className="absolute -bottom-1.5 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-500 to-pink-400 group-hover:w-full transition-all duration-300"></span>
          </h1>
        </div>
        
        {/* Desktop Navigation */}
        <nav className={`hidden lg:block ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{transitionDelay: '0.4s'}}>
          <ul className="flex space-x-8">
            <li className="group relative">
              <a href="#" className="py-2 font-medium text-gray-800 hover:text-pink-600 transition-colors relative inline-block">
                <span>Home</span>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-600 to-pink-400 group-hover:w-full transition-all duration-300 rounded-full"></span>
                <span className="absolute -bottom-1 left-1/2 w-1 h-1 bg-pink-500 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 delay-300"></span>
              </a>
            </li>
            <li className="group relative">
              <a href="#" className="py-2 px-1 font-medium text-gray-800 hover:text-pink-600 transition-colors flex items-center relative">
                <span>Shop</span>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-600 to-pink-400 group-hover:w-full transition-all duration-300 rounded-full"></span>
                <span className="absolute -bottom-1 left-1/2 w-1 h-1 bg-pink-500 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 delay-300"></span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
              <div className="absolute right-0 mt-2 py-3 w-60 bg-white rounded-2xl shadow-lg border border-pink-100 opacity-0 invisible transform origin-top-right scale-95 group-hover:opacity-100 group-hover:visible group-hover:scale-100 transition-all duration-300">
                <div className="absolute top-0 right-5 -mt-2 w-4 h-4 bg-white transform rotate-45 border-l border-t border-pink-100"></div>
                <div className="px-2">
                  <a href="#" className="flex items-center px-4 py-2.5 rounded-xl text-sm text-gray-700 hover:text-pink-600 hover:bg-pink-50 transition-colors duration-200">
                    <span className="w-2 h-2 rounded-full bg-pink-300 mr-2.5"></span>
                    <span>All Flowers</span>
                  </a>
                  <a href="#" className="flex items-center px-4 py-2.5 rounded-xl text-sm text-gray-700 hover:text-pink-600 hover:bg-pink-50 transition-colors duration-200">
                    <span className="w-2 h-2 rounded-full bg-pink-300 mr-2.5"></span>
                    <span>Bouquets</span>
                  </a>
                  <a href="#" className="flex items-center px-4 py-2.5 rounded-xl text-sm text-gray-700 hover:text-pink-600 hover:bg-pink-50 transition-colors duration-200">
                    <span className="w-2 h-2 rounded-full bg-pink-300 mr-2.5"></span>
                    <span>Arrangements</span>
                  </a>
                  <a href="#" className="flex items-center px-4 py-2.5 rounded-xl text-sm text-gray-700 hover:text-pink-600 hover:bg-pink-50 transition-colors duration-200">
                    <span className="w-2 h-2 rounded-full bg-pink-300 mr-2.5"></span>
                    <span>Gift Baskets</span>
                  </a>
                </div>
              </div>
            </li>
            <li className="flex space-x-6">
              <div className="group relative">
                <a href="#" className="py-2 px-1 font-medium text-gray-800 hover:text-pink-600 transition-colors relative inline-block">
                  <span>About</span>
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-600 to-pink-400 group-hover:w-full transition-all duration-300 rounded-full"></span>
                  <span className="absolute -bottom-1 left-1/2 w-1 h-1 bg-pink-500 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 delay-300"></span>
                </a>
              </div>
              <div className="group relative">
                <a href="#" className="py-2 px-1 font-medium text-gray-800 hover:text-pink-600 transition-colors relative inline-block">
                  <span>Contact</span>
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-600 to-pink-400 group-hover:w-full transition-all duration-300 rounded-full"></span>
                  <span className="absolute -bottom-1 left-1/2 w-1 h-1 bg-pink-500 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 delay-300"></span>
                </a>
              </div>
            </li>
          </ul>
        </nav>
        
        {/* Action Icons */}
        <div className="flex items-center space-x-2 sm:space-x-4">
          {/* Search button */}
          <button className="text-gray-700 hover:text-pink-600 transition-all duration-200 group relative p-1 sm:p-2">
            <span className="absolute inset-0 w-0 h-0 bg-pink-50 rounded-full group-hover:w-full group-hover:h-full -z-10 transition-all duration-300"></span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6 transition-transform duration-300 group-hover:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
          
          {/* Cart button */}
          <button className="text-gray-700 hover:text-pink-600 transition-all duration-300 group relative p-1 sm:p-2">
            <span className="absolute inset-0 w-0 h-0 bg-pink-50 rounded-full group-hover:w-full group-hover:h-full -z-10 transition-all duration-300"></span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6 transition-transform duration-300 group-hover:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 bg-gradient-to-r from-pink-600 to-pink-400 text-white w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center rounded-full text-xs animate-pulse-slow">
                {cartCount}
              </span>
            )}
          </button>
          
          {/* User account */}
          <button className="text-gray-700 hover:text-pink-600 transition-all duration-300 group relative hidden lg:block p-1 sm:p-2">
            <span className="absolute inset-0 w-0 h-0 bg-pink-50 rounded-full group-hover:w-full group-hover:h-full -z-10 transition-all duration-300"></span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6 transition-transform duration-300 group-hover:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </button>
        </div>
        
        {/* Mobile Menu */}
        <div className={`lg:hidden bg-white fixed left-0 right-0 top-[calc(var(--header-height))] z-40 transform transition-all duration-500 ease-in-out ${isMenuOpen ? 'translate-y-0 opacity-100 shadow-lg' : '-translate-y-10 opacity-0'} overflow-hidden`}>
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 opacity-50"></div>
          <div className="absolute top-0 right-0 w-32 h-32 bg-pink-100 rounded-full -translate-x-10 -translate-y-24 opacity-20"></div>
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-pink-100 rounded-full -translate-x-20 translate-y-20 opacity-20"></div>
          
          <nav className="container mx-auto py-8 px-6 relative">
            <ul className="space-y-4">
              <li className="group">
                <a href="#" className="block font-medium text-gray-800 hover:text-pink-600 text-lg border-l-3 border-transparent hover:border-pink-500 pl-4 py-2 rounded-r-full transition-all duration-200 hover:bg-pink-50 hover:pl-6">
                  <div className="flex items-center">
                    <span className="absolute left-0 w-0 h-8 bg-pink-100 rounded-r-full transition-all duration-300 -z-10 group-hover:w-full"></span>
                    <span className="z-10">Home</span>
                  </div>
                </a>
              </li>
              <li className="py-1 group">
                <a href="#" className="block font-medium text-gray-800 hover:text-pink-600 text-lg border-l-3 border-transparent hover:border-pink-500 pl-4 py-2 rounded-r-full transition-all duration-200 hover:bg-pink-50 hover:pl-6">
                  <div className="flex items-center">
                    <span className="absolute left-0 w-0 h-8 bg-pink-100 rounded-r-full transition-all duration-300 -z-10 group-hover:w-full"></span>
                    <span className="z-10">Shop</span>
                  </div>
                </a>
                <ul className="pl-8 mt-3 space-y-3">
                  <li><a href="#" className="block text-gray-600 hover:text-pink-600 transition-colors duration-200 flex items-center py-1.5 px-3 rounded-full hover:bg-pink-50"><span className="w-2 h-2 rounded-full bg-gradient-to-r from-pink-400 to-pink-500 mr-3 transition-all duration-300"></span>All Flowers</a></li>
                  <li><a href="#" className="block text-gray-600 hover:text-pink-600 transition-colors duration-200 flex items-center py-1.5 px-3 rounded-full hover:bg-pink-50"><span className="w-2 h-2 rounded-full bg-gradient-to-r from-pink-400 to-pink-500 mr-3 transition-all duration-300"></span>Bouquets</a></li>
                  <li><a href="#" className="block text-gray-600 hover:text-pink-600 transition-colors duration-200 flex items-center py-1.5 px-3 rounded-full hover:bg-pink-50"><span className="w-2 h-2 rounded-full bg-gradient-to-r from-pink-400 to-pink-500 mr-3 transition-all duration-300"></span>Arrangements</a></li>
                  <li><a href="#" className="block text-gray-600 hover:text-pink-600 transition-colors duration-200 flex items-center py-1.5 px-3 rounded-full hover:bg-pink-50"><span className="w-2 h-2 rounded-full bg-gradient-to-r from-pink-400 to-pink-500 mr-3 transition-all duration-300"></span>Gift Baskets</a></li>
                </ul>
              </li>
              <li className="mt-2">
                <div className="flex space-x-4">
                  <div className="group relative flex-1">
                    <a href="#" className="block font-medium text-gray-800 hover:text-pink-600 text-lg border-l-3 border-transparent hover:border-pink-500 pl-4 py-2 rounded-r-full transition-all duration-200 hover:bg-pink-50 hover:pl-6">
                      <div className="flex items-center justify-center">
                        <span className="absolute left-0 w-0 h-8 bg-pink-100 rounded-r-full transition-all duration-300 -z-10 group-hover:w-full"></span>
                        <span className="z-10">About</span>
                      </div>
                    </a>
                  </div>
                  <div className="group relative flex-1">
                    <a href="#" className="block font-medium text-gray-800 hover:text-pink-600 text-lg border-l-3 border-transparent hover:border-pink-500 pl-4 py-2 rounded-r-full transition-all duration-200 hover:bg-pink-50 hover:pl-6">
                      <div className="flex items-center justify-center">
                        <span className="absolute left-0 w-0 h-8 bg-pink-100 rounded-r-full transition-all duration-300 -z-10 group-hover:w-full"></span>
                        <span className="z-10">Contact</span>
                      </div>
                    </a>
                  </div>
                </div>
              </li>
            </ul>
            
            <div className="mt-10 pt-6 border-t border-gray-100">
              <a href="#" className="flex items-center justify-center w-full py-3.5 px-6 rounded-full bg-gradient-to-r from-pink-500 to-pink-600 text-white text-center font-medium hover:shadow-lg transition duration-300 group">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                Login / Sign Up
              </a>
              
              <div className="flex justify-center mt-8 space-x-4">
                <a href="#" className="p-2 rounded-full bg-pink-50 hover:bg-pink-100 transition-colors duration-300 text-pink-600">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16">
                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                  </svg>
                </a>
                <a href="#" className="p-2 rounded-full bg-pink-50 hover:bg-pink-100 transition-colors duration-300 text-pink-600">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-instagram" viewBox="0 0 16 16">
                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
                  </svg>
                </a>
                <a href="#" className="p-2 rounded-full bg-pink-50 hover:bg-pink-100 transition-colors duration-300 text-pink-600">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-pinterest" viewBox="0 0 16 16">
                    <path d="M8 0a8 8 0 0 0-2.915 15.452c-.07-.633-.134-1.606.027-2.297.146-.625.938-3.977.938-3.977s-.239-.479-.239-1.187c0-1.113.645-1.943 1.448-1.943.682 0 1.012.512 1.012 1.127 0 .686-.437 1.712-.663 2.663-.188.796.4 1.446 1.185 1.446 1.422 0 2.515-1.5 2.515-3.664 0-1.915-1.377-3.254-3.342-3.254-2.276 0-3.612 1.707-3.612 3.471 0 .688.265 1.425.595 1.826a.24.24 0 0 1 .056.23c-.061.252-.196.796-.222.907-.035.146-.116.177-.268.107-1-.465-1.624-1.926-1.624-3.1 0-2.523 1.834-4.84 5.286-4.84 2.775 0 4.932 1.977 4.932 4.62 0 2.757-1.739 4.976-4.151 4.976-.811 0-1.573-.421-1.834-.919l-.498 1.902c-.181.695-.669 1.566-.995 2.097A8 8 0 1 0 8 0z"/>
                  </svg>
                </a>
              </div>
            </div>
          </nav>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div className={`lg:hidden bg-white fixed left-0 right-0 top-[calc(var(--header-height))] z-40 transform transition-all duration-500 ease-in-out ${isMenuOpen ? 'translate-y-0 opacity-100 shadow-lg' : '-translate-y-10 opacity-0'} overflow-hidden`}>
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 opacity-50"></div>
        <div className="absolute top-0 right-0 w-32 h-32 bg-pink-100 rounded-full -translate-x-10 -translate-y-24 opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-40 h-40 bg-pink-100 rounded-full -translate-x-20 translate-y-20 opacity-20"></div>
        
        <nav className="container mx-auto py-8 px-6 relative">
          <ul className="space-y-4">
            <li className="group">
              <a href="#" className="block font-medium text-gray-800 hover:text-pink-600 text-lg border-l-3 border-transparent hover:border-pink-500 pl-4 py-2 rounded-r-full transition-all duration-200 hover:bg-pink-50 hover:pl-6">
                <div className="flex items-center">
                  <span className="absolute left-0 w-0 h-8 bg-pink-100 rounded-r-full transition-all duration-300 -z-10 group-hover:w-full"></span>
                  <span className="z-10">Home</span>
                </div>
              </a>
            </li>
            <li className="py-1 group">
              <a href="#" className="block font-medium text-gray-800 hover:text-pink-600 text-lg border-l-3 border-transparent hover:border-pink-500 pl-4 py-2 rounded-r-full transition-all duration-200 hover:bg-pink-50 hover:pl-6">
                <div className="flex items-center">
                  <span className="absolute left-0 w-0 h-8 bg-pink-100 rounded-r-full transition-all duration-300 -z-10 group-hover:w-full"></span>
                  <span className="z-10">Shop</span>
                </div>
              </a>
              <ul className="pl-8 mt-3 space-y-3">
                <li><a href="#" className="block text-gray-600 hover:text-pink-600 transition-colors duration-200 flex items-center py-1.5 px-3 rounded-full hover:bg-pink-50"><span className="w-2 h-2 rounded-full bg-gradient-to-r from-pink-400 to-pink-500 mr-3 transition-all duration-300"></span>All Flowers</a></li>
                <li><a href="#" className="block text-gray-600 hover:text-pink-600 transition-colors duration-200 flex items-center py-1.5 px-3 rounded-full hover:bg-pink-50"><span className="w-2 h-2 rounded-full bg-gradient-to-r from-pink-400 to-pink-500 mr-3 transition-all duration-300"></span>Bouquets</a></li>
                <li><a href="#" className="block text-gray-600 hover:text-pink-600 transition-colors duration-200 flex items-center py-1.5 px-3 rounded-full hover:bg-pink-50"><span className="w-2 h-2 rounded-full bg-gradient-to-r from-pink-400 to-pink-500 mr-3 transition-all duration-300"></span>Arrangements</a></li>
                <li><a href="#" className="block text-gray-600 hover:text-pink-600 transition-colors duration-200 flex items-center py-1.5 px-3 rounded-full hover:bg-pink-50"><span className="w-2 h-2 rounded-full bg-gradient-to-r from-pink-400 to-pink-500 mr-3 transition-all duration-300"></span>Gift Baskets</a></li>
              </ul>
            </li>
            <li className="mt-2">
              <div className="flex space-x-4">
                <div className="group relative flex-1">
                  <a href="#" className="block font-medium text-gray-800 hover:text-pink-600 text-lg border-l-3 border-transparent hover:border-pink-500 pl-4 py-2 rounded-r-full transition-all duration-200 hover:bg-pink-50 hover:pl-6">
                    <div className="flex items-center justify-center">
                      <span className="absolute left-0 w-0 h-8 bg-pink-100 rounded-r-full transition-all duration-300 -z-10 group-hover:w-full"></span>
                      <span className="z-10">About</span>
                    </div>
                  </a>
                </div>
                <div className="group relative flex-1">
                  <a href="#" className="block font-medium text-gray-800 hover:text-pink-600 text-lg border-l-3 border-transparent hover:border-pink-500 pl-4 py-2 rounded-r-full transition-all duration-200 hover:bg-pink-50 hover:pl-6">
                    <div className="flex items-center justify-center">
                      <span className="absolute left-0 w-0 h-8 bg-pink-100 rounded-r-full transition-all duration-300 -z-10 group-hover:w-full"></span>
                      <span className="z-10">Contact</span>
                    </div>
                  </a>
                </div>
              </div>
            </li>
          </ul>
          
          <div className="mt-10 pt-6 border-t border-gray-100">
            <a href="#" className="flex items-center justify-center w-full py-3.5 px-6 rounded-full bg-gradient-to-r from-pink-500 to-pink-600 text-white text-center font-medium hover:shadow-lg transition duration-300 group">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              Login / Sign Up
            </a>
            
            <div className="flex justify-center mt-8 space-x-4">
              <a href="#" className="p-2 rounded-full bg-pink-50 hover:bg-pink-100 transition-colors duration-300 text-pink-600">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16">
                  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                </svg>
              </a>
              <a href="#" className="p-2 rounded-full bg-pink-50 hover:bg-pink-100 transition-colors duration-300 text-pink-600">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-instagram" viewBox="0 0 16 16">
                  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
                </svg>
              </a>
              <a href="#" className="p-2 rounded-full bg-pink-50 hover:bg-pink-100 transition-colors duration-300 text-pink-600">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-pinterest" viewBox="0 0 16 16">
                  <path d="M8 0a8 8 0 0 0-2.915 15.452c-.07-.633-.134-1.606.027-2.297.146-.625.938-3.977.938-3.977s-.239-.479-.239-1.187c0-1.113.645-1.943 1.448-1.943.682 0 1.012.512 1.012 1.127 0 .686-.437 1.712-.663 2.663-.188.796.4 1.446 1.185 1.446 1.422 0 2.515-1.5 2.515-3.664 0-1.915-1.377-3.254-3.342-3.254-2.276 0-3.612 1.707-3.612 3.471 0 .688.265 1.425.595 1.826a.24.24 0 0 1 .056.23c-.061.252-.196.796-.222.907-.035.146-.116.177-.268.107-1-.465-1.624-1.926-1.624-3.1 0-2.523 1.834-4.84 5.286-4.84 2.775 0 4.932 1.977 4.932 4.62 0 2.757-1.739 4.976-4.151 4.976-.811 0-1.573-.421-1.834-.919l-.498 1.902c-.181.695-.669 1.566-.995 2.097A8 8 0 1 0 8 0z"/>
                </svg>
              </a>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
