import { ChevronDown } from 'lucide-react'
import React, { useState } from 'react'
import RenderModal from './renderModal'
import { AnimatePresence } from 'framer-motion'
import useUserAllChatsStore from '../../store/message/useUserAllChatStore'
import MyChatITEM from './MyChatITEM'
import NoMessageHistory from './NoMessageHistory'
import NoHaveChatLISTS from './NoHaveChatLISTS'

function ChatContainer({ showModal, setShowModal, setShowChatRoom }) {
    const { myAllChats } = useUserAllChatsStore()
    console.log('myAllChats', myAllChats);
    // let myAllChats = null

    return (
        <div className='w-[60%] pt-2 h-full'>
            {
                myAllChats.length !== 0 ? myAllChats?.map(chat => (<MyChatITEM setShowChatRoom={setShowChatRoom} key={chat.conversationID} chat={chat} />))
                    : <NoHaveChatLISTS />
            }
        </div>
    )
}

export default ChatContainer