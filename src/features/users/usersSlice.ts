import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface InitialState {
  users: [];
  signUpObject: object;
}

const initialState: InitialState = {
  users: [],
  signUpObject: {},
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUsers: (state, action: PayloadAction<[]>) => {
      state.users = action.payload;
    },
    setSignUpObject: (state, action: PayloadAction<object>) => {
      state.signUpObject = { ...state.signUpObject, ...action.payload };
    },
  },
});

export const { setUsers, setSignUpObject } = usersSlice.actions;
export default usersSlice.reducer;
