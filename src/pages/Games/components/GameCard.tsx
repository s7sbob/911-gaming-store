import { useState } from 'react';
import { FaStar, FaHeart, FaShoppingCart, FaEye, FaGamepad } from 'react-icons/fa';
import { useCurrency } from '../../../context/CurrencyContext';

export interface GameCardProps {
  id: number;
  title: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  image: string;
  platform: string;
  tags: string[];
  discount?: number;
  isNew?: boolean;
  isBestseller?: boolean;
}

const GameCard = ({ 
  id, title, price, originalPrice, rating, reviews, image, platform, 
  tags, discount, isNew, isBestseller 
}: GameCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const { formatPrice } = useCurrency();

  return (
    <div 
      className="group relative bg-gradient-to-b from-[#dfdfdf]/10 to-[#dfdfdf]/5 border border-[#4160bf]/20 rounded-2xl overflow-hidden hover:border-[#4160bf] transition-all duration-500 transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-[#4160bf]/20"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Badges */}
      <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
        {isNew && (
          <span className="bg-gradient-to-r from-green-500 to-green-400 text-white px-3 py-1 rounded-full text-xs font-bold animate-pulse">
            NEW
          </span>
        )}
        {isBestseller && (
          <span className="bg-gradient-to-r from-yellow-500 to-yellow-400 text-white px-3 py-1 rounded-full text-xs font-bold">
            BESTSELLER
          </span>
        )}
        {discount && (
          <span className="bg-gradient-to-r from-red-500 to-red-400 text-white px-3 py-1 rounded-full text-xs font-bold">
            -{discount}%
          </span>
        )}
      </div>

      {/* Image Container */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={image}
          alt={title}
          className={`w-full h-full object-cover transition-all duration-700 ${
            isHovered ? 'scale-110 brightness-110' : 'scale-100'
          }`}
        />
        
        {/* Platform Badge */}
        <div className="absolute top-4 right-4">
          <span className="bg-[#141310]/90 text-[#4160bf] px-3 py-1 rounded-full text-xs font-bold backdrop-blur-sm">
            {platform}
          </span>
        </div>

        {/* Quick Actions */}
        <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex gap-3 transition-all duration-300 ${
          isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
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
          {tags.slice(0, 2).map((tag, index) => (
            <span key={index} className="text-[#4160bf] text-xs bg-[#4160bf]/10 px-2 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>

        {/* Title */}
        <h3 className="font-bold text-[#dfdfdf] text-xl mb-3 group-hover:text-[#4160bf] transition-colors line-clamp-1">
          {title}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-4">
          <div className="flex text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <FaStar 
                key={i} 
                className={`text-sm ${i < Math.floor(rating) ? "text-yellow-400" : "text-gray-600"}`} 
              />
            ))}
          </div>
          <span className="text-[#dfdfdf]/70 text-sm">({reviews})</span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-2 mb-5">
          <span className="text-[#4160bf] font-bold text-xl">
            {formatPrice(price)}
          </span>
          {originalPrice && (
            <span className="text-[#dfdfdf]/50 text-sm line-through">
              {formatPrice(originalPrice)}
            </span>
          )}
        </div>

        {/* Add to Cart Button */}
        <button className="w-full bg-gradient-to-r from-[#4160bf] to-[#4160bf]/80 hover:from-[#4160bf]/90 hover:to-[#4160bf]/70 text-white py-3 rounded-xl font-medium flex items-center justify-center gap-2 transition-all duration-300 transform group-hover:scale-105">
          <FaShoppingCart className={`transition-transform duration-300 ${
            isHovered ? 'animate-bounce' : ''
          }`} />
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default GameCard;
