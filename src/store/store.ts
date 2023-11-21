import { configureStore } from "@reduxjs/toolkit";
import usersSlice from "../features/users/usersSlice";
import themeModeSlice from "../features/themes/themeModeSlice";
import passwordSlice from "../features/users/components/signUpComponents/passwordSlice";

export const store = configureStore({
  reducer: {
    users: usersSlice,
    themeMode: themeModeSlice,
    password: passwordSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
