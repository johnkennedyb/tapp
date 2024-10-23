import React from 'react';
import { AiOutlineThunderbolt } from 'react-icons/ai';

const Dashboard = () => {
  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold mt-8 pb-2 mb-4">Hamster Kombat (CEO)</h1>

      <div className="flex justify-between items-center mb-4 px-6">
        <span className="text-left text-sm">Master</span>
        <progress className="w-full h-2 rounded" value="8" max="10"></progress>
        <span className="text-right text-sm">Profit/hr: +416.81K</span>
      </div>

      <div className="flex justify-around mb-6">
        <div className="bg-gray-700 p-3 rounded-lg text-sm">Daily Reward</div>
        <div className="bg-gray-700 p-3 rounded-lg text-sm">Daily Cipher</div>
        <div className="bg-gray-700 p-3 rounded-lg text-sm">Daily Combo</div>
      </div>

      <div className="text-4xl font-bold mb-4">79,006,081</div>

      <div className="mb-6">
        <img src="https://res.cloudinary.com/dw7w2at8k/image/upload/v1729685399/download_4_t5xlnw.jpg" alt="Hamster" className="rounded-full mx-auto w-32" />
      </div>

      <div className="flex justify-between items-center px-4">
        <div className="flex items-center">
          <AiOutlineThunderbolt className="text-yellow-400 text-2xl" />
          <p className="ml-2">4500/4500</p>
        </div>
        <button className="bg-blue-500 py-2 px-4 rounded">Boost</button>
      </div>
    </div>
  );
};

export default Dashboard;
