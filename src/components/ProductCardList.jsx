import { Star, ShoppingCart, Heart, Search } from "lucide-react";

export default function ProductCardList({
   name,
   currentPrice,
   originalPrice,
   rating,
   description,
   image,
   colors,
}) {
   return (
      <div className="flex flex-col overflow-hidden rounded-lg bg-white shadow-md md:flex-row">
         <div className="w-full p-4 md:w-1/3">
            <img
               src={image}
               alt={name}
               className="h-64 w-full rounded-lg object-cover"
            />
         </div>

         <div className="flex w-full flex-col justify-between p-4 md:w-2/3">
            <div>
               <div className="mb-2 flex items-start justify-between">
                  <h2 className="text-body-md font-semibold text-blue-off">
                     {name}
                  </h2>

                  <div className="flex space-x-1">
                     {colors.map((color, index) => (
                        <div
                           key={index}
                           className={`h-4 w-4 rounded-full bg-${color}-500`}
                        ></div>
                     ))}
                  </div>
               </div>

               <div className="mb-2 flex items-center">
                  <span className="text-body-md font-bold text-blue-off">
                     ${currentPrice.toFixed(2)}
                  </span>
                  <span className="ml-2 text-body-sm text-pink line-through">
                     ${originalPrice.toFixed(2)}
                  </span>
               </div>

               <div className="mb-2 flex items-center">
                  {[...Array(5)].map((_, i) => (
                     <Star
                        key={i}
                        className={`size-5 ${i < rating ? "text-gold fill-gold" : "text-gray-200 fill-gray-200"}`}
                     />
                  ))}
               </div>
               <p className="text-gray-100 mb-4">{description}</p>
            </div>

            <div className="flex space-x-4">
               <button className="p-2">
                  <ShoppingCart className="size-6 text-navyBlue-off duration-300 hover:scale-110 hover:fill-navyBlue" />
               </button>
               <button className="p-2">
                  <Heart className="size-6 text-navyBlue-off duration-300 hover:scale-110 hover:fill-red hover:text-red" />
               </button>
               <button className="p-2">
                  <Search className="size-6 text-navyBlue-off duration-300 hover:scale-110 hover:text-navyBlue" />
               </button>
            </div>
         </div>
      </div>
   );
}
