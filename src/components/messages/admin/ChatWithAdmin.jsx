import { useAuth } from '@clerk/clerk-react'
import React from 'react'
import { CircleHelp } from 'lucide-react'
import useUserAllChatsStore from '../../../store/message/useUserAllChatStore'

function ChatWithAdmin({ setShowModal, setLoading }) {
    const { actionGetUserAdminChats } = useUserAllChatsStore()
    const { getToken } = useAuth()

    const hdlShowAdminChat = async () => {
        setShowModal(false)
        try {
            const token = await getToken()
            actionGetUserAdminChats(token)
        } catch (error) {
            console.log("ERROR", error);

        }
    }


    return (
        <button
            // CREATE/FIND CHAT ROOM WITH ADMIN 
            onClick={hdlShowAdminChat}
            className='flex gap-4 cursor-pointer'>
            <CircleHelp />
            <span className='header'>Support</span>
        </button>
    )
}

export default ChatWithAdmin