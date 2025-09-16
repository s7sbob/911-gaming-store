import { useState } from 'react';
import { FaStar, FaShoppingCart, FaHeart, FaEye, FaGamepad, FaFire } from 'react-icons/fa';
import { useCurrency } from '../context/CurrencyContext';

const FeaturedGames = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const { formatPrice } = useCurrency();

  const featuredGames = [
    {
      id: 1,
      title: "Cyberpunk 2077",
      price: 19.99,
      originalPrice: 59.99,
      rating: 4.5,
      reviews: 2847,
      image: "./game.jpg",
      platform: "PC",
      tags: ["RPG", "Open World", "Sci-Fi"],
      discount: 67,
      isNew: false,
      isBestseller: true
    },
    {
      id: 2,
      title: "FIFA 2024",
      price: 34.99,
      rating: 4.8,
      reviews: 1523,
      image: "./game.jpg",
      platform: "PS5",
      tags: ["Sports", "Football", "Multiplayer"],
      isNew: true,
      isBestseller: false
    },
    {
      id: 3,
      title: "Call of Duty: MW3",
      price: 44.99,
      rating: 4.6,
      reviews: 3241,
      image: "./game.jpg",
      platform: "Xbox",
      tags: ["FPS", "Action", "Multiplayer"],
      isNew: false,
      isBestseller: true
    },
    {
      id: 4,
      title: "GTA VI",
      price: 69.99,
      rating: 4.9,
      reviews: 5634,
      image: "./game.jpg",
      platform: "PC",
      tags: ["Action", "Open World", "Crime"],
      isNew: true,
      isBestseller: false
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-[#141310] to-[#dfdfdf]/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#4160bf]/20 px-4 py-2 rounded-full text-[#4160bf] font-medium mb-4 animate-pulse">
            <FaFire />
            <span>Featured Games</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#dfdfdf] mb-6 bg-gradient-to-r from-[#dfdfdf] to-[#dfdfdf]/70 bg-clip-text text-transparent">
            Trending Now
          </h2>
          <p className="text-[#dfdfdf]/70 text-xl max-w-2xl mx-auto leading-relaxed">
            Discover the hottest games and latest releases that everyone's talking about
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredGames.map((game) => (
            <div 
              key={game.id} 
              className="group relative bg-gradient-to-b from-[#dfdfdf]/10 to-[#dfdfdf]/5 border border-[#4160bf]/20 rounded-2xl overflow-hidden hover:border-[#4160bf] transition-all duration-500 transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-[#4160bf]/20"
              onMouseEnter={() => setHoveredCard(game.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Badges */}
              <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
                {game.isNew && (
                  <span className="bg-gradient-to-r from-green-500 to-green-400 text-white px-3 py-1 rounded-full text-xs font-bold animate-bounce">
                    NEW
                  </span>
                )}
                {game.isBestseller && (
                  <span className="bg-gradient-to-r from-yellow-500 to-yellow-400 text-white px-3 py-1 rounded-full text-xs font-bold">
                    BESTSELLER
                  </span>
                )}
                {game.discount && (
                  <span className="bg-gradient-to-r from-red-500 to-red-400 text-white px-3 py-1 rounded-full text-xs font-bold">
                    -{game.discount}%
                  </span>
                )}
              </div>

              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={game.image} 
                  alt={game.title}
                  className={`w-full h-full object-cover transition-all duration-700 ${
                    hoveredCard === game.id ? 'scale-110 brightness-110' : 'scale-100'
                  }`}
                />
                
                {/* Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t from-[#141310] via-transparent to-transparent transition-opacity duration-300 ${
                  hoveredCard === game.id ? 'opacity-70' : 'opacity-0'
                }`}></div>

                {/* Platform Badge */}
                <div className="absolute top-4 right-4">
                  <span className="bg-[#141310]/90 text-[#4160bf] px-3 py-1 rounded-full text-xs font-bold backdrop-blur-sm">
                    {game.platform}
                  </span>
                </div>

                {/* Quick Actions */}
                <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex gap-3 transition-all duration-300 ${
                  hoveredCard === game.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}>
                  <button className="p-3 bg-[#4160bf] text-white rounded-full hover:bg-[#4160bf]/80 transition-colors transform hover:scale-110">
                    <FaEye />
                  </button>
                  <button className="p-3 bg-[#dfdfdf] text-[#141310] rounded-full hover:bg-[#dfdfdf]/80 transition-colors transform hover:scale-110">
                    <FaHeart />
                  </button>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6">
                {/* Tags */}
                <div className="flex flex-wrap gap-1 mb-3">
                  {game.tags.slice(0, 2).map((tag, index) => (
                    <span key={index} className="text-[#4160bf] text-xs bg-[#4160bf]/10 px-2 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title */}
                <h3 className="font-bold text-[#dfdfdf] text-xl mb-3 group-hover:text-[#4160bf] transition-colors line-clamp-1">
                  {game.title}
                </h3>
                
                {/* Rating */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <FaStar 
                        key={i} 
                        className={`text-sm transition-all duration-100 delay-${i * 50} ${
                          i < Math.floor(game.rating) 
                            ? "text-yellow-400 scale-100" 
                            : "text-gray-600 scale-90"
                        }`} 
                      />
                    ))}
                  </div>
                  <span className="text-[#dfdfdf]/70 text-sm">({game.reviews})</span>
                </div>

                {/* Price */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-2">
                    <span className="text-[#4160bf] font-bold text-xl">
                      {formatPrice(game.price)}
                    </span>
                    {game.originalPrice && (
                      <span className="text-[#dfdfdf]/50 text-sm line-through">
                        {formatPrice(game.originalPrice)}
                      </span>
                    )}
                  </div>
                </div>

                {/* Add to Cart Button */}
                <button className="w-full bg-gradient-to-r from-[#4160bf] to-[#4160bf]/80 hover:from-[#4160bf]/90 hover:to-[#4160bf]/70 text-white py-3 rounded-xl font-medium flex items-center justify-center gap-2 transition-all duration-300 transform group-hover:scale-105 group-hover:shadow-lg group-hover:shadow-[#4160bf]/30">
                  <FaShoppingCart className={`transition-transform duration-300 ${
                    hoveredCard === game.id ? 'animate-bounce' : ''
                  }`} />
                  Add to Cart
                </button>
              </div>

              {/* Glowing effect */}
              <div className={`absolute inset-0 bg-gradient-to-r from-[#4160bf]/20 via-transparent to-[#4160bf]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl`}></div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="group bg-transparent border-2 border-[#4160bf] text-[#4160bf] hover:bg-[#4160bf] hover:text-white px-8 py-4 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-[#4160bf]/30 inline-flex items-center gap-3">
            <FaGamepad className="group-hover:animate-spin" />
            View All Games
            <div className="w-0 h-0.5 bg-white group-hover:w-6 transition-all duration-300"></div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedGames;
