import React, { useState, useEffect } from "react";
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
import { setPrice, updateOrderStatus } from "../ordersSlice";
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
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const ordersPerPage = 10;

  useEffect(() => {
    const timeoutCallback = () => {
      // עדכון הסטטוס
      const pendingOrders = orders.filter(
        (order) => order.status === "pending"
      );
      pendingOrders.forEach((order) => {
        dispatch(updateOrderStatus({ orderId: order._id, newStatus: "sent" }));
      });

      // עדכון הסטטוס
      const sentOrders = orders.filter((order) => order.status === "sent");
      sentOrders.forEach((order) => {
        dispatch(
          updateOrderStatus({ orderId: order._id, newStatus: "received" })
        );
      });
    };

    const timeoutId = setTimeout(timeoutCallback, 10000);

    return () => clearTimeout(timeoutId);
  }, [orders]);

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

  const indexOfLastOrder = currentPage * ordersPerPage;
  const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
  const currentOrders = filteredOrders.slice(
    indexOfFirstOrder,
    indexOfLastOrder
  );

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(filteredOrders.length / ordersPerPage); i++) {
    pageNumbers.push(i);
  }

  const renderPageNumbers = pageNumbers.map((number) => (
    <li
      key={number}
      onClick={() => setCurrentPage(number)}
      style={{
        display: "inline",
        padding: "10px",
        cursor: "pointer",
        backgroundColor: currentPage === number ? "lightblue" : "inherit",
      }}
    >
      {number}
    </li>
  ));

  if (orders && !orders.length) return <p>No orders found!</p>;

  if (orders && orders.length)
    return (
      <Box>
        <SearchField searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow sx={{ backgroundColor: "#6daab5", fontSize: "500px" }}>
                <TableCell sx={{ minWidth: 100, fontSize: "20px" }}>
                  Order Time
                </TableCell>
                <TableCell sx={{ minWidth: 100, fontSize: "20px" }}>
                  Order ID
                </TableCell>
                <TableCell sx={{ minWidth: 100, fontSize: "20px" }}>
                  User ID
                </TableCell>
                <TableCell sx={{ minWidth: 100, fontSize: "20px" }}>
                  Address
                </TableCell>
                <TableCell sx={{ minWidth: 100, fontSize: "20px" }}>
                  Contact Number
                </TableCell>
                <TableCell sx={{ minWidth: 100, fontSize: "20px" }}>
                  Order Type
                </TableCell>
                <TableCell sx={{ minWidth: 100, fontSize: "20px" }}>
                  Price
                </TableCell>
                <TableCell sx={{ minWidth: 100, fontSize: "20px" }}>
                  Status
                </TableCell>
                <TableCell sx={{ minWidth: 100, fontSize: "20px" }}>
                  Action
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {currentOrders.map((order, i) => (
                <TableRow
                  sx={{
                    cursor: "pointer",
                    "&:hover": {
                      transition: "0.3s",
                      backgroundColor: themeMode ? "#61b0fa" : "#4f4f4f",
                    },
                    backgroundColor: themeMode
                      ? i % 2 === 0
                        ? "#f5f5f5"
                        : "#e6e6ff"
                      : i % 2 === 0
                      ? "#3a3a3b"
                      : "#262729",
                  }}
                  key={order._id}
                  onClick={() => {
                    dispatch(setPrice(order.price));
                    navigate("/orderDetails", {
                      state: { cartItems: order.cartItems, userId: order._id },
                    });
                  }}
                >
                  <TableCell>{order.orderTime?.toString()}</TableCell>
                  <TableCell>{order._id}</TableCell>
                  <TableCell>{order.shippingDetails?.userId}</TableCell>
                  <TableCell>{order.shippingDetails?.address}</TableCell>
                  <TableCell>{order.shippingDetails?.contactNumber}</TableCell>
                  <TableCell>{order.shippingDetails?.orderType}</TableCell>
                  <TableCell>{order.price}</TableCell>
                  <TableCell
                    sx={{
                      color:
                        order.status === "pending"
                          ? "orange"
                          : order.status === "sent"
                          ? "#2688eb"
                          : order.status === "canceled"
                          ? "red"
                          : order.status === "received"
                          ? "#5af542"
                          : "inherit",
                    }}
                  >
                    {order.status}
                  </TableCell>
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
                          sx={{ marginLeft: "13px" }}
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

        <ul style={{ listStyle: "none" }}>{renderPageNumbers}</ul>
      </Box>
    );
};

export default OrdersTable;
