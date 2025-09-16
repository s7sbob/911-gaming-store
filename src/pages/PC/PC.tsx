import { useState, useMemo } from 'react';
import CategoryTabs from './components/CategoryTabs';
import ProductFilters from './components/ProductFilters';
import ProductList from './ProductList';
import GiftCardSection from './components/GiftCardSection';
import { FaDesktop, FaGamepad, FaFire, FaTrophy } from 'react-icons/fa';

// Enhanced sample data with more variety
const allProducts = [
  {
    id: 1,
    title: "Windows 11 Pro",
    price: 199.99,
    originalPrice: 259.99,
    image: "https://via.placeholder.com/300x400/4160bf/ffffff?text=Windows+11+Pro",
    type: 'software' as const,
    platform: "PC",
    tags: ["Operating System", "Microsoft"],
    discount: 23,
    isNew: true,
    isDigital: true
  },
  {
    id: 2,
    title: "Steam Gift Card $50",
    price: 50.00,
    image: "https://via.placeholder.com/300x400/4160bf/ffffff?text=Steam+Gift+Card",
    type: 'giftcard' as const,
    platform: "Steam",
    tags: ["Gift Card", "Steam"],
    isDigital: true
  },
  {
    id: 3,
    title: "Cyberpunk 2077 Ultimate Edition",
    price: 29.99,
    originalPrice: 59.99,
    rating: 4.5,
    reviews: 2847,
    image: "https://via.placeholder.com/300x400/4160bf/ffffff?text=Cyberpunk+2077",
    type: 'game' as const,
    platform: "PC",
    tags: ["RPG", "Open World", "Sci-Fi"],
    discount: 50,
    isBestseller: true,
    isDigital: true
  },
  {
    id: 4,
    title: "Adobe Photoshop 2024",
    price: 89.99,
    originalPrice: 129.99,
    image: "https://via.placeholder.com/300x400/4160bf/ffffff?text=Photoshop+2024",
    type: 'software' as const,
    platform: "PC",
    tags: ["Creative", "Adobe", "Design"],
    discount: 31,
    isDigital: true
  },
  {
    id: 5,
    title: "Microsoft Office 365",
    price: 69.99,
    originalPrice: 99.99,
    image: "https://via.placeholder.com/300x400/4160bf/ffffff?text=Office+365",
    type: 'software' as const,
    platform: "PC",
    tags: ["Productivity", "Microsoft", "Office"],
    discount: 30,
    isNew: true,
    isDigital: true
  },
  {
    id: 6,
    title: "Epic Games Store Gift Card",
    price: 25.00,
    image: "https://via.placeholder.com/300x400/4160bf/ffffff?text=Epic+Games+Card",
    type: 'giftcard' as const,
    platform: "Epic Games",
    tags: ["Gift Card", "Epic Games"],
    isDigital: true
  },
  {
    id: 7,
    title: "The Witcher 3: Wild Hunt GOTY",
    price: 19.99,
    originalPrice: 49.99,
    rating: 4.9,
    reviews: 5621,
    image: "https://via.placeholder.com/300x400/4160bf/ffffff?text=Witcher+3",
    type: 'game' as const,
    platform: "PC",
    tags: ["RPG", "Adventure", "Fantasy"],
    discount: 60,
    isBestseller: true,
    isDigital: true
  },
  {
    id: 8,
    title: "Adobe Creative Suite 2024",
    price: 199.99,
    originalPrice: 299.99,
    image: "https://via.placeholder.com/300x400/4160bf/ffffff?text=Adobe+Creative+Suite",
    type: 'software' as const,
    platform: "PC",
    tags: ["Creative", "Adobe", "Professional"],
    discount: 33,
    isBestseller: true,
    isDigital: true
  }
];

