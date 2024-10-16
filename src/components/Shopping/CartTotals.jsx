import { CircleCheck } from "lucide-react";

export default function CartTotals({ totalAmount }) {
   return (
      <div className="">
         <div id="total" className="bg-Purple-pantone p-10">
            <div
               id="subtotal"
               className="border-grey-off flex justify-between border-b-2 pb-3 text-navyBlue"
            >
               <p className="">Subtotals:</p>
               <p>${totalAmount.toFixed(2)}</p>
            </div>
            <div
               id="subtotal"
               className="border-grey-off my-8 flex justify-between border-b-2 pb-3 text-navyBlue"
            >
               <p className="">Totals:</p>
               <p>${totalAmount.toFixed(2)}</p>
            </div>
            <p className="text-grey text-small-md">
               <CircleCheck className="mr-2 inline-block text-small-sm text-green" />
               Shipping & taxes calculated at checkout
            </p>
            <button className="btn mt-10 w-full bg-green p-3 text-white">
               Proceed to Checkout
            </button>
         </div>
      </div>
   );
}
