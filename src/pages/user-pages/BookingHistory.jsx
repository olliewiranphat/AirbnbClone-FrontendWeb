import React from 'react'
import { X, CheckCircle, ArrowBigLeft } from 'lucide-react';

const bookings = [
   {
      BookingID: 'K1748',
      CheckInDate: 'November 29, 2019',
      CheckOutDate: 'January 23, 2019',
      TotalPrice: '€70.00',
      BookingStatus: 'ADULT x1',
      Payment: '',
      status: 'canceled',
      cancelAction: 'Cancel booking'
   },
   {
      BookingID: 'K7198',
      CheckInDate: 'November 18, 2019',
      CheckOutDate: 'January 23, 2019',
      TotalPrice: '€25.00',
      BookingStatus: 'ADULT x1',
      Payment: '',
      status: 'confirmed',
      cancelAction: null
   },
   {
      BookingID: 'K7175',
      CheckInDate: 'November 18, 2019',
      CheckOutDate: 'November 23, 2019',
      TotalPrice: '€34.00',
      BookingStatus: 'ADULT x1',
      Payment: '',
      status: 'confirmed',
      cancelAction: null
   }
];

function BookingHistory() {

   return (
      <div className="w-[1200px] mx-auto p-4 font-sans mt-12">
         <div className=" flex items-start justify-start mb-10">
            <button className="flex gap-3 items-center px-6 py-2 font-medium bg-[#fd2d52] text-white w-fit transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]">
            <ArrowBigLeft />Home
            </button>
         </div>
         <h2 className="text-3xl font-bold text-black mb-7">Booking History</h2>
         <div className="overflow-x-auto">
            <table className="min-w-full border-collapse text-sm">
               <thead>
                  <tr className="bg-[#fe2c54] text-white ">
                     <th className="py-2 px-3 text-center text-l font-medium uppercase tracking-wider">Booking ID</th>
                     <th className="py-2 px-3 text-center text-l font-medium uppercase tracking-wider">Check In Date</th>
                     <th className="py-2 px-3 text-center text-l font-medium uppercase tracking-wider">Check Out Date</th>
                     <th className="py-2 px-3 text-center text-l font-medium uppercase tracking-wider">Total Price</th>
                     {/* <th className="py-2 px-3 text-center text-l font-medium uppercase tracking-wider">Booking Status</th> */}
                     <th className="py-2 px-3 text-center text-l font-medium uppercase tracking-wider">Status</th>
                     <th className="py-2 px-3 text-center text-l font-medium uppercase tracking-wider">Payment</th>
                     <th className="py-2 px-3 text-center text-l font-medium uppercase tracking-wider">Cancel</th>
                  </tr>
               </thead>
               <tbody className="bg-white divide-y divide-gray-200">
                  {bookings.map((booking) => (
                     <tr key={booking.BookingID} className="hover:bg-gray-50">
                        <td className="py-3 px-3 text-blue-600 font-medium text-center">{booking.BookingID}</td>
                        <td className="py-3 px-3 text-gray-600 text-center">{booking.CheckInDate}</td>
                        <td className="py-3 px-3">
                           {/* <div className="font-medium">{booking.event}</div> */}
                           <div className="text-l text-gray-500 text-center">{booking.CheckOutDate}</div>
                        </td>
                        <td className="py-3 px-3 text-gray-600 text-center">{booking.TotalPrice}</td>
                        {/* <td className="py-3 px-3 text-gray-600">{booking.amount}</td> */}
                        <td className="py-3 px-3 text-center">
                           {booking.status === 'canceled' ? (
                              <div className="flex items-center  text-red-600">
                                 <X size={16} className="mr-1" />
                                 <span>canceled</span>
                              </div>
                           ) : (
                              <div className="flex items-center text-green-600">
                                 <CheckCircle size={16} className="mr-1" />
                                 <span>confirmed</span>
                              </div>
                           )}
                        </td>
                        {/* <td className="py-3 px-3 text-center">
                           {booking.status === 'canceled' ? (
                              <div className="flex items-center text-red-600">
                                 <X size={16} className="mr-1" />
                                 <span>canceled</span>
                              </div>
                           ) : (
                              <div className="flex items-center text-green-600">
                                 <CheckCircle size={16} className="mr-1" />
                                 <span>confirmed</span>
                              </div>
                           )}
                        </td> */}
                        <td className="py-3 px-3">
                           <div className=" flex items-center justify-center">
                              <button className="px-6 py-2 font-medium bg-[#fd2d52] text-white w-fit transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]">
                                 Payment
                              </button>
                           </div>
                        </td>
                        <td className="py-3 px-3">
                           <div className=" flex items-center justify-center">
                              <button className="px-6 py-2 font-medium bg-[#fd2d52] text-white w-fit transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]">
                                 Cancel
                              </button>
                           </div>
                        </td>
                        {/* <td className="py-3 px-3">
                           {booking.cancelAction && (
                              <a href="#" className="text-blue-600 hover:underline text-l">
                                 {booking.cancelAction}
                              </a>
                           )}
                        </td> */}
                     </tr>
                  ))}
               </tbody>
            </table>
         </div>
      </div>
   );
};

export default BookingHistory