import { useState, useEffect } from 'react';
import { FaPlayCircle, FaArrowRight, FaGamepad } from 'react-icons/fa';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const slides = [
    {
      title: "Welcome to",
      subtitle: "911 Gaming Store",
      description: "Discover the ultimate gaming experience with the largest collection of games and accessories at the best prices",
      cta: "Explore Games",
      accent: "New Arrivals"
    },
    {
      title: "Epic",
      subtitle: "Gaming Deals",
      description: "Save up to 80% on AAA titles and gaming accessories. Limited time offers you can't miss!",
      cta: "Shop Now",
      accent: "Hot Deals"
    },
    {
      title: "Premium",
      subtitle: "Gaming Gear",
      description: "Level up your setup with professional gaming peripherals and cutting-edge hardware",
      cta: "View Gear",
      accent: "Pro Gaming"
    }
  ];

  return (
    <section className="relative min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#141310] via-[#4160bf]/10 to-[#141310]"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-20 w-32 h-32 border-2 border-[#4160bf]/20 rounded-full animate-spin-slow hidden lg:block"></div>
        <div className="absolute bottom-32 right-32 w-24 h-24 bg-[#4160bf]/10 rounded-xl rotate-45 animate-float hidden lg:block"></div>
        <div className="absolute top-1/2 left-10 w-16 h-16 border border-[#4160bf]/30 rounded-full animate-pulse hidden lg:block"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Accent Badge */}
          <div className={`inline-flex items-center gap-2 bg-[#4160bf]/20 backdrop-blur-sm px-6 py-2 rounded-full text-[#4160bf] font-medium mb-8 transition-all duration-1000 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <FaGamepad className="animate-bounce" />
            <span>{slides[currentSlide].accent}</span>
          </div>

          {/* Main Title */}
          <div className={`transition-all duration-1000 delay-300 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
              <span className="text-[#dfdfdf] block">{slides[currentSlide].title}</span>
              <span className="bg-gradient-to-r from-[#4160bf] to-[#4160bf]/70 bg-clip-text text-transparent animate-pulse">
                {slides[currentSlide].subtitle}
              </span>
            </h1>
          </div>

          {/* Description */}
          <p className={`text-[#dfdfdf]/80 text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-500 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            {slides[currentSlide].description}
          </p>

          {/* CTA Buttons */}
          <div className={`flex flex-col sm:flex-row gap-6 justify-center items-center transition-all duration-1000 delay-700 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <button className="group bg-gradient-to-r from-[#4160bf] to-[#4160bf]/80 hover:from-[#4160bf]/90 hover:to-[#4160bf]/70 text-white px-10 py-4 rounded-xl font-medium flex items-center gap-3 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-[#4160bf]/30">
              <FaPlayCircle className="group-hover:animate-spin" />
              {slides[currentSlide].cta}
              <div className="w-0 h-0.5 bg-white group-hover:w-6 transition-all duration-300"></div>
            </button>
            
            <button className="group border-2 border-[#4160bf] text-[#4160bf] hover:bg-[#4160bf] hover:text-white px-10 py-4 rounded-xl font-medium flex items-center gap-3 transition-all duration-300 transform hover:scale-105 backdrop-blur-sm">
              Special Offers
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center gap-3 mt-16">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-12 h-1 rounded-full transition-all duration-300 ${
                  currentSlide === index ? 'bg-[#4160bf] w-16' : 'bg-[#4160bf]/30'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Particles Effect */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-[#4160bf]/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
