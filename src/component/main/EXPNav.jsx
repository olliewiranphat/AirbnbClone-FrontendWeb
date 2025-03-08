import { Search } from 'lucide-react'
import React from 'react'

function EXPNav() {
    return (
        <div className='w-[66%] h-[66px] mx-auto p-2 rounded-full border border-gray-300 shadow-md flex justify-between items-center'>
            <div className='flex-1 ml-6'>
                <div className='flex items-center  justify-between'>
                    <div className='flex flex-col'>
                        <span className='text-[12px] font-semibold'>Where</span>
                        <span className='text-[14px] text-[#6a6a6a]'>Search destinations</span>
                    </div>
                    <div className='w-[5px] h-[30px] border-r-[1px] border-gray-300'></div>
                </div>
            </div>
            <div className='flex-1 py-2 pl-6 '>
                <div className='flex items-center justify-between'>
                    <div className='flex flex-col'>
                        <span className='text-[12px] font-semibold'>Date</span>
                        <span className='text-[14px] text-[#6a6a6a]'>Add dates</span>
                    </div>
                    <div className='w-[5px] h-[30px] border-r-[1px] border-gray-300'></div>
                </div>
            </div>
            <div className='flex-1 flex flex-col py-2 pl-6'>
                <span className='text-[12px] font-semibold'>Who</span>
                <span className='text-[14px] text-[#6a6a6a]'>Add guests</span>
            </div>
            <button className='rounded-full bg-[#FF385C] hover:bg-[#dd1062] flex  justify-center items-center h-[47px] w-[47px]'>
                <Search className='h-[18px] text-white' />
            </button>
        </div>
    )
}

export default EXPNav