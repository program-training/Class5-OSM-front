import OrdersTable from "../components/OrdersTable";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { cancelOrder, receivedOrder } from "../ordersSlice";
import { Container } from "@mui/material";

const OrderManagementPage = () => {
  const dispatch = useAppDispatch();
  const themeMode = useAppSelector((store) => store.themeMode.themeMode);

  const handleCancel = (orderId: string) => {
    dispatch(cancelOrder(orderId));
  };
  const handleReceive = (orderId: string) => {
    dispatch(receivedOrder(orderId));
  };

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
      <OrdersTable handleCancel={handleCancel} handleReceive={handleReceive} />
    </Container>
  );
};

export default OrderManagementPage;
