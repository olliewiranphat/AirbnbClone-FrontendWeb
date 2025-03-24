// import React, { useState, useEffect } from 'react'
// import { X, CheckCircle, ArrowBigLeft } from 'lucide-react';
// import ReloadLink from '../../utils/ReloadLink';
// import axios from 'axios';

// function BookingHistory() {
//    const [bookings, setBookings] = useState([]);
//    const [loading, setLoading] = useState(true);
//    const [error, setError] = useState(null);

//    useEffect(() => {
//       const fetchBookings = async () => {
//          try {
//             setLoading(true);
//             const response = await axios.get('http://localhost:8008/user/getbooking');
//             if (response.data.success) {
//                setBookings(response.data.data);
//             } else {
//                setError('Failed to fetch bookings');
//             }
//          } catch (err) {
//             setError('Error fetching bookings: ' + err.message);
//          } finally {
//             setLoading(false);
//          }
//       };

//       fetchBookings();
//    }, []);

//    // Format date from ISO to readable format
//    const formatDate = (dateString) => {
//       const date = new Date(dateString);
//       return date.toLocaleDateString();
//    };

//    // Format price to display currency
//    const formatPrice = (price) => {
//       return new Intl.NumberFormat('th-TH', { style: 'currency', currency: 'THB' }).format(price);
//    };

//    return (
//       <div className="w-[1200px] mx-auto p-4 font-sans mt-12">
//          <div className="flex items-start justify-start mb-10">
//             <ReloadLink to="/" className="flex gap-3 items-center px-6 py-2 font-medium bg-[#fd2d52] text-white w-fit transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]">
//                <ArrowBigLeft />Home
//             </ReloadLink>
//          </div>
//          <h2 className="text-3xl font-bold text-black mb-7">Booking History</h2>

//          {loading ? (
//             <div className="text-center py-8">Loading bookings...</div>
//          ) : error ? (
//             <div className="text-center py-8 text-red-600">{error}</div>
//          ) : bookings.length === 0 ? (
//             <div className="text-center py-8">No booking history found</div>
//          ) : (
//             <div className="overflow-x-auto">
//                <table className="min-w-full border-collapse text-sm">
//                   <thead>
//                      <tr className="bg-[#fe2c54] text-white ">
//                         <th className="py-2 px-3 text-center text-l font-medium uppercase tracking-wider">Booking ID</th>
//                         <th className="py-2 px-3 text-center text-l font-medium uppercase tracking-wider">Check In Date</th>
//                         <th className="py-2 px-3 text-center text-l font-medium uppercase tracking-wider">Check Out Date</th>
//                         <th className="py-2 px-3 text-center text-l font-medium uppercase tracking-wider">Total Price</th>
//                         <th className="py-2 px-3 text-center text-l font-medium uppercase tracking-wider">Status</th>
//                         <th className="py-2 px-3 text-center text-l font-medium uppercase tracking-wider">Payment</th>
//                         <th className="py-2 px-3 text-center text-l font-medium uppercase tracking-wider">Cancel</th>
//                      </tr>
//                   </thead>
//                   <tbody className="bg-white divide-y divide-gray-200">
//                      {bookings.map((booking) => (
//                         <tr key={booking.id} className="hover:bg-gray-50">
//                            <td className="py-3 px-3 text-blue-600 font-medium text-center">{booking.bookingID}</td>
//                            <td className="py-3 px-3 text-gray-600 text-center">{formatDate(booking.checkInDate)}</td>
//                            <td className="py-3 px-3">
//                               <div className="text-l text-gray-500 text-center">{formatDate(booking.checkOutDate)}</div>
//                            </td>
//                            <td className="py-3 px-3 text-gray-600 text-center">{formatPrice(booking.totalPrice)}</td>
//                            <td className="py-3 px-3 text-center">
//                               {booking.status === 'CANCELLED' ? (
//                                  <div className="flex items-center justify-center text-red-600">
//                                     <X size={16} className="mr-1" />
//                                     <span>canceled</span>
//                                  </div>
//                               ) : (
//                                  <div className="flex items-center justify-center text-green-600">
//                                     <CheckCircle size={16} className="mr-1" />
//                                     <span>confirmed</span>
//                                  </div>
//                               )}
//                            </td>
//                            <td className="py-3 px-3">
//                               <div className="flex items-center justify-center">
//                                  {booking.Payment && booking.Payment.status === 'PAID' ? (
//                                     <div className="flex items-center justify-center text-green-600">
//                                        <CheckCircle size={16} className="mr-1" />
//                                        <span>Paid</span>
//                                     </div>
//                                  ) : (
//                                     <ReloadLink to={`/booking/payment/${booking.id}`} className="px-6 py-2 font-medium bg-[#fd2d52] text-white w-fit transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]">
//                                        Payment
//                                     </ReloadLink>
//                                  )}
//                               </div>
//                            </td>
//                            <td className="py-3 px-3">
//                               <div className="flex items-center justify-center">
//                                  {booking.status !== 'CANCELLED' ? (
//                                     <ReloadLink to={`/booking/cancel/${booking.id}`} className="px-6 py-2 font-medium bg-[#fd2d52] text-white w-fit transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]">
//                                        Cancel
//                                     </ReloadLink>
//                                  ) : (
//                                     <span className="text-gray-400">Cancelled</span>
//                                  )}
//                               </div>
//                            </td>
//                         </tr>
//                      ))}
//                   </tbody>
//                </table>
//             </div>
//          )}
//       </div>
//    );
// };

