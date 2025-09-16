import { useState } from 'react';
import PersonalInfo from './components/PersonalInfo';
import { FaUser, FaHistory, FaHeart, FaCog, FaGamepad } from 'react-icons/fa';

const Profile = () => {
  const [activeTab, setActiveTab] = useState('personal');

  const tabs = [
    { id: 'personal', name: 'Personal Info', icon: <FaUser /> },
    { id: 'orders', name: 'Order History', icon: <FaHistory /> },
    { id: 'wishlist', name: 'Wishlist', icon: <FaHeart /> },
    { id: 'settings', name: 'Settings', icon: <FaCog /> }
  ];

  return (
    <div className="min-h-screen bg-[#141310] py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 bg-[#4160bf]/20 backdrop-blur-sm px-6 py-3 rounded-full text-[#4160bf] font-medium mb-6">
            <FaGamepad className="animate-pulse" />
            <span>Profile</span>
          </div>
          <h1 className="text-5xl font-bold text-[#dfdfdf] mb-4">My Account</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-[#dfdfdf]/10 border border-[#4160bf]/20 rounded-2xl p-6 sticky top-6">
              <div className="space-y-2">
                {tabs.map(tab => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all ${
                      activeTab === tab.id
                        ? 'bg-gradient-to-r from-[#4160bf] to-[#4160bf]/80 text-white'
                        : 'text-[#dfdfdf]/70 hover:bg-[#4160bf]/20 hover:text-[#4160bf]'
                    }`}
                  >
                    {tab.icon}
                    {tab.name}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-3">
            {activeTab === 'personal' && <PersonalInfo />}
            {activeTab === 'orders' && (
              <div className="bg-[#dfdfdf]/10 border border-[#4160bf]/20 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-[#dfdfdf] mb-6">Order History</h2>
                <p className="text-[#dfdfdf]/70">No orders found.</p>
              </div>
            )}
            {/* Add other tab contents as needed */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
