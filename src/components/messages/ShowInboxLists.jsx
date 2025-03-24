import React from 'react'
import useUserConversationStore from '../../store/UserConversationStrore'
import InboxConversationITEM from './InboxConversationITEM';

function ShowInboxLists() {
    const { userAllInboxLists } = useUserConversationStore()
    console.log('userAllInboxLists', userAllInboxLists);

    return (
        <div className='py-4'>
            {
                userAllInboxLists.map(conversationITEM => <InboxConversationITEM key={conversationITEM.conversationID} conversationITEM={conversationITEM} />)
            }
        </div>
    )
}

export default ShowInboxLists