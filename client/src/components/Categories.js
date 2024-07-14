import React from 'react';

function Categories() {
  return (
    <div className="flex space-x-4">
      <div className="bg-gray-700 p-2 rounded-lg text-center">All</div>
      <div className="bg-gray-700 p-2 rounded-lg text-center">Salads</div>
      <div className="bg-gray-700 p-2 rounded-lg text-center">Soups</div>
      <div className="bg-gray-700 p-2 rounded-lg text-center">Drinks</div>
      <div className="bg-gray-700 p-2 rounded-lg text-center">Snacks</div>
      <div className="bg-gray-700 p-2 rounded-lg text-center">Fruits</div>
    </div>
  );
}

export default Categories;
