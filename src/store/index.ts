import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import likesReducer from './likesSlice';

const store = configureStore({
  reducer: {
    cart: cartReducer,
    likes: likesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
