import { useState } from 'react';
import { FaUser, FaEdit, FaSave, FaTimes } from 'react-icons/fa';

const PersonalInfo = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [userInfo, setUserInfo] = useState({
    name: 'John Doe',
    email: 'john.doe@email.com',
    phone: '+1 (555) 123-4567',
    country: 'United States',
    city: 'New York'
  });

  const handleSave = () => {
    setIsEditing(false);
    // Here you would typically save to API
  };

  return (
    <div className="bg-gradient-to-br from-[#dfdfdf]/10 to-[#dfdfdf]/5 border border-[#4160bf]/20 rounded-2xl p-8">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <FaUser className="text-[#4160bf] text-2xl" />
          <h2 className="text-2xl font-bold text-[#dfdfdf]">Personal Information</h2>
        </div>
        <button 
          onClick={() => setIsEditing(!isEditing)}
          className="flex items-center gap-2 bg-[#4160bf]/20 hover:bg-[#4160bf]/30 text-[#4160bf] px-4 py-2 rounded-lg transition-colors"
        >
          {isEditing ? <FaTimes /> : <FaEdit />}
          {isEditing ? 'Cancel' : 'Edit'}
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {Object.entries(userInfo).map(([key, value]) => (
          <div key={key}>
            <label className="block text-[#dfdfdf]/70 text-sm font-medium mb-2 capitalize">
              {key}
            </label>
            {isEditing ? (
              <input
                type={key === 'email' ? 'email' : 'text'}
                value={value}
                onChange={(e) => setUserInfo({...userInfo, [key]: e.target.value})}
                className="w-full bg-[#141310] border border-[#4160bf]/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#4160bf]"
              />
            ) : (
              <div className="bg-[#141310]/50 border border-[#4160bf]/10 rounded-lg px-4 py-3 text-[#dfdfdf]">
                {value}
              </div>
            )}
          </div>
        ))}
      </div>

      {isEditing && (
        <div className="flex justify-end mt-6">
          <button 
            onClick={handleSave}
            className="flex items-center gap-2 bg-gradient-to-r from-[#4160bf] to-[#4160bf]/80 text-white px-6 py-3 rounded-lg font-medium transition-all hover:scale-105"
          >
            <FaSave />
            Save Changes
          </button>
        </div>
      )}
    </div>
  );
};

export default PersonalInfo;
