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
  Container,
  Box,
} from "@mui/material";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import EditIcon from "@mui/icons-material/Edit";
import SearchField from "./SearchField";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { setPrice, updateOrderStatus } from "../ordersSlice";
import { ShoppingCartCheckoutOutlined } from "@mui/icons-material";
import OrdersTableProps from "../interfaces/ordersTableProps";
import OrdersTableHead from "./OrdersTableHead";

const OrdersTable: React.FC<OrdersTableProps> = ({
  handleCancel,
  handleReceive,
}) => {
  const navigate = useNavigate();
  const orders = useAppSelector((state) => state.orders.filteredOrders);
  const themeMode = useAppSelector((state) => state.themeMode.themeMode);
  const dispatch = useAppDispatch();
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const ordersPerPage = 10;

  useEffect(() => {
    const timeoutCallback = () => {
      const pendingOrders = orders.filter(
        (order) => order.status === "pending"
      );
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
    <Box
      component={"li"}
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
    </Box>
  ));

  return (
    <Container>
      <Box sx={{ textAlign: "center" }}>
        <SearchField searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <OrdersTableHead />
            </TableHead>
            <TableBody>
              {currentOrders &&
                currentOrders.map((order, i) => (
                  <TableRow
                    sx={{
                      cursor: "pointer",
                      "&:hover": {
                        transition: "0.3s",
                        backgroundColor: themeMode ? "#61B0FA" : "#4F4F4F",
                      },
                      backgroundColor: themeMode
                        ? i % 2 === 0
                          ? "#F5F5F5"
                          : "#E6E6FF"
                        : i % 2 === 0
                        ? "#3A3A3B"
                        : "#262729",
                    }}
                    key={order._id}
                    onClick={() => {
                      dispatch(setPrice(order.price));
                      navigate("/orderDetails", {
                        state: {
                          cartItems: order.cartItems,
                          userId: order._id,
                        },
                      });
                    }}
                  >
                    <TableCell sx={{ textAlign: "center" }}>
                      {order.orderTime?.toString().slice(0, -14)}
                    </TableCell>
                    <TableCell sx={{ textAlign: "center" }}>
                      {order.shippingDetails?.userId}
                    </TableCell>
                    <TableCell sx={{ textAlign: "center" }}>
                      {order.shippingDetails?.address}
                    </TableCell>
                    <TableCell sx={{ textAlign: "center" }}>
                      {order.shippingDetails?.contactNumber}
                    </TableCell>
                    <TableCell sx={{ textAlign: "center" }}>
                      {order.shippingDetails?.orderType}
                    </TableCell>
                    <TableCell sx={{ textAlign: "center" }}>
                      {order.price}
                    </TableCell>
                    <TableCell
                      sx={{
                        textAlign: "center",
                        color:
                          order.status === "pending"
                            ? "orange"
                            : order.status === "sent"
                            ? "#2688EB"
                            : order.status === "canceled"
                            ? "red"
                            : order.status === "received"
                            ? "#5AF542"
                            : "inherit",
                      }}
                    >
                      {order.status}
                    </TableCell>
                    <TableCell sx={{ textAlign: "center" }}>
                      {order.status === "pending" && (
                        <Button
                          variant="outlined"
                          sx={{
                            margin: "2px",
                            ":hover": {
                              backgroundColor: "#FF2E2E",
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
                                backgroundColor: "#66FF7F",
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
                    <TableCell
                      sx={{ margin: 2, padding: 0, textAlign: "center" }}
                    >
                      {order.status === "pending" && (
                        <Button>
                          <EditIcon />
                        </Button>
                      )}
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Box component={"ul"} sx={{ listStyle: "none", padding: 2 }}>
          {renderPageNumbers}
        </Box>
      </Box>
    </Container>
  );
};

export default OrdersTable;
