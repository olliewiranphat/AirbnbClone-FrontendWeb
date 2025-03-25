import React from 'react'
import { ClockArrowDown, HandCoins, Logs, ScanBarcode } from 'lucide-react'

function OverviewTable() {
    return (
        <>
            <div className='flex-1 bg-[#01a4ec] flex flex-col gap-4 p-4 rounded-sm text-white'>
                <span className='account'>Total Rervervation</span>
                <div className='flex gap-2 items-center'>
                    <ScanBarcode />
                    <span className='font-bold text-3xl'>5,867</span>
                </div>
            </div>
            <div className='flex-1 bg-[#c56eff] flex flex-col gap-4 p-4 rounded-sm text-white'>
                <span className='account'>Total Booking</span>
                <div className='flex gap-2 items-center'>
                    <Logs />
                    <span className='font-bold text-3xl'>6,782</span>
                </div>
            </div>
            <div className='flex-1 bg-[#ed9f31] flex flex-col gap-4 p-4 rounded-sm text-white'>
                <span className='account'>Total Profits</span>
                <div className='flex gap-2 items-center'>
                    <HandCoins />
                    <span className='font-bold text-3xl'>฿124,590</span>
                </div>
            </div>
            <div className='flex-1 bg-[#50df51] flex flex-col gap-4 p-4 rounded-sm text-white'>
                <span className='account'>New Reservations</span>
                <div className='flex gap-2 items-center'>
                    <ClockArrowDown />
                    <span className='font-bold text-3xl'>4,235</span>
                </div>
            </div>
        </>
    )
}

export default OverviewTable