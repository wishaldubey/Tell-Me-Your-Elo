import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import UserStats from "../components/UserStats";
import ChessBoard from "../components/ChessBoard";

const Home = () => {
  const [userData, setUserData] = useState(null);
  const [comparisonData, setComparisonData] = useState(null);
  const [randomImage, setRandomImage] = useState("");
  const [pgn, setPgn] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchUserData = async (username) => {
    setLoading(true);
    try {
      const res = await fetch(`https://api.chess.com/pub/player/${username}`);
      if (!res.ok) {
        if (res.status === 404) {
          // If the user is not found, select a random image
          const randomIndex = Math.floor(Math.random() * 3) + 1;
          setRandomImage(`/${randomIndex}.webp`);
          setUserData(null); // Clear user data
          return null;
        } else {
          throw new Error("An unexpected error occurred");
        }
      }

      const data = await res.json();
      const statsRes = await fetch(
        `https://api.chess.com/pub/player/${username}/stats`
      );
      const statsData = await statsRes.json();
      return { ...data, stats: statsData };
    } catch (err) {
      setRandomImage(""); // Clear random image on other errors
      setUserData(null);
      return null;
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = async (input) => {
    const usernames = input.split(",").map((name) => name.trim());
    setRandomImage(""); // Clear random image on new search
    if (usernames.length === 1) {
      const data = await fetchUserData(usernames[0]);
      setUserData(data);
      setComparisonData(null);
    } else if (usernames.length === 2) {
      const [user1Data, user2Data] = await Promise.all(
        usernames.map(fetchUserData)
      );
      if (user1Data && user2Data) {
        setUserData(user1Data);
        setComparisonData(user2Data);
      } else {
        setUserData(null);
        setComparisonData(null);
      }
    }
  };

  const handleGameSelect = async (gameId) => {
    const gamePgn = ""; // Replace with actual PGN fetching logic
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
          Separate usernames with a comma to compare
         
        </p>
      </div>

      {loading ? (
        <div className="flex flex-col justify-center items-center h-96">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500 mb-4"></div>
          <p className="text-sm text-blue-500 font-semibold shadow-md animate-pulse">
            Summoning The Grandmasters...
          </p>
        </div>
      ) : randomImage ? (
        <div className="flex justify-center items-center h-96">
          <img
            src={randomImage}
            alt="Random 404"
            className="w-auto h-auto max-w-full max-h-full shadow-lg rounded-lg transform transition duration-300 hover:scale-105"
          />
        </div>
      ) : (
        <>
          {/* Display user stats for the first and second users */}
          <UserStats userData={userData} comparisonData={comparisonData} />

          {userData && (
            <div className="mt-4">
              <h2 className="text-2xl">Last 10 Matches</h2>
              <button
                onClick={() => handleGameSelect("gameId")}
                className="bg-blue-500 p-2 rounded"
              >
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
