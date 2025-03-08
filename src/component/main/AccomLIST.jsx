import React from 'react'
import AccomITEM from './AccomITEM'

function AccomLIST() {
    return (<>
        <div className='px-[40px] flex gap-4 flex-wrap py-4'>
            <AccomITEM />
        </div>
        <div className='flex flex-col gap-4 items-center'>
            <span className='text-[18px] text-[#222222] font-semibold'>Continue exploring rooms</span>
            <button className='rounded-lg py-3 px-6 text-white bg-[#222222] hover:bg-black hover:duration-300 cursor-pointer'>Show more</button>
        </div>
    </>
    )
}

export default AccomLIST