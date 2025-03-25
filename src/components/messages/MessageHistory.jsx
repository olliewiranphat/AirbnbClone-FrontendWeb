import React, { useEffect, useRef } from 'react'
import MessageIDITEM from './MessageIDITEM';
import useUserAllChatsStore from '../../store/message/useUserAllChatStore';
import { useAuth, useUser } from '@clerk/clerk-react';

function MessageHistory({ Message }) {
    const { chatConversationIDData } = useUserAllChatsStore()
    // console.log('chatConversationIDData', chatConversationIDData);

    const messagesEndRef = useRef(null);
    const chatContainerRef = useRef(null)

    useEffect(() => {
        if (chatContainerRef.current) {
            chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight
        }
    }, [chatConversationIDData.Message]);

    return (
        <div ref={chatContainerRef} className='h-[350px] overflow-y-auto min-h-[350px] flex flex-col'>
            {
                chatConversationIDData.Message?.map(item => (
                    <MessageIDITEM item={item} key={item.messageID} />))
            }
            <div ref={messagesEndRef} />
        </div >
    )
}

export default MessageHistory