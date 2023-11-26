import { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableContainer,
  TableHead,
  Paper,
  Container,
  Box,
  TablePagination,
} from "@mui/material";
import SearchField from "../ordersTable/SearchField";
import { useAppDispatch, useAppSelector } from "../../../../store/hooks";
import {
  cancelOrder,
  receivedOrder,
  updateOrderStatus,
} from "../../ordersSlice";
import OrdersTableHead from "../ordersTable/OrdersTableHead";
import OrdersBodyTable from "../ordersTable/OrdersBodyTable";
import React from "react";

const OrdersTable = () => {
  const handleCancel = (orderId: string) => {
    dispatch(cancelOrder(orderId));
  };
  const handleReceive = (orderId: string) => {
    dispatch(receivedOrder(orderId));
  };
  const orders = useAppSelector((state) => state.orders.filteredOrders);
  const dispatch = useAppDispatch();
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

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

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const data =
    rowsPerPage > 0
      ? filteredOrders.slice(
          page * rowsPerPage,
          page * rowsPerPage + rowsPerPage
        )
      : filteredOrders;

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
              <OrdersBodyTable
                currentOrders={data}
                handleCancel={handleCancel}
                handleReceive={handleReceive}
              />
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          component="div"
          count={orders.length}
          page={page}
          onPageChange={handleChangePage}
          rowsPerPage={rowsPerPage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Box>
    </Container>
  );
};

export default OrdersTable;
