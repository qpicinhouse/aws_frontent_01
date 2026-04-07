export const getUsers = async () => {
    const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8000";
    console.log("API_URL New :", API_URL);
    
  try {
    const response = await fetch(`${API_URL}/api/profile`);
    const data = await response.json();
    console.log("data",data);
    
    return data;
  } catch (error) {
    console.error("API Error:", error);
    return [];
  }
};