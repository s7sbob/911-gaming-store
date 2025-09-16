import { FaGamepad, FaDesktop, FaGift, FaKey } from 'react-icons/fa';

interface CategoryTabsProps {
  activeCategory: string;
  setActiveCategory: (category: string) => void;
}

const CategoryTabs = ({ activeCategory, setActiveCategory }: CategoryTabsProps) => {
  const categories = [
    { id: 'all', name: 'All Products', icon: <FaDesktop /> },
    { id: 'games', name: 'PC Games', icon: <FaGamepad /> },
    { id: 'software', name: 'Software', icon: <FaKey /> },
    { id: 'giftcards', name: 'Gift Cards', icon: <FaGift /> },
  ];

  return (
    <div className="flex flex-wrap gap-4 mb-8">
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => setActiveCategory(category.id)}
          className={`flex items-center gap-3 px-6 py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 ${
            activeCategory === category.id
              ? 'bg-gradient-to-r from-[#4160bf] to-[#4160bf]/80 text-white shadow-lg shadow-[#4160bf]/30'
              : 'bg-[#dfdfdf]/10 text-[#dfdfdf] hover:bg-[#4160bf]/20 hover:text-[#4160bf]'
          }`}
        >
          <div className={`text-xl ${activeCategory === category.id ? 'animate-bounce' : ''}`}>
            {category.icon}
          </div>
          {category.name}
        </button>
      ))}
    </div>
  );
};

export default CategoryTabs;
