import CartItem from "./CartItem";
export default function CartDetails() {
   const data = [
      {
         id: 1,
         name: "Product 2",
         price: 100,
         quantity: 2,
         image: "https://via.placeholder.com/100",
         color: "black",
         size: "M",
      },
      {
         id: 2,
         name: "Product 1",
         price: 100,
         quantity: 2,
         image: "https://via.placeholder.com/100",
         color: "black",
         size: "M",
      },
      {
         id: 3,
         name: "Product 3",
         price: 100,
         quantity: 2,
         image: "https://via.placeholder.com/100",
         color: "black",
         size: "M",
      },
      {
         id: 4,
         name: "Product 4",
         price: 100,
         quantity: 2,
         image: "https://via.placeholder.com/100",
         color: "black",
         size: "M",
      },
   ];
   return (
      <div>
         <div className="section-header my-5 flex items-center justify-between text-body-md">
            <h2>Product</h2>
            <h2>price</h2>
            <h2>quantity</h2>
            <h2>total</h2>
         </div>
         {data.map((product) => (
            <CartItem data={product} key={product.id} />
         ))}
         <div className="buttons flex justify-between">
            <button className="btn mt-10 bg-pink px-7 py-3 text-white">
               Update Cart
            </button>
            <button className="btn mt-10 bg-pink px-7 py-3 text-white">
               Clear Cart
            </button>
         </div>
      </div>
   );
}
