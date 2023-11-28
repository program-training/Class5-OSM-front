import axios from "axios";
const URL = `${import.meta.env.VITE_BASE_URL}/api/orders`;

const getAllOrders = async () => {
  try {
    const response = await axios.get(URL);
    console.log("Success");
    const data = response.data;
    return data;
  } catch (error) {
    console.error("Error connecting to the orders server");
    throw error;
  }
};

export default getAllOrders;
