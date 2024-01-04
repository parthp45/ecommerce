import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import { enableMapSet } from "immer";

enableMapSet();
const appStore = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default appStore;
export type RootState = ReturnType<typeof appStore.getState>;
