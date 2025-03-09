import { BedDouble, LandPlot, SlidersHorizontal, TicketPlus } from 'lucide-react'
import React from 'react'
///// Corosel !!
function MainIcons() {
    return (
        <div className='px-[40px] h-[80px] bg-white flex items-center justify-between text-[#6a6a6a] flex-wrap'>
            <div className='flex gap-12'>
                {/* COROSEL ICONS */}
                <div className=' flex flex-col gap-1 py-3  items-center border-b-2 border-transparent hover:text-black hover:border-b-2 hover:border-gray-300 hover:duration-300 cursor-pointer'>
                    <BedDouble className='w-full' />
                    <span className='text-[12px] font-semibold'>Rooms</span>
                </div>
                <div className=' flex flex-col gap-1 py-3 items-center  border-b-2 border-transparent hover:text-black hover:border-b-2 hover:border-gray-300 hover:duration-300 cursor-pointer'>
                    <TicketPlus className='w-full' />
                    <span className='text-[12px] font-semibold'>Icons</span>
                </div>
                <div className=' flex flex-col gap-1 py-3 items-center border-b-2 border-transparent hover:text-black hover:border-b-2 hover:border-gray-300 hover:duration-300 cursor-pointer'>
                    <LandPlot className='w-full' />
                    <span className='text-[12px] font-semibold'>Amazing Views</span>
                </div>
                <div className=' flex flex-col gap-1 py-3 items-center border-b-2 border-transparent hover:text-black hover:border-b-2 hover:border-gray-300 hover:duration-300 cursor-pointer'>
                    <LandPlot className='w-full' />
                    <span className='text-[12px] font-semibold'>Beachfont</span>
                </div>
                <div className=' flex flex-col gap-1 py-3 items-center border-b-2 border-transparent hover:text-black hover:border-b-2 hover:border-gray-300 hover:duration-300 cursor-pointer'>
                    <LandPlot className='w-full' />
                    <span className='text-[12px] font-semibold'>Beachfont</span>
                </div>
                <div className=' flex flex-col gap-1 py-3 items-center border-b-2 border-transparent hover:text-black hover:border-b-2 hover:border-gray-300 hover:duration-300 cursor-pointer'>
                    <LandPlot className='w-full' />
                    <span className='text-[12px] font-semibold'>Beachfont</span>
                </div>
                <div className=' flex flex-col gap-1 py-3 items-center border-b-2 border-transparent hover:text-black hover:border-b-2 hover:border-gray-300 hover:duration-300 cursor-pointer'>
                    <LandPlot className='w-full' />
                    <span className='text-[12px] font-semibold'>Beachfont</span>
                </div>
                <div className=' flex flex-col gap-1 py-3 items-center border-b-2 border-transparent hover:text-black hover:border-b-2 hover:border-gray-300 hover:duration-300 cursor-pointer'>
                    <LandPlot className='w-full' />
                    <span className='text-[12px] font-semibold'>Beachfont</span>
                </div>

            </div>

            <div className='flex items-center gap-4'>
                {/* FILTERS */}
                <div className='border border-gray-300 h-[60%] justify-center py-3 px-4 rounded-xl flex items-center gap-2'>
                    <SlidersHorizontal />
                    <span className='text-[12px]'>Filters</span>
                </div>
                {/* DISPLAY TAXES + TOGGLES */}
                <div className='border border-gray-300 h-[60%] py-3 px-4 justify-center  rounded-xl flex items-center gap-2'>
                    <span className='text-[12px]'>Display total before taxes</span>
                    {/* TOGGLE + useState */}
                </div>
            </div>
        </div >
    )
}

export default MainIcons