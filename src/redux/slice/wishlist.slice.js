import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   items: [],
};

const wishlistSlice = createSlice({
   name: "wishlist",
   initialState,
   reducers: {
      toggleWishList(state, action) {
         const itemId = action.payload;
         console.log("testing", itemId);
         if (!state.items.find((id) => id === itemId)) {
            state.items.push(itemId);
         } else {
            state.items = state.items.filter((id) => id !== itemId);
         }
      },
      //   removeFromWishlist(state, action) {
      //      const id = action.payload;
      //      state.items = state.items.filter((i) => i.id !== id);
      //   },
   },
});

export const { toggleWishList } = wishlistSlice.actions;
export default wishlistSlice.reducer;
