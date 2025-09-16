import { useState } from 'react';
import { FaGamepad, FaDesktop, FaHeadphones, FaKeyboard, FaMouse, FaVrCardboard } from 'react-icons/fa';

const Categories = () => {
  const [hoveredCategory, setHoveredCategory] = useState<number | null>(null);

  const categories = [
    {
      icon: <FaDesktop className="text-5xl" />,
      title: "PC Games",
      count: "200+ Games",
      description: "Latest AAA titles and indie games",
      color: "from-[#4160bf] to-[#4160bf]/70",
      hoverColor: "from-[#4160bf]/90 to-[#4160bf]/60"
    },
    {
      icon: <FaGamepad className="text-5xl" />,
      title: "Console Games",
      count: "150+ Games", 
      description: "PS5, Xbox, Nintendo Switch",
      color: "from-[#4160bf]/80 to-[#4160bf]/50",
      hoverColor: "from-[#4160bf]/70 to-[#4160bf]/40"
    },
    {
      icon: <FaHeadphones className="text-5xl" />,
      title: "Gaming Audio",
      count: "100+ Products",
      description: "Headsets, speakers & sound systems",
      color: "from-[#4160bf]/70 to-[#4160bf]/40",
      hoverColor: "from-[#4160bf]/60 to-[#4160bf]/30"
    },
    {
      icon: <FaKeyboard className="text-5xl" />,
      title: "Peripherals",
      count: "80+ Products",
      description: "Keyboards, mice & controllers",
      color: "from-[#4160bf]/60 to-[#4160bf]/30",
      hoverColor: "from-[#4160bf]/50 to-[#4160bf]/20"
    },
    {
      icon: <FaMouse className="text-5xl" />,
      title: "Gaming Mice",
      count: "50+ Products",
      description: "Precision gaming mice & pads",
      color: "from-[#4160bf]/50 to-[#4160bf]/20",
      hoverColor: "from-[#4160bf]/40 to-[#4160bf]/10"
    },
    {
      icon: <FaVrCardboard className="text-5xl" />,
      title: "VR & AR",
      count: "25+ Products",
      description: "Virtual & augmented reality",
      color: "from-[#4160bf]/40 to-[#4160bf]/10",
      hoverColor: "from-[#4160bf]/30 to-[#4160bf]/5"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-[#dfdfdf]/5 to-[#141310] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-20 right-20 w-64 h-64 bg-[#4160bf]/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#4160bf]/3 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#4160bf]/20 backdrop-blur-sm px-6 py-3 rounded-full text-[#4160bf] font-medium mb-6 animate-bounce">
            <FaGamepad className="animate-spin-slow" />
            <span>Shop by Category</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#dfdfdf] mb-6 bg-gradient-to-r from-[#dfdfdf] to-[#dfdfdf]/70 bg-clip-text text-transparent">
            Find Your Perfect Game
          </h2>
          <p className="text-[#dfdfdf]/70 text-xl max-w-2xl mx-auto leading-relaxed">
            Browse through our carefully curated categories to discover exactly what you're looking for
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div 
              key={index}
              className="group cursor-pointer relative"
              onMouseEnter={() => setHoveredCategory(index)}
              onMouseLeave={() => setHoveredCategory(null)}
            >
              <div className={`relative bg-gradient-to-br ${
                hoveredCategory === index ? category.hoverColor : category.color
              } p-8 rounded-2xl text-center text-white transform transition-all duration-500 hover:scale-105 hover:rotate-1 hover:shadow-2xl hover:shadow-[#4160bf]/30 overflow-hidden`}>
                
                {/* Animated Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Floating Particles */}
                <div className="absolute inset-0 overflow-hidden">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className={`absolute w-2 h-2 bg-white/30 rounded-full transition-all duration-1000 ${
                        hoveredCategory === index ? 'animate-float' : 'opacity-0'
                      }`}
                      style={{
                        left: `${20 + i * 15}%`,
                        top: `${20 + i * 10}%`,
                        animationDelay: `${i * 200}ms`
                      }}
                    />
                  ))}
                </div>

                {/* Icon */}
                <div className={`mb-6 transition-all duration-500 transform ${
                  hoveredCategory === index ? 'scale-110 rotate-12' : 'scale-100'
                } relative z-10`}>
                  {category.icon}
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-2 transition-all duration-300">
                    {category.title}
                  </h3>
                  <p className="text-white/90 font-medium mb-2">{category.count}</p>
                  <p className="text-white/70 text-sm leading-relaxed">{category.description}</p>
                </div>

                {/* Hover Border Effect */}
                <div className={`absolute inset-0 border-2 border-white/20 rounded-2xl transition-all duration-300 ${
                  hoveredCategory === index ? 'border-white/40 shadow-inner' : ''
                }`}></div>

                {/* Corner Accent */}
                <div className={`absolute top-0 right-0 w-16 h-16 bg-white/10 rounded-bl-2xl transition-all duration-300 ${
                  hoveredCategory === index ? 'w-20 h-20' : ''
                }`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <button className="group bg-gradient-to-r from-transparent to-transparent border-2 border-[#4160bf] text-[#4160bf] hover:from-[#4160bf] hover:to-[#4160bf]/80 hover:text-white px-10 py-4 rounded-xl font-medium transition-all duration-500 transform hover:scale-105 hover:shadow-lg hover:shadow-[#4160bf]/30 inline-flex items-center gap-3">
            <FaGamepad className="group-hover:animate-bounce" />
            Explore All Categories
            <div className="w-0 h-0.5 bg-current group-hover:w-6 transition-all duration-300"></div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Categories;
