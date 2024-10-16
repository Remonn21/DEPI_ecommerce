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
         const item = action.payload;
         const existingItem = state.items.find((item) => item.id === item.id);
         if (existingItem) {
            existingItem.quantity += item.quantity;
         } else {
            state.items.push(item);
         }
         state.total += item.price * item.quantity;
      },
      removeFromCart(state, action) {
         const itemId = action.payload;
         const item = state.items.find((item) => item.id === itemId);
         if (item) {
            state.total -= item.price * item.quantity;
            state.items = state.items.filter((item) => item.id !== itemId);
         }
      },
   },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
