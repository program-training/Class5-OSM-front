// import { FC } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import Order from "../interfaces/getAllOrders";

// export interface getAllOrdersProps {
//   orders: Order[];
// }

const baseURL = "https://jsonplaceholder.typicode.com/posts";

const GetAllOrders = () => {
  const navigate = useNavigate();
  axios
    .get(baseURL, {})
    .then(() => {
      console.log("Success", "Successfully added to the orders");
    })
    .catch((err) => {
      console.error(
        "Error:",
        err.message,
        "Error connecting to the orders server"
      );
      navigate("*");
    });
  return null;
};

export default GetAllOrders;
