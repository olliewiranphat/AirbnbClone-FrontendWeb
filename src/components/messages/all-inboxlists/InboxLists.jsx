import React from 'react'
import useUserConversationStore from '../../../store/UserConversationStrore'

function InboxLists() {
    const { setShowHostConversation, userHostChat } = useUserConversationStore()
    return (
        <div>
            My All HOSTS LISTS HERE!
            <button
                onClick={() => setShowHostConversation(true, hostID)}
                className='bg-gradient-to-tl'
            >HOST1</button>
        </div>
    )
}

export default InboxLists