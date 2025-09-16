import { useState } from 'react';
import { FaEnvelope, FaPaperPlane, FaCheck, FaGift, FaBell, FaTrophy, FaStar } from 'react-icons/fa';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    
    setTimeout(() => {
      setIsSubscribed(true);
      setIsLoading(false);
      setEmail('');
      
      setTimeout(() => {
        setIsSubscribed(false);
      }, 4000);
    }, 1500);
  };

  const benefits = [
    {
      icon: <FaGift className="text-3xl" />,
      title: "Exclusive Deals",
      description: "Get subscriber-only discounts and early access to sales",
      color: "from-[#4160bf] to-[#4160bf]/70"
    },
    {
      icon: <FaBell className="text-3xl" />,
      title: "Latest Updates",
      description: "Be the first to know about new game releases and updates",
      color: "from-[#4160bf]/80 to-[#4160bf]/50"
    },
    {
      icon: <FaTrophy className="text-3xl" />,
      title: "Pro Gaming Tips",
      description: "Expert guides, reviews, and gaming strategies delivered weekly",
      color: "from-[#4160bf]/60 to-[#4160bf]/30"
    }
  ];

  const stats = [
    { number: "50K+", label: "Active Subscribers", icon: <FaStar /> },
    { number: "99%", label: "Satisfaction Rate", icon: <FaTrophy /> },
    { number: "Weekly", label: "Exclusive Offers", icon: <FaGift /> }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-[#141310] via-[#4160bf]/5 to-[#141310] relative overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-[#4160bf]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-32 right-32 w-80 h-80 bg-[#4160bf]/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-32 h-32 border-2 border-[#4160bf]/20 rounded-full animate-spin-slow"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 bg-[#4160bf]/20 backdrop-blur-sm px-6 py-3 rounded-full text-[#4160bf] font-medium mb-6 animate-bounce">
              <FaEnvelope className="animate-pulse" />
              <span className="text-lg">Newsletter</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-[#dfdfdf]">Stay In The </span>
              <span className="bg-gradient-to-r from-[#4160bf] to-[#4160bf]/70 bg-clip-text text-transparent">
                Game
              </span>
            </h2>
            <p className="text-[#dfdfdf]/70 text-xl max-w-3xl mx-auto leading-relaxed">
              Subscribe to our newsletter and never miss out on exclusive deals, latest gaming news, and premium content
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {benefits.map((benefit, index) => (
              <div key={index} className="group text-center">
                <div className={`relative inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br ${benefit.color} rounded-2xl mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg group-hover:shadow-[#4160bf]/30`}>
                  <div className="text-white">
                    {benefit.icon}
                  </div>
                  {/* Floating particles */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {[...Array(3)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-1 h-1 bg-white/50 rounded-full animate-float"
                        style={{
                          left: `${30 + i * 20}%`,
                          top: `${20 + i * 15}%`,
                          animationDelay: `${i * 300}ms`
                        }}
                      />
                    ))}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-[#dfdfdf] mb-3 group-hover:text-[#4160bf] transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-[#dfdfdf]/70 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>

          {/* Newsletter Form */}
          <div className="relative">
            <div className="bg-gradient-to-br from-[#dfdfdf]/10 to-[#dfdfdf]/5 border border-[#4160bf]/20 rounded-3xl p-10 backdrop-blur-sm hover:border-[#4160bf]/40 transition-all duration-300">
              <div className="max-w-lg mx-auto">
                {isSubscribed ? (
                  <div className="text-center py-8">
                    <div className="relative inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-green-500 to-green-400 rounded-full mb-6 animate-bounce">
                      <FaCheck className="text-3xl text-white" />
                      <div className="absolute inset-0 bg-green-400 rounded-full animate-ping opacity-20"></div>
                    </div>
                    <h3 className="text-3xl font-bold text-[#dfdfdf] mb-4">Welcome Aboard!</h3>
                    <p className="text-[#dfdfdf]/70 text-lg">
                      Thanks for subscribing! Check your email for a confirmation message and your welcome bonus.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubscribe} className="space-y-6">
                    <div className="text-center mb-8">
                      <h3 className="text-3xl font-bold text-[#dfdfdf] mb-3">
                        Join Our Gaming Community
                      </h3>
                      <p className="text-[#dfdfdf]/70">
                        Get exclusive access to deals, news, and gaming insights
                      </p>
                    </div>

                    <div className="relative group">
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email address"
                        className="w-full bg-[#141310] border-2 border-[#4160bf]/30 rounded-xl px-6 py-4 pr-14 text-[#dfdfdf] placeholder-[#dfdfdf]/50 focus:outline-none focus:border-[#4160bf] focus:bg-[#141310]/80 transition-all duration-300 text-lg group-hover:border-[#4160bf]/50"
                        required
                      />
                      <FaEnvelope className="absolute right-5 top-1/2 transform -translate-y-1/2 text-[#dfdfdf]/50 group-hover:text-[#4160bf] transition-colors" />
                    </div>
                    
                    <button
                      type="submit"
                      disabled={isLoading || !email}
                      className="w-full bg-gradient-to-r from-[#4160bf] to-[#4160bf]/80 hover:from-[#4160bf]/90 hover:to-[#4160bf]/70 disabled:from-[#4160bf]/50 disabled:to-[#4160bf]/30 text-white py-4 px-8 rounded-xl font-medium text-lg flex items-center justify-center gap-3 transition-all duration-300 transform hover:scale-[1.02] disabled:scale-100 shadow-lg hover:shadow-[#4160bf]/30"
                    >
                      {isLoading ? (
                        <>
                          <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
                          <span>Subscribing...</span>
                        </>
                      ) : (
                        <>
                          <FaPaperPlane className="group-hover:animate-bounce" />
                          <span>Subscribe Now</span>
                          <div className="w-0 h-0.5 bg-white group-hover:w-6 transition-all duration-300"></div>
                        </>
                      )}
                    </button>
                  </form>
                )}
                
                <p className="text-[#dfdfdf]/50 text-sm text-center mt-6 leading-relaxed">
                  We respect your privacy. Unsubscribe at any time. No spam, we promise! 🎮
                </p>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center gap-3 mb-4">
                  <div className="text-[#4160bf] text-2xl group-hover:animate-bounce">
                    {stat.icon}
                  </div>
                  <div className="text-4xl font-bold text-[#4160bf] group-hover:text-[#dfdfdf] transition-colors">
                    {stat.number}
                  </div>
                </div>
                <div className="text-[#dfdfdf]/70 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
