import { MessageSquare } from 'lucide-react'
import React from 'react'
import { useAuth } from '@clerk/clerk-react';

function ChatAll({ setShowModal, setLoading }) {
    // const { getToken } = useAuth()


    const hdlAllMyChats = () => {
        setShowModal(false)
        // setShowHostChatLISTS(false)
        // setShowAdminConversation(false)
        setLoading(true)

        setTimeout(() => {
            setLoading(false)
            // setShowAllConversations(true)
        }, 1000)
    }
    return (
        <button
            onClick={hdlAllMyChats}
            className='flex gap-4 cursor-pointer hover: '>
            <MessageSquare />
            <span>All</span>
        </button>
    )
}

export default ChatAll