import React from 'react';
import { FaSearch, FaBell, FaUserCircle } from 'react-icons/fa';

function Header() {
  return (
    <header className="bg-gray-800 p-4 flex items-center justify-between">
      <div className="flex items-center bg-gray-700 p-2 rounded-lg w-full max-w-md">
        <FaSearch className="text-gray-400 mr-2" />
        <input 
          type="text" 
          placeholder="Search for a food" 
          className="bg-transparent flex-1 outline-none text-gray-300"
        />
      </div>
      <div className="flex items-center space-x-4">
        <FaBell className="text-gray-300" />
        <FaUserCircle className="text-gray-300" />
      </div>
    </header>
  );
}

export default Header;
