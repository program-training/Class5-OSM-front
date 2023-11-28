import axios from "axios";

const editsOrderDetails = (
  orderId: string,
  orderStatus: Record<string, unknown>
) => {
  axios
    .put(
      `https://project-team1-oms-back.onrender.com/api/orders/${orderId}`,
      orderStatus
    )
    .then(() => {
      console.log("Success");
    })
    .catch((error) => {
      console.error(
        error.message,
        "Error connecting to the orders status server"
      );
    });
};

export default editsOrderDetails;
