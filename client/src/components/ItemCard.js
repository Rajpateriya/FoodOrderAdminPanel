// import React from 'react';
// import { FaHeart, FaPlus } from 'react-icons/fa';
// // import noodlesImage from '../assets/noodles.jpg';

// function ItemCard() {
//   return (
//     <div className="bg-gray-700 p-4 rounded-lg">
//       <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLI4PnEHPMYifqS9_GUOvJAASlPAhU-jTnD0KuRj5ODDp83ppzdByqhvagyb3cTkg2Sj4&usqp=CAU' alt="Hungarian Noodles" className="w-full h-32 object-cover rounded-lg mb-4" />
//       <h3 className="text-lg font-semibold">dishName</h3>
//       <p className="text-gray-300 text-sm">Noodles are a versatile type of pasta made from wheat flour or rice.</p>
//       <div className="flex justify-between items-center mt-4">
//         <span className="text-xl font-semibold">$15.99</span>
//         <div className="flex items-center space-x-2">
//           <FaHeart className="text-gray-300" />
//           <button className="bg-orange-500 p-2 rounded-lg">
//             <FaPlus className="text-white" />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ItemCard;




import React, { useState, useEffect } from 'react';
import { FaHeart, FaPlus } from 'react-icons/fa';
import axios from 'axios';

const ItemCard = () => {
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
    <div className="bg-gray-700 p-4 rounded-lg">
      
      <div className="grid grid-cols-3 gap-4">
        {dishes.map(dish => (
          <div key={dish.dishId} className="bg-gray-700 p-4 rounded-lg">
            <img src={dish.imageUrl} alt={dish.dishName} className="w-full h-32 object-cover rounded-lg mb-4" />
            <h3 className="text-lg font-semibold">{dish.dishName}</h3>
            <p className="text-gray-300 text-sm">{dish.description}</p>
            <div className="flex justify-between items-center mt-4">
              <span className="text-xl font-semibold">${dish.price}</span>
              <div className="flex items-center space-x-2">
                <FaHeart className="text-gray-300" />
                <button
                  className={`bg-orange-500 p-2 rounded-lg ${dish.isPublished ? 'bg-red-500 text-white' : 'bg-green-500 text-white'}`}
                  onClick={() => togglePublishStatus(dish.dishId, dish.isPublished)}
                >
                  {dish.isPublished ? 'Unpublish' : 'Publish'}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>



  );
};

export default ItemCard;

