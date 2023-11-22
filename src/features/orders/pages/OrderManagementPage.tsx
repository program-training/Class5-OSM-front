import React, { useState } from "react";
// import Button from "@mui/material/Button";
import SearchField from "../components/SearchField";
// import FilterDialog from "../components/FilterDialog";
import OrdersTable from "../components/OrdersTable";
import "../css/OrderManagementPage.css";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
// import Order from "../interfaces/order";
import { setOrders } from "../ordersSlice";

// interface OrdersPageProps {
//   setOrders: React.Dispatch<React.SetStateAction<Order[]>>;
// }

const OrderManagementPage = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  // const [openFilterDialog, setOpenFilterDialog] = useState(false);
  // const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  // const [filterStatus, setFilterStatus] = useState<string | null>(null);
  // const [filterCustomer] = useState<boolean>(false);
  // const [dateRangeStart, setDateRangeStart] = useState<string>("");
  // const [dateRangeEnd, setDateRangeEnd] = useState<string>("");
  const orders = useAppSelector((state) => state.orders.orders);
  const dispatch = useAppDispatch();

  const handleCancel = (orderId: string) => {
    const updatedOrders = orders?.map((order) => {
      if (order._id === orderId && order.status === "pending") {
        return {
          ...order,
          status: "cancelled",
        };
      }
      return order;
    });
    if (updatedOrders) {
      dispatch(setOrders(updatedOrders));
    }
  };
  const handleReceive = (orderId: string) => {
    const updatedOrders = orders?.map((order) => {
      if (order._id === orderId && order.status === "pending") {
        return {
          ...order,
          status: "received",
        };
      }
      return order;
    });
    if (updatedOrders) {
      dispatch(setOrders(updatedOrders));
    }
  };

  // const handleOpenFilterDialog = () => {
  //   setOpenFilterDialog(true);
  // };

  // const handleCloseFilterDialog = () => {
  //   setOpenFilterDialog(false);
  // };

  // const handleApplyFilters = () => {
  //   if (orders) {
  //     const filteredOrders = orders.filter(() => {
  //       // Filter logic...
  //     });

  //     setOrders(filteredOrders);
  //     handleCloseFilterDialog();
  //   }
  // };

  // const handleFilterSelectionChange = (filter: string) => {
  //   setSelectedFilters((prevFilters) => {
  //     if (prevFilters.includes(filter)) {
  //       return prevFilters.filter((f) => f !== filter);
  //     } else {
  //       return [...prevFilters, filter];
  //     }
  //   });
  // };

  return (
    <div className="page-container">
      {/* Search field */}
      <SearchField searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      {/* <Button
        variant="outlined"
        onClick={handleOpenFilterDialog}
        className="filter-button"
      >
        Filter
      </Button> */}

      {/* Filter options */}
      {/* <FilterDialog
        open={openFilterDialog}
        onClose={handleCloseFilterDialog}
        selectedFilters={selectedFilters}
        setSelectedFilters={setSelectedFilters}
        filterStatus={filterStatus}
        setFilterStatus={setFilterStatus}
        filterCustomer={filterCustomer}
        dateRangeStart={dateRangeStart}
        setDateRangeStart={setDateRangeStart}
        dateRangeEnd={dateRangeEnd}
        setDateRangeEnd={setDateRangeEnd}
        handleApplyFilters={handleApplyFilters}
        // handleFilterSelectionChange={handleFilterSelectionChange}
      /> */}

      {/* Orders table */}
      <OrdersTable handleCancel={handleCancel} handleReceive={handleReceive} />
    </div>
  );
};

export default OrderManagementPage;
