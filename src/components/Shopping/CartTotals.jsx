import { CircleCheck } from "lucide-react";

export default function CartTotals() {
   return (
      <div className="">
         <div id="total" className="bg-Purple-pantone p-10">
            <div
               id="subtotal"
               className="border-grey-off flex justify-between border-b-2 pb-3 text-navyBlue"
            >
               <p className="">Subtotals:</p>
               <p>$260.00</p>
            </div>
            <div
               id="subtotal"
               className="border-grey-off my-8 flex justify-between border-b-2 pb-3 text-navyBlue"
            >
               <p className="">Totals:</p>
               <p>$260.00</p>
            </div>
            <p className="text-grey text-small-md">
               <CircleCheck className="text-green mr-2 inline-block text-small-sm" />
               Shipping & taxes calculated at checkout
            </p>
            <button className="btn bg-green mt-10 w-full p-3 text-white">
               Proceed to Checkout
            </button>
         </div>
      </div>
   );
}
