import React, { useEffect, useRef } from 'react'
import MessageIDITEM from './MessageIDITEM';
import useUserAllChatsStore from '../../store/message/useUserAllChatStore';
import { useAuth, useUser } from '@clerk/clerk-react';

function MessageHistory() {
    const { chatConversationIDData, actionGetChatConversationID } = useUserAllChatsStore()
    console.log('chatConversationIDData', chatConversationIDData);

    const messagesEndRef = useRef(null);
    const chatContainerRef = useRef(null)
    const { getToken } = useAuth()
    useEffect(() => {

        const fetchData = async () => {
            const token = await getToken()
            actionGetChatConversationID(token, chatConversationIDData.conversationID)
        }
        fetchData()
    }, [chatConversationIDData.Message]);

    useEffect(() => {
        if (chatContainerRef.current) {
            chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
        }
    }, [chatConversationIDData.Message]);


    return (
        <div ref={chatContainerRef} className='overflow-y-auto flex flex-col h-full'>
            {
                chatConversationIDData?.Message.length > 0 && chatConversationIDData?.Message.map(msg => (
                    <MessageIDITEM msg={msg} key={msg.messageID} />))
            }
            <div ref={messagesEndRef} />
        </div >
    )
}

export default MessageHistory