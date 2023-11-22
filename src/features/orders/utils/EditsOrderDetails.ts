import { FC } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Order from "../interfaces/getAllOrders";

export interface EditsOrderDetailsProps {
  order: Order;
}

const baseURL = "http://localhost:3333/api/orders";

const EditsOrderDetails: FC<Order> = (order) => {
  const navigate = useNavigate();
  axios
    .put(baseURL, { body: order })
    .then(() => {
      console.log("Success", "Successfully edit the order");
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

export default EditsOrderDetails;
