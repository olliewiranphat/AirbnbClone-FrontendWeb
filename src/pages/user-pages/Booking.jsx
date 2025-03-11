// import React from 'react'
// import Modal from 'react-modal';

import React, { useState } from "react";


// function Booking() {

//    const [paymentOption, setPaymentOption] = useState("full");
//    const [images, setImages] = useState([]);
//    const [showAll, setShowAll] = useState(false);

//    useEffect(() => {
//       fetch('/api/images') // แทนที่ด้วย URL ของ API ของคุณ
//          .then((response) => response.json())
//          .then((data) => setImages(data));
//    }, []);

//    const handleShowAll = () => {
//       setShowAll(true);
//    };

//    const handleCloseModal = () => {
//       setShowAll(false);
//    };


//    return (
//       <div className="max-w-4xl mx-auto py-10 px-5">
//          <div>
//             <h2 className="text-2xl font-semibold mb-4">Beautiful Valley View Breakfast included</h2>

//          </div>
//          <div className="bg-gray-100 p-3 rounded-md mb-4">
//             <p className="text-sm font-medium">This is a rare find.</p>
//             <p className="text-sm">Erika’s place is usually booked.</p>
//          </div>

//          {/* Image */}
//          {/* <div>
//                         <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '10px' }}>
//                             {images.slice(0, 5).map((image, index) => (
//                                 <img key={index} src={image} alt={`Image ${index}`} style={{ width: '100%', height: 'auto' }} />
//                             ))}
//                         </div>
//                         {images.length > 5 && (
//                             <button onClick={handleShowAll}>แสดงรูปภาพทั้งหมด</button>
//                         )}

//                         <Modal isOpen={showAll} onRequestClose={handleCloseModal}>
//                             <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '10px' }}>
//                                 {images.map((image, index) => (
//                                     <img key={index} src={image} alt={`Image ${index}`} style={{ width: '100%', height: 'auto' }} />
//                                 ))}
//                             </div>
//                             <button onClick={handleCloseModal}>ปิด</button>
//                         </Modal>
//                     </div> */}

//          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             <div className="md:col-span-2">
//                <div className="border p-5 rounded-lg shadow-sm">
//                   <h3 className="text-lg font-semibold">Your trip</h3>
//                   <div className="mt-3 text-sm">
//                      <p><strong>Dates:</strong> Apr 21 – 26 <span className="text-blue-500 cursor-pointer">Edit</span></p>
//                      <p><strong>Guests:</strong> 1 guest <span className="text-blue-500 cursor-pointer">Edit</span></p>
//                   </div>
//                   <h3 className="text-lg font-semibold mt-5">Choose how to pay</h3>
//                   <div className="mt-3">
//                      <label className="flex items-center space-x-2 cursor-pointer">
//                         <input type="radio" checked={paymentOption === "full"} onChange={() => setPaymentOption("full")} />
//                         <span>Pay $258.28 now</span>
//                      </label>
//                      <label className="flex items-center space-x-2 cursor-pointer mt-2">
//                         <input type="radio" checked={paymentOption === "partial"} onChange={() => setPaymentOption("partial")} />
//                         <span>Pay part now, part later ($51.66 due today, $206.62 due on Apr 12, 2025)</span>
//                      </label>
//                   </div>
//                </div>

//                <div className="border p-5 rounded-lg shadow-sm mt-5">
//                   <h3 className="text-lg font-semibold">Log in or sign up to book</h3>
//                   <label className="mt-3 block text-sm font-medium" htmlFor="phone">Country code</label>
//                   <select id="phone" className="w-full mt-1 border rounded p-2">
//                      <option>Thailand (+66)</option>
//                   </select>
//                   <label className="mt-3 block text-sm font-medium" htmlFor="phone-number">Phone number</label>
//                   <input id="phone-number" type="text" className="w-full mt-1 border rounded p-2" placeholder="Phone number" />
//                   <button className="w-full mt-4 bg-pink-500 text-white py-2 rounded">Continue</button>
//                   <div className="flex justify-center gap-4 mt-3">
//                      <button className="bg-gray-200 py-2 px-4 rounded">Facebook</button>
//                      <button className="bg-gray-200 py-2 px-4 rounded">Google</button>
//                      <button className="bg-gray-200 py-2 px-4 rounded">Apple</button>
//                   </div>
//                   <button className="w-full mt-3 border border-gray-300 py-2 rounded">Continue with email</button>
//                </div>
//             </div>

