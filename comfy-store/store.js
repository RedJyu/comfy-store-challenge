import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './src/features/Cart/cartSlice';
export const store = configureStore({
  reducer: {
    cartState: cartReducer,
  },
});
