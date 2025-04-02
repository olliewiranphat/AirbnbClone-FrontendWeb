import { useUser } from '@clerk/clerk-react';
import React from 'react';

function MessageIDITEM({ msg }) {
    console.log('msg', msg);

    const { user } = useUser();
    const isMyMessage = msg?.sender?.clerkID === user?.id;
    const { message, sentAt, isRead, sender, receiver } = msg;



    return (
        <div
            className={`my-4 px-4 flex items-end gap-3 ${isMyMessage ? 'justify-end' : 'justify-start'
                }`}
        >
            {/* รูปโปรไฟล์ฝั่งซ้าย (ถ้าไม่ใช่ข้อความของตัวเอง) */}
            {!isMyMessage && (
                <div className="w-10 h-10 rounded-full overflow-hidden">
                    <img
                        src={
                            sender?.imageUrl ||
                            'https://i.ibb.co/p6jNPQD5/Screenshot-2025-03-08-112025.png'
                        }
                        alt="sender"
                        className="w-full h-full object-cover"
                    />
                </div>
            )}

            {/* ข้อความ */}
            <div>
                <div
                    className={`relative max-w-[300px] px-3 py-2 rounded-lg text-sm ${isMyMessage
                        ? 'bg-orange-600 text-white rounded-br-none'
                        : 'bg-gray-200 text-black rounded-bl-none'
                        }`}
                >
                    {message}

                </div>
                {!isMyMessage && (
                    <div className='text-[12px] text-gray-400'>{new Date(sentAt).toLocaleTimeString()}</div>
                )}
                {isMyMessage && (
                    <div className='text-[12px] text-gray-400 flex gap-2 justify-end'>
                        <span>{isRead ? '✔✔' : '✔'}</span>
                        <span>{new Date(sentAt).toLocaleTimeString()}</span>
                    </div>
                )}
            </div>

            {/* รูปโปรไฟล์ฝั่งขวา (ถ้าเป็นข้อความของตัวเอง) */}
            {
                isMyMessage && (
                    <div className="w-10 h-10 rounded-full overflow-hidden">
                        <img
                            src={
                                sender?.imageUrl ||
                                'https://i.ibb.co/p6jNPQD5/Screenshot-2025-03-08-112025.png'
                            }
                            alt="me"
                            className="w-full h-full object-cover"
                        />
                    </div>
                )
            }
        </div >
    );
}

export default MessageIDITEM;
