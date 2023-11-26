import axios from "axios";
import { useNavigate } from "react-router-dom";

const EditsOrderStatus = (orderStatus: string) => {
  const navigate = useNavigate();

  axios
    .put("", orderStatus)
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
