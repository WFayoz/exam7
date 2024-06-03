import { createSlice } from "@reduxjs/toolkit";
import Data from "../services/data";

const initialState = {
  products: Data,
  amount: 2,
  total: 0,
};

const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    increaseAmount: (state, { payload }) => {
      const item = state.products.find((item) => item.id === payload.id);
      if (item) {
        item.amount++;
      }
    },
    decreaseAmount: (state, { payload }) => {
      const item = state.products.find((item) => item.id === payload.id);
      if (item && item.amount > 0) {
        item.amount--;
      }
    },
    removeItem: (state, { payload }) => {
      state.products = state.products.filter(
        (item) => item.id !== payload.id
      );
    },
  },
});

export const { increaseAmount, decreaseAmount, removeItem } = basketSlice.actions;

export default basketSlice.reducer;
