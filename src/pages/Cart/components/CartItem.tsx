import { useState } from 'react';
import { FaMinus, FaPlus, FaTrash, FaHeart } from 'react-icons/fa';
import { useCurrency } from '../../../context/CurrencyContext';

export interface CartItemProps {
  id: number;
  title: string;
  price: number;
  image: string;
  platform: string;
  quantity: number;
  type: 'game' | 'software' | 'giftcard';
  onUpdateQuantity: (id: number, quantity: number) => void;
  onRemoveItem: (id: number) => void;
}

const CartItem = ({ 
  id, title, price, image, platform, quantity, type, 
  onUpdateQuantity, onRemoveItem 
}: CartItemProps) => {
  const { formatPrice } = useCurrency();
  const [isRemoving, setIsRemoving] = useState(false);

  const handleRemove = () => {
    setIsRemoving(true);
    setTimeout(() => onRemoveItem(id), 300);
  };

  const updateQuantity = (newQuantity: number) => {
    if (newQuantity > 0 && newQuantity <= 10) {
      onUpdateQuantity(id, newQuantity);
    }
  };

  return (
    <div className={`group bg-gradient-to-r from-[#dfdfdf]/10 to-[#dfdfdf]/5 border border-[#4160bf]/20 rounded-xl p-6 hover:border-[#4160bf]/40 transition-all duration-300 ${
      isRemoving ? 'animate-fadeOut opacity-0 scale-95' : ''
    }`}>
      <div className="flex flex-col md:flex-row gap-6">
        {/* Product Image */}
        <div className="flex-shrink-0">
          <img 
            src={image} 
            alt={title}
            className="w-24 h-24 md:w-32 md:h-32 object-cover rounded-xl group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Product Details */}
        <div className="flex-grow">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div className="flex-grow">
              <h3 className="text-xl font-bold text-[#dfdfdf] group-hover:text-[#4160bf] transition-colors mb-2">
                {title}
              </h3>
              <div className="flex items-center gap-3 text-[#dfdfdf]/70">
                <span className="bg-[#4160bf]/20 text-[#4160bf] px-3 py-1 rounded-full text-sm font-medium">
                  {platform}
                </span>
                <span className="text-sm capitalize">{type}</span>
              </div>
            </div>

            {/* Price */}
            <div className="text-right">
              <div className="text-2xl font-bold text-[#4160bf] mb-1">
                {formatPrice(price * quantity)}
              </div>
              <div className="text-[#dfdfdf]/60 text-sm">
                {formatPrice(price)} each
              </div>
            </div>
          </div>

          {/* Quantity Controls & Actions */}
          <div className="flex items-center justify-between mt-4">
            <div className="flex items-center gap-4">
              {/* Quantity Controls */}
              <div className="flex items-center bg-[#141310] border border-[#4160bf]/30 rounded-lg">
                <button 
                  onClick={() => updateQuantity(quantity - 1)}
                  className="p-2 hover:bg-[#4160bf]/20 text-[#dfdfdf] hover:text-[#4160bf] transition-colors"
                  disabled={quantity <= 1}
                >
                  <FaMinus className="text-sm" />
                </button>
                <span className="px-4 py-2 text-[#dfdfdf] font-medium min-w-[3rem] text-center">
                  {quantity}
                </span>
                <button 
                  onClick={() => updateQuantity(quantity + 1)}
                  className="p-2 hover:bg-[#4160bf]/20 text-[#dfdfdf] hover:text-[#4160bf] transition-colors"
                  disabled={quantity >= 10}
                >
                  <FaPlus className="text-sm" />
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-3">
              <button className="p-2 hover:bg-[#4160bf]/20 text-[#dfdfdf]/70 hover:text-[#4160bf] rounded-lg transition-colors">
                <FaHeart />
              </button>
              <button 
                onClick={handleRemove}
                className="p-2 hover:bg-red-500/20 text-[#dfdfdf]/70 hover:text-red-500 rounded-lg transition-colors"
              >
                <FaTrash />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
