import { MoveRight, X } from "lucide-react";
import { useState } from "react";
import Countdown from "react-countdown";

const OfferHeading = () => {
   const [isShown, setIsShown] = useState(true);

   const renderer = ({ days, hours, minutes, seconds, completed }) => {
      if (completed) {
         //  return <Completionist />;
      } else {
         return (
            <div className="flex gap-2 text-white">
               <div className="flex flex-col items-center gap-0 rounded-md border border-gray-500 px-2">
                  <span>{days}</span>
                  <span>Days</span>
               </div>
               <div className="flex flex-col items-center gap-0 rounded-md border border-gray-500 px-2">
                  <span>{hours}</span>
                  <span>Hrs</span>
               </div>
               <div className="flex flex-col items-center gap-0 rounded-md border border-gray-500 px-2">
                  <span>{minutes}</span>
                  <span>Min</span>
               </div>
               <div className="flex flex-col items-center gap-0 rounded-md border border-gray-500 px-2">
                  <span>{seconds}</span>
                  <span>Sec</span>
               </div>
            </div>
         );
      }
   };

   return (
      <>
         {isShown && (
            <div className="relative mx-auto flex w-full items-center justify-center bg-navyBlue px-8 py-2 text-[.8rem]">
               <div className="self- flex items-center gap-2">
                  <p className="self-center uppercase text-white">
                     Up to 50% OFF
                  </p>
                  <Countdown
                     date={Date.now() + 5 * 24 * 60 * 60 * 1000}
                     renderer={renderer}
                  />
                  <button className="hidden max-w-max items-center gap-2 rounded-lg bg-white px-2 py-2 text-[.8rem] text-black transition duration-300 hover:bg-black hover:text-white sm:flex">
                     <span>Shop now</span> <MoveRight size={16} />
                  </button>
               </div>
               <X
                  className="absolute right-3 cursor-pointer text-white"
                  onClick={() => setIsShown(false)}
               />
            </div>
         )}
      </>
   );
};

export default OfferHeading;
