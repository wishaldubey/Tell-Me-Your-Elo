import React, { useState } from "react";
import Head from "next/head";
import SearchBar from "../components/SearchBar";
import UserStats from "../components/UserStats";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { DisplayAd, InFeedAd, InArticleAd, MultiplexAd } from "../components/ads";

const Home = () => {
  const [userData, setUserData] = useState(null);
  const [comparisonData, setComparisonData] = useState(null);
  const [randomImage, setRandomImage] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchUserData = async (username) => {
    setLoading(true);
    try {
      const res = await fetch(`https://api.chess.com/pub/player/${username}`);
      if (!res.ok) {
        if (res.status === 404) {
          const randomIndex = Math.floor(Math.random() * 3) + 1;
          setRandomImage(`/${randomIndex}.webp`);
          setUserData(null);
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
      setRandomImage("");
      setUserData(null);
      return null;
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = async (input) => {
    const usernames = input.split(",").map((name) => name.trim());
    setRandomImage("");
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

  return (
    <>
      <Head>
        <title>Tell Me Your Elo - Chess Rating Analysis & Game Statistics</title>
        <meta name="description" content="Analyze your chess performance with Tell Me Your Elo. Get detailed statistics, compare players, and track your rating progress across all time controls on Chess.com." />
        <meta name="keywords" content="chess, elo rating, chess analysis, chess.com, chess statistics, chess rating tracker, chess performance, chess games" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Tell Me Your Elo - Chess Rating Analysis" />
        <meta property="og:description" content="Analyze your chess performance with detailed statistics and player comparisons." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://tellmeyourelo.com" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
        <Navigation />

        <div className="container mx-auto p-4">
          {/* Top Display Ad */}
          <div className="my-6">
            <DisplayAd className="max-w-4xl mx-auto" />
          </div>

          {/* Title and Logo */}
          <div className="flex items-center justify-center mb-8 mt-8">
            <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
              Tell Me Your Elo
            </h1>
            <img
              src="/chess-logo.png"
              alt="Chess Logo"
              className="ml-3 w-10 h-12 transform rotate-[12deg]"
            />
          </div>

          {/* Subtitle */}
          <div className="text-center mb-8">
            <p className="text-xl text-gray-300 font-light">
              Analyze your chess performance • Track your rating • Compare with others
            </p>
            <p className="text-gray-400 mt-2">
              Get comprehensive insights into your Chess.com statistics and game history
            </p>
          </div>

          {/* Search Bar */}
          <div className="my-8 text-center">
            <SearchBar onSearch={handleSearch} />
            <p className="text-gray-400 font-mono italic mt-3 text-lg">
              Separate usernames with a comma to compare players
            </p>
          </div>

          {/* In-Feed Ad after search */}
          <div className="my-8">
            <InFeedAd className="max-w-2xl mx-auto" />
          </div>

          {/* Loading or Display */}
          {loading ? (
            <div className="flex flex-col justify-center items-center h-96">
              <div className="animate-spin rounded-full h-20 w-20 border-t-4 border-b-4 border-blue-400 mb-6"></div>
              <p className="text-lg text-blue-400 font-semibold animate-pulse">
                Summoning The Grandmasters...
              </p>
            </div>
          ) : randomImage ? (
            <div className="flex justify-center items-center h-96">
              <img
                src={randomImage}
                alt="Player not found"
                className="w-auto h-auto max-w-full max-h-full shadow-lg rounded-lg transform transition duration-300 hover:scale-105"
              />
            </div>
          ) : (
            <>
              {/* Display user stats for first and second users */}
              <UserStats userData={userData} comparisonData={comparisonData} />
              
              {/* In-Article Ad after user stats */}
              <div className="my-8">
                <InArticleAd className="max-w-3xl mx-auto" />
              </div>
            </>
          )}

          {/* Features Section */}
          {!userData && !loading && !randomImage && (
            <div className="mt-16">
              <h2 className="text-3xl font-bold text-center text-white mb-12">
                Powerful Chess Analysis Tools
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 text-center shadow-xl">
                  <div className="bg-blue-500/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">📊</span>
                  </div>
                  <h3 className="text-xl font-semibold text-blue-400 mb-3">Detailed Statistics</h3>
                  <p className="text-gray-300">
                    Get comprehensive insights into your chess performance across all time controls and game types.
                  </p>
                </div>
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 text-center shadow-xl">
                  <div className="bg-purple-500/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">⚔️</span>
                  </div>
                  <h3 className="text-xl font-semibold text-purple-400 mb-3">Player Comparison</h3>
                  <p className="text-gray-300">
                    Compare two players side by side to see how you stack up against friends or rivals.
                  </p>
                </div>
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 text-center shadow-xl">
                  <div className="bg-green-500/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">♟️</span>
                  </div>
                  <h3 className="text-xl font-semibold text-green-400 mb-3">Game Analysis</h3>
                  <p className="text-gray-300">
                    Analyze your games with our interactive chess board and detailed move history.
                  </p>
                </div>
              </div>
              
              {/* Multiplex Ad after features */}
              <div className="my-12">
                <MultiplexAd className="max-w-4xl mx-auto" />
              </div>
            </div>
          )}

          {/* Bottom Display Ad before footer */}
          <div className="my-8">
            <DisplayAd className="max-w-4xl mx-auto" />
          </div>
        </div>
        
        <Footer />
      </div>
    </>
  );
};

export default Home;
