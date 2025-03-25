import React from 'react'

function MessageIDITEM({ item }) {
    console.log('item', item);
    const { messageID, conversationID, isRead, message, receiverID, senderID, receiver, sender, sentAt } = item

    return (<>
        <div className='my-4 flex items-center justify-end px-4 gap-4'>
            <div className='relative w-[40%] flex justify-end'>
                <span className='text-[#222222] text-[14px]'>{message}</span>
                {
                    !isRead ? <div className='absolute bottom-[-6px] text-[6px] text-[#222222] flex gap-2'>
                        <span>isRead: false</span>
                        <span>
                            {new Date(sentAt).toLocaleTimeString("en-US", {
                                hour: "2-digit",
                                minute: "2-digit",
                                second: "2-digit",
                            })}
                        </span>
                    </div>
                        : <div className='absolute bottom-[-6px] text-[6px] text-[#222222] flex gap-2'>
                            <span>isRead: true</span>
                            <span>
                                {new Date(sentAt).toLocaleTimeString("en-US", {
                                    hour: "2-digit",
                                    minute: "2-digit",
                                    second: "2-digit",
                                })}
                            </span>
                        </div>
                }
            </div>
            <div className='w-10 h-10 rounded-full overflow-hidden relative'>
                <img
                    src={sender?.imageUrl || "https://i.ibb.co/p6jNPQD5/Screenshot-2025-03-08-112025.png"}
                    alt={"sender"}
                    className='w-full h-full object-cover absolute top-[-2px] left-[-2px] rounded-full'
                />
            </div>

        </div>

    </>
    )
}

export default MessageIDITEM