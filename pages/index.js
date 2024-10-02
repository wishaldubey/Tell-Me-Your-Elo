import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import UserStats from '../components/UserStats';
import CompareStats from '../components/CompareStats';
import ChessBoard from '../components/ChessBoard';

const Home = () => {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState('');
  const [pgn, setPgn] = useState('');

  const fetchUserData = async (username) => {
    try {
      const res = await fetch(`https://api.chess.com/pub/player/${username}`);
      if (!res.ok) throw new Error('User not found');
      const data = await res.json();
      const statsRes = await fetch(`https://api.chess.com/pub/player/${username}/stats`);
      const statsData = await statsRes.json();
      setUserData({ ...data, stats: statsData });
      setError('');
    } catch (err) {
      setError(err.message);
      setUserData(null);
    }
  };

  const handleCompare = (username) => {
    fetchUserData(username);
  };

  const handleGameSelect = async (gameId) => {
    // Replace this with your logic to get PGN for the selected game
    const gamePgn = ''; // Replace with actual PGN fetching logic
    setPgn(gamePgn);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex items-center justify-center mb-6"> {/* Adjusts spacing */}
        <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">
          Tell Me Your Elo
        </h1>
        <img
          src="/chess-logo.png" // Make sure this path is correct
          alt="Chess.com Logo"
          className="ml-3 w-8.5 h-10 transform rotate-[12deg]" // Adjusted size to match title font size
        />
      </div>
      <div className="my-6"> {/* Adds margin between title and search bar */}
        <SearchBar onSearch={fetchUserData} />
      </div>
      <UserStats userData={userData} error={error} />
      <CompareStats onCompare={handleCompare} />
      {userData && (
        <div className="mt-4">
          <h2 className="text-2xl">Last 10 Matches</h2>
          {/* Replace with actual match selection logic */}
          <button onClick={() => handleGameSelect('gameId')} className="bg-blue-500 p-2 rounded">
            Select Game
          </button>
        </div>
      )}
      {pgn && <ChessBoard pgn={pgn} />}
    </div>
  );
};

export default Home;
