import { FaGift, FaStar } from 'react-icons/fa';
import { useCurrency } from '../../../context/CurrencyContext';

interface GiftCard {
  id: number;
  platform: string;
  amounts: number[];
  image: string;
  popular?: boolean;
}

const GiftCardSection = () => {
  const { formatPrice } = useCurrency();

  const giftCards: GiftCard[] = [
    {
      id: 1,
      platform: "Steam",
      amounts: [10, 25, 50, 100],
      image: "https://via.placeholder.com/300x200/4160bf/ffffff?text=Steam+Gift+Card",
      popular: true
    },
    {
      id: 2,
      platform: "Epic Games",
      amounts: [15, 25, 50],
      image: "https://via.placeholder.com/300x200/4160bf/ffffff?text=Epic+Games+Gift+Card"
    },
    {
      id: 3,
      platform: "Battle.net",
      amounts: [20, 50, 100],
      image: "https://via.placeholder.com/300x200/4160bf/ffffff?text=Battle.net+Gift+Card"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-[#dfdfdf]/5 to-transparent rounded-3xl mt-12">
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-3 bg-[#4160bf]/20 backdrop-blur-sm px-6 py-3 rounded-full text-[#4160bf] font-medium mb-6 animate-bounce">
          <FaGift className="animate-pulse" />
          <span className="text-lg">Gift Cards</span>
        </div>
        <h2 className="text-4xl font-bold text-[#dfdfdf] mb-4">
          Perfect <span className="text-[#4160bf]">Gaming Gifts</span>
        </h2>
        <p className="text-[#dfdfdf]/70 text-xl max-w-2xl mx-auto">
          Give the gift of gaming with digital gift cards for all major platforms
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {giftCards.map((card) => (
          <div key={card.id} className="group relative bg-gradient-to-b from-[#dfdfdf]/10 to-[#dfdfdf]/5 border border-[#4160bf]/20 rounded-2xl overflow-hidden hover:border-[#4160bf] transition-all duration-500 transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-[#4160bf]/20">
            
            {/* Popular Badge */}
            {card.popular && (
              <div className="absolute top-4 left-4 z-10">
                <span className="bg-gradient-to-r from-yellow-500 to-yellow-400 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                  <FaStar className="text-xs" />
                  Popular
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
              <div className="absolute inset-0 bg-gradient-to-t from-[#141310]/60 to-transparent"></div>
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-2xl font-bold text-[#dfdfdf] mb-4 group-hover:text-[#4160bf] transition-colors">
                {card.platform} Gift Card
              </h3>
              
              {/* Amount Options */}
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

              {/* Benefits */}
              <div className="text-[#dfdfdf]/70 text-sm mb-6">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 bg-[#4160bf] rounded-full"></div>
                  <span>Instant digital delivery</span>
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 bg-[#4160bf] rounded-full"></div>
                  <span>No expiration date</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#4160bf] rounded-full"></div>
                  <span>Works worldwide</span>
                </div>
              </div>

              {/* CTA */}
              <button className="w-full bg-gradient-to-r from-[#4160bf] to-[#4160bf]/80 hover:from-[#4160bf]/90 hover:to-[#4160bf]/70 text-white py-3 rounded-xl font-medium flex items-center justify-center gap-2 transition-all duration-300 transform group-hover:scale-105">
                <FaGift />
                Choose Amount
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GiftCardSection;
