import React, { useState, useEffect } from "react";
import Head from "next/head";
import SearchBar from "../components/SearchBar";
import ChessBoard from "../components/ChessBoard";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const Analyze = () => {
  const [userGames, setUserGames] = useState([]);
  const [selectedGame, setSelectedGame] = useState(null);
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState("");
  const [year, setYear] = useState(new Date().getFullYear());
  const [month, setMonth] = useState(
    String(new Date().getMonth() + 1).padStart(2, "0")
  );
  const [whitePlayer, setWhitePlayer] = useState(null);
  const [blackPlayer, setBlackPlayer] = useState(null);
  const [showAll, setShowAll] = useState(false);
  const [searchInitiated, setSearchInitiated] = useState(false);

  const years = Array.from(
    { length: 5 },
    (_, i) => new Date().getFullYear() - i
  );
  const months = Array.from({ length: 12 }, (_, i) =>
    String(i + 1).padStart(2, "0")
  );

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
      setUserGames(data.games || []);
    } catch (error) {
      console.error("Error fetching user games:", error);
      setUserGames([]);
    } finally {
      setLoading(false);
      setSearchInitiated(true);
    }
  };

  const handleGameSelect = (game) => {
    setSelectedGame(game.pgn);
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
    setSelectedGame(null);
    setShowAll(false);
    setSearchInitiated(false);
    await fetchUserGames(input, year, month);
  };

  const handleYearMonthChange = () => {
    if (username) {
      setSelectedGame(null);
      setShowAll(false);
      setSearchInitiated(false);
      fetchUserGames(username, year, month);
    }
  };

  useEffect(() => {
    handleYearMonthChange();
  }, [year, month]);

  const displayedGames = showAll ? userGames : userGames.slice(0, 5);

  return (
    <>
      <Head>
        <title>Chess Game Analysis - Tell Me Your Elo | Analyze Your Games</title>
        <meta name="description" content="Analyze your chess games with our interactive board. View game history, study moves, and improve your chess skills with detailed game analysis tools." />
        <meta name="keywords" content="chess game analysis, chess board, game review, chess moves, chess improvement, pgn analysis, chess study" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Chess Game Analysis - Tell Me Your Elo" />
        <meta property="og:description" content="Analyze your chess games with our interactive board and detailed move analysis." />
        <meta property="og:type" content="website" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
        <Navigation />

        <div className="container mx-auto p-4">
          {/* Title and Logo */}
          <div className="flex items-center justify-center mb-8 mt-8">
            <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
              Analyze Your Games
            </h1>
            <img
              src="/chess-logo.png"
              alt="Chess Logo"
              className="ml-3 w-8.5 h-10 transform rotate-[12deg]"
            />
          </div>

          {/* Subtitle */}
          <div className="text-center mb-8">
            <p className="text-lg text-gray-300">
              Review your chess games with our interactive board and detailed analysis
            </p>
          </div>

          {/* Search Bar */}
          <div className="my-8 text-center">
            <SearchBar onSearch={handleSearch} />
            <p className="text-gray-400 mt-2">
              Enter your Chess.com username to view and analyze your games
            </p>
          </div>

          {/* Year and Month Selection */}
          <div className="flex justify-center space-x-4 mb-8">
            <select
              value={year}
              onChange={(e) => setYear(e.target.value)}
              className="border border-gray-600 rounded-lg p-3 bg-gray-700 text-white focus:outline-none focus:border-blue-400 transition-colors"
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
              className="border border-gray-600 rounded-lg p-3 bg-gray-700 text-white focus:outline-none focus:border-blue-400 transition-colors"
            >
              {months.map((month) => (
                <option key={month} value={month}>
                  {new Date(0, month - 1).toLocaleString("default", {
                    month: "long",
                  })}
                </option>
              ))}
            </select>
          </div>

          {/* Loading or Game List */}
          {loading ? (
            <div className="flex flex-col justify-center items-center h-96">
              <div className="animate-spin rounded-full h-20 w-20 border-t-4 border-b-4 border-blue-400 mb-6"></div>
              <p className="text-lg text-blue-400 font-semibold animate-pulse">
                Loading your games...
              </p>
            </div>
          ) : userGames.length > 0 && !selectedGame ? (
            <div className="mt-8 flex flex-col items-center">
              <h2 className="text-3xl font-bold text-white mb-6">Your Games</h2>
              <div className="w-full max-w-4xl">
                <div className="grid gap-3">
                  {displayedGames.map((game) => (
                    <div
                      key={game.url}
                      className="bg-gray-800/50 backdrop-blur-sm border border-gray-600 rounded-lg p-4 hover:bg-gray-700/50 transition-colors"
                    >
                      <button
                        onClick={() => handleGameSelect(game)}
                        className="w-full text-left"
                      >
                        <div className="flex justify-between items-center">
                          <div>
                            <p className="text-white font-semibold">
                              {`${game.white.username} vs ${game.black.username}`}
                            </p>
                            <p className="text-gray-400 text-sm">
                              {new Date(game.end_time * 1000).toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric'
                              })}
                            </p>
                          </div>
                          <div className="text-blue-400 hover:text-blue-300">
                            Analyze →
                          </div>
                        </div>
                      </button>
                    </div>
                  ))}
                </div>
                {userGames.length > 5 && !showAll && (
                  <div className="text-center mt-6">
                    <button
                      onClick={() => setShowAll(true)}
                      className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg transition-colors"
                    >
                      Show All Games ({userGames.length})
                    </button>
                  </div>
                )}
                {showAll && (
                  <div className="text-center mt-6">
                    <button
                      onClick={() => setShowAll(false)}
                      className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-2 rounded-lg transition-colors"
                    >
                      Show Less
                    </button>
                  </div>
                )}
              </div>
            </div>
          ) : searchInitiated && !loading && userGames.length === 0 ? (
            <div className="flex flex-col justify-center items-center h-96">
              <div className="bg-red-500/20 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <span className="text-2xl">❌</span>
              </div>
              <p className="text-xl text-red-400 font-semibold mb-2">No games found</p>
              <p className="text-gray-400 text-center max-w-md">
                No games were found for this user in the selected time period. Try a different month or check the username.
              </p>
            </div>
          ) : null}

          {/* Display Chess Board if a game is selected */}
          {selectedGame && (
            <div className="mt-8">
              <div className="text-center mb-6">
                <button
                  onClick={() => {
                    setSelectedGame(null);
                    setWhitePlayer(null);
                    setBlackPlayer(null);
                  }}
                  className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg transition-colors"
                >
                  ← Back to Games
                </button>
              </div>
              <ChessBoard
                pgn={selectedGame}
                whitePlayer={whitePlayer}
                blackPlayer={blackPlayer}
              />
            </div>
          )}
        </div>
        
        <Footer />
      </div>
    </>
  );
};

export default Analyze;
