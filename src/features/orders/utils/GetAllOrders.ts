import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../../store/hooks";
import { setOrders } from "../ordersSlice";
import { useEffect } from "react";

const GetAllOrders = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/orders")
      .then((res) => {
        dispatch(setOrders(res.data));
        console.log("Success");
        console.log(res.data);
      })
      .catch((error) => {
        console.error(error.message, "Error connecting to the orders server");
        navigate("*");
      });
  }, []);
};

export default GetAllOrders;
