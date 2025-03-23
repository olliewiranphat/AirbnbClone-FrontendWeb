import { House } from 'lucide-react'
import React from 'react'

function ChatWithHost({ setShowModal, setLoading }) {
    const hdlShowChatWithHost = () => {
        setShowModal(false)
        // setShowHostChatLISTS(false)
        // setShowAdminConversation(false)
        setLoading(true)

        setTimeout(() => {
            setLoading(false)
            // setShowAllConversations(true)
        }, 1000)

    }

    // console.log('showHostChatLISTS', showHostChatLISTS);



    return (
        <button
            onClick={hdlShowChatWithHost}
            className='flex gap-4 cursor-pointer'>
            <House />
            <span>Hosting</span>
        </button>
    )
}

export default ChatWithHost