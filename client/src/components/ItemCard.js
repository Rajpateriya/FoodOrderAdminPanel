import React, { useState ,useEffect} from "react";
import axios from "axios";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

function ItemCard({ dish }) {
  const [isPublished, setIsPublished] = useState(dish.isPublished);

  useEffect(() => {
    const eventSource = new EventSource('http://localhost:5000/api/sse/dishStatus');

    eventSource.onmessage = (event) => {
      const updatedStatus = JSON.parse(event.data);
      if (updatedStatus.dishId === dish.dishId) {
        setIsPublished(updatedStatus.isPublished);
      }
    };

    return () => {
      eventSource.close();
    };
  }, [dish.dishId]);

  const handleTogglePublish = async () => {
    try {
      // Toggle publish status through API call
      const response = await axios.put(
        `http://localhost:5000/api/togglePublish/${dish.dishId}`
      );

      setIsPublished(!isPublished); // Flip the current state
    } catch (error) {
      console.error("Error toggling publish status:", error);
    }
  };

  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
      <img
        src={dish.imageUrl}
        alt={dish.dishName}
        className="w-full h-40 object-cover rounded-lg mb-4"
      />
      <h3 className="text-lg font-semibold text-white mb-2">{dish.dishName}</h3>
      <div className="flex justify-between items-center">
        <button
          className={`flex items-center space-x-1 px-1 py-2 rounded-lg ${
            isPublished
              ? "bg-green-600 hover:bg-green-700"
              : "bg-red-600 hover:bg-red-700"
          } transition-colors duration-300`}
          onClick={handleTogglePublish}
          style={{ maxWidth: "140px" }} 
        >
          {isPublished ? (
            <>
              <FaCheckCircle className="text-white" />
              <span className="text-white text-sm sm:text-base truncate">Published</span>
            </>
          ) : (
            <>
              <FaTimesCircle className="text-white" />
              <span className="text-white text-sm sm:text-base truncate">Unpublished</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}

export default ItemCard;
