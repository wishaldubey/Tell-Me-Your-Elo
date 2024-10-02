// pages/compare.js
import { useState } from 'react';
import PlayerSearch from '../components/PlayerSearch';
import StatsComparison from '../components/StatsComparison';

export default function Compare() {
  const [player1, setPlayer1] = useState(null);
  const [player2, setPlayer2] = useState(null);
  const [error, setError] = useState(null);

  const handleSearch = async (username, setPlayer) => {
    setError(null);
    try {
      const res = await fetch(`https://api.chess.com/pub/player/${username}/stats`);
      if (!res.ok) throw new Error('User not found or API error');
      const data = await res.json();
      setPlayer(data);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Compare Players</h1>
      <div className="grid grid-cols-2 gap-4">
        <PlayerSearch onSearch={(username) => handleSearch(username, setPlayer1)} />
        <PlayerSearch onSearch={(username) => handleSearch(username, setPlayer2)} />
      </div>
      {error && <p className="text-red-500">{error}</p>}
      {player1 && player2 && <StatsComparison player1={player1} player2={player2} />}
    </div>
  );
}
