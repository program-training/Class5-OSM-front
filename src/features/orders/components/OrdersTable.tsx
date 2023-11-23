import React, { useEffect, useState } from "react";
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
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import SearchField from "./SearchField";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { setPrice } from "../ordersSlice";
import { ShoppingCartCheckoutOutlined } from "@mui/icons-material";

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

  const themeMode = useAppSelector((state) => state.themeMode.themeMode);
  const dispatch = useAppDispatch();
  useEffect(() => {
    orders.forEach((order) => {
      dispatch(setPrice(order.price));
    });
  }, [dispatch, orders]);
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
        <SearchField searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <TableContainer component={Paper}>
          <Table>
            <TableHead
              sx={{
                "&:hover": {
                  transform: "scale(1.004)",
                },
              }}
            >
              <TableRow sx={{ backgroundColor: "#8fced9" }}>
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
                  sx={{
                    transition: "background-color 0.3s",
                    cursor: "pointer",
                    "&:hover": {
                      backgroundColor: themeMode ? "#61b0fa" : "#4f4f4f",
                    },
                  }}
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
                        sx={{
                          margin: "5px",
                          ":hover": {
                            backgroundColor: "#ff2e2e",
                            color: "aliceblue",
                          },
                        }}
                        color="secondary"
                        onClick={(event) => {
                          event.stopPropagation();
                          handleCancel(order._id);
                        }}
                      >
                        cancel
                        <DeleteForeverOutlinedIcon
                          sx={{ marginLeft: "12px" }}
                        />
                      </Button>
                    )}
                    {order.shippingDetails?.orderType === "pickup" &&
                      order.status === "pending" && (
                        <Button
                          sx={{
                            margin: "5px",
                            ":hover": {
                              backgroundColor: "#66ff7f",
                              color: "aliceblue",
                            },
                          }}
                          variant="outlined"
                          color="primary"
                          onClick={(event) => {
                            event.stopPropagation();
                            handleReceive(order._id);
                          }}
                        >
                          Receive
                          <ShoppingCartCheckoutOutlined
                            sx={{ marginLeft: "8px" }}
                          />
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
