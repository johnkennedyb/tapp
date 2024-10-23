import React from 'react';
import { AiFillDollarCircle, AiOutlineThunderbolt } from 'react-icons/ai';
import { GiMining } from 'react-icons/gi';
import { FaEthereum, FaBitcoin, FaGamepad } from 'react-icons/fa';
import { MdStars } from 'react-icons/md';

const MinePage = () => {
  return (
    <div className=" mb-7 bg-gray-900 text-white p-4">
      {/* Header */}
      <div className="flex justify-between items-center py-2">
        <div className="text-lg font-bold">Hamster Kombat</div>
        <div className="flex items-center space-x-2">
          <button className="bg-purple-600 py-1 px-3 rounded-full">+5,000,000</button>
        </div>
      </div>

      {/* Daily Combo Section */}
      <div className="bg-gray-800 rounded-lg p-4 mb-6">
        <div className="flex justify-between items-center">

          <div className='flex'>         <AiOutlineThunderbolt className="text-yellow-300 text-3xl " />
          Daily Combo</div>
          <div className="bg-purple-700 py-1 px-4 rounded-full text-xs">+5,000,000</div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="flex justify-around bg-gray-800 rounded-lg p-2 mb-4">
        <div className="text-center">
          <div>Markets</div>
        </div>
        <div className="text-center">
          <div>PR&Team</div>
        </div>
        <div className="text-center">
          <div>Legal</div>
        </div>
        <div className="text-center">
          <div>Specials</div>
        </div>
      </div>

      {/* Mining Grid */}
      <div className="grid grid-cols-2 gap-4">
        {/* Fan Tokens */}
        <div className="bg-gray-800 rounded-lg p-4 flex flex-col items-center">
        <GiMining className="text-yellow-300 text-3xl " />

          <div className="text-xl mb-2">Fan tokens</div>
          <div className="text-sm">Profit per hour</div>
          <div className="text-lg font-bold">950</div>
          <div className="text-sm mt-2">Level 1</div>
          <div className="text-sm">11.02K</div>
        </div>

        {/* Staking */}
        <div className="bg-gray-800 rounded-lg p-4 flex flex-col items-center">
        <FaBitcoin className="text-orange-500 text-3xl mr-2" />

          <div className="text-xl mb-2">Staking</div>
          <div className="text-sm">Profit per hour</div>
          <div className="text-lg font-bold">+600</div>
          <div className="text-sm mt-2">Level 0</div>
          <div className="text-sm">KYC Level 7</div>
        </div>

        {/* BTC Pairs */}
        <div className="bg-gray-800 rounded-lg p-4 flex flex-col items-center">
        <MdStars className="text-green-300 text-3xl mr-2" />

          <div className="text-xl mb-2">BTC pairs</div>
          <div className="text-sm">Profit per hour</div>
          <div className="text-lg font-bold">40</div>
          <div className="text-sm mt-2">Level 1</div>
          <div className="text-sm">276</div>
        </div>

        {/* ETH Pairs */}
        <div className="bg-gray-800 rounded-lg p-4 flex flex-col items-center">
        <FaEthereum className="text-blue-500 text-3xl mr-2" />

          <div className="text-xl mb-2">ETH pairs</div>
          <div className="text-sm">Profit per hour</div>
          <div className="text-lg font-bold">40</div>
          <div className="text-sm mt-2">Level 1</div>
          <div className="text-sm">331</div>
        </div>

        {/* Top 10 CMC Pairs */}
        <div className="bg-gray-800 rounded-lg p-4 flex flex-col items-center">
        <AiFillDollarCircle className="text-2xl mx-auto" />

          <div className="text-xl mb-2">Top 10 CMC pairs</div>
          <div className="text-sm">Profit per hour</div>
          <div className="text-lg font-bold">80</div>
          <div className="text-sm mt-2">Level 1</div>
          <div className="text-sm">500</div>
        </div>

        {/* GameFi Tokens */}
        <div className="bg-gray-800 rounded-lg p-4 flex flex-col items-center">
        <FaGamepad className="text-purple-400 text-3xl mr-2" />

          <div className="text-xl mb-2">GameFi tokens</div>
          <div className="text-sm">Profit per hour</div>
          <div className="text-lg font-bold">+70</div>
          <div className="text-sm mt-2">Level 1</div>
          <div className="text-sm">400</div>
        </div>
      </div>

      {/* Footer Navigation */}
     
    </div>
  );
};

export default MinePage;
