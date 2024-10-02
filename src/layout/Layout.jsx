import Footer from "@/components/Footer";
import Header from "@/components/Header";
import OfferHeading from "@/components/OfferHeading";
import { Outlet } from "react-router-dom/dist";

const Layout = () => {
   return (
      <div className="">
         <OfferHeading />
         <Header />
         <div className="mx-auto max-w-screen-xl px-8 pb-16 md:px-4">
            <Outlet />
         </div>
         <Footer />
      </div>
   );
};

export default Layout;
