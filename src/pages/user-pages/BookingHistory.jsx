import React from 'react'
import { X, CheckCircle } from 'lucide-react';

const bookings = [
   {
      bookingRef: 'K1748',
      date: 'November 29, 2019',
      event: 'DNA Festival',
      eventDate: 'January 23, 2019',
      tickets: 'ADULT x1',
      amount: '€70.00',
      status: 'canceled',
      cancelAction: 'Cancel booking'
   },
   {
      bookingRef: 'K7198',
      date: 'November 18, 2019',
      event: 'RISE Conference',
      eventDate: 'January 23, 2019',
      tickets: 'ADULT x1',
      amount: '€25.00',
      status: 'confirmed',
      cancelAction: null
   },
   {
      bookingRef: 'K7175',
      date: 'November 18, 2019',
      event: 'SME Conference',
      eventDate: 'November 23, 2019',
      tickets: 'ADULT x1',
      amount: '€34.00',
      status: 'confirmed',
      cancelAction: null
   }
];

function BookingHistory() {

   return (
      <div className="w-[1200px] mx-auto p-4 font-sans mt-12">
         <h2 className="text-2xl font-semibold text-black mb-4">Booking History</h2>

         <div className="overflow-x-auto">
            <table className="min-w-full border-collapse text-sm">
               <thead>
                  <tr className="bg-[#fe2c54] text-white">
                     <th className="py-2 px-3 text-left text-l font-medium uppercase tracking-wider">Booking Ref</th>
                     <th className="py-2 px-3 text-left text-l font-medium uppercase tracking-wider">Date</th>
                     <th className="py-2 px-3 text-left text-l font-medium uppercase tracking-wider">Event</th>
                     <th className="py-2 px-3 text-left text-l font-medium uppercase tracking-wider">Tickets</th>
                     <th className="py-2 px-3 text-left text-l font-medium uppercase tracking-wider">Amount</th>
                     <th className="py-2 px-3 text-left text-l font-medium uppercase tracking-wider">Status</th>
                     <th className="py-2 px-3 text-left text-l font-medium uppercase tracking-wider">Cancel</th>
                  </tr>
               </thead>
               <tbody className="bg-white divide-y divide-gray-200">
                  {bookings.map((booking) => (
                     <tr key={booking.bookingRef} className="hover:bg-gray-50">
                        <td className="py-3 px-3 text-blue-600 font-medium">{booking.bookingRef}</td>
                        <td className="py-3 px-3 text-gray-600">{booking.date}</td>
                        <td className="py-3 px-3">
                           <div className="font-medium">{booking.event}</div>
                           <div className="text-l text-gray-500">{booking.eventDate}</div>
                        </td>
                        <td className="py-3 px-3 text-gray-600">{booking.tickets}</td>
                        <td className="py-3 px-3 text-gray-600">{booking.amount}</td>
                        <td className="py-3 px-3">
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
                        </td>
                        <td className="py-3 px-3">
                           {booking.cancelAction && (
                              <a href="#" className="text-blue-600 hover:underline text-l">
                                 {booking.cancelAction}
                              </a>
                           )}
                        </td>
                     </tr>
                  ))}
               </tbody>
            </table>
         </div>
      </div>
   );
};

export default BookingHistory