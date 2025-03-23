import { X } from 'lucide-react'
import React from 'react'

function ChatRoomHeader({ data, hdlCloseChat }) {

    return (
        <div className="px-5 py-4 bg-[#222222]">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-3 bg-[#222222]">
                    <div className='w-10 h-10 rounded-full overflow-hidden relative'>
                        {/* <img
                            src={data?.imageUrl || "https://i.ibb.co/p6jNPQD5/Screenshot-2025-03-08-112025.png"}
                            alt={data?.fullName || "Participant2"}
                            className='w-11 h-11 object-cover absolute top-[-2px] left-[-1px]'
                        /> */}
                    </div>
                    <div className='flex flex-col'>
                        {/* <span className="text-[14px] strong text-white">
                            {data?.fullName || data?.role}
                        </span>
                        <span className="text-[9px] text-white">
                            {data?.status}
                        </span> */}
                    </div>
                </div>
                <button
                    // onClick={hdlCloseChat}
                    className='text-white cursor-pointer'
                >
                    <X />
                </button>
            </div>
        </div>
    )
}

export default ChatRoomHeader