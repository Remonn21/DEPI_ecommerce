import Hero from "@/components/Hero";
import HotDeals from "@/components/HotDeals";
import OfferCard from "@/components/OfferCard";
import TrendingProducts from "@/components/TrendingProducts";

const products = [
   {
      name: "Iphone 13 Pro",
      category: "mobile",
      price: 1000,
      reviewsAvg: 4.3,
      reviewsCount: 100,
      stock: 50,
      colors: ["red", "black", "green"],
      description:
         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, nemo officiis alias doloremque ullam numquam natus sit quis dignissimos! Earum, nobis minus similique voluptatibus cumque animi quis tempora. Dolor, cum.",
      images: ["link1", "link2"],
      discountPrice: 260,
   },
   {
      name: "Samsung Galaxy S21",
      category: "mobile",
      price: 850,
      reviewsAvg: 4.5,
      reviewsCount: 120,
      stock: 75,
      colors: ["white", "black", "purple"],
      description:
         "The Samsung Galaxy S21 offers stunning design and performance. Equipped with a powerful chipset and advanced camera features, it's built for those who love photography and gaming.",
      images: ["link3", "link4"],
      discountPrice: 260,
   },
   {
      name: "MacBook Pro 16-inch",
      category: "laptops",
      price: 2500,
      reviewsAvg: 4.8,
      reviewsCount: 200,
      stock: 30,
      colors: ["silver", "space gray"],
      description:
         "The MacBook Pro features a brilliant Retina display, powerful processors, and an amazing battery life. Perfect for professionals who need the power to work from anywhere.",
      images: ["link5", "link6"],
   },
   {
      name: "Sony WH-1000XM4 asdw asdw awsasda  aswasd sadwasdwds  Headphones",
      category: "mobile",
      price: 350,
      reviewsAvg: 4.9,
      reviewsCount: 500,
      stock: 150,
      colors: ["black", "blue", "silver"],
      description:
         "Industry-leading noise cancellation, exceptional sound quality, and long battery life make the Sony WH-1000XM4 the perfect companion for music lovers.",
      images: ["link7", "link8"],
   },
   {
      name: "Apple Watch Series 7",
      category: "mobile",
      price: 450,
      reviewsAvg: 4.6,
      reviewsCount: 300,
      stock: 80,
      colors: ["black", "blue", "red"],
      description:
         "The latest Apple Watch comes with advanced health features, a larger display, and a faster charging time. It's the best smartwatch for fitness enthusiasts.",
      images: ["link9", "link10"],
      discountPrice: 260,
   },
   {
      name: "Dell XPS 13",
      category: "mobile",
      price: 1400,
      reviewsAvg: 4.7,
      reviewsCount: 180,
      stock: 45,
      colors: ["silver", "rose gold"],
      description:
         "The Dell XPS 13 is a premium ultrabook designed for portability and performance. With a stunning InfinityEdge display and long battery life, it's ideal for professionals on the go.",
      images: ["link11", "link12"],
      discountPrice: 260,
   },
];

export default function Home() {
   return (
      <>
         <Hero />
         <TrendingProducts products={products} />
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
         <HotDeals products={products} />
      </>
   );
}
