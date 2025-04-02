import { useEffect, useRef, useState } from "react";
import { Image, Send, X } from "lucide-react";
import ImagePreviewLISTS from "./ImagePreviewLISTS";
import useUserAllChatsStore from "../../store/message/useUserAllChatStore";
import { useAuth, useUser } from "@clerk/clerk-react";
import socket from "../../socket/chatSocket";
import axios from "axios";

// await axios.post(`/user/messages/send/${conversationID}`, {
//     receiverID,
//     message
//   }, {
//     headers: { Authorization: `Bearer ${userToken}` }
//   });



const MessageInputUser = () => {
    const { chatConversationIDData, actionGetChatConversationID } = useUserAllChatsStore()
    // console.log('chatConversationIDData', chatConversationIDData);
    const { user } = useUser()
    const { getToken } = useAuth()
    const receiverID = user?.id === chatConversationIDData.participant1ID ? chatConversationIDData.participant2ID : chatConversationIDData.participant1ID
    // console.log('receiverID', receiverID);

    const [text, setText] = useState("");
    const [chat, setChat] = useState([]);

    // ✅ 1. JOIN ROOM
    useEffect(() => {
        socket.connect(); // connect server
        socket.emit("joinChat", chatConversationIDData?.conversationID); // join room

        // ✅ 2. ฟังข้อความที่ถูกส่งมา
        socket.on("receiveMessage", (data) => {
            //ฝั่ง Frontend (React) มีการฟังเหตุการณ์ (socket.on()) 
            // ที่จะรับข้อความใหม่จากเซิร์ฟเวอร์และอัพเดท UI แบบ real-time
            setChat((prev) => [...prev, data]); //CHAT HISTORY
        });

        return () => {
            socket.disconnect();
            socket.off("receiveMessage");
        };
    }, [chatConversationIDData?.conversationID]);



    const [imagePreview, setImagePreview] = useState([]); //SEND IMAGE && SHOW PREVIEW
    const [isSending, setIsSending] = useState(false); // New loading state
    const fileInputRef = useRef(null);

    // const { sendMessage } = userChatStore();

    const handleImageChange = (e) => {
        // console.log('e.target.files', e.target.files);
        const file = e.target.files[0];
        // console.log('file', file); //ONE FILE
        //CHECK IMAGE TYPE
        if (!file.type.startsWith("image/")) {
            // toast.error("Please select an image file");
            alert("Please select an image file")
            return;
        }
        setImagePreview([...imagePreview, URL.createObjectURL(file)])
    };


    const handleSendMessage = async (e) => {
        e.preventDefault();
        // console.log('imagePreview', imagePreview);
        console.log('text', text);
        if (!text.trim() && imagePreview.length === 0) return; //NO TEXT NO IMAGE
        setIsSending(true); // Show loading

        const newMsg = {
            conversationID: chatConversationIDData?.conversationID,
            senderID: user?.id,
            receiverID,
            message: text
        };
        console.log('newMsg', newMsg);

        try {
            // ส่งแบบ real-time
            socket.emit("sendMessage", newMsg);

            // บันทึกลง DB
            // await axios.post(
            //     `http://localhost:8081/user/messages/send/${chatConversationIDData.conversationID}`,
            //     newMsg,
            //     { withCredentials: true }
            // );
            const token = await getToken()
            actionGetChatConversationID(token, chatConversationIDData.conversationID)
            setChat((prev) => [...prev, newMsg]);
            setText("");
        } catch (error) {
            console.error("Failed to send message:", error);
            alert("Failed to send message")
            //   toast.error(error.message || "Failed to send message");
        } finally { //END PROCESS
            setIsSending(false); // CLOSE loading
        }
    };

    return (
        <div className="bg-[#222222] px-5 py-4 w-full">
            {/* PREVIEW IMAGES BEFORE SEND */}
            {imagePreview.length > 0 && <ImagePreviewLISTS imagePreview={imagePreview} setImagePreview={setImagePreview} />}
            {/* FORM SEND MESSSAGES (TEXT & IMAGES) */}
            <form onSubmit={handleSendMessage} className="flex gap-4 flex-wrap justify-center">

                {/* TEXT MESSAGE */}
                <input
                    type="text"
                    className="w-[85%] input rounded-lg input-sm sm:input-md"
                    placeholder="Type a message..."
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    disabled={isSending}
                />

                {/* IMAGE MESSAGE */}
                <div className="flex flex-1 gap-4 items-center justify-center">
                    {/* INPUT TEXT */}
                    <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        ref={fileInputRef}
                        onChange={handleImageChange}
                        disabled={isSending}
                    />

                    {/* IMAGE BTN */}
                    <button
                        type="button"
                        className="w-[40px] h-[40px] rounded-full cursor-pointer hover:bg-[#dd1062] hover:duration-300 text-white bg-[#FF385C]"
                        onClick={() => fileInputRef.current?.click()}
                        disabled={isSending}
                    >
                        <Image className="h-[20px] m-auto" />
                    </button>

                    {/* SEND TEXT-IMAGES */}
                    <button
                        type="submit"
                        className="w-[40px] h-[40px] rounded-full cursor-pointer hover:bg-[#dd1062] hover:duration-300 text-white bg-[#FF385C] relative"
                    // disabled={(!text.trim() && imagePreview.length === 0 || isSending)}
                    >
                        {isSending ? (
                            <span className="loading loading-spinner loading-xs"></span>
                        ) : (
                            <Send className="text-white cursor-pointer h-[22px] absolute left-[6px] top-[10px]" />
                        )}
                    </button>
                </div>

            </form >
        </div >
    );
};

export default MessageInputUser;