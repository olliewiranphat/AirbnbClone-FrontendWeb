import React from 'react'
import useUserConversationStore from '../../../store/UserConversationStrore'
import ConversationHeader from '../ConversationHeader';
import MessageHistory from '../MessageHistory';
import NoMessageHistory from '../NoMessageHistory';
import MessageInputUser from '../MessageInputUser';

function AdminConversation() {

    const { userAdminChat, clearAdminConversation, setShowAdminConversation } = useUserConversationStore()
    console.log('userAdminChat', userAdminChat);
    // console.log('conversationData', userAdminChat.conversationData);
    // const { conversationData: { message } } = userAdminChat || {}
    // console.log('message', message);
    // const { adminData } = userAdminChat || {}
    // console.log('adminData', userAdminChat.adminData);

    // const hdlCloseAdminChat = () => {
    //     setShowAdminConversation(false)
    //     clearAdminConversation()
    // }

    return (
        <div className='relative flex-1 rounded-2xl border-[#222222] border flex flex-col overflow-hidden'>
            {/* <ConversationHeader data={adminData} hdlCloseChat={hdlCloseAdminChat} /> */}
            {/* {
                message ? <MessageHistory /> : <NoMessageHistory participant2="Admin" />
            } */}
            <MessageInputUser />
        </div>
    )
}

export default AdminConversation