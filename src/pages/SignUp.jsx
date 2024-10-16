import { useState } from "react";
import { Link } from "react-router-dom";
import InputField from "../components/InputField";
import Button from "../components/Button";
import BrandLogos from "@/components/BrandLogos";
import { signup } from "@/api/auth.api";

function SignUp() {
   const [fullName, setFullName] = useState("");
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [confirmPassword, setConfirmPassword] = useState("");

   const handleSignUp = (e) => {
      e.preventDefault();
      signup({
         name: "Remon",
         address: "asdasd",
         email: "testing@hotmail.com",
         password: "123123",
         number: "0123123132",
      });
   };

   return (
      <>
         <div className="flex min-h-screen items-center justify-center bg-gray-100">
            <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-lg">
               <h2 className="mb-6 text-center text-h4 font-bold">Sign Up</h2>
               <p className="mb-6 text-center text-gray">
                  Create a new account by filling in the details below.
               </p>

               <form className="space-y-6" onSubmit={handleSignUp}>
                  <InputField
                     type="text"
                     placeholder="Full Name"
                     value={fullName}
                     onChange={(e) => setFullName(e.target.value)}
                  />

                  <InputField
                     type="email"
                     placeholder="Email Address"
                     value={email}
                     onChange={(e) => setEmail(e.target.value)}
                  />

                  <InputField
                     type="password"
                     placeholder="Password"
                     value={password}
                     onChange={(e) => setPassword(e.target.value)}
                  />

                  <InputField
                     type="password"
                     placeholder="Confirm Password"
                     value={confirmPassword}
                     onChange={(e) => setConfirmPassword(e.target.value)}
                  />

                  <Button type="submit" label="Sign Up" />
               </form>

               <p className="mt-6 text-center text-gray">
                  Already have an account?{" "}
                  <Link to="/login" className="text-Purple hover:underline">
                     Login
                  </Link>
               </p>
            </div>
         </div>
         <BrandLogos />
      </>
   );
}

export default SignUp;
