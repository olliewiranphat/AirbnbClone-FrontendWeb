import React from 'react'
import ConversationHeader from '../ConversationHeader'
import MessageInputUser from '../MessageInputUser'
import MessageHistory from '../MessageHistory'
import NoMessageHistory from '../NoMessageHistory'
import useUserConversationStore from '../../../store/UserConversationStrore'

function HostConversation() {
    const { userHostChat, clearHostConversation, setShowHostConversation } = useUserConversationStore()
    // console.log('userHostChat', userHostChat);
    const { message } = userHostChat?.conversationData || {}
    // console.log('message', message);
    const { hostData } = userHostChat || {}
    console.log('hostData', userHostChat?.hostData);

    const hdlCloseHostChat = () => {
        setShowHostConversation(false)
        clearHostConversation()
    }
    return (
        <div className='relative flex-1 rounded-2xl border-[#222222] border flex flex-col overflow-hidden'>
            <ConversationHeader data={hostData} hdlCloseChat={hdlCloseHostChat} />
            {
                message !== undefined ? <MessageHistory /> : <NoMessageHistory participant2="Host" />
            }
            <MessageInputUser />
        </div>
    )
}

export default HostConversation