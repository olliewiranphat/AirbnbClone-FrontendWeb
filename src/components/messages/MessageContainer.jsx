import { ChevronDown } from 'lucide-react'
import React, { useState } from 'react'
import RenderModal from './renderModal'
import { AnimatePresence } from 'framer-motion'
import useUserAllChatsStore from '../../store/message/useUserAllChatStore'
import MyChatITEM from './MyChatITEM'
import NoMessageHistory from './NoMessageHistory'
import NoHaveChatLISTS from './NoHaveChatLISTS'

function MessageContainer({ showModal, setShowModal }) {
    const { myAllChats } = useUserAllChatsStore()
    // console.log('myAllChats', myAllChats);
    // let myAllChats = null
    const renderMyChatITEM = myAllChats?.map(item => (<MyChatITEM key={item.conversationID} item={item} />))
    return (
        <>
            {
                myAllChats ? renderMyChatITEM : <NoHaveChatLISTS />
            }
        </>
    )
}

export default MessageContainer