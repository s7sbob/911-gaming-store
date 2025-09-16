import { useState } from 'react';
import { FaStar, FaHeart, FaShoppingCart, FaDownload, FaKey, FaGift } from 'react-icons/fa';
import { useCurrency } from '../../../context/CurrencyContext';

export interface ProductCardProps {
  id: number;
  title: string;
  price: number;
  originalPrice?: number;
  rating?: number;
  reviews?: number;
  image: string;
  type: 'game' | 'software' | 'giftcard' | 'serial';
  platform: string;
  tags: string[];
  discount?: number;
  isNew?: boolean;
  isBestseller?: boolean;
  isDigital?: boolean;
}

const ProductCard = ({ 
  id, title, price, originalPrice, rating, reviews, image, type, platform, 
  tags, discount, isNew, isBestseller, isDigital = true 
}: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const { formatPrice } = useCurrency();

  const getProductIcon = () => {
    switch (type) {
      case 'game': return <FaDownload className="text-[#4160bf]" />;
      case 'software': return <FaKey className="text-green-500" />;
      case 'giftcard': return <FaGift className="text-yellow-500" />;
      case 'serial': return <FaKey className="text-purple-500" />;
      default: return <FaDownload className="text-[#4160bf]" />;
    }
  };

  const getTypeLabel = () => {
    switch (type) {
      case 'game': return 'Game';
      case 'software': return 'Software';
      case 'giftcard': return 'Gift Card';
      case 'serial': return 'Serial Key';
      default: return 'Digital';
    }
  };

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
        
        {/* Type Badge */}
        <div className="absolute top-4 right-4 flex items-center gap-2 bg-[#141310]/90 px-3 py-1 rounded-full backdrop-blur-sm">
          {getProductIcon()}
          <span className="text-white text-xs font-bold">{getTypeLabel()}</span>
        </div>

        {/* Platform Badge */}
        <div className="absolute bottom-4 left-4">
          <span className="bg-[#4160bf]/90 text-white px-3 py-1 rounded-full text-xs font-bold backdrop-blur-sm">
            {platform}
          </span>
        </div>

        {/* Digital Badge */}
        {isDigital && (
          <div className="absolute bottom-4 right-4">
            <span className="bg-green-500/90 text-white px-3 py-1 rounded-full text-xs font-bold backdrop-blur-sm">
              Instant Download
            </span>
          </div>
        )}
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

        {/* Rating (only for games) */}
        {rating && reviews && (
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
        )}

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
          {type === 'giftcard' ? 'Buy Gift Card' : 'Add to Cart'}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
