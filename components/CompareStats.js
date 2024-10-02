import React, { useState } from 'react';
import SearchBar from './SearchBar';

const CompareStats = ({ onCompare }) => {
  const [username, setUsername] = useState('');

  const handleCompare = (newUsername) => {
    onCompare(newUsername);
    setUsername('');
  };

  return (
    <div className="mt-4">
      {/* <h2 className="text-2xl"></h2> */}
      <SearchBar onSearch={handleCompare} />
    </div>
  );
};

export default CompareStats;
