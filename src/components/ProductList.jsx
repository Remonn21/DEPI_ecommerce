import ProductCardGrid from "./ProductCardGrid";
import ProductCardList from "./ProductCardList";

export default function ProductList({ products, view }) {
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
               <ProductCardList key={product.id} {...product} />
            ) : (
               <ProductCardGrid key={product.id} {...product} />
            ),
         )}
      </div>
   );
}
