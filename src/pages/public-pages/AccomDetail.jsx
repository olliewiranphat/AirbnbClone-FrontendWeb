import { Grip, Heart, Share } from 'lucide-react'
import React from 'react'
import GuestDropdown from '../GuestDropdown'


function AccomDetail() {

   return (
      <div className="max-w-[1200px] mx-auto font-sans">

         {/* Header */}
         <header className="flex justify-between items-center p-1">
            <div className="flex items-center">
               <div className="flex space-x-4">
                  <p className="font-medium text-[28px]">Overview The area Reviews</p>
               </div>
            </div>
            {/* Button Icon */}
            <div className="flex items-center space-x-2">
               <button className="btn btn-outline border-none"><Share /> Share</button>
               <button className="btn btn-outline border-none"><Heart /> Save</button>
            </div>
         </header>

         {/* Listing Title */}
         <div className="p-1">
            {/* <h1 className="text-xl font-medium mb-1">Nice equipped room in a family flat</h1> */}

            {/* Image Gallery */}
            <div className="grid grid-cols-2 gap-2 my-4 rounded-lg overflow-hidden">
               <div className="row-span-2 h-80 bg-gray-200 relative">
                  {/* <div className="absolute bottom-4 right-4 bg-white rounded-md px-2 py-1 text-xs">
                            Show all photos
                        </div> */}
                  <button className="btn btn-outline absolute bottom-4 right-4 bg-white rounded-md px-2 py-1 text-xs">
                     <Grip className='w-4 h-4' />
                     Show all photos
                  </button>
               </div>
               <div className="grid grid-cols-2 gap-2">
                  <div className="h-[9.5rem] bg-gray-200"></div>
                  <div className="h-[9.5rem] bg-gray-200"></div>
                  <div className="h-[9.5rem] bg-gray-200"></div>
                  <div className="h-[9.5rem] bg-gray-200"></div>
               </div>
            </div>

            {/* Location and Host */}
            <div className="flex justify-between">
               <div>
                  <h2 className="font-medium">Room in Villefranche, France</h2>
                  <div className="text-sm text-gray-500">
                     <span>2 beds · Private bathroom</span>
                  </div>
                  <div className="flex items-center mt-2">
                     <div className="flex">
                        <span className="text-sm">★ 4.87</span>
                        <span className="text-sm text-gray-500 mx-1">·</span>
                        <span className="text-sm text-gray-500">157 reviews</span>
                     </div>
                  </div>
               </div>

               {/* Price Card */}
               <div className="border rounded-lg p-4 shadow-xs w-80">
                  <div className="flex justify-between items-start mb-4">
                     <div>
                        <span className="font-semibold text-lg">$44</span>
                        <span className="text-sm"> night</span>
                     </div>
                     <div className="flex items-center">
                        <span className="text-sm">★ 4.87</span>
                        <span className="text-sm text-gray-500 mx-1">·</span>
                        <span className="text-sm text-gray-500">157 reviews</span>
                     </div>
                  </div>

                  {/* overflow-hidden */}
                  <div className="border rounded-lg mb-4">
                     <div className="grid grid-cols-2 divide-x">
                        <div className="p-2">
                           <div className="text-xs font-bold">CHECK-IN</div>
                           <div className="text-sm">4/29/2023</div>
                        </div>
                        <div className="p-2">
                           <div className="text-xs font-bold">CHECKOUT</div>
                           <div className="text-sm">5/4/2023</div>
                        </div>
                     </div>

                     <div className="border-t p-2">
                        {/* <p className="text-xs font-semibold">GUESTS</p> */}
                        <GuestDropdown />
                     </div>

                  </div>

                  <button className="w-full bg-rose-500 text-white py-3 rounded-lg font-medium mb-4">
                     Reserve
                  </button>

                  <div className="text-center text-sm mb-4">You won't be charged yet</div>

                  <div className="space-y-2">
                     <div className="flex justify-between">
                        <span className="underline">$44 x 5 nights</span>
                        <span>$220</span>
                     </div>
                     <div className="flex justify-between">
                        <span className="underline">Cleaning service fee</span>
                        <span>$15</span>
                     </div>
                     <div className="flex justify-between">
                        <span className="underline">Airbnb service fee</span>
                        <span>$33</span>
                     </div>
                  </div>

                  <div className="border-t mt-4 pt-4">
                     <div className="flex justify-between font-semibold">
                        <span>Total before taxes</span>
                        <span>$268</span>
                     </div>
                  </div>
               </div>
            </div>

            {/* Host Info */}
            <div className="flex items-center mt-6 border-t pt-6">
               <div className="w-12 h-12 rounded-full bg-gray-300 mr-3"></div>
               <div>
                  <div className="font-medium">Hosted by Nathan</div>
                  <div className="text-sm text-gray-500">Joined in October 2016</div>
               </div>
            </div>

            {/* Features */}
            <div className="mt-8">
               <h2 className="text-xl font-medium mb-4">What this place offers</h2>
               <div className="grid grid-cols-2 gap-y-4">
                  <div className="flex items-center">
                     <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-3">
                        <rect x="3" y="11" width="18" height="10" rx="2" stroke="currentColor" strokeWidth="2" />
                        <path d="M5 11V7a7 7 0 0114 0v4" stroke="currentColor" strokeWidth="2" />
                     </svg>
                     <span>Lock on bedroom door</span>
                  </div>
                  <div className="flex items-center">
                     <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-3">
                        <path d="M8 3v2M16 3v2M3 8h18M5 4h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V6a2 2 0 012-2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                     </svg>
                     <span>Free cancellation before Apr 29</span>
                  </div>
                  <div className="flex items-center">
                     <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-3">
                        <path d="M9 22V12h6v10M2 12h20M2 7a2 2 0 012-2h16a2 2 0 012 2v15H4a2 2 0 01-2-2V7z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                     </svg>
                     <span>Wifi</span>
                  </div>
                  <div className="flex items-center">
                     <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-3">
                        <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2z" stroke="currentColor" strokeWidth="2" />
                        <path d="M8 11a1 1 0 100-2 1 1 0 000 2zM16 11a1 1 0 100-2 1 1 0 000 2zM12 16a4 4 0 01-4-4h8a4 4 0 01-4 4z" stroke="currentColor" strokeWidth="2" />
                     </svg>
                     <span>Kitchen</span>
                  </div>
               </div>
               <button className="border border-gray-800 rounded-lg px-4 py-2 mt-4 text-sm font-medium">
                  Show all 27 amenities
               </button>
            </div>

            {/* Calendar */}
            <div className="mt-8">
               <h2 className="text-xl font-medium mb-4">8 nights in Villefranche</h2>
               <div className="text-sm text-gray-500 mb-4">Apr 29, 2023 - May 7, 2023</div>

               <div className="flex space-x-8">
                  <div className="flex-1">
                     <div className="text-center mb-4">April 2023</div>
                     <div className="grid grid-cols-7 gap-1 text-center">
                        <div className="text-xs text-gray-500">Su</div>
                        <div className="text-xs text-gray-500">Mo</div>
                        <div className="text-xs text-gray-500">Tu</div>
                        <div className="text-xs text-gray-500">We</div>
                        <div className="text-xs text-gray-500">Th</div>
                        <div className="text-xs text-gray-500">Fr</div>
                        <div className="text-xs text-gray-500">Sa</div>
                        {Array(30).fill(0).map((_, i) => (
                           <div key={i} className={`h-8 w-8 flex items-center justify-center rounded-full ${i === 28 ? 'bg-black text-white' : ''}`}>
                              {i + 1}
                           </div>
                        ))}
                     </div>
                  </div>

                  <div className="flex-1">
                     <div className="text-center mb-4">May 2023</div>
                     <div className="grid grid-cols-7 gap-1 text-center">
                        <div className="text-xs text-gray-500">Su</div>
                        <div className="text-xs text-gray-500">Mo</div>
                        <div className="text-xs text-gray-500">Tu</div>
                        <div className="text-xs text-gray-500">We</div>
                        <div className="text-xs text-gray-500">Th</div>
                        <div className="text-xs text-gray-500">Fr</div>
                        <div className="text-xs text-gray-500">Sa</div>
                        {Array(31).fill(0).map((_, i) => (
                           <div key={i} className={`h-8 w-8 flex items-center justify-center rounded-full ${i === 6 ? 'bg-black text-white' : ''}`}>
                              {i + 1}
                           </div>
                        ))}
                     </div>
                  </div>
               </div>
            </div>

            {/* Reviews */}
            <div className="mt-8 border-t pt-8">
               <div className="flex items-center mb-4">
                  <span className="text-xl font-medium">★ 4.87 · 157 reviews</span>
               </div>

               <div className="grid grid-cols-2 gap-8 mb-8">
                  <div className="space-y-1">
                     <div className="flex justify-between">
                        <span>Cleanliness</span>
                        <div className="flex items-center">
                           <div className="w-24 h-1 bg-gray-300 rounded-full mr-2">
                              <div className="w-[90%] h-1 bg-gray-800 rounded-full"></div>
                           </div>
                           <span>4.8</span>
                        </div>
                     </div>
                     <div className="flex justify-between">
                        <span>Accuracy</span>
                        <div className="flex items-center">
                           <div className="w-24 h-1 bg-gray-300 rounded-full mr-2">
                              <div className="w-[95%] h-1 bg-gray-800 rounded-full"></div>
                           </div>
                           <span>4.9</span>
                        </div>
                     </div>
                  </div>

                  <div className="space-y-1">
                     <div className="flex justify-between">
                        <span>Communication</span>
                        <div className="flex items-center">
                           <div className="w-24 h-1 bg-gray-300 rounded-full mr-2">
                              <div className="w-[95%] h-1 bg-gray-800 rounded-full"></div>
                           </div>
                           <span>4.9</span>
                        </div>
                     </div>
                     <div className="flex justify-between">
                        <span>Location</span>
                        <div className="flex items-center">
                           <div className="w-24 h-1 bg-gray-300 rounded-full mr-2">
                              <div className="w-[90%] h-1 bg-gray-800 rounded-full"></div>
                           </div>
                           <span>4.8</span>
                        </div>
                     </div>
                  </div>
               </div>

               {/* Review Cards */}
               <div className="grid grid-cols-2 gap-8">
                  <div className="mb-6">
                     <div className="flex items-center mb-2">
                        <div className="w-10 h-10 rounded-full bg-gray-300 mr-2"></div>
                        <div>
                           <div className="font-medium">Daniel</div>
                           <div className="text-sm text-gray-500">October 2022</div>
                        </div>
                     </div>
                     <p className="text-sm">Great location, comfortable room, and excellent host. Would definitely stay again!</p>
                     <button className="text-sm font-medium underline mt-2">Show more</button>
                  </div>

                  <div className="mb-6">
                     <div className="flex items-center mb-2">
                        <div className="w-10 h-10 rounded-full bg-gray-300 mr-2"></div>
                        <div>
                           <div className="font-medium">Emma</div>
                           <div className="text-sm text-gray-500">September 2022</div>
                        </div>
                     </div>
                     <p className="text-sm">The room is exactly as pictured. Nathan was a great host and the location is perfect for exploring the area.</p>
                     <button className="text-sm font-medium underline mt-2">Show more</button>
                  </div>
               </div>

               <button className="border border-gray-800 rounded-lg px-4 py-2 mt-4 text-sm font-medium">
                  Show all 157 reviews
               </button>
            </div>

            {/* Location */}
            <div className="mt-8 border-t pt-8">
               <h2 className="text-xl font-medium mb-4">Where you'll be</h2>
               <div className="text-sm mb-4">Villefranche-sur-Mer, Provence-Alpes-Côte d'Azur, France</div>

               <div className="h-80 bg-gray-200 rounded-lg mb-4 relative">
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white rounded-full p-2">
                     <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" stroke="#FF385C" strokeWidth="2" />
                        <circle cx="12" cy="10" r="3" stroke="#FF385C" strokeWidth="2" />
                     </svg>
                  </div>
               </div>
            </div>

            {/* Host */}
            <div className="mt-8 border-t pt-8">
               <h2 className="text-xl font-medium mb-4">Meet your host</h2>

               <div className="border rounded-lg p-6 flex">
                  <div className="mr-6">
                     <div className="w-20 h-20 rounded-full bg-gray-300 mb-2"></div>
                     <div className="text-center font-medium">Nathan</div>
                     <div className="text-xs text-gray-500 text-center">Host since 2016</div>
                  </div>

                  <div className="space-y-2">
                     <div className="flex items-center">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
                           <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="currentColor" />
                        </svg>
                        <span>157 Reviews</span>
                     </div>
                     <div className="flex items-center">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
                           <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span>Identity verified</span>
                     </div>
                     <div className="flex items-center">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
                           <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                           <path d="M12 8v4l3 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                        <span>Response time: within an hour</span>
                     </div>
                  </div>
               </div>
            </div>

            {/* Things to know */}
            <div className="mt-8 border-t pt-8">
               <h2 className="text-xl font-medium mb-4">Things to know</h2>

               <div className="grid grid-cols-3 gap-8">
                  <div>
                     <h3 className="font-medium mb-2">House rules</h3>
                     <ul className="text-sm space-y-2">
                        <li className="flex items-center">
                           <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
                              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                              <path d="M12 8v4l3 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                           </svg>
                           <span>Check-in: 3:00 PM - 8:00 PM</span>
                        </li>
                        <li className="flex items-center">
                           <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
                              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                              <path d="M12 8v4l3 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                           </svg>
                           <span>Checkout before 10:00 AM</span>
                        </li>
                     </ul>
                     <button className="text-sm font-medium underline mt-2">Show more</button>
                  </div>

                  <div>
                     <h3 className="font-medium mb-2">Safety & property</h3>
                     <ul className="text-sm space-y-2">
                        <li className="flex items-center">
                           <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
                              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="2" />
                           </svg>
                           <span>No carbon monoxide alarm</span>
                        </li>
                        <li className="flex items-center">
                           <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
                              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="2" />
                           </svg>
                           <span>Smoke alarm</span>
                        </li>
                     </ul>
                     <button className="text-sm font-medium underline mt-2">Show more</button>
                  </div>

                  <div>
                     <h3 className="font-medium mb-2">Cancellation policy</h3>
                     <p className="text-sm mb-2">Free cancellation before Apr 29. Cancellation after that will not receive a refund.</p>
                     <button className="text-sm font-medium underline">Show more</button>
                  </div>
               </div>
            </div>
         </div>

         {/* Footer */}
         <footer className="mt-8 border-t pt-8 pb-8 text-sm text-gray-500">
            <div className="grid grid-cols-4 gap-8 mb-8">
               <div>
                  <h3 className="font-medium text-gray-800 mb-4">Support</h3>
                  <ul className="space-y-2">
                     <li>Help Center</li>
                     <li>AirCover</li>
                     <li>Safety information</li>
                  </ul>
               </div>

               <div>
                  <h3 className="font-medium text-gray-800 mb-4">Hosting</h3>
                  <ul className="space-y-2">
                     <li>Airbnb your home</li>
                     <li>AirCover for Hosts</li>
                     <li>Hosting resources</li>
                  </ul>
               </div>

               <div>
                  <h3 className="font-medium text-gray-800 mb-4">Airbnb</h3>
                  <ul className="space-y-2">
                     <li>Newsroom</li>
                     <li>New features</li>
                     <li>Careers</li>
                  </ul>
               </div>
            </div>

            <div className="flex justify-between pt-4 border-t">
               <div className="flex space-x-4">
                  <span>© 2023 Airbnb, Inc.</span>
                  <span>·</span>
                  <span>Terms</span>
                  <span>·</span>
                  <span>Sitemap</span>
                  <span>·</span>
                  <span>Privacy</span>
               </div>

               <div className="flex items-center space-x-4">
                  <span>English (US)</span>
                  <span>$ USD</span>
                  <div className="flex space-x-2">
                     <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3V2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                     </svg>
                     <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5 0-.28-.03-.56-.08-.83A7.72 7.72 0 0023 3z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                     </svg>
                     <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="2" />
                        <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
                        <circle cx="18" cy="6" r="1" fill="currentColor" />
                     </svg>
                  </div>
               </div>
            </div>
         </footer>
      </div>
   )
}

export default AccomDetail