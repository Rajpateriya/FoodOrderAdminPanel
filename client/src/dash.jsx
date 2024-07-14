// src/App.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Dash = () => {
  const [dishes, setDishes] = useState([]);

  useEffect(() => {
    fetchDishes();
  }, []);

  const fetchDishes = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/dishes');
      setDishes(response.data);
    } catch (error) {
      console.error('Error fetching dishes:', error);
    }
  };

  const togglePublishStatus = async (dishId, currentStatus) => {
    try {
      const response = await axios.put(`http://localhost:5000/api/dishes/${dishId}`, {
        isPublished: !currentStatus
      });
      console.log(response.data);
      fetchDishes(); // Refresh dishes after update
    } catch (error) {
      console.error('Error toggling publish status:', error);
    }
  };

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-4">Dish Management Dashboard</h1>
      <div className="grid grid-cols-3 gap-4">
        {dishes.map(dish => (
          <div key={dish.dishId} className="border p-4">
            <img src={dish.imageUrl} alt={dish.dishName} className="mb-2" />
            <h2 className="text-lg font-bold">{dish.dishName}</h2>
            <p>{dish.isPublished ? 'Published' : 'Not Published'}</p>
            <button
              className={`mt-2 px-4 py-2 rounded-lg ${
                dish.isPublished ? 'bg-red-500 text-white' : 'bg-green-500 text-white'
              }`}
              onClick={() => togglePublishStatus(dish.dishId, dish.isPublished)}
            >
              {dish.isPublished ? 'Unpublish' : 'Publish'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dash;
