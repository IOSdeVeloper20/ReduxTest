import { configureStore } from "@reduxjs/toolkit";
import bankReducer from "../Redux/Slicer";

const store = configureStore({
  reducer: {
    bank: bankReducer,
  },
});
export default store;
