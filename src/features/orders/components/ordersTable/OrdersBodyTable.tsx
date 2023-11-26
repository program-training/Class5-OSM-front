import React from "react";
import { TableCell, TableRow, Button } from "@mui/material";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import EditIcon from "@mui/icons-material/Edit";

import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../../store/hooks";
import { setPrice } from "../../ordersSlice";
import { ShoppingCartCheckoutOutlined } from "@mui/icons-material";
import OrdersTableProps from "../../interfaces/ordersTableProps";

const OrdersBodyTable: React.FC<OrdersTableProps> = ({
  handleCancel,
  handleReceive,
  currentOrders,
}) => {
  const navigate = useNavigate();
  const themeMode = useAppSelector((state) => state.themeMode.themeMode);
  const dispatch = useAppDispatch();
  return (
    <>
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
            <TableCell sx={{ textAlign: "center" }}>{order.price}</TableCell>
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
                  <DeleteForeverOutlinedIcon sx={{ marginLeft: "12px" }} />
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
                    <ShoppingCartCheckoutOutlined sx={{ marginLeft: "8px" }} />
                  </Button>
                )}
            </TableCell>
            <TableCell sx={{ margin: 2, padding: 0, textAlign: "center" }}>
              {order.status === "pending" && (
                <Button
                  onClick={(event) => {
                    event.stopPropagation();
                    navigate("/EditOrderPage");
                  }}
                >
                  <EditIcon />
                </Button>
              )}
            </TableCell>
          </TableRow>
        ))}
    </>
  );
};

export default OrdersBodyTable;
