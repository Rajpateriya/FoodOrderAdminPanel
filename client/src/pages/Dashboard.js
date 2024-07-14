import React from 'react';
import DishList from '../components/Categories';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-700 via-gray-900 to-black">
      <header className="bg-blue-600 text-white py-4 shadow-md">
        <h1 className="text-center text-3xl font-bold">Dish Management Dashboard</h1>
      </header>
      <main className="p-8">
        <DishList />
      </main>
    </div>
  );
};

export default Dashboard;
