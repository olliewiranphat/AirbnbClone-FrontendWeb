import React from 'react'
import RecentBookingITEM from './RecentBookingITEM'

function RecentBooking({ allUserBooking }) {
    return (
        <div className='w-[80%] rounded-sm '>
            <div className='p-4 text-white text-[14px] bg-[#4D5562]'>Recent Orders</div>
            <div className='bg-white p-4'>
                <div className='flex justify-between w-full'>
                    <span className='text-[11px] font-semibold text-gray-900'>Product</span>
                    <span className='text-[11px] font-semibold text-gray-900'>Amount</span>
                    <span className='text-[11px] font-semibold text-gray-900'>Total Price</span>
                    <span className='text-[11px] font-semibold text-gray-900'>Customer Name</span>
                    <span className='text-[11px] font-semibold text-gray-900'>Order Status</span>
                </div>
                {
                    allUserBooking.length > 0 && allUserBooking.map((item, inx) => (<RecentBookingITEM key={inx} item={item} />))
                }
            </div>
        </div>
    )
}

export default RecentBooking