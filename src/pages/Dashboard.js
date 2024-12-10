import React, { useState, useEffect } from "react";
import { AiOutlineThunderbolt } from "react-icons/ai";

const Dashboard = () => {
  const [count, setCount] = useState(() => {
    const savedCount = localStorage.getItem("hamsterCount");
    return savedCount ? Number(savedCount) : 0;
  });
  const [progress, setProgress] = useState(8);
  const [name, setName] = useState(""); // State to store the fetched name

  // Fetch name from the provided fetch API
  useEffect(() => {
    fetch("https://phpback-15.onrender.com/fetch.php")
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          setName(data.name); // Assuming the response has a 'name' field
        }
      })
      .catch((error) => console.error("Error fetching name:", error));
  }, []);

  // Save count to localStorage and send it to the update API
  useEffect(() => {
    localStorage.setItem("hamsterCount", count);
    fetch("https://phpback-15.onrender.com/update.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ count }),
    }).catch((error) => console.error("Error sending count:", error));
  }, [count]);

  const handleImageClick = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleBoostClick = () => {
    setProgress((prevProgress) => (prevProgress < 10 ? prevProgress + 1 : 10));
  };

  return (
    <div className="text-center">
      {/* Title */}
      <h1 className="text-3xl font-bold mt-8 pb-2 mb-4">Hamster Kombat (CEO)</h1>

      {/* Display Name */}
      <h2 className="text-2xl mb-4">Welcome, {name || "Player"}</h2>

      {/* Progress Bar */}
      <div className="flex justify-between items-center mb-4 px-6">
        <span className="text-left text-sm">Master</span>
        <progress
          className="w-full h-2 rounded"
          value={progress}
          max="10"
        ></progress>
        <span className="text-right text-sm">Profit/hr: +416.81K</span>
      </div>

      {/* Daily Features */}
      <div className="flex justify-around mb-6">
        <div className="bg-gray-700 p-3 rounded-lg text-sm">Daily Reward</div>
        <div className="bg-gray-700 p-3 rounded-lg text-sm">Daily Cipher</div>
        <div className="bg-gray-700 p-3 rounded-lg text-sm">Daily Combo</div>
      </div>

      {/* Counter */}
      <div className="text-4xl font-bold mb-4">{count.toLocaleString()}</div>

      {/* Clickable Image */}
      <div className="mb-6">
        <img
          src="https://res.cloudinary.com/dw7w2at8k/image/upload/v1729685399/download_4_t5xlnw.jpg"
          alt="Hamster"
          className="rounded-full mx-auto w-32 cursor-pointer"
          onClick={handleImageClick}
        />
      </div>

      {/* Boost Section */}
      <div className="flex justify-between items-center px-4">
        <div className="flex items-center">
          <AiOutlineThunderbolt className="text-yellow-400 text-2xl" />
          <p className="ml-2">4500/4500</p>
        </div>
        <button
          className="bg-blue-500 py-2 px-4 rounded text-white"
          onClick={handleBoostClick}
        >
          Boost
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
