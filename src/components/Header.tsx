import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaSearch, FaShoppingCart, FaUser, FaBars, FaTimes, FaExchangeAlt, FaHome, FaGamepad, FaDesktop, FaEnvelope, FaGift } from 'react-icons/fa';
import { useCurrency } from '../context/CurrencyContext';

// Navigation configuration interface
interface NavItem {
  id: string;
  label: string;
  path: string;
  icon?: React.ReactNode;
  isExternal?: boolean;
  badge?: string;
}

// Navigation items configuration - Easy to modify
const navigationItems: NavItem[] = [
  {
    id: 'home',
    label: 'Home',
    path: '/',
    icon: <FaHome className="text-sm" />
  },
  {
    id: 'games',
    label: 'All Games',
    path: '/games',
    icon: <FaGamepad className="text-sm" />,
    badge: 'Hot'
  },
  {
    id: 'pc',
    label: 'PC',
    path: '/pc',
    icon: <FaDesktop className="text-sm" />
  },
  {
    id: 'console',
    label: 'Console',
    path: '/console',
    icon: <FaGamepad className="text-sm" />
  },
  {
    id: 'accessories',
    label: 'Accessories',
    path: '/accessories',
    icon: <FaGift className="text-sm" />,
    badge: 'Soon'
  },
  {
    id: 'contact',
    label: 'Contact',
    path: '/contact',
    icon: <FaEnvelope className="text-sm" />
  }
];

