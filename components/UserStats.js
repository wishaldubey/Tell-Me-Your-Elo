import React from 'react';
import { FaCalendar } from 'react-icons/fa'; 
import { IoStatsChartSharp } from "react-icons/io5";
import PieChart from './PieChart';
import BulletChart from './BulletChart';
import { FlagIcon } from 'react-flag-kit';

const StatCard = ({ icon, title, value }) => (
  <div className="flex items-center justify-between bg-gray-800 rounded-lg p-4 m-2 shadow-lg hover:shadow-xl transition-shadow duration-300">
    <div className="flex items-center">
      {icon}
      <span className="ml-2 text-lg font-medium">{title}:</span>
    </div>
    <span className="text-xl font-bold text-blue-400">{value}</span>
  </div>
);

const UserStats = ({ userData, error, comparisonData }) => {
  if (error) {
    return <div className="text-red-500 text-center font-bold">{error}</div>;
  }

  if (!userData) return null;

  const {
    avatar = 'https://via.placeholder.com/150',
    username = 'Unknown User',
    name = 'No Name',
    country = '',
    joined = Date.now() / 1000,
    status = 'offline',
    stats = {},
  } = userData;

  const rapidStats = stats?.chess_rapid?.record || { win: 0, loss: 0, draw: 0 };
  const blitzStats = stats?.chess_blitz?.record || { win: 0, loss: 0, draw: 0 };
  const bulletStats = stats?.chess_bullet || { record: { win: 0, loss: 0, draw: 0 }, last: { rating: 'N/A' } };
  const lastRapidRating = stats?.chess_rapid?.last?.rating || 'N/A';

  // Comparison data
  const comparisonRapidStats = comparisonData?.stats?.chess_rapid?.record || { win: 0, loss: 0, draw: 0 };
  const comparisonBlitzStats = comparisonData?.stats?.chess_blitz?.record || { win: 0, loss: 0, draw: 0 };

  const countryCode = country.split('/').pop().toUpperCase();
  const isOnline = status === 'online';
  const isPlaceholder = avatar === 'https://via.placeholder.com/150';
  const avatarSrc = isPlaceholder ? '/avatar.webp' : avatar;

  return (
    <div className="mt-4 p-4 bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-lg shadow-lg transition-transform duration-300 hover:shadow-xl mx-auto max-w-2xl">
      <div className="flex items-center mb-4 border-b border-gray-700 pb-4">
        <img
          src={avatarSrc}
          alt={username}
          className="w-24 h-24 rounded-full border-4 border-blue-600 shadow-lg transition-transform duration-300 hover:scale-105 mr-4"
        />
        <div className="flex flex-col ml-4">
          <h2 className="text-2xl font-semibold hover:text-blue-400 transition-colors duration-300">{name}</h2>
          <p className="text-md text-gray-300">@{username}</p>
        </div>
        <div className="ml-auto flex flex-col items-end">
          <div className="flex items-center mb-2">
            <FlagIcon code={countryCode} size={30} className="mr-2" />
          </div>
          <div className="flex items-center mt-2">
            <span className={`w-3 h-3 rounded-full ${isOnline ? 'bg-green-500' : 'bg-red-500'} mr-2`}></span>
            <span className="text-lg font-medium">{isOnline ? 'Online' : 'Offline'}</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
        <StatCard 
          icon={<IoStatsChartSharp className="text-blue-400" />} 
          title="Elo Rating" 
          value={lastRapidRating} 
        />
        <StatCard 
          icon={<FaCalendar className="text-blue-400" />} 
          title="Joined" 
          value={new Date(joined * 1000).toLocaleDateString()} 
        />
      </div>

      {/* Visual Comparison Section */}
      {comparisonData && (
        <div className="mt-6 p-4 bg-gradient-to-r from-gray-800 to-gray-700 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold text-white mb-4 text-center">Vs</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="text-center">
              <h4 className="text-lg font-bold">{username}</h4>
              <StatCard 
                icon={<IoStatsChartSharp className="text-blue-400" />} 
                title="Wins (Rapid)" 
                value={rapidStats.win} 
              />
              <StatCard 
                icon={<IoStatsChartSharp className="text-blue-400" />} 
                title="Losses (Rapid)" 
                value={rapidStats.loss} 
              />
              <StatCard 
                icon={<IoStatsChartSharp className="text-blue-400" />} 
                title="Draws (Rapid)" 
                value={rapidStats.draw} 
              />
            </div>
            <div className="text-center">
              <h4 className="text-lg font-bold">{comparisonData.username}</h4>
              <StatCard 
                icon={<IoStatsChartSharp className="text-blue-400" />} 
                title="Wins (Rapid)" 
                value={comparisonRapidStats.win} 
              />
              <StatCard 
                icon={<IoStatsChartSharp className="text-blue-400" />} 
                title="Losses (Rapid)" 
                value={comparisonRapidStats.loss} 
              />
              <StatCard 
                icon={<IoStatsChartSharp className="text-blue-400" />} 
                title="Draws (Rapid)" 
                value={comparisonRapidStats.draw} 
              />
            </div>
          </div>
        </div>
      )}

      {/* Pie Charts */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
        <PieChart title="Rapid Stats" stats={rapidStats} />
        <PieChart title="Blitz Stats" stats={blitzStats} />
      </div>

      {/* Bullet Chart */}
      <div className="mt-4">
        <BulletChart bulletStats={bulletStats} />
      </div>
    </div>
  );
};

export default UserStats;
