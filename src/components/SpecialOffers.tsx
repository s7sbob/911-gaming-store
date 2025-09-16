import { useState, useEffect } from 'react';
import { FaClock, FaFire, FaTag, FaShoppingCart, FaBolt, FaGift } from 'react-icons/fa';
import { useCurrency } from '../context/CurrencyContext';

const SpecialOffers = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 2,
    hours: 15,
    minutes: 30,
    seconds: 45
  });
  const [activeOffer, setActiveOffer] = useState(0);
  const { formatPrice } = useCurrency();

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const specialOffers = [
    {
      id: 1,
      title: "Weekend Gaming Blast",
      description: "Save up to 70% on a curated selection of premium games and DLCs",
      discount: "70%",
      originalPrice: 59.99,
      newPrice: 17.99,
      image: "https://via.placeholder.com/500x300/4160bf/ffffff?text=Weekend+Blast",
      badge: "Limited Time",
      badgeColor: "from-red-500 to-red-400",
      games: ["Cyberpunk 2077", "Witcher 3", "Red Dead 2"]
    },
    {
      id: 2,
      title: "Ultimate Game Bundle",
      description: "Get 3 AAA blockbuster games for the price of one. The best value in gaming!",
      discount: "66%",
      originalPrice: 149.97,
      newPrice: 49.99,
      image: "https://via.placeholder.com/500x300/4160bf/ffffff?text=Game+Bundle",
      badge: "Best Value",
      badgeColor: "from-green-500 to-green-400",
      games: ["FIFA 24", "Call of Duty", "Assassin's Creed"]
    },
    {
      id: 3,
      title: "Next-Gen Console Deal",
      description: "PlayStation 5 + 2 exclusive games + extra controller. Complete gaming setup!",
      discount: "25%",
      originalPrice: 699.99,
      newPrice: 524.99,
      image: "https://via.placeholder.com/500x300/4160bf/ffffff?text=Console+Deal",
      badge: "Exclusive",
      badgeColor: "from-purple-500 to-purple-400",
      games: ["Spider-Man 2", "God of War", "Gran Turismo"]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-[#141310] via-[#4160bf]/5 to-[#141310] relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#4160bf]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[#4160bf]/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-[#4160bf]/20 to-transparent backdrop-blur-sm px-6 py-3 rounded-full text-[#4160bf] font-medium mb-6">
            <FaFire className="text-2xl animate-pulse" />
            <span className="text-lg">Hot Deals</span>
            <FaBolt className="text-xl animate-bounce" />
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-[#dfdfdf]">Special </span>
            <span className="bg-gradient-to-r from-[#4160bf] to-[#4160bf]/70 bg-clip-text text-transparent animate-pulse">
              Offers
            </span>
          </h2>
          
          <p className="text-[#dfdfdf]/70 text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
            Don't miss these incredible deals! Limited-time offers on your favorite games and accessories
          </p>

          {/* Enhanced Countdown Timer */}
          <div className="flex items-center justify-center gap-6 mb-12">
            <div className="flex items-center gap-3">
              <FaClock className="text-[#4160bf] text-2xl animate-spin-slow" />
              <span className="text-[#dfdfdf] font-medium text-lg">Deal expires in:</span>
            </div>
            <div className="flex gap-3">
              {Object.entries(timeLeft).map(([unit, value]) => (
                <div key={unit} className="group">
                  <div className="bg-gradient-to-br from-[#4160bf] to-[#4160bf]/80 text-white px-4 py-3 rounded-xl text-center min-w-[60px] shadow-lg hover:shadow-[#4160bf]/30 transition-all duration-300 transform hover:scale-110">
                    <div className="text-2xl font-bold leading-none">{value.toString().padStart(2, '0')}</div>
                    <div className="text-xs mt-1 opacity-90">
                      {unit === 'days' ? 'Days' : 
                       unit === 'hours' ? 'Hours' : 
                       unit === 'minutes' ? 'Min' : 'Sec'}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Offers Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {specialOffers.map((offer, index) => (
            <div 
              key={offer.id} 
              className="group relative bg-gradient-to-b from-[#dfdfdf]/10 to-[#dfdfdf]/5 border border-[#4160bf]/20 rounded-3xl overflow-hidden hover:border-[#4160bf] transition-all duration-500 transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-[#4160bf]/20"
              onMouseEnter={() => setActiveOffer(index)}
            >
              {/* Image Container */}
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={offer.image} 
                  alt={offer.title}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#141310] via-transparent to-transparent opacity-60"></div>

                {/* Badge */}
                <div className="absolute top-4 left-4">
                  <div className={`bg-gradient-to-r ${offer.badgeColor} text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg animate-pulse`}>
                    <FaGift className="inline mr-1" />
                    {offer.badge}
                  </div>
                </div>

                {/* Discount Badge */}
                <div className="absolute top-4 right-4">
                  <div className="relative">
                    <div className="bg-gradient-to-br from-red-500 to-red-600 text-white w-20 h-20 rounded-full flex items-center justify-center font-bold text-lg shadow-lg animate-bounce">
                      -{offer.discount}
                    </div>
                    <div className="absolute inset-0 bg-red-400 rounded-full animate-ping opacity-20"></div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-[#dfdfdf] mb-3 group-hover:text-[#4160bf] transition-colors">
                  {offer.title}
                </h3>
                
                <p className="text-[#dfdfdf]/70 mb-4 text-base leading-relaxed">
                  {offer.description}
                </p>

                {/* Games Included */}
                <div className="mb-6">
                  <p className="text-[#4160bf] font-medium mb-2 text-sm">Includes:</p>
                  <div className="flex flex-wrap gap-2">
                    {offer.games.map((game, i) => (
                      <span key={i} className="bg-[#4160bf]/20 text-[#4160bf] px-3 py-1 rounded-full text-xs font-medium">
                        {game}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Pricing */}
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-3xl font-bold text-[#4160bf]">
                    {formatPrice(offer.newPrice)}
                  </span>
                  <span className="text-[#dfdfdf]/50 line-through text-xl">
                    {formatPrice(offer.originalPrice)}
                  </span>
                  <span className="bg-green-500 text-white px-2 py-1 rounded text-sm font-bold">
                    Save {formatPrice(offer.originalPrice - offer.newPrice)}
                  </span>
                </div>

                {/* CTA Button */}
                <button className="w-full bg-gradient-to-r from-[#4160bf] to-[#4160bf]/80 hover:from-[#4160bf]/90 hover:to-[#4160bf]/70 text-white py-4 rounded-xl font-medium flex items-center justify-center gap-3 transition-all duration-300 transform group-hover:scale-105 shadow-lg hover:shadow-[#4160bf]/30">
                  <FaShoppingCart className={`transition-transform duration-300 ${
                    activeOffer === index ? 'animate-bounce' : ''
                  }`} />
                  Grab This Deal Now
                  <div className="w-0 h-0.5 bg-white group-hover:w-6 transition-all duration-300"></div>
                </button>
              </div>

              {/* Animated Border */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#4160bf]/30 via-transparent to-[#4160bf]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <button className="group bg-transparent border-2 border-[#4160bf] text-[#4160bf] hover:bg-[#4160bf] hover:text-white px-10 py-4 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-3 shadow-lg hover:shadow-[#4160bf]/30">
            <FaTag className="group-hover:animate-spin" />
            View All Special Offers
            <div className="w-0 h-0.5 bg-current group-hover:w-6 transition-all duration-300"></div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;