// User action buttons configuration
const userActions = [
  {
    id: 'profile',
    icon: FaUser,
    path: '/profile',
    label: 'Profile'
  },
  {
    id: 'cart',
    icon: FaShoppingCart,
    path: '/cart',
    label: 'Shopping Cart',
    badge: 2
  }
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { currency, setCurrency } = useCurrency();
  const location = useLocation();

  const toggleCurrency = () => {
    setCurrency(currency === 'USD' ? 'EGP' : 'USD');
  };

  const isActiveRoute = (path: string) => {
    return location.pathname === path;
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Handle search logic here
      console.log('Searching for:', searchQuery);
    }
  };

  return (
    <header className="bg-[#141310] border-b border-[#4160bf]/20 sticky top-0 z-50 backdrop-blur-md">
      <div className="container mx-auto px-4">
        {/* Top Bar */}
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="text-2xl font-bold transition-all duration-300 group-hover:scale-105">
              <span className="text-[#4160bf] bg-gradient-to-r from-[#4160bf] to-[#4160bf]/70 bg-clip-text text-transparent">
                911
              </span>
              <span className="text-[#dfdfdf] ml-1">Gaming</span>
            </div>
            <div className="w-2 h-2 bg-[#4160bf] rounded-full animate-pulse"></div>
          </Link>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-lg mx-8">
            <form onSubmit={handleSearch} className="w-full">
              <div className={`relative w-full transition-all duration-300 ${
                isSearchFocused ? 'transform scale-105' : ''
              }`}>
                <input
                  type="text"
                  placeholder="Search for games, accessories..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-[#dfdfdf]/10 border border-[#4160bf]/30 rounded-xl px-4 py-3 pl-12 text-white placeholder-[#dfdfdf]/60 focus:outline-none focus:border-[#4160bf] focus:bg-[#dfdfdf]/15 transition-all duration-300"
                  onFocus={() => setIsSearchFocused(true)}
                  onBlur={() => setIsSearchFocused(false)}
                />
                <button
                  type="submit"
                  className={`absolute left-4 top-1/2 transform -translate-y-1/2 text-[#dfdfdf]/60 hover:text-[#4160bf] transition-all duration-300 ${
                    isSearchFocused ? 'text-[#4160bf] scale-110' : ''
                  }`}
                >
                  <FaSearch />
                </button>
              </div>
            </form>
          </div>

          {/* User Actions */}
          <div className="flex items-center space-x-4">
            {/* Currency Toggle */}
            <button 
              onClick={toggleCurrency}
              className="group relative p-3 hover:bg-[#4160bf]/20 rounded-xl transition-all duration-300 transform hover:scale-105"
              title={`Switch to ${currency === 'USD' ? 'EGP' : 'USD'}`}
              aria-label={`Current currency: ${currency}. Click to switch.`}
            >
              <div className="flex items-center space-x-1">
                <FaExchangeAlt className="text-[#dfdfdf] text-sm group-hover:text-[#4160bf] transition-colors" />
                <span className="text-[#dfdfdf] text-sm font-medium group-hover:text-[#4160bf] transition-colors">
                  {currency}
                </span>
              </div>
              <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-[#4160bf] group-hover:w-full transition-all duration-300"></div>
            </button>

            {/* User Action Buttons */}
            {userActions.map((action) => (
              <Link
                key={action.id}
                to={action.path}
                className="group p-3 hover:bg-[#4160bf]/20 rounded-xl transition-all duration-300 transform hover:scale-105 relative"
                title={action.label}
                aria-label={action.label}
              >
                <action.icon className="text-[#dfdfdf] text-xl group-hover:text-[#4160bf] transition-colors" />
                {action.badge && (
                  <span className="absolute -top-1 -right-1 bg-gradient-to-r from-[#4160bf] to-[#4160bf]/80 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center animate-bounce">
                    {action.badge}
                  </span>
                )}
              </Link>
            ))}
            
            {/* Mobile Menu Toggle */}
            <button 
              className="md:hidden p-3 hover:bg-[#4160bf]/20 rounded-xl transition-all duration-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMenuOpen ? 
                <FaTimes className="text-[#dfdfdf] text-xl" /> : 
                <FaBars className="text-[#dfdfdf] text-xl" />
              }
            </button>
          </div>
        </div>

        {/* Navigation */}
        <nav className={`md:block ${isMenuOpen ? 'block' : 'hidden'} border-t border-[#4160bf]/20 pt-4 pb-4`}>
          <ul className="flex flex-col md:flex-row md:space-x-8 space-y-2 md:space-y-0">
            {navigationItems.map((item) => (
              <li key={item.id}>
                <Link 
                  to={item.path}
                  className={`group relative flex items-center gap-2 font-medium py-2 px-3 rounded-lg transition-all duration-300 ${
                    isActiveRoute(item.path)
                      ? 'text-[#4160bf] bg-[#4160bf]/10'
                      : 'text-[#dfdfdf] hover:text-[#4160bf] hover:bg-[#4160bf]/5'
                  }`}
                  onClick={() => setIsMenuOpen(false)} // Close mobile menu on click
                >
                  {item.icon}
                  <span>{item.label}</span>
                  
                  {/* Badge */}
                  {item.badge && (
                    <span className={`text-xs px-2 py-0.5 rounded-full font-bold ${
                      item.badge === 'Soon' 
                        ? 'bg-yellow-500/20 text-yellow-400'
                        : 'bg-red-500/20 text-red-400 animate-pulse'
                    }`}>
                      {item.badge}
                    </span>
                  )}
                  
                  {/* Active Indicator */}
                  <div className={`absolute -bottom-1 left-0 h-0.5 bg-[#4160bf] transition-all duration-300 ${
                    isActiveRoute(item.path) ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}></div>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Search */}
        <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} border-t border-[#4160bf]/20 pt-4 pb-4`}>
          <form onSubmit={handleSearch}>
            <div className="relative">
              <input
                type="text"
                placeholder="Search for games, accessories..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#dfdfdf]/10 border border-[#4160bf]/30 rounded-xl px-4 py-3 pl-12 text-white placeholder-[#dfdfdf]/60 focus:outline-none focus:border-[#4160bf]"
              />
              <button
                type="submit"
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#dfdfdf]/60 hover:text-[#4160bf]"
              >
                <FaSearch />
              </button>
            </div>
          </form>
        </div>
      </div>
    </header>
  );
};

export default Header;
