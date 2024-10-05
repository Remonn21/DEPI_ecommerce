const NotFound = () => {
   return (
      <div className="flex min-h-screen flex-col items-center justify-center p-4">
         <div className="text-center">
            <h1 className="text-5xl mb-4 font-bold text-gray-800">
               404 Not Found
            </h1>

            <nav className="mb-8 text-gray-500">
               <a href="/" className="text-blue-500 hover:underline">
                  Home
               </a>
               <span> &gt; </span>
               <a href="/" className="text-blue-500 hover:underline">
                  pages
               </a>
               <span> &gt; </span>
               <span className="text-red-500">404 Not Found</span>
            </nav>

            <div className="mb-8">
               <img
                  src="https://via.placeholder.com/400x300"
                  alt="Construction illustration"
                  className="mx-auto w-full max-w-md"
               />
            </div>

            <p className="text-lg mb-8 text-gray-600">
               Oops! The page you requested was not found!
            </p>

            <a
               href="/"
               className="bg-pink-500 hover:bg-pink-600 rounded-full px-6 py-3 text-white transition"
            >
               Back To Home
            </a>
         </div>
      </div>
   );
};

export default NotFound;
