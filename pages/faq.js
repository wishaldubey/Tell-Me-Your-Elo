import React, { useState } from "react";
import Link from "next/link";
import Head from "next/head";

const FAQ = () => {
  const [openItems, setOpenItems] = useState({});

  const toggleItem = (index) => {
    setOpenItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const faqData = [
    {
      question: "How do I search for a chess player?",
      answer: "Simply enter the Chess.com username in the search bar on our homepage. Make sure to use the exact username as it appears on Chess.com. The search is case-sensitive, so 'Magnus' and 'magnus' would be different usernames."
    },
    {
      question: "Can I compare two players?",
      answer: "Yes! To compare two players, enter both usernames separated by a comma in the search bar. For example: 'player1, player2'. Our system will display both players' statistics side by side for easy comparison."
    },
    {
      question: "What chess data can I view?",
      answer: "You can view comprehensive chess statistics including current ratings across different time controls (bullet, blitz, rapid, daily), recent game history, win/loss ratios, performance trends, and detailed game analysis with our interactive chess board."
    },
    {
      question: "How do I analyze my games?",
      answer: "Visit our Analyze page and enter your Chess.com username. You can select specific months and years to view your games from that period. Click on any game to view it on our interactive chess board with move-by-move analysis."
    },
    {
      question: "Is my data secure and private?",
      answer: "Absolutely! We only access publicly available data from Chess.com through their official API. We don't store any personal information, require registration, or access private account data. Your searches are not tracked or shared with third parties."
    },
    {
      question: "Why can't I find a specific player?",
      answer: "There are several reasons why a player might not be found: the username might be misspelled, the player's profile might be private, the account might not exist on Chess.com, or there might be a temporary issue with Chess.com's API. Double-check the spelling and try again."
    },
    {
      question: "How often is the data updated?",
      answer: "Our platform fetches data in real-time from Chess.com's API, so you'll always see the most current information available. This includes live ratings, recent games, and updated statistics."
    },
    {
      question: "Can I use this service on mobile devices?",
      answer: "Yes! Our website is fully responsive and works great on smartphones, tablets, and desktop computers. The interface automatically adapts to your screen size for the best user experience."
    },
    {
      question: "What if I encounter a technical issue?",
      answer: "If you experience any problems, please contact us through our Contact page. Include details about the issue, your device/browser information, and the username you were searching for. We typically respond within 24 hours."
    },
    {
      question: "Is this service free to use?",
      answer: "Yes, Tell Me Your Elo is completely free to use! We provide all our features at no cost. Our goal is to help chess players improve their game through better understanding of their performance."
    },
    {
      question: "Can I download my chess statistics?",
      answer: "Currently, our platform is designed for online viewing and analysis. While you can't download raw data, you can view comprehensive statistics and game analysis directly on our website. We may add export features in future updates."
    },
    {
      question: "How accurate is the rating information?",
      answer: "The rating information is as accurate as Chess.com's official data since we pull directly from their API. Any discrepancies would reflect Chess.com's own data, which is updated in real-time as games are completed."
    }
  ];

  return (
    <>
      <Head>
        <title>FAQ - Tell Me Your Elo | Frequently Asked Questions</title>
        <meta name="description" content="Find answers to common questions about Tell Me Your Elo chess analysis platform. Learn how to use our features, understand our data, and get the most from our service." />
        <meta name="keywords" content="FAQ, chess questions, help, chess analysis help, chess.com data, chess statistics" />
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
            <Link href="/about" className="text-gray-300 hover:text-blue-400 transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-gray-300 hover:text-blue-400 transition-colors">
              Contact
            </Link>
            <Link href="/faq" className="text-blue-400 font-semibold">
              FAQ
            </Link>
            <Link href="/privacy" className="text-gray-300 hover:text-blue-400 transition-colors">
              Privacy Policy
            </Link>
          </nav>

          {/* Title and Logo */}
          <div className="flex items-center justify-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
              Frequently Asked Questions
            </h1>
            <img
              src="/chess-logo.png"
              alt="Chess.com Logo"
              className="ml-3 w-8.5 h-10 transform rotate-[12deg]"
            />
          </div>

          {/* Introduction */}
          <div className="max-w-4xl mx-auto mb-8">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 shadow-xl text-center">
              <p className="text-gray-300 text-lg leading-relaxed">
                Welcome to our FAQ section! Here you'll find answers to the most common questions about 
                Tell Me Your Elo. If you can't find what you're looking for, feel free to 
                <Link href="/contact" className="text-blue-400 hover:underline ml-1">contact us</Link>.
              </p>
            </div>
          </div>

          {/* FAQ Items */}
          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {faqData.map((item, index) => (
                <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-lg shadow-xl overflow-hidden">
                  <button
                    onClick={() => toggleItem(index)}
                    className="w-full px-6 py-4 text-left focus:outline-none focus:bg-gray-700/50 hover:bg-gray-700/30 transition-colors"
                  >
                    <div className="flex justify-between items-center">
                      <h3 className="text-lg font-semibold text-white pr-4">
                        {item.question}
                      </h3>
                      <div className={`transform transition-transform duration-200 ${openItems[index] ? 'rotate-180' : ''}`}>
                        <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </button>
                  
                  {openItems[index] && (
                    <div className="px-6 pb-4 border-t border-gray-600/50">
                      <p className="text-gray-300 leading-relaxed pt-4">
                        {item.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Additional Help Section */}
          <div className="max-w-4xl mx-auto mt-12">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-8 shadow-xl">
              <h2 className="text-2xl font-bold mb-6 text-blue-400 text-center">Still Need Help?</h2>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="bg-blue-500/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">📧</span>
                  </div>
                  <h3 className="text-white font-semibold mb-2">Contact Support</h3>
                  <p className="text-gray-300 text-sm mb-3">
                    Get personalized help with your specific questions or issues.
                  </p>
                  <Link 
                    href="/contact" 
                    className="text-blue-400 hover:underline font-medium"
                  >
                    Contact Us →
                  </Link>
                </div>
                
                <div>
                  <div className="bg-purple-500/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">📚</span>
                  </div>
                  <h3 className="text-white font-semibold mb-2">Learn More</h3>
                  <p className="text-gray-300 text-sm mb-3">
                    Discover more about our platform and chess analysis features.
                  </p>
                  <Link 
                    href="/about" 
                    className="text-purple-400 hover:underline font-medium"
                  >
                    About Us →
                  </Link>
                </div>
                
                <div>
                  <div className="bg-green-500/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🚀</span>
                  </div>
                  <h3 className="text-white font-semibold mb-2">Get Started</h3>
                  <p className="text-gray-300 text-sm mb-3">
                    Ready to analyze your chess performance? Start searching now!
                  </p>
                  <Link 
                    href="/" 
                    className="text-green-400 hover:underline font-medium"
                  >
                    Start Analyzing →
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Search Tips */}
          <div className="max-w-4xl mx-auto mt-8">
            <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm rounded-lg p-6 shadow-xl border border-blue-500/20">
              <h3 className="text-xl font-bold mb-4 text-blue-400">💡 Pro Tips for Better Results</h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div className="space-y-2">
                  <p className="text-gray-300">
                    <span className="text-blue-400 font-semibold">✓</span> Use exact Chess.com usernames
                  </p>
                  <p className="text-gray-300">
                    <span className="text-blue-400 font-semibold">✓</span> Check spelling carefully
                  </p>
                  <p className="text-gray-300">
                    <span className="text-blue-400 font-semibold">✓</span> Try different date ranges for game analysis
                  </p>
                </div>
                <div className="space-y-2">
                  <p className="text-gray-300">
                    <span className="text-blue-400 font-semibold">✓</span> Compare players with comma separation
                  </p>
                  <p className="text-gray-300">
                    <span className="text-blue-400 font-semibold">✓</span> Ensure player profiles are public
                  </p>
                  <p className="text-gray-300">
                    <span className="text-blue-400 font-semibold">✓</span> Refresh if data seems outdated
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQ;
