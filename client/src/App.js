import React, { useEffect, useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Categories from './components/Categories';
import ItemCard from './components/ItemCard';
import SalesSummary from './components/SalesSummary';
import RecentActivity from './components/RecentActivity';
import { getDishes } from './services/api';

function App() {
  const [dishes, setDishes] = useState([]);

  useEffect(() => {
    const fetchDishes = async () => {
      try {
        const data = await getDishes();
        setDishes(data);
      } catch (error) {
        console.error('Error fetching dishes:', error);
      }
    };

    fetchDishes();
  }, []);

  return (
    <div className="flex h-screen bg-gray-900 text-white">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Header />
        <div className="flex flex-1 overflow-hidden">
          <div className="flex flex-col flex-1 overflow-y-auto p-6">
            <Categories />
            <div className="grid grid-cols-3 gap-6 mt-6">
              {dishes.map((dish) => (
                <ItemCard key={dish.dishId} dish={dish} />
              ))}
            </div>
          </div>
          <div className="w-80 p-6 bg-gray-800 overflow-y-auto">
            <SalesSummary />
            <RecentActivity />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

