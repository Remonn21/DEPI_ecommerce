import { cn } from "@/lib/utils";
import { LayoutGrid, List } from "lucide-react";

export default function ProductsHeader({ onViewChange, currentView }) {
   return (
      <section className="bg-white shadow">
         <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-wrap items-center justify-center space-x-4 text-navyBlue md:justify-end">
               <span>Per Page:</span>
               <select className="rounded border px-2 py-1">
                  <option>10</option>
                  <option>20</option>
                  <option>30</option>
               </select>
               <span>Sort By:</span>
               <select className="rounded border px-2 py-1">
                  <option>Best Match</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
               </select>

               <span>View:</span>
               <button onClick={() => onViewChange("grid")}>
                  <LayoutGrid
                     className={cn(
                        "size-5 text-gray-100",
                        currentView === "grid" && "text-blue",
                     )}
                  />
               </button>
               <button onClick={() => onViewChange("list")}>
                  <List
                     className={cn(
                        "size-5 text-gray-100",
                        currentView === "list" && "text-blue",
                     )}
                  />
               </button>
            </nav>
         </div>
      </section>
   );
}
