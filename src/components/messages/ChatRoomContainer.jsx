import React, { useEffect } from 'react'
import useUserAllChatsStore from '../../store/message/useUserAllChatStore'
import ChatRoomHeader from './ChatRoomHeader';
import MessageHistory from './MessageHistory';
import NoMessageHistory from './NoMessageHistory';
import MessageInputUser from './MessageInputUser';
import { useAuth, useUser } from '@clerk/clerk-react';

function ChatRoomContainer({ setShowChatRoom }) {
    const { chatConversationIDData, actionGetChatConversationID } = useUserAllChatsStore()
    console.log('chatConversationIDData', chatConversationIDData);
    const { Message, conversationID, participant1, participant2, participant1ID, participant2ID } = chatConversationIDData
    console.log('Message', Message);

    const { user } = useUser()







    return (
        <div className='flex-1 border border-[#222222] rounded-2xl overflow-hidden '>
            {
                user?.id === participant1ID ? <ChatRoomHeader setShowChatRoom={setShowChatRoom} participant={participant2} /> : <ChatRoomHeader setShowChatRoom={setShowChatRoom} participant={participant1} />
            }
            {
                Message?.length !== 0 ? <MessageHistory message={Message} conversationID={conversationID} />
                    : <NoMessageHistory />
            }
            <MessageInputUser />
        </div>
    )
}

export default ChatRoomContainer