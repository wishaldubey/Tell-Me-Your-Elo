import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement } from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, ArcElement);

const PieChart = ({ title, stats }) => {
  const data = {
    labels: ['Wins', 'Losses', 'Draws'],
    datasets: [
      {
        label: title,
        data: [stats.win, stats.loss, stats.draw],
        backgroundColor: [
          'rgba(255, 99, 71, 0.9)', // Bright Red for Wins
          'rgba(255, 165, 0, 0.9)',  // Bright Orange for Losses
          'rgba(30, 144, 255, 0.9)',  // Bright Blue for Draws
        ],
        borderColor: 'rgba(0, 0, 0, 0)', // Remove outline
        borderWidth: 0, // Set border width to 0
        hoverOffset: 15, // Keep hover effect
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
          label: function(context) {
            const label = context.label || '';
            const value = context.raw || 0;
            return `${label}: ${value}`; // Show label and value in tooltip
          },
        },
      },
    },
    animations: {
      tension: {
        duration: 300,
        from: 1,
        to: 0,
        loop: false,
      },
    },
  };

  return (
    <div className="bg-gray-800 rounded-lg p-4 shadow-lg">
      <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
      <div className="transition-transform duration-300 hover:scale-105"> {/* Reduced zooming effect */}
        <Pie data={data} options={options} />
      </div>
    </div>
  );
};

export default PieChart;
