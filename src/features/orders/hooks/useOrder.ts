import Order from "../interfaces/order";
import { cancelOrder, receivedOrder, updateOrderStatus } from "../ordersSlice";
import { useAppDispatch } from "../../../store/hooks";

const useOrder = (orders: Order[]) => {
  const dispatch = useAppDispatch();

  const handleCancel = (orderId: string) => {
    dispatch(cancelOrder(orderId));
  };
  const handleReceive = (orderId: string) => {
    dispatch(receivedOrder(orderId));
  };

  const changeStatus = () => {
    const pendingOrders = orders.filter((order) => order.status === "pending");
    pendingOrders.forEach((order) => {
      dispatch(updateOrderStatus({ orderId: order._id, newStatus: "sent" }));
    });

    const sentOrders = orders.filter((order) => order.status === "sent");
    sentOrders.forEach((order) => {
      dispatch(
        updateOrderStatus({ orderId: order._id, newStatus: "received" })
      );
    });
  };

  return { changeStatus, handleCancel, handleReceive };
};
export default useOrder;