// export default BookingHistory;



import React, { useState, useEffect } from 'react'
import { X, CheckCircle, ArrowBigLeft } from 'lucide-react';
import ReloadLink from '../../utils/ReloadLink';
import axios from 'axios';

function BookingHistory() {
   const [bookings, setBookings] = useState([]);
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState(null);
   const [cancelLoading, setCancelLoading] = useState(null);

   useEffect(() => {
      fetchBookings();
   }, []);

   const fetchBookings = async () => {
      try {
         setLoading(true);
         const response = await axios.get('http://localhost:8081/user/getbooking');
         if (response.data.success) {
            setBookings(response.data.data);
         } else {
            setError('Failed to fetch bookings');
         }
      } catch (err) {
         setError('Error fetching bookings: ' + err.message);
      } finally {
         setLoading(false);
      }
   };

   // Handle booking cancellation
   const handleCancelBooking = async (bookingID) => {
      // Show confirmation dialog before canceling
      if (!window.confirm('Are you sure you want to cancel this booking?')) {
         return;
      }

      try {
         setCancelLoading(bookingID);
         // Call the backend API to cancel the booking
         const response = await axios.delete(`http://localhost:8081/booking/cancel/${bookingID}`);

         if (response.data.message === "Success Cancel UserBookings") {
            // Update local state to reflect the cancelled booking
            setBookings(bookings.map(booking => {
               if (booking.bookingID === bookingID) {
                  return { ...booking, status: 'CANCELLED' };
               }
               return booking;
            }));
            alert('Booking cancelled successfully');
         } else {
            alert('Failed to cancel booking');
         }
      } catch (err) {
         console.error('Error cancelling booking:', err);
         alert(`Error cancelling booking: ${err.message}`);
      } finally {
         setCancelLoading(null);
         // Refresh the bookings list
         fetchBookings();
      }
   };

   // Format date from ISO to readable format
   const formatDate = (dateString) => {
      const date = new Date(dateString);
      return date.toLocaleDateString();
   };

   // Format price to display currency
   const formatPrice = (price) => {
      return new Intl.NumberFormat('th-TH', { style: 'currency', currency: 'THB' }).format(price);
   };

   return (
      <div className="w-[1200px] mx-auto p-4 font-sans mt-12">
         <div className="flex items-start justify-start mb-10">
            <ReloadLink to="/" className="flex gap-3 items-center px-6 py-2 font-medium bg-[#fd2d52] text-white w-fit transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]">
               <ArrowBigLeft />Home
            </ReloadLink>
         </div>
         <h2 className="text-3xl font-bold text-black mb-7">Booking History</h2>

         {loading ? (
            <div className="text-center py-8">Loading bookings...</div>
         ) : error ? (
            <div className="text-center py-8 text-red-600">{error}</div>
         ) : bookings.length === 0 ? (
            <div className="text-center py-8">No booking history found</div>
         ) : (
            <div className="overflow-x-auto">
               <table className="min-w-full border-collapse text-sm">
                  <thead>
                     <tr className="bg-[#fe2c54] text-white ">
                        <th className="py-2 px-3 text-center text-l font-medium uppercase tracking-wider">Booking ID</th>
                        <th className="py-2 px-3 text-center text-l font-medium uppercase tracking-wider">Check In Date</th>
                        <th className="py-2 px-3 text-center text-l font-medium uppercase tracking-wider">Check Out Date</th>
                        <th className="py-2 px-3 text-center text-l font-medium uppercase tracking-wider">Total Price</th>
                        <th className="py-2 px-3 text-center text-l font-medium uppercase tracking-wider">Status</th>
                        <th className="py-2 px-3 text-center text-l font-medium uppercase tracking-wider">Payment</th>
                        <th className="py-2 px-3 text-center text-l font-medium uppercase tracking-wider">Cancel</th>
                     </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                     {bookings.map((booking) => (
                        <tr key={booking.id} className="hover:bg-gray-50">
                           <td className="py-3 px-3 text-blue-600 font-medium text-center">{booking.bookingID}</td>
                           <td className="py-3 px-3 text-gray-600 text-center">{formatDate(booking.checkInDate)}</td>
                           <td className="py-3 px-3">
                              <div className="text-l text-gray-500 text-center">{formatDate(booking.checkOutDate)}</div>
                           </td>
                           <td className="py-3 px-3 text-gray-600 text-center">{formatPrice(booking.totalPrice)}</td>
                           <td className="py-3 px-3 text-center">
                              {booking.status === 'CANCELLED' ? (
                                 <div className="flex items-center justify-center text-red-600">
                                    <X size={16} className="mr-1" />
                                    <span>canceled</span>
                                 </div>
                              ) : (
                                 <div className="flex items-center justify-center text-green-600">
                                    <CheckCircle size={16} className="mr-1" />
                                    <span>confirmed</span>
                                 </div>
                              )}
                           </td>
                           <td className="py-3 px-3">
                              <div className="flex items-center justify-center">
                                 {booking.Payment && booking.Payment.status === 'PAID' ? (
                                    <div className="flex items-center justify-center text-green-600">
                                       <CheckCircle size={16} className="mr-1" />
                                       <span>Paid</span>
                                    </div>
                                 ) : (
                                    <ReloadLink to={`/booking/payment/${booking.id}`} className="px-6 py-2 font-medium bg-[#fd2d52] text-white w-fit transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]">
                                       Payment
                                    </ReloadLink>
                                 )}
                              </div>
                           </td>
                           <td className="py-3 px-3">
                              <div className="flex items-center justify-center">
                                 {booking.status !== 'CANCELLED' ? (
                                    <button
                                       onClick={() => handleCancelBooking(booking.bookingID)}
                                       disabled={cancelLoading === booking.bookingID}
                                       className="px-6 py-2 font-medium bg-[#fd2d52] text-white w-fit transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]"
                                    >
                                       {cancelLoading === booking.bookingID ? 'Processing...' : 'Cancel'}
                                    </button>
                                 ) : (
                                    <span className="text-gray-400">Cancelled</span>
                                 )}
                              </div>
                           </td>
                        </tr>
                     ))}
                  </tbody>
               </table>
            </div>
         )}
      </div>
   );
};

