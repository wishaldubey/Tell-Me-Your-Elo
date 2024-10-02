// components/PlayerComparison.js
import React, { useState } from 'react';

const PlayerComparison = ({ onCompare }) => {
  const [username, setUsername] = useState('');

  const handleCompare = () => {
    if (username) {
      onCompare(username);
    }
  };

  return (
    <div className="flex flex-col items-center mb-4">
      <h2 className="text-lg font-bold mb-4">Compare Players</h2>
      <input
        type="text"
        placeholder="Enter Player Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="mb-2 p-2 rounded-md bg-gray-800 text-white"
      />
      <button onClick={handleCompare} className="p-2 bg-blue-500 text-white rounded-md">
        Compare Stats
      </button>
    </div>
  );
};

export default PlayerComparison;
