/* eslint-disable react/prop-types */
import { addToCart, removeFromCart } from "@/redux/slice/cart.slice";
import { useDispatch } from "react-redux";

export default function CartItem({
   //  id,
   //  name,
   //  price,
   //  quantity,
   //  img,
   //  color,
   //  size,
   data,
}) {
   const dispatch = useDispatch();

   const handleChange = (e) => {
      console.log(e);
      console.log(e.target);

      e.target.value == "+"
         ? dispatch(addToCart({ ...data, quantity: 1 }))
         : dispatch(removeFromCart({ id: data._id, quantity: 1 }));
   };

   const removeItemHandler = () => {
      dispatch(removeFromCart(data._id));
   };

   return (
      <article className="border-grey-off my-5 flex items-center justify-between border-b-2 pb-3">
         <div className="product flex items-center gap-5">
            <div className="img-holder relative">
               <img
                  src={data.images[0]}
                  className="h-[100px] w-[100px]"
                  alt=""
               />
               <button
                  onClick={removeItemHandler}
                  className="absolute -right-1 -top-2 rounded-full bg-black px-1 text-small-md text-white"
               >
                  X
               </button>
            </div>
            <div className="">
               <h3>{data.name}</h3>
               {/* <p className="text-grey">Color: {data.color}</p>
               <p className="text-grey">Size: {data.size}</p> */}
            </div>
         </div>
         <h3>${data.price}</h3>
         {data.quantity && (
            <>
               <div className="quantity p-0">
                  <button
                     className="bg-grey-dark text-off px-2"
                     onClick={(e) => handleChange(e)}
                     value={"-"}
                  >
                     -
                  </button>
                  <span className="bg-grey-off text-grey px-3">
                     {data.quantity}
                  </span>
                  <button
                     className="bg-grey-dark text-off px-2"
                     onClick={(e) => handleChange(e)}
                     value={"+"}
                  >
                     +
                  </button>
               </div>
               <h3>${data.price * data.quantity}</h3>
            </>
         )}
      </article>
   );
}
