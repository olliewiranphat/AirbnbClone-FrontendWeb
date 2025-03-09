import React from 'react'

function Footer() {
    return (<>
        <div className='px-[40px] py-8 text-[#222222] flex flex-wrap border-b-[1px] border-gray-300 text-[14px]'>
            <div className='flex-1 flex flex-col gap-3 flex-wrap'>
                <span className='strong'>Support</span>
                <span className='hover:underline cursor-pointer hover:duration-300'>Help Center</span>
                <span className='hover:underline cursor-pointer  hover:duration-300'>AirCover</span>
                <span className='hover:underline cursor-pointer  hover:duration-300'>Anti-discrimination</span>
                <span className='hover:underline cursor-pointer  hover:duration-300'>Disability support</span>
                <span className='hover:underline cursor-pointer  hover:duration-300'>Cancellation options</span>
                <span className='hover:underline cursor-pointer  hover:duration-300'>Report neighborhood concern</span>
            </div>
            <div className='flex-1 flex flex-col gap-3'>
                <span className='strong'>Hosting</span>
                <span className='hover:underline cursor-pointer  hover:duration-300'>Airbnb your home</span>
                <span className='hover:underline cursor-pointer  hover:duration-300'>AirCover for Hosts</span>
                <span className='hover:underline cursor-pointer  hover:duration-300'>Hosting resources</span>
                <span className='hover:underline cursor-pointer  hover:duration-300'>Community forum</span>
                <span className='hover:underline cursor-pointer  hover:duration-300'>Hosting responsibly</span>
                <span className='hover:underline cursor-pointer  hover:duration-300'>Airbnb-friendly apartments</span>
                <span className='hover:underline cursor-pointer  hover:duration-300'>Join a free Hosting class</span>
                <span className='hover:underline cursor-pointer  hover:duration-300'>Find a co-host</span>
            </div>
            <div className='flex-1 flex flex-col gap-3'>
                <span className='strong'>Airbnb</span>
                <span className='hover:underline cursor-pointer  hover:duration-300'>Newsroom</span>
                <span className='hover:underline cursor-pointer  hover:duration-300'>New features</span>
                <span className='hover:underline cursor-pointer  hover:duration-300'>Careers</span>
                <span className='hover:underline cursor-pointer  hover:duration-300'>Investors</span>
                <span className='hover:underline cursor-pointer  hover:duration-300'>Gift cards</span>
                <span className='hover:underline cursor-pointer  hover:duration-300'>Airbnb.org emergency stays</span>
            </div>
        </div>
        <div className='px-[40px] py-6 flex justify-between text-[#222222] text-[14px]'>
            <span>Airbnb Inc</span>
        </div>
    </>
    )
}

export default Footer