// OrdersTable.tsx
import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Box,
} from "@mui/material";
import SearchField from "./SearchField"; // Adjust the path based on your project structure
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../../store/hooks";
// import GetAllOrders from "../utils/GetAllOrders";
// import GetAllOrders from "../utils/GetAllOrders";
// import { useEffect } from "react";

interface OrdersTableProps {
  handleCancel: (orderId: string) => void;
  handleReceive: (orderId: string) => void;
}

const OrdersTable: React.FC<OrdersTableProps> = ({
  handleCancel,
  handleReceive,
}) => {
  const navigate = useNavigate();
  const orders = useAppSelector((state) => state.orders.orders);

  const [searchTerm, setSearchTerm] = useState("");

  const filteredOrders = orders
    ? orders.filter((order) => {
        const searchValue = searchTerm.toLowerCase();
        return (
          String(order._id).toLowerCase().includes(searchValue) ||
          String(order.shippingDetails?.userId)
            .toLowerCase()
            .includes(searchValue)
        );
      })
    : [];

  if (orders && !orders.length) return <p>No orders found!</p>;

  if (orders && orders.length)
    return (
      <Box>
        {/* Search Bar */}
        <SearchField searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        {/* Orders Table */}
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow style={{ backgroundColor: "lightblue" }}>
                <TableCell>Order Time</TableCell>
                <TableCell>Order ID</TableCell>
                <TableCell>User ID</TableCell>
                <TableCell>Address</TableCell>
                <TableCell>Contact Number</TableCell>
                <TableCell>Order Type</TableCell>
                <TableCell>Price</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredOrders.map((order) => (
                <TableRow
                  key={order._id}
                  onClick={() =>
                    navigate("/orderDetails", {
                      state: { cartItems: order.cartItems, userId: order._id },
                    })
                  }
                >
                  <TableCell>{order.orderTime?.toString()}</TableCell>
                  <TableCell>{order?._id}</TableCell>
                  <TableCell>{order.shippingDetails?.userId}</TableCell>
                  <TableCell>{order.shippingDetails?.address}</TableCell>
                  <TableCell>{order.shippingDetails?.contactNumber}</TableCell>
                  <TableCell>{order.shippingDetails?.orderType}</TableCell>
                  <TableCell>{order.price}</TableCell>
                  <TableCell>{order.status}</TableCell>
                  <TableCell>
                    {order.status === "pending" && (
                      <Button
                        variant="outlined"
                        color="secondary"
                        onClick={(event) => {
                          event.stopPropagation();
                          handleCancel(order._id);
                        }}
                      >
                        Cancel
                      </Button>
                    )}
                    {order.shippingDetails?.orderType === "pickup" &&
                      order.status === "pending" && (
                        <Button
                          variant="outlined"
                          color="primary"
                          onClick={(event) => {
                            event.stopPropagation();
                            handleReceive(order._id);
                          }}
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
      </Box>
    );
};

export default OrdersTable;
