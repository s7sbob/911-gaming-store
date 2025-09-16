import { FaTools, FaCog, FaRocket } from 'react-icons/fa';

const Accessories = () => {
  return (
    <div className="min-h-screen bg-[#141310] flex items-center justify-center">
      <div className="text-center max-w-2xl mx-auto px-4">
        {/* Animated Icon */}
        <div className="relative mb-8">
          <div className="inline-flex items-center justify-center w-32 h-32 bg-gradient-to-br from-[#4160bf] to-[#4160bf]/70 rounded-full mb-6 animate-pulse">
            <FaTools className="text-4xl text-white animate-bounce" />
          </div>
          
          {/* Floating Elements */}
          <div className="absolute top-0 right-0 w-8 h-8 bg-[#4160bf]/30 rounded-full animate-float"></div>
          <div className="absolute bottom-0 left-0 w-6 h-6 bg-[#4160bf]/20 rounded-full animate-float delay-1000"></div>
        </div>

        {/* Content */}
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          <span className="text-[#dfdfdf]">Coming </span>
          <span className="bg-gradient-to-r from-[#4160bf] to-[#4160bf]/70 bg-clip-text text-transparent">
            Soon
          </span>
        </h1>
        
        <p className="text-[#dfdfdf]/70 text-xl mb-8 leading-relaxed">
          We're working hard to bring you the best gaming accessories and peripherals. 
          Stay tuned for an amazing collection of gaming gear!
        </p>

        {/* Features Preview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {[
            { icon: <FaCog />, title: "Gaming Peripherals", desc: "Keyboards, mice & controllers" },
            { icon: <FaRocket />, title: "Pro Gaming Gear", desc: "Professional esports equipment" },
            { icon: <FaTools />, title: "Custom Setups", desc: "Personalized gaming solutions" }
          ].map((feature, index) => (
            <div key={index} className="bg-[#dfdfdf]/10 border border-[#4160bf]/20 rounded-2xl p-6 backdrop-blur-sm hover:border-[#4160bf]/40 transition-all duration-300">
              <div className="text-[#4160bf] text-3xl mb-4 flex justify-center">
                {feature.icon}
              </div>
              <h3 className="text-[#dfdfdf] font-bold text-lg mb-2">{feature.title}</h3>
              <p className="text-[#dfdfdf]/70">{feature.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-gradient-to-r from-[#4160bf] to-[#4160bf]/80 hover:from-[#4160bf]/90 hover:to-[#4160bf]/70 text-white px-8 py-4 rounded-xl font-medium transition-all duration-300 transform hover:scale-105">
            Notify Me When Available
          </button>
          <button className="border-2 border-[#4160bf] text-[#4160bf] hover:bg-[#4160bf] hover:text-white px-8 py-4 rounded-xl font-medium transition-all duration-300">
            Browse Other Categories
          </button>
        </div>
      </div>
    </div>
  );
};

export default Accessories;
