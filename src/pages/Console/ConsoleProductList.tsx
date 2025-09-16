import ConsoleProductCard, { type ConsoleProductCardProps } from './components/ConsoleProductCard';
import { FaGamepad, FaSpinner } from 'react-icons/fa';

interface ConsoleProductListProps {
  products: ConsoleProductCardProps[];
  loading?: boolean;
}

const ConsoleProductList = ({ products, loading = false }: ConsoleProductListProps) => {
  if (loading) {
    return (
      <div className="py-20">
        <div className="text-center">
          <FaSpinner className="text-6xl text-[#4160bf] mx-auto mb-4 animate-spin" />
          <h3 className="text-2xl font-bold text-[#dfdfdf] mb-2">Loading Console Products</h3>
          <p className="text-[#dfdfdf]/70 text-lg">
            Please wait while we fetch the latest games and gift cards...
          </p>
        </div>
        
        {/* Loading Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {[...Array(8)].map((_, index) => (
            <div key={index} className="bg-[#dfdfdf]/10 rounded-2xl overflow-hidden animate-pulse">
              <div className="h-64 bg-[#4160bf]/20"></div>
              <div className="p-6">
                <div className="h-4 bg-[#4160bf]/20 rounded mb-2"></div>
                <div className="h-4 bg-[#4160bf]/20 rounded w-3/4 mb-4"></div>
                <div className="h-6 bg-[#4160bf]/20 rounded w-1/2 mb-4"></div>
                <div className="h-10 bg-[#4160bf]/20 rounded"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className="text-center py-20">
        <div className="relative mb-8">
          <FaGamepad className="text-6xl text-[#4160bf]/50 mx-auto mb-4" />
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-[#4160bf]/30 rounded-full animate-bounce"></div>
          <div className="absolute top-4 right-1/2 transform translate-x-8 w-1 h-1 bg-[#4160bf]/20 rounded-full animate-bounce delay-300"></div>
        </div>
        
        <h3 className="text-3xl font-bold text-[#dfdfdf] mb-4">No Console Products Found</h3>
        <p className="text-[#dfdfdf]/70 text-xl max-w-md mx-auto mb-8 leading-relaxed">
          We couldn't find any products matching your search criteria. Try adjusting your filters or browse all products.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={() => window.location.reload()} 
            className="bg-gradient-to-r from-[#4160bf] to-[#4160bf]/80 hover:from-[#4160bf]/90 hover:to-[#4160bf]/70 text-white px-8 py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105"
          >
            Clear Filters
          </button>
          <button className="border-2 border-[#4160bf] text-[#4160bf] hover:bg-[#4160bf] hover:text-white px-8 py-3 rounded-xl font-medium transition-all duration-300">
            Browse All Products
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-12">
      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product, index) => (
          <div 
            key={product.id}
            className="opacity-0 animate-fadeInUp"
            style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
          >
            <ConsoleProductCard {...product} />
          </div>
        ))}
      </div>

      {/* Results Info */}
      <div className="text-center py-8">
        <p className="text-[#dfdfdf]/70 text-lg">
          Showing <span className="text-[#4160bf] font-bold">{products.length}</span> products
        </p>
        
        {products.length > 8 && (
          <button className="mt-4 bg-transparent border-2 border-[#4160bf] text-[#4160bf] hover:bg-[#4160bf] hover:text-white px-8 py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105">
            Load More Products
          </button>
        )}
      </div>
    </div>
  );
};

export default ConsoleProductList;
