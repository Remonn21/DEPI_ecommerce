import { useDispatch } from "react-redux";
import CartItem from "./CartItem";
import { clearCart } from "@/redux/slice/cart.slice";
export default function CartDetails({ cartItems }) {
   const dispatch = useDispatch();

   const clearCartHandler = () => {
      dispatch(clearCart());
   };

   return (
      <div>
         <div className="section-header my-5 flex items-center justify-between text-body-md">
            <h2>Product</h2>
            <h2>price</h2>
            <h2>quantity</h2>
            <h2>total</h2>
         </div>
         {cartItems.map((product) => (
            <CartItem data={product} key={product._id} />
         ))}
         <div className="buttons flex justify-between">
            {/* <button className="btn mt-10 bg-pink px-7 py-3 text-white">
               Update Cart
            </button> */}
            <button
               onClick={clearCartHandler}
               className="btn mt-10 bg-pink px-7 py-3 text-white"
            >
               Clear Cart
            </button>
         </div>
      </div>
   );
}
