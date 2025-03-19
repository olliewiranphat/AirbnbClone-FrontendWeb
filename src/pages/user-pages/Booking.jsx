import React, { useState } from "react";
import { Apple, Diamond, Facebook, Google } from "../../icon/Icon";
import PhoneInput from "../PhoneInput";
import { ChevronLeft } from "lucide-react";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { format } from "date-fns";
import GuestModal from "../GuestModal"; // Import the new component

function Booking() {
   const [paymentOption, setPaymentOption] = useState('full');
   const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);
   const [isGuestModalOpen, setIsGuestModalOpen] = useState(false);
   const [selectionRange, setSelectionRange] = useState({
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
   });
   const [guestDetails, setGuestDetails] = useState({
      adults: 1,
      children: 0,
      infants: 0,
      pets: 0
   });

   const handleSelect = (ranges) => {
      setSelectionRange(ranges.selection);
   };

   const handleGuestSave = (newGuestDetails) => {
      setGuestDetails(newGuestDetails);
   };

   // Calculate total guest count
   const getTotalGuestCount = () => {
      const total = guestDetails.adults + guestDetails.children;
      let guestText = `${total} guest${total !== 1 ? 's' : ''}`;

      if (guestDetails.infants > 0) {
         guestText += `, ${guestDetails.infants} infant${guestDetails.infants !== 1 ? 's' : ''}`;
      }

      if (guestDetails.pets > 0) {
         guestText += `, ${guestDetails.pets} pet${guestDetails.pets !== 1 ? 's' : ''}`;
      }

      return guestText;
   };

   return (
      <div className="w-[1100px] mx-auto p-4 font-sans">
         <div className="flex items-center mb-6 mt-6">
            <button className="mr-2">
               <ChevronLeft className=" rounded-full hover:rounded-full hover:bg-slate-200 " />
            </button>
            <h1 className="text-4xl font-semibold">Request to book</h1>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            <div className="md:col-span-3">
               <div className="border rounded-xl p-7 mb-7 hover:border-black mt-7 ">
                  <div className="flex justify-between items-start">
                     <div>
                        <p className="font-medium">This is a rare find.</p>
                        <p className="text-gray-600">Erika's place is usually booked.</p>
                     </div>
                     <div className="text-pink-500">
                        <Diamond className="w-9 h-9" />
                     </div>
                  </div>
               </div>

               <div className="mb-6 mt-5">
                  <h2 className="mb-4 text-2xl font-semibold">Your trip</h2>

                  {/* Date Range Picker */}
                  <div className="flex justify-between py-3 border-b">
                     <div>
                        <h3 className="font-medium">Dates</h3>
                        <p className="text-gray-600">
                           {format(selectionRange.startDate, "MM/dd/yyyy")} -{" "}
                           {format(selectionRange.endDate, "MM/dd/yyyy")}
                        </p>
                     </div>
                     <button
                        className="text-gray-800 underline font-medium"
                        onClick={() => setIsDatePickerOpen(!isDatePickerOpen)}
                     >
                        Edit
                     </button>
                  </div>

                  {isDatePickerOpen && (
                     <div className="fixed inset-0 flex items-center justify-center bg-gray-300 bg-opacity-50 z-20">
                        <div className="bg-white p-5 rounded-lg shadow-lg">
                           <h2 className="text-xl font-semibold mb-4">Select Dates</h2>
                           <DateRange
                              ranges={[selectionRange]}
                              onChange={handleSelect}
                              moveRangeOnFirstSelection={false}
                              rangeColors={["#ff385c"]}
                           />
                           <div className="flex justify-between mt-4">
                              <button
                                 className="text-gray-600 underline"
                                 onClick={() =>
                                    setSelectionRange({
                                       startDate: new Date(),
                                       endDate: new Date(),
                                       key: "selection",
                                    })
                                 }
                              >
                                 Clear dates
                              </button>
                              <button
                                 className="bg-rose-500 text-white py-2 px-4 rounded"
                                 onClick={() => setIsDatePickerOpen(false)}
                              >
                                 Save
                              </button>
                           </div>
                        </div>
                     </div>
                  )}

                  <div className="flex justify-between py-3 border-b">
                     <div>
                        <h3 className="font-medium">Guests</h3>
                        <p className="text-gray-600">{getTotalGuestCount()}</p>
                     </div>
                     <button
                        className="text-gray-800 underline font-medium"
                        onClick={() => setIsGuestModalOpen(true)}
                     >
                        Edit
                     </button>
                  </div>
               </div>

               {/* Rest of the component remains the same */}
               {/* ... */}

               {/* Guest Modal */}
               <GuestModal
                  isOpen={isGuestModalOpen}
                  onClose={() => setIsGuestModalOpen(false)}
                  onSave={handleGuestSave}
               />

               {/* Continue with the rest of your component */}
               <div className="mb-6">
                  <h2 className="mb-4 text-2xl font-semibold">Choose how to pay</h2>

                  <div className="border rounded-lg mb-3">
                     <label className="flex items-center justify-between p-4 cursor-pointer">
                        <div>
                           <p className="font-medium">Pay $258.28 now</p>
                        </div>
                        <input
                           type="radio"
                           name="payment"
                           checked={paymentOption === 'full'}
                           onChange={() => setPaymentOption('full')}
                           className="h-5 w-5 text-black"
                        />
                     </label>
                  </div>

                  <div className="border rounded-lg">
                     <label className="flex items-center justify-between p-4 cursor-pointer">
                        <div>
                           <p className="font-medium">Pay part now, part later</p>
                           <p className="text-gray-600 text-sm">$51.66 due today, $206.62 on Apr 12, 2025. No extra fees.</p>
                           <button className="text-gray-800 underline text-sm font-medium">More info</button>
                        </div>
                        <input
                           type="radio"
                           name="payment"
                           checked={paymentOption === 'split'}
                           onChange={() => setPaymentOption('split')}
                           className="h-5 w-5 text-black"
                        />
                     </label>
                  </div>
               </div>

               <div className="mb-6">
                  <h2 className="mb-4 text-2xl font-semibold">Log in or sign up to book</h2>

                  <div className="mb-4">
                     <PhoneInput />
                  </div>

                  <p className="text-sm text-gray-600 mb-4">
                     We'll call or text you to confirm your number. Standard message and data rates apply.
                     <a href="#" className="underline ml-1">Privacy Policy</a>
                  </p>

                  <button className="btn btn-secondary w-full h-12 bg-rose-500 text-white py-3 rounded-lg font-medium mb-4">Continue</button>

                  <div className="flex items-center justify-center mb-4">
                     <div className="border-t grow"></div>
                     <span className="px-4 text-gray-500">or</span>
                     <div className="border-t grow"></div>
                  </div>

                  <div className="grid grid-cols-3 gap-3 mb-4">
                     <button className="border border-black rounded-lg py-3 flex justify-center items-center">
                        <Facebook className="w-7 h-7" />
                     </button>
                     <button className="border border-black rounded-lg py-3 flex justify-center items-center">
                        <Google className="w-7 h-7" />
                     </button>
                     <button className="border border-black rounded-lg py-3 flex justify-center items-center">
                        <Apple className="w-7 h-7" />
                     </button>
                  </div>

                  <button className="w-full border border-black rounded-lg py-3 flex justify-center items-center">
                     <p>Continue with email</p>
                  </button>
               </div>
            </div>

            {/* Price details sidebar */}
            <div className="md:col-span-2">
               <div className="border rounded-xl p-4 sticky top-4">
                  {/* Content of the sidebar remains the same */}
                  {/* ... */}
                  <div className="flex mb-4">
                     <div className="w-24 h-20 bg-gray-200 rounded-lg mr-3"></div>
                     <div>
                        <p className="font-medium">Nice equipped room in a family flat</p>
                        <p className="text-sm text-gray-600">Room in rental unit</p>
                        <div className="flex items-center mt-1">
                           <i className="fas fa-star text-sm"></i>
                           <span className="text-sm ml-1">4.87 (197 reviews)</span>
                           <span className="mx-1 text-sm">•</span>
                           <span className="text-sm font-medium">Superhost</span>
                        </div>
                     </div>
                  </div>

                  <div className="border-t pt-4">
                     <h3 className="text-lg font-bold mb-3">Price details</h3>

                     <div className="flex justify-between mb-2">
                        <span>$38.01 x 5 nights</span>
                        <span>$190.05</span>
                     </div>

                     <div className="flex justify-between mb-2">
                        <span>Cleaning fee</span>
                        <span>$5.43</span>
                     </div>

                     <div className="flex justify-between mb-2">
                        <span>Airbnb service fee</span>
                        <span>$31.92</span>
                     </div>

                     <div className="flex justify-between mb-4">
                        <span>Taxes</span>
                        <span>$30.88</span>
                     </div>

                     <div className="flex justify-between font-bold border-t pt-4">
                        <span>Total (USD)</span>
                        <span>$258.28</span>
                     </div>
                  </div>
               </div>
            </div>
         </div>

         <footer className="mt-12 pt-6 border-t text-sm text-gray-600">
            {/* Footer content remains the same */}
            {/* ... */}
            <div className="flex flex-wrap justify-between items-center">
               <div className="flex items-center space-x-2">
                  <span>© 2025 Airbnb, Inc.</span>
                  <span>•</span>
                  <a href="#" className="hover:underline">Terms</a>
                  <span>•</span>
                  <a href="#" className="hover:underline">Sitemap</a>
                  <span>•</span>
                  <a href="#" className="hover:underline">Privacy</a>
                  <span>•</span>
                  <div className="flex items-center">
                     <a href="#" className="hover:underline">Your Privacy Choices</a>
                     <span className="ml-1 text-blue-600 border border-blue-600 rounded-full px-1 text-xs">?</span>
                  </div>
               </div>

               <div className="flex items-center space-x-4">
                  <button className="flex items-center">
                     <i className="fas fa-globe mr-2"></i>
                     English (US)
                  </button>
                  <button>$ USD</button>
                  <a href="#"><i className="fab fa-facebook-f"></i></a>
                  <a href="#"><i className="fab fa-twitter"></i></a>
                  <a href="#"><i className="fab fa-instagram"></i></a>
               </div>
            </div>
         </footer>
      </div>
   );
}

export default Booking;