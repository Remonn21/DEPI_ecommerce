import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./layout/Layout";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import ProductDetails from "./pages/ProductDeatails";

export default function App() {
   return (
      <Routes>
         <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            {/* <Route path="*" element={<NotFound />} /> */}
         </Route>
      </Routes>
   );
}

// function Layout() {
//    return (
//       <div className="flex min-h-screen flex-col font-Lato">
//          <main className="flex-1">
//             <Outlet />
//          </main>

//          {/* <Footer /> */}
//       </div>
//    );
// }
