import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import UserInterface from "./interfaces/UserInterface";

interface InitialState {
  users: [];
  loggedUser: UserInterface | Record<string, unknown>;
}

const initialState: InitialState = {
  users: [],
  loggedUser: {},
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUsers: (state, action: PayloadAction<[]>) => {
      state.users = action.payload;
    },
    setLoggedUser: (state, action: PayloadAction<UserInterface>) => {
      state.loggedUser = { ...state.loggedUser, ...action.payload };
    },
  },
});

export const { setUsers, setLoggedUser } = usersSlice.actions;
export default usersSlice.reducer;
