import { Star, ShoppingCart, Heart, Search } from "lucide-react";

export default function ProductCardGrid({
   name,
   currentPrice,
   originalPrice,
   image,
   colors,
}) {
   return (
      <div className="group overflow-hidden rounded-lg bg-white text-center shadow-md">
         <div className="relative bg-[#F6F7FB]">
            <img src={image} alt={name} className="h-64 w-full object-cover" />

            <div className="absolute bottom-2 left-2 hidden space-y-2 duration-300 group-hover:block">
               <button className="block rounded-full p-2 text-blue shadow duration-300 hover:bg-white">
                  <ShoppingCart className="text-gray-600 size-5" />
               </button>
               <button className="block rounded-full p-2 text-blue shadow duration-300 hover:bg-white">
                  <Search className="text-gray-600 size-5" />
               </button>
               <button className="block rounded-full p-2 text-blue shadow duration-300 hover:bg-white">
                  <Heart className="text-gray-600 size-5" />
               </button>
            </div>
         </div>

         <div className="p-4 text-blue-off">
            <h2 className="mb-2 text-body-md font-semibold">{name}</h2>

            <div className="flex items-center justify-center">
               <span className="font-bold">${currentPrice.toFixed(2)}</span>
               <span className="ml-2 text-pink line-through">
                  ${originalPrice.toFixed(2)}
               </span>
            </div>

            <div className="flex space-x-1">
               {colors.map((color, index) => (
                  <div
                     key={index}
                     className={`h-4 w-4 rounded-full bg-${color}-500`}
                  ></div>
               ))}
            </div>
         </div>
      </div>
   );
}
