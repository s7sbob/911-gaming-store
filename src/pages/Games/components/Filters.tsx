import { FaSearch, FaFilter, FaSortAmountDown } from 'react-icons/fa';

interface FiltersProps {
  search: string;
  setSearch: (value: string) => void;
  platformFilter: string;
  setPlatformFilter: (value: string) => void;
  sortBy: string;
  setSortBy: (value: string) => void;
  priceRange: [number, number];
  setPriceRange: (value: [number, number]) => void;
}

const Filters = ({
  search,
  setSearch,
  platformFilter,
  setPlatformFilter,
  sortBy,
  setSortBy,
  priceRange,
  setPriceRange
}: FiltersProps) => {
  return (
    <div className="bg-gradient-to-br from-[#dfdfdf]/10 to-[#dfdfdf]/5 border border-[#4160bf]/20 rounded-2xl p-6 mb-8 backdrop-blur-sm">
      <div className="flex items-center gap-2 mb-6">
        <FaFilter className="text-[#4160bf] text-xl" />
        <h3 className="text-[#dfdfdf] font-bold text-xl">Filter & Sort</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Search */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search games..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-[#141310] border border-[#4160bf]/30 rounded-xl px-4 py-3 pl-12 text-white placeholder-[#dfdfdf]/50 focus:outline-none focus:border-[#4160bf] transition-colors"
          />
          <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#dfdfdf]/50" />
        </div>

        {/* Platform Filter */}
        <select
          value={platformFilter}
          onChange={(e) => setPlatformFilter(e.target.value)}
          className="bg-[#141310] border border-[#4160bf]/30 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#4160bf] transition-colors"
        >
          <option value="">All Platforms</option>
          <option value="PC">PC</option>
          <option value="PS5">PlayStation 5</option>
          <option value="Xbox">Xbox Series X/S</option>
          <option value="Nintendo">Nintendo Switch</option>
        </select>

        {/* Sort By */}
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="bg-[#141310] border border-[#4160bf]/30 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#4160bf] transition-colors"
        >
          <option value="newest">Newest First</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
          <option value="rating">Highest Rated</option>
          <option value="popular">Most Popular</option>
        </select>

        {/* Price Range */}
        <div>
          <label className="text-[#dfdfdf]/70 text-sm mb-2 block">
            Price Range: ${priceRange[0]} - ${priceRange[1]}
          </label>
          <input
            type="range"
            min="0"
            max="100"
            value={priceRange[1]}
            onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
            className="w-full h-2 bg-[#4160bf]/20 rounded-lg appearance-none cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default Filters;
