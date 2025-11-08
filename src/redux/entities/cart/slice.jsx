import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {},
  reducers: {
    addToCart: (cartState, { payload }) => {
      cartState[payload] = (cartState[payload] || 0) + 1;
    },
    removeFromCart: (cartState, { payload }) => {
      if (!cartState[payload]) {
        return cartState;
      }
      cartState[payload] = cartState[payload] - 1;
      if (cartState[payload] <= 0) {
        delete cartState[payload];
      }
    },
  },
  selectors: {
    selectCartItemsIds: (cartState) => Object.keys(cartState),
    selectCartItemAmountById: (cartState, id) => cartState[id],
  },
});

export const { selectCartItemsIds, selectCartItemAmountById } =
  cartSlice.selectors;

export const { addToCart, removeFromCart } = cartSlice.actions;
