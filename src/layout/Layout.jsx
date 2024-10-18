import Footer from "@/components/Footer";
import Header from "@/components/Header/Header";
import OfferHeading from "@/components/Header/OfferHeading";
import { Outlet } from "react-router-dom/dist";

const Layout = () => {
   return (
      <div className="">
         <OfferHeading />
         <Header />
         <div className="mx-auto w-full px-4 pb-16 lg:max-w-[95%] lg:px-0 xl:max-w-[90%]">
            <Outlet />
         </div>
         <Footer />
      </div>
   );
};

export default Layout;
