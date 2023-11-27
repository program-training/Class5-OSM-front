import axios from "axios";
import Order from "../interfaces/order";

export interface EditsOrderDetailsProps {
  order: Order;
}

const baseURL = "http://localhost:3333/api/orders";

const editsOrderDetails = (order: Order) => {
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
    });
  return null;
};

export default editsOrderDetails;
