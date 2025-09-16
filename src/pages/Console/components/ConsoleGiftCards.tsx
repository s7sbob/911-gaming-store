import { FaGift, FaGamepad } from 'react-icons/fa';
import { useCurrency } from '../../../context/CurrencyContext';

interface ConsoleGiftCard {
  id: number;
  platform: string;
  amounts: number[];
  image: string;
  color: string;
  popular?: boolean;
}

const ConsoleGiftCards = () => {
  const { formatPrice } = useCurrency();

  const giftCards: ConsoleGiftCard[] = [
    {
      id: 1,
      platform: "PlayStation",
      amounts: [10, 25, 50, 100],
      image: "https://via.placeholder.com/300x200/4160bf/ffffff?text=PlayStation+Gift+Card",
      color: "from-blue-600 to-blue-500",
      popular: true
    },
    {
      id: 2,
      platform: "Xbox Live",
      amounts: [15, 25, 50, 100],
      image: "https://via.placeholder.com/300x200/4160bf/ffffff?text=Xbox+Gift+Card",
      color: "from-green-600 to-green-500"
    },
    {
      id: 3,
      platform: "Nintendo eShop",
      amounts: [10, 20, 35, 50],
      image: "https://via.placeholder.com/300x200/4160bf/ffffff?text=Nintendo+Gift+Card",
      color: "from-red-600 to-red-500"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-[#dfdfdf]/5 to-transparent rounded-3xl mt-12">
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-3 bg-[#4160bf]/20 backdrop-blur-sm px-6 py-3 rounded-full text-[#4160bf] font-medium mb-6 animate-bounce">
          <FaGift className="animate-pulse" />
          <span className="text-lg">Console Gift Cards</span>
        </div>
        <h2 className="text-4xl font-bold text-[#dfdfdf] mb-4">
          Console <span className="text-[#4160bf]">Gift Cards</span>
        </h2>
        <p className="text-[#dfdfdf]/70 text-xl max-w-2xl mx-auto">
          Perfect gifts for console gamers - instant delivery and no expiration
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {giftCards.map((card) => (
          <div key={card.id} className="group relative bg-gradient-to-b from-[#dfdfdf]/10 to-[#dfdfdf]/5 border border-[#4160bf]/20 rounded-2xl overflow-hidden hover:border-[#4160bf] transition-all duration-500 transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-[#4160bf]/20">
            
            {/* Popular Badge */}
            {card.popular && (
              <div className="absolute top-4 left-4 z-10">
                <span className="bg-gradient-to-r from-yellow-500 to-yellow-400 text-white px-3 py-1 rounded-full text-xs font-bold animate-pulse">
                  Most Popular
                </span>
              </div>
            )}

            {/* Image */}
            <div className="relative h-48 overflow-hidden">
              <img 
                src={card.image} 
                alt={`${card.platform} Gift Card`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className={`absolute inset-0 bg-gradient-to-t ${card.color} opacity-20`}></div>
            </div>

            {/* Content */}
            <div className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <FaGamepad className="text-[#4160bf] text-xl" />
                <h3 className="text-2xl font-bold text-[#dfdfdf] group-hover:text-[#4160bf] transition-colors">
                  {card.platform}
                </h3>
              </div>
              
              {/* Amount Grid */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                {card.amounts.map((amount) => (
                  <button
                    key={amount}
                    className="bg-[#141310] border border-[#4160bf]/30 hover:border-[#4160bf] hover:bg-[#4160bf]/10 text-[#dfdfdf] py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105"
                  >
                    {formatPrice(amount)}
                  </button>
                ))}
              </div>

              {/* Features */}
              <div className="space-y-2 mb-6 text-[#dfdfdf]/70 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Instant email delivery</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Redeemable worldwide</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Never expires</span>
                </div>
              </div>

              {/* CTA */}
              <button className="w-full bg-gradient-to-r from-[#4160bf] to-[#4160bf]/80 hover:from-[#4160bf]/90 hover:to-[#4160bf]/70 text-white py-3 rounded-xl font-medium flex items-center justify-center gap-2 transition-all duration-300 transform group-hover:scale-105">
                <FaGift />
                Select Amount
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ConsoleGiftCards;
