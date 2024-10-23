import React from 'react';

const Hamster = ({ hamster, selectHamster }) => {
  return (
    <div className="border rounded-lg p-4 bg-white shadow hover:bg-gray-100 transition">
      <h2 className="text-lg font-bold mb-2">{hamster.name}</h2>
      <p>Strength: {hamster.strength}</p>
      <p>Health: {hamster.health}</p>
      <button
        onClick={() => selectHamster(hamster)}
        className="mt-2 bg-blue-500 text-white py-1 px-4 rounded hover:bg-blue-700"
      >
        Select for Combat
      </button>
    </div>
  );
};

export default Hamster;
