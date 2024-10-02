import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa'; // Importing search icon from react-icons

const SearchBar = ({ onSearch }) => {
  const [username, setUsername] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    if (username) {
      onSearch(username);
      setUsername(''); // Clear input after search
    }
  };

  return (
    <form onSubmit={handleSearch} className="flex flex-col items-center my-4"> {/* Stack items vertically */}
      <input
        type="text"
        placeholder="Enter Chess.com Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="p-3 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 w-64" // Adjusted width
        style={{ backgroundColor: '#f9f9f9', color: '#333' }} // Light background and dark text
      />
      <div className="mt-2"> {/* Adds margin-top for spacing */}
        <button
          type="submit"
          className="bg-blue-600 text-white p-3 rounded-lg shadow hover:bg-blue-700 transition duration-200 transform hover:scale-105 flex items-center justify-center"
        >
          <FaSearch className="text-lg" /> {/* Search icon */}
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
