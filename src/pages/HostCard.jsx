import React from 'react';
import { Star, BriefcaseMedical, Globe, ChevronRight } from 'lucide-react';

const HostCard = () => {
   return (
      <>
         {/* max-w-md mx-auto p-4 bg-white */}
         <div className="flex gap-18">
            <div className=" border-gray-200 pt-6 pb-2  max-w-md p-4 bg-white ">
               <h2 className="text-2xl font-bold mb-6">Meet your host</h2>

               <div className="bg-white rounded-lg shadow-xl mb-6">
                  <div className="p-6 flex gap-8 items-center justify-evenly">

                     <div className="flex flex-col items-center justify-center">
                        <div className="relative">
                           <div className="avatar">
                              <div className="w-20 rounded-full">
                                 <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                              </div>
                           </div>
                           <div className="absolute bottom-0 right-0 bg-pink-500 rounded-full p-1">
                              <Star className="w-4 h-4 text-white" />
                           </div>
                        </div>

                        <div className="flex flex-col items-center justify-center mt-2">
                           <h3 className="text-3xl font-bold">Baker</h3>
                           <p className="text-gray-600">Host</p>
                        </div>
                     </div>

                     <div className="mt-1 border-gray-200 pt-1">
                        <div className="gap-4 flex flex-col">
                           <div className='border-b-2'>
                              <p className="text-xl font-bold">2793</p>
                              <p className="text-sm text-gray-600">Reviews</p>
                           </div>
                           <div className='border-b-2'>
                              <div className="flex items-center">
                                 <p className="text-xl font-bold">4.8</p>
                                 <Star className="w-4 h-4 ml-1 text-black" />
                              </div>
                              <p className="text-sm text-gray-600">Rating</p>
                           </div>
                           <div className='border-b-2'>
                              <p className="text-xl font-bold">11</p>
                              <p className="text-sm text-gray-600">Years hosting</p>
                           </div>
                        </div>
                     </div>

                  </div>
               </div>

               <div className="space-y-4 mb-4 mt-10">
                  <div className="flex items-center">
                     <BriefcaseMedical className="w-6 h-6 mr-4 text-gray-700" />
                     <span className="text-gray-800">My work: Hospitality</span>
                  </div>

                  <div className="flex items-center">
                     <Globe className="w-6 h-6 mr-4 text-gray-700" />
                     <span className="text-gray-800">Speaks English, Thai, and Chinese</span>
                  </div>
               </div>

               <div className="mb-6">
                  <p className="text-gray-800">
                     COVID 19 update. In this climate, we know travel may not be your first thought, but I want you to know th...
                  </p>
                  <button className="flex items-center text-gray-800 font-semibold mt-2">
                     Show more <ChevronRight className="w-4 h-4 ml-1" />
                  </button>
               </div>

               {/* <div className="border-b border-gray-200 pb-6"></div> */}
            </div>

            {/* Right Section - Details */}
            {/* Co-hosts */}
            <div>
               <div className="mb-6 mt-17">
                  <h3 className="text-lg font-medium mb-3">Co-hosts</h3>
                  <div className="flex space-x-4">
                     <div className="avatar flex items-center justify-center gap-4">
                        <div className="w-12 rounded-full">
                           <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                        </div>
                        <p className="text-s">Tk</p>
                     </div>
                     <div className="avatar flex items-center justify-center gap-4">
                        <div className="w-12 rounded-full">
                           <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                        </div>
                        <p className="text-s">Piyasak</p>
                     </div>
                     <div className="avatar flex items-center justify-center gap-4">
                        <div className="w-12 rounded-full">
                           <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                        </div>
                        <p className="text-s">Bee</p>
                     </div>
                     <div className="avatar flex items-center justify-center gap-4">
                        <div className="w-12 rounded-full">
                           <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                        </div>
                        <p className="text-s">Chanaworn</p>
                     </div>
                  </div>
               </div>

               {/* Host details */}
               <div className="mb-6 mt-5">
                  <h3 className="text-lg font-semibold mb-2">Host details</h3>
                  <div className="space-y-2">
                     <p className="text-black">Response rate: 100%</p>
                     <p className="text-black">Responds within an hour</p>
                  </div>
                  <button className="btn btn-neutral mt-6 w-37 h-13 font-bold text-l hover:bg-slate-600 rounded-xl">Message host</button>
               </div>
            </div>
         </div>
      </>
   );
};

export default HostCard;