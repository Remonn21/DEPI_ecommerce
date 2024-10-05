import CartDetails from "./CartDetails";
import CartTotals from "./CartTotals";
import CartShipping from "./CartShipping";

export default function ShoppingCard() {
   return (
      <div className="my-20 grid grid-cols-1 gap-y-8 md:grid-cols-3 lg:gap-x-8">
         <div className="cart-details col-span-2">
            <CartDetails />
         </div>
         <div className="card-price">
            <h3 className="mb-10 text-center text-h6 text-blue-off">
               Cart Totals
            </h3>
            <CartTotals />
            <CartShipping />
         </div>
      </div>
   );
}
