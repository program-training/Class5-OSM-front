import Order from "../interfaces/order";
import { updateOrderStatus } from "../ordersSlice";
import { useAppDispatch } from "../../../store/hooks";
import EditsOrderStatus from "../services/EditsOrderStatus";

const useOrder = (orders: Order[]) => {
  const dispatch = useAppDispatch();

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

  return { changeStatus };
};
export default useOrder;
