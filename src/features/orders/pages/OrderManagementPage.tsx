// OrderManagementPage.tsx
import React, { useState } from "react";
import Button from "@mui/material/Button";
import FilterDialog from "../components/FilterDialog";
import OrdersTable from "../components/OrdersTable";
import "../css/OrderManagementPage.css";
import { useAppSelector } from "../../../store/hooks";
import Order from "../interfaces/order";

interface OrdersPageProps {
  setOrders: React.Dispatch<React.SetStateAction<Order[]>>;
}

const OrderManagementPage: React.FC<OrdersPageProps> = ({ setOrders }) => {
  const [openFilterDialog, setOpenFilterDialog] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [filterStatus, setFilterStatus] = useState<string | null>(null);
  const [filterCustomer] = useState<boolean>(false);
  const [dateRangeStart, setDateRangeStart] = useState<string>("");
  const [dateRangeEnd, setDateRangeEnd] = useState<string>("");
  const orders = useAppSelector((state) => state.orders.orders);

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
    if (orders) {
      const filteredOrders = orders.filter((order) => {
        if (filterStatus && order.status !== filterStatus) {
          return false;
        }

        if (filterCustomer && !order.shippingDetails?.userId) {
          return false;
        }

        if (
          dateRangeStart &&
          order.orderTime &&
          new Date(order.orderTime) < new Date(dateRangeStart)
        ) {
          return false;
        }

        if (
          dateRangeEnd &&
          order.orderTime &&
          new Date(order.orderTime) > new Date(dateRangeEnd)
        ) {
          return false;
        }

        // Add more filters as needed

        return true; // Include order in the filtered list
      });

      setOrders(filteredOrders);
      handleCloseFilterDialog();
    }
  };

  const updateOrderStatus = (orderId: string, newStatus: string) => {
    if (orders) {
      const updatedOrders = orders.map((order) =>
        order._id === orderId ? { ...order, status: newStatus } : order
      );
      setOrders(updatedOrders);
    }
  };

  return (
    <div className="page-container">
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
        dateRangeStart={dateRangeStart}
        setDateRangeStart={setDateRangeStart}
        dateRangeEnd={dateRangeEnd}
        setDateRangeEnd={setDateRangeEnd}
        handleApplyFilters={handleApplyFilters}
        filterCustomer={false}
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
