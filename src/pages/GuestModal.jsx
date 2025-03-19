import { Minus, Plus } from "lucide-react";
import React, { useState } from "react";

function GuestModal({ isOpen, onClose, onSave }) {
   const [adults, setAdults] = useState(1);
   const [children, setChildren] = useState(0);
   const [infants, setInfants] = useState(0);
   const [pets, setPets] = useState(0);

   const incrementCount = (setter, value) => {
      setter(value + 1);
   };

   const decrementCount = (setter, value) => {
      if (value > 0) {
         setter(value - 1);
      }
   };

   const handleSave = () => {
      onSave({ adults, children, infants, pets });
      onClose();
   };

   if (!isOpen) return null;

   return (
      <div className="fixed inset-0 flex items-center justify-center bg-gray-300 bg-opacity-50 z-20">
         <div className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-md">
            <div className="flex justify-between items-center mb-4">
               <button onClick={onClose} className="text-gray-500">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                     <line x1="18" y1="6" x2="6" y2="18"></line>
                     <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
               </button>
               <h2 className="text-xl font-bold">Guests</h2>
               <div className="w-6"></div> {/* Empty div for spacing */}
            </div>

            <p className="text-gray-700 mb-6">
               This place has a maximum of 2 guests, not including infants.
               If you're bringing more than 2 pets, please let your host know.
            </p>

            {/* Adults */}
            <div className="flex justify-between items-center py-4 border-b">
               <div>
                  <h3 className="font-semibold">Adults</h3>
                  <p className="text-gray-600 text-sm">Age 13+</p>
               </div>
               <div className="flex items-center">
                  <button
                     onClick={() => decrementCount(setAdults, adults)}
                     className={`w-8 h-8 flex items-center justify-center rounded-full border hover:border-2 hover:border-black ${adults <= 1 ? 'border-gray-200 text-gray-200' : 'border-gray-500 text-gray-500'}`}
                     disabled={adults <= 1}
                  >
                     {/* <span className="text-xl">-</span> */}
                     <Minus />
                  </button>
                  <span className="mx-4 w-4 text-center">{adults}</span>
                  <button
                     onClick={() => incrementCount(setAdults, adults)}
                     className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-500 text-gray-500 hover:border-2 hover:border-black"
                  >
                     {/* <span className="text-xl">+</span> */}
                     <Plus />
                  </button>
               </div>
            </div>

            {/* Children */}
            <div className="flex justify-between items-center py-4 border-b">
               <div>
                  <h3 className="font-semibold">Children</h3>
                  <p className="text-gray-600 text-sm">Ages 2 – 12</p>
               </div>
               <div className="flex items-center">
                  <button
                     onClick={() => decrementCount(setChildren, children)}
                     className={`w-8 h-8 flex items-center justify-center rounded-full border hover:border-2 hover:border-black ${children === 0 ? 'border-gray-200 text-gray-200' : 'border-gray-500 text-gray-500'}`}
                     disabled={children === 0}
                  >
                     {/* <span className="text-xl">-</span> */}
                     <Minus />
                  </button>
                  <span className="mx-4 w-4 text-center">{children}</span>
                  <button
                     onClick={() => incrementCount(setChildren, children)}
                     className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-500 text-gray-500 hover:border-2 hover:border-black"
                  >
                     {/* <span className="text-xl">+</span> */}
                     <Plus />
                  </button>
               </div>
            </div>

            {/* Infants */}
            <div className="flex justify-between items-center py-4 border-b">
               <div>
                  <h3 className="font-semibold">Infants</h3>
                  <p className="text-gray-600 text-sm">Under 2</p>
               </div>
               <div className="flex items-center">
                  <button
                     onClick={() => decrementCount(setInfants, infants)}
                     className={`w-8 h-8 flex items-center justify-center rounded-full border hover:border-2 hover:border-black ${infants === 0 ? 'border-gray-200 text-gray-200' : 'border-gray-500 text-gray-500'}`}
                     disabled={infants === 0}
                  >
                     {/* <span className="text-xl">-</span> */}
                     <Minus />
                  </button>
                  <span className="mx-4 w-4 text-center">{infants}</span>
                  <button
                     onClick={() => incrementCount(setInfants, infants)}
                     className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-500 text-gray-500 hover:border-2 hover:border-black"
                  >
                     {/* <span className="text-xl">+</span> */}
                     <Plus />
                  </button>
               </div>
            </div>

            {/* Pets */}
            <div className="flex justify-between items-center py-4">
               <div>
                  <h3 className="font-semibold">Pets</h3>
                  <button className="text-gray-700 underline text-sm">Bringing a service animal?</button>
               </div>
               <div className="flex items-center">
                  <button
                     onClick={() => decrementCount(setPets, pets)}
                     className={`w-8 h-8 flex items-center justify-center rounded-full border hover:border-2 hover:border-black ${pets === 0 ? 'border-gray-200 text-gray-200' : 'border-gray-500 text-gray-500'}`}
                     disabled={pets === 0}
                  >
                     {/* <span className="text-xl">-</span> */}
                     <Minus />
                  </button>
                  <span className="mx-4 w-4 text-center">{pets}</span>
                  <button
                     onClick={() => incrementCount(setPets, pets)}
                     className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-500 text-gray-500 hover:border-2 hover:border-black"
                  >
                     {/* <span className="text-xl">+</span> */}
                     <Plus />
                  </button>
               </div>
            </div>

            <div className="flex justify-between mt-8">
               <button
                  onClick={onClose}
                  className="text-lg font-medium underline"
               >
                  Cancel
               </button>
               <button
                  onClick={handleSave}
                  className="bg-black hover:bg-gray-800 text-white font-medium py-2 px-8 rounded-lg"
               >
                  Save
               </button>
            </div>
         </div>
      </div>
   );
}

export default GuestModal;