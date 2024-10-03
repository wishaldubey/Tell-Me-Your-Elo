import React from "react";
import { FaCalendar } from "react-icons/fa";
import { IoStatsChartSharp } from "react-icons/io5";
import PieChart from "./PieChart";
import BulletChart from "./BulletChart";
import { FlagIcon } from "react-flag-kit";

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
    avatar: avatar1 = "https://via.placeholder.com/150",
    username: username1 = "Unknown User",
    name: name1 = "No Name",
    country: country1 = "",
    joined: joined1 = Date.now() / 1000,
    status: status1 = "offline",
    stats: stats1 = {},
  } = userData;

  const avatar2 = comparisonData?.avatar || "https://via.placeholder.com/150";
  const username2 = comparisonData?.username || "Unknown User";
  const name2 = comparisonData?.name || "No Name";
  const country2 = comparisonData?.country || "";
  const joined2 = comparisonData?.joined || Date.now() / 1000;
  const stats2 = comparisonData?.stats || {};

  const lastRapidRating1 = stats1?.chess_rapid?.last?.rating || "N/A";
  const lastRapidRating2 = stats2?.chess_rapid?.last?.rating || "N/A";

  const rapidStats1 = stats1?.chess_rapid?.record || {
    win: 0,
    loss: 0,
    draw: 0,
  };
  const rapidStats2 = stats2?.chess_rapid?.record || {
    win: 0,
    loss: 0,
    draw: 0,
  };

  const bulletStats1 = stats1?.chess_bullet || {
    record: { win: 0, loss: 0, draw: 0 },
    last: { rating: "N/A" },
  };
  const bulletStats2 = stats2?.chess_bullet || {
    record: { win: 0, loss: 0, draw: 0 },
    last: { rating: "N/A" },
  };

  const countryCode1 = country1.split("/").pop().toUpperCase();
  const countryCode2 = country2.split("/").pop().toUpperCase();

  const isOnline1 = status1 === "online";

  return (
    <div className="mt-4 p-4 bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-lg shadow-lg transition-transform duration-300 hover:shadow-xl mx-auto max-w-3xl">
      {/* User Info Section */}
      <div className="flex flex-col sm:flex-row justify-between mb-4 border-b border-gray-700 pb-4">
        <div className="flex flex-col items-center sm:flex-row">
          <img
            src={avatar1}
            alt={username1}
            className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-4 border-blue-600 shadow-lg transition-transform duration-300 hover:scale-105 mb-4 sm:mb-0 sm:mr-4"
          />
          <div className="flex flex-col text-center sm:text-left">
            <h2 className="text-2xl font-semibold hover:text-blue-400 transition-colors duration-300">
              {name1}
            </h2>
            <p className="text-md text-gray-300">@{username1}</p>
            <FlagIcon code={countryCode1} size={30} className="mt-2" />
          </div>
        </div>
        {comparisonData && (
          <div className="flex flex-col items-center sm:flex-row">
            <img
              src={avatar2}
              alt={username2}
              className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-4 border-blue-600 shadow-lg transition-transform duration-300 hover:scale-105 mb-4 sm:mb-0 sm:mr-4"
            />
            <div className="flex flex-col text-center sm:text-left">
              <h2 className="text-2xl font-semibold hover:text-blue-400 transition-colors duration-300">
                {name2}
              </h2>
              <p className="text-md text-gray-300">@{username2}</p>
              <FlagIcon code={countryCode2} size={30} className="mt-2" />
            </div>
          </div>
        )}
        {!comparisonData && (
          <div className="flex items-center justify-center mt-4 sm:mt-0">
            <span
              className={`w-3 h-3 rounded-full ${
                isOnline1 ? "bg-green-500" : "bg-red-500"
              } mr-2`}
            ></span>
            <span className="text-lg font-medium">
              {isOnline1 ? "Online" : "Offline"}
            </span>
          </div>
        )}
      </div>

      {/* Elo Rating and Joined Date */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
        <StatCard
          icon={<IoStatsChartSharp className="text-blue-400" />}
          title="Elo Rating"
          value={lastRapidRating1}
        />
        {comparisonData && (
          <StatCard
            icon={<IoStatsChartSharp className="text-blue-400" />}
            title="Elo Rating"
            value={lastRapidRating2}
          />
        )}
        <StatCard
          icon={<FaCalendar className="text-blue-400" />}
          title="Joined"
          value={new Date(joined1 * 1000).toLocaleDateString()}
        />
        {comparisonData && (
          <StatCard
            icon={<FaCalendar className="text-blue-400" />}
            title="Joined"
            value={new Date(joined2 * 1000).toLocaleDateString()}
          />
        )}
      </div>

      {/* Visual Comparison Section */}
      {comparisonData && (
        <div className="mt-6 p-4 bg-gradient-to-r from-gray-800 to-gray-700 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold text-white mb-4 text-center">
            Vs
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="text-center">
              <h4 className="text-lg font-bold">{username1}</h4>
              <StatCard
                icon={<IoStatsChartSharp className="text-blue-400" />}
                title="Wins (Rapid)"
                value={rapidStats1.win}
              />
              <StatCard
                icon={<IoStatsChartSharp className="text-blue-400" />}
                title="Losses (Rapid)"
                value={rapidStats1.loss}
              />
              <StatCard
                icon={<IoStatsChartSharp className="text-blue-400" />}
                title="Draws (Rapid)"
                value={rapidStats1.draw}
              />
            </div>
            <div className="text-center">
              <h4 className="text-lg font-bold">{username2}</h4>
              <StatCard
                icon={<IoStatsChartSharp className="text-blue-400" />}
                title="Wins (Rapid)"
                value={rapidStats2.win}
              />
              <StatCard
                icon={<IoStatsChartSharp className="text-blue-400" />}
                title="Losses (Rapid)"
                value={rapidStats2.loss}
              />
              <StatCard
                icon={<IoStatsChartSharp className="text-blue-400" />}
                title="Draws (Rapid)"
                value={rapidStats2.draw}
              />
            </div>
          </div>
        </div>
      )}

      {/* Pie Charts for Both Users */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
        <PieChart title={`${name1} Rapid Stats`} stats={rapidStats1} />
        <PieChart
          title={`${name1} Blitz Stats`}
          stats={stats1?.chess_blitz?.record || { win: 0, loss: 0, draw: 0 }}
        />
        {comparisonData && (
          <>
            <PieChart title={`${name2} Rapid Stats`} stats={rapidStats2} />
            <PieChart
              title={`${name2} Blitz Stats`}
              stats={
                stats2?.chess_blitz?.record || { win: 0, loss: 0, draw: 0 }
              }
            />
          </>
        )}
      </div>

      {/* Bullet Chart Size Adjustment for Single User */}
      <div className="mt-4">
        {comparisonData ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <BulletChart
              bulletStats={bulletStats1}
              title={name1}
              chartSize="h-64 w-full"
            />
            <BulletChart
              bulletStats={bulletStats2}
              title={name2}
              chartSize="h-64 w-full"
            />
          </div>
        ) : (
          <BulletChart
            bulletStats={bulletStats1}
            title={name1}
            chartSize="h-96 w-full"
          />
        )}
      </div>
    </div>
  );
};

export default UserStats;