//             <div className="border p-5 rounded-lg shadow-sm">
//                <h3 className="text-lg font-semibold">Nice equipped room in a family flat</h3>
//                <p className="text-sm text-gray-500">Room in rental unit ★ 4.87 (197 reviews) • Superhost</p>
//                <div className="mt-4 text-sm">
//                   <p>$38.01 x 5 nights: $190.05</p>
//                   <p>Cleaning fee: $5.43</p>
//                   <p>Airbnb service fee: $31.92</p>
//                   <p>Taxes: $30.88</p>
//                   <p className="font-bold mt-2">Total (USD): $258.28</p>
//                </div>
//             </div>
//          </div>
//       </div>
//    )
// }

// export default Booking




function Booking() {
   const [paymentOption, setPaymentOption] = React.useState('full');
   const [phoneNumber, setPhoneNumber] = React.useState('');

   return (
      <div className="max-w-4xl mx-auto p-4 font-sans">
         <header className="border-b pb-4 mb-6">
            <div className="text-rose-500">
               <i className="fas fa-airbnb text-2xl"></i>
            </div>
         </header>

         <div className="flex items-center mb-6">
            <button className="mr-2">
               <i className="fas fa-chevron-left"></i>
            </button>
            <h1 className="text-2xl font-bold">Request to book</h1>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            <div className="md:col-span-3">
               <div className="border rounded-xl p-4 mb-6">
                  <div className="flex justify-between items-start">
                     <div>
                        <p className="font-medium">This is a rare find.</p>
                        <p className="text-gray-600">Erika's place is usually booked.</p>
                     </div>
                     <div className="text-pink-500">
                        <i className="fas fa-gem text-xl"></i>
                     </div>
                  </div>
               </div>

               <div className="mb-6">
                  <h2 className="text-xl font-bold mb-4">Your trip</h2>

                  <div className="flex justify-between py-3 border-b">
                     <div>
                        <h3 className="font-medium">Dates</h3>
                        <p className="text-gray-600">Apr 21 - 26</p>
                     </div>
                     <button className="text-gray-800 underline font-medium">Edit</button>
                  </div>

                  <div className="flex justify-between py-3 border-b">
                     <div>
                        <h3 className="font-medium">Guests</h3>
                        <p className="text-gray-600">1 guest</p>
                     </div>
                     <button className="text-gray-800 underline font-medium">Edit</button>
                  </div>
               </div>

               <div className="mb-6">
                  <h2 className="text-xl font-bold mb-4">Choose how to pay</h2>

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
                  <h2 className="text-xl font-bold mb-4">Log in or sign up to book</h2>

                  <div className="mb-4">
                     <div className="border rounded-t-lg p-4 flex justify-between items-center">
                        <span>Thailand (+66)</span>
                        <i className="fas fa-chevron-down"></i>
                     </div>
                     <input
                        type="tel"
                        placeholder="Phone number"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        className="border border-t-0 rounded-b-lg p-4 w-full"
                     />
                  </div>

                  <p className="text-sm text-gray-600 mb-4">
                     We'll call or text you to confirm your number. Standard message and data rates apply.
                     <a href="#" className="underline ml-1">Privacy Policy</a>
                  </p>

                  <button className="w-full bg-rose-500 text-white py-3 rounded-lg font-medium mb-4">
                     Continue
                  </button>

                  <div className="flex items-center justify-center mb-4">
                     <div className="border-t flex-grow"></div>
                     <span className="px-4 text-gray-500">or</span>
                     <div className="border-t flex-grow"></div>
                  </div>

                  <div className="grid grid-cols-3 gap-3 mb-4">
                     <button className="border rounded-lg py-3 flex justify-center items-center">
                        <i className="fab fa-facebook-f text-blue-600"></i>
                     </button>
                     <button className="border rounded-lg py-3 flex justify-center items-center">
                        <i className="fab fa-google text-red-500"></i>
                     </button>
                     <button className="border rounded-lg py-3 flex justify-center items-center">
                        <i className="fab fa-apple"></i>
                     </button>
                  </div>

                  <button className="w-full border rounded-lg py-3 flex justify-center items-center">
                     <i className="far fa-envelope mr-2"></i>
                     Continue with email
                  </button>
               </div>
            </div>

            <div className="md:col-span-2">
               <div className="border rounded-xl p-4 sticky top-4">
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
export default Booking
