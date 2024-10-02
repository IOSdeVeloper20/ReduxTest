import { createSlice } from "@reduxjs/toolkit";

const initialState = { value: 0 };

const bankcSlicer = createSlice({
  name: "bank",
  initialState,
  reducers: {
    Deposite: (state, action) => {
      state.value += action.payload;
    },
    Withdraw: (state, action) => {
      state.value -= action.payload;
    },
  },
});

export const { Deposite, Withdraw } = bankcSlicer.actions;
export default bankcSlicer.reducer;
