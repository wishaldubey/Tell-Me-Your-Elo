import React from 'react';
import { FaCalendar } from 'react-icons/fa'; 
import { IoStatsChartSharp } from "react-icons/io5";
import PieChart from './PieChart';
import BulletChart from './BulletChart'; // Import the new BulletChart component
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

const UserStats = ({ userData, error }) => {
  if (error) {
    return <div className="text-red-500 text-center font-bold">{error}</div>;
  }

  if (!userData) return null;

  // Log the userData object to inspect its structure
  console.log('User Data:', userData);

  const {
    avatar = 'https://via.placeholder.com/150', // Default value for avatar
    username = 'Unknown User',
    name = 'No Name',
    country = '',
    joined = Date.now() / 1000, // Default to current time
    status = 'offline',
    stats = {},
  } = userData;

  const rapidStats = stats?.chess_rapid?.record || { win: 0, loss: 0, draw: 0 };
  const blitzStats = stats?.chess_blitz?.record || { win: 0, loss: 0, draw: 0 };
  const bulletStats = stats?.chess_bullet || { record: { win: 0, loss: 0, draw: 0 }, last: { rating: 'N/A' } }; // Default value for bullet stats
  const lastRapidRating = stats?.chess_rapid?.last?.rating || 'N/A';

  // Extract the country code from the API URL
  const countryCode = country.split('/').pop().toUpperCase();
  const isOnline = status === 'online';

  // Check if avatar is the placeholder
  const isPlaceholder = avatar === 'https://via.placeholder.com/150';
  const avatarSrc = isPlaceholder ? '/avatar.webp' : avatar;

  // Debugging logs to verify avatar URLs
  console.log('Avatar URL:', avatar);
  console.log('Using Avatar Source:', avatarSrc);

  return (
    <div className="mt-4 p-4 bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-lg shadow-lg transition-transform duration-300 hover:shadow-xl mx-auto max-w-2xl">
      <div className="flex items-center mb-4 border-b border-gray-700 pb-4">
        <img
          src={avatarSrc} // Use the determined avatar source
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
