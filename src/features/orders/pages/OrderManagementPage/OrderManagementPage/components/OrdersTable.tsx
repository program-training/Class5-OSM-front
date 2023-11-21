import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
} from "@mui/material";
import Order from "../types/Order";
import "../css/OrdersTable.css";

interface OrdersTableProps {
  orders: Order[];
  handleCancelOrder: (orderId: string) => void;
  handleReceiveOrder: (orderId: string) => void;
}

const OrdersTable: React.FC<OrdersTableProps> = ({
  orders,
  handleCancelOrder,
  handleReceiveOrder,
}) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Order ID</TableCell>
            <TableCell>Product Name</TableCell>
            <TableCell>Quantity</TableCell>
            <TableCell>Product ID</TableCell>
            <TableCell>Order Time</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>Address</TableCell>
            <TableCell>User ID</TableCell>
            <TableCell>Contact Number</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orders.map((order) => (
            <TableRow key={order._id}>
              <TableCell>{order._id}</TableCell>
              <TableCell>
                {order.cartItems.map((item) => (
                  <div key={item._id}>
                    {item.name} - {item.description}
                  </div>
                ))}
              </TableCell>
              <TableCell>
                {order.cartItems.map((item) => (
                  <div key={item._id}>{item.quantity}</div>
                ))}
              </TableCell>
              <TableCell>
                {order.cartItems.map((item) => (
                  <div key={item._id}>{item._id}</div>
                ))}
              </TableCell>
              <TableCell>{order.orderTime.toISOString()}</TableCell>
              <TableCell>{order.status}</TableCell>
              <TableCell>{order.price}</TableCell>
              <TableCell>{order.shippingDetails.address}</TableCell>
              <TableCell>{order.shippingDetails.userId}</TableCell>
              <TableCell>{order.shippingDetails.contactNumber}</TableCell>
              <TableCell>
                {order.status === "pending" && (
                  <Button
                    variant="outlined"
                    color="secondary"
                    onClick={() => handleCancelOrder(order._id)}
                  >
                    Cancel
                  </Button>
                )}
                {order.status === "self-pickup" && (
                  <Button
                    variant="outlined"
                    color="primary"
                    onClick={() => handleReceiveOrder(order._id)}
                  >
                    Receive
                  </Button>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default OrdersTable;
