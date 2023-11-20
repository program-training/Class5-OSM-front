import { configureStore } from "@reduxjs/toolkit";
import usersSlice from "../features/users/usersSlice";
import themeModeSlice from "../features/themes/themeModeSlice";

export const store = configureStore({
  reducer: {
    users: usersSlice,
    themeMode: themeModeSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