const PC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [search, setSearch] = useState('');
  const [sortBy, setSortBy] = useState('newest');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 500]);
  const [loading, setLoading] = useState(false);

  const filteredProducts = useMemo(() => {
    let filtered = allProducts;

    // Filter by category
    if (activeCategory !== 'all') {
      if (activeCategory === 'games') {
        filtered = filtered.filter(p => p.type === 'game');
      } else if (activeCategory === 'software') {
        filtered = filtered.filter(p => p.type === 'software');
      } else if (activeCategory === 'giftcards') {
        filtered = filtered.filter(p => p.type === 'giftcard');
      }
    }

    // Filter by search
    if (search) {
      filtered = filtered.filter(p => 
        p.title.toLowerCase().includes(search.toLowerCase()) ||
        p.tags.some(tag => tag.toLowerCase().includes(search.toLowerCase())) ||
        p.platform.toLowerCase().includes(search.toLowerCase())
      );
    }

    // Filter by price range
    filtered = filtered.filter(p => p.price >= priceRange[0] && p.price <= priceRange[1]);

    // Sort
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        filtered.sort((a, b) => (b.rating || 0) - (a.rating || 0));
        break;
      case 'popular':
        filtered.sort((a, b) => (b.reviews || 0) - (a.reviews || 0));
        break;
      default:
        // newest first - keep original order
        break;
    }

    return filtered;
  }, [activeCategory, search, sortBy, priceRange]);

  const statsData = useMemo(() => {
    const games = allProducts.filter(p => p.type === 'game').length;
    const software = allProducts.filter(p => p.type === 'software').length;
    const giftCards = allProducts.filter(p => p.type === 'giftcard').length;
    
    return { games, software, giftCards };
  }, []);

  return (
    <div className="min-h-screen bg-[#141310] py-12">
      <div className="container mx-auto px-4">
        {/* Enhanced Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-[#4160bf]/20 backdrop-blur-sm px-6 py-3 rounded-full text-[#4160bf] font-medium mb-6 animate-bounce">
            <FaDesktop className="animate-pulse" />
            <span className="text-lg">PC Gaming Hub</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="text-[#dfdfdf]">PC </span>
            <span className="bg-gradient-to-r from-[#4160bf] to-[#4160bf]/70 bg-clip-text text-transparent animate-pulse">
              Gaming & Software
            </span>
          </h1>
          
          <p className="text-[#dfdfdf]/70 text-xl max-w-4xl mx-auto leading-relaxed mb-8">
            Discover the latest PC games, professional software, and digital gift cards for all your computing needs
          </p>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
            <div className="bg-gradient-to-br from-[#dfdfdf]/10 to-[#dfdfdf]/5 border border-[#4160bf]/20 rounded-xl p-6 backdrop-blur-sm hover:border-[#4160bf]/40 transition-all duration-300">
              <div className="text-3xl font-bold text-[#4160bf] mb-1">{statsData.games}</div>
              <div className="text-[#dfdfdf]/70">PC Games</div>
            </div>
            <div className="bg-gradient-to-br from-[#dfdfdf]/10 to-[#dfdfdf]/5 border border-[#4160bf]/20 rounded-xl p-6 backdrop-blur-sm hover:border-[#4160bf]/40 transition-all duration-300">
              <div className="text-3xl font-bold text-[#4160bf] mb-1">{statsData.software}</div>
              <div className="text-[#dfdfdf]/70">Software</div>
            </div>
            <div className="bg-gradient-to-br from-[#dfdfdf]/10 to-[#dfdfdf]/5 border border-[#4160bf]/20 rounded-xl p-6 backdrop-blur-sm hover:border-[#4160bf]/40 transition-all duration-300">
              <div className="text-3xl font-bold text-[#4160bf] mb-1">{statsData.giftCards}</div>
              <div className="text-[#dfdfdf]/70">Gift Cards</div>
            </div>
          </div>
        </div>

        {/* Featured Section */}
        <div className="mb-12">
          <div className="bg-gradient-to-r from-[#4160bf]/20 to-transparent border-l-4 border-[#4160bf] rounded-r-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <FaFire className="text-[#4160bf] text-2xl animate-pulse" />
              <h2 className="text-2xl font-bold text-[#dfdfdf]">Trending on PC</h2>
            </div>
            <p className="text-[#dfdfdf]/70 text-lg">
              Check out the most popular PC games, software, and gift cards that everyone's downloading!
            </p>
          </div>
        </div>

        {/* Category Tabs */}
        <CategoryTabs 
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />

        {/* Filters */}
        <ProductFilters
          search={search}
          setSearch={setSearch}
          sortBy={sortBy}
          setSortBy={setSortBy}
          priceRange={priceRange}
          setPriceRange={setPriceRange}
        />

        {/* Products List */}
        <ProductList products={filteredProducts} loading={loading} />

        {/* Gift Cards Section - Only show when viewing all or gift cards */}
        {(activeCategory === 'all' || activeCategory === 'giftcards') && (
          <GiftCardSection />
        )}

        {/* Bottom CTA */}
        {filteredProducts.length > 0 && (
          <div className="text-center mt-16 py-12">
            <div className="bg-gradient-to-br from-[#dfdfdf]/10 to-[#dfdfdf]/5 border border-[#4160bf]/20 rounded-2xl p-8 max-w-2xl mx-auto backdrop-blur-sm">
              <FaTrophy className="text-4xl text-[#4160bf] mx-auto mb-4 animate-bounce" />
              <h3 className="text-2xl font-bold text-[#dfdfdf] mb-4">Ready to Level Up?</h3>
              <p className="text-[#dfdfdf]/70 mb-6">
                Join thousands of PC gamers who trust 911 Gaming Store for the best digital content and instant delivery
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-[#4160bf] to-[#4160bf]/80 hover:from-[#4160bf]/90 hover:to-[#4160bf]/70 text-white px-8 py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105">
                  Create Account
                </button>
                <button className="border-2 border-[#4160bf] text-[#4160bf] hover:bg-[#4160bf] hover:text-white px-8 py-3 rounded-xl font-medium transition-all duration-300">
                  Browse All Products
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Quick Links */}
        <div className="mt-12 text-center">
          <div className="flex flex-wrap justify-center gap-4 text-[#dfdfdf]/60 text-sm">
            <a href="/support" className="hover:text-[#4160bf] transition-colors">Customer Support</a>
            <span>•</span>
            <a href="/refunds" className="hover:text-[#4160bf] transition-colors">Refund Policy</a>
            <span>•</span>
            <a href="/system-requirements" className="hover:text-[#4160bf] transition-colors">System Requirements</a>
            <span>•</span>
            <a href="/download-guide" className="hover:text-[#4160bf] transition-colors">Download Guide</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PC;
