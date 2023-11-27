import axios from "axios";

const getAllOrders = async () => {
  try {
    const response = await axios.get("http://localhost:3000/api/orders");
    console.log("Success");
    const data = response.data;
    return data;
  } catch (error) {
    console.error("Error connecting to the orders server");
    throw error;
  }
};

export default getAllOrders;
