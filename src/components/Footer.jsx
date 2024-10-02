import { Facebook, Instagram, Mail, MoveRight, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
   return (
      <div className="bg-white">
         <div className="mx-auto mb-16 grid max-w-6xl gap-6 px-4 py-8 sm:grid-cols-2 md:mb-0 md:grid-cols-4">
            <div>
               <h1 className="mb-2 text-small-lg font-bold">About us</h1>
               <p className="text-[.8rem] text-gray-600">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatem ad numquam consectetur dignissimos sapiente sunt,
                  voluptatum unde id,
               </p>
               <div className="mt-4 flex flex-wrap gap-2">
                  <Twitter size={20} />
                  <Facebook size={20} />
                  <Instagram size={20} />
               </div>
            </div>
            <div>
               <h1 className="mb-2 text-small-lg font-bold">Quick links</h1>
               <div className="flex flex-col gap-1 text-[.8rem] text-gray-600">
                  <Link className="hover:text-gray-800" to="/">
                     FAQ
                  </Link>
                  <Link className="hover:text-gray-800" to="/">
                     Find store location
                  </Link>
                  <Link className="hover:text-gray-800" to="/">
                     Privacy Policy
                  </Link>
                  <Link className="hover:text-gray-800" to="/">
                     Refund Policy
                  </Link>
                  <Link className="hover:text-gray-800" to="/">
                     Terms of Service
                  </Link>
               </div>
            </div>{" "}
            <div>
               <h1 className="mb-2 text-small-lg font-bold">Company</h1>
               <div className="flex flex-col gap-1 text-[.8rem] text-gray-600">
                  <Link className="hover:text-gray-800" to="/">
                     Wishlist
                  </Link>
                  <Link className="hover:text-gray-800" to="/">
                     My account
                  </Link>
                  <Link className="hover:text-gray-800" to="/">
                     Product compare
                  </Link>
                  <Link className="hover:text-gray-800" to="/">
                     Cart
                  </Link>
                  <Link className="hover:text-gray-800" to="/">
                     About us
                  </Link>
               </div>
            </div>{" "}
            <div>
               <h1 className="mb-2 text-small-lg font-bold">Newsletter</h1>
               <p className="text-[.8rem] text-gray-600">
                  Write your email first to know about any infromation
               </p>
               <div className="relative">
                  <input
                     type="text"
                     placeholder="Enter your email"
                     className="w-full rounded-md border border-gray-300 px-3 py-1 pl-9 shadow-sm"
                  />
                  <Mail
                     size={20}
                     className="absolute left-2 top-2 text-gray-600"
                  />
                  <MoveRight
                     size={20}
                     className="absolute right-2 top-2 cursor-pointer text-gray-600"
                     onClick={() => {}}
                  />
               </div>
            </div>
         </div>
      </div>
   );
};

export default Footer;
