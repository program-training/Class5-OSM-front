import Order from "./order";

interface OrdersTableProps {
  handleCancel: (orderId: string) => void;
  handleReceive: (orderId: string) => void;
  currentOrders: Order[];
}
export default OrdersTableProps;
