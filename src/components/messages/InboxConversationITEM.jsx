import { useAuth, useUser } from '@clerk/clerk-react';
import React from 'react'
import useUserConversationStore from '../../store/UserConversationStrore';

function InboxConversationITEM({ conversationITEM }) {
    const { setShowAdminConversation, actionGetChatHistory } = useUserConversationStore()
    console.log('conversationITEM', conversationITEM);
    const { conversationID, participant1, participant1ID, participant2, participant2ID } = conversationITEM || {}
    const { user } = useUser()
    const { getToken } = useAuth()
    // console.log(user.id);
    const hdlShowConversationID = async () => {
        // console.log('conversationID', conversationID);
        try {
            const token = await getToken()
            actionGetChatHistory(token, conversationID)
        } catch (error) {
            console.log("Find ConversationID", error);

        }
    }

    return (
        <button
            onClick={hdlShowConversationID}
            className='h-[40px] hover:rounded-lg py-4 px-2 flex items-center gap-4 cursor-pointer hover:shadow-lg hover:duration-300'>
            {
                user?.id === participant1ID ? <img src={participant2.imageUrl || "https://i.ibb.co/p6jNPQD5/Screenshot-2025-03-08-112025.png"} className='w-[20px] h-[20px] rounded-full' /> : <img src={participant1.imageUrl || "https://i.ibb.co/p6jNPQD5/Screenshot-2025-03-08-112025.png"} className='w-[20px] h-[20px] rounded-full' />
            }
            {
                user?.id === participant1ID ? <span className='text-[12px] strong'>{participant2.fullName || "Admin"} (Admin)</span> : <span className='text-[12px] strong'>{participant1.fullName || "Admin"}</span>
            }
        </button>
    )
}

export default InboxConversationITEM