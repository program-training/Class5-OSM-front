import OrdersTable from "../components/OrdersTable";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { setOrders } from "../ordersSlice";
import Box from "@mui/material/Box";
import { CssBaseline } from "@mui/material";

const OrderManagementPage = () => {
  const orders = useAppSelector((state) => state.orders.orders);
  const dispatch = useAppDispatch();
  const themeMode = useAppSelector((store) => store.themeMode.themeMode);

  const handleCancel = (orderId: string) => {
    const updatedOrders = orders?.map((order) => {
      if (order._id === orderId && order.status === "pending") {
        return {
          ...order,
          status: "cancelled",
        };
      }
      return order;
    });
    if (updatedOrders) {
      dispatch(setOrders(updatedOrders));
    }
  };
  const handleReceive = (orderId: string) => {
    const updatedOrders = orders?.map((order) => {
      if (order._id === orderId && order.status === "pending") {
        return {
          ...order,
          status: "received",
        };
      }
      return order;
    });
    if (updatedOrders) {
      dispatch(setOrders(updatedOrders));
    }
  };

  return (
    <Box
      className="page-container"
      sx={{
        margin: "70px",
        backgroundColor: themeMode ? "white" : "black",
        padding: "20px",
        borderRadius: 8,
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      <CssBaseline />
      <OrdersTable handleCancel={handleCancel} handleReceive={handleReceive} />
    </Box>
  );
};

export default OrderManagementPage;
