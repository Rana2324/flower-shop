import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaPinterest, FaYoutube } from 'react-icons/fa';
import { IoMdArrowUp } from 'react-icons/io';
import { MdLocalFlorist, MdOutlineEmail } from 'react-icons/md';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="relative bg-gradient-to-br from-gray-100 to-gray-50 pt-16 pb-8 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-300"></div>
      <div className="absolute -top-20 -left-20 w-40 h-40 rounded-full bg-pink-50 opacity-70"></div>
      <div className="absolute -bottom-20 -right-20 w-40 h-40 rounded-full bg-indigo-50 opacity-70"></div>
      
      {/* Back to top button */}
      <div className="absolute right-6 -top-6">
        <button 
          onClick={scrollToTop}
          className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-lg transform transition-transform hover:scale-110 hover:shadow-xl"
          aria-label="Back to top"
        >
          <IoMdArrowUp size={24} />
        </button>
      </div>

      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row flex-wrap justify-between gap-10">
          {/* About section with logo */}
          <div className="md:w-1/4">
            <div className="flex items-center gap-2 mb-4">
              <MdLocalFlorist className="text-pink-500 text-3xl" />
              <h2 className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                Bloom & Blossom
              </h2>
            </div>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Beautiful flowers delivered to your doorstep. Fresh, elegant, and perfect for any occasion. We bring nature's beauty to your life.
            </p>
            {/* Social icons */}
            <div className="flex space-x-3">
              {[
                { icon: <FaFacebook />, color: 'hover:bg-blue-600' },
                { icon: <FaTwitter />, color: 'hover:bg-sky-500' },
                { icon: <FaInstagram />, color: 'hover:bg-gradient-to-tr from-yellow-500 via-pink-600 to-purple-700' },
                { icon: <FaPinterest />, color: 'hover:bg-red-600' },
                { icon: <FaYoutube />, color: 'hover:bg-red-600' }
              ].map((social, index) => (
                <a 
                  key={index}
                  href="#" 
                  className={`flex items-center justify-center w-10 h-10 rounded-full text-gray-500 bg-white border border-gray-200 shadow-sm transition-all duration-300 ${social.color} hover:text-white hover:border-transparent hover:shadow-md`}
                  aria-label="Social media"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
          
          {/* Quick links column */}
          <div className="md:w-1/5">
            <h3 className="text-lg font-bold mb-5 text-gray-800 relative after:absolute after:bottom-0 after:left-0 after:w-12 after:h-0.5 after:bg-pink-500 pb-2">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {['Home', 'About Us', 'Shop', 'Contact', 'Blog'].map((item, index) => (
                <li key={index} className="transform transition-transform hover:translate-x-1">
                  <a 
                    href="#" 
                    className="text-gray-600 hover:text-pink-600 flex items-center"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-pink-300 inline-block mr-2.5"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Customer Service column */}
          <div className="md:w-1/5">
            <h3 className="text-lg font-bold mb-5 text-gray-800 relative after:absolute after:bottom-0 after:left-0 after:w-12 after:h-0.5 after:bg-pink-500 pb-2">
              Customer Service
            </h3>
            <ul className="space-y-3">
              {['FAQ', 'Shipping Policy', 'Return Policy', 'Privacy Policy', 'Terms of Service'].map((item, index) => (
                <li key={index} className="transform transition-transform hover:translate-x-1">
                  <a 
                    href="#" 
                    className="text-gray-600 hover:text-pink-600 flex items-center"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-pink-300 inline-block mr-2.5"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Newsletter section */}
          <div className="md:w-1/4">
            <h3 className="text-lg font-bold mb-5 text-gray-800 relative after:absolute after:bottom-0 after:left-0 after:w-12 after:h-0.5 after:bg-pink-500 pb-2">
              Newsletter
            </h3>
            <p className="text-gray-600 mb-5 leading-relaxed">
              Subscribe to get special offers, free giveaways, and updates on our latest floral collections.
            </p>
            <form className="relative">
              <div className="relative overflow-hidden rounded-lg shadow-sm">
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full px-5 py-3.5 bg-white rounded-lg border border-gray-200 focus:outline-none focus:border-pink-400 focus:ring-2 focus:ring-pink-100 transition-all duration-300 pr-12"
                />
                <button
                  type="submit"
                  className="absolute right-0 top-0 h-full px-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-r-lg flex items-center justify-center hover:from-pink-600 hover:to-purple-600 transition-colors duration-300"
                >
                  <MdOutlineEmail size={24} />
                </button>
              </div>
              <div className="absolute -bottom-6 left-0 right-0 h-12 bg-gradient-to-t from-gray-100 to-transparent opacity-50"></div>
            </form>
            <div className="mt-10 bg-white p-4 rounded-lg shadow-sm border border-gray-100">
              <p className="text-gray-500 text-sm font-medium">
                <span className="text-pink-500 font-semibold">⚡ QUICK DELIVERY</span> - Order before 2 PM for same-day delivery in selected areas.
              </p>
            </div>
          </div>
        </div>
        
        {/* Footer divider with ornament */}
        <div className="mt-16 mb-6 relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 -top-3 bg-gray-50 px-4">
            <MdLocalFlorist className="text-pink-400 text-2xl" />
          </div>
          <div className="border-t border-gray-200"></div>
        </div>
        
        {/* Copyright section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-gray-500">
          <p className="text-sm mb-3 md:mb-0">
            © {new Date().getFullYear()} <span className="font-medium">Bloom & Blossom</span>. All rights reserved.
          </p>
          <div className="flex space-x-5 text-xs">
            <a href="#" className="hover:text-pink-600">Privacy Policy</a>
            <span>|</span>
            <a href="#" className="hover:text-pink-600">Terms of Use</a>
            <span>|</span>
            <a href="#" className="hover:text-pink-600">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
