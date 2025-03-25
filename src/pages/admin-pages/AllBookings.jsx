import React, { useEffect, useState } from 'react'
import { useAuth } from '@clerk/clerk-react';
import useAdminStore from '../../store/useAdminStore';

function AllBookings() {
  const { getToken } = useAuth()
  const actionGetBooking = useAdminStore(state => state.actionGetBooking)
  // const allBookings = useAdminStore(state=>state.allBookings)
  const [allBookings, setAllBookings] = useState([]);


  useEffect(() => {
    const fetchAllBookings = async () => {
      const token = await getToken()
      const results = await actionGetBooking(token);
      setAllBookings(results);
    }
    fetchAllBookings()
  }, [])
  console.log('allBookings', allBookings);
  return (
    <div className="p-4 mr-4 mt-[1%]">
      <h2 className="text-2xl font-bold mb-4">All Booking</h2>
      <div className="overflow-auto rounded-lg shadow">
        <table className="w-full border-collapse bg-white text-left text-sm text-gray-600">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-4">ID</th>
              <th className="p-4">CustomerName</th>
              <th className="p-4">CheckInDate</th>
              <th className="p-4">CheckoutDate</th>
              <th className="p-4">GuestQuaintity</th>
              <th className="p-4">TotalPrice</th>
              <th className="p-4">BookStatus</th>
              <th className="p-4">Created At</th>
            </tr>
          </thead>
          <tbody>
            {allBookings?.length > 0 && allBookings?.map((booking, index) => (
              <tr key={booking.id} className="border-t hover:bg-gray-100">
                <td className="p-4">{index + 1}</td>
                <td className="p-4 font-semibold">{}</td>
                <td className="p-4 font-semibold">{booking.checkOutDate}</td>
                <td className="p-4 font-semibold">{booking.checkInDate}</td>
                <td className="p-4 text-blue-600 underline">{booking.guestQTY}</td>
                <td className="p-4">{booking.totalPrice}</td>
                <td className="p-4">{booking.bookingStatus}</td>
                <td className="p-4">{booking.createAt}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AllBookings