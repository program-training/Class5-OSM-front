import axios from "axios";
import { useNavigate } from "react-router-dom";

const EditsOrderStatus = (
  orderId: string,
  orderStatus: Record<string, unknown>
) => {
  const navigate = useNavigate();

  axios
    .put(`http://localhost:3000/api/orders/${orderId}`, orderStatus)
    .then((res) => {
      console.log("Success");
      console.log(res.data);
    })
    .catch((error) => {
      console.error(
        error.message,
        "Error connecting to the orders status server"
      );
      navigate("*");
    });
};

export default EditsOrderStatus;
