import { useNavigate } from "react-router-dom";
import ProductCardGrid from "./ProductCardGrid";
import ProductCardList from "./ProductCardList";

export default function ProductList({ products, view }) {
   const navigate = useNavigate();

   return (
      <div
         className={
            view === "grid"
               ? "grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
               : "space-y-6"
         }
      >
         {products.map((product) =>
            view === "list" ? (
               <ProductCardList
                  onClick={() => navigate(`/products/${product._id}`)}
                  key={product._id}
                  {...product}
               />
            ) : (
               <ProductCardGrid
                  onClick={() => navigate(`/products/${product._id}`)}
                  key={product._id}
                  {...product}
               />
            ),
         )}
      </div>
   );
}
