import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface InitialState {
  password: string;
}

const initialState: InitialState = {
  password: "",
};

export const passwordSlice = createSlice({
  name: "password",
  initialState,
  reducers: {
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
  },
});

export const { setPassword } = passwordSlice.actions;
export default passwordSlice.reducer;