export default BookingHistory;




// import React, { useState, useEffect } from 'react'
// import { X, CheckCircle, ArrowBigLeft } from 'lucide-react';
// import ReloadLink from '../../utils/ReloadLink';
// import axios from 'axios';

// function BookingHistory() {
//    const [bookings, setBookings] = useState([]);
//    const [loading, setLoading] = useState(true);
//    const [error, setError] = useState(null);
//    const [cancelLoading, setCancelLoading] = useState(null);

//    useEffect(() => {
//       fetchBookings();
//    }, []);

//    const fetchBookings = async () => {
//       try {
//          setLoading(true);
//          // Update the endpoint to match your backend route
//          const response = await axios.get('http://localhost:8008/booking/history', {
//             // Include credentials to send auth cookies if needed
//             withCredentials: true
//          });

//          if (response.data.message === "Success Get UserBookings") {
//             // Assuming the backend will now include the data in the response
//             setBookings(response.data.myBookings || []);
//          } else {
//             setError('Failed to fetch bookings');
//          }
//       } catch (err) {
//          setError('Error fetching bookings: ' + err.message);
//       } finally {
//          setLoading(false);
//       }
//    };

//    // Handle booking cancellation
//    const handleCancelBooking = async (bookingID) => {
//       // Show confirmation dialog before canceling
//       if (!window.confirm('Are you sure you want to cancel this booking?')) {
//          return;
//       }

//       try {
//          setCancelLoading(bookingID);
//          // Call the backend API to cancel the booking
//          const response = await axios.delete(`http://localhost:8008/booking/cancel/${bookingID}`, {
//             withCredentials: true
//          });

//          if (response.data.message === "Success Cancel UserBookings") {
//             // Update local state to reflect the cancelled booking
//             setBookings(bookings.map(booking => {
//                if (booking.bookingID === bookingID) {
//                   return { ...booking, status: 'CANCELLED' };
//                }
//                return booking;
//             }));
//             alert('Booking cancelled successfully');
//          } else {
//             alert('Failed to cancel booking');
//          }
//       } catch (err) {
//          console.error('Error cancelling booking:', err);
//          alert(`Error cancelling booking: ${err.message}`);
//       } finally {
//          setCancelLoading(null);
//          // Refresh the bookings list
//          fetchBookings();
//       }
//    };

