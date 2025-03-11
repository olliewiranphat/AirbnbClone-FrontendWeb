import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

export default function GuestDropdown() {
   const [isOpen, setIsOpen] = useState(false);
   const [guests, setGuests] = useState({ adults: 1, children: 0, infants: 0, pets: 0 });

   const handleGuestChange = (type, value) => {
      setGuests((prev) => ({ ...prev, [type]: Math.max(0, prev[type] + value) }));
   };

   return (
      <div className="relative w-64 border-none m-0 p-0">
         <p className="text-xs font-bold">GUESTS</p>
         <button
            className="w-full border-none rounded p-0 flex justify-between items-center"
            onClick={() => setIsOpen(!isOpen)}
         >
            <span>{guests.adults + guests.children + guests.infants + guests.pets} guest{guests.adults + guests.children + guests.infants + guests.pets > 1 ? "s" : ""}</span>
            <span>{isOpen ? <ChevronUp /> : <ChevronDown />}</span>
         </button>

         {isOpen && (
            <div className="absolute w-full bg-white border rounded shadow-lg p-4 mt-2 z-10">
               {[
                  { label: "Adults", sub: "Age 13+", key: "adults" },
                  { label: "Children", sub: "Ages 2–12", key: "children" },
                  { label: "Infants", sub: "Under 2", key: "infants" },
                  { label: "Pets", sub: "", key: "pets" },
               ].map(({ label, sub, key }) => (
                  <div key={key} className="flex justify-between items-center py-2">
                     <div>
                        <p className="font-medium">{label}</p>
                        {sub && <p className="text-sm text-gray-500">{sub}</p>}
                     </div>
                     <div className="flex items-center space-x-2">
                        <button
                           className="w-8 h-8 border rounded-full flex items-center justify-center"
                           onClick={() => handleGuestChange(key, -1)}
                           disabled={guests[key] === 0}
                        >
                           –
                        </button>
                        <span>{guests[key]}</span>
                        <button
                           className="w-8 h-8 border rounded-full flex items-center justify-center"
                           onClick={() => handleGuestChange(key, 1)}
                           disabled={key !== "infants" && guests.adults + guests.children >= 6}
                        >
                           +
                        </button>
                     </div>
                  </div>
               ))}

               <p className="text-xs text-gray-500 mt-2">
                  This place has a maximum of 6 guests, not including infants. Pets aren't allowed.
               </p>
               <button
                  className="w-full text-end text-black font-medium mt-3"
                  onClick={() => setIsOpen(false)}
               >
                  Close
               </button>
            </div>
         )}
      </div>
   );
}
