import React from "react";
import { TableCell, TableRow, TableBody } from "@mui/material";

import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../../../store/hooks";
import { setPrice } from "../../../ordersSlice";
import OrdersTableProps from "../../../interfaces/ordersTableProps";
import OrdersButtonTable from "./OrdersButtonTable";
import OrdersCancelReceive from "./OrdersCancelReceive";

const OrdersBodyTable: React.FC<OrdersTableProps> = ({ currentOrders }) => {
  const navigate = useNavigate();
  const themeMode = useAppSelector((state) => state.themeMode.themeMode);
  const dispatch = useAppDispatch();
  return (
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
              <OrdersCancelReceive order={order} />
            </TableCell>
            <TableCell sx={{ margin: 2, padding: 0, textAlign: "center" }}>
              <OrdersButtonTable order={order} />
            </TableCell>
          </TableRow>
        ))}
    </TableBody>
  );
};

export default OrdersBodyTable;
