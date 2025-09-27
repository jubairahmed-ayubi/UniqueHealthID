'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const BannerSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: "Track Your Health Journey",
      subtitle: "Monitor your vital signs and health metrics in real-time",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
      gradient: "from-blue-600/80 to-purple-600/80"
    },
    {
      id: 2,
      title: "Connect with Healthcare Professionals",
      subtitle: "Access your doctor's information and schedule appointments",
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
      gradient: "from-green-600/80 to-blue-600/80"
    },
    {
      id: 3,
      title: "Emergency Response System",
      subtitle: "Quick access to emergency services and SOS contacts",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
      gradient: "from-red-600/80 to-orange-600/80"
    },
    {
      id: 4,
      title: "Comprehensive Medical Archive",
      subtitle: "Keep all your medical records organized and accessible",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba0ef08?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
      gradient: "from-purple-600/80 to-pink-600/80"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative h-96 md:h-[500px] overflow-hidden rounded-lg shadow-2xl">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${slide.image})` }}
          />
          <div className={`absolute inset-0 bg-gradient-to-r ${slide.gradient}`} />
          
          {/* Content */}
          <div className="relative z-10 flex items-center justify-center h-full px-4 sm:px-6 lg:px-8">
            <div className="text-center text-white max-w-4xl">
              <h1 className="text-3xl md:text-5xl font-bold mb-4 animate-fade-in">
                {slide.title}
              </h1>
              <p className="text-lg md:text-xl mb-8 opacity-90 animate-fade-in-delay">
                {slide.subtitle}
              </p>
              <button className="bg-white text-gray-800 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-200 animate-bounce-in">
                Get Started
              </button>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors duration-200"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors duration-200"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors duration-200 ${
              index === currentSlide ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default BannerSlider;
