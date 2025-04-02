import { AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import RenderModal from '../../components/messages/renderModal'
import { useAuth } from '@clerk/clerk-react'
import useUserAllChatsStore from '../../store/message/useUserAllChatStore'
import ChatRoomContainer from '../../components/messages/ChatRoomContainer'
import ChatContainer from '../../components/messages/ChatContainer'
import ChatAI from '../../aichat/ChatAI'

function Messages() {

    const { actionGetMyAllChats, resetMyAllChats } = useUserAllChatsStore()
    const { getToken } = useAuth()
    /// OPEN THIS PAGE (MESSAGE) : GET ALL CHAT IN DB
    useEffect(() => {
        const fetchMyAllChats = async () => {
            const token = await getToken()
            // console.log('token >>>', token);
            actionGetMyAllChats(token)
        }
        fetchMyAllChats()
    }, [])


    const [showModal, setShowModal] = useState(false)
    const [loading, setLoading] = useState(false)
    // console.log('loading', loading);

    const [showChatRoom, setShowChatRoom] = useState(false)


    return (
        <div className='py-[50px] px-[40px] flex gap-6 h-[500px] mb-12 relative'>
            <div className='w-[30%]'>

                <div className='flex justify-between items-center py-5'>
                    <span className='text-xl strong'>Messages</span>
                    {/* <div className='flex gap-6 items-center'>
                        <Search />
                        <SlidersHorizontal />
                    </div> */}
                </div>
                <div>
                    <div className='flex gap-2 relative'>
                        <button onClick={() => setShowModal(!showModal)}
                            className={`cursor-pointer p-4 rounded-full bg-[#222222] hover:bg-black hover:duration-300 w-[110px] h-[40px] text-white flex items-center relative ${showModal ? 'bg-[#323232]' : ''}`}>
                            <span>Support</span>
                            <ChevronDown
                                className={`h-[18px] absolute right-2 top-3 ${showModal ? 'rotate-180 transition duration-300 ' : "rotate-360 transition duration-300"}`}
                            />
                        </button>
                        <button onClick={() => setShowModal(false)}
                            className='hover:border-[#222222] hover:border-2 hover:duration-300 cursor-pointer p-4 rounded-full border border-gray-300 h-[40px] text-[#222222] flex justify-center items-center'>
                            Unread
                        </button>
                    </div>


                    <AnimatePresence>
                        {showModal && <RenderModal
                            setShowModal={setShowModal}
                        // setLoading={setLoading}
                        // setShowAllConversations={setShowAllConversations}
                        // setShowHostChatLISTS={setShowHostChatLISTS}
                        // setShowAdminConversation={setShowAdminConversation}
                        />}
                    </AnimatePresence>
                </div>

                <ChatContainer setShowChatRoom={setShowChatRoom} />

            </div>
            {/* CHAT ROOM CONTAINER */}
            {
                showChatRoom && <ChatRoomContainer setShowChatRoom={setShowChatRoom} />
            }
            <ChatAI />
        </div>
    )
}


export default Messages 