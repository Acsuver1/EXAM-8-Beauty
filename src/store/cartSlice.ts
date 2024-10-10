// src/store/cartSlice.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define the Product type
export interface Product {
  id: number;
  name: string;
  price: string;
  price_sign: string;
  image_link: string;
  brand?: string;
  category?: string;
  rating?: number | null;
  description?: string;
  product_link?: string;
  // Add other fields as necessary
}

// Define the CartState interface
interface CartState {
  items: Product[];
}

// Initialize the cart state
const initialState: CartState = {
  items: [],
};

// Create the cart slice
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<Product>) {
      // Check if the item already exists in the cart
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (!existingItem) {
        state.items.push(action.payload);
      } else {
        // Optionally, handle quantity if you plan to have multiple quantities
        // For simplicity, we're not handling quantities here
      }
    },
    removeFromCart(state, action: PayloadAction<number>) {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    clearCart(state) {
      state.items = [];
    },
  },
});

// Export actions and reducer
export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
