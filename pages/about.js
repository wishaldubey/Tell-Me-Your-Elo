import React from "react";
import Link from "next/link";
import Head from "next/head";

const About = () => {
  return (
    <>
      <Head>
        <title>About Us - Tell Me Your Elo | Chess Rating Analysis Platform</title>
        <meta name="description" content="Learn about Tell Me Your Elo, the premier chess rating analysis platform. Discover how we help chess players track, analyze, and improve their game performance." />
        <meta name="keywords" content="chess, elo rating, chess analysis, chess.com, chess statistics, chess improvement" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
        <div className="container mx-auto p-4">
          {/* Navigation Bar */}
          <nav className="w-full flex justify-end space-x-6 py-4 mb-6">
            <Link href="/" className="text-gray-300 hover:text-blue-400 transition-colors">
              Home
            </Link>
            <Link href="/analyze" className="text-gray-300 hover:text-blue-400 transition-colors">
              Analyze
            </Link>
            <Link href="/about" className="text-blue-400 font-semibold">
              About
            </Link>
            <Link href="/contact" className="text-gray-300 hover:text-blue-400 transition-colors">
              Contact
            </Link>
            <Link href="/privacy" className="text-gray-300 hover:text-blue-400 transition-colors">
              Privacy Policy
            </Link>
          </nav>

          {/* Title and Logo */}
          <div className="flex items-center justify-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
              About Tell Me Your Elo
            </h1>
            <img
              src="/chess-logo.png"
              alt="Chess.com Logo"
              className="ml-3 w-8.5 h-10 transform rotate-[12deg]"
            />
          </div>

          {/* Main Content */}
          <div className="max-w-4xl mx-auto text-white">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-8 mb-8 shadow-xl">
              <h2 className="text-3xl font-bold mb-6 text-blue-400">Our Mission</h2>
              <p className="text-lg leading-relaxed mb-6">
                Tell Me Your Elo is dedicated to providing chess enthusiasts with comprehensive tools to analyze, 
                track, and improve their chess performance. We believe that every chess player, regardless of their 
                skill level, deserves access to detailed statistics and insights about their gameplay.
              </p>
              <p className="text-lg leading-relaxed">
                Our platform connects directly with Chess.com's API to provide real-time, accurate data about 
                player ratings, game history, and performance metrics. Whether you're a beginner looking to 
                understand your progress or a seasoned player analyzing your strategic patterns, we're here to help.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 shadow-xl">
                <h3 className="text-2xl font-bold mb-4 text-purple-400">What We Offer</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    Real-time chess rating analysis from Chess.com
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    Comprehensive game history and statistics
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    Player comparison tools and insights
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    Interactive chess board for game analysis
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    Performance tracking across different time controls
                  </li>
                </ul>
              </div>

              <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 shadow-xl">
                <h3 className="text-2xl font-bold mb-4 text-purple-400">Our Technology</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Built with modern web technologies including Next.js, React, and Tailwind CSS, 
                  our platform ensures fast loading times and a smooth user experience across all devices.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  We integrate seamlessly with Chess.com's official API to provide accurate, 
                  up-to-date information about player statistics and game data.
                </p>
              </div>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-8 mb-8 shadow-xl">
              <h2 className="text-3xl font-bold mb-6 text-blue-400">Why Choose Tell Me Your Elo?</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="bg-blue-500/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">📊</span>
                  </div>
                  <h4 className="text-xl font-semibold mb-2 text-blue-400">Detailed Analytics</h4>
                  <p className="text-gray-300">
                    Get comprehensive insights into your chess performance with detailed statistics and trends.
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-purple-500/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">⚡</span>
                  </div>
                  <h4 className="text-xl font-semibold mb-2 text-purple-400">Fast & Reliable</h4>
                  <p className="text-gray-300">
                    Lightning-fast data retrieval and analysis powered by modern web technologies.
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-green-500/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🔒</span>
                  </div>
                  <h4 className="text-xl font-semibold mb-2 text-green-400">Privacy First</h4>
                  <p className="text-gray-300">
                    We respect your privacy and only access publicly available chess data.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-8 shadow-xl">
              <h2 className="text-3xl font-bold mb-6 text-blue-400">Our Story</h2>
              <p className="text-lg leading-relaxed mb-4">
                Tell Me Your Elo was born from a passion for chess and data analysis. Our team of chess 
                enthusiasts and developers recognized the need for a comprehensive, user-friendly platform 
                that could help players understand their performance beyond just their rating number.
              </p>
              <p className="text-lg leading-relaxed mb-4">
                We started with a simple idea: make chess statistics accessible and meaningful for everyone. 
                Today, we continue to evolve our platform based on user feedback and the latest developments 
                in chess analytics.
              </p>
              <p className="text-lg leading-relaxed">
                Join thousands of chess players who use Tell Me Your Elo to track their progress, 
                analyze their games, and improve their chess skills. Whether you're climbing the rating 
                ladder or just enjoying casual games, we're here to support your chess journey.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
