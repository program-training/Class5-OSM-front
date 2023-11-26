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
  Container,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import SearchField from "./SearchField";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { setPrice } from "../ordersSlice";
import { ShoppingCartCheckoutOutlined } from "@mui/icons-material";
// import ProductCarousel from "./ProductCarousel";

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

  if (orders && !orders.length) return <p>No orders found!</p>;

  if (orders && orders.length)
    // ... המשך קוד הטבלה כפי שהוא כרגע

    return (
      <Container>
        <Box sx={{ textAlign: "center" }}>
          <SearchField searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow
                  sx={{
                    backgroundColor: "#6daab5",
                    fontSize: "500px",
                    textAlign: "center",
                  }}
                >
                  <TableCell sx={{ fontSize: "20px", textAlign: "center" }}>
                    Order Time
                  </TableCell>
                  <TableCell sx={{ fontSize: "20px", textAlign: "center" }}>
                    User ID
                  </TableCell>
                  <TableCell sx={{ fontSize: "20px", textAlign: "center" }}>
                    Address
                  </TableCell>
                  <TableCell sx={{ fontSize: "20px", textAlign: "center" }}>
                    Contact Number
                  </TableCell>
                  <TableCell sx={{ fontSize: "20px", textAlign: "center" }}>
                    Order Type
                  </TableCell>
                  <TableCell sx={{ fontSize: "20px", textAlign: "center" }}>
                    Price
                  </TableCell>
                  <TableCell sx={{ fontSize: "20px", textAlign: "center" }}>
                    Status
                  </TableCell>
                  <TableCell sx={{ fontSize: "20px", textAlign: "center" }}>
                    Action
                  </TableCell>
                  <TableCell sx={{ fontSize: "20px", textAlign: "center" }}>
                    Edit order
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

                    <TableCell sx={{ textAlign: "center" }}>
                      {order.status === "pending" && (
                        <Button
                          variant="outlined"
                          sx={{
                            margin: "2px",
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
                    <TableCell
                      sx={{ margin: 2, padding: 0, textAlign: "center" }}
                    >
                      <Button>
                        <EditIcon />
                      </Button>
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
