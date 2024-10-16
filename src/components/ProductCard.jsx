import PropTypes from "prop-types";

import { Heart, Star, StarHalf } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { GoDotFill } from "react-icons/go";
const StarRating = ({ rating, maxRating = 5 }) => {
   const getStarType = (i) => {
      if (i <= rating)
         return (
            <Star
               className="border-none text-yellow-400"
               fill="#facc15"
               key={i}
               size={20}
            />
         );
      if (i - 0.5 <= rating)
         return (
            <StarHalf
               size={20}
               className="text-yellow-400"
               fill="#facc15"
               key={i}
            />
         );
      return <Star className="text-gray-700" size={20} key={i} />;
   };

   return (
      <div className="flex">
         {Array.from({ length: maxRating }, (_, i) => getStarType(i + 1))}
      </div>
   );
};

StarRating.propTypes = {
   rating: PropTypes.number.isRequired,
   maxRating: PropTypes.number,
};

const ProductCard = ({ product }) => {
   const navigate = useNavigate();

   return (
      <div className="overflow-hidden rounded-lg bg-white pb-4">
         <div className="relative cursor-pointer">
            <div className="group absolute right-4 top-4 z-10 rounded-full bg-white p-2 shadow-lg transition duration-500 hover:bg-black">
               <Heart className="group-hover:text-white" />
            </div>
            <div
               className="group relative overflow-hidden"
               style={{ paddingBottom: "100%" }}
               onClick={() => navigate(`/products/${product._id}`)}
            >
               <img
                  src={product.images[0]}
                  className="absolute block transition duration-500 group-hover:opacity-0"
                  alt=""
               />
               <img
                  src={product.images[1]}
                  className="duration-400 absolute block scale-90 opacity-0 transition group-hover:scale-100 group-hover:opacity-100"
                  alt=""
               />
            </div>
         </div>
         <div className="mt-2 flex flex-col gap-2 px-4">
            <h4 className="line-clamp-2 h-9 text-small-md font-bold leading-tight">
               {product.name}
            </h4>

            <div className="flex gap-2">
               <p
                  className={`font-bold ${product.discountPrice ? "text-gray-600 line-through" : ""}`}
               >
                  ${product.price}
               </p>
               {product.discountPrice && (
                  <p className="font-bold">${product.price}</p>
               )}
            </div>

            <div className="flex flex-col gap-1 sm:flex-row sm:items-center">
               <StarRating rating={product.rating} />
               <span className="text-small-sm text-gray-500">
                  {product?.reviewsCount} reviews
               </span>
            </div>
            <div className="text-green-800 flex items-center">
               <GoDotFill className="text-green" />
               <span className="text-small-sm font-bold text-green">
                  In stock
               </span>
            </div>
         </div>
      </div>
   );
};

ProductCard.propTypes = {
   product: PropTypes.shape({
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      discountPrice: PropTypes.number,
      rating: PropTypes.number.isRequired,
      reviewsCount: PropTypes.number.isRequired,
   }).isRequired,
};

export default ProductCard;
