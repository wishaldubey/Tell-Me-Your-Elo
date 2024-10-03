import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import UserStats from '../components/UserStats';
import ChessBoard from '../components/ChessBoard';

const Home = () => {
  const [userData, setUserData] = useState(null);
  const [comparisonData, setComparisonData] = useState(null); // For comparison data
  const [error, setError] = useState('');
  const [pgn, setPgn] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchUserData = async (username) => {
    setLoading(true);
    try {
      const res = await fetch(`https://api.chess.com/pub/player/${username}`);
      if (!res.ok) throw new Error('User not found');
      const data = await res.json();
      const statsRes = await fetch(`https://api.chess.com/pub/player/${username}/stats`);
      const statsData = await statsRes.json();
      return { ...data, stats: statsData }; // Return combined user data
    } catch (err) {
      setError(err.message);
      setUserData(null);
      return null; // Return null on error
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = async (input) => {
    const usernames = input.split(',').map((name) => name.trim()); // Split and trim usernames
    if (usernames.length === 1) {
      // If only one username is entered
      const data = await fetchUserData(usernames[0]);
      setUserData(data);
      setComparisonData(null);
    } else if (usernames.length === 2) {
      // If two usernames are entered
      const [user1Data, user2Data] = await Promise.all(usernames.map(fetchUserData));
      if (user1Data && user2Data) {
        setUserData(user1Data);
        setComparisonData(user2Data);
      } else {
        setError('One or both users not found');
        setUserData(null);
        setComparisonData(null);
      }
    }
  };

  const handleGameSelect = async (gameId) => {
    const gamePgn = ''; // Replace with actual PGN fetching logic
    setPgn(gamePgn);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex items-center justify-center mb-6">
        <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">
          Tell Me Your Elo
        </h1>
        <img
          src="/chess-logo.png"
          alt="Chess.com Logo"
          className="ml-3 w-8.5 h-10 transform rotate-[12deg]"
        />
      </div>

      <div className="my-6 text-center">
        <SearchBar onSearch={handleSearch} />
        <p className="text-gray-500 font-mono italic mt-2">
          "Separate usernames with a comma to compare"
        </p>
      </div>

      {loading ? (
        <div className="flex flex-col justify-center items-center h-96">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500 mb-4"></div>
          <p className="text-sm text-blue-500 font-semibold shadow-md animate-pulse">
            Summoning The Grandmasters...
          </p>
        </div>
      ) : (
        <>
          {error && <p className="text-red-500">{error}</p>}

          {/* User stats for the first user */}
          <UserStats userData={userData} error={error} comparisonData={comparisonData} />

          {userData && (
            <div className="mt-4">
              <h2 className="text-2xl">Last 10 Matches</h2>
              <button onClick={() => handleGameSelect('gameId')} className="bg-blue-500 p-2 rounded">
                Select Game
              </button>
            </div>
          )}

          {pgn && <ChessBoard pgn={pgn} />}
        </>
      )}
    </div>
  );
};

export default Home;
