import ProductsHeader from "@/components/ProdcutsHeader";
import ProductList from "@/components/ProductList";
import Sidebar from "@/components/Sidebar";
import { useSearchProducts } from "@/hooks/useProducts";
import { useEffect, useState } from "react";

export default function ProductsPage() {
   const [view, setView] = useState("grid");
   const [searchInputs, setSearchInputs] = useState({});
   const [searchState, setSearchState] = useState({});
   const { data: results, isLoading } = useSearchProducts(searchState);

   useEffect(() => {
      const searchTimeout = setTimeout(() => {
         setSearchState({ ...searchInputs });
      }, 1500);

      return () => clearTimeout(searchTimeout);
   }, [searchInputs]);

   const handleSearchChange = (e) => {
      setSearchInputs((prevState) => ({
         ...prevState,
         [e.target.name]: e.target.value,
      }));
   };

   return (
      <div className="min-h-screen">
         <ProductsHeader
            onViewChange={setView}
            handleSearchChange={handleSearchChange}
            searchInputs={searchInputs}
            currentView={view}
         />
         <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col gap-8 md:flex-row">
               <Sidebar />
               {isLoading ? (
                  <p>Loading....</p>
               ) : results?.data.data?.length > 0 ? (
                  <main className="flex-1">
                     <ProductList
                        products={results?.data?.data || []}
                        view={view}
                     />
                  </main>
               ) : (
                  <p>No products found</p>
               )}
            </div>
         </div>
      </div>
   );
}
