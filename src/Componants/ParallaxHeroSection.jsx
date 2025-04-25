import React, { useEffect, useState } from 'react';
import bgImage from '../assets/bg.jpg';

const ParallaxHeroSection = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Calculate scale based on scroll position
  const heroScale = 1 + scrollPosition * 0.0005;
  const opacity = 1 - Math.min(scrollPosition * 0.002, 0.8);
  
  return (
    <div className="relative">
      {/* Hero Section with Parallax Effect */}
      <div className="relative h-screen overflow-hidden">
        <div 
          className="absolute inset-0 transition-transform"
          style={{ 
            transform: `scale(${heroScale})`,
            opacity: opacity
          }}
        >
          <div className="grid grid-cols-5 h-full">
            {/* Left image */}
            <div className="col-span-1 relative">
  <div 
    className="absolute inset-0 bg-cover bg-center"
    style={{ backgroundImage: `url(${bgImage})` }}
  ></div>
</div>
            
            {/* Center image collage */}
            <div className="col-span-3 grid grid-rows-3">
              <div className="row-span-1 grid grid-cols-3">
              <div className="col-span-1 relative">
  <div 
    className="absolute inset-0 bg-cover bg-center"
    style={{ backgroundImage: `url(${bgImage})` }}
  ></div>
</div>
                <div className="col-span-1 relative">
                  <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1511988617509-a57c8a288659')" }}></div>
                </div>
                <div className="col-span-1 relative">
                  <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1495516372021-9c815fa7e668')" }}></div>
                </div>
              </div>
              <div className="row-span-1 relative">
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1560624052-449f5ddf0c31')" }}></div>
              </div>
              <div className="row-span-1 grid grid-cols-2">
                <div className="col-span-1 relative">
                  <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600271886742-f049cd451bba')" }}></div>
                </div>
                <div className="col-span-1 relative">
                  <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1574634534894-89d7576c8259')" }}></div>
                </div>
              </div>
            </div>
            
            {/* Right image */}
            <div className="col-span-1 relative">
              <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1492684223066-81342ee5ff30')" }}></div>
            </div>
          </div>
        </div>
        
        {/* Overlay for text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-40 z-10">
          <div className="container mx-auto px-6 text-center text-white">
            <div className="max-w-3xl mx-auto">
              <h1 className="text-6xl md:text-7xl font-bold mb-8">
                Production Wizards,
                <br />
                from ideation to
                <br />
                execution
              </h1>
              <p className="text-xl md:text-2xl mb-12">
                From brainstorming to the final cut, we bring life to your creativity — no drama, just high-quality production.
              </p>
              <button className="bg-transparent hover:bg-white hover:text-black text-white font-semibold py-3 px-10 border-2 border-white rounded-full transition duration-300">
                Contact Us
              </button>
            </div>
          </div>
        </div>
        
        {/* Navigation */}
        <nav className="absolute top-0 left-0 right-0 z-20 py-6">
          <div className="container mx-auto px-6 flex justify-between items-center">
            <div className="text-white text-2xl font-semibold">tones&colours</div>
            <div className="hidden md:flex space-x-8 text-white">
              <a href="#" className="hover:text-gray-300">Home</a>
              <a href="#" className="hover:text-gray-300">Videos</a>
              <a href="#" className="hover:text-gray-300">Photos</a>
              <a href="#" className="hover:text-gray-300">About</a>
              <a href="#" className="hover:text-gray-300">Services</a>
              <a href="#" className="hover:text-gray-300">Blogs</a>
            </div>
            <button className="bg-white text-black px-6 py-2 rounded-full font-medium">Let's Talk</button>
          </div>
        </nav>
      </div>
      
      {/* Showreel Section */}
      <div className="relative min-h-screen bg-black">
        <div 
          className="container mx-auto px-6 pt-32"
          style={{
            transform: `translateY(${Math.max(-100, -scrollPosition + 500)}px)`,
            opacity: Math.min(1, (scrollPosition - 300) / 500)
          }}
        >
          <h2 className="text-white text-9xl font-bold mb-32">SHOWREEL</h2>
          
          <div className="aspect-w-16 aspect-h-9 mb-16">
            <div className="w-full h-full bg-gray-800 rounded-lg">
              {/* Placeholder for video player */}
              <div className="flex items-center justify-center h-full">
                <div className="w-20 h-20 rounded-full bg-white bg-opacity-30 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-black" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParallaxHeroSection;