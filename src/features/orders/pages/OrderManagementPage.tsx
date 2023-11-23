// OrderManagementPage.tsx
// import React, { useState } from "react";
import Button from "@mui/material/Button";
// import FilterDialog from "../components/FilterDialog";
import OrdersTable from "../components/OrdersTable";
import "../css/OrderManagementPage.css";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
// import Order from "../interfaces/order";
import { cancelOrder, receivedOrder } from "../ordersSlice";
import Box from "@mui/material/Box";
import { CssBaseline } from "@mui/material";
import GetAllOrders from "../utils/GetAllOrders";

// interface OrdersPageProps {
//   setOrders: React.Dispatch<React.SetStateAction<Order[]>>;
// }
// { setOrders }
// : React.FC<OrdersPageProps>
const OrderManagementPage = () => {
  GetAllOrders();
  // const [openFilterDialog, setOpenFilterDialog] = useState(false);
  // const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  // const [filterStatus, setFilterStatus] = useState<string | null>(null);
  // const [filterCustomer] = useState<boolean>(false);
  // const [dateRangeStart, setDateRangeStart] = useState<string>("");
  // const [dateRangeEnd, setDateRangeEnd] = useState<string>("");
  // const orders = useAppSelector((state) => state.orders.orders);
  const dispatch = useAppDispatch();
  const themeMode = useAppSelector((store) => store.themeMode.themeMode);

  const handleCancel = (orderId: string) => {
    dispatch(cancelOrder(orderId));
  };
  const handleReceive = (orderId: string) => {
    dispatch(receivedOrder(orderId));
  };

  // const handleOpenFilterDialog = () => {
  //   setOpenFilterDialog(true);
  // };

  // const handleCloseFilterDialog = () => {
  //   setOpenFilterDialog(false);
  // };

  // const handleApplyFilters = () => {
  //   if (orders) {
  //     const filteredOrders = orders.filter((order) => {
  //       if (filterStatus && order.status !== filterStatus) {
  //         return false;
  //       }

  //       if (filterCustomer && !order.shippingDetails?.userId) {
  //         return false;
  //       }

  //       if (
  //         dateRangeStart &&
  //         order.orderTime &&
  //         new Date(order.orderTime) < new Date(dateRangeStart)
  //       ) {
  //         return false;
  //       }

  //       if (
  //         dateRangeEnd &&
  //         order.orderTime &&
  //         new Date(order.orderTime) > new Date(dateRangeEnd)
  //       ) {
  //         return false;
  //       }

  //       // Add more filters as needed

  //       return true; // Include order in the filtered list
  //     });

  //     setOrders(filteredOrders);
  //     // handleCloseFilterDialog();
  //   }
  // };

  return (
    <Box
      className="page-container"
      sx={{ margin: "70px", backgroundColor: themeMode ? "white" : "black" }}
    >
      <CssBaseline />
      <Button
        variant="outlined"
        // onClick={handleOpenFilterDialog}
        className="filter-button"
      >
        Filter
      </Button>

      {/* Filter options */}
      {/* <FilterDialog
        open={openFilterDialog}
        onClose={handleCloseFilterDialog}
        selectedFilters={selectedFilters}
        setSelectedFilters={setSelectedFilters}
        filterStatus={filterStatus}
        setFilterStatus={setFilterStatus}
        dateRangeStart={dateRangeStart}
        setDateRangeStart={setDateRangeStart}
        dateRangeEnd={dateRangeEnd}
        setDateRangeEnd={setDateRangeEnd}
        handleApplyFilters={handleApplyFilters}
        filterCustomer={false}
      />

      {/* Orders table */}
      <OrdersTable handleCancel={handleCancel} handleReceive={handleReceive} />
    </Box>
  );
};

export default OrderManagementPage;
