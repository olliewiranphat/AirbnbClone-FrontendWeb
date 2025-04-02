import React from 'react'
import useUserAllChatsStore from '../../store/message/useUserAllChatStore'
import { useUser } from '@clerk/clerk-react'

function NoMessageHistory() {
    const { user } = useUser()
    const { chatConversationIDData } = useUserAllChatsStore()


    return (
        <div className=' mt-[14%] flex justify-center'>
            {
                user?.id === chatConversationIDData.participant1ID ? <span className='text-gray-400 text-center'>Welcome to Chat with {chatConversationIDData.participant2.role}!, No History</span>
                    : <span className='text-gray-400 text-center'>Welcome to Chat with {chatConversationIDData.participant1.role}!, No History</span>
            }
        </div>
    )
}

export default NoMessageHistory