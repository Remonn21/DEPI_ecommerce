import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slice/user.slice";
import cartReducer from "./slice/cart.slice";
import wishlistReducer from "./slice/wishlist.slice";

const store = configureStore({
   reducer: {
      user: userReducer,
      cart: cartReducer,
      wishlist: wishlistReducer,
   },
});

export default store;
