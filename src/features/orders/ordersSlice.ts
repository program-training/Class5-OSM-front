import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import Order from "./interfaces/order";

interface InitialState {
  orders: Order[];
  order: Order;
  filteredOrders: Order[];
}

const initialState: InitialState = {
  orders: [],
  order: {} as Order,
  filteredOrders: [],
};

export const ordersSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    setOrders: (state, action: PayloadAction<Order[]>) => {
      state.orders = action.payload;
    },
    setOrder: (state, action: PayloadAction<Order>) => {
      state.order = action.payload;
    },
    cancelOrder: (state, action: PayloadAction<string>) => {
      const order = state.orders.find((o) => o._id === action.payload);
      if (order) order.status = "cancelled";
      state.orders = [...state.orders];
    },
    receivedOrder: (state, action: PayloadAction<string>) => {
      const order = state.orders.find((o) => o._id === action.payload);
      if (order) order.status = "received";
      state.orders = [...state.orders];
    },
    updateOrderStatus: (
      state,
      action: PayloadAction<{ orderId: string; newStatus: string }>
    ) => {
      const { orderId, newStatus } = action.payload;
      const order = state.orders.find((o) => o._id === orderId);

      if (order) {
        order.status = newStatus;
        state.orders = [...state.orders];
      }
    },
    updateOrderDetails: (
      state,
      action: PayloadAction<{
        orderId: string;
        newDetails: {
          address: string;
          contactNumber: string;
          orderType: string;
        };
      }>
    ) => {
      const { orderId, newDetails } = action.payload;
      const order = state.orders.find((o) => o._id === orderId);

      if (order) {
        order.shippingDetails.address = newDetails.address;
        order.shippingDetails.contactNumber = newDetails.contactNumber;
        order.shippingDetails.orderType = newDetails.orderType;
        state.orders = [...state.orders];
      }
    },
    setFilteredOrders: (state, action: PayloadAction<Order[]>) => {
      state.filteredOrders = action.payload;
    },
  },
});

export const {
  setOrders,
  cancelOrder,
  receivedOrder,
  setOrder,
  updateOrderStatus,
  updateOrderDetails,
  setFilteredOrders,
} = ordersSlice.actions;
export default ordersSlice.reducer;
