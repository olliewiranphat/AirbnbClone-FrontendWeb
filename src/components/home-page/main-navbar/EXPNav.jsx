import { Search } from 'lucide-react'
import React from 'react'
import WhereDest from './home-nav/WhereDest'

function EXPNav() {
    return (
        <div className='w-[66%] relative h-[66px] mx-auto rounded-full border border-gray-300 shadow-md flex justify-between items-center flex-wrap'>
            {/* WHERE */}
            <div className='flex-1 pl-8 h-full hover:rounded-full flex items-center cursor-pointer hover:bg-[#e8e8e8] hover:duration-300 justify-between'>
                <WhereDest />
            </div>
            {/* Date */}
            <div className='flex-1 justify-between w-full py-2 pl-6 h-full hover:rounded-full flex items-center cursor-pointer hover:bg-[#e8e8e8] hover:duration-300'>
                <div className='flex flex-col'>
                    <span className='text-[12px] font-semibold'>Date</span>
                    <span className='text-[14px] text-[#6a6a6a]'>Add dates</span>
                </div>
                <div className='w-[5px] h-[30px] border-r-[1px] border-gray-300'></div>
            </div>
            {/* WHOGUEST */}
            <div className='flex-1 justify-center flex-col pl-6 h-full hover:rounded-full flex items-start cursor-pointer hover:bg-[#e8e8e8] hover:duration-300'>
                <span className='text-[12px] font-semibold'>Who</span>
                <span className='text-[14px] text-[#6a6a6a]'>Add guests</span>
            </div>
            <button className='rounded-full mr-2 bg-[#FF385C] hover:bg-[#dd1062] flex  justify-center items-center h-[47px] w-[47px]'>
                <Search className='h-[18px] text-white' />
            </button>
        </div>
    )
}

export default EXPNav