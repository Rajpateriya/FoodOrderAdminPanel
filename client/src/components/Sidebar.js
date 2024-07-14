import React from 'react';
import { FaHome, FaShoppingCart, FaHistory, FaReceipt, FaThList, FaCog } from 'react-icons/fa';
// import profileImage from '../assets/profile.jpg';

function Sidebar() {
  return (
    <div className="w-64 bg-gray-800 p-6 flex flex-col">
      <div className="flex flex-col items-center mb-9">
        <img src="https://thumbs.dreamstime.com/z/student-avatar-illustration-user-profile-icon-youth-avatar-student-avatar-illustration-simple-cartoon-user-portrait-user-profile-276189214.jpg" alt="Profile" className="w-12 h-12 rounded-full" />
        <span className="ml-2 text-lg text-center">Raj Pateriya</span>
      </div>
      <nav className="flex-1">
        <a href="#" className="flex items-center p-2 text-gray-300 hover:bg-gray-700 rounded-lg mb-2">
          <FaHome className="mr-3" /> Home
        </a>
        <a href="#" className="flex items-center p-2 text-gray-300 hover:bg-gray-700 rounded-lg mb-2">
          <FaShoppingCart className="mr-3" /> Order
        </a>
        <a href="#" className="flex items-center p-2 text-gray-300 hover:bg-gray-700 rounded-lg mb-2">
          <FaHistory className="mr-3" /> History
        </a>
        <a href="#" className="flex items-center p-2 text-gray-300 hover:bg-gray-700 rounded-lg mb-2">
          <FaReceipt className="mr-3" /> Bills
        </a>
        <a href="#" className="flex items-center p-2 text-gray-300 hover:bg-gray-700 rounded-lg mb-2">
          <FaThList className="mr-3" /> Categories
        </a>
        <a href="#" className="flex items-center p-2 text-gray-300 hover:bg-gray-700 rounded-lg mb-2">
          <FaCog className="mr-3" /> Settings
        </a>
      </nav>
    </div>
  );
}

export default Sidebar;
