import React, { useState } from "react";
import Button from "@mui/material/Button";
import SearchField from "../components/SearchField";
import FilterDialog from "../components/FilterDialog";
import OrdersTable from "../components/OrdersTable";
import "../css/OrderManagementPage.css";
import Order from "../types/Order";
import { useAppSelector } from "../../../store/hooks";

interface OrdersPageProps {
  setOrders: React.Dispatch<React.SetStateAction<Order[]>>;
}

const OrderManagementPage: React.FC<OrdersPageProps> = ({ setOrders }) => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [openFilterDialog, setOpenFilterDialog] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [filterStatus, setFilterStatus] = useState<string | null>(null);
  const [filterCustomer] = useState<boolean>(false);
  const [dateRangeStart, setDateRangeStart] = useState<string>("");
  const [dateRangeEnd, setDateRangeEnd] = useState<string>("");
  const orders = useAppSelector((state) => state.orders.orders);

  const updateOrderStatus = (orderId: string, newStatus: string) => {
    if (orders) {
      const updatedOrders = orders.map((order) =>
        order._id === orderId ? { ...order, status: newStatus } : order
      );
      setOrders(updatedOrders);
    }
  };
  const handleCancelOrder = (orderId: string) => {
    updateOrderStatus(orderId, "cancelled");
  };

  const handleReceiveOrder = (orderId: string) => {
    updateOrderStatus(orderId, "received");
  };

  const handleOpenFilterDialog = () => {
    setOpenFilterDialog(true);
  };

  const handleCloseFilterDialog = () => {
    setOpenFilterDialog(false);
  };

  const handleApplyFilters = () => {
    const filteredOrders = orders.filter(() => {
      // Filter logic...
    });

    setOrders(filteredOrders);
    handleCloseFilterDialog();
  };

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

      {/* Filter button */}
      <Button
        variant="outlined"
        onClick={handleOpenFilterDialog}
        className="filter-button"
      >
        Filter
      </Button>

      {/* Filter options */}
      <FilterDialog
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
      />

      {/* Orders table */}
      <OrdersTable
        handleCancelOrder={handleCancelOrder}
        handleReceiveOrder={handleReceiveOrder}
      />
    </div>
  );
};

export default OrderManagementPage;
