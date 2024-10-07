import React, { useState, useEffect } from "react";
import Link from "next/link";
import SearchBar from "../components/SearchBar";
import ChessBoard from "../components/ChessBoard"; // Ensure ChessBoard component exists

const Analyze = () => {
  const [userGames, setUserGames] = useState([]);
  const [selectedGame, setSelectedGame] = useState(null);
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState("");
  const [year, setYear] = useState(new Date().getFullYear());
  const [month, setMonth] = useState(
    String(new Date().getMonth() + 1).padStart(2, "0")
  ); // Current month
  const [whitePlayer, setWhitePlayer] = useState(null);
  const [blackPlayer, setBlackPlayer] = useState(null);
  const [showAll, setShowAll] = useState(false);
  const [searchInitiated, setSearchInitiated] = useState(false); // New state for search initiation

  const years = Array.from(
    { length: 5 },
    (_, i) => new Date().getFullYear() - i
  ); // Last 5 years
  const months = Array.from({ length: 12 }, (_, i) =>
    String(i + 1).padStart(2, "0")
  ); // Months 01-12

  const fetchUserGames = async (username, year, month) => {
    setLoading(true);
    try {
      const res = await fetch(
        `https://api.chess.com/pub/player/${username}/games/${year}/${month}`
      );

      if (!res.ok) {
        throw new Error("Unable to fetch games");
      }

      const data = await res.json();
      setUserGames(data.games || []); // Assuming games are returned as an array
    } catch (error) {
      console.error("Error fetching user games:", error);
      setUserGames([]);
    } finally {
      setLoading(false);
      setSearchInitiated(true); // Set search initiated to true after the search is complete
    }
  };

  const handleGameSelect = (game) => {
    setSelectedGame(game.pgn);
    // Set player data for the selected game
    setWhitePlayer({
      username: game.white.username,
      rating: game.white.rating,
    });
    setBlackPlayer({
      username: game.black.username,
      rating: game.black.rating,
    });
  };

  const handleSearch = async (input) => {
    setUsername(input);
    setSelectedGame(null); // Reset selected game
    setShowAll(false); // Reset show all state
    setSearchInitiated(false); // Reset search initiation before a new search
    // Fetch games based on the selected username, year, and month
    await fetchUserGames(input, year, month);
  };

  const handleYearMonthChange = () => {
    // Fetch games whenever the year or month changes
    if (username) {
      setSelectedGame(null); // Reset selected game
      setShowAll(false); // Reset show all state
      setSearchInitiated(false); // Reset search initiation before fetching
      fetchUserGames(username, year, month);
    }
  };

  useEffect(() => {
    handleYearMonthChange(); // Fetch games when component mounts
  }, [year, month]);

  const displayedGames = showAll ? userGames : userGames.slice(0, 5);

  return (
    <div className="container mx-auto p-4">
      {/* Navigation Bar */}
      <nav className="w-full flex justify-end space-x-6 py-4 mb-6">
        <Link href="/" className="text-gray-600 hover:text-blue-500 transition-colors">
          Home
        </Link>
        <Link href="/Analyze" className="text-gray-600 hover:text-blue-500 transition-colors">
          Analyze
        </Link>
        <Link href="/Privacy" className="text-gray-600 hover:text-blue-500 transition-colors">
          Privacy Policy
        </Link>
      </nav>

      {/* Title and Logo */}
      <div className="flex items-center justify-center mb-6">
  <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">
    Analyze Your Game
  </h1>
  <img
    src="/chess-logo.png"
    alt="Chess.com Logo"
    className="ml-3 w-8.5 h-10 transform rotate-[12deg]"
  />
</div>


      {/* Search Bar */}
      <div className="my-6 text-center">
        <SearchBar onSearch={handleSearch} />
      </div>

      {/* Year and Month Selection */}
      <div className="flex justify-center space-x-4 mb-6">
        <select
          value={year}
          onChange={(e) => setYear(e.target.value)}
          className="border rounded p-2 bg-gray-100 text-gray-800"
        >
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
        <select
          value={month}
          onChange={(e) => setMonth(e.target.value)}
          className="border rounded p-2 bg-gray-100 text-gray-800"
        >
          {months.map((month) => (
            <option key={month} value={month}>
              {new Date(0, month - 1).toLocaleString("default", {
                month: "long",
              })}{" "}
              {/* Display month name */}
            </option>
          ))}
        </select>
      </div>

      {/* Loading or Game List */}
      {loading ? (
        <div className="flex flex-col justify-center items-center h-96">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500 mb-4"></div>
          <p className="text-sm text-blue-500 font-semibold shadow-md animate-pulse">
            Loading your games...
          </p>
        </div>
      ) : userGames.length > 0 && !selectedGame ? (
        <div className="mt-4 flex flex-col items-center">
          <h2 className="text-2xl mb-4">Your Games</h2>
          <ul className="space-y-2">
            {displayedGames.map((game) => (
              <li
                key={game.url}
                className="p-2 border border-gray-300 rounded-lg flex justify-center items-center"
              >
                <button
                  onClick={() => handleGameSelect(game)} // Pass the entire game object
                  className="text-blue-600 hover:underline"
                >
                  {`${game.white.username} vs ${game.black.username} (${new Date(game.end_time * 1000).toLocaleDateString()})`}
                </button>
              </li>
            ))}
          </ul>
          {userGames.length > 5 && !showAll && (
            <button
              onClick={() => setShowAll(true)}
              className="mt-4 text-blue-600 hover:underline"
            >
              Show All Games
            </button>
          )}
          {showAll && (
            <button
              onClick={() => setShowAll(false)}
              className="mt-4 text-blue-600 hover:underline"
            >
              Show Less
            </button>
          )}
        </div>
      ) : searchInitiated && !loading && userGames.length === 0 ? (
        <div className="flex flex-col justify-center items-center h-96">
          <p className="text-xl text-red-500 font-semibold">No games found for this user.</p>
        </div>
      ) : null}

      {/* Display Chess Board if a game is selected */}
      {selectedGame && (
        <ChessBoard
          pgn={selectedGame}
          whitePlayer={whitePlayer}
          blackPlayer={blackPlayer}
        />
      )}
    </div>
  );
};

export default Analyze;
