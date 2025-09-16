import { useState, useMemo } from 'react';
import ConsoleTabs from './components/ConsoleTabs';
import ConsoleFilters from './components/ConsoleFilters';
import ConsoleProductList from './ConsoleProductList';
import ConsoleGiftCards from './components/ConsoleGiftCards';
import { FaGamepad, FaFire, FaTrophy } from 'react-icons/fa';

// Sample data with more variety
const allProducts = [
  {
    id: 1,
    title: "PS5 Spider-Man 2 Ultimate Edition",
    price: 69.99,
    originalPrice: 89.99,
    rating: 4.9,
    reviews: 2847,
    image: "https://via.placeholder.com/300x400/4160bf/ffffff?text=PS5+Spider-Man+2",
    type: 'game' as const,
    platform: "PS5",
    tags: ["Action", "Adventure", "Superhero"],
    discount: 22,
    isBestseller: true
  },
  {
    id: 2,
    title: "Xbox Game Pass Ultimate - 3 Months",
    price: 44.99,
    originalPrice: 49.99,
    image: "https://via.placeholder.com/300x400/4160bf/ffffff?text=Xbox+Game+Pass",
    type: 'giftcard' as const,
    platform: "Xbox",
    tags: ["Subscription", "Game Pass", "Xbox Live"],
    discount: 10,
    isNew: true
  },
  {
    id: 3,
    title: "The Legend of Zelda: Tears of the Kingdom",
    price: 59.99,
    rating: 4.8,
    reviews: 3241,
    image: "https://via.placeholder.com/300x400/4160bf/ffffff?text=Nintendo+Zelda",
    type: 'game' as const,
    platform: "Nintendo Switch",
    tags: ["Adventure", "RPG", "Open World"],
    discount: 0,
    isBestseller: true
  },
  {
    id: 4,
    title: "PlayStation Store Gift Card $50",
    price: 50.00,
    image: "https://via.placeholder.com/300x400/4160bf/ffffff?text=PlayStation+Gift+Card",
    type: 'giftcard' as const,
    platform: "PS5",
    tags: ["Gift Card", "PlayStation", "Digital"],
    isNew: false
  },
  {
    id: 5,
    title: "Halo Infinite Campaign",
    price: 39.99,
    originalPrice: 59.99,
    rating: 4.6,
    reviews: 1856,
    image: "https://via.placeholder.com/300x400/4160bf/ffffff?text=Halo+Infinite",
    type: 'game' as const,
    platform: "Xbox",
    tags: ["FPS", "Sci-Fi", "Campaign"],
    discount: 33
  },
  {
    id: 6,
    title: "God of War Ragnarök",
    price: 49.99,
    originalPrice: 69.99,
    rating: 4.9,
    reviews: 4123,
    image: "https://via.placeholder.com/300x400/4160bf/ffffff?text=God+of+War",
    type: 'game' as const,
    platform: "PS5",
    tags: ["Action", "Adventure", "Norse"],
    discount: 29,
    isBestseller: true
  },
  {
    id: 7,
    title: "Nintendo eShop Card $35",
    price: 35.00,
    image: "https://via.placeholder.com/300x400/4160bf/ffffff?text=Nintendo+eShop",
    type: 'giftcard' as const,
    platform: "Nintendo Switch",
    tags: ["Gift Card", "Nintendo", "eShop"]
  },
  {
    id: 8,
    title: "FIFA 24 Standard Edition",
    price: 59.99,
    originalPrice: 69.99,
    rating: 4.4,
    reviews: 2156,
    image: "https://via.placeholder.com/300x400/4160bf/ffffff?text=FIFA+24",
    type: 'game' as const,
    platform: "PS5",
    tags: ["Sports", "Football", "EA Sports"],
    discount: 14,
    isNew: true
  }
];

