import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   items: [],
   total: 0,
};

const cartSlice = createSlice({
   name: "cart",
   initialState,
   reducers: {
      addToCart(state, action) {
         const prodcut = action.payload;
         const existingItem = state.items.find(
            (item) => prodcut._id === item._id,
         );
         if (existingItem) {
            existingItem.quantity += prodcut.quantity;
         } else {
            state.items.push(prodcut);
         }
         state.total += prodcut.price * prodcut.quantity;
      },
      removeFromCart(state, action) {
         const { id, quantity } = action.payload;
         const existingItem = state.items.find((item) => item._id === id);
         if (existingItem) {
            if (quantity && existingItem.quantity > quantity) {
               existingItem.quantity -= quantity;
               state.total -= existingItem.price * quantity;
            } else {
               state.total -= existingItem.price * existingItem.quantity;
               state.items = state.items.filter((item) => item._id !== id);
            }
         }
      },
      clearCart(state) {
         state.items = [];
         state.total = 0;
      },
   },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
