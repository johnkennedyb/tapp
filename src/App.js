import React, { useState } from 'react';
import Dashboard from './pages/Dashboard';
import Exchange from './pages/Exchange';
import Mine from './pages/Mine';
import Friends from './pages/Friends';
// import Airdrop from './pages/Airdrop';
import { AiOutlineHome, AiOutlineSwap, AiOutlineUsergroupAdd } from 'react-icons/ai';
import { FaExchangeAlt } from 'react-icons/fa';
import { GiTrophy } from 'react-icons/gi';

function App() {
  const [activePage, setActivePage] = useState('dashboard');

  const renderPage = () => {
    switch (activePage) {
      case 'dashboard':
        return <Dashboard />;
      case 'exchange':
        return <Exchange />;
      case 'mine':
        return <Mine />;
      case 'friends':
        return <Friends />;
      // case 'airdrop':
      //   return <Airdrop />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="p-4">{renderPage()}</div>

      {/* Bottom Navigation Bar */}
      <nav className="  mt-7 bottom-0 left-0 right-0 bg-gray-800 text-white shadow-lg" style={{marginTop:'50px'}}>
        <div className="flex justify-around p-2">
          
          <button onClick={() => setActivePage('exchange')}>
            <FaExchangeAlt className="text-3xl text-blue-600" />
            <p className="text-xs">Exchange</p>
          </button>
          <button onClick={() => setActivePage('mine')}>
            <AiOutlineSwap className="text-3xl text-red-300" />
            <p className="text-xs">Mine</p>
          </button>

          <button onClick={() => setActivePage('dashboard')}>
            <AiOutlineHome className="text-3xl " />
            <p className="text-xs">Home</p>
          </button>

          <button onClick={() => setActivePage('friends')}>
            <AiOutlineUsergroupAdd className="text-3xl text-yellow-600" />
            <p className="text-xs">Friends</p>
          </button>
          <button onClick={() => setActivePage('#')}>
            <GiTrophy className="text-3xl text-red-600" />
            <p className="text-xs">Airdrop</p>
          </button>
        </div>
      </nav>
    </div>
  );
}

export default App;
