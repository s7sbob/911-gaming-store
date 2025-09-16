import { FaSearch, FaFilter, FaSortAmountDown } from 'react-icons/fa';

interface ProductFiltersProps {
  search: string;
  setSearch: (value: string) => void;
  sortBy: string;
  setSortBy: (value: string) => void;
  priceRange: [number, number];
  setPriceRange: (value: [number, number]) => void;
}

const ProductFilters = ({
  search,
  setSearch,
  sortBy,
  setSortBy,
  priceRange,
  setPriceRange
}: ProductFiltersProps) => {
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
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-[#141310] border border-[#4160bf]/30 rounded-xl px-4 py-3 pl-12 text-white placeholder-[#dfdfdf]/50 focus:outline-none focus:border-[#4160bf] transition-colors"
          />
          <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#dfdfdf]/50" />
        </div>

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
        <div className="col-span-2">
          <label className="text-[#dfdfdf]/70 text-sm mb-2 block">
            Price Range: ${priceRange[0]} - ${priceRange[1]}
          </label>
          <input
            type="range"
            min="0"
            max="500"
            value={priceRange[1]}
            onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
            className="w-full h-2 bg-[#4160bf]/20 rounded-lg appearance-none cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductFilters;
