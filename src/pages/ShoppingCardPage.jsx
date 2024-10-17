import { useCreateOrder } from "@/api/order.api";
import Container from "@/components/Container";
import ShoppingCard from "@/components/Shopping/ShoppingCard";
import { Header, Paragraph, SpecialHeader } from "@/components/SpecialHeader";
import { clearCart } from "@/redux/slice/cart.slice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

export default function ShoppingCardPage() {
   const { createOrder, isLoading, isSuccess } = useCreateOrder();
   const navigate = useNavigate();
   const cartItems = useSelector((state) => state.cart.items);
   const dispatch = useDispatch();

   const handlePlaceOrder = () => {
      createOrder({
         products: [...cartItems],
         paymentMethod: "visa",
         shippingAddress: "test",
      });
   };

   useEffect(() => {
      if (isSuccess) {
         dispatch(clearCart());
         navigate("/order-completed");
      }
   }, [isSuccess, dispatch, navigate]);

   return (
      <div>
         <SpecialHeader className="py-10 font-Lato">
            <Container>
               <Header className={"font-Lato"}>Shopping Cart</Header>
               <Paragraph>
                  <Link to="/">Home</Link>.<Link to="">Pages</Link>.
                  <Link to="/cart" className="text-Purple">
                     Shopping Cart
                  </Link>
               </Paragraph>
            </Container>
         </SpecialHeader>
         <Container>
            <ShoppingCard onSubmit={handlePlaceOrder} isLoading={isLoading} />
         </Container>
      </div>
   );
}
