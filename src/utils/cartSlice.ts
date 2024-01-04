import { createSlice } from "@reduxjs/toolkit";

import { CartItem } from "../common/commonTypes";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    open: false,
    cartItems: new Map(),
  },
  reducers: {
    toggleCart: (state, action) => {
      state.open = action.payload;
    },
    addCartItems: (state, action) => {
      const { id } = action.payload;
      const existingItem = state.cartItems.get(id);

      if (existingItem) {
        state.cartItems.set(id, {
          ...existingItem,
          quantity: existingItem?.quantity! + 1,
        });
      } else {
        state.cartItems.set(id, { ...action.payload, quantity: 1 });
      }
    },
    updateCartItemQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const existingItem = state.cartItems.get(id);

      if (existingItem) {
        state.cartItems.set(id, { ...existingItem, quantity });
      }
    },
  },
});

export const { toggleCart, addCartItems, updateCartItemQuantity } =
  cartSlice.actions;
export default cartSlice.reducer;
