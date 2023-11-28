import axios from "axios";

const getAllOrders = async () => {
  try {
    const response = await axios.get(
      "https://project-team1-oms-back.onrender.com/api/orders"
    );
    console.log("Success");
    const data = response.data;
    return data;
  } catch (error) {
    console.error("Error connecting to the orders server");
    throw error;
  }
};

export default getAllOrders;
