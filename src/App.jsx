import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./layout/Layout";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import ProductDetails from "./pages/ProductDeatails";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Faq from "./pages/Faq";
import ProductsPage from "./pages/ProductsPage";
import ShoppingCardPage from "./pages/ShoppingCardPage";
import OrderCompletedPage from "./pages/OrderCompletedPage";
import HektoDemoPage from "./pages/HektoDemoPage";
import NotFound from "./pages/notfound";

export default function App() {
   return (
      <Routes>
         <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/products/" element={<ProductsPage />} />
            <Route path="/products/:id" element={<ProductDetails />} />
            <Route path="/cart" element={<ShoppingCardPage />} />
            <Route path="/order-completed" element={<OrderCompletedPage />} />
            <Route path="/hekto-demo" element={<HektoDemoPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="*" element={<NotFound />} />
         </Route>
      </Routes>
   );
}
