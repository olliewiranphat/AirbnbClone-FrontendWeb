import React from 'react'

function NoHaveChatLISTS() {
    return (
        <div className='h-[300px] pt-[15%]'>
            <img src="https://i.ibb.co/39srHPqY/Screenshot-2025-03-20-141902.png" alt="message-icon" className='h-[32px] mx-auto' />

            <div className='flex flex-col gap-1 justify-center px-[30px]'>
                <span className='strong text-[16px] text-center'>You don't any messages</span>
                <span className='text-[14px] text-center text-gray-500'>When you receive a new message, it will appear here.</span>
            </div>
        </div>
    )
}

export default NoHaveChatLISTS