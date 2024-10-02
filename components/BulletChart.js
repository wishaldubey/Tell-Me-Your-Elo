import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

const BulletChart = ({ bulletStats }) => {
  const data = {
    labels: ['Wins', 'Losses', 'Draws', 'Last Rating'],
    datasets: [
      {
        label: 'Bullet Stats',
        data: [
          bulletStats.record.win,
          bulletStats.record.loss,
          bulletStats.record.draw,
          bulletStats.last.rating,
        ],
        backgroundColor: [
          'rgba(255, 99, 71, 0.9)', // Bright Red for Wins
          'rgba(255, 165, 0, 0.9)',  // Bright Orange for Losses
          'rgba(30, 144, 255, 0.9)',  // Bright Blue for Draws
          'rgba(50, 205, 50, 0.9)',    // Bright Green for Last Rating
        ],
        borderColor: 'rgba(0, 0, 0, 0)', // Remove outline
        borderWidth: 0, // Set border width to 0
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: function(tooltipItem) {
            return `${tooltipItem.dataset.label}: ${tooltipItem.raw}`; // Show label and value in tooltip
          },
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="bg-gray-800 rounded-lg p-4 shadow-lg">
      <h3 className="text-lg font-semibold text-white mb-2">Bullet Stats</h3>
      <div className="transition-transform duration-300 hover:scale-102"> {/* Reduced zooming effect */}
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default BulletChart;
