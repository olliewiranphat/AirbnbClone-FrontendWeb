import React from 'react'

function RecentBookingITEM({ item }) {
    console.log('item', item);

    return (
        <div className='flex justify-between w-full'>
            <span className='text-[11px] font-semibold text-gray-900'>Product</span>
            <span className='text-[11px] font-semibold text-gray-900'>Amount</span>
            <span className='text-[11px] font-semibold text-gray-900'>Total Price</span>
            <span className='text-[11px] font-semibold text-gray-900'>Customer Name</span>
            <span className='text-[11px] font-semibold text-gray-900'>Order Status</span>
        </div>
    )
}

export default RecentBookingITEM