import React from 'react';
import { AiOutlineYoutube, AiOutlineTwitter, AiOutlineDollarCircle } from 'react-icons/ai';
import { BsCalendarEvent } from 'react-icons/bs';
import { FaTelegramPlane } from 'react-icons/fa';

const BlockchainTasks = () => {
  const tasks = [
    {
      title: 'Watch the new YouTube video',
      reward: '+100,000',
      icon: <AiOutlineYoutube className="text-red-500 text-4xl" />,
      category: 'Hamster Youtube',
    },
    {
      title: 'Hamster CEOs shout out to MrBeast',
      reward: '+100,000',
      icon: <AiOutlineYoutube className="text-red-500 text-4xl" />,
      category: 'Hamster Youtube',
    },
    {
      title: 'Daily reward',
      reward: '+6,649,000',
      icon: <BsCalendarEvent className="text-blue-500 text-4xl" />,
      category: 'Daily tasks',
    },
    {
      title: 'Join our TG channel!',
      reward: '+5,000',
      icon: <FaTelegramPlane className="text-blue-400 text-4xl" />,
      category: 'Tasks list',
    },
    {
      title: 'Follow our X account',
      reward: '+5,000',
      icon: <AiOutlineTwitter className="text-blue-400 text-4xl" />,
      category: 'Tasks list',
    },
  ];

  return (
    <div className="min-h-screen  text-white p-4">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-3xl font-bold text-yellow-300 mb-4">Hamster Kombat</h2>
        <div className="flex justify-center mb-6">
          <div className="bg-yellow-400 p-6 rounded-full shadow-lg flex items-center justify-center">
            <AiOutlineDollarCircle className="text-6xl text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]" />
          </div>
        </div>
        <h3 className="text-2xl font-semibold text-white drop-shadow-lg">Earn more coins</h3>
      </div>

      {/* Tasks Sections */}
      <div className="mt-6 space-y-8">
        {/* Hamster Youtube Section */}
        <div>
          <h4 className="text-xl font-bold mb-3 text-yellow-300">Hamster Youtube</h4>
          {tasks.filter(task => task.category === 'Hamster Youtube').map((task, index) => (
            <div key={index} className="bg-gradient-to-r from-green-500 to-teal-400 p-4 rounded-lg flex items-center justify-between mb-3 shadow-lg">
              <div className="flex items-center">
                {task.icon}
                <div className="ml-3">
                  <p className="text-lg">{task.title}</p>
                </div>
              </div>
              <p className="text-yellow-100 font-semibold text-lg">{task.reward}</p>
            </div>
          ))}
        </div>

        {/* Daily Tasks Section */}
        <div>
          <h4 className="text-xl font-bold mb-3 text-yellow-300">Daily tasks</h4>
          {tasks.filter(task => task.category === 'Daily tasks').map((task, index) => (
            <div key={index} className="bg-gradient-to-r from-indigo-500 to-purple-400 p-4 rounded-lg flex items-center justify-between mb-3 shadow-lg">
              <div className="flex items-center">
                {task.icon}
                <div className="ml-3">
                  <p className="text-lg">{task.title}</p>
                </div>
              </div>
              <p className="text-yellow-100 font-semibold text-lg">{task.reward}</p>
            </div>
          ))}
        </div>

        {/* Tasks List Section */}
        <div>
          <h4 className="text-xl font-bold mb-3 text-yellow-300">Tasks list</h4>
          {tasks.filter(task => task.category === 'Tasks list').map((task, index) => (
            <div key={index} className="bg-gradient-to-r from-blue-500 to-cyan-400 p-4 rounded-lg flex items-center justify-between mb-3 shadow-lg">
              <div className="flex items-center">
                {task.icon}
                <div className="ml-3">
                  <p className="text-lg">{task.title}</p>
                </div>
              </div>
              <p className="text-yellow-100 font-semibold text-lg">{task.reward}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlockchainTasks;
