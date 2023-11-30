import OrdersTable from "../components/pages/OrdersTable";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { Container } from "@mui/material";
import { useEffect } from "react";
import getAllOrders from "../service/getAllOrders";
import { setFilteredOrders, setOrders } from "../ordersSlice";
import { setLoading } from "../../spinner/spinnerSlice";

const OrderManagementPage = () => {
  const themeMode = useAppSelector((store) => store.themeMode.themeMode);
  const dispatch = useAppDispatch();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllOrders();
        if (data) {
          dispatch(setOrders(data));
          dispatch(setFilteredOrders(data));
        }
      } catch (error) {
        console.error("Error connecting to the orders server");
      } finally {
        dispatch(setLoading(false));
      }
    };

    fetchData();
  }, [dispatch]);
  return (
    <Container
      className="page-container"
      sx={{
        marginTop: "80px",
        backgroundColor: themeMode ? "white" : "black",
        borderRadius: 8,
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
        textAlign: "center",
      }}
    >
      <OrdersTable />
    </Container>
  );
};

export default OrderManagementPage;
