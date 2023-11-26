import { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableContainer,
  TableHead,
  Paper,
  Container,
  Box,
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
import TablePaginationDemo from "../../helpers/a";

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
              <OrdersBodyTable
                currentOrders={currentOrders}
                handleCancel={handleCancel}
                handleReceive={handleReceive}
              />
            </TableBody>
          </Table>
        </TableContainer>
        {/* <TablePaginationDemo /> */}
        <Box component={"ul"} sx={{ listStyle: "none", padding: 2 }}>
          {renderPageNumbers}
        </Box>
      </Box>
    </Container>
  );
};

export default OrdersTable;