//    // Format date from ISO to readable format
//    const formatDate = (dateString) => {
//       const date = new Date(dateString);
//       return date.toLocaleDateString();
//    };

//    // Format price to display currency
//    const formatPrice = (price) => {
//       return new Intl.NumberFormat('th-TH', { style: 'currency', currency: 'THB' }).format(price);
//    };

//    return (
//       <div className="w-[1200px] mx-auto p-4 font-sans mt-12">
//          <div className="flex items-start justify-start mb-10">
//             <ReloadLink to="/" className="flex gap-3 items-center px-6 py-2 font-medium bg-[#fd2d52] text-white w-fit transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]">
//                <ArrowBigLeft />Home
//             </ReloadLink>
//          </div>
//          <h2 className="text-3xl font-bold text-black mb-7">Booking History</h2>

//          {loading ? (
//             <div className="text-center py-8">Loading bookings...</div>
//          ) : error ? (
//             <div className="text-center py-8 text-red-600">{error}</div>
//          ) : bookings.length === 0 ? (
//             <div className="text-center py-8">No booking history found</div>
//          ) : (
//             <div className="overflow-x-auto">
//                <table className="min-w-full border-collapse text-sm">
//                   <thead>
//                      <tr className="bg-[#fe2c54] text-white ">
//                         <th className="py-2 px-3 text-center text-l font-medium uppercase tracking-wider">Booking ID</th>
//                         <th className="py-2 px-3 text-center text-l font-medium uppercase tracking-wider">Check In Date</th>
//                         <th className="py-2 px-3 text-center text-l font-medium uppercase tracking-wider">Check Out Date</th>
//                         <th className="py-2 px-3 text-center text-l font-medium uppercase tracking-wider">Total Price</th>
//                         <th className="py-2 px-3 text-center text-l font-medium uppercase tracking-wider">Status</th>
//                         <th className="py-2 px-3 text-center text-l font-medium uppercase tracking-wider">Payment</th>
//                         <th className="py-2 px-3 text-center text-l font-medium uppercase tracking-wider">Cancel</th>
//                      </tr>
//                   </thead>
//                   <tbody className="bg-white divide-y divide-gray-200">
//                      {bookings.map((booking) => (
//                         <tr key={booking.id} className="hover:bg-gray-50">
//                            <td className="py-3 px-3 text-blue-600 font-medium text-center">{booking.id}</td>
//                            <td className="py-3 px-3 text-gray-600 text-center">{formatDate(booking.checkInDate)}</td>
//                            <td className="py-3 px-3">
//                               <div className="text-l text-gray-500 text-center">{formatDate(booking.checkOutDate)}</div>
//                            </td>
//                            <td className="py-3 px-3 text-gray-600 text-center">{formatPrice(booking.totalPrice)}</td>
//                            <td className="py-3 px-3 text-center">
//                               {booking.status === 'CANCELLED' ? (
//                                  <div className="flex items-center justify-center text-red-600">
//                                     <X size={16} className="mr-1" />
//                                     <span>canceled</span>
//                                  </div>
//                               ) : (
//                                  <div className="flex items-center justify-center text-green-600">
//                                     <CheckCircle size={16} className="mr-1" />
//                                     <span>confirmed</span>
//                                  </div>
//                               )}
//                            </td>
//                            <td className="py-3 px-3">
//                               <div className="flex items-center justify-center">
//                                  {booking.payment && booking.payment.status === 'PAID' ? (
//                                     <div className="flex items-center justify-center text-green-600">
//                                        <CheckCircle size={16} className="mr-1" />
//                                        <span>Paid</span>
//                                     </div>
//                                  ) : (
//                                     <ReloadLink to={`/booking/payment/${booking.id}`} className="px-6 py-2 font-medium bg-[#fd2d52] text-white w-fit transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]">
//                                        Payment
//                                     </ReloadLink>
//                                  )}
//                               </div>
//                            </td>
//                            <td className="py-3 px-3">
//                               <div className="flex items-center justify-center">
//                                  {booking.status !== 'CANCELLED' ? (
//                                     <button
//                                        onClick={() => handleCancelBooking(booking.id)}
//                                        disabled={cancelLoading === booking.id}
//                                        className="px-6 py-2 font-medium bg-[#fd2d52] text-white w-fit transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]"
//                                     >
//                                        {cancelLoading === booking.id ? 'Processing...' : 'Cancel'}
//                                     </button>
//                                  ) : (
//                                     <span className="text-gray-400">Cancelled</span>
//                                  )}
//                               </div>
//                            </td>
//                         </tr>
//                      ))}
//                   </tbody>
//                </table>
//             </div>
//          )}
//       </div>
//    );
// };

// export default BookingHistory;