const Console = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [search, setSearch] = useState('');
  const [sortBy, setSortBy] = useState('newest');
  const [platformFilter, setPlatformFilter] = useState('');
  const [loading, setLoading] = useState(false);

  const filteredProducts = useMemo(() => {
    let filtered = allProducts;

    // Filter by category
    if (activeCategory !== 'all') {
      if (activeCategory === 'games') {
        filtered = filtered.filter(p => p.type === 'game');
      } else if (activeCategory === 'giftcards') {
        filtered = filtered.filter(p => p.type === 'giftcard');
      }
    }

    // Filter by platform
    if (platformFilter) {
      filtered = filtered.filter(p => p.platform === platformFilter);
    }

    // Filter by search
    if (search) {
      filtered = filtered.filter(p => 
        p.title.toLowerCase().includes(search.toLowerCase()) ||
        p.tags.some(tag => tag.toLowerCase().includes(search.toLowerCase())) ||
        p.platform.toLowerCase().includes(search.toLowerCase())
      );
    }

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
  }, [activeCategory, search, sortBy, platformFilter]);

  const statsData = useMemo(() => {
    const games = allProducts.filter(p => p.type === 'game').length;
    const giftCards = allProducts.filter(p => p.type === 'giftcard').length;
    const platforms = [...new Set(allProducts.map(p => p.platform))].length;
    
    return { games, giftCards, platforms };
  }, []);

  return (
    <div className="min-h-screen bg-[#141310] py-12">
      <div className="container mx-auto px-4">
        {/* Enhanced Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-[#4160bf]/20 backdrop-blur-sm px-6 py-3 rounded-full text-[#4160bf] font-medium mb-6 animate-bounce">
            <FaGamepad className="animate-pulse" />
            <span className="text-lg">Console Gaming Hub</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="text-[#dfdfdf]">Ultimate </span>
            <span className="bg-gradient-to-r from-[#4160bf] to-[#4160bf]/70 bg-clip-text text-transparent animate-pulse">
              Console Store
            </span>
          </h1>
          
          <p className="text-[#dfdfdf]/70 text-xl max-w-4xl mx-auto leading-relaxed mb-8">
            Discover the latest console games, exclusive releases, and digital gift cards for PlayStation, Xbox, and Nintendo Switch
          </p>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
            <div className="bg-gradient-to-br from-[#dfdfdf]/10 to-[#dfdfdf]/5 border border-[#4160bf]/20 rounded-xl p-6 backdrop-blur-sm">
              <div className="text-3xl font-bold text-[#4160bf] mb-1">{statsData.games}</div>
              <div className="text-[#dfdfdf]/70">Console Games</div>
            </div>
            <div className="bg-gradient-to-br from-[#dfdfdf]/10 to-[#dfdfdf]/5 border border-[#4160bf]/20 rounded-xl p-6 backdrop-blur-sm">
              <div className="text-3xl font-bold text-[#4160bf] mb-1">{statsData.giftCards}</div>
              <div className="text-[#dfdfdf]/70">Gift Cards</div>
            </div>
            <div className="bg-gradient-to-br from-[#dfdfdf]/10 to-[#dfdfdf]/5 border border-[#4160bf]/20 rounded-xl p-6 backdrop-blur-sm">
              <div className="text-3xl font-bold text-[#4160bf] mb-1">{statsData.platforms}</div>
              <div className="text-[#dfdfdf]/70">Platforms</div>
            </div>
          </div>
        </div>

        {/* Featured Section */}
        <div className="mb-12">
          <div className="bg-gradient-to-r from-[#4160bf]/20 to-transparent border-l-4 border-[#4160bf] rounded-r-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <FaFire className="text-[#4160bf] text-2xl animate-pulse" />
              <h2 className="text-2xl font-bold text-[#dfdfdf]">Trending Now</h2>
            </div>
            <p className="text-[#dfdfdf]/70 text-lg">
              Check out the most popular games and gift cards that everyone's talking about!
            </p>
          </div>
        </div>

        {/* Category Tabs */}
        <ConsoleTabs 
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />

        {/* Filters */}
        <ConsoleFilters
          search={search}
          setSearch={setSearch}
          sortBy={sortBy}
          setSortBy={setSortBy}
          platformFilter={platformFilter}
          setPlatformFilter={setPlatformFilter}
        />

        {/* Products List */}
        <ConsoleProductList products={filteredProducts} loading={loading} />

        {/* Gift Cards Section - Only show when viewing all or gift cards */}
        {(activeCategory === 'all' || activeCategory === 'giftcards') && (
          <div className="mt-16">
            <ConsoleGiftCards />
          </div>
        )}

        {/* Bottom CTA */}
        {filteredProducts.length > 0 && (
          <div className="text-center mt-16 py-12">
            <div className="bg-gradient-to-br from-[#dfdfdf]/10 to-[#dfdfdf]/5 border border-[#4160bf]/20 rounded-2xl p-8 max-w-2xl mx-auto">
              <FaTrophy className="text-4xl text-[#4160bf] mx-auto mb-4 animate-bounce" />
              <h3 className="text-2xl font-bold text-[#dfdfdf] mb-4">Level Up Your Gaming</h3>
              <p className="text-[#dfdfdf]/70 mb-6">
                Join thousands of gamers who trust 911 Gaming Store for the best console gaming experience
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-[#4160bf] to-[#4160bf]/80 hover:from-[#4160bf]/90 hover:to-[#4160bf]/70 text-white px-8 py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105">
                  Create Account
                </button>
                <button className="border-2 border-[#4160bf] text-[#4160bf] hover:bg-[#4160bf] hover:text-white px-8 py-3 rounded-xl font-medium transition-all duration-300">
                  Join Newsletter
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Console;
