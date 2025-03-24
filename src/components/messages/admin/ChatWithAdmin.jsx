import { useAuth } from '@clerk/clerk-react'
import React from 'react'
import { CircleHelp } from 'lucide-react'

function ChatWithAdmin({ setShowModal, setLoading }) {

    const { getToken } = useAuth()

    const hdlShowChatWithAdmin = async () => {
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
            // CREATE/FIND CHAT ROOM WITH ADMIN 
            onClick={hdlShowChatWithAdmin}
            className='flex gap-4 cursor-pointer'>
            <CircleHelp />
            <span className='header'>Support</span>
        </button>
    )
}

export default ChatWithAdmin