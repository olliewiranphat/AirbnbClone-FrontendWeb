import React from 'react'
import useUserAllChatsStore from '../../store/message/useUserAllChatStore'
import ChatRoomHeader from './ChatRoomHeader';

function ChatRoomContainer() {
    const { chatConversationIDData } = useUserAllChatsStore()
    console.log('chatConversationIDData', chatConversationIDData);

    return (
        <div className='flex-1 border border-[#222222] rounded-2xl'>
            <ChatRoomHeader />
        </div>
    )
}

export default ChatRoomContainer