import { Search } from 'lucide-react'
import React from 'react'

function HomeNav() {
    return (
        <div className='w-[66%] relative h-[66px] mx-auto rounded-full border border-gray-300 shadow-md flex justify-between items-center'>
            <div className='w-[30%]  pl-8 h-full hover:rounded-full flex items-center cursor-pointer hover:bg-[#e8e8e8] hover:duration-300'>
                <div className='flex items-center justify-between w-full'>
                    <div className='flex flex-col'>
                        <span className='text-[12px] font-semibold'>Where</span>
                        <input className='text-[14px] text-[#6a6a6a] bg-transparent outline-none' placeholder='Search destinations' />
                    </div>
                    <div className='w-[5px] h-[30px] border-r-[1px] border-gray-300'></div>
                </div>
            </div>
            <div className='flex-1 py-2 pl-6 h-full hover:rounded-full flex items-center cursor-pointer hover:bg-[#e8e8e8] hover:duration-300'>
                <div className='flex items-center justify-between w-full'>
                    <div className='flex flex-col'>
                        <span className='text-[12px] font-semibold'>Check in</span>
                        <span className='text-[14px] text-[#6a6a6a]'>Add dates</span>
                    </div>
                    <div className='w-[5px] h-[30px] border-r-[1px] border-gray-300'></div>
                </div>
            </div>
            <div className='flex-1 py-2 pl-6 h-full hover:rounded-full flex items-center cursor-pointer hover:bg-[#e8e8e8] hover:duration-300'>
                <div className='flex items-center justify-between w-full'>
                    <div className='flex flex-col'>
                        <span className='text-[12px] font-semibold'>Check out</span>
                        <span className='text-[14px] text-[#6a6a6a]'>Add dates</span>
                    </div>
                    <div className='w-[5px] h-[30px] border-r-[1px] border-gray-300'></div>
                </div>
            </div>
            <div className='w-[25%] pl-6 h-full hover:rounded-full flex items-center cursor-pointer hover:bg-[#e8e8e8] hover:duration-300'>
                <div className='flex flex-col'>
                    <span className='text-[12px] font-semibold'>Who</span>
                    <span className='text-[14px] text-[#6a6a6a]'>Add guests</span>
                </div>
            </div>
            <button className='rounded-full mr-2 bg-[#FF385C] hover:bg-[#dd1062] flex  justify-center items-center h-[47px] w-[47px]'>
                <Search className='h-[18px] text-white' />
            </button>
        </div>
    )
}

export default HomeNav