import { FaShoppingCart, FaLock, FaCreditCard } from 'react-icons/fa';
import { useCurrency } from '../../../context/CurrencyContext';

interface CartSummaryProps {
  subtotal: number;
  discount: number;
  tax: number;
  total: number;
  itemCount: number;
}

const CartSummary = ({ subtotal, discount, tax, total, itemCount }: CartSummaryProps) => {
  const { formatPrice } = useCurrency();

  return (
    <div className="bg-gradient-to-br from-[#dfdfdf]/10 to-[#dfdfdf]/5 border border-[#4160bf]/20 rounded-2xl p-8 sticky top-6">
      <div className="flex items-center gap-3 mb-6">
        <FaShoppingCart className="text-[#4160bf] text-xl" />
        <h2 className="text-2xl font-bold text-[#dfdfdf]">Order Summary</h2>
      </div>

      <div className="space-y-4 mb-6">
        <div className="flex justify-between items-center">
          <span className="text-[#dfdfdf]/70">Subtotal ({itemCount} items)</span>
          <span className="text-[#dfdfdf] font-medium">{formatPrice(subtotal)}</span>
        </div>
        
        {discount > 0 && (
          <div className="flex justify-between items-center">
            <span className="text-green-500">Discount</span>
            <span className="text-green-500 font-medium">-{formatPrice(discount)}</span>
          </div>
        )}
        
        <div className="flex justify-between items-center">
          <span className="text-[#dfdfdf]/70">Tax</span>
          <span className="text-[#dfdfdf] font-medium">{formatPrice(tax)}</span>
        </div>
        
        <hr className="border-[#4160bf]/20" />
        
        <div className="flex justify-between items-center text-xl">
          <span className="font-bold text-[#dfdfdf]">Total</span>
          <span className="font-bold text-[#4160bf]">{formatPrice(total)}</span>
        </div>
      </div>

      {/* Checkout Button */}
      <button className="w-full bg-gradient-to-r from-[#4160bf] to-[#4160bf]/80 hover:from-[#4160bf]/90 hover:to-[#4160bf]/70 text-white py-4 rounded-xl font-medium text-lg flex items-center justify-center gap-3 transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-[#4160bf]/30 mb-4">
        <FaLock />
        Secure Checkout
      </button>

      {/* Payment Methods */}
      <div className="text-center">
        <p className="text-[#dfdfdf]/60 text-sm mb-3">We accept:</p>
        <div className="flex justify-center items-center gap-3">
          {['Visa', 'Mastercard', 'PayPal', 'Apple Pay'].map((method) => (
            <div key={method} className="bg-[#dfdfdf]/10 px-3 py-2 rounded-lg text-[#dfdfdf]/70 text-xs">
              {method}
            </div>
          ))}
        </div>
      </div>

      {/* Security Badge */}
      <div className="flex items-center justify-center gap-2 mt-6 text-[#dfdfdf]/60 text-sm">
        <FaLock />
        <span>256-bit SSL secured</span>
      </div>
    </div>
  );
};

export default CartSummary;
