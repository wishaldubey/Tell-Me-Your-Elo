import React from "react";
import Head from "next/head";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const Learn = () => {
  const chessResources = [
    {
      category: "Opening Principles",
      icon: "🏁",
      resources: [
        {
          title: "Control the Center",
          description: "Place pawns on e4, d4, e5, and d5 to control the central squares. This gives your pieces more mobility and limits your opponent's options."
        },
        {
          title: "Develop Your Pieces",
          description: "Bring knights and bishops into active positions before moving the same piece twice. Knights before bishops is a good general rule."
        },
        {
          title: "Castle Early",
          description: "Get your king to safety by castling within the first 10 moves. This also connects your rooks and improves your position."
        }
      ]
    },
    {
      category: "Tactical Patterns",
      icon: "⚡",
      resources: [
        {
          title: "Pins and Skewers",
          description: "A pin attacks a piece that cannot move without exposing a more valuable piece. A skewer forces a valuable piece to move, exposing a less valuable one."
        },
        {
          title: "Forks",
          description: "Attack two or more enemy pieces simultaneously with one piece. Knights are particularly effective at creating forks."
        },
        {
          title: "Discovered Attacks",
          description: "Move one piece to reveal an attack from another piece behind it. This often creates double threats that are hard to defend."
        }
      ]
    },
    {
      category: "Endgame Essentials",
      icon: "🏆",
      resources: [
        {
          title: "King and Pawn Endgames",
          description: "Learn the opposition, triangulation, and key squares. These concepts are fundamental to winning pawn endgames."
        },
        {
          title: "Basic Checkmate Patterns",
          description: "Master Queen + King vs King, Rook + King vs King, and two Bishops + King vs King checkmates."
        },
        {
          title: "Rook Endgames",
          description: "Understand the Lucena and Philidor positions. Rook endgames are the most common endgames in chess."
        }
      ]
    }
  ];

  const studyTips = [
    {
      title: "Analyze Your Games",
      description: "Review your games to identify mistakes and missed opportunities. Use our analysis tool to study your Chess.com games.",
      icon: "🔍"
    },
    {
      title: "Solve Tactical Puzzles",
      description: "Spend 15-20 minutes daily solving chess puzzles to improve your pattern recognition and calculation skills.",
      icon: "🧩"
    },
    {
      title: "Study Master Games",
      description: "Learn from the best by studying games of chess masters. Focus on understanding their strategic decisions.",
      icon: "📚"
    },
    {
      title: "Practice Regularly",
      description: "Consistent practice is key to improvement. Play regularly but also take time to study and analyze.",
      icon: "⏰"
    }
  ];

  return (
    <>
      <Head>
        <title>Chess Learning Resources - Tell Me Your Elo | Improve Your Game</title>
        <meta name="description" content="Comprehensive chess learning resources to improve your game. Learn opening principles, tactical patterns, endgame essentials, and study tips from chess experts." />
        <meta name="keywords" content="chess learning, chess improvement, chess tactics, chess strategy, chess openings, chess endgames, chess study" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Chess Learning Resources - Tell Me Your Elo" />
        <meta property="og:description" content="Comprehensive chess learning resources to help you improve your game and increase your rating." />
        <meta property="og:type" content="website" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
        <Navigation />

        <div className="container mx-auto p-4">
          {/* Title and Logo */}
          <div className="flex items-center justify-center mb-8 mt-8">
            <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
              Chess Learning Center
            </h1>
            <img
              src="/chess-logo.png"
              alt="Chess Logo"
              className="ml-3 w-8.5 h-10 transform rotate-[12deg]"
            />
          </div>

          {/* Subtitle */}
          <div className="text-center mb-12">
            <p className="text-xl text-gray-300 font-light mb-4">
              Master the fundamentals and advanced concepts to improve your chess game
            </p>
            <p className="text-gray-400">
              From opening principles to endgame mastery - everything you need to elevate your play
            </p>
          </div>

          {/* Chess Learning Resources */}
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-white mb-12">
              Essential Chess Knowledge
            </h2>
            
            <div className="space-y-12">
              {chessResources.map((category, index) => (
                <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-8 shadow-xl">
                  <div className="flex items-center mb-6">
                    <span className="text-4xl mr-4">{category.icon}</span>
                    <h3 className="text-2xl font-bold text-blue-400">{category.category}</h3>
                  </div>
                  
                  <div className="grid md:grid-cols-3 gap-6">
                    {category.resources.map((resource, resourceIndex) => (
                      <div key={resourceIndex} className="bg-gray-700/50 rounded-lg p-6">
                        <h4 className="text-lg font-semibold text-purple-400 mb-3">
                          {resource.title}
                        </h4>
                        <p className="text-gray-300 leading-relaxed">
                          {resource.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Study Tips Section */}
            <div className="mt-16">
              <h2 className="text-3xl font-bold text-center text-white mb-12">
                How to Study Chess Effectively
              </h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {studyTips.map((tip, index) => (
                  <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 text-center shadow-xl">
                    <div className="bg-blue-500/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <span className="text-3xl">{tip.icon}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-blue-400 mb-3">{tip.title}</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {tip.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Rating Improvement Guide */}
            <div className="mt-16 bg-gray-800/50 backdrop-blur-sm rounded-lg p-8 shadow-xl">
              <h2 className="text-3xl font-bold text-center text-white mb-8">
                Chess Rating Improvement Guide
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-purple-400 mb-4">Beginner (0-1000)</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      Learn basic piece movements and rules
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      Practice basic checkmate patterns
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      Focus on not hanging pieces
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      Learn opening principles
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-purple-400 mb-4">Intermediate (1000-1800)</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      Master tactical patterns (pins, forks, skewers)
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      Study basic endgames
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      Learn positional concepts
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      Analyze your games regularly
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-purple-400 mb-4">Advanced (1800+)</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      Deep opening preparation
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      Complex tactical calculations
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      Advanced endgame theory
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      Psychological aspects of chess
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-purple-400 mb-4">Time Management</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      Think on your opponent's time
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      Use more time for critical positions
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      Develop intuition for quick decisions
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      Practice blitz to improve speed
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Recommended Resources */}
            <div className="mt-16 bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm rounded-lg p-8 shadow-xl border border-blue-500/20">
              <h2 className="text-3xl font-bold text-center text-white mb-8">
                Recommended Learning Platforms
              </h2>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-blue-400 mb-3">Chess.com</h3>
                  <p className="text-gray-300 text-sm">
                    Comprehensive platform with lessons, puzzles, and analysis tools. Perfect for players of all levels.
                  </p>
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-purple-400 mb-3">Lichess</h3>
                  <p className="text-gray-300 text-sm">
                    Free, open-source chess platform with excellent analysis features and study tools.
                  </p>
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-green-400 mb-3">ChessBase</h3>
                  <p className="text-gray-300 text-sm">
                    Professional database software for serious chess study and preparation.
                  </p>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="mt-16 text-center">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-8 shadow-xl">
                <h2 className="text-2xl font-bold text-white mb-4">
                  Ready to Analyze Your Progress?
                </h2>
                <p className="text-gray-300 mb-6">
                  Use our tools to track your rating progress and analyze your games for continuous improvement.
                </p>
                <div className="space-x-4">
                  <a
                    href="/"
                    className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
                  >
                    Check Your Rating
                  </a>
                  <a
                    href="/analyze"
                    className="inline-block bg-purple-500 hover:bg-purple-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
                  >
                    Analyze Your Games
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <Footer />
      </div>
    </>
  );
};

export default Learn;
