import { AnimatePresence } from 'framer-motion'
import { ChevronDown, Search, SlidersHorizontal } from 'lucide-react'
import React, { useState } from 'react'
import RenderModal from '../../components/messages/renderModal'

function Messages() {
    const [showModal, setShowModal] = useState(false)

    return (
        <div className='py-[50px] px-[40px]'>
            <div className='w-[30%]'>
                <div className='flex justify-between items-center py-5'>
                    <span className='text-xl strong'>Messages</span>
                    <div className='flex gap-6 items-center'>
                        <Search />
                        <SlidersHorizontal />
                    </div>
                </div>
                <div className='flex gap-2'>
                    <button onClick={() => setShowModal(!showModal)}
                        className={`cursor-pointer p-4 rounded-full bg-[#222222] w-[110px] h-[40px] text-white flex items-center relative ${showModal ? 'bg-[#323232]' : ''}`}>
                        <span>Support</span>
                        <ChevronDown
                            className={`h-[18px] absolute right-2 top-3 ${showModal ? 'rotate-180 transition duration-300 ' : "rotate-360 transition duration-300"}`}
                        />
                    </button>
                    <button onClick={() => setShowModal(false)}
                        className='cursor-pointer p-4 rounded-full border border-gray-300 h-[40px] text-[#222222] flex justify-center items-center'>
                        Unread
                    </button>
                </div>
                <div className='h-[300px] pt-[15%] relative'>
                    <img src="https://i.ibb.co/39srHPqY/Screenshot-2025-03-20-141902.png" alt="message-icon" className='h-[32px] mx-auto' />
                    {/* useState */}
                    <div className='flex flex-col gap-1 justify-center px-[30px]'>
                        <span className='strong text-[16px] text-center'>You don't any messages</span>
                        <span className='text-[14px] text-center text-gray-500'>When you receive a new message, it will appear here.</span>
                    </div>
                    <AnimatePresence>
                        {showModal && <RenderModal />}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    )
}


export default Messages