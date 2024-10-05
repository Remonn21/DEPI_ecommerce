import Container from "@/components/Container";
import ShoppingCard from "@/components/Shopping/ShoppingCard";
import { Header, Paragraph, SpecialHeader } from "@/components/SpecialHeader";
import { Link } from "react-router-dom";

export default function ShoppingCardPage() {
   return (
      <div>
         <SpecialHeader className="py-10 font-Lato">
            <Container>
               <Header className={"font-Lato"}>Shopping Cart</Header>
               <Paragraph>
                  <Link to="/">Home</Link>.<Link to="">Pages</Link>.
                  <Link to="/shopping-cart" className="text-Purple">
                     Shopping Cart
                  </Link>
               </Paragraph>
            </Container>
         </SpecialHeader>
         <Container>
            <ShoppingCard />
         </Container>
      </div>
   );
}
