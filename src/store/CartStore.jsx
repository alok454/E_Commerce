import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './slice/CartSlice';

export const CartStore = configureStore({
  reducer: {
    cart: cartReducer,
  }
});

