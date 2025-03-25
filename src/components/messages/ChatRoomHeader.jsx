import { X } from 'lucide-react'
import React from 'react'

function ChatRoomHeader({ participant, setShowChatRoom }) {
    // console.log('participant', participant);



    return (
        <div className="px-5 py-4 bg-[#222222] w-">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-3 bg-[#222222]">
                    <div className='w-10 h-10 rounded-full overflow-hidden relative'>
                        <img
                            src={participant?.imageUrl || "https://i.ibb.co/p6jNPQD5/Screenshot-2025-03-08-112025.png"}
                            alt={participant?.fullName || "Participant2"}
                            className='w-11 h-11 object-cover absolute top-[-2px] left-[-2px] rounded-full'
                        />
                    </div>
                    <div className='flex flex-col'>
                        <span className="text-[14px] strong text-white">
                            {participant?.fullName || participant?.role}
                        </span>
                        <span className="text-[9px] text-white">
                            {participant?.status}
                        </span>
                    </div>
                </div>
                <button
                    onClick={() => setShowChatRoom(false)}
                    className='text-white cursor-pointer'
                >
                    <X />
                </button>
            </div>
        </div>
    )
}

export default ChatRoomHeader