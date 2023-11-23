import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import Order from "./interfaces/order";

interface InitialState {
  orders: Order[];
}

const initialState: InitialState = {
  orders: [],
};

export const ordersSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    setOrders: (state, action: PayloadAction<Order[]>) => {
      state.orders = action.payload;
    },
    cancelOrder: (state, action: PayloadAction<string>) => {
      const order = state.orders.find((o) => o._id === action.payload);
      if (order) order.status = "canceled";
      state.orders = [...state.orders];
    },
    receivedOrder: (state, action: PayloadAction<string>) => {
      const order = state.orders.find((o) => o._id === action.payload);
      if (order) order.status = "received";
      state.orders = [...state.orders];
    },
  },
});

export const { setOrders, cancelOrder, receivedOrder } = ordersSlice.actions;
export default ordersSlice.reducer;
