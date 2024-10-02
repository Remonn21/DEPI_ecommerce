import DesktopNav from "./DesktopNav";
import Heading from "./Heading";
import MobileNav from "./MobileNav";
import { Separator } from "../ui/separator";

const Header = () => {
   return (
      <div>
         <div className="mb-6 w-full bg-white px-6 pb-2 pt-4 shadow-md md:px-4">
            <Heading />
            <Separator className="my-4 hidden bg-gray-300 md:block" />
            <DesktopNav />
         </div>
         <div className="sm:hidden">
            <MobileNav />
         </div>
      </div>
   );
};

export default Header;
