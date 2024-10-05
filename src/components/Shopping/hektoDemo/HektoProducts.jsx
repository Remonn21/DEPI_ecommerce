import CartItem from "../CartItem";

export default function HektoProducts() {
   const data = [
      {
         id: 1,
         name: "Product 2",
         price: 100,
         image: "https://via.placeholder.com/100",
         color: "black",
         size: "M",
      },
      {
         id: 2,
         name: "Product 1",
         price: 100,
         image: "https://via.placeholder.com/100",
         color: "black",
         size: "M",
      },
      {
         id: 3,
         name: "Product 3",
         price: 100,
         image: "https://via.placeholder.com/100",
         color: "black",
         size: "M",
      },
      {
         id: 4,
         name: "Product 4",
         price: 100,
         image: "https://via.placeholder.com/100",
         color: "black",
         size: "M",
      },
   ];
   return (
      <div id="total" className="mb-10">
         {data.map((product) => (
            <CartItem data={product} key={product.id} />
         ))}
      </div>
   );
}
