import React from 'react'
import InboxLists from './all-inboxlists/InboxLists'

function ShowRoom({ showAllConversations, showHostChatLISTS }) {
    console.log('showHostChatLISTS', showHostChatLISTS);

    return (
        <div className='h-[300px] pt-[15%] bg-white'>
            {
                showAllConversations ? <InboxLists data={allChat} /> : <InboxLists />
            }
            {
                showHostChatLISTS === true && <InboxLists data={userHostChat} />
            }
        </div>
    )
}

export default ShowRoom