import Hero from "@/components/Hero";
import HotDeals from "@/components/HotDeals";
import OfferCard from "@/components/OfferCard";
import TrendingProducts from "@/components/TrendingProducts";
import { useHomeStatistics } from "@/hooks/useProducts";

export default function Home() {
   const { data: results, isLoading } = useHomeStatistics();

   if (!results && isLoading) {
      return <div>Loading...</div>;
   }

   return (
      <>
         <Hero />
         <TrendingProducts products={results.data.topSelling} />
         <div className="mt-10 flex flex-col gap-8 md:flex-row">
            <OfferCard
               className="flex-1"
               title="GoPro Omni Camera"
               linkTxt="show now"
               description="Pair text with an icon to focus on your store's features"
               href="/"
               image="https://isotech-demo.myshopify.com/cdn/shop/files/2_Banner_1.png?v=1695814614&width=1420"
            />
            <OfferCard
               className="flex-1"
               title="Iphone 14 Pro Max"
               linkTxt="show now"
               description="Pair text with an icon to focus on your store's features"
               href="/"
               textClass="text-white"
               image="https://isotech-demo.myshopify.com/cdn/shop/files/2_Banner_2.png?v=1695814633&width=1420"
            />
         </div>
         <HotDeals products={results.data.topRated} />
      </>
   );
}
