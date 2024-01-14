import { createSlice } from "@reduxjs/toolkit";

import { CartItem } from "../common/commonTypes";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    open: false,
    cartItems: [] as CartItem[],
  },
  reducers: {
    toggleCart: (state, action) => {
      state.open = action.payload;
    },
    addAllCartItems: (state, action) => {
      state.cartItems = action.payload;
    },
    addCartItems: (state, action) => {
      const { id } = action.payload;
      const existingItemIndex = state.cartItems.findIndex(
        (item) => item?.id === id
      );

      if (existingItemIndex !== -1) {
        state.cartItems[existingItemIndex] = {
          ...state.cartItems[existingItemIndex],
          quantity: state.cartItems[existingItemIndex]?.quantity! + 1,
        };
      } else {
        state.cartItems.push({ ...action.payload, quantity: 1 });
      }
    },
    updateCartItemQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const existingItemIndex = state.cartItems.findIndex(
        (item) => item.id === id
      );

      if (existingItemIndex !== -1) {
        state.cartItems[existingItemIndex] = {
          ...state.cartItems[existingItemIndex],
          quantity,
        };
      }
    },
    removeCartItem: (state, action) => {
      const { id } = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== id);
    },
  },
});

export const {
  toggleCart,
  addCartItems,
  updateCartItemQuantity,
  removeCartItem,
  addAllCartItems,
} = cartSlice.actions;
export default cartSlice.reducer;
