export const getUsers = async () => {
  try {
    const response = await fetch("http://localhost:5000/api/profile");
    const data = await response.json();
    console.log("data",data);
    
    return data;
  } catch (error) {
    console.error("API Error:", error);
    return [];
  }
};