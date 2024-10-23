import React from 'react';
import { AiOutlineGift, AiOutlineUserAdd } from 'react-icons/ai'; 
import { FaTelegramPlane, FaCrown, FaMedal } from 'react-icons/fa';
import { GiAchievement } from 'react-icons/gi';

const InviteFriends = () => {
  const friends = [
    { name: 'Roshan', level: 'Silver', inviteReward: '+25K', icon: <FaMedal className="text-gray-400 text-3xl" /> },
    { name: 'Narendra', level: 'Gold', inviteReward: '+25K', icon: <FaCrown className="text-yellow-500 text-3xl" /> },
    { name: 'Diksha', level: 'Bronze', inviteReward: '+25K', icon: <GiAchievement className="text-orange-500 text-3xl" /> },
    { name: 'Shivam', level: 'Silver', inviteReward: '+25K', icon: <FaMedal className="text-gray-400 text-3xl" /> },
    { name: 'Deepak', level: 'Bronze', inviteReward: '+25K', icon: <GiAchievement className="text-orange-500 text-3xl" /> }
  ];

  return (
    <div className="bg-gradient-to-b from-black via-gray-900 to-gray-800 min-h-screen text-white">
      {/* Header */}
      <div className="flex-grow">

      <div className="p-4 flex items-center text-center bg-black">
        <h1 className="text-xl font-bold text-yellow-400">Hamster Kombat</h1>
      </div>

      {/* Invite friends section */}
      <div className="p-4 text-center">
        <h2 className="text-3xl font-bold text-purple-400 mb-2">Invite Friends!</h2>
        <p className="text-sm text-gray-300">You and your friend will receive bonuses</p>
      </div>

      {/* Invite Options */}
      <div className="space-y-4 px-4">
        <div className="bg-gray-700 p-4 rounded-lg flex items-center justify-between">
          <div className="flex items-center">
            <AiOutlineGift className="text-pink-400 text-4xl mr-3" />
            <p className="text-lg">Invite a friend</p>
          </div>
          <p className="text-yellow-400">+5,000</p>
        </div>

        <div className="bg-gray-700 p-4 rounded-lg flex items-center justify-between">
          <div className="flex items-center">
            <FaTelegramPlane className="text-blue-400 text-4xl mr-3" />
            <p className="text-lg">Invite a friend with Telegram Premium</p>
          </div>
          <p className="text-yellow-400">+25,000</p>
        </div>

        <button className="text-purple-300 underline mt-2">More bonuses</button>
      </div>

      {/* List of friends */}
      <div className="p-4">
        <h3 className="text-lg font-bold mb-2">List of your friends (5)</h3>
        <div className="space-y-2">
          {friends.map((friend, index) => (
            <div key={index} className="bg-gray-800 p-3 rounded-lg flex items-center justify-between">
              <div className="flex items-center">
                {/* Icon Placeholder */}
                <div className="w-12 h-12 rounded-full flex items-center justify-center mr-3">
                  {friend.icon}
                </div>
                <div>
                  <p className="text-lg">{friend.name}</p>
                  <p className="text-gray-400 text-sm">{friend.level}</p>
                </div>
              </div>
              <p className="text-yellow-500 text-lg">{friend.inviteReward}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Invite button */}
      <div className=" bottom-0 w-full p-4  flex justify-center">
        <button className="bg-purple-600 hover:bg-purple-700 text-white py-3 px-8 rounded-full flex items-center shadow-lg">
          <AiOutlineUserAdd className="mr-2 text-2xl" />
          Invite a friend
        </button>
      </div>
      </div>

    </div>
  );
};

export default InviteFriends;
