import axios from "axios";

const editsOrderStatus = (
  orderId: string,
  orderStatus: Record<string, unknown>
) => {
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
    });
};

export default editsOrderStatus;
