import { useState } from "react";
import { FaHeart } from "react-icons/fa";
import BrandLogos from "@/components/BrandLogos";

const ProductDetails = () => {
   const [wishlist, setWishlist] = useState({});
   const [activeTab, setActiveTab] = useState("description");
   const [mainImage, setMainImage] = useState(
      "../../public/images/mainbag.jpg",
   );
   const [showToast, setShowToast] = useState({
      show: false,
      message: "",
      type: "",
   });
   const [cart, setCart] = useState([]);

   const product = {
      id: 1,
      name: "Playwood Arm Chair",
      price: 32.0,
      discountPrice: 40.0,
      rating: 4.5,
      images: [
         "../../public/images/side1.jpg",
         "../../public/images/side2.jpg",
         "../../public/images/side3.jpg",
         "../../public/images/mainbag.jpg",
      ],
      category: "Furniture",
   };

   const relatedProducts = [
      {
         id: 1,
         name: "Related Product 1",
         rating: 4,
         price: 20.0,
         image: "../../public/images/realated1.jpg",
      },
      {
         id: 2,
         name: "Related Product 2",
         rating: 5,
         price: 25.0,
         image: "../../public/images/realated2.jpg",
      },
      {
         id: 3,
         name: "Related Product 3",
         rating: 5,
         price: 25.0,
         image: "../../public/images/realated3.jpg",
      },
      {
         id: 4,
         name: "Related Product 4",
         rating: 5,
         price: 25.0,
         image: "../../public/images/realated4.jpg",
      },
   ];

   const toggleWishlist = (id) => {
      const action = wishlist[id] ? "removed" : "added";
      setWishlist((prevWishlist) => ({
         ...prevWishlist,
         [id]: !prevWishlist[id],
      }));
      setShowToast({
         show: true,
         message: `Item ${action} to wishlist!`,
         type: wishlist[id] ? "wishlist-remove" : "wishlist-add",
      });
      setTimeout(
         () => setShowToast({ show: false, message: "", type: "" }),
         4000,
      );
   };

   const addToCart = (product) => {
      setCart((prevCart) => [...prevCart, product]);
      setShowToast({
         show: true,
         message: "Added to cart!",
         type: "cart-add",
      });
      setTimeout(
         () => setShowToast({ show: false, message: "", type: "" }),
         4000,
      );
   };

   return (
      <>
         {/* Toast Notification */}
         {showToast.show && (
            <div
               className={`fixed right-4 top-4 z-50 rounded-lg p-4 shadow-xl transition-opacity duration-500 ${showToast.type === "cart-add" ? "bg-green text-white" : ""} ${showToast.type === "wishlist-add" ? "bg-blue text-white" : ""} ${showToast.type === "wishlist-remove" ? "bg-red text-white" : ""}`}
            >
               {showToast.message}
            </div>
         )}

         <div className="container mx-auto px-4 py-8">
            {/* Product Card */}
            <div className="flex flex-col items-center justify-between rounded-lg p-6 shadow-lg md:flex-row">
               {/* Product Images */}
               <div className="flex w-full flex-col items-center md:w-1/2">
                  <img
                     src={mainImage}
                     alt="Main Product"
                     className="mb-4 h-80 w-full rounded-lg object-contain"
                  />
                  <div className="flex space-x-4">
                     {product.images.map((image, idx) => (
                        <img
                           key={idx}
                           src={image}
                           alt={`Thumbnail ${idx + 1}`}
                           className="h-20 w-20 cursor-pointer rounded-lg shadow-sm transition-all hover:opacity-75"
                           onClick={() => setMainImage(image)}
                        />
                     ))}
                  </div>
               </div>

               {/* Product Details */}
               <div className="w-full pl-4 md:w-1/2">
                  <h1 className="text-h4 font-bold">{product.name}</h1>
                  <div className="mt-2 flex items-center space-x-2">
                     <span className="text-yellow">
                        {"★".repeat(Math.round(product.rating))}
                     </span>
                     <span className="text-gray">({product.rating})</span>
                  </div>
                  <div className="mt-4 flex items-center space-x-4">
                     <span className="text-lg font-semibold text-black line-through">
                        ${product.price}
                     </span>
                     <span className="text-xl font-bold text-red">
                        ${product.discountPrice}
                     </span>
                  </div>
                  <p className="text-gray mt-4">
                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Reprehenderit.
                  </p>

                  {/* Add to Cart and Wishlist */}
                  <div className="mt-6 flex space-x-4">
                     <button
                        className="rounded-lg bg-pink px-6 py-2 text-white shadow transition hover:bg-red"
                        onClick={() => addToCart(product)}
                     >
                        Add to Cart
                     </button>
                     <button
                        onClick={() => toggleWishlist(product.id)}
                        className={`transition-colors ${
                           wishlist[product.id] ? "text-red" : "text-black"
                        } text-2xl hover:text-red`}
                     >
                        <FaHeart />
                     </button>
                  </div>

                  <div class="mt-8 flex items-center space-x-4">
                     <div class="flex space-x-3">
                        <a
                           href="#"
                           class="flex h-7 w-7 items-center justify-center rounded-full bg-blue text-white transition hover:bg-indigo-600"
                        >
                           <i class="fab fa-facebook-f"></i>
                        </a>
                        <a
                           href="#"
                           class="hover:bg-pink-400 flex h-7 w-7 items-center justify-center rounded-full bg-pink text-white transition"
                        >
                           <i class="fab fa-instagram"></i>
                        </a>
                        <a
                           href="#"
                           class="flex h-7 w-7 items-center justify-center rounded-full bg-blue text-white transition hover:bg-indigo-600"
                        >
                           <i class="fab fa-twitter"></i>
                        </a>
                     </div>
                  </div>
               </div>
            </div>

            {/* Tabs Section */}
            <div className="mt-8">
               <div className="flex justify-center space-x-8">
                  {["description", "additional-info", "reviews", "video"].map(
                     (tab) => (
                        <button
                           key={tab}
                           onClick={() => setActiveTab(tab)}
                           className={`pb-2 transition-colors ${activeTab === tab ? "border-b-2 border-red" : ""}`}
                        >
                           {tab.charAt(0).toUpperCase() +
                              tab.slice(1).replace("-", " ")}
                        </button>
                     ),
                  )}
               </div>

               <div className="mt-4">
                  {activeTab === "description" && (
                     <p>Product description goes here.</p>
                  )}
                  {activeTab === "additional-info" && (
                     <p>Additional information about the product.</p>
                  )}
                  {activeTab === "reviews" && <p>No reviews yet.</p>}
                  {activeTab === "video" && (
                     <p>No video available for this product.</p>
                  )}
               </div>
            </div>

            {/* Related Products */}
            <div className="mt-12">
               <h2 className="mb-4 text-h5 font-bold">Related Products</h2>
               <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
                  {relatedProducts.map((relatedProduct) => (
                     <div
                        key={relatedProduct.id}
                        className="relative cursor-pointer rounded-lg bg-white p-4 shadow-lg transition-all hover:shadow-2xl"
                     >
                        <button
                           className={`text-2xl absolute right-2 top-2 transition-colors hover:text-red ${
                              wishlist[relatedProduct.id]
                                 ? "text-red"
                                 : "text-black"
                           }`}
                           onClick={() => toggleWishlist(relatedProduct.id)}
                        >
                           <FaHeart />
                        </button>
                        <img
                           src={relatedProduct.image}
                           alt={relatedProduct.name}
                           className="mb-4 h-60 w-full object-contain"
                        />
                        <h3 className="text-lg font-semibold">
                           {relatedProduct.name}
                        </h3>
                        <div className="mt-2 flex items-center space-x-2">
                           <span className="text-yellow">
                              {"★".repeat(relatedProduct.rating)}
                           </span>
                           <span className="text-gray">
                              ({relatedProduct.rating})
                           </span>
                        </div>
                        <div className="text-lg mt-2 font-bold">
                           ${relatedProduct.price}
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </div>

         <BrandLogos />
      </>
   );
};

export default ProductDetails;
