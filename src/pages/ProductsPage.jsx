import ProductsHeader from "@/components/ProdcutsHeader";
import ProductList from "@/components/ProductList";
import Sidebar from "@/components/Sidebar";
import { PRODUCTS } from "@/constant";
import { useState } from "react";

export default function ProductsPage() {
   const [view, setView] = useState("grid");

   return (
      <div className="min-h-screen">
         <ProductsHeader onViewChange={setView} currentView={view} />
         <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col gap-8 md:flex-row">
               <Sidebar />
               <main className="flex-1">
                  <ProductList products={PRODUCTS} view={view} />
               </main>
            </div>
         </div>
      </div>
   );
}
