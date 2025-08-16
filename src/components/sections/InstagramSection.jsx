import React, { useState, useEffect } from 'react';
import insta1 from '../../assets/images/insta-1.jpg';
import insta2 from '../../assets/images/insta-2.jpg';
import insta3 from '../../assets/images/insta-3.jpg';
import insta4 from '../../assets/images/insta-4.jpg';

const InstagramSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Trigger animation after component mounts
    setIsVisible(true);
  }, []);
  const instaPosts = [
    {
      id: 1,
      image: insta1,
      link: 'https://www.instagram.com/',
    },
    {
      id: 2,
      image: insta2,
      link: 'https://www.instagram.com/',
    },
    {
      id: 3,
      image: insta3,
      link: 'https://www.instagram.com/',
    },
    {
      id: 4,
      image: insta4,
      link: 'https://www.instagram.com/',
    },
  ];

  return (
    <section className="py-16 bg-neutral-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-52 h-52 bg-pink-200 rounded-full opacity-10 -z-10" />
      <div className="absolute bottom-20 right-10 w-64 h-64 bg-pink-200 rounded-full opacity-10 -z-10" />
      <div className="absolute top-40 right-1/4 w-24 h-24 bg-pink-300 rounded-full opacity-10 -z-10" />
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h6 className={`font-medium text-pink-600 mb-2 uppercase tracking-wider text-sm ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{transitionDelay: '0.2s'}}>Follow Us</h6>
          <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold mb-3 font-heading ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{transitionDelay: '0.4s'}}>
            <span className="inline-block">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-8 h-8 inline-block mr-2 -mt-1 text-pink-500">
                <path fill="currentColor" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/>
              </svg>
              Instagram
            </span>
          </h2>
          <p className={`text-center text-gray-600 max-w-lg mx-auto mb-8 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{transitionDelay: '0.6s'}}>
            Follow us on Instagram for exclusive behind-the-scenes, special offers, and floral inspiration
          </p>
        </div>

        <div className={`grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 xs:gap-4 sm:gap-6 max-w-6xl mx-auto ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-4'}`} style={{transitionDelay: '0.8s'}}>
          {instaPosts.map((post) => (
            <a
              href={post.link}
              target="_blank"
              rel="noreferrer"
              key={post.id}
              className="overflow-hidden relative group rounded-3xl shadow-sm hover:shadow-md transition-all duration-500 transform hover:-translate-y-1 border border-white"
            >
              <img
                src={post.image}
                alt={`Instagram post ${post.id}`}
                className="w-full h-auto aspect-square object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                <span className="text-white text-lg font-medium mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">View Post</span>
                <span className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-4 h-4 text-white">
                    <path fill="currentColor" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/>
                  </svg>
                </span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-3 h-3 text-pink-600">
                      <path fill="currentColor" d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"/>
                    </svg>
                  </div>
                  <span className="text-white text-xs">452</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
      
      <div className={`flex justify-center mt-6 sm:mt-8 md:mt-10 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{transitionDelay: '1s'}}>
        <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-white text-pink-600 border border-pink-200 hover:bg-pink-50 hover:border-pink-300 hover:shadow-md transition-all duration-300 group text-sm sm:text-base">
          <span className="mr-2">Follow on Instagram</span>
          <span className="group-hover:translate-x-1 transition-transform duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
              <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
            </svg>
          </span>
        </a>
      </div>
    </section>
  );
};

export default InstagramSection;
