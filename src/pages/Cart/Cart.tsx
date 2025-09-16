import { useState, useMemo } from 'react';
import CartItem, { type CartItemProps } from './components/CartItem';
import CartSummary from './components/CartSummary';
import { FaShoppingCart, FaArrowLeft, FaTags } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Cart = () => {
  const [cartItems, setCartItems] = useState<CartItemProps[]>([
    {
      id: 1,
      title: "Cyberpunk 2077",
      price: 29.99,
      image: "https://via.placeholder.com/300x400/4160bf/ffffff?text=Cyberpunk+2077",
      platform: "PC",
      quantity: 1,
      type: 'game',
      onUpdateQuantity: () => {},
      onRemoveItem: () => {}
    },
    {
      id: 2,
      title: "Steam Gift Card $50",
      price: 50.00,
      image: "https://via.placeholder.com/300x400/4160bf/ffffff?text=Steam+Gift+Card",
      platform: "Steam",
      quantity: 2,
      type: 'giftcard',
      onUpdateQuantity: () => {},
      onRemoveItem: () => {}
    }
  ]);

  const [couponCode, setCouponCode] = useState('');

  const updateQuantity = (id: number, quantity: number) => {
    setCartItems(items => 
      items.map(item => 
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const cartSummary = useMemo(() => {
    const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const discount = couponCode === 'SAVE10' ? subtotal * 0.1 : 0;
    const tax = (subtotal - discount) * 0.08;
    const total = subtotal - discount + tax;
    const itemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

    return { subtotal, discount, tax, total, itemCount };
  }, [cartItems, couponCode]);

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-[#141310] py-12">
        <div className="container mx-auto px-4">
          <div className="text-center py-20">
            <FaShoppingCart className="text-6xl text-[#4160bf]/50 mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-[#dfdfdf] mb-4">Your Cart is Empty</h2>
            <p className="text-[#dfdfdf]/70 text-xl mb-8">
              Looks like you haven't added any games to your cart yet.
            </p>
            <Link 
              to="/games"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-[#4160bf] to-[#4160bf]/80 hover:from-[#4160bf]/90 hover:to-[#4160bf]/70 text-white px-8 py-4 rounded-xl font-medium transition-all duration-300 transform hover:scale-105"
            >
              <FaArrowLeft />
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#141310] py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 bg-[#4160bf]/20 backdrop-blur-sm px-6 py-3 rounded-full text-[#4160bf] font-medium mb-6">
            <FaShoppingCart className="animate-bounce" />
            <span>Shopping Cart</span>
          </div>
          <h1 className="text-5xl font-bold text-[#dfdfdf] mb-4">Your Cart</h1>
          <p className="text-[#dfdfdf]/70 text-xl">
            {cartSummary.itemCount} items in your cart
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-6">
            {cartItems.map(item => (
              <CartItem 
                key={item.id}
                {...item}
                onUpdateQuantity={updateQuantity}
                onRemoveItem={removeItem}
              />
            ))}

            {/* Coupon Code */}
            <div className="bg-[#dfdfdf]/10 border border-[#4160bf]/20 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <FaTags className="text-[#4160bf]" />
                <h3 className="text-xl font-bold text-[#dfdfdf]">Coupon Code</h3>
              </div>
              <div className="flex gap-4">
                <input
                  type="text"
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value)}
                  placeholder="Enter coupon code"
                  className="flex-grow bg-[#141310] border border-[#4160bf]/30 rounded-lg px-4 py-3 text-white placeholder-[#dfdfdf]/50 focus:outline-none focus:border-[#4160bf]"
                />
                <button className="bg-[#4160bf] hover:bg-[#4160bf]/80 text-white px-6 py-3 rounded-lg font-medium transition-colors">
                  Apply
                </button>
              </div>
              {couponCode === 'SAVE10' && (
                <p className="text-green-500 text-sm mt-2">✅ Coupon applied! 10% discount</p>
              )}
            </div>
          </div>

          {/* Cart Summary */}
          <div>
            <CartSummary {...cartSummary} />
          </div>
        </div>

        {/* Continue Shopping */}
        <div className="text-center mt-12">
          <Link 
            to="/games"
            className="inline-flex items-center gap-3 text-[#4160bf] hover:text-[#dfdfdf] transition-colors"
          >
            <FaArrowLeft />
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
