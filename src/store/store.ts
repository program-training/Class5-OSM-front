import { configureStore } from "@reduxjs/toolkit";
import usersSlice from "../features/users/usersSlice";
import themeModeSlice from "../features/themes/themeModeSlice";
import ordersSlice from "../features/orders/ordersSlice";

export const store = configureStore({
  reducer: {
    users: usersSlice,
    themeMode: themeModeSlice,
    orders: ordersSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
