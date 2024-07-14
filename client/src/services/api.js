const API_URL = 'http://localhost:5000/api';

export const getDishes = async () => {
  const response = await fetch(`${API_URL}/dishes`);
  return response.json();
};

export const toggleDishPublishStatus = async (id) => {
  const response = await fetch(`${API_URL}/dishes/${id}/toggle`, {
    method: 'PATCH'
  });
  return response.json();
};
