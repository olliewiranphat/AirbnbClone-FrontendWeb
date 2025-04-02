import { useAuth, useUser } from '@clerk/clerk-react';
import React from 'react'
import useUserAllChatsStore from '../../store/message/useUserAllChatStore';
import { Loader } from 'lucide-react';

function MyChatITEM({ chat, setShowChatRoom }) {
    console.log('chat', chat);

    const { actionGetChatConversationID } = useUserAllChatsStore()
    const { user } = useUser()
    const { getToken } = useAuth()
    // console.log('item', item);
    const { conversationID, participant1ID, participant2ID, participant1, participant2 } = chat


    const hdlGetChatConversationID = async () => {
        try {
            const token = await getToken()
            // console.log('conversationID', conversationID);
            actionGetChatConversationID(token, conversationID)
            setShowChatRoom(true)
        } catch (error) {
            console.log("ERROR", error);
        }
    }

    return (
        <>
            {
                participant1ID === user?.id ?
                    <button onClick={hdlGetChatConversationID}
                        className='h-[40px] w-full py-6 strong text-[12px] cursor-pointer hover:shadow-lg hover:duration-300 rounded-lg flex gap-3 items-center'>
                        <div className='w-[30px] rounded-full overflow-hidden'>
                            <img src={chat?.participant2.imageUrl || "https://i.ibb.co/p6jNPQD5/Screenshot-2025-03-08-112025.png"} alt="profile" className='w-full h-full object-cover' />
                        </div>
                        <div className=''>
                            <span>{participant2.fullName || "ADMIN"}</span>
                            <span>({participant2.role})</span>
                        </div>
                    </button>
                    : <button onClick={hdlGetChatConversationID}
                        className='h-[40px] w-full py-6 strong text-[12px] cursor-pointer hover:shadow-lg hover:duration-300 rounded-lg flex gap-3 items-center'>
                        <div className='w-[30px] rounded-full overflow-hidden'>
                            <img src={chat?.participant1.imageUrl || "https://i.ibb.co/p6jNPQD5/Screenshot-2025-03-08-112025.png"} alt="profile" className='w-full h-full object-cover' />
                        </div>
                        <div className=''>
                            <span>{participant1.fullName || "ADMIN"}</span>
                            <span>({participant1.role})</span>
                        </div>
                    </button>
            }
        </>
    )
}

export default MyChatITEM