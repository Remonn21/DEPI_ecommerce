/* eslint-disable react/prop-types */
import { useState } from "react";

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
   const [quantity, setQuantity] = useState(data.quantity ? data.quantity : 0);
   const handleChange = (e) => {
      console.log(e);
      console.log(e.target);

      e.target.value == "+"
         ? setQuantity((prev) => prev + 1)
         : setQuantity((prev) => prev - 1);
   };
   return (
      <article className="border-grey-off my-5 flex items-center justify-between border-b-2 pb-3">
         <div className="product flex items-center gap-5">
            <div className="img-holder relative">
               <img src={data.image} alt="" />
               <button className="absolute -right-1 -top-2 rounded-full bg-black px-1 text-small-md text-white">
                  X
               </button>
            </div>
            <div className="">
               <h3>{data.name}</h3>
               <p className="text-grey">Color: {data.color}</p>
               <p className="text-grey">Size: {data.size}</p>
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
                  <span className="bg-grey-off text-grey px-3">{quantity}</span>
                  <button
                     className="bg-grey-dark text-off px-2"
                     onClick={(e) => handleChange(e)}
                     value={"+"}
                  >
                     +
                  </button>
               </div>
               <h3>${data.price * quantity}</h3>
            </>
         )}
      </article>
   );
}
