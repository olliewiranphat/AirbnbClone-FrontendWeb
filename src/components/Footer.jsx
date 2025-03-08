import React from 'react'

function Footer() {
    return (<>
        <div className='px-[40px] py-8 text-[#222222] flex flex-wrap border-b-[1px] border-gray-300 text-[14px]'>
            <div className='flex-1 flex flex-col'>
                <span className='strong'>Support</span>
            </div>
            <div className='flex-1 flex flex-col'>
                <span className='strong'>Hosting</span>
            </div>
            <div className='flex-1 flex flex-col'>
                <span className='strong'>Airbnb</span>
            </div>
        </div>
        <div className='px-[40px] py-6 flex justify-between text-[#222222] text-[14px]'>
            <span>Airbnb Inc</span>
        </div>
    </>
    )
}

export default Footer